ServerEvents.recipes(event => {
    // .energizing([inputs, ...], output, energy)
	event.recipes.powah.energizing(['6x minecraft:blue_ice'], '3x powah:dry_ice', 30000)
})