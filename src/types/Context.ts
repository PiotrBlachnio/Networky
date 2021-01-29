import { Request as ExpressRequest } from 'express';
import { IAccessTokenPayload } from '../services/token/interfaces/IAccessTokenPayload';

export interface Context {
    req: Request
}

interface Request extends ExpressRequest {
    user: IAccessTokenPayload;
}