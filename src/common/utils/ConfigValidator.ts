import { object, string, number } from 'joi';
import { Config } from '../config';
import { Constants } from '../constants';
import { Logger } from './Logger';

export class ConfigValidator {
    public static async validate(config: typeof Config): Promise<void> {
        try {
            const schema = this._getValidationSchema();
            await schema.validateAsync(config);
        } catch(error) {
            this._printErrorMessageAndExit(error.message);
        }
    }

    private static _getValidationSchema() {
        return object({
            APP: {
                MODE: string().valid(Constants.APP.MODE.DEV, Constants.APP.MODE.PROD, Constants.APP.MODE.TEST),
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