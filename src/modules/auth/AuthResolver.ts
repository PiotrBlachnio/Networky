import { inject, injectable } from 'inversify';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Constants } from '../../common/constants';
import { AuthService } from './AuthService';
import { RegisterInput } from './register/RegisterInput';

@injectable()
@Resolver()
export class AuthResolver {
    constructor(@inject(Constants.DEPENDENCY.AUTH_SERVICE) private readonly _authService: AuthService) {}

    @Query(() => String)
    async hello() {
        return 'Hello';
    }

    @Mutation(() => String, { nullable: true })
    async register(@Arg('data') input: RegisterInput): Promise<void> {
       await this._authService.register(input);
    }
}