import { Module } from '@nestjs/common';
import { BandsService } from 'bands/bands.service';
import { DatasourceModule } from './datasource/datasource.module';
import { BandsController } from 'bands/bands.controller';

@Module({
  controllers: [BandsController],
  providers: [BandsService],
  imports: [DatasourceModule],
})
export class BandsModule {}
