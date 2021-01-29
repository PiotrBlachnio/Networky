import { inject, injectable } from 'inversify';
import { Context } from 'vm';
import { Constants } from '../../common/constants';
import { prisma } from '../../common/utils/Prisma';

@injectable()
export class CommentService {
    constructor(
        @inject(Constants.DEPENDENCY.COMMENT_REPOSITORY) private readonly _commentRepository: typeof prisma.comment,
        @inject(Constants.DEPENDENCY.POST_REPOSITORY) private readonly _postRepository: typeof prisma.post
    ) {}

    public async create(context: Context, input: )
}