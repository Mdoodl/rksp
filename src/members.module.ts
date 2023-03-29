import { Module } from '@nestjs/common';
import { MembersService } from 'members/members.service';
import { DatasourceModule } from './datasource/datasource.module';
import { MembersController } from 'members/members.controller';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [DatasourceModule],
})
export class MembersModule {}
