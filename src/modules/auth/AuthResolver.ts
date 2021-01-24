import { inject, injectable } from 'inversify';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Constants } from '../../common/constants';
import { AuthService } from './AuthService';
import { LoginInput } from './dto/LoginInput';
import { LoginResponse } from './dto/LoginResponse';
import { RegisterInput } from './dto/RegisterInput';

@injectable()
@Resolver()
export class AuthResolver {
    constructor(@inject(Constants.DEPENDENCY.AUTH_SERVICE) private readonly _authService: AuthService) {}

    @Query(() => String)
    public async hello() {
        return 'Hello';
    }

    @Mutation(() => String, { nullable: true })
    public async register(@Arg('data') input: RegisterInput): Promise<void> {
       await this._authService.register(input);
    }

    @Mutation(() => LoginResponse)
    public async login(@Arg('data') input: LoginInput): Promise<LoginResponse> {
        return this._authService.login(input);
    }
}