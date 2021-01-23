import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { prisma } from '../../../common/utils/prisma';
import { User } from '../../../models/User';
import { RegisterInput } from './RegisterInput';

@Resolver()
export class RegisterResolver {
    @Query(() => String)
    async hello() {
        return 'Hello';
    }

    @Mutation(() => User)
    async register(@Arg('data') { email, password }: RegisterInput): Promise<User> {
        throw new Error('YO!');
        const user = await prisma.user.create({ data: { email, password }});
        
        return user;
    }
}