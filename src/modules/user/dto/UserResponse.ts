import { Field, ObjectType, Root } from 'type-graphql';
import { User } from '../../../common/constants/user';
import { PostResponse } from '../../post/dto/PostResponse';

@ObjectType()
export class UserResponse {
    @Field()
    public readonly email: string;

    @Field()
    public readonly firstName: string;

    @Field()
    public readonly lastName: string;

    @Field()
    public readonly gender: User.GENDER;

    @Field(() => [PostResponse], { nullable: true })
    posts?: [PostResponse] | null

    @Field()
    public name(@Root() root: UserResponse): string {
        return root.firstName + ' ' + root.lastName; 
    }
}