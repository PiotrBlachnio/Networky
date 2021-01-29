import { ResolverData } from 'type-graphql';
import { AccessToken } from '../../services/token/tokens/AccessToken';
import { Context } from '../../types/Context';
import { UnauthorizedError } from '../errors/UnauthorizedError';
import { IAuthMiddlewareFactoryData } from './interface/IAuthMiddlewareFactoryData';

export const AuthMiddleware = ({ tokenService, userRepository }: IAuthMiddlewareFactoryData) => async ({ context }: ResolverData<Context>) => {
    try {
        const token = context.azureContext.req.headers['authorization'];

        const payload = await tokenService.verify(AccessToken, token);

        const user = await userRepository.findUnique({ where: { id: payload.id }});
        if(!user) throw new UnauthorizedError();
        
        context.user = payload;

        return true;
    } catch(error) {
        throw new UnauthorizedError();
    }
}