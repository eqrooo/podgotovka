addEn('eco','t06',{
title:'Ecosystems: Structure, Types, Food Chains and Pyramids',
summary:'What an ecosystem is, its types (terrestrial, freshwater, marine, technoecosystems, agroecosystems), trophic levels, food chains and webs, ecological pyramids and the 10% rule.',
body:String.raw`
<h2><span class="k">1</span>Concept and structure of an ecosystem</h2>
<div class="box def"><span class="t">Definition</span><b>Ecosystem</b> — a system consisting of biotic and abiotic components that function as a single whole. Simple definition: ecosystem = community + environment.</div>
<p>Biotic components are all living organisms (producers, consumers, decomposers); abiotic components are non-living nature (light, water, air, mineral salts). The idea of the ecosystem as an integrated system was developed by Eugene Odum, the "father of modern ecology"; his ideas were partly inspired by his father, Howard T. Odum.</p>

<h2><span class="k">2</span>Types of ecosystems</h2>
<div class="tw"><table><thead><tr><th>Type</th><th>Characteristics</th><th>Examples</th></tr></thead><tbody>
<tr><td>Terrestrial</td><td>a land community and the interaction of its biotic and abiotic components</td><td>tundra, taiga, temperate deciduous forests, tropical rainforests, grasslands, deserts</td></tr>
<tr><td>Freshwater</td><td>a part of aquatic ecosystems with low salt content</td><td>lakes, ponds, rivers, streams, springs, bogs, wetlands</td></tr>
<tr><td>Marine</td><td>an aquatic environment with a high content of dissolved salt</td><td>open ocean, deep-sea ocean, coastal marine ecosystems</td></tr>
<tr><td>Technoecosystem</td><td>an ecosystem with advanced technology, a market economy and a large ecological footprint</td><td>cities, industrial areas, technical reservoirs and hydroelectric plants</td></tr>
<tr><td>Agroecosystem</td><td>an ecosystem that provides food production on farms and in gardens</td><td>fields, pastures, gardens, rice-fish systems, agroforestry, aquaculture</td></tr>
</tbody></table></div>
<p><b>Technoecosystem</b> (the idea of Howard T. Odum and Zeev Naveh): a human environment (roads, factories, power plants, cities), a complex network of relationships that requires a lot of energy and resources; flows of energy and information go through technologies; such systems often compete with natural ones or act "parasitically" on them. Technical systems form the <i>technosphere</i>.</p>
<p>An <b>agroecosystem</b> is distinguished from a natural ecosystem by: human management, a modified environment, dependence on external inputs of energy and nutrients (fertilizers, water), high productivity of food, fibre and fuel, but simpler biodiversity, and therefore vulnerability to pests and diseases. It includes managed fields, neighbouring natural habitats and human settlements. There are polycultures, monocultures, mixed systems, crop-livestock systems, rangelands, pastures and fallow lands.</p>
<div class="box warn"><span class="t">Common mistake</span>An agroecosystem is considered self-sustaining. In fact, without external energy and fertilizers it does not work, and its species diversity is lower than in a natural ecosystem.</div>

<h2><span class="k">3</span>Trophic levels, food chains and webs</h2>
<p>Living matter is organized into <b>trophic levels</b>: organisms with the same type of nutrition belong to the same level. Producers always form the base.</p>
<ul>
<li><b>Food chain</b> — a simplified linear feeding pathway from a base species to a top consumer: grass → grasshopper → frog → snake → eagle.</li>
<li><b>Food web</b> (food cycle) — a network of "who eats whom" in a community; a consumer–resource system.</li>
<li>Consumers are: <b>herbivores</b> (plant-eaters), <b>carnivores</b> (meat-eaters), <b>omnivores</b> (eat both plants and animals).</li>
</ul>
<div class="box ex"><span class="t">Example: a pond</span>Phytoplankton (producer) → Daphnia (herbivore) → crucian carp (consumer 2) → pike (top carnivore). Bacteria and fungi break down the remains (decomposers).</div>

<h2><span class="k">4</span>Ecological pyramids</h2>
<div class="tw"><table><thead><tr><th>Pyramid</th><th>What it shows</th></tr></thead><tbody>
<tr><td>Pyramid of numbers (Charles Elton, 1927)</td><td>the number of organisms at each trophic level</td></tr>
<tr><td>Pyramid of biomass</td><td>the amount of biomass at each level at a given moment</td></tr>
<tr><td>Pyramid of productivity (energy)</td><td>production or biomass turnover, that is, the flow of energy through the food chain</td></tr>
</tbody></table></div>
<p>Each level is shown as a layer whose size is proportional to the number of individuals, the mass or the energy. The pyramid of productivity is usually the most useful, since it shows not a "snapshot" but the flow of energy.</p>
<h3>The 10% rule (Lindeman's law)</h3>
<p>About <b>10%</b> of the energy passes to the next trophic level; the rest is lost as heat, spent on respiration, or not assimilated.</p>
<div class="box ex"><span class="t">Example</span>Producers have accumulated 80 000 kJ. Herbivores will receive 8 000 kJ, first-order carnivores 800 kJ, and top carnivores 80 kJ. That is why chains are rarely longer than 4–5 links.</div>
<div class="box tip"><span class="t">Remember</span>Going up the pyramid, energy and biomass decrease about tenfold at each step. For calculating "backwards": the energy of the previous level = the energy of this level × 10.</div>
`,
practice:[
{q:String.raw`Match: 1) food chain, 2) food web, 3) biomass pyramid, 4) pyramid of productivity, 5) pyramid of numbers. A) shows the number of organisms at each level; B) a linear feeding pathway from a base species to a top consumer; C) shows the production/turnover of biomass at a level; D) a network of "who eats what" connections; E) shows the mass of living matter at each level.`,
 a:String.raw`1-B; 2-D; 3-E; 4-C; 5-A.`},
{q:String.raw`Build a food chain for a pond from: algae, perch, crucian carp, bacteria, Daphnia, heron. Name the roles.`,
 a:String.raw`Algae (producer) → Daphnia (herbivore, consumer 1) → crucian carp (consumer 2) → perch (consumer 3) → heron (top consumer). Bacteria are decomposers that break down remains at all levels.`},
{q:String.raw`Eagles received 1 200 kJ of energy from food over a year. How much energy was contained in the snake level and in the producers, if the chain is: grass → grasshopper → frog → snake → eagle (10% rule)?`,
 a:String.raw`Snakes (level 4): 1 200 × 10 = 12 000 kJ. Frogs (level 3): 120 000 kJ. Grasshoppers (level 2): 1 200 000 kJ. Grass (level 1): 12 000 000 kJ. For each step down, multiply by 10.`},
{q:String.raw`How does an ecosystem differ from an agroecosystem? Name three features.`,
 a:String.raw`An agroecosystem is managed by humans, depends on external inputs of energy and fertilizers, and contains fewer species (vulnerable to pests), whereas a natural ecosystem is self-regulating and has high species diversity.`},
{q:String.raw`Classify: a lake, a megacity, a wheat field, the tundra, an oceanic trench, a bog.`,
 a:String.raw`Lake — freshwater; megacity — technoecosystem; wheat field — agroecosystem; tundra — terrestrial; oceanic trench — marine; bog — freshwater (wetland).`},
{q:String.raw`Why is the pyramid of productivity more informative than the pyramid of biomass?`,
 a:String.raw`Biomass shows a "snapshot" at one moment (a small biomass can be renewed quickly, as in phytoplankton), while productivity shows the rate of production and the flow of energy, and therefore gives a correct picture.`}
],
quiz:[
{q:String.raw`An ecosystem is best defined as:`,options:[String.raw`population only`,String.raw`community plus its environment`,String.raw`the sum of all biospheres`,String.raw`only living organisms`],solution:String.raw`Ecosystem = community + environment.`},
{q:String.raw`A graphic showing the number of organisms at each trophic level:`,options:[String.raw`pyramid of biomass`,String.raw`pyramid of productivity`,String.raw`pyramid of numbers`,String.raw`food web`],solution:String.raw`Pyramid of numbers (Elton, 1927).`},
{q:String.raw`Which ecosystem is characterized by a large ecological footprint and advanced technology?`,options:[String.raw`marine`,String.raw`technoecosystem`,String.raw`freshwater`,String.raw`terrestrial`],solution:String.raw`This is the definition of a technoecosystem.`},
{q:String.raw`What part of the energy usually passes to the next trophic level?`,options:[String.raw`about 90%`,String.raw`about 50%`,String.raw`about 10%`,String.raw`about 1%`],solution:String.raw`Lindeman's rule: about 10%.`},
{q:String.raw`Which of these is an example of a freshwater ecosystem?`,options:[String.raw`open ocean`,String.raw`coral reef`,String.raw`wetland`,String.raw`desert`],solution:String.raw`Wetlands, bogs, lakes, rivers are freshwater ecosystems.`},
{q:String.raw`A food web is:`,options:[String.raw`one linear chain`,String.raw`a network of feeding connections in a community`,String.raw`a list of decomposers`,String.raw`a type of biome`],solution:String.raw`A food web is a network of feeding relationships; a linear chain is a food chain.`},
{q:String.raw`Agroecosystems typically have:`,options:[String.raw`higher biodiversity than natural ones`,String.raw`no need for external energy`,String.raw`simpler biodiversity and external inputs`,String.raw`no human management`],solution:String.raw`Simplified biodiversity and external inputs (fertilizers, water).`},
{q:String.raw`Eugene Odum is known as:`,options:[String.raw`the father of modern ecology`,String.raw`the author of the biosphere concept`,String.raw`the author of the Law of Tolerance`,String.raw`the discoverer of the greenhouse effect`],solution:String.raw`Eugene Odum is the "father of modern ecology". The biosphere is Vernadsky, tolerance is Shelford, the greenhouse effect is Fourier.`},
{q:String.raw`Animals that eat both plants and animals:`,options:[String.raw`herbivores`,String.raw`carnivores`,String.raw`omnivores`,String.raw`decomposers`],solution:String.raw`Omnivores eat both.`}
]
});
