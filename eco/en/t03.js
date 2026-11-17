addEn('eco','t03',{
title:'Organism and Environment: Habitats, Factors, Biomes',
summary:'Habitat, abiotic and biotic factors, limiting factors, and the abiotic conditions of the main biomes.',
body:String.raw`
<h2><span class="k">1</span>Habitat</h2>
<div class="box def"><span class="t">Definition</span><b>Habitat</b> — the natural "home" of an organism: the specific territory or type of environment where a species lives, grows and interacts with others. It includes the physical surroundings (soil, water) and biotic factors (food, other organisms).</div>
<p>Two major types:</p>
<ul>
<li><b>Terrestrial habitats</b> (land): forests, meadows, deserts, mountains. Organisms are adapted to temperature, precipitation and soil type.</li>
<li><b>Aquatic habitats</b> (water): freshwater (rivers, lakes, ponds), marine (oceans, seas, coral reefs), and <b>estuaries</b> (places where rivers flow into the sea).</li>
</ul>
<p>The largest habitat is the ocean. <b>Endemic</b> species occur only in certain habitats (kangaroos in Australia). Habitats change over time — this process is called <b>ecological succession</b>. Loss of habitats due to deforestation, climate change and urbanization threatens biodiversity.</p>

<h2><span class="k">2</span>Abiotic factors</h2>
<p><b>Abiotic factors</b> — the non-living part of the environment: all the physical and chemical characteristics of the ecosystem in the atmosphere, hydrosphere and lithosphere. The main ones: water, sunlight, temperature, soil, atmosphere, pH, air humidity, wind, elevation.</p>
<ul>
<li><b>Water</b> — life is impossible without water.</li>
<li><b>Sunlight</b> — the main source of energy; needed for photosynthesis: plants make food and oxygen from carbon dioxide and water.</li>
<li><b>Temperature</b> — determines the rate of metabolic reactions (enzymes); animals have fur and other adaptations.</li>
<li><b>Soil</b> — rock with decomposed remains; roots take up water and minerals; its composition determines water-holding capacity. In a water body, the bottom sediment determines the types of benthic animals.</li>
</ul>
<div class="box ex"><span class="t">Example</span>In a tropical forest the decisive abiotic factor is precipitation; in a desert, sand and water deficit; in the sea, salinity, currents and pressure.</div>

<h2><span class="k">3</span>Biotic components</h2>
<div class="tw"><table><thead><tr><th>Group</th><th>Type of nutrition</th><th>Role</th><th>Examples</th></tr></thead><tbody>
<tr><td>producers</td><td>autotrophs</td><td>create food from light energy (or other sources, for example hydrothermal energy)</td><td>plants, algae: mountain ash, kauri, redwood</td></tr>
<tr><td>consumers</td><td>heterotrophs</td><td>feed on food produced by others</td><td>herbivores (lemming), carnivores (mongoose), omnivores, rhinoceros, anteater</td></tr>
<tr><td>decomposers</td><td>detritivores</td><td>break down dead remains into simple substances that can be reused</td><td>fungi, bacteria</td></tr>
</tbody></table></div>
<div class="box warn"><span class="t">Common mistake</span>Fungi and bacteria are not producers or consumers, but <b>decomposers</b>. Mountain ash and kauri are producers (trees), while the rhinoceros and mongoose are consumers.</div>

<h2><span class="k">4</span>Limiting factors</h2>
<p><b>Limiting factor</b> — anything that restricts the size of a population and slows or stops its growth; usually a shortage of a resource (food, water, space). If a pond has little space, the limiting factor is space. Limiting factors determine the <b>carrying capacity</b> of the environment — the maximum population that the environment can support.</p>

<h2><span class="k">5</span>Biomes and their abiotic factors</h2>
<div class="tw"><table><thead><tr><th>Biome</th><th>Abiotic factors</th></tr></thead><tbody>
<tr><td>Coniferous forest (temperate conifer forest)</td><td>warm summer, cold winter; abundant precipitation — giants (redwoods, mountain ash, kauri)</td></tr>
<tr><td>Taiga (boreal forest)</td><td>long cold winter, short winter days, short growing season with long summer days, persistent snow cover, moderate to high precipitation; about 17% of land area</td></tr>
<tr><td>Desert</td><td>less than 250 mm of precipitation per year, very hot days and cold nights (temperature drops sharply), aridity</td></tr>
<tr><td>Polar regions</td><td>cold, snow and ice; only cold-tolerant algae grow on snow; penguins, seals and polar bears live here</td></tr>
<tr><td>Tundra</td><td>very cold, short summer, little precipitation, permafrost, low vegetation</td></tr>
<tr><td>Deep ocean</td><td>darkness (light does not penetrate), high pressure, cold; life depends on organic matter falling from above</td></tr>
<tr><td>Coral reef</td><td>warm, shallow, well-lit water, distinct zonation; enormous diversity</td></tr>
<tr><td>Marsh</td><td>water at or above the surface, permanent waterlogging of the soil</td></tr>
<tr><td>Monsoon forest / African savanna</td><td>pronounced alternation of dry and rainy seasons; in the savanna, high temperatures and grass vegetation</td></tr>
</tbody></table></div>
<div class="box tip"><span class="t">Remember</span>When describing a biome, always name the temperature, precipitation (humidity), light, soil, and special factors (salinity, pressure, wind). Sample answer: "Desert — low rainfall, temperature plummets at night, high aridity".</div>
`,
practice:[
{q:String.raw`Match: 1) producers, 2) consumers, 3) decomposers, with examples: A) fungi, B) mountain ash, C) mongoose, D) bacteria, E) kauri tree, F) lemming, G) rhinoceros.`,
 a:String.raw`1 (producers): B, E. 2 (consumers): C, F, G. 3 (decomposers): A, D.`},
{q:String.raw`Fill in a table of abiotic factors for: desert, polar regions, deep ocean, tundra, taiga, African savanna. Give 1–2 factors for each.`,
 a:String.raw`Desert: less than 250 mm of precipitation, large day-night temperature difference. Polar regions: cold, snow and ice, little light in winter. Deep ocean: no light, high pressure. Tundra: low temperatures, permafrost. Taiga: long cold winter, snow cover, short summer. African savanna: high temperatures, seasonal precipitation (dry and wet seasons).`},
{q:String.raw`Read the statements about the taiga and correct the false ones: (1) the taiga occupies about 20% of land; (2) winters are long and very cold; (3) winter days are long; (4) in North America the taiga covers Mexico and California; (5) in Asia the taiga is found in Russia, China and Mongolia.`,
 a:String.raw`(1) F: about 17%. (2) T. (3) F: winter days are short. (4) F: in North America the taiga covers Canada and Alaska, not Mexico. (5) T.`},
{q:String.raw`In a 100 m³ pond the number of carp has risen sharply, and they have begun to die. Name the limiting factor and explain.`,
 a:String.raw`The limiting factor may be space, oxygen or food: when density exceeds the carrying capacity, the resource becomes scarce, population growth stops, and some individuals die.`},
{q:String.raw`How does a terrestrial habitat differ from an aquatic habitat? Give two examples of each.`,
 a:String.raw`Terrestrial — on land: forests, deserts, meadows, mountains. Aquatic — in water: freshwater (rivers, lakes) and marine (oceans, coral reefs), as well as estuaries.`},
{q:String.raw`Explain why there are no plant producers in the deep ocean and what the food chain rests on there.`,
 a:String.raw`Light does not reach it, so there is no photosynthesis. Life depends on dead matter and excrement falling from the upper layers (detritus).`}
],
quiz:[
{q:String.raw`Organisms that are CONSUMERS:`,options:[String.raw`mountain ash, kauri tree`,String.raw`rhinoceros, mongoose`,String.raw`fungi, bacteria`,String.raw`algae, moss`],solution:String.raw`The rhinoceros and mongoose are heterotrophic consumers. Trees are producers; fungi and bacteria are decomposers.`},
{q:String.raw`Decomposers are:`,options:[String.raw`lemmings`,String.raw`fungi and bacteria`,String.raw`redwood trees`,String.raw`anteaters`],solution:String.raw`Decomposers are fungi and bacteria.`},
{q:String.raw`Which factor is NOT abiotic?`,options:[String.raw`pH`,String.raw`wind`,String.raw`salinity`,String.raw`predators`],solution:String.raw`Predators are a biotic factor. The others are physical and chemical conditions.`},
{q:String.raw`Autotrophs make food using:`,options:[String.raw`other animals`,String.raw`photosynthesis or other energy sources`,String.raw`dead matter only`,String.raw`only soil minerals`],solution:String.raw`Autotrophs are producers: they use light (or the chemical energy of hydrothermal vents).`},
{q:String.raw`A territory that receives less than ... of precipitation per year is considered a desert:`,options:[String.raw`250 mm`,String.raw`750 mm`,String.raw`1500 mm`,String.raw`100 cm`],solution:String.raw`Less than 250 mm.`},
{q:String.raw`What determines the carrying capacity?`,options:[String.raw`limiting factors`,String.raw`number of species`,String.raw`average temperature only`,String.raw`migration of predators`],solution:String.raw`The carrying capacity of the environment is set by limiting factors (resources).`},
{q:String.raw`An estuary is:`,options:[String.raw`a desert oasis`,String.raw`where a river meets the sea`,String.raw`a tundra lake`,String.raw`a deep ocean trench`],solution:String.raw`An estuary is the mouth of a river where fresh water meets sea water.`},
{q:String.raw`The main biotic component that returns substances to the cycle:`,options:[String.raw`producers`,String.raw`consumers`,String.raw`decomposers`,String.raw`abiotic factors`],solution:String.raw`Decomposers break down remains into simple substances.`},
{q:String.raw`Which biome is described by the words "long winters, persistent snowpack, conifers (pine, spruce, larch)"?`,options:[String.raw`desert`,String.raw`taiga`,String.raw`coral reef`,String.raw`savanna`],solution:String.raw`This is the taiga — the boreal forest.`}
]
});
