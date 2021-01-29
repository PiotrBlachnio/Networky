import { AuthResolver } from './auth/AuthResolver';
import { UserResolver } from './user/UserResolver';

export const resolvers = [
    AuthResolver,
    UserResolver
] as [Function, ...Function[]];