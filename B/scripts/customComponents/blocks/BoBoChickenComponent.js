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
import { ItemAPI } from "../../lib/ItemAPI";
import { EventAPI } from "../../lib/EventAPI";
class BoBoChickenComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(args) {
        const block = args.block;
        const player = args.player;
        const state = block.permutation.getState('casualness_delight:food_block_stage');
        if (state < 2) {
            ItemAPI.spawn(block, "casualness_delight:potato_bobo_chicken", 1);
            player.playSound("use.cloth", block.location);
            block.setPermutation(block.permutation.withState('casualness_delight:food_block_stage', state + 1));
        }
        if (state < 4 && state > 1) {
            ItemAPI.spawn(block, "casualness_delight:cabbage_bobo_chicken", 1);
            player.playSound("use.cloth", block.location);
            block.setPermutation(block.permutation.withState('casualness_delight:food_block_stage', state + 1));
        }
        if (state < 6 && state > 3) {
            ItemAPI.spawn(block, "casualness_delight:chicken_bobo_chicken", 1);
            player.playSound("use.cloth", block.location);
            block.setPermutation(block.permutation.withState('casualness_delight:food_block_stage', state + 1));
        }
        if (state == 6) {
            ItemAPI.spawn(block, "minecraft:bowl", 1);
            block.dimension.setBlockType(block.location, "minecraft:air");
            player.playSound("use.cloth", block.location);
        }
    }
}
export class BoBoChickenComponentRegister {
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('casualness_delight:bobo_chicken', new BoBoChickenComponent());
    }
}
__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], BoBoChickenComponentRegister.prototype, "register", null);