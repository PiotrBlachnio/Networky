import { Post, User } from '@prisma/client';
import { Field, ID, ObjectType } from 'type-graphql';
import { PostResponse } from '../../post/dto/PostResponse';
import { UserResponse } from '../../user/dto/UserResponse';

@ObjectType()
export class CommentResponse {
    @Field(() => ID)
    public readonly id: string;

    @Field()
    public readonly content: string;

    @Field()
    public readonly likes: number;

    @Field()
    public readonly createdAt: Date;

    @Field(() => UserResponse, { nullable: true })
    public readonly user?: User | null;

    @Field(() => PostResponse, { nullable: true })
    public readonly post?: Post | null;
}