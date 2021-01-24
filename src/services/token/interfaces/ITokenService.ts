import { AccessToken } from '../tokens/AccessToken';
import { Token } from '../tokens/Token';
import { IAccessTokenPayload } from './IAccessTokenPayload';
import { ITokenPayload } from './ITokenPayload';

export interface ITokenService {
    generate(token: Token): Promise<string>;

    verify(token: typeof AccessToken, stringifyToken: string): Promise<IAccessTokenPayload>;
    verify(token: typeof Token, stringifyToken: string): Promise<ITokenPayload>;
}