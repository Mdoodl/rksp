import { HttpStatus } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Band } from "./bands.entity";
export declare class BandsService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(band: Band): Band;
    findOne(id: number): Band;
    findAll(): Band[];
    update(id: number, updatedBand: Band): Band;
    remove(id: number): HttpStatus;
}
