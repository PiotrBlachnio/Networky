import bcrypt from 'bcrypt';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { User } from '../../entity/User';

@Resolver()
export class RegisterResolver {
    @Query(() => String)
    async hello() {
        return 'Hello';
    }

    @Mutation(() => User)
    async register(@Arg('email') email: string, @Arg('password') password: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({ email, password: hashedPassword }).save();

        return user;
    }
}