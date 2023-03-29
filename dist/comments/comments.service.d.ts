import { HttpStatus } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Comment } from "./comments.identity";
export declare class CommentsService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(comment: Comment): Comment;
    findOne(id: number): Comment;
    findAll(): Comment[];
    update(id: number, updatedComment: Comment): Comment;
    remove(id: number): HttpStatus;
}
