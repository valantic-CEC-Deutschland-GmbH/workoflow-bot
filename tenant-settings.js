/**
 * Tenant Settings Client for Microsoft Teams Bot
 *
 * This module fetches tenant-specific settings (webhook URL, API keys)
 * from the Workoflow platform API, enabling true multi-tenancy where
 * each tenant can have its own webhook configuration.
 */

const axios = require('axios');

// In-memory cache: Map<tenantId, { data, fetchedAt }>
const settingsCache = new Map();

// Default cache TTL: 5 minutes
const DEFAULT_CACHE_TTL_MS = 300000;

/**
 * Get cache TTL from environment or use default.
 * @returns {number} TTL in milliseconds
 */
function getCacheTtl() {
    const envTtl = process.env.TENANT_SETTINGS_CACHE_TTL_MS;
    if (envTtl) {
        const parsed = parseInt(envTtl, 10);
        if (!isNaN(parsed) && parsed > 0) {
            return parsed;
        }
    }
    return DEFAULT_CACHE_TTL_MS;
}

/**
 * Fetch tenant settings from the Workoflow API.
 *
 * @param {string} tenantId - The tenant/organisation UUID
 * @returns {Promise<Object>} - Tenant settings object
 */
async function getTenantSettings(tenantId) {
    if (!tenantId) {
        throw new Error('tenantId is required');
    }

    // Check cache
    const cached = settingsCache.get(tenantId);
    if (cached) {
        const age = Date.now() - cached.fetchedAt;
        if (age < getCacheTtl()) {
            console.log(`[Tenant Settings] Cache hit for tenant ${tenantId} (age: ${Math.round(age / 1000)}s)`);
            return cached.data;
        }
        console.log(`[Tenant Settings] Cache expired for tenant ${tenantId}`);
    }

    const baseUrl = process.env.MAGIC_LINK_DOMAIN || 'http://localhost:3979';
    const apiUser = process.env.WORKOFLOW_API_USER;
    const apiPassword = process.env.WORKOFLOW_API_PASSWORD;

    if (!apiUser || !apiPassword) {
        throw new Error('WORKOFLOW_API_USER and WORKOFLOW_API_PASSWORD must be set');
    }

    const url = `${baseUrl}/api/tenant/${tenantId}/settings`;

    console.log(`[Tenant Settings] Fetching settings for tenant ${tenantId} from ${baseUrl}`);

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${apiUser}:${apiPassword}`).toString('base64'),
                'Accept': 'application/json',
            },
            timeout: 10000,
        });

        if (response.data && response.data.success) {
            // Cache the result
            settingsCache.set(tenantId, {
                data: response.data,
                fetchedAt: Date.now(),
            });

            console.log(`[Tenant Settings] Fetched and cached settings for tenant ${tenantId} (complete: ${response.data.complete})`);
            return response.data;
        }

        throw new Error(response.data?.error || 'Unknown API error');
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                throw new Error(`Tenant ${tenantId} not found`);
            }
            if (error.response.status === 401) {
                throw new Error('Authentication failed. Check WORKOFLOW_API_USER and WORKOFLOW_API_PASSWORD.');
            }
            throw new Error(`API error ${error.response.status}: ${error.response.data?.error || error.message}`);
        }
        if (error.request) {
            throw new Error(`Unable to reach Workoflow server at ${baseUrl}. Check MAGIC_LINK_DOMAIN.`);
        }
        throw error;
    }
}

/**
 * Convenience function: get the webhook URL for a tenant,
 * with fallback to WORKOFLOW_N8N_WEBHOOK_URL env var.
 *
 * @param {string} tenantId - The tenant/organisation UUID
 * @returns {Promise<string>} - The webhook URL
 * @throws {Error} If no webhook URL is available
 */
async function getWebhookUrl(tenantId) {
    const fallbackUrl = process.env.WORKOFLOW_N8N_WEBHOOK_URL || null;

    try {
        const result = await getTenantSettings(tenantId);
        if (result.settings && result.settings.webhook_url) {
            return result.settings.webhook_url;
        }
    } catch (error) {
        console.warn(`[Tenant Settings] Failed to fetch tenant settings: ${error.message}`);
    }

    if (fallbackUrl) {
        console.log(`[Tenant Settings] Using fallback webhook URL from WORKOFLOW_N8N_WEBHOOK_URL`);
        return fallbackUrl;
    }

    throw new Error('No webhook URL available. Configure tenant settings or set WORKOFLOW_N8N_WEBHOOK_URL as fallback.');
}

/**
 * Invalidate cached settings for a specific tenant.
 * @param {string} tenantId
 */
function invalidateCache(tenantId) {
    settingsCache.delete(tenantId);
    console.log(`[Tenant Settings] Cache invalidated for tenant ${tenantId}`);
}

/**
 * Clear all cached tenant settings.
 */
function clearCache() {
    settingsCache.clear();
    console.log('[Tenant Settings] Cache cleared');
}

module.exports = {
    getTenantSettings,
    getWebhookUrl,
    invalidateCache,
    clearCache,
};
