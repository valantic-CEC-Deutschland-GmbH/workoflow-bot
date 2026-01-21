/**
 * Translations module for multi-language support
 * Supports: English (en), German (de)
 * Language is detected from MS Teams client locale (context.activity.locale)
 */

const translations = {
    en: {
        disclaimer: '\n\n---\n_ℹ️ This bot is AI-powered and may make mistakes. Please verify the responses._',
        thinkingPhrases: [
            '🔍 Just a moment, let me think...',
            '🔍 Taking a closer look...',
            '🔍 Let me consider this...',
            '🔍 Processing...',
            '🔍 Working on your request...',
            '🔍 Hmm, interesting question...',
            '🔍 Analyzing this for you...',
            '🔍 One moment please...',
            '🔍 Checking this for you...',
            '🔍 Your request is being processed...',
            '🔍 Researching...',
            '🔍 Be right with you...',
            '🔍 Working on it...',
            '🔍 Looking into this...',
            '🔍 Being analyzed...',
            '🔍 Taking care of this...',
            '🔍 Just a small moment...',
            '🔍 On it...',
            '🔍 Your message is being processed...',
            '🔍 Searching for the right answer...',
            '🔍 Almost got something for you...',
            '🔍 Processing your request...',
            '🔍 Quick analysis running...',
            '🔍 Fetching the information...',
            '🔍 Data is being retrieved...',
            '🔍 Putting this together...',
            '🔍 Processing in progress...',
            '🔍 Preparing the answer...',
            '🔍 Checking this right now...',
            '🔍 Looking it up...',
            '🔍 Request in progress...',
            '🔍 Finding the solution...',
            '🔍 Just a moment of patience...',
            '🔍 Searching through the data...',
            '🔍 Analysis being performed...',
            '🔍 Figuring this out...',
            '🔍 Processing started...',
            '🔍 Gathering the information...',
            '🔍 Your question is being answered...',
            '🔍 Checking it out...',
            '🔍 Looking it up...',
            '🔍 Searching for the best solution...',
            '🔍 Request is being analyzed...',
            '🔍 Working on the answer...',
            '🔍 Being checked...',
            '🔍 Looking at the data...',
            '🔍 Processing started...',
            '🔍 Researching for you...',
            '🔍 Answer is being prepared...',
            '🔍 Sifting through the information...',
            '🔍 Data is being analyzed...',
            '🔍 Finding the answer...',
            '🔍 Being compiled...',
            '🔍 Checking the details...',
            '🔍 Request received...',
            '🔍 Searching for the answer...',
            '🔍 Analyzing this right now...',
            '🔍 Processing underway...',
            '🔍 Getting the info...',
            '🔍 Being researched...',
            '🔍 Going through this...',
            '🔍 Data is being collected...',
            '🔍 Working on a solution...',
            '🔍 Request is being checked...',
            '🔍 Searching for the right data...',
            '🔍 Analysis in progress...',
            '🔍 Finding the answer...',
            '🔍 Being processed...',
            '🔍 Searching through sources...',
            '🔍 Information is being retrieved...',
            '🔍 Putting together the answer...',
            '🔍 Your request is running...',
            '🔍 Checking everything...',
            '🔍 Processing active...',
            '🔍 Finding the best results...',
            '🔍 Being worked through...',
            '🔍 Looking at the details...',
            '🔍 Data in processing...',
            '🔍 Looking for solutions...',
            '🔍 Analysis being prepared...',
            '🔍 Getting the relevant data...',
            '🔍 Processing initiated...',
            '🔍 Researching the answer...',
            '🔍 Being analyzed and checked...',
            '🔍 Collecting the relevant info...',
            '🔍 Your question is being checked...',
            '🔍 Working on the details...',
            '🔍 Request is being executed...',
            '🔍 Searching for the optimal answer...',
            '🔍 Processing in progress...',
            '🔍 Checking the information...',
            '🔍 Data is being processed...',
            '🔍 Looking at everything...',
            '🔍 Request under analysis...',
            '🔍 Preparing everything...',
            '🔍 Being searched...',
            '🔍 Finding the right solution...',
            '🔍 Processing continues...',
            '🔍 Checking the request...',
            '🔍 Data is being searched...',
            '🔍 Finding the information...',
            '🔍 Analysis started...',
            '🔍 Getting the answer...',
            '🔍 Processing continues...',
            '🔍 Sifting through data...',
            '🔍 Being evaluated...',
            '🔍 Searching for results...',
            '🔍 Request is being answered...'
        ],
        feedback: {
            prompt: 'How is Workoflow doing this session? (optional)',
            bad: '😞 Bad',
            fine: '😐 Fine',
            good: '😊 Good',
            dismiss: 'Dismiss',
            thankYou: 'Thank you for your feedback! 🙏'
        },
        errors: {
            noResponse: 'Sorry, I could not get a response from the agent.',
            fileAttachment: 'I received a response but cannot send file attachments directly. Please let me know if you need the information in a different format.',
            communicationError: 'There was an error communicating with the AI agent.\n\n',
            timeout: '⏱️ **Request Timeout**: Your request took more than 60 seconds and was automatically cancelled.\nWe are working on improving this limitation.\n\n',
            rateLimit: '⚠️ **Rate Limit**: The allowed token limit per minute has been reached (check status line value RLT).\nPlease wait a moment before trying again.\n\n',
            technical: '🔧 **Technical Issue**: The workflow behind your request may have failed.\nThis could be a temporary issue with the backend services.\n\n',
            troubleshooting: 'Possible causes:\n\n• Requests exceeding 60 seconds are cancelled due to proxy timeout\n\n• Rate limit reached (too many requests per minute)\n\n• Technical issue with the workflow processing\n\nPlease try again with a simpler request or contact support if the issue persists.'
        }
    },
    de: {
        disclaimer: '\n\n---\n_ℹ️ Dieser Bot ist eine KI und kann Fehler machen. Bitte überprüfe die Antworten._',
        thinkingPhrases: [
            '🔍 Moment, ich denke nach...',
            '🔍 Ich schaue mir das genauer an...',
            '🔍 Lass mich kurz überlegen...',
            '🔍 Wird bearbeitet...',
            '🔍 Ich arbeite an deiner Anfrage...',
            '🔍 Hmm, interessante Frage...',
            '🔍 Ich analysiere das für dich...',
            '🔍 Einen Moment bitte...',
            '🔍 Ich prüfe das für dich...',
            '🔍 Deine Anfrage wird verarbeitet...',
            '🔍 Ich recherchiere...',
            '🔍 Bin gleich bei dir...',
            '🔍 Ich arbeite daran...',
            '🔍 Das schaue ich mir an...',
            '🔍 Wird analysiert...',
            '🔍 Ich kümmere mich darum...',
            '🔍 Einen kleinen Moment...',
            '🔍 Ich bin dran...',
            '🔍 Deine Nachricht wird bearbeitet...',
            '🔍 Ich suche die passende Antwort...',
            '🔍 Gleich habe ich etwas für dich...',
            '🔍 Ich verarbeite deine Anfrage...',
            '🔍 Kurze Analyse läuft...',
            '🔍 Ich hole die Informationen...',
            '🔍 Daten werden abgerufen...',
            '🔍 Ich stelle das zusammen...',
            '🔍 Verarbeitung läuft...',
            '🔍 Ich bereite die Antwort vor...',
            '🔍 Das prüfe ich gerade...',
            '🔍 Ich schaue nach...',
            '🔍 Anfrage in Bearbeitung...',
            '🔍 Ich ermittle die Lösung...',
            '🔍 Kurz Geduld bitte...',
            '🔍 Ich durchsuche die Daten...',
            '🔍 Analyse wird durchgeführt...',
            '🔍 Ich finde das heraus...',
            '🔍 Bearbeitung startet...',
            '🔍 Ich sammle die Informationen...',
            '🔍 Deine Frage wird beantwortet...',
            '🔍 Ich checke das...',
            '🔍 Wird nachgeschlagen...',
            '🔍 Ich suche die beste Lösung...',
            '🔍 Anfrage wird analysiert...',
            '🔍 Ich arbeite an der Antwort...',
            '🔍 Das wird geprüft...',
            '🔍 Ich schaue in die Daten...',
            '🔍 Verarbeitung gestartet...',
            '🔍 Ich recherchiere für dich...',
            '🔍 Antwort wird vorbereitet...',
            '🔍 Ich durchforste die Informationen...',
            '🔍 Daten werden analysiert...',
            '🔍 Ich ermittle die Antwort...',
            '🔍 Wird zusammengestellt...',
            '🔍 Ich prüfe die Details...',
            '🔍 Anfrage eingegangen...',
            '🔍 Ich suche die Antwort...',
            '🔍 Das analysiere ich gerade...',
            '🔍 Bearbeitung in Gange...',
            '🔍 Ich hole mir die Infos...',
            '🔍 Wird recherchiert...',
            '🔍 Ich schaue das durch...',
            '🔍 Daten werden gesammelt...',
            '🔍 Ich arbeite an einer Lösung...',
            '🔍 Anfrage wird geprüft...',
            '🔍 Ich suche die passenden Daten...',
            '🔍 Analyse in Bearbeitung...',
            '🔍 Ich finde die Antwort...',
            '🔍 Wird verarbeitet...',
            '🔍 Ich durchsuche die Quellen...',
            '🔍 Informationen werden abgerufen...',
            '🔍 Ich stelle die Antwort zusammen...',
            '🔍 Deine Anfrage läuft...',
            '🔍 Ich prüfe alles durch...',
            '🔍 Bearbeitung aktiv...',
            '🔍 Ich ermittle die besten Ergebnisse...',
            '🔍 Wird durchgearbeitet...',
            '🔍 Ich schaue mir die Details an...',
            '🔍 Daten in Verarbeitung...',
            '🔍 Ich suche nach Lösungen...',
            '🔍 Analyse wird vorbereitet...',
            '🔍 Ich hole die relevanten Daten...',
            '🔍 Bearbeitung eingeleitet...',
            '🔍 Ich recherchiere die Antwort...',
            '🔍 Wird analysiert und geprüft...',
            '🔍 Ich sammle die relevanten Infos...',
            '🔍 Deine Frage wird geprüft...',
            '🔍 Ich arbeite an den Details...',
            '🔍 Anfrage wird durchgeführt...',
            '🔍 Ich suche die optimale Antwort...',
            '🔍 Verarbeitung im Gange...',
            '🔍 Ich checke die Informationen...',
            '🔍 Daten werden verarbeitet...',
            '🔍 Ich schaue mir alles an...',
            '🔍 Anfrage in Analyse...',
            '🔍 Ich bereite alles vor...',
            '🔍 Wird durchsucht...',
            '🔍 Ich finde die passende Lösung...',
            '🔍 Bearbeitung wird fortgesetzt...',
            '🔍 Ich prüfe die Anfrage...',
            '🔍 Daten werden durchsucht...',
            '🔍 Ich ermittle die Informationen...',
            '🔍 Analyse gestartet...',
            '🔍 Ich hole die Antwort...',
            '🔍 Bearbeitung läuft weiter...',
            '🔍 Ich durchforste die Daten...',
            '🔍 Wird ausgewertet...',
            '🔍 Ich suche die Ergebnisse...',
            '🔍 Anfrage wird beantwortet...'
        ],
        feedback: {
            prompt: 'Wie macht sich Workoflow heute? (optional)',
            bad: '😞 Schlecht',
            fine: '😐 Okay',
            good: '😊 Gut',
            dismiss: 'Schließen',
            thankYou: 'Danke für dein Feedback! 🙏'
        },
        errors: {
            noResponse: 'Entschuldigung, ich konnte keine Antwort vom Agenten erhalten.',
            fileAttachment: 'Ich habe eine Antwort erhalten, kann aber keine Dateianhänge direkt senden. Bitte teile mir mit, wenn du die Informationen in einem anderen Format benötigst.',
            communicationError: 'Bei der Kommunikation mit dem KI-Agenten ist ein Fehler aufgetreten.\n\n',
            timeout: '⏱️ **Zeitüberschreitung**: Deine Anfrage hat länger als 60 Sekunden gedauert und wurde automatisch abgebrochen.\nWir arbeiten daran, diese Einschränkung zu verbessern.\n\n',
            rateLimit: '⚠️ **Rate Limit**: Das erlaubte Token-Limit pro Minute wurde erreicht (siehe Statuszeile RLT).\nBitte warte einen Moment, bevor du es erneut versuchst.\n\n',
            technical: '🔧 **Technisches Problem**: Der Workflow hinter deiner Anfrage ist möglicherweise fehlgeschlagen.\nDies könnte ein vorübergehendes Problem mit den Backend-Diensten sein.\n\n',
            troubleshooting: 'Mögliche Ursachen:\n\n• Anfragen, die länger als 60 Sekunden dauern, werden aufgrund des Proxy-Timeouts abgebrochen\n\n• Rate Limit erreicht (zu viele Anfragen pro Minute)\n\n• Technisches Problem bei der Workflow-Verarbeitung\n\nBitte versuche es erneut mit einer einfacheren Anfrage oder kontaktiere den Support, wenn das Problem weiterhin besteht.'
        }
    }
};

/**
 * Get language code from MS Teams locale
 * @param {string} locale - The locale from context.activity.locale (e.g., "en-US", "de-DE")
 * @returns {string} - Language code ('en' or 'de')
 */
function getLanguage(locale) {
    if (!locale) return 'en'; // Default to English
    const lang = locale.toLowerCase().substring(0, 2);
    return translations[lang] ? lang : 'en'; // Fallback to English if language not supported
}

/**
 * Get translation strings for a given locale
 * @param {string} locale - The locale from context.activity.locale
 * @returns {object} - Translation object for the detected language
 */
function getTranslations(locale) {
    const lang = getLanguage(locale);
    return translations[lang];
}

/**
 * Get a random thinking phrase for the given locale
 * @param {string} locale - The locale from context.activity.locale
 * @returns {string} - Random thinking phrase in the appropriate language
 */
function getRandomThinkingPhrase(locale) {
    const t = getTranslations(locale);
    return t.thinkingPhrases[Math.floor(Math.random() * t.thinkingPhrases.length)];
}

/**
 * Get the AI disclaimer for the given locale
 * @param {string} locale - The locale from context.activity.locale
 * @returns {string} - AI disclaimer in the appropriate language
 */
function getDisclaimer(locale) {
    return getTranslations(locale).disclaimer;
}

module.exports = {
    translations,
    getLanguage,
    getTranslations,
    getRandomThinkingPhrase,
    getDisclaimer
};
