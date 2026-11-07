var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EntityHurtAfterEvent, world, EntityEquippableComponent, EquipmentSlot } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";
export class LootingRegister {
    looting(args) {
        const hurtEntity = args?.hurtEntity;
        if (!hurtEntity?.typeId || hurtEntity.typeId !== 'minecraft:donkey') return;
        const health = hurtEntity.getComponent('minecraft:health');
        if (!health || health.currentValue > 0 || hurtEntity.getComponent('minecraft:is_baby')) return;
        const damagingEntity = args.damageSource?.damagingEntity;
        if (!damagingEntity?.typeId) return;
        let lootingLevel = 0;
        try {
            const mainHand = damagingEntity.getComponent(EntityEquippableComponent.componentId)?.getEquipmentSlot(EquipmentSlot.Mainhand);
            const item = mainHand?.getItem();
            lootingLevel = item?.getComponent("minecraft:enchantable")?.getEnchantment("looting")?.level || 0;
        } catch (e) { }
        ItemAPI.spawn(hurtEntity, 'casualness_delight:raw_donkey_meat', Math.floor(Math.random() * 2) + 1 + (lootingLevel > 0 ? Math.floor(Math.random() * (lootingLevel + 1)) : 0));
    }
}
__decorate([
    EventAPI.register(world.afterEvents.entityHurt),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EntityHurtAfterEvent]),
    __metadata("design:returntype", void 0)
], LootingRegister.prototype, "looting", null);