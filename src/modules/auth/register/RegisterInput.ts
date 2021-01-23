import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterInput {
    @Field()
    @Length(5, 64, { message: 'Email should have between 5 and 64 characters' })
    @IsEmail({}, { message: 'Email should be valid' })
    email: string;

    @Field()
    @Length(5, 64, { message: 'Password should have between 5 and 64 characters' })
    password: string;
}