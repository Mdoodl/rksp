import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Member } from "../identities/member.identity";

@Injectable()
export class MembersService {
    constructor(private readonly datasourceService: DatasourceService) {}
    create(member: Member) {
        this.datasourceService.getMembers().push(member);
        return member;
      }
      findOne(id: number) {
        return this.datasourceService
          .getMembers()
          .find((Member) => Member.id === id);
      }

      findAll(): Member[] {
        return this.datasourceService.getMembers();
      }
      update(id: number, updatedMember: Member) {
        const index = this.datasourceService
          .getMembers()
          .findIndex((Member) => Member.id === id);
        this.datasourceService.getMembers()[index] = updatedMember;
        return this.datasourceService.getMembers()[index];
      }

      remove(id: number) {
        const index = this.datasourceService
          .getMembers()
          .findIndex((member) => member.id === id);
        this.datasourceService.getMembers().splice(index, 1);
        return HttpStatus.OK;
      }
    
    
    
    
}
