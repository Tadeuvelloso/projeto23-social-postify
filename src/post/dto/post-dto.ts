import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsBooleanString,
  IsNumber,
} from 'class-validator';

export default class PostDTO {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  dateToPublish: string;

  @IsNotEmpty()
  @IsBooleanString()
  published: string;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;
}
