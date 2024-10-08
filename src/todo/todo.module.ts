import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { SampleModule } from 'src/sample/sample.module';

@Module({
  imports: [SampleModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
