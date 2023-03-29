import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Band } from "./bands.entity";

@Injectable()
export class BandsService {
    constructor(private readonly datasourceService: DatasourceService) {}
    create(band: Band) {
        this.datasourceService.getBands().push(band);
        return band;
      }
      findOne(id: number) {
        return this.datasourceService
          .getBands()
          .find((Band) => Band.id === id);
      }

      findAll(): Band[] {
        return this.datasourceService.getBands();
      }
      update(id: number, updatedBand: Band) {
        const index = this.datasourceService
          .getBands()
          .findIndex((Band) => Band.id === id);
        this.datasourceService.getBands()[index] = updatedBand;
        return this.datasourceService.getBands()[index];
      }

      remove(id: number) {
        const index = this.datasourceService
          .getBands()
          .findIndex((band) => band.id === id);
        this.datasourceService.getBands().splice(index, 1);
        return HttpStatus.OK;
      }
    
    
    
    
}
