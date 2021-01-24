import { Field } from 'type-graphql';

export abstract class BaseError extends Error {
    @Field()
    public abstract readonly id: number;

    @Field()
    public abstract readonly message: string;
}