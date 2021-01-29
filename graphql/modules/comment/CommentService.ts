import { Comment } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { Context } from '../../types/Context';
import { Constants } from '../../common/constants';
import { PostNotFoundError } from '../../common/errors/PostNotFoundError';
import { prisma } from '../../common/utils/Prisma';
import { CreateCommentRequest } from './dto/CreateCommentRequest';

@injectable()
export class CommentService {
    constructor(
        @inject(Constants.DEPENDENCY.COMMENT_REPOSITORY) private readonly _commentRepository: typeof prisma.comment,
        @inject(Constants.DEPENDENCY.POST_REPOSITORY) private readonly _postRepository: typeof prisma.post
    ) {}

    public async create(context: Context, input: CreateCommentRequest): Promise<Comment> {
        const post = await this._postRepository.findUnique({ where: { id: input.postId }});
        if(!post) throw new PostNotFoundError();
        
        const comment = await this._commentRepository.create({ data: { userId: context.user.id, postId: post.id, content: input.content }});
        return comment;
    }
}