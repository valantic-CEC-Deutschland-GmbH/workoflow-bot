// Redis-backed storage for tracking daily feedback (shared across PM2 cluster workers)
const Redis = require('ioredis');

const REDIS_URL = process.env.REDIS_URL || 'redis://redis:6379';
const KEY_PREFIX = 'feedback:';
const TTL_SECONDS = 2 * 24 * 60 * 60; // 2 days — auto-cleanup via Redis TTL

let redis;

function getRedis() {
    if (!redis) {
        redis = new Redis(REDIS_URL, {
            maxRetriesPerRequest: 3,
            retryStrategy(times) {
                if (times > 5) return null; // stop retrying
                return Math.min(times * 200, 2000);
            },
            lazyConnect: true
        });
        redis.on('error', (err) => {
            console.error('[FEEDBACK] Redis connection error:', err.message);
        });
        redis.on('connect', () => {
            console.log(`[FEEDBACK] Connected to Redis at ${REDIS_URL} - PID: ${process.pid}`);
        });
        redis.connect().catch(() => {}); // connect in background
    }
    return redis;
}

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function redisKey(userId) {
    return `${KEY_PREFIX}${userId}`;
}

async function getRecord(userId) {
    try {
        const data = await getRedis().get(redisKey(userId));
        return data ? JSON.parse(data) : null;
    } catch (err) {
        console.error('[FEEDBACK] Redis get error:', err.message);
        return null;
    }
}

async function setRecord(userId, record) {
    try {
        await getRedis().set(redisKey(userId), JSON.stringify(record), 'EX', TTL_SECONDS);
    } catch (err) {
        console.error('[FEEDBACK] Redis set error:', err.message);
    }
}

// Check if we should ask for feedback from this user
async function shouldAskForFeedback(userId) {
    if (!userId) return false;

    const today = getTodayDate();
    const userRecord = await getRecord(userId);

    console.log(`[FEEDBACK DEBUG] shouldAskForFeedback userId: ${userId}, date: ${today}, record:`, userRecord);

    if (!userRecord || userRecord.date !== today) {
        return true;
    }

    return !userRecord.feedbackPrompted && !userRecord.feedbackGiven;
}

// Mark that feedback was given (or dismissed) by a user
async function markFeedbackGiven(userId, rating = null) {
    if (!userId) return;

    const today = getTodayDate();
    console.log(`[FEEDBACK DEBUG] markFeedbackGiven userId: ${userId}, rating: ${rating}`);

    await setRecord(userId, {
        date: today,
        feedbackGiven: true,
        feedbackPrompted: true,
        rating: rating,
        timestamp: new Date().toISOString()
    });
}

// Mark that we've interacted with a user today (but haven't asked for feedback yet)
async function markUserInteraction(userId) {
    if (!userId) return;

    const today = getTodayDate();
    const existing = await getRecord(userId);

    if (!existing || existing.date !== today) {
        await setRecord(userId, {
            date: today,
            feedbackGiven: false,
            feedbackPrompted: false,
            firstInteraction: new Date().toISOString()
        });
    }
}

// Mark that feedback has been prompted to the user
async function markFeedbackPrompted(userId) {
    if (!userId) return;

    const today = getTodayDate();
    console.log(`[FEEDBACK DEBUG] markFeedbackPrompted userId: ${userId}`);

    const existing = await getRecord(userId);

    if (!existing || existing.date !== today) {
        await setRecord(userId, {
            date: today,
            feedbackGiven: false,
            feedbackPrompted: true,
            promptedAt: new Date().toISOString()
        });
    } else {
        existing.feedbackPrompted = true;
        existing.promptedAt = new Date().toISOString();
        await setRecord(userId, existing);
    }
}

// Get feedback status for a user
async function getFeedbackStatus(userId) {
    if (!userId) return null;
    return await getRecord(userId);
}

module.exports = {
    shouldAskForFeedback,
    markFeedbackGiven,
    markUserInteraction,
    markFeedbackPrompted,
    getFeedbackStatus
};
