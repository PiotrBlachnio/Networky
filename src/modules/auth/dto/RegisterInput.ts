import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { IsUniqueEmail } from '../../../validators/UniqueEmail';

@InputType()
export class RegisterInput {
    @Field()
    @Length(5, 64, { message: 'Email should have between 5 and 64 characters' })
    @IsEmail({}, { message: 'Email should be valid' })
    @IsUniqueEmail({ message: 'Email already exists' })
    public readonly email: string;

    @Field()
    @Length(5, 64, { message: 'Password should have between 5 and 64 characters' })
    public readonly password: string;
}