import { Field } from 'type-graphql';

export class InvalidInputError {
    @Field()
    id: number = 0;

    @Field()
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}