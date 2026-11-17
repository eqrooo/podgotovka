addEn('econ','t05',{
title:'Labor and Wages',
summary:'Labor as a factor of production, the labor market and its participants, factors of wages, nominal and real wages, forms and systems of pay, labor incentives.',
body:String.raw`
<h2><span class="k">1</span>Labor, the labor market, wages</h2>
<div class="box def"><span class="t">Definition</span><b>Labor</b> (labor) — purposeful human activity to create goods and services. <b>The labor market</b> (labor market) — a system of economic relations between employers and employees regarding the hiring, use and payment of labor. <b>Wages</b> (wage, salary) — the monetary reward a worker receives for work performed.</div>
<p>The main participants of the labor market are <b>workers</b> (who offer labor — they form supply) and <b>employers</b> (who demand labor). The state, trade unions and employment services are additional participants: they set the rules, minimum pay and protect rights.</p>
<div class="box ex"><span class="t">Example</span>A company announces recruitment of workers, engineers and accountants. Fifteen people applied for the engineer position, and three for the worker position. Conclusion: when there is an excess of applicants, the employer selects and pays less; when there is a shortage, it is forced to raise wages.</div>

<h2><span class="k">2</span>Labor as a factor of production and its price</h2>
<p>Labor is one of the four factors of production (land, labor, capital, entrepreneurial ability). The <b>price of labor</b> is the wage per unit of time (hour, month) or per unit of work. It is formed under the influence of demand and supply in the labor market: the higher the demand for specialists and the lower their supply, the higher the pay. A specialist with a rare qualification earns more precisely because of the shortage.</p>

<h2><span class="k">3</span>Factors determining the level of wages</h2>
<ul>
<li><b>Qualification, education, experience</b> — the higher they are, the higher the pay (human capital).</li>
<li><b>Complexity and working conditions</b> (hazards, responsibility, schedule).</li>
<li><b>Demand and supply</b> for a particular profession.</li>
<li><b>Regional differences</b> (cost of living, conditions in the region).</li>
<li><b>State regulation</b>: minimum wage, taxes, subsidies.</li>
<li><b>Labor productivity</b> and the efficiency of the worker.</li>
</ul>
<div class="box warn"><span class="t">Common mistake</span>Thinking that wages depend only on the "hardships" of the job. The market price of labor is determined first of all by the ratio of demand and supply and by productivity, not by the worker's fatigue.</div>

<h2><span class="k">4</span>Nominal and real wages</h2>
<div class="box def"><span class="t">Definition</span><b>Nominal</b> wage — the sum of money received by a worker (without regard to prices). <b>Real</b> wage — the quantity of goods and services that can be bought with the nominal wage; it depends on the price level.</div>
<p>Real wage index: <b>I<sub>real</sub> = I<sub>nominal</sub> / I<sub>prices</sub></b> (indices as ratios). If the nominal wage has risen by 10 % (index 1.10), and prices by 14 % (1.14), then 1.10 / 1.14 ≈ 0.965 — the real wage has <b>fallen</b> by 3.5 %. If the nominal wage grows faster than prices, the real wage grows.</p>
<div class="box ex"><span class="t">Example</span>The wage rose from 300,000 to 330,000 tenge, but the rise in the prices of food and services by 14 % means that the same money buys less: at old prices, 330,000 / 1.14 ≈ 289,474 tenge — less than the original 300,000.</div>

<h2><span class="k">5</span>Forms and systems of pay</h2>
<div class="tw"><table><thead><tr><th>Form</th><th>System</th><th>Essence</th></tr></thead><tbody>
<tr><td rowspan="2">Time-based (for time worked)</td><td>simple time-based</td><td>fixed rate per hour, day, month (salary)</td></tr>
<tr><td>time-based with bonus</td><td>salary + bonus for quality, initiative</td></tr>
<tr><td rowspan="3">Piece-rate (for volume of work)</td><td>straight piece-rate</td><td>fixed rate for each unit of output</td></tr>
<tr><td>piece-rate with bonus</td><td>plus a bonus for overfulfilling the plan</td></tr>
<tr><td>indirect piece-rate</td><td>for auxiliary staff: depends on the results of the main workers</td></tr>
</tbody></table></div>
<p>Time-based pay is convenient when the result is hard to measure (doctor, teacher, office); piece-rate pay is used when output is easy to count (seamstress, turner, courier per order). The drawback of piece-rate pay is the risk of lower quality and irregular work.</p>

<h2><span class="k">6</span>Labor incentives</h2>
<p><b>Labor incentives</b> — methods of influencing workers to raise productivity, quality and efficiency. <b>Material</b>: bonuses, allowances, premiums, social package. <b>Non-material</b>: career growth, recognition, training, comfortable conditions, flexible schedule. Modern companies combine both kinds: money does not always motivate if there are no prospects and no recognition.</p>
<div class="box tip"><span class="t">Remember</span>The price of labor is determined by demand and supply. The real wage = nominal wage adjusted for prices: it grows only if wages grow faster than prices. Time-based pay is for time, piece-rate pay is for results. The minimum wage is a state instrument, but if it is set above the equilibrium wage, unemployment may result.</div>
`,
practice:[
{q:String.raw`The salary of a teacher from Karaganda rose from 300,000 to 330,000 tenge per month. Over the same year, consumer prices rose by 14 %. Find the change in the nominal and real wage (in %) and the value of the new salary at "old" prices. Conclusion?`,
a:String.raw`Nominal: 330,000 / 300,000 − 1 = +10 %. Real wage index = 1.10 / 1.14 ≈ 0.9649, that is, −3.51 %. At old prices: 330,000 / 1.14 ≈ 289,474 tenge (less than the original 300,000 by 10,526 tenge). Conclusion: despite the rise in the nominal wage, purchasing power fell because prices rose faster.`},
{q:String.raw`A seamstress is paid piece-rate at 450 tenge per item. The monthly plan is 450 items. She sewed 520. Calculate her earnings: (a) under straight piece-rate; (b) under piece-rate with bonus, where items above the plan are paid at a rate 1.5 times higher. Which system motivates more strongly?`,
a:String.raw`(a) 520 × 450 = 234,000 tenge. (b) Plan: 450 × 450 = 202,500 tenge; above the plan 70 items × 450 × 1.5 = 70 × 675 = 47,250 tenge; total 249,750 tenge. The difference is 15,750 tenge (+6.7 %). The piece-rate with bonus system motivates overfulfilling the plan more strongly, but quality must be monitored.`},
{q:String.raw`The salary of a call-center operator is 1,800 tenge per hour, the norm is 160 hours per month. In addition: a quality bonus of 15 % of the salary and 12 overtime hours paid 1.5 times higher. Find the total pay before taxes. What type of pay system is this?`,
a:String.raw`Salary: 1,800 × 160 = 288,000 tenge. Bonus: 288,000 × 0.15 = 43,200 tenge. Overtime: 12 × (1,800 × 1.5) = 12 × 2,700 = 32,400 tenge. Total: 288,000 + 43,200 + 32,400 = 363,600 tenge. The system is time-based with bonus (payment for time plus a bonus for quality).`},
{q:String.raw`The labor market in a city: demand for labor L_d = 120 − 2w, supply of labor L_s = 3w − 30 (w — monthly wage, thousand tenge; L — thousand people). Find the equilibrium wage and employment. What will happen with a legislated minimum of 40 thousand tenge?`,
a:String.raw`120 − 2w = 3w − 30 → 5w = 150 → w* = 30 thousand tenge; L* = 120 − 60 = 60 thousand people. With a minimum of 40: demand L_d = 120 − 80 = 40 thousand, supply L_s = 120 − 30 = 90 thousand; unemployment (excess supply) = 90 − 40 = 50 thousand people. Those who work earn more, but some people cannot find a job.`},
{q:String.raw`A worker's nominal wage rose by 12 % over the year (index 112), and the consumer price index is 105. Find the index and the growth rate of the real wage. If last year the real wage was 280,000 tenge (in base-year prices), what is it now?`,
a:String.raw`Real wage index = 112 / 105 ≈ 1.0667 → growth of 6.67 %. Now: 280,000 × 1.0667 ≈ 298,667 tenge in base-year prices. The nominal growth (12 %) was partly "eaten" by inflation (5 %), and the real growth was about 6.7 %.`},
{q:String.raw`Choose a pay system: (a) an office accountant; (b) a driver who receives a fixed amount per trip; (c) a turner at a plant; (d) a machine setter whose income depends on the output of the main workers; (e) a sales manager: salary + bonus for the quality of the client base.`,
a:String.raw`(a) simple time-based (salary) — the result is hard to measure in pieces; (b) straight piece-rate (a rate per unit of work — a trip); (c) piece-rate with bonus (a rate plus a bonus for overfulfilling) or straight piece-rate; (d) indirect piece-rate — income depends on the results of the main workers; (e) time-based with bonus — salary plus a bonus for quality.`},
{q:String.raw`An employer wants to retain valuable programmers but cannot sharply raise wages. Propose three non-material and two material ways of incentivizing them. Why should one not rely only on money?`,
a:String.raw`Non-material: a career ladder and training at the company's expense; flexible schedule/remote work; recognition of achievements and interesting projects. Material: bonuses for project results; health insurance and other social payments. Money alone works only to a limited extent: without prospects and recognition, an employee will leave for a competitor who offers more; incentives must be comprehensive.`}
],
quiz:[
{q:String.raw`What does the real wage show?`,options:[String.raw`The amount of money received in hand`,String.raw`The size of the salary stated in the employment contract`,String.raw`The tax withheld from the wage`,String.raw`The quantity of goods and services that can be bought with the wage`],solution:String.raw`Correct: D: the real wage is purchasing power. A and B refer to the nominal wage; C is a tax deduction and is unrelated to the definition.`},
{q:String.raw`The nominal wage rose by 8 %, and prices rose by 12 %. What happened to the real wage?`,options:[String.raw`It rose by about 4 %`,String.raw`It did not change`,String.raw`It fell by about 3.6 %`,String.raw`It rose by 20 %`],solution:String.raw`Correct: C: 1.08 / 1.12 ≈ 0.964, that is, −3.6 %. A has the wrong sign and calculation; B is possible only if the rates are equal; D is a sum of percentages.`},
{q:String.raw`A worker receives 600 tenge per unit of output and made 380 units in a month. His earnings under straight piece-rate are:`,options:[String.raw`228,000 tenge`,String.raw`22,800 tenge`,String.raw`980 tenge`,String.raw`2,280,000 tenge`],solution:String.raw`Correct: A: 600 × 380 = 228,000. B and D are errors of magnitude; C is addition instead of multiplication.`},
{q:String.raw`Which pay system is time-based?`,options:[String.raw`Straight piece-rate`,String.raw`Indirect piece-rate`,String.raw`Piece-rate with bonus`,String.raw`Time-based with bonus`],solution:String.raw`Correct: D: a salary plus a bonus is the time-based form. The others are piece-rate systems.`},
{q:String.raw`The demand for labor L_d = 90 − w, the supply of labor L_s = 2w − 30. The equilibrium wage is:`,options:[String.raw`40`,String.raw`60`,String.raw`20`,String.raw`30`],solution:String.raw`Correct: A: 90 − w = 2w − 30 → 120 = 3w → w = 40 (L = 50). B, C and D are arithmetic errors (for example, dividing by the wrong number).`},
{q:String.raw`Which is NOT a factor affecting the level of wages?`,options:[String.raw`The worker's qualification`,String.raw`Demand and supply for the profession`,String.raw`The worker's favorite color`,String.raw`Regional differences`],solution:String.raw`Correct: C. The other factors do determine the price of labor.`},
{q:String.raw`Which of the following is a non-material incentive for labor?`,options:[String.raw`A bonus for overfulfilling the plan`,String.raw`A supplement for length of service`,String.raw`Career growth and recognition`,String.raw`Payment of sick leave`],solution:String.raw`Correct: C. Bonuses, supplements and payments are material incentives.`},
{q:String.raw`Why can a legislated minimum wage set above the equilibrium level lead to unemployment?`,options:[String.raw`Employers' demand for labor falls, while workers' supply rises`,String.raw`Employers want to hire more`,String.raw`Workers refuse to work`,String.raw`Demand for goods falls`],solution:String.raw`Correct: A: when the price of labor is above equilibrium, the quantity demanded falls and the quantity supplied rises — an excess of labor forms. B is wrong: employers want to hire fewer; C and D do not follow from the law of demand for labor.`},
{q:String.raw`The real wage rises if:`,options:[String.raw`prices rise faster than the nominal wage`,String.raw`the nominal wage rises faster than prices`,String.raw`both the wage and prices remain unchanged`,String.raw`the wage is paid in cash`],solution:String.raw`Correct: B. In case A the real wage falls; in C it does not change; the method of payment (D) does not matter.`}
]
});
