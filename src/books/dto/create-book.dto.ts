import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @MinLength(50)
  @IsNotEmpty()
  description: string;
}
