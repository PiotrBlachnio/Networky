import { Container } from 'inversify';
import { AuthResolver } from '../../modules/auth/AuthResolver';
import { AuthService } from '../../modules/auth/AuthService';
import { Constants } from '../constants';
import { prisma } from './Prisma';

const container = new Container();

container.bind<typeof prisma.user>(Constants.DEPENDENCY.USER_REPOSITORY).toConstantValue(prisma.user);

container.bind<AuthService>(Constants.DEPENDENCY.AUTH_SERVICE).to(AuthService);
container.bind<AuthResolver>(AuthResolver).to(AuthResolver).inSingletonScope();

export { container };