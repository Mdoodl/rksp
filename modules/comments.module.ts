import { Module } from '@nestjs/common';
import { CommentsService } from 'src/servicies/comments.service';
import { DatasourceModule } from '../datasource/datasource.module';
import { CommentsController } from 'src/controllers/comments.controller';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [DatasourceModule],
})
export class CommentsModule {}
