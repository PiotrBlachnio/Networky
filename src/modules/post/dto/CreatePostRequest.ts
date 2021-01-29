import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreatePostRequest {
    @Field()
    @Length(1, 255, { message: 'Content should have between 1 and 255 characters' })
    public readonly content: string;
}