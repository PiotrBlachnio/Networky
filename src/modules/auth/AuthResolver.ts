import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { prisma } from '../../common/utils/Prisma';
import { User } from '../../models/User';
import { RegisterInput } from './register/RegisterInput';

@Resolver()
export class RegisterResolver {
    @Query(() => String)
    async hello() {
        return 'Hello';
    }

    @Mutation(() => User)
    async register(@Arg('data') { email, password }: RegisterInput): Promise<User> {
        const user = await prisma.user.create({ data: { email, password }});
        return user;
    }
}