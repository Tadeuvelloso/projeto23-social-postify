import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { UsersRepository } from '../user.repository';
import { User } from '@prisma/client';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(data: CreateUserDTO) {
    return await this.prisma.user.create({ data: data });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.prisma.user.findFirst({ where: { email } });
  }

  async findUserById(userid: number) {
    return await this.prisma.user.findFirst({ where: { id: userid } });
  }

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }
}
