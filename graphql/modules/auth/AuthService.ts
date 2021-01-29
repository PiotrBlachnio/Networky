import { inject, injectable } from 'inversify';
import { Constants } from '../../common/constants';
import { prisma } from '../../common/utils/Prisma';
import { ITokenService } from '../../services/token/interfaces/ITokenService';
import { LoginRequest } from './dto/LoginRequest';
import { RegisterRequest } from './dto/RegisterRequest';
import { compare } from 'bcrypt';
import { LoginResponse } from './dto/LoginResponse';
import { InvalidCredentialsError } from '../../common/errors/InvalidCredentialsError';
import { AccessToken } from '../../services/token/tokens/AccessToken';
import { DuplicateEmailError } from '../../common/errors/DuplicateEmailError';

@injectable()
export class AuthService {
    constructor(
        @inject(Constants.DEPENDENCY.USER_REPOSITORY) private readonly _userRepository: typeof prisma.user,
        @inject(Constants.DEPENDENCY.TOKEN_SERVICE) private readonly _tokenService: ITokenService
    ) {}

    public async register(input: RegisterRequest): Promise<void> {
        const user = await this._userRepository.findUnique({ where: { email: input.email }});
        if(user) throw new DuplicateEmailError();

        await this._userRepository.create({ data: input });
    }

    public async login(input: LoginRequest): Promise<LoginResponse> {
        const user = await this._userRepository.findUnique({ where: { email: input.email }});
        if(!user) throw new InvalidCredentialsError();

        const isPasswordValid = await compare(input.password, user.password);
        if(!isPasswordValid) throw new InvalidCredentialsError();

        const token = await this._tokenService.generate(new AccessToken({ id: user.id, email: user.email }));
        return { token };
    }
}