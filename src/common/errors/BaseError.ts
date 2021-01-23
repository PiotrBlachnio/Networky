import { Field } from 'type-graphql';

export abstract class BaseError {
    @Field()
    protected abstract readonly id: number;

    @Field()
    protected abstract readonly message: string;
}