import { User } from '@prisma/client';
import { Field, ObjectType } from 'type-graphql';
import { User as UserType } from '../../../common/constants/user';

@ObjectType()
export class MeResponse {
    @Field()
    public readonly email: string;

    @Field()
    public readonly name: string;

    @Field()
    public readonly gender: UserType.GENDER;

    public static fromUser(user: User): MeResponse {
        return {
            email: user.email,
            name: user.firstName + ' ' + user.lastName,
            gender: user.gender as UserType.GENDER
        }
    }
}