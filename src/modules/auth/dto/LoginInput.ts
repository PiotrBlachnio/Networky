import { InputType } from 'type-graphql';
import { RegisterInput } from './RegisterInput';

@InputType()
export class LoginInput extends RegisterInput {}