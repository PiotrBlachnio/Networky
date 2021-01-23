import { App } from './app';
import { Dependency } from './dependency';
import { Error } from './error';

export const Constants = {
    APP: App,
    DEPENDENCY: Dependency,
    ERROR: Error
} as const;