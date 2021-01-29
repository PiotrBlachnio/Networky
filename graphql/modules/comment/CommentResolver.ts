import { inject, injectable } from 'inversify';
import { Ctx, Arg, Mutation, Authorized } from 'type-graphql';
import { Constants } from '../../common/constants';
import { Context } from '../../types/Context';
import { CommentService } from './CommentService';
import { CommentResponse } from './dto/CommentResponse';
import { CreateCommentRequest } from './dto/CreateCommentRequest';

@injectable()
export class CommentResolver {
    constructor(@inject(Constants.DEPENDENCY.COMMENT_SERVICE) private readonly _commentService: CommentService) {}

    @Mutation(() => CommentResponse)
    @Authorized()
    public async createComment(@Ctx() context: Context, @Arg('data') data: CreateCommentRequest) {
        return this._commentService.create(context, data);
    }
}