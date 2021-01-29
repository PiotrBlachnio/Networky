import { ITokenPayload } from '../interfaces/ITokenPayload';

export class Token {
    public static readonly secret: string;
    public static readonly expiresIn: string;
    public readonly payload: ITokenPayload;
}