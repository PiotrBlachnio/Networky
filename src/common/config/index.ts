import { config } from 'dotenv';

config();

export const Config = {
    APP: {
        MODE: process.env.APP_MODE!,
        PORT: process.env.APP_PORT! || process.env.PORT!
    },
    DATABASE: {
        URL: process.env.DATABASE_URL!
    }
} as const;