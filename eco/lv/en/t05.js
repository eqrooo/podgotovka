addLevels('eco','t05',{
short:String.raw`
<h3>Population and its characteristics</h3>
<ul>
<li><b>Population</b> — individuals of one species living in one territory at the same time.</li>
<li><b>Population density</b>: \(PD=\frac{N}{S}\), where \(N\) is the number of individuals and \(S\) is the area.</li>
<li><b>Birth rate</b> and <b>death rate</b> — the number of births and deaths per unit of time.</li>
</ul>

<h3>Age and survival</h3>
<ul>
<li><b>Age-sex structure</b> — an age pyramid: a wide base means high growth potential.</li>
<li><b>Type I</b> — few offspring, most survive to adulthood (humans, elephants); typical of stable environments.</li>
<li><b>Type II</b> — mortality is roughly the same at all ages.</li>
<li><b>Type III</b> — many offspring with no parental care, few survive (fish, invertebrates, plants); typical of unstable environments.</li>
</ul>

<h3>Distribution of individuals</h3>
<ul>
<li><b>Clumped</b> (grouped) — individuals gathered in patches: fish schools, herds.</li>
<li><b>Uniform</b> (even) — individuals at roughly equal distances because of competition for a resource.</li>
<li><b>Random</b> — no pattern: dandelions whose seeds are carried by the wind.</li>
</ul>

<h3>Population bottleneck</h3>
<ul>
<li><b>Population bottleneck</b> — a sharp decline in numbers: natural disasters, diseases, hunting, habitat destruction.</li>
<li>Consequences: loss of genetic diversity, increased inbreeding, reduced fitness.</li>
</ul>

<h3>Relationships between organisms</h3>
<ul>
<li>Competition (−/−), predation (+/−), parasitism (+/−), mutualism (+/+), commensalism (+/0), amensalism (0/−).</li>
<li><b>Competitive exclusion</b> — when needs coincide, the weaker competitor is driven out.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>What a population is and why we study it</h2>
<p>Imagine a forest where only squirrels live. All these squirrels belong to one species and live in one territory at the same time. In ecology, such a group is called a <b>population</b>. The science that studies how populations change over time and how they are connected to their environment is called <b>population ecology</b>.</p>
<p>Why does this matter? If we know how the number of individuals grows or falls, we can predict the future of a species. This is how scientists understand why a species is dying out and how to protect rare animals. Another example is <b>overfishing</b>. This is when fish are caught faster than they can reproduce, and the remaining individuals cannot restore the population.</p>

<h2><span class="k">2</span>Population density</h2>
<p>Population size shows how many individuals there are in total. But it is also important how closely they live together. For this we calculate the <b>population density</b>.</p>
\[PD=\frac{N}{S}\]
<p>Here \(N\) is the number of individuals, and \(S\) is the area in which they live. We divide the number by the area and get how many individuals there are per unit of area. The larger this number, the more closely the individuals live together. High density usually means that the place suits this species.</p>
<div class="box tip"><span class="t">In simple terms</span>Imagine two classes. In one there are 30 students in 60 square meters, and in the other 30 students in 300 square meters. The number of students is the same, but the first class is more crowded. Density shows exactly this crowding.</div>

<h2><span class="k">3</span>How population size changes</h2>
<p>The population grows or shrinks because of four processes:</p>
<ul>
<li><b>birth rate</b> — how many individuals were born in a period;</li>
<li><b>death rate</b> — how many died in a period;</li>
<li><b>immigration</b> — how many individuals arrived from outside;</li>
<li><b>emigration</b> — how many individuals left.</li>
</ul>
<p>Growth is calculated as: births minus deaths, plus arrivals, minus departures.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>On an island of 40 km² there are 320 deer. During the year, 48 were born, 16 died, 4 arrived, and 12 left. Find the density, the growth, and the new population size.</p>
<ol>
<li>Density: 320 / 40 = 8 deer per km². We divide the number by the area.</li>
<li>First we count births minus deaths: 48 − 16 = 32.</li>
<li>Add the arrivals and subtract the departures: 32 + 4 − 12 = 24. This is the growth.</li>
<li>New population size: 320 + 24 = 344 deer.</li>
</ol>
<p>Answer: density 8 individuals per km², growth +24, and 344 deer at the end of the year. Check: 48 − 16 + 4 − 12 = 24, everything adds up.</p>
</div>
<div class="box warn"><span class="t">Common mistake</span>People forget about immigrants and emigrants or confuse them. An immigrant arrives in the population, an emigrant leaves it. Easy to remember: "im" means "in", "em" means "out".</div>

<h2><span class="k">4</span>Age and survival</h2>
<p>A population can be described by age. For this we draw an <b>age-sex structure</b> as a pyramid. The bars are arranged by age: young at the bottom, older at the top. The pyramid narrows upward because some individuals die. If the base is very wide, there are many young individuals and the population grows quickly.</p>
<p>Another way to describe a population is a <b>survivorship curve</b>. It shows what fraction of individuals survives to each age. There are three types:</p>
<ul>
<li><b>Type I</b> — few offspring, parental care, most survive to adulthood. Example: elephants and humans.</li>
<li><b>Type II</b> — mortality is roughly the same at all ages.</li>
<li><b>Type III</b> — very many offspring, no care, few survive. Example: fish, invertebrates, plants.</li>
</ul>
<div class="box tip"><span class="t">In simple terms</span>Type I is like a family with few children, where each one is looked after. Type III is like a dandelion: it releases thousands of seeds, and a few of them sprout.</div>
<p>Why is this? In a <b>stable</b> environment it pays to invest in a few offspring, because they are likely to survive. In an <b>unstable</b> environment it is better to produce a very large number of offspring, because some of them will certainly survive.</p>

<h2><span class="k">5</span>How individuals are arranged in a territory</h2>
<p><b>Dispersion</b> is the arrangement of individuals in a territory. There are three kinds:</p>
<ul>
<li><b>Clumped</b> (grouped) — individuals gathered in patches. Example: a school of fish, a herd of animals.</li>
<li><b>Uniform</b> (even) — individuals stand at roughly the same distance from each other. This happens when they compete strongly for a resource, for example water in the desert.</li>
<li><b>Random</b> — no pattern. Example: dandelions whose seeds are carried by the wind.</li>
</ul>
<div class="box tip"><span class="t">Remember</span>Clumped means "in clusters", uniform means "in a straight line" (because of competition), random means "wherever it fell".</div>

<h2><span class="k">6</span>Population bottleneck</h2>
<p><b>Population bottleneck</b>, a bottleneck, is a sharp drop in numbers. Imagine a bottle: the wide part is the population before the disaster, and the narrow neck is the small number of survivors. The causes can be: an earthquake, a flood, a drought, an epidemic, hunting almost to complete extinction, or habitat destruction by humans.</p>
<p>After such a blow, few genes remain in the population. The survivors do not carry all the diversity that existed before. Relatives begin to mate more often, which is called <b>inbreeding</b>, and the offspring become weaker. That is why the population copes worse with diseases and environmental changes.</p>
<div class="box warn"><span class="t">Common mistake</span>Thinking that after a bottleneck the population will fully recover on its own. The numbers may grow, but the genetic diversity is already lost, and the consequences last for a long time.</div>

<h2><span class="k">7</span>How species affect each other</h2>
<p>Relationships between species are easy to write with signs: "+" means benefit, "−" means harm, "0" means no effect. These are the main types:</p>
<ul>
<li><b>Competition</b> (−/−): both species use the same resource and get in each other's way.</li>
<li><b>Predation</b> (+/−): the predator eats the prey, for example a fox and a mouse.</li>
<li><b>Parasitism</b> (+/−): the parasite lives at the expense of the host, but usually does not kill it right away. Example: a tapeworm in the intestine.</li>
<li><b>Mutualism</b> (+/+): beneficial to both. Example: a flower and its pollinator.</li>
<li><b>Commensalism</b> (+/0): one gets a benefit, and the other is unaffected.</li>
<li><b>Amensalism</b> (0/−): one is harmed, and the other is not affected. Example: the mold Penicillium releases a substance that kills bacteria.</li>
</ul>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>An orchid grows on a tree branch. It gets support, and the tree is not harmed by this. Determine the type of relationship.</p>
<ol>
<li>The orchid gets a benefit: this is a plus.</li>
<li>The tree gets neither benefit nor harm: this is zero.</li>
<li>The combination +/0 corresponds to commensalism.</li>
</ol>
<p>Answer: commensalism.</p>
</div>
<p>If two species use the same resource in the same way, the weaker one disappears over time. This is <b>competitive exclusion</b>. If they divide the resources, for example one eats seeds and the other eats berries, both can live side by side. This is <b>resource partitioning</b>.</p>
<div class="box warn"><span class="t">Common mistake</span>Parasitism and predation are confused, because both have the sign "+/−". The difference is that a parasite usually does not kill its host right away and lives on or in it. Commensalism should also not be confused with mutualism: in mutualism, both benefit.</div>
<div class="box def"><span class="t">If you remember only one thing</span>A population is the individuals of one species in one territory. The number changes through births, deaths, arrivals and departures. If you need age, distribution or relationships, look at the pyramid, the type of distribution, or the signs +, −, 0.</div>
`
},'en');
