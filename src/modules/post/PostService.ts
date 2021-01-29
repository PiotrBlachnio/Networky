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
    constructor(@inject(Constants.DEPENDENCY.POST_REPOSITORY) private readonly _postRepository: typeof prisma.post) {}

    public async create(context: Context, input: CreatePostRequest): Promise<Post> {
        const post = await this._postRepository.create({ data: {
            content: input.content,
            userId: context.req.user.id
        }});

        return post;
    }

    public async like(context: Context, input: LikePostRequest): Promise<void> {
        const post = await this._postRepository.findUnique({ where: { id: input.id }});
        if(!post) throw new PostNotFoundError();

        // await this._
    }
}