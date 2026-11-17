addEn('econ','t02',{
title:'Reproduction, Economic Systems and Property',
summary:'Simple and extended reproduction, subsistence and commodity economy, types of economic systems, property (subjects and objects), competition and monopoly.',
body:String.raw`
<h2><span class="k">1</span>Simple and extended reproduction</h2>
<div class="box def"><span class="t">Definition</span><b>Reproduction</b> (reproduction) — a continuous process of renewing the production of goods.</div>
<ul>
<li><b>Simple reproduction</b> — the volume of production remains the same; all income goes to consumption and to replacing worn-out capital, and there is no accumulation. Example: a farmer grows the same amount of wheat every year, and the entire harvest is used up.</li>
<li><b>Extended reproduction</b> — the volume of production grows, because part of the income is directed to accumulation (investment). Example: a farmer buys a tractor and expands the sown area — the harvest and profit grow.</li>
</ul>
<p>The condition for extended reproduction: investment exceeds depreciation (the replacement of capital wear). The difference — <b>net investment</b> — is the growth of capital. If investment is less than depreciation, production <b>contracts</b>.</p>
<div class="box ex"><span class="t">Example</span>The capital of a workshop wears out by 2 million tenge a year. If 2 million is invested in equipment, this is simple reproduction; 3.5 million is extended reproduction (net investment 1.5 million); 1 million means contraction.</div>

<h2><span class="k">2</span>Subsistence and commodity economy</h2>
<div class="tw"><table><thead><tr><th>Feature</th><th>Subsistence economy</th><th>Commodity economy</th></tr></thead><tbody>
<tr><td>Purpose</td><td>to satisfy one's own needs</td><td>to sell or exchange on the market</td></tr>
<tr><td>Exchange</td><td>minimal</td><td>developed, through money</td></tr>
<tr><td>Labor</td><td>universal, self-contained</td><td>division of labor, specialization</td></tr>
<tr><td>Motive</td><td>self-sufficiency</td><td>profit, competition</td></tr>
<tr><td>Example</td><td>a peasant grows food and sews clothes himself</td><td>a farmer sells grain and buys machinery and clothes</td></tr>
</tbody></table></div>
<p>The subsistence economy prevailed in ancient times. Today it is rarely found in its pure form; a household plot is an example of a mix: part of the output goes to the family's consumption, part is sold.</p>

<h2><span class="k">3</span>Types of economic systems</h2>
<p>An <b>economic system</b> is a way of organizing the economic life of society that answers three questions: <i>what, how and for whom to produce</i>.</p>
<div class="tw"><table><thead><tr><th>System</th><th>Who makes decisions</th><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody>
<tr><td>Traditional</td><td>customs, traditions</td><td>stability, clear roles</td><td>low productivity, little technology</td></tr>
<tr><td>Command (planned)</td><td>the state: plans, fixed prices</td><td>concentration of resources, social guarantees</td><td>shortages, inefficiency, no freedom of choice (example — the USSR)</td></tr>
<tr><td>Market</td><td>the market: prices, demand, competition, private property</td><td>efficiency, innovation, choice</td><td>inequality, crises, does not ensure public goods</td></tr>
<tr><td>Mixed</td><td>market + state</td><td>flexibility, social protection</td><td>risk of excessive intervention</td></tr>
</tbody></table></div>
<p>Most modern countries, including Kazakhstan, have a mixed economy: prices for most goods are free, but the state regulates tariffs of natural monopolies and taxes, protects competition and provides social guarantees.</p>

<h2><span class="k">4</span>Property</h2>
<div class="box def"><span class="t">Definition</span><b>Property</b> (property, ownership) — the relation of a person or organization to things as their own: the rights of <b>possession, use and disposal</b>.</div>
<p>The economic essence of property: who controls resources, distributes income and manages production. Property determines the motivation to work and the efficiency of resource use: an owner is interested in protecting and increasing what belongs to him.</p>
<ul>
<li><b>Subjects</b> (who owns): individuals, families, the state, private companies, associations.</li>
<li><b>Objects</b> (what is owned): land, buildings, equipment, money, securities, intellectual property (copyrights, patents, software).</li>
</ul>
<p>By subject, one distinguishes private, state, collective (cooperative, corporate) and mixed forms of property.</p>
<div class="box warn"><span class="t">Common mistake</span>Confusing possession, use and disposal. A tenant uses the premises but does not dispose of them (cannot sell them); the owner has all three rights.</div>

<h2><span class="k">5</span>Competition and monopoly</h2>
<p><b>Competition</b> (competition) — the struggle of producers for the buyer. It leads to lower prices and higher quality, stimulates innovation, gives consumers a choice and pushes inefficient producers out of the market — it is the "driving force of progress".</p>
<p><b>A monopoly</b> is a market where a single seller controls supply. A monopolist can overprice and lower quality without fearing the loss of customers, therefore the state applies antimonopoly regulation. <i>Natural monopolies</i> (electricity grids, water supply, railways) are regulated through tariffs: duplicating infrastructure is not expedient.</p>
<div class="box ex"><span class="t">Example</span>In a town, one company sells internet — it can raise the tariff from 7,000 to 12,000 tg. When three providers appear, they are forced to lower prices and improve speed.</div>
<div class="box tip"><span class="t">Remember</span>Simple reproduction = investment equals wear; extended reproduction = investment exceeds wear. Command system — the state decides, market — prices, mixed — both mechanisms. Competition benefits the consumer, monopoly benefits the seller.</div>
`,
practice:[
{q:String.raw`The farm "Altyn Dala" earned 15 million tenge in income over the year. Wear of equipment and buildings over the year — 3 million tg. Option 1: 3 million was spent on repair and replacement of worn-out assets, the rest was consumed by the owners and workers. Option 2: 3 million was spent on replacing wear, and another 4 million on buying a new combine harvester and warehouses. Option 3: only 1.5 million was spent on replacing wear. Determine the type of reproduction in each option and the net investment.`,
a:String.raw`Option 1: investment = wear (3 million), net investment 0 — simple reproduction, the volume of production is unchanged. Option 2: gross investment 3 + 4 = 7 million; net investment 7 − 3 = 4 million — extended reproduction, capacity grows. Option 3: 1.5 − 3 = −1.5 million — capital shrinks, production contracts (the farm is "eating up" its fixed assets), and output will fall in the future.`},
{q:String.raw`A family in the Zhambyl region grew 200 t of potatoes during the season. 20 t were kept for their own consumption and as seed, and the rest was sold at 140,000 tg per tonne. Calculate the revenue and the commodity share of the farm (the share of output sold). What type of farm is this? How will its character change if the family sells all of its output?`,
a:String.raw`Sold: 200 − 20 = 180 t. Revenue = 180 × 140,000 = 25,200,000 tg. Commodity share = 180 / 200 = 90 %. The farm is predominantly commodity (produces for sale), with a small subsistence part (10 %). If all output is sold (100 % commodity share), the farm becomes fully commodity-based: the family buys everything it needs on the market (potatoes too), depends on prices and on the division of labor.`},
{q:String.raw`Determine the type of economic system: (a) all factories belong to the state, prices and output volumes are set by Gosplan; (b) members of a nomadic clan raise livestock and distribute the products according to custom; (c) private shops compete, the state only collects taxes and monitors honesty in trade; (d) bread prices are free, but tariffs for electricity and the utilities sector are regulated by the state, and a system of social benefits operates.`,
a:String.raw`(a) command (planned) — decisions are made by the state; (b) traditional — based on customs and traditions; (c) market — private property, competition, minimal role of the state; (d) mixed — free prices for some goods are combined with state regulation and social policy. Criterion: who answers the questions "what, how and for whom to produce" — traditions, the state, the market, or a combination.`},
{q:String.raw`There are three coffee chains in a city. One of them lowers the price of a cappuccino from 1,800 to 1,500 tg and introduces a loyalty card. How will competitors and customers react? Compare this with the situation where there is a single coffee shop in the district. What conclusions can be drawn about the role of competition?`,
a:String.raw`Under competition, rivals are forced to respond: lower prices, improve service, offer promotions — otherwise they lose customers. Consumers benefit: choice, a price cut of 300 tg (16.7 %), better quality. The single coffee shop (monopolist) does not fear losing customers: it can keep a high price (1,800 or more) and not improve quality. Conclusion: competition lowers prices, raises quality, stimulates innovation and pushes weak producers out; a monopoly weakens these incentives, which is why it requires antimonopoly control.`},
{q:String.raw`Identify the subject and object of property and the rights of the owner: (a) citizen A owns an apartment, rents it out and can sell it; (b) the state owns a railway network; (c) LLP "Dala" holds a patent for a grain processing technology; (d) tenant B rents an apartment from A. Who has the right of disposal?`,
a:String.raw`(a) subject — an individual, object — real estate; A has the right of disposal (can sell or rent it out). (b) subject — the state, object — infrastructure (state property); it disposes through authorized bodies. (c) subject — a company, object — intellectual property (a patent); it has the right to use and transfer a license. (d) the tenant has only possession and use for the term of the contract; B may not sell the apartment, and the right of disposal remains with A.`},
{q:String.raw`A garment workshop in Shymkent: equipment wear is 1.2 million tg a year, profit is 3.6 million, of which the owner takes 1.2 million for personal needs, and the rest is invested (including the replacement of wear). What type of reproduction is this? What must be done to achieve a 10 % increase in output, given that this requires net investment of 0.8 million?`,
a:String.raw`Investment = 3.6 − 1.2 = 2.4 million. Wear is 1.2 million, so net investment = 2.4 − 1.2 = 1.2 million — extended reproduction. Net investment of 1.2 million already exceeds the required 0.8 million, so the goal is achievable; the owner's withdrawal could even be increased by 0.4 million (to 1.6 million), leaving net investment exactly at 0.8 million. Check: 3.6 − 1.6 = 2.0 million invested; 2.0 − 1.2 = 0.8 million.`}
],
quiz:[
{q:String.raw`Simple reproduction means that:`,options:[String.raw`part of the income is invested and the volume of production grows`,String.raw`production is carried out only for one's own consumption`,String.raw`the volume of production is maintained, and income goes to consumption and replacing wear`,String.raw`production shrinks`],solution:String.raw`Correct: C. A describes extended reproduction; B describes the subsistence economy (a different concept); D is contraction.`},
{q:String.raw`An enterprise invests 9 million tg a year, and capital wear is 6 million tg. The net investment and the type of reproduction are:`,options:[String.raw`15 million, extended`,String.raw`3 million, extended`,String.raw`3 million, simple`,String.raw`−3 million, contraction`],solution:String.raw`Correct: B: 9 − 6 = 3 million, which is above zero — extended reproduction. A is addition instead of subtraction; C has the wrong type; D has the wrong sign.`},
{q:String.raw`What is characteristic of a commodity economy?`,options:[String.raw`Production for own needs without exchange`,String.raw`Self-sufficiency and isolation`,String.raw`Division of labor, market, money and competition`,String.raw`Decisions are made according to custom`],solution:String.raw`Correct: C. A and B describe the subsistence economy; D describes the traditional economy.`},
{q:String.raw`Which economic system combines market mechanisms with state regulation?`,options:[String.raw`Command`,String.raw`Traditional`,String.raw`Purely market`,String.raw`Mixed`],solution:String.raw`Correct: D: most countries of the world, including Kazakhstan, have a mixed economy. Command — the state decides; traditional — customs; purely market — minimal role of the state.`},
{q:String.raw`Which rights are part of the content of the right of property?`,options:[String.raw`Possession, use and disposal`,String.raw`Possession only`,String.raw`Use only`,String.raw`Possession and receiving tax benefits`],solution:String.raw`Correct: A: the classic "triad" of the owner's powers. Possession only or use only are incomplete rights (as for a tenant); tax benefits are not among the owner's powers.`},
{q:String.raw`A farm produced 400 t of grain and sold 300 t. The commodity share of the farm is:`,options:[String.raw`25 %`,String.raw`133 %`,String.raw`75 %`,String.raw`100 %`],solution:String.raw`Correct: C: 300 / 400 = 0.75 = 75 %. A is the share of the unsold output (100 / 400); B is the ratio of produced to sold; D would be the case if everything were sold.`},
{q:String.raw`Which of the following is an example of intellectual property?`,options:[String.raw`A patent for an invention`,String.raw`A plot of land`,String.raw`A warehouse`,String.raw`A bank account`],solution:String.raw`Correct: A. A plot of land and a warehouse are real estate (material objects), a bank account is monetary funds.`},
{q:String.raw`What is NOT a consequence of competition?`,options:[String.raw`Lower prices`,String.raw`Higher quality of goods`,String.raw`Stimulation of innovation`,String.raw`The ability to set prices arbitrarily without losing customers`],solution:String.raw`Correct: D: this is a property of a monopoly. A, B and C are positive effects of competition.`}
]
});
