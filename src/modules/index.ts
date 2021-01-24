import { Constants } from '../common/constants';
import { container } from '../common/utils/DIContainer';
import { AuthResolver } from './auth/AuthResolver';

export const resolvers = [
    AuthResolver
] as [Function, ...Function[]];