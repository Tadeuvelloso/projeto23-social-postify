import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class AuthSigninDTO {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
