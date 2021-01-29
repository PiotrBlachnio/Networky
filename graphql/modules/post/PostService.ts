import { Post } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { Constants } from '../../common/constants';
import { PostNotFoundError } from '../../common/errors/PostNotFoundError';
import { prisma } from '../../common/utils/Prisma';
import { Context } from '../../types/Context';
import { CreatePostRequest } from './dto/CreatePostRequest';
import { LikePostRequest } from './dto/LikePostRequest';

@injectable()
export class PostService {
    constructor(
        @inject(Constants.DEPENDENCY.POST_REPOSITORY) private readonly _postRepository: typeof prisma.post,
        @inject(Constants.DEPENDENCY.LIKE_REPOSITORY) private readonly _likeRepository: typeof prisma.like
    ) {}

    public async create(context: Context, input: CreatePostRequest): Promise<Post> {
        const post = await this._postRepository.create({ data: {
            content: input.content,
            userId: context.user.id
        }});

        return post;
    }

    public async like(context: Context, input: LikePostRequest): Promise<void> {
        const post = await this._postRepository.findUnique({ where: { id: input.postId }});
        if(!post) throw new PostNotFoundError();

        const like = await this._likeRepository.findFirst({ where: { userId: context.user.id, postId: post.id }});

        if(like) await this._likeRepository.delete({ where: { id: like.id }});
        else await this._likeRepository.create({ data: { userId: context.user.id, postId: post.id }});
    }
}