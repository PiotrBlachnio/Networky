import { injectable } from 'inversify';
import { verify, sign } from 'jsonwebtoken';
import { promisify } from 'util';
import { ITokenPayload } from '../interfaces/ITokenPayload';
import { ITokenService } from '../interfaces/ITokenService';
import { Token } from '../tokens/Token';

@injectable()
export class JwtTokenService implements ITokenService {
    private readonly _verifyAsync = promisify<string, string, object | undefined>(verify);

    public async generate(token: Token): Promise<string> {
        const constructor = token.constructor as typeof Token;
        return sign(token.payload, constructor.secret, { expiresIn: constructor.expiresIn });
    }

    public async verify(token: typeof Token, stringifyToken: string): Promise<ITokenPayload> {
        const payload = await this._verifyAsync(stringifyToken, token.secret);
        return payload as ITokenPayload;
    }
}