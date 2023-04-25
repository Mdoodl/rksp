import { Module } from '@nestjs/common';
import { BandsService } from 'src/servicies/bands.service';
import { DatasourceModule } from '../datasource/datasource.module';
import { BandsController } from 'src/controllers/bands.controller';
import { Band } from 'src/identities/bands.entity';

@Module({
  controllers: [BandsController],
  providers: [BandsService],
  imports: [DatasourceModule],
  TypeOrmModule.forFeature([Band]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!

})
export class BandsModule {}
