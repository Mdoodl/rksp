import { CommentsService } from "./comments.service";
import { Comment } from "./comments.identity";
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    findAll(): Comment[];
    findOne(id: string): Comment;
    update(id: string, updateComment: Comment): Comment;
    create(createComment: Comment): Comment;
    remove(id: string): import("@nestjs/common").HttpStatus;
}
