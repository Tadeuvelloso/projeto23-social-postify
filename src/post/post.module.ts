import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/repository/user.repository';
import { PrismaUsersRepository } from 'src/users/repository/implementation/prismaUsers.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [PostController],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [
    PostService,
    AuthService,
    UsersService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class PostModule {}
