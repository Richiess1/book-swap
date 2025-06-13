import {
  Body,
  Request,
  Controller,
  Post,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { User } from 'src/users/user-entity/user-entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    @InjectRepository(User) private readonly userRepo: Repository<User>,  
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() dto: CreateBookDto, @Request() req) {
    const user = await this.userRepo.findOneBy({ id: req.user.sub });
    console.log('Usuario desde token:', req.user);

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return this.booksService.create(dto, user);

  }
}
