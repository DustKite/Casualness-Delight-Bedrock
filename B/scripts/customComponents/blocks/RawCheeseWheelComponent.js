var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

import { StartupEvent, system } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";
class RawCheeseWheelComponent {
    constructor() {
        this.onRandomTick = this.onRandomTick.bind(this);
    }
    onRandomTick(args) {
        const block = args.block;
        const lightLevel = block.getLightLevel();
        const growChance = lightLevel <= 9 ? 0.7 : 0.5;
        if (Math.random() > growChance) {
            return;
        }
        const state = block.permutation.getState('casualness_delight:food_block_stage');
        if (state < 3) {
            block.setPermutation(
                block.permutation.withState('casualness_delight:food_block_stage', state + 1)
            );
        }
        else if (state === 3) {
            block.dimension.setBlockType(block.location, "casualness_delight:cheese_wheel");
        }
    }
}
export class RawCheeseWheelComponentRegister {
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('casualness_delight:raw_cheese_wheel', new RawCheeseWheelComponent());
    }
}

__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], RawCheeseWheelComponentRegister.prototype, "register", null);
