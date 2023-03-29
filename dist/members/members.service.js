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
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("src/datasource/datasource.service");
let MembersService = class MembersService {
    constructor(datasourceService) {
        this.datasourceService = datasourceService;
    }
    create(member) {
        this.datasourceService.getMembers().push(member);
        return member;
    }
    findOne(id) {
        return this.datasourceService
            .getMembers()
            .find((Member) => Member.id === id);
    }
    findAll() {
        return this.datasourceService.getMembers();
    }
    update(id, updatedMember) {
        const index = this.datasourceService
            .getMembers()
            .findIndex((Member) => Member.id === id);
        this.datasourceService.getMembers()[index] = updatedMember;
        return this.datasourceService.getMembers()[index];
    }
    remove(id) {
        const index = this.datasourceService
            .getMembers()
            .findIndex((member) => member.id === id);
        this.datasourceService.getMembers().splice(index, 1);
        return common_1.HttpStatus.OK;
    }
};
MembersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map