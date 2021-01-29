import { Post } from '@prisma/client';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserResponse {
    @Field()
    public readonly id: string;

    @Field()
    public readonly user: UserResponse;

    @Field()
    public readonly content: string;

    @Field()
    public readonly likes: number;

    @Field()
    public readonly createdAt: Date;

    public static from(post: Post, user: UserResponse): UserResponse {
        return {
            ...post,
            user
        }
    }
}