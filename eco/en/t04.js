addEn('eco','t04',{
title:'Adaptations and Ecological Laws',
summary:'Adaptation, ecological niche, three types of adaptation (structural, behavioural, physiological), Liebig\'s law of the minimum and Shelford\'s law of tolerance.',
body:String.raw`
<h2><span class="k">1</span>What is adaptation</h2>
<div class="box def"><span class="t">Definition</span><b>Adaptation</b> — a biological mechanism by which organisms adjust to a new environment or to a change in the familiar one. The word denotes both the current state of being adapted and the dynamic evolutionary process that leads to it. Adaptation is first of all a process, not a part of the body.</div>
<p>All adaptations help to survive in one's <b>ecological niche</b> — the position of a species in the ecosystem: the range of conditions required for its existence and its ecological role. Evolution (<i>evolution</i>) is the change of heritable traits of populations over a series of generations; its basis is genes (<i>gene</i>) and <b>mutations</b> (<i>mutation</i>) — changes in the DNA sequence.</p>
<div class="box ex"><span class="t">Example: the peppered moth</span>Before industrialization, light-coloured moths were hard to see on pale tree trunks. When soot polluted the trees, dark forms survived and reproduced: pollution (<i>pollution</i>) changed selection, and the population adapted.</div>

<h2><span class="k">2</span>Three types of adaptation</h2>
<div class="tw"><table><thead><tr><th>Type</th><th>Essence</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Structural</b></td><td>physical features of the organism: shape, coverings, armament, internal structure</td><td>body covering (fur, feathers, spines), beak shape, thick succulent tissue for water storage, coloration</td></tr>
<tr><td><b>Behavioural</b></td><td>heritable behavioural sequences (instincts) and the ability to learn</td><td>searching for food, mating, vocalizations, migration (the gray whale's long journeys), hunting</td></tr>
<tr><td><b>Physiological</b></td><td>special functions of the organism and maintenance of homeostasis</td><td>venom production, slime secretion, phototropism, thermoregulation (constant body temperature in mammals), ion balance, growth and development</td></tr>
</tbody></table></div>
<div class="box warn"><span class="t">Common mistake</span>Mating and vocalizations are <b>behavioural</b>, not physiological. Body covering and armament are <b>structural</b>. If the question is about chemistry or the work of systems (venom, slime, temperature regulation), it is <b>physiological</b>.</div>
<div class="box ex"><span class="t">Example: the gray whale</span>Gray whale (<i>Eschrichtius robustus</i>): migration over thousands of kilometres — behavioural; a thick blubber layer and a streamlined body — structural; maintaining a constant body temperature — physiological.</div>

<h2><span class="k">3</span>Liebig's law of the minimum</h2>
<p>Justus von Liebig (19th century, Germany), one of the founders of agricultural chemistry, formulated the <b>Law of the Minimum</b>: if one of the necessary nutrients is lacking, the plant will grow poorly, even if all the others are abundant. Growth is limited by the resource that is in minimum supply.</p>
<div class="box ex"><span class="t">Example</span>Wheat receives plenty of light, water, nitrogen and potassium, but almost no phosphorus: the yield is determined by phosphorus. Adding nitrogen will do nothing — the specific deficit must be eliminated.</div>

<h2><span class="k">4</span>Shelford's law of tolerance</h2>
<p>Victor Shelford (1911), an American zoologist, helped establish ecology as a separate science. <b>Law of Tolerance</b>: an organism's success depends on a complex of conditions; for each factor there is a minimum, an optimum and a maximum. The abundance and distribution of an organism are limited when the level of a factor goes beyond the limits of its tolerance.</p>
<ul>
<li><b>Tolerance</b> — the ability of an organism to endure changes in environmental conditions.</li>
<li><b>Tolerance curve</b> — a graph of the organism's success as a function of the factor's value: an optimum zone in the centre, stress zones at the edges, and beyond them zones where the organism dies.</li>
</ul>
<h3>Steno- and eury- organisms</h3>
<div class="tw"><table><thead><tr><th>Type</th><th>Meaning</th></tr></thead><tbody>
<tr><td>stenophagous / euryphagous</td><td>narrow / wide food specialization</td></tr>
<tr><td>stenohaline</td><td>tolerates a narrow range of salinity (echinoderms, Echinodermata)</td></tr>
<tr><td>stenophotic</td><td>narrow range of light intensity (deep-sea fish)</td></tr>
<tr><td>stenobaric</td><td>narrow range of pressure</td></tr>
<tr><td>stenohygric</td><td>narrow range of humidity</td></tr>
</tbody></table></div>
<div class="box tip"><span class="t">Remember</span>The prefix <b>steno-</b> means "narrow" (low tolerance), <b>eury-</b> means "wide" (high tolerance). Liebig is about the shortage of a single resource (minimum); Shelford is about the fact that both shortage and excess are dangerous.</div>
<div class="box ex"><span class="t">Example</span>A euryhaline fish (salmon) lives both in a river and in the sea. A stenohaline marine starfish would die in fresh water. Narrow tolerance makes a species vulnerable to environmental change, for example pollution and migration into urban areas.</div>
`,
practice:[
{q:String.raw`Determine the type of adaptation (structural / behavioural / physiological): (a) a snake produces venom; (b) a bird sings to attract a mate; (c) a hedgehog has spines; (d) a lizard warms itself on a stone in the morning; (e) a mammal maintains a body temperature of 37 °C; (f) slime on a snail's skin.`,
 a:String.raw`(a) physiological; (b) behavioural (vocalization/mating); (c) structural (armament, body covering); (d) behavioural; (e) physiological (thermoregulation, homeostasis); (f) physiological (secreting slime).`},
{q:String.raw`Explain the difference between the laws of Liebig and Shelford.`,
 a:String.raw`Liebig: growth is limited by the resource in minimum supply, even if the others are sufficient. Shelford: for each factor there is a minimum, an optimum and a maximum, and an organism's success declines both with a shortage and with an excess of a factor; this determines the distribution of the species.`},
{q:String.raw`In a greenhouse, cucumbers received an excess of nitrogen and water but little potassium, and they grow poorly. Which law operates here and what should be done?`,
 a:String.raw`Liebig's law of the minimum: potassium is the limiting factor. Adding nitrogen or water is useless; potassium fertilizer should be applied to eliminate the limiting factor.`},
{q:String.raw`What does a tolerance curve show? Describe its three zones for temperature.`,
 a:String.raw`It shows the dependence of viability on the value of a factor. The centre is the optimum zone (maximum activity); on either side are stress zones (the organism survives but does not reproduce); the extreme zones are the pessimum and death. For temperature: optimum, cold and heat stress, lethal cold and heat.`},
{q:String.raw`Decode the terms and give an organism for each: stenohaline, stenophotic, stenohygric.`,
 a:String.raw`Stenohaline — narrow tolerance of salinity (echinoderms, for example a starfish). Stenophotic — narrow tolerance of light intensity (deep-sea fish). Stenohygric — narrow range of humidity (moisture-loving amphibians, mosses of shaded forests).`},
{q:String.raw`Using the peppered moth as an example, explain how mutation, gene, evolution and adaptation are related.`,
 a:String.raw`Mutations in genes produced dark colouration in some moths. When the tree trunks darkened with soot, dark individuals were less often eaten by birds and left more offspring. The frequency of the dark allele increased — this is evolution of the population, and the result is an adaptation (structural — coloration).`}
],
quiz:[
{q:String.raw`The PHYSIOLOGICAL ADAPTATION is:`,options:[String.raw`mating`,String.raw`vocalizations`,String.raw`body covering`,String.raw`secreting slime`],solution:String.raw`Secreting slime is physiological. Mating and vocalizations are behavioural; body covering is structural.`},
{q:String.raw`The PHYSIOLOGICAL ADAPTATION is:`,options:[String.raw`armament`,String.raw`vocalizations`,String.raw`body covering`,String.raw`mammal's ability to maintain constant body temperature`],solution:String.raw`Thermoregulation is homeostasis — a physiological adaptation.`},
{q:String.raw`The migration of the gray whale is an adaptation of the:`,options:[String.raw`structural type`,String.raw`behavioural type`,String.raw`physiological type`,String.raw`genetic type only`],solution:String.raw`Migration is behavioural.`},
{q:String.raw`The law of the minimum was formulated by:`,options:[String.raw`Victor Shelford`,String.raw`Charles Elton`,String.raw`Justus von Liebig`,String.raw`Eugene Odum`],solution:String.raw`Justus von Liebig. Shelford formulated the law of tolerance.`},
{q:String.raw`The law of tolerance states that:`,options:[String.raw`only the scarcest resource matters`,String.raw`each factor has a minimum, optimum and maximum for an organism`,String.raw`all species are equally tolerant`,String.raw`adaptation is always structural`],solution:String.raw`Shelford (1911): a minimum, an optimum and a maximum for each factor.`},
{q:String.raw`The prefix "steno-" means:`,options:[String.raw`wide tolerance`,String.raw`narrow tolerance`,String.raw`high temperature`,String.raw`deep water`],solution:String.raw`Steno- = narrow range; eury- = wide range.`},
{q:String.raw`An ecological niche is:`,options:[String.raw`a place where a species hides`,String.raw`the position and role of a species in an ecosystem`,String.raw`the largest habitat`,String.raw`the number of species in a biome`],solution:String.raw`A niche is the position of a species in the ecosystem: its conditions and role.`},
{q:String.raw`A change in the DNA sequence of an organism is called:`,options:[String.raw`evolution`,String.raw`gene`,String.raw`mutation`,String.raw`migration`],solution:String.raw`Mutation. A gene is a unit of heredity; evolution is the change of populations over generations.`},
{q:String.raw`A succulent is a plant adapted to:`,options:[String.raw`storing water`,String.raw`living in the deep ocean`,String.raw`cold polar waters`,String.raw`eating insects`],solution:String.raw`Succulents store water in their fleshy tissues (a structural adaptation).`}
]
});
