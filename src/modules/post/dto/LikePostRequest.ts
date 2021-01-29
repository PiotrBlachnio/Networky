import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class LikePostRequest {
    @Field()
    @Length(36, 36, { message: 'postID should have exactly 36 characters' })
    public readonly postId: string;
}