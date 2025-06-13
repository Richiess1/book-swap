import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/books/book-entity/book-entity';

@Controller('public')
export class PublicController {
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {}

  @Get('books')
  async getBooks() {
    return this.bookRepo.find({
      relations: ['owner'],
      select: ['id', 'title', 'author', 'description', 'owner'],
    });
  }
}
