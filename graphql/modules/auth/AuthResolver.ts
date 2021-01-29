import { inject, injectable } from 'inversify';
import { Resolver, Arg, Mutation } from 'type-graphql';
import { Constants } from '../../common/constants';
import { AuthService } from './AuthService';
import { LoginRequest } from './dto/LoginRequest';
import { LoginResponse } from './dto/LoginResponse';
import { RegisterRequest } from './dto/RegisterRequest';

@injectable()
@Resolver()
export class AuthResolver {
    constructor(@inject(Constants.DEPENDENCY.AUTH_SERVICE) private readonly _authService: AuthService) {}

    @Mutation(() => String, { nullable: true })
    public async register(@Arg('data') input: RegisterRequest): Promise<void> {
       await this._authService.register(input);
    }

    @Mutation(() => LoginResponse)
    public async login(@Arg('data') input: LoginRequest): Promise<LoginResponse> {
        return this._authService.login(input);
    }
}