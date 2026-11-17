addEn('eco','t08',{
title:'The Global Waste Problem',
summary:'Types of waste, methods of treatment (landfill, incineration, recycling), the waste hierarchy, the circular economy, plastic and electronic waste, and reading country data.',
body:String.raw`
<h2><span class="k">1</span>Scale of the problem</h2>
<p>Each person produces on average about 0.7 kg of waste per day (estimates are around 2 billion tonnes of waste per year worldwide), and the volume grows with population, urbanization and consumption. A large share goes to landfills, some is incinerated, and the least is recycled. A huge share is discarded food, and about a million plastic bottles are used every minute around the world.</p>

<h2><span class="k">2</span>Key terms</h2>
<div class="tw"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
<tr><td>municipal solid waste (MSW)</td><td>household waste from homes, shops and offices</td></tr>
<tr><td>landfill</td><td>a dump or landfill site: a place where waste is buried</td></tr>
<tr><td>incineration</td><td>burning of waste at high temperature</td></tr>
<tr><td>leachate</td><td>leachate: contaminated liquid that drains from a landfill</td></tr>
<tr><td>e-waste</td><td>discarded electrical and electronic equipment</td></tr>
<tr><td>single-use plastic</td><td>plastic intended for one-time use</td></tr>
<tr><td>microplastics</td><td>microplastics: plastic particles smaller than 5 mm</td></tr>
<tr><td>circular economy</td><td>a closed-loop economy: materials are reused rather than discarded</td></tr>
<tr><td>extended producer responsibility (EPR)</td><td>the producer's extended responsibility for the product's entire life cycle</td></tr>
<tr><td>waste hierarchy</td><td>priority order: prevent, reuse, recycle, recover, dispose</td></tr>
</tbody></table></div>

<h2><span class="k">3</span>Ways of waste treatment</h2>
<ul>
<li><b>Landfill / open dump.</b> Cheap, but it takes up land, releases methane (a greenhouse gas), produces <b>leachate</b> that contaminates groundwater and soil. Open dumps are especially dangerous: odour, disease, fires.</li>
<li><b>Incineration.</b> Reduces the volume of waste and can produce energy, but releases dioxins, heavy metals and CO<sub>2</sub>; toxic ash remains. It requires expensive filters.</li>
<li><b>Recycling and composting.</b> Processing materials (glass, paper, metal, plastic) and composting organic matter saves raw materials and energy and reduces the volume sent to landfill. Limitations: separate collection and a market for secondary raw materials are required.</li>
</ul>
<div class="box def"><span class="t">Waste hierarchy</span>Waste hierarchy: <b>prevent</b> (do not create) → <b>reuse</b> (use again) → <b>recycle</b> (process into new material) → <b>recover</b> (extract energy) → <b>dispose</b> (bury or discard). Prevention is the most effective; disposal is the least desirable.</div>
<div class="box warn"><span class="t">Common mistake</span>Believing that "recycling solves everything". It is only the third step of the hierarchy: reducing consumption and reusing items is more important. Not all plastic can be recycled, and the quality of recycled material often declines.</div>

<h2><span class="k">4</span>Why plastic is dangerous</h2>
<ul>
<li>It takes hundreds of years to decompose; it accumulates in oceans and soil.</li>
<li>It breaks down into microplastics, which enter organisms, food chains and drinking water.</li>
<li>Animals become entangled in waste or mistake it for food.</li>
<li>Production relies on fossil fuels (increasing CO<sub>2</sub> emissions).</li>
</ul>
<p><b>E-waste</b> contains heavy metals (lead, mercury, cadmium) and valuable metals; if disposed of improperly, it poisons soil and people, but proper recycling recovers the raw materials.</p>

<h2><span class="k">5</span>How to read country data</h2>
<p>A typical table includes: MSW per person (kg/year), the share of recycling and composting, the share of landfill, and the share of incineration. Wealthy countries produce more waste per person (consumption is higher), but often have a high share of recycling (Germany) or incineration (Japan, which has little land). Low-income countries produce less waste, but more often use open dumps and recycle little because of a lack of infrastructure.</p>
<div class="box ex"><span class="t">Example of reasoning</span>Country X: 700 kg per person, 60% recycling, 30% landfill, 10% incineration. Country Y: 200 kg, 5% recycling, 90% landfill. Country X creates 3.5 times more waste per person, but manages it better. The link "wealth — recycling" is strong but not absolute: Japan is wealthy but recycles little because it chooses incineration.</div>

<h2><span class="k">6</span>Solutions</h2>
<ul>
<li>Reduction: avoiding single-use packaging, wasting less food, repairing items.</li>
<li>Separate collection, composting, e-waste drop-off points.</li>
<li>EPR: the producer is responsible for recycling packaging and equipment.</li>
<li>Deposit-return systems for containers, taxes on plastic bags.</li>
<li>Circular economy: designing products for reuse.</li>
</ul>
<div class="box tip"><span class="t">Remember</span>Landfill → leachate and methane; incineration → ash and toxins; the waste hierarchy begins with prevent. Summary: "The best waste is the waste never created".</div>
`,
practice:[
{q:String.raw`Match the definition: 1) leachate, 2) EPR, 3) microplastics, 4) circular economy. A) plastic particles smaller than 5 mm; B) a model in which materials are reused; C) contaminated liquid draining from a landfill; D) a policy of producer responsibility over the whole life cycle.`,
 a:String.raw`1-C; 2-D; 3-A; 4-B.`},
{q:String.raw`Arrange by priority: recycle, dispose, prevent, recover, reuse.`,
 a:String.raw`prevent → reuse → recycle → recover → dispose.`},
{q:String.raw`A table is given (kg per person per year, recycling %, landfill %, incineration %): Country A — 520, 55, 25, 20; Country B — 260, 8, 85, 7; Country C — 410, 18, 12, 70. Determine which country relies most on landfill, which on incineration, and name the risks of each approach.`,
 a:String.raw`B relies most on landfill (85%): risks — leachate, methane, fires, contamination of groundwater. C relies most on incineration (70%): risks — toxic emissions (dioxins), toxic ash, CO2. Country A recycles the most (55%).`},
{q:String.raw`Using the table from the previous task: is there a link between waste per person and the share of recycling? Support your answer with the data.`,
 a:String.raw`The link is ambiguous. Country A produces the most waste (520 kg) and recycles the most (55%); Country B produces less waste (260) and recycles almost nothing (8%). But Country C, with 410 kg, recycles only 18%, preferring incineration. So income level and infrastructure matter more than the volume of waste, and policy choices (incineration or recycling) also have an effect.`},
{q:String.raw`Propose one waste-reduction measure at your university and justify it with two arguments (a mini-essay of 5–6 sentences).`,
 a:String.raw`Example: introduce a deposit system for plastic containers and reusable cups in the canteen. Argument 1: single-use plastic is a major source of waste (about a million bottles are used every minute). Argument 2: a deposit encourages returns and reduces collection costs. Limitation: equipment is needed, which can be addressed through a pilot launch. Conclusion: the measure will reduce the volume of MSW at the very first level of the hierarchy — prevent.`},
{q:String.raw`Why is incineration not considered an ideal solution, even though it reduces the volume of waste?`,
 a:String.raw`It emits toxic substances (dioxins, heavy metals) and CO2; the toxic ash requires disposal; the filters are expensive. Moreover, incineration destroys materials that could be recycled, so in the hierarchy it is only "recover".`}
],
quiz:[
{q:String.raw`Contaminated liquid that drains from a landfill:`,options:[String.raw`compost`,String.raw`leachate`,String.raw`sewage`,String.raw`slurry`],solution:String.raw`This is leachate.`},
{q:String.raw`Which is the TOP priority in the waste hierarchy?`,options:[String.raw`dispose`,String.raw`recover`,String.raw`prevent`,String.raw`recycle`],solution:String.raw`Prevent — do not create waste; dispose is the last step.`},
{q:String.raw`Microplastics are plastic fragments smaller than:`,options:[String.raw`5 mm`,String.raw`5 cm`,String.raw`50 mm`,String.raw`1 m`],solution:String.raw`Less than 5 mm.`},
{q:String.raw`Which policy makes producers responsible for the whole life cycle of a product?`,options:[String.raw`landfill tax`,String.raw`EPR`,String.raw`incineration`,String.raw`open dumping`],solution:String.raw`Extended producer responsibility.`},
{q:String.raw`The main risk of an open dump:`,options:[String.raw`excess oxygen`,String.raw`contamination of groundwater by leachate and methane emissions`,String.raw`nuclear contamination`,String.raw`an increase in biodiversity`],solution:String.raw`Leachate contaminates groundwater, and methane intensifies the greenhouse effect.`},
{q:String.raw`"Discarded electrical and electronic equipment" is called:`,options:[String.raw`MSW`,String.raw`e-waste`,String.raw`microplastics`,String.raw`compost`],solution:String.raw`E-waste.`},
{q:String.raw`Circular economy means:`,options:[String.raw`materials are reused rather than discarded`,String.raw`all waste is burned`,String.raw`production moves abroad`,String.raw`only recycling bins are used`],solution:String.raw`Materials return to the cycle instead of being thrown away.`},
{q:String.raw`Which type of country usually relies on incineration because land is scarce?`,options:[String.raw`a country with large empty land`,String.raw`a densely populated wealthy country`,String.raw`a landlocked desert`,String.raw`a country without electricity`],solution:String.raw`Densely populated wealthy countries (for example, Japan) incinerate waste because there is little land for landfills.`},
{q:String.raw`What is NOT a problem of plastic?`,options:[String.raw`long decomposition time`,String.raw`microplastics in food chains`,String.raw`entanglement of animals`,String.raw`neutralizes acid rain`],solution:String.raw`Plastic does not neutralize acid rain; the other options are real problems.`}
]
});
