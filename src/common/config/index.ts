import { config } from 'dotenv';

config();

export const Config = {
    APP: {
        MODE: process.env.APP_MODE!,
        PORT: process.env.APP_PORT! || process.env.PORT!
    },
    AUTH: {
        ACCESS_TOKEN_SECRET: process.env.AUTH_ACCESS_TOKEN_SECRET!
    },
    DATABASE: {
        URL: process.env.DATABASE_URL!
    }
} as const;