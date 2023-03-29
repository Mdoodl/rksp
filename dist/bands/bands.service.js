"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandsService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("src/datasource/datasource.service");
let BandsService = class BandsService {
    constructor(datasourceService) {
        this.datasourceService = datasourceService;
    }
    create(band) {
        this.datasourceService.getBands().push(band);
        return band;
    }
    findOne(id) {
        return this.datasourceService
            .getBands()
            .find((Band) => Band.id === id);
    }
    findAll() {
        return this.datasourceService.getBands();
    }
    update(id, updatedBand) {
        const index = this.datasourceService
            .getBands()
            .findIndex((Band) => Band.id === id);
        this.datasourceService.getBands()[index] = updatedBand;
        return this.datasourceService.getBands()[index];
    }
    remove(id) {
        const index = this.datasourceService
            .getBands()
            .findIndex((band) => band.id === id);
        this.datasourceService.getBands().splice(index, 1);
        return common_1.HttpStatus.OK;
    }
};
BandsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService])
], BandsService);
exports.BandsService = BandsService;
//# sourceMappingURL=bands.service.js.map