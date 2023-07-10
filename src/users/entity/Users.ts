import { HttpException, HttpStatus } from '@nestjs/common';

export class User {
  private _name: string;
  private _email: string;
  private _password: string;
  private _avatar: string;

  constructor(name: string, email: string, password: string, avatar: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
  }
  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    if (name.length < 3 || name.length > 30) {
      throw new HttpException('Invalid Name', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    this._name = name;
  }
  public get email(): string {
    return this._email;
  }
  public set email(email: string) {
    if (email.length < 7) {
      throw new HttpException('Invalid Email', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    this._email = email;
  }
  public get password(): string {
    return this._password;
  }
  public set password(password: string) {
    if (password.length < 6 || password.length > 20) {
      throw new HttpException(
        'Invalid Password',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    this._password = password;
  }
  public get avatar(): string {
    return this._avatar;
  }
  public set avatar(avatar: string) {
    if (avatar.length < 1) {
      throw new HttpException(
        'Invalid Avatar',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    this._avatar = avatar;
  }
}
