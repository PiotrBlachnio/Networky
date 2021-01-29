import { App } from './app';
import { Dependency } from './dependency';
import { Error } from './error';
import { User } from './user';

export const Constants = {
    APP: App,
    DEPENDENCY: Dependency,
    ERROR: Error,
    USER: User
} as const;