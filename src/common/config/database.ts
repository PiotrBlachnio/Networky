import { config } from 'dotenv';

config();

export default {
    URL: process.env.DATABASE_URL!
} as const;