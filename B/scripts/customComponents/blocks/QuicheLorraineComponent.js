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

class QuicheLorraineComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }

    onPlayerInteract(args) {
        const { block, player } = args;
        const selectedSlotIndex = player.selectedSlotIndex;
        const container = player.getComponent('inventory')?.container;
        const item = container?.getItem(selectedSlotIndex);
        const state = block.permutation.getState('casualness_delight:food_block_stage');
        const hunger = player.getComponent('minecraft:player.hunger');
        const saturation = player.getComponent('minecraft:player.saturation');
        if (!item?.hasTag("farmersdelight:is_knife")) {
            player.playSound("random.eat", block.location);
            hunger.setCurrentValue(Math.min(hunger.currentValue + 5, hunger.effectiveMax));
            saturation.setCurrentValue(Math.min(saturation.currentValue + 5, saturation.effectiveMax));
        }
        if (item?.hasTag("farmersdelight:is_knife")) {
            ItemAPI.damage(player, selectedSlotIndex);
            player.playSound("use.cloth", block.location);
            ItemAPI.spawn(block, "casualness_delight:quiche_lorraine_slice", 1);
        }
        if (state < 3) {
            block.setPermutation(block.permutation.withState('casualness_delight:food_block_stage', state + 1));
        }
        else {
            block.dimension.setBlockType(block.location, "minecraft:air");
        }
    }
}

export class QuicheLorraineComponentRegister {
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('casualness_delight:quiche_lorraine', new QuicheLorraineComponent());
    }
}

__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], QuicheLorraineComponentRegister.prototype, "register", null);