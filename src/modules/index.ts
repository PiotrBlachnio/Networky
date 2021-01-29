import { AuthResolver } from './auth/AuthResolver';
import { PostResolver } from './post/PostResolver';
import { UserResolver } from './user/UserResolver';

export const resolvers = [
    AuthResolver,
    UserResolver,
    PostResolver
] as [Function, ...Function[]];