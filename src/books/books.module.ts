import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from './book-entity/book-entity';
import { User } from 'src/users/user-entity/user-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, User])],
  providers: [BooksService],
  controllers: [BooksController],
  exports: [BooksService],
})
export class BooksModule {}
