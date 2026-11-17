addEn('eco','t02',{
title:'The Hierarchy of Life and Branches of Ecology',
summary:'Levels of biological organization from the atom to the biosphere, reductionism and emergence, and the main branches of ecology.',
body:String.raw`
<h2><span class="k">1</span>What is a hierarchy</h2>
<p><b>Hierarchy</b> — an arrangement of elements so that some are "above", others "below", and still others "on the same level". <b>Biological organization</b> — a hierarchy of complex biological structures and systems that determine life. It is built using <b>reductionism</b>: complex phenomena are explained through the interaction of their parts or of simpler and more fundamental things.</p>

<h2><span class="k">2</span>Levels of the organization of life</h2>
<div class="tw"><table><thead><tr><th>No.</th><th>Level</th><th>Definition</th></tr></thead><tbody>
<tr><td>1</td><td>atom</td><td>the smallest unit of ordinary matter that forms a chemical element</td></tr>
<tr><td>2</td><td>molecule</td><td>an electrically neutral group of two or more atoms linked by chemical bonds</td></tr>
<tr><td>3</td><td>organelle</td><td>a specialized subunit of a cell with a defined function</td></tr>
<tr><td>4</td><td>cell</td><td>the basic structural, functional and biological unit of all known organisms</td></tr>
<tr><td>5</td><td>tissue</td><td>a group of cells with a similar structure that work as a single whole</td></tr>
<tr><td>6</td><td>organ</td><td>a group of tissues with similar functions</td></tr>
<tr><td>7</td><td>organ system</td><td>a group of organs that together perform one or more functions</td></tr>
<tr><td>8</td><td>organism</td><td>the basic living system, consisting of at least one cell</td></tr>
<tr><td>9</td><td>population</td><td>all organisms of one species living in a given territory and able to interbreed</td></tr>
<tr><td>10</td><td>biocenosis / community</td><td>interacting organisms living together in one habitat (term introduced by Karl Möbius, 1877)</td></tr>
<tr><td>11</td><td>ecosystem</td><td>a community of living organisms together with the non-living components of the environment</td></tr>
<tr><td>12</td><td>biosphere</td><td>the worldwide sum of all ecosystems; also called the ecosphere</td></tr>
</tbody></table></div>
<div class="box tip"><span class="t">Remember the order</span>Atom → molecule → organelle → cell → tissue → organ → organ system → organism → population → biocenosis → ecosystem → biosphere. Up to the level of "organism" biology of the organism is studied; starting from "population", ecology proper begins.</div>
<div class="box ex"><span class="t">Example: a duck</span>Carbon and hydrogen atoms form molecules (proteins), which build the organelles (mitochondria) of a muscle cell; cells form muscle tissue; tissues form an organ (the heart); organs form a system (circulatory); all the systems make up the organism of a duck; the ducks of one lake are a population; the ducks together with the fish and plants of the lake form a biocenosis; together with the water and bottom sediments, they form an ecosystem.</div>

<h2><span class="k">3</span>Emergence</h2>
<div class="box def"><span class="t">Definition</span><b>Emergence</b> — properties and functions that arise at a certain hierarchical level, are absent at lower levels, and have no meaning there. Each level can be broken down into its own hierarchy, and it can be described through the lower levels.</div>
<p>For example, a single heart cell cannot pump blood — this property appears only at the level of the organ. A single wolf does not form a "pack" with its hunting strategy — this is a property of the population.</p>
<div class="box warn"><span class="t">Common mistake</span>People confuse <b>population</b> and <b>biocenosis</b>. A population is one species; a biocenosis is all the interacting species in one habitat. And ecosystem = biocenosis + non-living environment.</div>

<h2><span class="k">4</span>Branches of ecology</h2>
<div class="tw"><table><thead><tr><th>Branch</th><th>Subject of study</th></tr></thead><tbody>
<tr><td>autecology (species ecology)</td><td>the interaction of an individual organism or a single species with living and non-living environmental factors</td></tr>
<tr><td>synecology</td><td>the organization and functioning of communities — sets of populations of different species</td></tr>
<tr><td>microbial ecology</td><td>microscopic organisms and their communities</td></tr>
<tr><td>plant ecology</td><td>how plants grow and produce biomass; the role of plant species in the ecosystem</td></tr>
<tr><td>animal ecology</td><td>animals and their communities</td></tr>
<tr><td>human ecology</td><td>how people are connected with each other and with the environment</td></tr>
<tr><td>medical ecology</td><td>public health in relation to environmental factors</td></tr>
<tr><td>terrestrial ecology</td><td>land ecosystems; useful for agriculture and forestry</td></tr>
<tr><td>marine ecology</td><td>species and communities in the ocean</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">Example: Minamata disease</span>Poisoning by methylmercury (MeHg) from fish and shellfish contaminated by wastewater from a chemical plant (Minamata, Japan, 1956) is a task of <b>medical ecology</b>: the link between the state of the environment and human health.</div>
<div class="box tip"><span class="t">Remember</span>Autecology is "one species and its environment", synecology is "the community". If the question is about a polar bear and its adaptations, it is autecology; if it is about the structure of a tundra community, it is synecology.</div>
`,
practice:[
{q:String.raw`Arrange in order from smallest to largest: ecosystem, cell, organ, population, molecule, organism, biocenosis, tissue.`,
 a:String.raw`molecule → cell → tissue → organ → organism → population → biocenosis → ecosystem.`},
{q:String.raw`Match the term to the definition: (1) a group of cells working as a single whole; (2) all organisms of one species in a territory that can interbreed; (3) the sum of all ecosystems; (4) a specialized part of a cell.`,
 a:String.raw`(1) tissue; (2) population; (3) biosphere (ecosphere); (4) organelle.`},
{q:String.raw`Given a set: a lake, all the perch in the lake, all organisms of the lake, a perch, the heart of a perch, a muscle cell of the heart. Name the level of each.`,
 a:String.raw`The lake with its water and bottom — ecosystem; all the perch of the lake — population; all organisms of the lake (fish, algae, bacteria) — biocenosis; a perch — organism; the heart — organ; a muscle cell — cell.`},
{q:String.raw`Explain the concept of emergence with an example. Why is studying only molecules not enough to understand life?`,
 a:String.raw`A new property arises at the level where parts interact and is absent in the individual parts. A hemoglobin molecule does not "breathe", but the whole animal does; a school of fish forms defensive behaviour impossible for a single fish. Therefore reductionism helps describe the levels through the lower ones, but the properties of a higher level must be studied separately.`},
{q:String.raw`Which branch of ecology do the following tasks belong to: (a) how a cactus stores water; (b) how food connections are organized in the tundra; (c) disease rates in an industrial city; (d) the inhabitants of the deep sea?`,
 a:String.raw`(a) autecology (plant ecology); (b) synecology; (c) medical ecology; (d) marine ecology.`},
{q:String.raw`What is the difference between autecology and synecology? Give an example of each.`,
 a:String.raw`Autecology studies one species and its relation to the environment (for example, thermoregulation of the grey whale). Synecology studies a community of populations of different species in one habitat (for example, predator–prey relations in a forest).`}
],
quiz:[
{q:String.raw`The basic structural, functional, and biological unit of all known organisms:`,options:[String.raw`tissue`,String.raw`the organism`,String.raw`a biocenosis`,String.raw`the cell`],solution:String.raw`This is the cell. Tissue is a group of cells, the organism is a whole living system, and a biocenosis is a community.`},
{q:String.raw`Which level lies between tissue and organ system?`,options:[String.raw`organelle`,String.raw`organ`,String.raw`population`,String.raw`cell`],solution:String.raw`The order is cell → tissue → organ → organ system.`},
{q:String.raw`A group of organs that work together to perform one or more functions:`,options:[String.raw`organ system`,String.raw`organism`,String.raw`tissue`,String.raw`population`],solution:String.raw`This is an organ system. An organ is a group of tissues, not of organs.`},
{q:String.raw`The term "biocenosis" was introduced by:`,options:[String.raw`Ernst Haeckel`,String.raw`Karl Möbius`,String.raw`Charles Elton`,String.raw`Eugene Odum`],solution:String.raw`Biocenosis is a term of Karl Möbius (1877). Haeckel introduced "ecology".`},
{q:String.raw`Ecosystem = ?`,options:[String.raw`population + biosphere`,String.raw`community + its non-living environment`,String.raw`organism + organ`,String.raw`biocenosis only`],solution:String.raw`An ecosystem is a community plus its non-living components. It is not just a biocenosis.`},
{q:String.raw`The study of an individual species and its environment is called:`,options:[String.raw`synecology`,String.raw`medical ecology`,String.raw`autecology`,String.raw`marine ecology`],solution:String.raw`Autecology (species ecology). Synecology studies communities.`},
{q:String.raw`The approach that explains complex things through the interaction of simpler parts is:`,options:[String.raw`emergence`,String.raw`reductionism`,String.raw`adaptation`,String.raw`succession`],solution:String.raw`This is reductionism. Emergence, on the contrary, refers to new properties of a level.`},
{q:String.raw`The worldwide sum of all ecosystems:`,options:[String.raw`biocenosis`,String.raw`population`,String.raw`biosphere`,String.raw`habitat`],solution:String.raw`Biosphere = ecosphere.`},
{q:String.raw`Minamata disease is studied primarily by:`,options:[String.raw`plant ecology`,String.raw`medical ecology`,String.raw`microbial ecology`,String.raw`terrestrial ecology`],solution:String.raw`It is poisoning of people by an environmental pollutant — a task of medical ecology.`}
]
});
