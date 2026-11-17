addEn('eco','t07',{
title:'Acid Rain',
summary:'Causes of acid rain (SO2 and NOx), the chemical reactions, effects on lakes, forests, health and buildings, and interaction with other pollutants.',
body:String.raw`
<h2><span class="k">1</span>What is acid rain</h2>
<p>Rain in nature is slightly acidic: pH about 5–5.6, because carbon dioxide in the atmosphere reacts with moisture to form weak carbonic acid. If the pH is below 5 (sometimes 5.6 is taken as the boundary), the precipitation is called <b>acid rain</b>. Neutral water has a pH of 7; the lower the pH, the more acidic the medium. The scale is logarithmic, so pH 4 is 10 times more acidic than pH 5.</p>
<div class="box def"><span class="t">Definition</span><b>Acid rain</b> — precipitation containing acidic components (sulphuric and nitric acids) that falls from the atmosphere in wet or dry form.</div>

<h2><span class="k">2</span>Causes</h2>
<p>The main pollutants are <b>sulphur dioxide</b> (SO<sub>2</sub>) and <b>nitrogen oxides</b> (NO<sub>x</sub>), formed when <i>fossil fuels</i> are burned.</p>
<ul>
<li>Most SO<sub>2</sub> comes from smelters and coal-fired power stations.</li>
<li>Most NO<sub>x</sub> comes from motor vehicles (internal combustion engines).</li>
<li>Volcanoes are a natural source of sulphur.</li>
</ul>
<p>Pollutants are carried thousands of kilometres, mix with water vapour and form weak solutions of sulphuric (H<sub>2</sub>SO<sub>4</sub>) and nitric (HNO<sub>3</sub>) acids. They fall with rain, snow, hail or fog — this is <b>wet deposition</b>. Acids and their salts also settle as dust and particles without moisture — <b>dry deposition</b>.</p>
<h3>Chemistry of sulphuric acid formation</h3>
<div class="box ex"><span class="t">Two key reactions</span>1) Oxidation: 2SO<sub>2</sub> + O<sub>2</sub> → 2SO<sub>3</sub> (in the atmosphere, with catalysts such as the OH radical).<br>2) Reaction with water: SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub>.<br>For nitrogen: 4NO<sub>2</sub> + O<sub>2</sub> + 2H<sub>2</sub>O → 4HNO<sub>3</sub>.</div>
<div class="box warn"><span class="t">Common mistake</span>Thinking that acid rain harms only the area near the source. Pollutants are carried by winds for hundreds and thousands of kilometres: in North America, the most acid rain falls in the east, because emissions are high there and the winds blow eastward. Do not confuse it with the greenhouse effect: SO<sub>2</sub> and NO<sub>x</sub> cause acidity, while CO<sub>2</sub> and CH<sub>4</sub> enhance warming.</div>

<h2><span class="k">3</span>Consequences</h2>
<div class="tw"><table><thead><tr><th>Object</th><th>Key effects</th></tr></thead><tbody>
<tr><td>Lakes</td><td>the more acidic the lake, the fewer species it supports; plankton and invertebrates die first; below pH 5, more than 75% of fish species disappear; fish-eating birds (loons) suffer — an effect along the food chain. Rocks and soils containing bases neutralize acid, but granite bedrock does not</td></tr>
<tr><td>Forests</td><td>dissolve and leach nutrients and minerals from the soil; release toxic aluminium, which interferes with nutrient uptake; trees weaken, lose leaves, and become vulnerable to pests, diseases and climatic stress; suffer from acid fog</td></tr>
<tr><td>Human health</td><td>SO<sub>2</sub> forms fine sulphate particles that penetrate deep into the lungs and cause respiratory diseases</td></tr>
<tr><td>Corrosion</td><td>accelerates the weathering of limestone, sandstone, marble, brick, concrete and metal; dissolves calcium carbonate, and as the water evaporates, crystals grow and break the stone apart</td></tr>
<tr><td>Other pollutants</td><td>acidity reduces dissolved organic matter, so waters become clearer and more vulnerable to ultraviolet radiation; heat and drought turn sulphur accumulated in bogs into sulphates, which are washed into lakes by rain</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">Example: Canada</span>The country has cut SO<sub>2</sub> emissions by more than half, but the recovery of ecosystems is slow: in eastern Canada, granite bedrock neutralizes acid poorly, and forests receive roughly twice as much acid as they can tolerate without long-term damage.</div>

<h2><span class="k">4</span>What can be done</h2>
<ul>
<li>Install flue-gas desulphurization (scrubbers) at power plants and catalytic converters on cars.</li>
<li>Switch to renewable energy, save energy, reduce coal burning.</li>
<li>Liming of lakes (liming) — a temporary measure.</li>
<li>International cooperation: pollution crosses borders.</li>
</ul>
<div class="box tip"><span class="t">Remember</span>Sources: power stations and smelters (SO<sub>2</sub>), cars (NO<sub>x</sub>). Effects: leaching of aluminium from soil, fish die-offs, corrosion of limestone and marble, damage to tree leaves.</div>
`,
practice:[
{q:String.raw`Name the two main compounds that cause acid rain and the main sources of each.`,
 a:String.raw`SO2 (sulphur dioxide) — smelters and coal power plants; NOx (nitrogen oxides) — internal combustion engines of cars. Acids: H2SO4 and HNO3.`},
{q:String.raw`Describe two reactions in which SO2 is converted into sulphuric acid.`,
 a:String.raw`1) SO2 is oxidized by oxygen to SO3: 2SO2 + O2 → 2SO3. 2) SO3 reacts with water in a droplet: SO3 + H2O → H2SO4.`},
{q:String.raw`Divide into "sources" and "consequences": leaching of aluminium from soil; coal power plants; destruction of limestone statues; car engines; damage to the waxy coating of leaves.`,
 a:String.raw`Sources: coal power plants, car engines. Consequences: leaching of aluminium, destruction of statues, damage to the waxy coating of leaves.`},
{q:String.raw`Is the statement "Acid rain affects only the area near the source" true? Explain.`,
 a:String.raw`False. Pollutants are carried by the atmosphere for thousands of kilometres; therefore Scandinavian countries suffered from emissions of Central Europe, and eastern North America receives acid from industrial areas located upwind.`},
{q:String.raw`Fill in a table of effects: lakes, forests, health, corrosion — one key point each.`,
 a:String.raw`Lakes: below pH 5, more than 75% of fish species disappear; plankton and invertebrates die. Forests: leaching of nutrients and release of aluminium; leaves fall and trees weaken. Health: sulphate particles cause respiratory diseases. Corrosion: calcium carbonate in limestone, marble and concrete dissolves; crystals break the stone apart.`},
{q:String.raw`Lake A is in a granite area and lake B is in a limestone area; both receive equally acidic precipitation. Which will suffer more and why?`,
 a:String.raw`Lake A. Granite neutralizes acid poorly (few bases), while limestone contains carbonates that bind acid, so lake B is buffered.`}
],
quiz:[
{q:String.raw`The primary compounds that cause acid rain are:`,options:[String.raw`carbon monoxide and ozone`,String.raw`CO2 and methane`,String.raw`CFCs`,String.raw`sulphur dioxide and nitrogen oxides`],solution:String.raw`SO2 and NOx. CO2 and CH4 are greenhouse gases; CFCs deplete the ozone layer.`},
{q:String.raw`Approximate pH of normal unpolluted rainwater:`,options:[String.raw`7.0`,String.raw`8.2`,String.raw`5.6`,String.raw`4.0`],solution:String.raw`Rain is naturally slightly acidic (about 5.6) because of carbonic acid; 4.0 is already acid rain.`},
{q:String.raw`Main source of sulphur dioxide:`,options:[String.raw`gasoline from cars`,String.raw`burning fossil fuels like coal in power plants`,String.raw`natural gas heating at home`,String.raw`agricultural fertilizers`],solution:String.raw`Coal-fired power plants and smelters. Cars mainly emit NOx.`},
{q:String.raw`Dry deposition means:`,options:[String.raw`acidic particles and gases falling without moisture`,String.raw`rain evaporating before it reaches the ground`,String.raw`acid rain in deserts`,String.raw`neutralization of acids in the upper atmosphere`],solution:String.raw`Dry deposition — acidic particles and gases settle without precipitation.`},
{q:String.raw`A direct consequence of acid rain on aquatic ecosystems:`,options:[String.raw`increased water temperature`,String.raw`release of toxic aluminium ions from soils`,String.raw`over-fertilization and algal blooms`,String.raw`decreased oxygen solubility`],solution:String.raw`Aluminium is leached from soils into waters. Algal blooms result from eutrophication, not acidity.`},
{q:String.raw`Which gas is mainly emitted by motor vehicles and causes acid rain?`,options:[String.raw`NOx`,String.raw`SO2`,String.raw`CH4`,String.raw`argon`],solution:String.raw`Cars emit nitrogen oxides, NOx.`},
{q:String.raw`What happens to a lake when its pH drops below 5?`,options:[String.raw`an increase in fish species`,String.raw`more than 75% of fish species disappear`,String.raw`the water becomes clearer and richer`,String.raw`nothing`],solution:String.raw`Below pH 5, more than 75% of fish species disappear.`},
{q:String.raw`Acid rain damages limestone buildings because it dissolves:`,options:[String.raw`calcium carbonate`,String.raw`nitrogen`,String.raw`sodium chloride`,String.raw`silicon dioxide only`],solution:String.raw`Limestone and marble consist of calcium carbonate.`}
]
});
