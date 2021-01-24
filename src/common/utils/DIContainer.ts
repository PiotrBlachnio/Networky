import { Container } from 'inversify';
import { AuthResolver } from '../../modules/auth/AuthResolver';
import { AuthService } from '../../modules/auth/AuthService';
import { ITokenService } from '../../services/token/interfaces/ITokenService';
import { JwtTokenService } from '../../services/token/services/JwtService';
import { Constants } from '../constants';
import { prisma } from './Prisma';

const container = new Container();

container.bind<typeof prisma.user>(Constants.DEPENDENCY.USER_REPOSITORY).toConstantValue(prisma.user);

container.bind<AuthService>(Constants.DEPENDENCY.AUTH_SERVICE).to(AuthService);
container.bind<AuthResolver>(AuthResolver).to(AuthResolver).inSingletonScope();

container.bind<ITokenService>(Constants.DEPENDENCY.TOKEN_SERVICE).to(JwtTokenService);

export { container };