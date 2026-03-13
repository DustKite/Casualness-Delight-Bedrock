import { SortableRecipeManager } from "../../lib/RecipeManager";
const FRY_RECIPES_BY_TAG = new SortableRecipeManager();
const FRY_RECIPES_BY_ID = new Map([
    // 炸鱼
    ["#minecraft:is_fish", { result: "casualness_delight:fried_fish", time: 200 }],

    ["minecraft:cod", { result: "casualness_delight:fried_fish", time: 200 }],
    ["minecraft:cooked_cod", { result: "casualness_delight:fried_fish", time: 200 }],
    ["minecraft:salmon", { result: "casualness_delight:fried_fish", time: 200 }],
    ["minecraft:cooked_salmon", { result: "casualness_delight:fried_fish", time: 200 }],
    ["minecraft:pufferfish", { result: "casualness_delight:fried_fish", time: 200 }],
    ["minecraft:tropical_fish", { result: "casualness_delight:fried_fish", time: 200 }],

    // 炸猪排
    ["minecraft:porkchop", { result: "casualness_delight:tonkatsu", time: 200 }],

    // 薯片
    ["casualness_delight:potato_slice", { result: "casualness_delight:potato_chip", time: 200 }],
    ["rusticdelight:potato_slices", { result: "casualness_delight:potato_chip", time: 200 }],
    ["rusticdelight:baked_potato_slices", { result: "casualness_delight:potato_chip", time: 200 }],

    // 炸鸡块
    ["farmersdelight:chicken_cuts", { result: "casualness_delight:fried_chicken_chip", time: 200 }],

    // 春卷
    ["casualness_delight:raw_spring_roll", { result: "casualness_delight:spring_roll", time: 200 }],
    ["rusticdelight:spring_rolls", { result: "casualness_delight:spring_roll", time: 200 }],

    // 炸饺子
    ["casualness_delight:raw_fried_dumpling", { result: "casualness_delight:fried_dumpling", time: 200 }]
]);
export function registerFryRecipe(tagOrId, recipe) {
    if (tagOrId[0] === "#") {
        recipe.ingredientTag = tagOrId.substring(1);
        FRY_RECIPES_BY_TAG.addSortableRecipe(recipe);
    }
    else {
        FRY_RECIPES_BY_ID.set(tagOrId, recipe);
    }
}
export function isFryable(stack) {
    return FRY_RECIPES_BY_ID.has(stack.typeId)
        || FRY_RECIPES_BY_TAG.findSortedRecipe(recipe => stack.hasTag(recipe.ingredientTag));
}
export function findFryRecipe(stack) {
    return FRY_RECIPES_BY_ID.get(stack.typeId)
        ?? FRY_RECIPES_BY_TAG.findSortedRecipe(recipe => stack.hasTag(recipe.ingredientTag));
}