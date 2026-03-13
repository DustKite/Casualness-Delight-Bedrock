var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";

export class FoodRegister {
    eat(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const useDuration = args.useDuration;

        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "casualness_delight:fish_and_chips":
                    player.addEffect('saturation', 300 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:beef_noodles":
                    player.addEffect('saturation', 90 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:quiche_lorraine_slice":
                    player.addEffect('saturation', 60 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:bowl_of_paper_wrapped_fish":
                    player.addEffect('saturation', 180 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:potato_bobo_chicken":
                    player.addEffect('saturation', 30 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:cabbage_bobo_chicken":
                    player.addEffect('saturation', 30 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:chicken_bobo_chicken":
                    player.addEffect('saturation', 30 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:spring_roll":
                    player.addEffect('saturation', 30 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:fried_dumpling":
                    player.addEffect('saturation', 30 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:phantom_dumplings":
                    player.addEffect('slow_falling', 60 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:phantom_puff":
                    player.addEffect('slow_falling', 40 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:spicy_strips":
                    player.addEffect('haste', 30 * 20, { amplifier: 1 });
                    break;
                case "casualness_delight:green_tongue":
                    player.addEffect('jump_boost', 15 * 20, { amplifier: 2 });
                    player.addEffect('fire_resistance', 8 * 20, { amplifier: 0 });
                    break;
                case "casualness_delight:stargazy_pie_slice":
                    player.addEffect('nausea', 10 * 20, { amplifier: 0 });
                    if (Math.random() < 0.3) {
                        player.addEffect('blindness', 15 * 20, { amplifier: 0 });
                    }
                    break;
            }
        }
    }
}

__decorate([
    EventAPI.register(world.afterEvents.itemCompleteUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FoodRegister.prototype, "eat", null);