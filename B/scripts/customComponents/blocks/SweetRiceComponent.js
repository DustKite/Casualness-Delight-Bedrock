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
class SweetRiceComponent {
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
        if (state == 4) {
            ItemAPI.spawn(block, "minecraft:bowl", 1);
            block.dimension.setBlockType(block.location, "minecraft:air");
            player.playSound("use.cloth", block.location);
            return;
        }
        if (state < 4) {
            if (!item || item.typeId !== "minecraft:bowl") {
                player.onScreenDisplay.setActionBar({ translate: "farmersdelight.blockfood.minecraft:bowl" });
                return;
            }
            if (!container) return;
            if (hasLimitedMaterials(player)) {
                takeItem(container, selectedSlotIndex, 1);
            }
            ItemAPI.spawn(block, "casualness_delight:bowl_of_sweet_rice", 1);
            player.playSound("use.cloth", block.location);
            block.setPermutation(block.permutation.withState('casualness_delight:food_block_stage', state + 1));
        }
    }
}
export class SweetRiceComponentRegister {
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('casualness_delight:sweet_rice', new SweetRiceComponent());
    }
}

__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], SweetRiceComponentRegister.prototype, "register", null);