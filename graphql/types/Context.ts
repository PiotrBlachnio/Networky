import { IAccessTokenPayload } from '../services/token/interfaces/IAccessTokenPayload';
import { Context as AzureContext } from '@azure/functions';

export interface Context {
    azureContext: AzureContext;
    user: IAccessTokenPayload;
}