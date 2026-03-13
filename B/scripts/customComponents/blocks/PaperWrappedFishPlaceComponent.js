var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BlockPermutation, Direction, system, StartupEvent } from "@minecraft/server";
import { horizontalDirectionOf, hasLimitedMaterials } from "../../lib/EntityUtil";
import { takeItem } from "../../lib/ItemUtil";
import { methodEventSub } from "../../lib/eventHelper";
class PaperWrappedFishPlaceComponent {
    constructor() {
        this.onTick = this.onTick.bind(this);
        this.beforeOnPlayerPlace = this.beforeOnPlayerPlace.bind(this);
    }
    beforeOnPlayerPlace(args) {
        const block = args.block;
        const player = args.player;
        const inventory = player?.getComponent("inventory");
        const container = inventory?.container;
        if (!player)
            return;
        const itemId = container?.getSlot(player.selectedSlotIndex).typeId;
        if (!itemId || itemId != 'casualness_delight:paper_wrapped_fish' || args.face != Direction.Up)
            return;
        args.cancel = true;
        system.run(() => {
            if (!player)
                return;
            const facing = horizontalDirectionOf(player);
            const opposites = {
                [Direction.North]: Direction.South,
                [Direction.South]: Direction.North,
                [Direction.East]: Direction.West,
                [Direction.West]: Direction.East
            };

            const direction = opposites[facing].toLowerCase();
            const otherDirection = facing.toLowerCase();

            let other;
            switch (direction) {
                case 'east':
                    other = block?.east();
                    break;
                case 'west':
                    other = block?.west();
                    break;
                case 'north':
                    other = block?.north();
                    break;
                case 'south':
                    other = block?.south();
                    break;
            }
            if (!other?.isAir)
                return;

            const mainPerm = BlockPermutation.resolve('casualness_delight:paper_wrapped_fish_main', { 'minecraft:cardinal_direction': direction, 'farmersdelight:init': true });
            const otherPerm = BlockPermutation.resolve('casualness_delight:paper_wrapped_fish_other', { 'minecraft:cardinal_direction': otherDirection, 'farmersdelight:init': true });
            player.playSound("dig.cloth", block.location);
            block?.setPermutation(mainPerm);
            other?.setPermutation(otherPerm);
            if (hasLimitedMaterials(player)) {
                takeItem(container, player.selectedSlotIndex, 1);
            }
        });
    }
    onTick(args) {
        const main = args.block;
        const direction = main.permutation.getState('minecraft:cardinal_direction');
        let other;
        switch (direction) {
            case 'east':
                other = main?.east();
                break;
            case 'west':
                other = main?.west();
                break;
            case 'north':
                other = main?.north();
                break;
            case 'south':
                other = main?.south();
                break;
        }
        if (main.typeId == 'casualness_delight:paper_wrapped_fish_main') {
            if (other?.typeId != 'casualness_delight:paper_wrapped_fish_other') {
                main.dimension.runCommand(`setblock ${main.location.x} ${main.location.y} ${main.location.z} air destroy`);
                main.dimension.runCommand(`setblock ${other?.location.x} ${other?.location.y} ${other?.location.z} air destroy`);
            }
        }
        else if (main.typeId == 'casualness_delight:paper_wrapped_fish_other') {
            if (other?.typeId != 'casualness_delight:paper_wrapped_fish_main') {
                main.dimension.runCommand(`setblock ${main.location.x} ${main.location.y} ${main.location.z} air destroy`);
                main.dimension.runCommand(`setblock ${other?.location.x} ${other?.location.y} ${other?.location.z} air destroy`);
            }
        }
    }
}
export class PaperWrappedFishPlaceComponentRegister {
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('casualness_delight:paper_wrapped_fish_place', new PaperWrappedFishPlaceComponent());
    }
}
__decorate([
    methodEventSub(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], PaperWrappedFishPlaceComponentRegister.prototype, "register", null);