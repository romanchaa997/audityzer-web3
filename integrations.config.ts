/**
 * Integrations Configuration
 * Centralized configuration for all external service integrations
 */

export interface IntegrationConfig {
  enabled: boolean;
  apiKey?: string;
  apiSecret?: string;
  baseUrl?: string;
  webhookUrl?: string;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

export const integrationsConfig = {
  gmail: {
    enabled: process.env.GMAIL_ENABLED === 'true',
    apiKey: process.env.GMAIL_API_KEY,
    baseUrl: 'https://www.googleapis.com/gmail/v1',
    timeout: 30000,
    retryAttempts: 3,
  },
  github: {
    enabled: process.env.GITHUB_ENABLED === 'true',
    apiKey: process.env.GITHUB_TOKEN,
    baseUrl: 'https://api.github.com',
    timeout: 30000,
  },
  slack: {
    enabled: process.env.SLACK_ENABLED === 'true',
    apiKey: process.env.SLACK_BOT_TOKEN,
    apiSecret: process.env.SLACK_SIGNING_SECRET,
    baseUrl: 'https://slack.com/api',
    webhookUrl: process.env.SLACK_WEBHOOK_URL,
  },
  calendar: {
    enabled: process.env.CALENDAR_ENABLED === 'true',
    apiKey: process.env.CALENDAR_API_KEY,
    baseUrl: 'https://www.googleapis.com/calendar/v3',
  },
  zapier: {
    enabled: process.env.ZAPIER_ENABLED === 'true',
    apiKey: process.env.ZAPIER_API_KEY,
    baseUrl: 'https://hooks.zapier.com',
    webhookUrl: process.env.ZAPIER_WEBHOOK_URL,
  },
  telegram: {
    enabled: process.env.TELEGRAM_ENABLED === 'true',
    apiKey: process.env.TELEGRAM_BOT_TOKEN,
    baseUrl: 'https://api.telegram.org',
    webhookUrl: process.env.TELEGRAM_WEBHOOK_URL,
  },
  monobank: {
    enabled: process.env.MONOBANK_ENABLED === 'true',
    apiKey: process.env.MONOBANK_API_TOKEN,
    baseUrl: 'https://api.monobank.ua',
  },
};

export default integrationsConfig;
