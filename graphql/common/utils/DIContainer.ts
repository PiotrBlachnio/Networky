import { Container } from 'inversify';
import { AuthResolver } from '../../modules/auth/AuthResolver';
import { AuthService } from '../../modules/auth/AuthService';
import { CommentResolver } from '../../modules/comment/CommentResolver';
import { CommentService } from '../../modules/comment/CommentService';
import { PostResolver } from '../../modules/post/PostResolver';
import { PostService } from '../../modules/post/PostService';
import { UserResolver } from '../../modules/user/UserResolver';
import { UserService } from '../../modules/user/UserService';
import { ITokenService } from '../../services/token/interfaces/ITokenService';
import { JwtTokenService } from '../../services/token/services/JwtService';
import { Constants } from '../constants';
import { prisma } from './Prisma';

const container = new Container();

container.bind<typeof prisma.user>(Constants.DEPENDENCY.USER_REPOSITORY).toConstantValue(prisma.user);
container.bind<typeof prisma.post>(Constants.DEPENDENCY.POST_REPOSITORY).toConstantValue(prisma.post);
container.bind<typeof prisma.like>(Constants.DEPENDENCY.LIKE_REPOSITORY).toConstantValue(prisma.like);
container.bind<typeof prisma.comment>(Constants.DEPENDENCY.COMMENT_REPOSITORY).toConstantValue(prisma.comment);

container.bind<AuthService>(Constants.DEPENDENCY.AUTH_SERVICE).to(AuthService);
container.bind<AuthResolver>(AuthResolver).to(AuthResolver).inSingletonScope();

container.bind<UserService>(Constants.DEPENDENCY.USER_SERVICE).to(UserService);
container.bind<UserResolver>(UserResolver).to(UserResolver);

container.bind<PostService>(Constants.DEPENDENCY.POST_SERVICE).to(PostService);
container.bind<PostResolver>(PostResolver).to(PostResolver).inSingletonScope();

container.bind<CommentService>(Constants.DEPENDENCY.COMMENT_SERVICE).to(CommentService);
container.bind<CommentResolver>(CommentResolver).to(CommentResolver).inSingletonScope();

container.bind<ITokenService>(Constants.DEPENDENCY.TOKEN_SERVICE).to(JwtTokenService);

export { container };