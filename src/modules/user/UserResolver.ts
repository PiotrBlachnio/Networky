import { inject, injectable } from 'inversify';
import { Resolver, Query, Authorized, Ctx } from 'type-graphql';
import { Constants } from '../../common/constants';
import { Context } from '../../types/Context';
import { UserResponse } from './dto/UserResponse';
import { UserService } from './UserService';

@injectable()
@Resolver()
export class UserResolver {
    constructor(@inject(Constants.DEPENDENCY.USER_SERVICE) private readonly _userService: UserService) {}

    @Query(() => UserResponse, { complexity: 1 })
    @Authorized()
    public async me(@Ctx() context: Context) {
        return this._userService.me(context);
    }
}