import { config } from 'dotenv';

config();

export default {
    PORT: process.env.APP_PORT! || process.env.PORT
} as const;