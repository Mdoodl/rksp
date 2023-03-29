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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandsController = void 0;
const bands_service_1 = require("./bands.service");
const common_1 = require("@nestjs/common");
const bands_entity_1 = require("./bands.entity");
let BandsController = class BandsController {
    constructor(bandsService) {
        this.bandsService = bandsService;
    }
    findAll() {
        return this.bandsService.findAll();
    }
    findOne(fullname) {
        return this.bandsService.findOne(+fullname);
    }
    update(id, updateBand) {
        return this.bandsService.update(+id, updateBand);
    }
    create(createBand) {
        return this.bandsService.create(createBand);
    }
    remove(id) {
        return this.bandsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BandsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BandsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bands_entity_1.Band]),
    __metadata("design:returntype", void 0)
], BandsController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bands_entity_1.Band]),
    __metadata("design:returntype", void 0)
], BandsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BandsController.prototype, "remove", null);
BandsController = __decorate([
    (0, common_1.Controller)('bands'),
    __metadata("design:paramtypes", [bands_service_1.BandsService])
], BandsController);
exports.BandsController = BandsController;
//# sourceMappingURL=bands.controller.js.map