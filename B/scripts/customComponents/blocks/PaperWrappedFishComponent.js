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
import { takeItem } from "../../lib/ItemUtil";
import { hasLimitedMaterials } from "../../lib/EntityUtil";
import { EventAPI } from "../../lib/EventAPI";
class PaperWrappedFishComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(args) {
        const block = args.block;
        const player = args.player;
        const selectedSlotIndex = player.selectedSlotIndex;
        const container = player.getComponent('inventory')?.container;
        const item = container?.getItem(selectedSlotIndex);
        const state = block.permutation.getState('casualness_delight:food_block_stage');
        if (state < 4 && (!item || item.typeId !== "minecraft:bowl")) {
            player.onScreenDisplay.setActionBar({ translate: "farmersdelight.blockfood.minecraft:bowl" });
            return;
        }
        if (state < 4 && item?.typeId == "minecraft:bowl") {
            if (!container) return;
            if (hasLimitedMaterials(player)) {
                takeItem(container, selectedSlotIndex, 1);
            }
            let otherBlock;
            const direction = block.permutation.getState('minecraft:cardinal_direction');
            switch (direction) {
                case 'east':
                    otherBlock = block?.east();
                    break;
                case 'west':
                    otherBlock = block?.west();
                    break;
                case 'north':
                    otherBlock = block?.north();
                    break;
                case 'south':
                    otherBlock = block?.south();
                    break;
            }
            ItemAPI.spawn(block, "casualness_delight:bowl_of_paper_wrapped_fish", 1);
            player.playSound("use.cloth", block.location);
            block.setPermutation(block.permutation.withState('casualness_delight:food_block_stage', state + 1));
            if (otherBlock) {
                try {
                    const otherState = otherBlock.permutation.getState('casualness_delight:food_block_stage');
                    if (otherState !== undefined) {
                        otherBlock.setPermutation(otherBlock.permutation.withState('casualness_delight:food_block_stage', otherState + 1));
                    }
                } catch (e) {
                }
            }
        }
        if (state == 4) {
            ItemAPI.spawn(block, "minecraft:bowl", 1);
            block.dimension.setBlockType(block.location, "minecraft:air");
            let otherBlock;
            const direction = block.permutation.getState('minecraft:cardinal_direction');
            switch (direction) {
                case 'east':
                    otherBlock = block?.east();
                    break;
                case 'west':
                    otherBlock = block?.west();
                    break;
                case 'north':
                    otherBlock = block?.north();
                    break;
                case 'south':
                    otherBlock = block?.south();
                    break;
            }

            if (otherBlock) {
                otherBlock.dimension.setBlockType(otherBlock.location, "minecraft:air");
            }
            player.playSound("use.cloth", block.location);
        }
    }
}

export class PaperWrappedFishComponentRegister {
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('casualness_delight:paper_wrapped_fish', new PaperWrappedFishComponent());
    }
}

__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], PaperWrappedFishComponentRegister.prototype, "register", null);