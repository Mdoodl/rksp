import { Module } from '@nestjs/common';
import { BandsModule } from './bands.module';
import { DatasourceModule } from './datasource/datasource.module';
import { MembersModule } from './members.module';
import { CommentsModule } from './comments.module';

@Module({
  imports: [BandsModule, DatasourceModule, MembersModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


