import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { prisma } from '../common/utils/prisma';

@ValidatorConstraint({ async: true })
export class UniqueEmail implements ValidatorConstraintInterface {
    public async validate(email: string): Promise<boolean> {
        const user = await prisma.user.findUnique({ where: { email }});
        return !!user;
    }
}