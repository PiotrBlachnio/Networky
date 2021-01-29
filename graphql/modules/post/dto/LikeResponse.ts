import { Post, User } from '@prisma/client';
import { Field, ID, ObjectType } from 'type-graphql';
import { UserResponse } from '../../user/dto/UserResponse';
import { PostResponse } from './PostResponse';

@ObjectType()
export class LikeResponse {
    @Field(() => ID)
    public readonly id: string;

    @Field(() => UserResponse, { nullable: true })
    public readonly user?: User | null;

    @Field(() => PostResponse, { nullable: true })
    public readonly post?: Post | null;
}