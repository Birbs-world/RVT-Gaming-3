ServerEvents.recipes(rvt => {
    rvt.remove({id: /.*bauxite.*/})

    rvt.recipes.modern_industrialization.macerator(2,100)
        .itemIn('alltheores:raw_aluminum')
        .itemOut('2x alltheores:dirty_aluminum_dust')
        .itemOut('alltheores:dirty_aluminum_dust',0.5)

    rvt.recipes.modern_industrialization.mixer(2,100)
        .fluidIn('minecraft:water',100)
        .itemIn('alltheores:dirty_aluminum_dust')
        .itemOut('alltheores:aluminum_dust')
        .itemOut('modern_industrialization:carbon_dust',0.5)

    rvt.recipes.modern_industrialization.electrolyzer(16,300)
        .itemIn('10x alltheores:dirty_aluminum_dust')
        .itemOut('4x alltheores:aluminum_dust')
        .itemOut('3x modern_industrialization:titanium_tiny_dust',0.5)
        .fluidOut('modern_industrialization:oxygen', 2000, 0.5)
        .id('rvt:electrolyzer/dirty_aluminum_dust')


})