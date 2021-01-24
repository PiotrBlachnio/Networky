import { inject, injectable } from 'inversify';
import { Constants } from '../../common/constants';
import { prisma } from '../../common/utils/Prisma';
import { ITokenService } from '../../services/token/interfaces/ITokenService';
import { LoginInput } from './dto/LoginInput';
import { RegisterInput } from './dto/RegisterInput';
import { compare } from 'bcrypt';
import { LoginResponse } from './dto/LoginResponse';
import { InvalidCredentialsError } from '../../common/errors/InvalidCredentialsError';
import { AccessToken } from '../../services/token/tokens/AccessToken';

@injectable()
export class AuthService {
    constructor(
        @inject(Constants.DEPENDENCY.USER_REPOSITORY) private readonly _userRepository: typeof prisma.user,
        @inject(Constants.DEPENDENCY.TOKEN_SERVICE) private readonly _tokenService: ITokenService
    ) {}

    public async register(input: RegisterInput): Promise<void> {
        await this._userRepository.create({ data: input });
    }

    public async login(input: LoginInput): Promise<LoginResponse> {
        const user = await this._userRepository.findUnique({ where: { email: input.email }});
        if(!user) throw new InvalidCredentialsError();

        const isPasswordValid = await compare(input.password, user.password);
        if(!isPasswordValid) throw new InvalidCredentialsError();

        const token = await this._tokenService.generate(new AccessToken({ id: user.id, email: user.email }));
        return { token };
    }
}