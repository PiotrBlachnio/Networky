import { blue, green, red } from 'chalk';

export class Logger {
    public static info(message: string): void {
        this._log(message, green('INFO'));
    }

    public static error(message: string): void {
        this._log(message, red('ERROR'));
    }

    private static _log(message: string, type: string): void {
        console.log(`[${blue(new Date().toLocaleString())}] ${type}: ${message}`);
    }
}