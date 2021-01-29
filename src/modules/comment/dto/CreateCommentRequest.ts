import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateCommentRequest {
    @Field()
    @Length(1, 255, { message: 'Content should have between 1 and 255 characters' })
    public readonly content: string;

    @Field()
    @Length(36, 36, { message: 'PostID should have exactly 36 characters' })
    public readonly postId: string;
}