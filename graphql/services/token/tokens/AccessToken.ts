import { Config } from '../../../common/config';
import { IAccessTokenPayload } from '../interfaces/IAccessTokenPayload';
import { Token } from './Token';

export class AccessToken extends Token {
    public static readonly secret: string = Config.AUTH.ACCESS_TOKEN_SECRET;
    public static readonly expiresIn: string = '7d';

    constructor(public readonly payload: IAccessTokenPayload) {
        super();
    }
}