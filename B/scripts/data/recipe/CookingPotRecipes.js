const cookingPotRecipes = [
    {
        "identifer": "casualness_delight:fish_and_chips",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "experience": 1.0,
        "time": 200,
        "ingredients": [
            { "item": "farmersdelight:cod_slice" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "farmersdelight:wheat_dough" }
        ],
        "result": {
            "item": "casualness_delight:fish_and_chips"
        }
    },
    {
        "identifer": "casualness_delight:yorkshire_pudding",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "farmersdelight:wheat_dough" },
            { "item": "minecraft:egg" },
            { "item": "minecraft:egg" },
            { "item": "farmersdelight:milk_bottle" }
        ],
        "result": {
            "item": "casualness_delight:yorkshire_pudding"
        }
    },
    {
        "identifer": "casualness_delight:beef_noodles",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "minecraft:beef" },
            { "item": "minecraft:beef" },
            { "item": "farmersdelight:raw_pasta" },
            { "item": "minecraft:carrot" },
            { "tag": "farmersdelight:is_cabbage" },
            { "item": "farmersdelight:onion" }
        ],
        "result": {
            "item": "casualness_delight:beef_noodles"
        }
    },
    {
        "identifer": "casualness_delight:phantom_dumplings",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "minecraft:phantom_membrane" },
            { "tag": "farmersdelight:is_cabbage" },
            { "item": "farmersdelight:onion" },
            { "item": "minecraft:brown_mushroom" }
        ],
        "result": {
            "item": "casualness_delight:phantom_dumplings",
            "count": 2
        }
    },
    {
        "identifer": "casualness_delight:raw_cheese_wheel",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "farmersdelight:milk_bottle" },
            { "item": "farmersdelight:milk_bottle" },
            { "item": "farmersdelight:milk_bottle" },
            [
                { "item": "minecraft:brown_mushroom" },
                { "item": "minecraft:red_mushroom" }
            ],
            [
                { "item": "minecraft:brown_mushroom" },
                { "item": "minecraft:red_mushroom" }
            ],
            [
                { "item": "minecraft:brown_mushroom" },
                { "item": "minecraft:red_mushroom" }
            ]
        ],
        "result": {
            "item": "casualness_delight:raw_cheese_wheel"
        }
    },
    {
        "identifer": "casualness_delight:phantom_puff",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "minecraft:phantom_membrane" },
            [
                { "tag": "brewinandchewin:cheese_wedges" },
                { "tag": "farmersdelight:cheese_slices" }
            ],
            { "item": "farmersdelight:milk_bottle" }
        ],
        "result": {
            "item": "casualness_delight:phantom_puff",
            "count": 2
        }
    },
    {
        "identifer": "casualness_delight:spicy_strips",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "minecraft:rotten_flesh" },
            { "item": "minecraft:rotten_flesh" },
            { "item": "farmersdelight:wheat_dough" },
            { "item": "farmersdelight:onion" }
        ],
        "result": {
            "item": "casualness_delight:spicy_strips"
        }
    },
    {
        "identifer": "casualness_delight:sweet_rice",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "farmersdelight:rice" },
            { "item": "farmersdelight:rice" },
            { "item": "minecraft:honey_bottle" },
            { "item": "minecraft:sugar" },
            { "item": "minecraft:beetroot" },
            { "item": "minecraft:apple" }
        ],
        "result": {
            "item": "casualness_delight:sweet_rice"
        }
    },
    {
        "identifer": "casualness_delight:bobo_chicken",
        "tags": ["cooking_pot"],
        "container": {
            "item": "farmersdelight:tomato_sauce"
        },
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "casualness_delight:raw_cabbage_bobo_chicken" },
            { "item": "casualness_delight:raw_cabbage_bobo_chicken" },
            { "item": "casualness_delight:raw_potato_bobo_chicken" },
            { "item": "casualness_delight:raw_potato_bobo_chicken" },
            { "item": "casualness_delight:raw_chicken_bobo_chicken" },
            { "item": "casualness_delight:raw_chicken_bobo_chicken" }
        ],
        "result": {
            "item": "casualness_delight:bobo_chicken"
        }
    },
    {
        "identifer": "casualness_delight:paper_wrapped_fish",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            [
                { "item": "minecraft:cod" },
                { "item": "minecraft:salmon" }
            ],
            { "item": "farmersdelight:onion" },
            { "item": "farmersdelight:tomato" },
            { "item": "minecraft:potato" },
            { "tag": "farmersdelight:is_cabbage" },
            { "item": "minecraft:potato" }
        ],
        "result": {
            "item": "casualness_delight:paper_wrapped_fish"
        }
    }
];

export { cookingPotRecipes };