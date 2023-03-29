import { HttpStatus } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Member } from "./member.identity";
export declare class MembersService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(member: Member): Member;
    findOne(id: number): Member;
    findAll(): Member[];
    update(id: number, updatedMember: Member): Member;
    remove(id: number): HttpStatus;
}
