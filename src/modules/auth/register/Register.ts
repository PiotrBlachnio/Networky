import bcrypt from 'bcrypt';
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
        const userAlreadyExists = await prisma.user.findUnique({ where: { email }});
        if(userAlreadyExists) throw new Error('Email already exists');

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({ data: { email: email, password: hashedPassword }})
        
        return user;
    }
}