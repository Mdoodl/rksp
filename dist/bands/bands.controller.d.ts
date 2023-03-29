import { BandsService } from "./bands.service";
import { Band } from "./bands.entity";
export declare class BandsController {
    private readonly bandsService;
    constructor(bandsService: BandsService);
    findAll(): Band[];
    findOne(fullname: string): Band;
    update(id: string, updateBand: Band): Band;
    create(createBand: Band): Band;
    remove(id: string): import("@nestjs/common").HttpStatus;
}
