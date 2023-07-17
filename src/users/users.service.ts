import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './repository/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly usersRpository: UsersRepository) {}

  async addUser(data: CreateUserDTO) {
    const hashPassword = bcrypt.hashSync(data.password, 10);
    const user = await this.usersRpository.findUserByEmail(data.email);
    if (user)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    return await this.usersRpository.addUser({
      ...data,
      password: hashPassword,
    });
  }

  async findUserById(id: number) {
    const user = await this.usersRpository.findUserById(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.usersRpository.findUserByEmail(email);
    if (!user)
      throw new HttpException(
        'Email or password Invalid',
        HttpStatus.UNAUTHORIZED,
      );
    return user;
  }

  async findAllUsers() {
    return await this.usersRpository.findAllUsers();
  }
}
