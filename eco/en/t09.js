addEn('eco','t09',{
title:'Loss of Biodiversity',
summary:'Levels of biodiversity, species status categories, the main causes of loss (HIPPO), keystone species and trophic cascades, and conservation measures.',
body:String.raw`
<h2><span class="k">1</span>What biodiversity is and why it matters</h2>
<p><b>Biodiversity</b> — the diversity and variability of life on Earth. Three levels are distinguished:</p>
<ul>
<li><b>genetic diversity</b> — the diversity of genes within a species;</li>
<li><b>species diversity</b> — the number and variety of species;</li>
<li><b>ecosystem diversity</b> — the diversity of ecosystems and habitats.</li>
</ul>
<p>Biodiversity provides food, medicines, clean water and air, pollination, and resilience to climate change (<i>resilience</i>). Extinction (<i>extinction</i>) is the final loss of a species; <b>extirpation</b> is the disappearance of a species from a particular area, although it survives somewhere else.</p>

<h2><span class="k">2</span>Species status</h2>
<div class="tw"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
<tr><td>threatened species</td><td>a species facing the danger of extinction in the foreseeable future (a general term for vulnerable and endangered species)</td></tr>
<tr><td>endangered species</td><td>a species with a high risk of extinction</td></tr>
<tr><td>extirpation</td><td>local disappearance of a species in a given area</td></tr>
<tr><td>extinction</td><td>complete disappearance of a species from Earth</td></tr>
<tr><td>habitat fragmentation</td><td>division of a continuous habitat into small isolated patches (by roads, fields, cities)</td></tr>
<tr><td>poaching</td><td>illegal hunting and capture of wild animals and plants</td></tr>
</tbody></table></div>
<div class="box tip"><span class="t">Remember</span>Extirpation — "locally", extinction — "everywhere". Endangered — the species still exists, but the risk is high.</div>

<h2><span class="k">3</span>HIPPO: the main causes of loss</h2>
<div class="tw"><table><thead><tr><th>Letter</th><th>Cause</th><th>Explanation and example</th></tr></thead><tbody>
<tr><td>H</td><td>Habitat loss</td><td>destruction or fragmentation of habitats. Example: clearing the Amazon for cattle pastures</td></tr>
<tr><td>I</td><td>Invasive species</td><td>alien species that displace native ones (competition, predation, disease). Example: rats and goats in the Galápagos, the python in Florida</td></tr>
<tr><td>P</td><td>Pollution</td><td>pollution of water, air, soil. Example: plastic in the ocean, pesticides, acid rain, oil spills</td></tr>
<tr><td>P</td><td>Population (human)</td><td>growth in human numbers, increasing the consumption of land and resources. Example: expansion of cities and fields</td></tr>
<tr><td>O</td><td>Overexploitation</td><td>excessive removal: overfishing, poaching, excessive hunting. Example: whaling, overfishing of cod</td></tr>
</tbody></table></div>
<p>To these is added <b>climate change</b>: warming shifts ranges, causes coral bleaching, and increases the risk of extinction for species unable to migrate or adapt.</p>
<div class="box warn"><span class="t">Common mistake</span>Believing that hunting is the only cause. In fact, the main factor is the loss and fragmentation of habitats. Protected islands may prove ineffective if small isolated populations suffer from inbreeding (see "population bottleneck").</div>

<h2><span class="k">4</span>Case study: sea otters and kelp forests</h2>
<div class="box ex"><span class="t">Example: sea otter</span>In the North Pacific, the sea otter is a <b>keystone species</b>: it feeds on sea urchins. In the 19th century, sea otters were almost wiped out for their fur (direct cause: overhunting). Sea urchins multiplied and ate away the kelp forests: the shelter for fish and invertebrates disappeared, and the ecosystem collapsed. After protection was introduced, the sea otter population recovered and the kelp forests returned.</div>
<ul>
<li><b>Direct cause</b> — hunting for fur.</li>
<li><b>Indirect cause</b> — loss of the predator → explosion in the urchin population → overgrazing of kelp → loss of habitat.</li>
<li><b>Trophic cascade</b> — a chain of changes in which an impact on the top trophic level (predator) successively affects the lower levels and the whole ecosystem.</li>
<li>Lesson: protecting keystone species protects the whole ecosystem.</li>
</ul>

<h2><span class="k">5</span>Biodiversity conservation</h2>
<ul>
<li><b>Biodiversity conservation</b> — protection and management of biodiversity for sustainable development.</li>
<li>Protected areas, wildlife sanctuaries, corridors between fragments.</li>
<li>Fighting poaching and invasive species, fishing quotas (against overfishing).</li>
<li>Breeding programmes, restoration of habitats.</li>
<li>Reduction of pollution and greenhouse gas emissions.</li>
</ul>
<div class="box ex"><span class="t">Example for a mini-project</span>An endangered species: the Amur tiger. Risks: loss of forests, poaching, small population. Environmental factors: decline in hoofed animals (hunting), fragmentation of territory. What can help: sanctuaries, anti-poaching efforts, corridors between forests.</div>
`,
practice:[
{q:String.raw`Define in your own words and suggest a way to remember: extirpation, endangered species, threatened species, habitat fragmentation, poaching.`,
 a:String.raw`Extirpation — a species has disappeared from one area but survives in others ("uprooted" from a region). Endangered species — a species with a high risk of extinction ("danger right now"). Threatened species — a species that may soon face extinction ("under threat"). Habitat fragmentation — splitting of habitat by roads and fields ("like broken glass"). Poaching — illegal hunting ("catch the poacher").`},
{q:String.raw`Decode HIPPO and give your own example for each letter (not from the text).`,
 a:String.raw`H — habitat loss: draining of swamps for construction. I — invasive species: Sosnowsky's hogweed displacing native grasses. P — pollution: an oil slick after a tanker accident. P — population: growing cities absorbing fields and forests. O — overexploitation: overfishing of sturgeon for caviar.`},
{q:String.raw`Build a cause-and-effect chain: invasive species, habitat alteration, overharvesting, pollution → loss of biodiversity (one sentence each).`,
 a:String.raw`Invasive species: alien predators and competitors displace native species. Habitat alteration: replacing forest with farmland deprives species of shelter and food. Overharvesting: removal faster than reproduction reduces the population to a critical level. Pollution: poisons and plastic kill organisms or reduce reproduction.`},
{q:String.raw`Sea otter case: a) the direct cause of the decline; b) how the loss of sea otters led to the collapse of kelp forests; c) what a trophic cascade is; d) why protecting keystone species is important.`,
 a:String.raw`a) Hunting for fur. b) Without the predator, sea urchins multiplied and ate the kelp; the habitat for fish and invertebrates disappeared. c) A chain of consequences in which a change at the top trophic level passes down the chain and alters the whole ecosystem. d) The loss of a keystone species disrupts the whole system, and its restoration returns the ecosystem to normal.`},
{q:String.raw`Give another example of a trophic cascade: wolves in Yellowstone.`,
 a:String.raw`Wolves were exterminated, elk multiplied and browsed willows along the rivers, riverbanks eroded, beavers and birds disappeared. After the wolves returned (1995), the elk became more cautious, the willows recovered, beavers returned, and the banks stabilized.`},
{q:String.raw`Mini-project (5–6 sentences): choose an endangered animal. Why is it under threat, which environmental factors affect it, and can it be saved?`,
 a:String.raw`Example: the black rhinoceros. Under threat because of poaching (for its horn). Factors: loss of savannas to farmland, droughts, fragmentation. It can be saved through protection and anti-poaching patrols, protected areas, relocation of animals, and work with local communities. The population has partly recovered thanks to such measures.`}
],
quiz:[
{q:String.raw`A species with a high risk of extinction is called:`,options:[String.raw`extirpated`,String.raw`endangered`,String.raw`invasive`,String.raw`endemic`],solution:String.raw`Endangered — a high risk of extinction. Extirpated — disappeared from an area.`},
{q:String.raw`Disappearance of a species from one area where it still survives elsewhere:`,options:[String.raw`extinction`,String.raw`extirpation`,String.raw`fragmentation`,String.raw`dispersion`],solution:String.raw`Extirpation is local disappearance.`},
{q:String.raw`In the acronym HIPPO, the first P stands for:`,options:[String.raw`predation`,String.raw`pollution`,String.raw`photosynthesis`,String.raw`poaching`],solution:String.raw`H — habitat loss, I — invasive species, P — pollution, P — population, O — overexploitation.`},
{q:String.raw`Illegal hunting of wild animals is called:`,options:[String.raw`poaching`,String.raw`fragmentation`,String.raw`migration`,String.raw`grazing`],solution:String.raw`Poaching.`},
{q:String.raw`Sea otters are a keystone species because they control populations of:`,options:[String.raw`kelp`,String.raw`sea urchins`,String.raw`sharks`,String.raw`plankton`],solution:String.raw`Sea otters feed on urchins, which would otherwise destroy the kelp.`},
{q:String.raw`A trophic cascade is:`,options:[String.raw`a series of effects passing through trophic levels after a change at one level`,String.raw`a waterfall in a river`,String.raw`a fast growth of plants`,String.raw`a type of habitat`],solution:String.raw`A change at one trophic level is transmitted to others.`},
{q:String.raw`Splitting of a large habitat into small isolated patches:`,options:[String.raw`habitat fragmentation`,String.raw`overfishing`,String.raw`overgrazing`,String.raw`acidification`],solution:String.raw`Habitat fragmentation.`},
{q:String.raw`Which is the main driver of biodiversity loss?`,options:[String.raw`habitat loss`,String.raw`increased sunlight`,String.raw`photosynthesis`,String.raw`predation in stable systems`],solution:String.raw`Habitat loss is the main factor (H in HIPPO).`},
{q:String.raw`What does "overfished" literally mean?`,options:[String.raw`too few fish eaten`,String.raw`too many fish caught so the population cannot recover`,String.raw`fish moved to another sea`,String.raw`fish are protected`],solution:String.raw`Too many were caught, and the remaining population does not recover.`}
]
});
