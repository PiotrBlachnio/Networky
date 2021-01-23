import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
    if(params.model == 'User' && params.action === 'create') {
        params.args.data.password = await bcrypt.hash(params.args.data.password, 12);
    }

    return await next(params);
})

export { prisma };