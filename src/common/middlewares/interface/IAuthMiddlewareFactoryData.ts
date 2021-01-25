import { ITokenService } from '../../../services/token/interfaces/ITokenService';

export interface IAuthMiddlewareFactoryData {
    tokenService: ITokenService
}