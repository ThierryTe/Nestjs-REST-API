import { JobsModule } from './jobs/jobs.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    JobsModule,
  MongooseModule.forRoot('mongodb://localhost:27017/jobs', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
