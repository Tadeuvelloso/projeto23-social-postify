import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from 'src/auth/decorators/user.decorator';
import { PostService } from './post.service';
import { Posts, User } from '@prisma/client';

@Controller('publication')
export class PostController {
  constructor(private postService: PostService) {}

  @UseGuards(AuthGuard)
  @Post()
  async newPost(@Body() body: Posts) {
    return this.postService.featPost(body);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getPosts(@UserRequest() user: User) {
    return this.postService.getPosts(user.id);
  }
}
