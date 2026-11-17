addEn('eco','t05',{
title:'Populations and Relationships Between Organisms',
summary:'Population characteristics, age structure and survivorship curves, types of dispersion, the population bottleneck, and types of interspecific relationships.',
body:String.raw`
<h2><span class="k">1</span>Population ecology</h2>
<div class="box def"><span class="t">Definition</span><b>Population ecology</b> — the science of how populations change in time and space and interact with the environment. <b>Population</b> — a group of organisms of one species living in one territory at one time.</div>
<p>Studying populations is important: it allows one to predict future size and growth rate, understand the causes of their changes, and see how organisms interact with each other and with the environment. This is needed for species conservation (<i>biodiversity conservation</i>), for combating extinction (<i>extinction</i>) and for controlling overfishing (<i>overfished</i> — when too many fish are caught and the remaining individuals cannot restore the population size).</p>

<h2><span class="k">2</span>Population characteristics</h2>
<ul>
<li><b>Population size</b> — the number of individuals.</li>
<li><b>Population density</b> — how many individuals per unit area: PD = N / S (N — number of individuals, S — area). High density shows that the habitat suits the species.</li>
<li><b>Birth rate</b> (natality) — the number of births per unit time; the number of offspring divided by the population size.</li>
<li><b>Death rate</b> (mortality) — the number of deaths per unit time; depends on predation, competition for resources, etc.</li>
<li><b>Fertility rate</b> — the average number of offspring per female (in demography, per woman).</li>
<li><b>Growth rate</b> — the speed of growth; depends on births, deaths, immigration (immigrants — individuals arriving) and emigration (emigrants — individuals leaving).</li>
</ul>
<div class="box ex"><span class="t">Calculation example</span>On an island of 40 km² there live 320 deer. PD = 320 / 40 = 8 individuals per km². In a year, 48 were born, 16 died, 4 immigrated and 12 emigrated. Growth = 48 − 16 + 4 − 12 = +24, so the population rose to 344.</div>

<h3>Age-sex structure and survival</h3>
<p>The <b>age-sex structure</b> is shown by a pyramid: the bars narrow from young to older age groups, because some individuals die. A wide base means many young individuals, that is, high growth potential.</p>
<div class="tw"><table><thead><tr><th>Survivorship curve</th><th>Strategy</th><th>Examples</th></tr></thead><tbody>
<tr><td>Type I</td><td>few offspring, much parental care, most survive to adulthood</td><td>large mammals, humans</td></tr>
<tr><td>Type II</td><td>a moderate number of offspring, mortality roughly constant with age</td><td>some birds, many asexual species</td></tr>
<tr><td>Type III</td><td>many offspring with no care, only a few survive</td><td>plants, invertebrates, many fish</td></tr>
</tbody></table></div>
<p>Type I is more common in a <b>stable</b> environment (one can invest in a few offspring), Type III — in an <b>unstable</b> one (a huge number of offspring increases the chance that some will survive).</p>

<h2><span class="k">3</span>Dispersion of individuals</h2>
<div class="tw"><table><thead><tr><th>Type</th><th>Description</th><th>Examples</th></tr></thead><tbody>
<tr><td>Clumped</td><td>individuals gathered in patches</td><td>schools of fish, herds of elephants, oak trees</td></tr>
<tr><td>Uniform</td><td>individuals spaced at roughly equal distances; competition for a limiting resource</td><td>desert shrubs (water), redwoods (light)</td></tr>
<tr><td>Random</td><td>no predictable pattern</td><td>dandelions, plants with seeds dispersed by wind</td></tr>
</tbody></table></div>
<div class="box tip"><span class="t">Remember</span>Clumped — "in clusters", uniform — "in a straight line" (due to competition), random — "wherever it fell". A herd is an example of clumped dispersion.</div>

<h2><span class="k">4</span>Population bottleneck</h2>
<p>A sharp reduction in population size. Causes: natural disasters (earthquakes, floods, droughts), disease outbreaks, human activity (hunting almost to extinction, destruction of habitats). Consequences:</p>
<ul>
<li>loss of genetic diversity (<i>genetic diversity</i>) — the survivors provide a random sample of genes;</li>
<li>reduced resistance to diseases and environmental changes;</li>
<li>increased inbreeding (<i>inbreeding</i>) and reduced fitness.</li>
</ul>

<h2><span class="k">5</span>Relationships between organisms</h2>
<div class="tw"><table><thead><tr><th>Type</th><th>Species A / species B</th><th>Example</th></tr></thead><tbody>
<tr><td>Competition</td><td>− / −</td><td>two species use the same resource; intraspecific — within a species, interspecific — between species</td></tr>
<tr><td>Predation</td><td>+ / −</td><td>fox and mouse; herbivores and plants (herbivory)</td></tr>
<tr><td>Parasitism</td><td>+ / −</td><td>a tapeworm in the host's intestine (endoparasite); ticks, fleas (ectoparasite); epiparasite (hyperparasitism)</td></tr>
<tr><td>Mutualism</td><td>+ / +</td><td>flowering plants and pollinators; obligate mutualism — species cannot survive without each other</td></tr>
<tr><td>Commensalism</td><td>+ / 0</td><td>one species benefits by living on another without affecting the host</td></tr>
<tr><td>Amensalism</td><td>0 / −</td><td>the mould Penicillium secretes penicillin, which kills bacteria</td></tr>
</tbody></table></div>
<p>If the needs of two species coincide, the weaker competitor eventually disappears — this is <b>competitive exclusion</b>. If species begin to use resources differently, they can coexist — <b>resource partitioning</b>. The dynamics of predator and prey are described by the Lotka–Volterra equations.</p>
<div class="box warn"><span class="t">Common mistake</span>Parasitism and predation look similar (+/−), but a parasite usually does not kill its host immediately and lives in or on it. Do not confuse commensalism (the host is indifferent) with mutualism (both benefit) and with amensalism (one is harmed, the other is unaffected).</div>
`,
practice:[
{q:String.raw`Determine the type of relationship: (a) a tapeworm in the intestine; (b) a bee and a flower; (c) an orchid growing on a tree branch; (d) Penicillium and bacteria; (e) two species of finches eating seeds of the same size; (f) a lynx and a hare.`,
 a:String.raw`(a) parasitism (endoparasite); (b) mutualism; (c) commensalism; (d) amensalism; (e) interspecific competition; (f) predation.`},
{q:String.raw`Calculate the density and growth: a meadow of 25 ha is home to 500 marmots. During the year, 90 were born, 40 died, 5 immigrated and 15 emigrated. Find the density, the growth, and the population at the end of the year.`,
 a:String.raw`PD = 500 / 25 = 20 individuals per ha. Growth = 90 − 40 + 5 − 15 = 40. New population 540. Growth rate 40/500 = 8% per year.`},
{q:String.raw`Determine the type of dispersion: (a) fish moving in a school; (b) wild shrubs in a desert spaced at equal distances; (c) dandelions in a field; (d) a herd of zebras.`,
 a:String.raw`(a) clumped; (b) uniform (competition for water); (c) random (seeds carried by wind); (d) clumped.`},
{q:String.raw`Why is a Type III survivorship curve typical of unstable environments? Give an example.`,
 a:String.raw`In an unstable environment, caring for offspring makes little sense: conditions are unpredictable and most would die. It is more advantageous to produce a huge number of offspring so that at least some survive (fish, invertebrates, plants). In a stable environment, Type I is more advantageous — few offspring with great care (elephants, humans).`},
{q:String.raw`What is a population bottleneck? Name three causes and two consequences.`,
 a:String.raw`A sharp reduction in population size. Causes: natural disasters (drought, flood), diseases, hunting and habitat destruction by humans. Consequences: loss of genetic diversity and increased inbreeding (reduced fitness and resistance). Example: cheetahs, descended from a very small group of survivors.`},
{q:String.raw`Two species of beetles feed on the same plant. In one forest one species has disappeared, in another both coexist. Explain both cases.`,
 a:String.raw`In the first forest their needs coincide, and the weaker competitor has been excluded (competitive exclusion). In the second, the species have divided the resources: for example, they feed on different parts of the plant or at different times (resource partitioning).`},
{q:String.raw`What does a pyramid with a very wide base show?`,
 a:String.raw`A large share of young individuals: birth rate is high and the population grows rapidly (high growth potential).`}
],
quiz:[
{q:String.raw`A tapeworm absorbing nutrients in a host's intestine is an example of:`,options:[String.raw`amensalism`,String.raw`mutualism`,String.raw`competition`,String.raw`parasitism`],solution:String.raw`The parasite benefits at the expense of the host (+/−).`},
{q:String.raw`Penicillium secretes penicillin, which kills bacteria. This is:`,options:[String.raw`amensalism`,String.raw`commensalism`,String.raw`mutualism`,String.raw`predation`],solution:String.raw`One species is harmed, the other neither benefits nor is harmed — amensalism (0/−).`},
{q:String.raw`Pollinators and flowering plants represent:`,options:[String.raw`competition`,String.raw`mutualism`,String.raw`parasitism`,String.raw`amensalism`],solution:String.raw`Both sides benefit.`},
{q:String.raw`Dandelions with wind-dispersed seeds usually show:`,options:[String.raw`clumped dispersion`,String.raw`uniform dispersion`,String.raw`random dispersion`,String.raw`no dispersion`],solution:String.raw`Seeds germinate where they fall, so the dispersion is random.`},
{q:String.raw`Which is NOT a cause of a population bottleneck?`,options:[String.raw`earthquake`,String.raw`disease outbreak`,String.raw`hunting to near extinction`,String.raw`abundant food and low mortality`],solution:String.raw`Abundant food and low mortality lead to growth, not to a sharp decline.`},
{q:String.raw`Population density is calculated as:`,options:[String.raw`S / N`,String.raw`N / S`,String.raw`N + S`,String.raw`births − deaths`],solution:String.raw`PD = N / S: the number of individuals divided by the area.`},
{q:String.raw`When two species use identical resources and the weaker one disappears, this is called:`,options:[String.raw`resource partitioning`,String.raw`competitive exclusion`,String.raw`commensalism`,String.raw`predation`],solution:String.raw`Competitive exclusion. Resource partitioning is when species divide resources and coexist.`},
{q:String.raw`A Type III survivorship curve is typical for:`,options:[String.raw`humans`,String.raw`elephants`,String.raw`fish and invertebrates`,String.raw`whales`],solution:String.raw`Many offspring with no care: fish, invertebrates, plants.`},
{q:String.raw`An individual that leaves a population is called:`,options:[String.raw`immigrant`,String.raw`emigrant`,String.raw`endemic`,String.raw`parasite`],solution:String.raw`An emigrant leaves; an immigrant arrives.`}
]
});
