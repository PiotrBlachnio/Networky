import { Field, ObjectType } from 'type-graphql';
import { User } from '../../../common/constants/user';

@ObjectType()
export class LoginResponse {
    @Field()
    public readonly email: string;

    @Field()
    public readonly name: string;

    @Field()
    public readonly gender: User.Gender;
}