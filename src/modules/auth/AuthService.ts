import { inject, injectable } from 'inversify';
import { Constants } from '../../common/constants';
import { prisma } from '../../common/utils/Prisma';
import { RegisterInput } from './dto/RegisterInput';

@injectable()
export class AuthService {
    constructor(@inject(Constants.DEPENDENCY.USER_REPOSITORY) private readonly _userRepository: typeof prisma.user) {}

    public async register(input: RegisterInput): Promise<void> {
        await this._userRepository.create({ data: input });
    }
}