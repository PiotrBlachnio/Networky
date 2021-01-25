import { ResolverData, UnauthorizedError } from 'type-graphql';
import { AccessToken } from '../../services/token/tokens/AccessToken';
import { IAuthMiddlewareFactoryData } from './interface/IAuthMiddlewareFactoryData';

export const AuthMiddleware = ({ tokenService }: IAuthMiddlewareFactoryData) => async ({ context }: ResolverData<any>) => {
    try {
        const token = context.req.headers['authorization'];
        
        const payload = await tokenService.verify(AccessToken, token);

        context.req.user = payload;
    } catch(error) {
        throw new UnauthorizedError();
    }
}