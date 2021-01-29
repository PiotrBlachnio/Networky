import { Length, IsEnum } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { User } from '../../../common/constants/user';
import { LoginInput } from './LoginInput';

@InputType()
export class RegisterInput extends LoginInput {
    @Field()
    @Length(3, 32, { message: 'First name should have between 3 and 32 characters' })
    public readonly firstName: string;

    @Field()
    @Length(3, 32, { message: 'Last name should have between 3 and 32 characters' })
    public readonly lastName: string;

    @Field()
    @IsEnum(User.GENDER, { message: 'Gender should be valid' })
    public readonly gender: User.GENDER;
}