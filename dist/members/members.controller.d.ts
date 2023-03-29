import { MembersService } from "./members.service";
import { Member } from "./member.identity";
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    findAll(): Member[];
    findOne(id: string): Member;
    update(id: string, updateMember: Member): Member;
    create(createMember: Member): Member;
    remove(id: string): import("@nestjs/common").HttpStatus;
}
