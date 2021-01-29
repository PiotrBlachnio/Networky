import { User } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { Constants } from '../../common/constants';
import { prisma } from '../../common/utils/Prisma';
import { Context } from '../../types/Context';

@injectable()
export class UserService {
    constructor(@inject(Constants.DEPENDENCY.USER_REPOSITORY) private readonly _userRepository: typeof prisma.user) {}

    public async me(context: Context): Promise<User> {
        const user = await this._userRepository.findUnique({ where: { id: context.req.user.id }, include: { posts: true, comments: true }});
        return user;
    }
}