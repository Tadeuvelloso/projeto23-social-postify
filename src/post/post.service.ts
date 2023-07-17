import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Posts } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  async featPost(body: Posts) {
    await this.prisma.posts.create({ data: body });
  }

  async getPosts(id: number) {
    return await this.prisma.posts.findMany({ where: { userId: id } });
  }
}
