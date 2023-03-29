import { MembersService } from "./members.service";
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Member } from "./member.identity";


@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

@Get()
  findAll() {
    return this.membersService.findAll();
  }

@Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }
 
@Put(':id')
  update(@Param('id') id: string, @Body() updateMember: Member) {
    return this.membersService.update(+id, updateMember);
  }

@Post()
  create(@Body() createMember: Member) {
    return this.membersService.create(createMember);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }



}


