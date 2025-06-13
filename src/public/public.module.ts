import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicController } from './public.controller';
import { Book } from 'src/books/book-entity/book-entity';
import { User } from 'src/users/user-entity/user-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, User])],
  controllers: [PublicController],
})
export class PublicModule {}
