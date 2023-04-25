import { Module } from '@nestjs/common';
import { MembersService } from 'src/servicies/members.service';
import { DatasourceModule } from '../datasource/datasource.module';
import { MembersController } from 'src/controllers/members.controller';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [DatasourceModule],
})
export class MembersModule {}
