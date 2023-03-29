import { Module } from '@nestjs/common';
import { CommentsService } from 'comments/comments.service';
import { DatasourceModule } from './datasource/datasource.module';
import { CommentsController } from 'comments/comments.controller';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [DatasourceModule],
})
export class CommentsModule {}
