import { SortableRecipeManager } from "../../lib/RecipeManager";
const FRY_RECIPES_BY_TAG = new SortableRecipeManager();
const FRY_RECIPES_BY_ID = new Map();
export function registerFryRecipe(tagOrId, recipe) {
    if (tagOrId[0] === "#") {
        recipe.ingredientTag = tagOrId.substring(1);
        FRY_RECIPES_BY_TAG.addSortableRecipe(recipe);
    }
    else {
        FRY_RECIPES_BY_ID.set(tagOrId, recipe);
    }
}

// 炸鱼
registerFryRecipe("#minecraft:is_fish", { result: "casualness_delight:fried_fish", time: 200 });

// 炸猪排
registerFryRecipe("minecraft:porkchop", { result: "casualness_delight:tonkatsu", time: 200 });

// 薯片
registerFryRecipe("#farmersdelight:potato_slices", { result: "casualness_delight:potato_chip", time: 200 });
registerFryRecipe("#farmersdelight:cooked_potato_slices", { result: "casualness_delight:potato_chip", time: 200 });

// 炸鸡块
registerFryRecipe("farmersdelight:chicken_cuts", { result: "casualness_delight:fried_chicken_chip", time: 200 });

// 春卷
registerFryRecipe("casualness_delight:raw_spring_roll", { result: "casualness_delight:spring_roll", time: 200 });
registerFryRecipe("rusticdelight:spring_rolls", { result: "casualness_delight:spring_roll", time: 200 });

// 炸饺子
registerFryRecipe("casualness_delight:raw_fried_dumpling", { result: "casualness_delight:fried_dumpling", time: 200 });
registerFryRecipe("#dumplings_delight:dumpling", { result: "casualness_delight:fried_dumpling", time: 200 });

// 炸糕
registerFryRecipe("#farmersdelight:is_dough", { result: "casualness_delight:fried_cake", time: 200 });

// 炸蘑菇
registerFryRecipe("minecraft:red_mushroom", { result: "casualness_delight:fried_mushroom", time: 200 });
registerFryRecipe("minecraft:brown_mushroom", { result: "casualness_delight:fried_mushroom", time: 200 });
registerFryRecipe("minecraft:warped_fungus", { result: "casualness_delight:fried_strange_mushroom", time: 200 });
registerFryRecipe("minecraft:crimson_fungus", { result: "casualness_delight:fried_strange_mushroom", time: 200 });

export function isFryable(stack) {
    return FRY_RECIPES_BY_ID.has(stack.typeId)
        || FRY_RECIPES_BY_TAG.findSortedRecipe(recipe => stack.hasTag(recipe.ingredientTag));
}
export function findFryRecipe(stack) {
    return FRY_RECIPES_BY_ID.get(stack.typeId)
        ?? FRY_RECIPES_BY_TAG.findSortedRecipe(recipe => stack.hasTag(recipe.ingredientTag));
}