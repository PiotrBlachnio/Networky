import { ITokenService } from '../../../services/token/interfaces/ITokenService';
import { prisma } from '../../utils/Prisma';

export interface IAuthMiddlewareFactoryData {
    tokenService: ITokenService;
    userRepository: typeof prisma.user;
}