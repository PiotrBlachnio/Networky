import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class LoginResponse {
    @Field()
    public readonly token: string
}