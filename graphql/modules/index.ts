import { AuthResolver } from './auth/AuthResolver';
import { CommentResolver } from './comment/CommentResolver';
import { PostResolver } from './post/PostResolver';
import { UserResolver } from './user/UserResolver';

export const resolvers = [
    AuthResolver,
    UserResolver,
    PostResolver,
    CommentResolver
] as [Function, ...Function[]];