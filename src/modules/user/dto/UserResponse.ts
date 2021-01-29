import { Post, User } from '@prisma/client';
import { Field, ObjectType } from 'type-graphql';
import { User as UserType } from '../../../common/constants/user';

@ObjectType()
export class UserResponse {
    @Field()
    public readonly email: string;

    @Field()
    public readonly name: string;

    @Field()
    public readonly gender: UserType.GENDER;

    @Field()
    public readonly posts: Post[];

    public static from(user: User, posts: Post[]): UserResponse {
        return {
            ...user,
            name: user.firstName + ' ' + user.lastName,
            gender: user.gender as UserType.GENDER,
            posts: posts
        }
    }
}