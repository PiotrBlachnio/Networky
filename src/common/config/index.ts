import AppConfig from './app';
import DatabaseConfig from './database';

export const Config = {
    APP: AppConfig,
    DATABASE: DatabaseConfig
} as const;