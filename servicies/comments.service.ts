import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Comment } from "../identities/comments.identity";

@Injectable()
export class CommentsService {
    constructor(private readonly datasourceService: DatasourceService) {}
    create(comment: Comment) {
        this.datasourceService.getComments().push(comment);
        return comment;
      }
      findOne(id: number) {
        return this.datasourceService
          .getComments()
          .find((Comment) => Comment.id === id);
      }

      findAll(): Comment[] {
        return this.datasourceService.getComments();
      }
      update(id: number, updatedComment: Comment) {
        const index = this.datasourceService
          .getComments()
          .findIndex((Comment) => Comment.id === id);
        this.datasourceService.getComments()[index] = updatedComment;
        return this.datasourceService.getComments()[index];
      }

      remove(id: number) {
        const index = this.datasourceService
          .getComments()
          .findIndex((comment) => comment.id === id);
        this.datasourceService.getComments().splice(index, 1);
        return HttpStatus.OK;
      }
    
    
    
    
}
