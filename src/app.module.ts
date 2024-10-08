import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [TodoModule, SampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
