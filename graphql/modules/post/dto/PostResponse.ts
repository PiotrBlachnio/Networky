import { Like, User } from '@prisma/client';
import { Field, ID, ObjectType } from 'type-graphql';
import { CommentResponse } from '../../comment/dto/CommentResponse';
import { UserResponse } from '../../user/dto/UserResponse';
import { LikeResponse } from './LikeResponse';

@ObjectType()
export class PostResponse {
    @Field(() => ID)
    public readonly id: string;

    @Field()
    public readonly content: string;

    @Field()
    public readonly createdAt: Date;

    @Field(() => UserResponse, { nullable: true })
    public readonly user?: User | null;

    @Field(() => [CommentResponse], { nullable: true })
    public readonly comments?: [CommentResponse] | null;

    @Field(() => [LikeResponse], { nullable: true })
    public readonly likes?: [Like] | null;
}