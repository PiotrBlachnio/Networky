import { inject, injectable } from 'inversify';
import { Resolver, Authorized, Ctx, Mutation, Arg } from 'type-graphql';
import { Constants } from '../../common/constants';
import { Context } from '../../types/Context';
import { CreatePostRequest } from './dto/CreatePostRequest';
import { PostResponse } from './dto/PostResponse';
import { PostService } from './PostService';

@injectable()
@Resolver()
export class PostResolver {
    constructor(@inject(Constants.DEPENDENCY.POST_SERVICE) private readonly _postService: PostService) {}

    @Mutation(() => PostResponse)
    @Authorized()
    public async createPost(@Ctx() context: Context, @Arg('data') data: CreatePostRequest) {
        return this._postService.create(context, data);
    }
}