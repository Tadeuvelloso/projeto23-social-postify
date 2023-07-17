import { User } from '@prisma/client';
import { CreateUserDTO } from '../dto/create-user.dto';

export abstract class UsersRepository {
  abstract addUser(data: CreateUserDTO): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User>;
  abstract findUserById(userid: number): Promise<User>;
  abstract findAllUsers(): Promise<User[]>;
}
