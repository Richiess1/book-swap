import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book-entity/book-entity';
import { CreateBookDto } from './dto/create-book.dto';
import { User } from 'src/users/user-entity/user-entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepo: Repository<Book>,  
  ) {}

  async create(dto: CreateBookDto, owner: User) {
    const book = this.bookRepo.create({ ...dto, owner });
    return this.bookRepo.save(book);
  }

}


