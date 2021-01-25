import { Length, IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
@InputType()
export class LoginInput {
    @Field()
    @Length(5, 64, { message: 'Email should have between 5 and 64 characters' })
    @IsEmail({}, { message: 'Email should be valid' })
    public readonly email: string;

    @Field()
    @Length(5, 64, { message: 'Password should have between 5 and 64 characters' })
    public readonly password: string;
}