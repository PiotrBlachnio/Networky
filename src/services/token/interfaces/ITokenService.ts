import { AccessToken } from '../tokens/access-token';
import { Token } from '../tokens/token';
import { IAccessTokenPayload } from './IAccessTokenPayload';
import { ITokenPayload } from './ITokenPayload';

export interface ITokenService {
    generate(token: Token): Promise<string>;

    verify(token: typeof AccessToken, stringifyToken: string): Promise<IAccessTokenPayload>;
    verify(token: typeof Token, stringifyToken: string): Promise<ITokenPayload>;
}