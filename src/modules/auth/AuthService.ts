import { inject, injectable } from 'inversify';
import { Constants } from '../../common/constants';
import { prisma } from '../../common/utils/Prisma';
import { ITokenService } from '../../services/token/interfaces/ITokenService';
import { LoginInput } from './dto/LoginInput';
import { RegisterInput } from './dto/RegisterInput';

@injectable()
export class AuthService {
    constructor(
        @inject(Constants.DEPENDENCY.USER_REPOSITORY) private readonly _userRepository: typeof prisma.user,
        @inject(Constants.DEPENDENCY.TOKEN_SERVICE) private readonly _tokenService: ITokenService
    ) {}

    public async register(input: RegisterInput): Promise<void> {
        await this._userRepository.create({ data: input });
    }

    public async login(input: LoginInput): Promise<string> {
        
    }
}