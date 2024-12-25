ServerEvents.recipes(event => {
    // "energizing": (result: $ItemStack$$Type, ingredients: $List$$Type<($Ingredient$$Type)>, energy: integer) => $Energizing
	event.recipes.powah.energizing(
        Item.of("3x powah:dry_ice"), //result
        [
            Item.of("minecraft:blue_ice"),
            Item.of("minecraft:blue_ice"),
            Item.of("minecraft:blue_ice"),
            Item.of("minecraft:blue_ice"),
            Item.of("minecraft:blue_ice"),
            Item.of("minecraft:blue_ice"),
        ], //input
        30000
    )

})