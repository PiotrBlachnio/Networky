import { object, string, number } from 'joi';
import { Config } from '../config';
import { Logger } from './Logger';

export class ConfigValidator {
    public static async validate(config: typeof Config): Promise<void> {
        try {

        } catch(error) {

        }
    }

    private static _getValidationSchema() {
        return object({
            APP: {
                MODE: string().valid(Constants.APP_MODE.DEV, Constants.APP_MODE.PROD, Constants.APP_MODE.TEST),
                PORT: number().min(1).max(65353)
            },
            DATABASE: {
                URL: string().required()
            },
        });
    }

    private static _printErrorMessageAndExit(message: string): void {
        Logger.error(`Environmental variable error - ${message}`);
        process.exit(1);
    }
}