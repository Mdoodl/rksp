import { CommentsService } from "./comments.service";
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Comment } from "./comments.identity";


@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

@Get()
  findAll() {
    return this.commentsService.findAll();
  }

@Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }
 
@Put(':id')
  update(@Param('id') id: string, @Body() updateComment: Comment) {
    return this.commentsService.update(+id, updateComment);
  }

@Post()
  create(@Body() createComment: Comment) {
    return this.commentsService.create(createComment);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }



}


