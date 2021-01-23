import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { prisma } from '../common/utils/Prisma';

export function IsUniqueEmail(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsUniqueEmailValidator
        });
    }
}

@ValidatorConstraint({ async: true })
class IsUniqueEmailValidator implements ValidatorConstraintInterface {
    public async validate(email: string) {
        const user = await prisma.user.findUnique({ where: { email }});
        return !user;
    }
}