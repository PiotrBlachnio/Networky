import { User as UserTypes } from '../common/constants/user';

export class User {
    public readonly id: string;
    public readonly email: string;
    public readonly password: string;
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly gender: UserTypes.Gender;
}