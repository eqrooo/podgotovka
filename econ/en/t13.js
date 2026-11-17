addEn('econ','t13',{
title:'Taxes and taxation of individuals',
summary:'The essence and functions of taxes, their elements and principles, classification, taxes paid by citizens of Kazakhstan, and calculation of income tax at given rates.',
body:String.raw`
<div class="box warn"><span class="t">Important</span>Tax rates, deductions and thresholds in Kazakhstan change together with the Tax Code. In this topic all rates in the problems are <b>given in the condition</b>: calculate with them, and check the real values against current legislation and the tax authority's website.</div>
<h2><span class="k">1</span>The essence of tax and its functions</h2>
<div class="box def"><span class="t">Definition</span><b>Tax</b> — a mandatory, individually gratuitous payment levied on individuals and legal entities in favor of the state on the basis of law.</div>
<p>Evolution: in ancient times — natural obligations (a part of the harvest); in the Middle Ages — feudal levies; in modern times — monetary taxes into the budgets of centralized states; today — a system of taxes on income, property and consumption, financing education, medicine and social protection.</p>
<div class="tw"><table><thead><tr><th>Function</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Fiscal</td><td>filling the budget</td></tr>
<tr><td>Redistributive</td><td>redistribution of income among population groups</td></tr>
<tr><td>Regulatory</td><td>influence on investment, production, consumption</td></tr>
<tr><td>Control</td><td>control over income and its sources</td></tr></tbody></table></div>
<h2><span class="k">2</span>Elements and principles of taxation</h2>
<p><b>Elements:</b> object (what is taxed: income, property), subject (taxpayer), source (where the tax is paid from), tax base (quantitative expression of the object), rate (tax per unit of the base), tax period, deadlines and payment procedure.</p>
<p><b>Principles:</b> fairness, certainty, convenience, economy, universality, stability, efficiency.</p>
<p>Formula: <b>Tax = tax base × rate</b>.</p>
<h2><span class="k">3</span>Classification of taxes</h2>
<ul><li><b>By level:</b> republican (VAT, excises, corporate income tax) and local (property, land and transport taxes).</li><li><b>By form of collection:</b> <i>direct</i> — levied on income or property (IPN, property tax); <i>indirect</i> — included in the price of goods (VAT, excises).</li><li><b>By type of rate:</b> proportional (the rate is constant), progressive (the rate rises with income), regressive (the rate falls as income rises).</li></ul>
<p>A tax system is the totality of taxes, fees and duties and the bodies that administer them. In Kazakhstan its basis is the Tax Code.</p>
<h2><span class="k">4</span>What individuals pay</h2>
<ul><li>individual income tax (IPN) on income;</li><li>property tax (housing, garages, etc.);</li><li>land tax;</li><li>transport tax;</li><li>state duties;</li><li>indirect taxes (VAT, excises) — through the prices of goods.</li></ul>
<p>From wages, the employer, as a tax agent, withholds mandatory payments: pension contributions (OPV), health insurance contributions (VOSMS), and IPN. The employee receives the amount "in hand" after the deductions.</p>
<h3>Calculation scheme (training conditions)</h3>
<p>For the problems, the following is assumed: OPV — 10% of the salary; VOSMS — 2% of the salary; tax deduction — 30,000 ₸ per month; IPN — 10% of the base.</p>
<div class="box def"><span class="t">Formulas</span>IPN base = salary − OPV − VOSMS − deduction.<br>IPN = base × rate.<br>In hand = salary − OPV − VOSMS − IPN.</div>
<div class="box ex"><span class="t">Example</span>Salary 400,000 ₸. OPV 40,000; VOSMS 8,000; base = 400,000 − 40,000 − 8,000 − 30,000 = 322,000; IPN = 32,200; in hand = 400,000 − 40,000 − 8,000 − 32,200 = 319,800 ₸.</div>
<h3>Progressive scale</h3>
<p>Under progression, the rate is applied to parts of the income: first the tax at a low rate on the first part, then at a high rate on the excess. The share of tax in income then grows smoothly rather than in a jump.</p>
<h3>Tax included in the price</h3>
<p>If the price includes VAT at rate s, then VAT = price × s / (1 + s), and the price without VAT = price / (1 + s).</p>
<div class="box warn"><span class="t">Common mistakes</span>Calculating VAT as "price × rate" (this is correct only if the price is stated without VAT); confusing the tax base with income; forgetting that tax deductions reduce the base, not the tax itself.</div>
<div class="box tip"><span class="t">Remember</span>Paying taxes is an obligation, while legal deductions and benefits are a right. Not knowing the rates and deadlines does not exempt from liability and penalties.</div>
`,
practice:[
{q:String.raw`<b>Case 1. Take-home salary.</b> Salary 500,000 ₸. Conditions: OPV 10%, VOSMS 2%, deduction 30,000 ₸, IPN rate 10%. Find all deductions and the take-home amount.`,
 a:String.raw`OPV = 500,000 × 0.10 = <b>50,000 ₸</b>. VOSMS = 500,000 × 0.02 = <b>10,000 ₸</b>.<br>IPN base = 500,000 − 50,000 − 10,000 − 30,000 = <b>410,000 ₸</b>; IPN = <b>41,000 ₸</b>.<br>Total withheld 50,000 + 10,000 + 41,000 = 101,000 ₸ (20.2% of the salary). Take-home = <b>399,000 ₸</b>.`},
{q:String.raw`<b>Case 2. Elements of a tax.</b> A citizen owns an apartment with an assessed value of 18,000,000 ₸. In the problem, a property tax rate of 0.1% per year of the assessed value is assumed. Determine the subject, object, tax base, rate, tax period and the amount of tax.`,
 a:String.raw`Subject — the apartment owner (an individual). Object — property (the apartment). Tax base — assessed value <b>18,000,000 ₸</b>. Rate — 0.1%. Period — calendar year. Tax = 18,000,000 × 0.001 = <b>18,000 ₸ per year</b>. Source of payment — the owner's income. The tax is direct and local.`},
{q:String.raw`<b>Case 3. Proportional or progressive?</b> In a training scale: on income up to 600,000 ₸ per month — 10%; on the part of income above 600,000 ₸ — 15%. Calculate the tax and the share of tax in income for Aizhan (400,000 ₸) and Yermek (900,000 ₸). Draw a conclusion.`,
 a:String.raw`Aizhan: 400,000 × 0.10 = <b>40,000 ₸</b>, share 10%.<br>Yermek: 600,000 × 0.10 + 300,000 × 0.15 = 60,000 + 45,000 = <b>105,000 ₸</b>, share 105,000 / 900,000 ≈ <b>11.7%</b>.<br>The share of tax grows with income — the scale is progressive; the fairness principle: a larger income means a larger share of tax. With a flat 10% for everyone the scale would be proportional: Yermek would pay 90,000 ₸.`},
{q:String.raw`<b>Case 4. VAT in the price.</b> A smartphone costs 58,000 ₸ including VAT. In the problem the VAT rate is 16%. Find the VAT amount and the price without VAT. Is the tax direct or indirect, and who actually pays it?`,
 a:String.raw`Price without VAT = 58,000 / 1.16 = <b>50,000 ₸</b>. VAT = 58,000 − 50,000 = <b>8,000 ₸</b> (the same as 58,000 × 16 / 116). The tax is <b>indirect</b>: it is included in the price, formally remitted by the seller, but actually paid by the buyer. A mistake would be calculating 58,000 × 0.16 = 9,280 ₸.`},
{q:String.raw`<b>Case 5. Which tax?</b> Determine the type of tax (direct/indirect, republican/local, function): (a) IPN on a salary; (b) excise on gasoline; (c) tax on a vehicle; (d) increased tax on alcohol.`,
 a:String.raw`(a) IPN — direct, republican (rates set by the Code), fiscal and redistributive functions. (b) Excise — indirect, republican, fiscal and regulatory functions. (c) Transport tax — direct, local, fiscal function; it indirectly encourages the choice of fuel-efficient cars. (d) Excise on alcohol — indirect; the <b>regulatory</b> function (reducing the consumption of harmful goods) plus the fiscal function.`},
{q:String.raw`<b>Case 6. Comparison of two salaries.</b> Under the conditions: OPV 10%, VOSMS 2%, deduction 30,000 ₸, IPN 10% — compare the take-home amounts for salaries of 300,000 ₸ and 750,000 ₸ and the share of all deductions.`,
 a:String.raw`300,000 ₸: OPV 30,000; VOSMS 6,000; base 234,000; IPN 23,400; withheld 59,400 (19.8%); take-home <b>240,600 ₸</b>.<br>750,000 ₸: OPV 75,000; VOSMS 15,000; base 630,000; IPN 63,000; withheld 153,000 (20.4%); take-home <b>597,000 ₸</b>.<br>The share of deductions grows only slightly (19.8% → 20.4%): because of the fixed deduction the system is only weakly progressive, although the IPN rate is proportional.`}
],
quiz:[
{q:String.raw`Which function of taxes is responsible for filling the state budget?`,options:[String.raw`Regulatory`,String.raw`Fiscal`,String.raw`Control`,String.raw`Redistributive`],solution:String.raw`The fiscal function is obtaining money for the budget. The regulatory function affects the economy, and the control function monitors income.`},
{q:String.raw`Which of the following is an indirect tax?`,options:[String.raw`VAT`,String.raw`IPN`,String.raw`Property tax`,String.raw`Land tax`],solution:String.raw`VAT and excises are included in the price of goods. IPN and property taxes are direct.`},
{q:String.raw`What is the tax base?`,options:[String.raw`The amount of the tax`,String.raw`The quantitative expression of the object of taxation`,String.raw`The tax office`,String.raw`The payment deadline`],solution:String.raw`The base is the measure of the object (the amount of income, the value of property). Tax = base × rate.`},
{q:String.raw`The IPN rate (conditionally) is 10%, and income is 350,000 ₸ without deductions. What is the tax?`,options:[String.raw`350,000 ₸`,String.raw`3,500 ₸`,String.raw`35,000 ₸`,String.raw`315,000 ₸`],solution:String.raw`350,000 × 0.10 = 35,000 ₸. 315,000 is the amount after the tax, not the tax.`},
{q:String.raw`Salary 300,000 ₸; OPV 10%, VOSMS 2%, deduction 30,000 ₸, IPN 10%. How much will the employee receive in hand?`,options:[String.raw`270,000 ₸`,String.raw`240,600 ₸`,String.raw`234,000 ₸`,String.raw`264,000 ₸`],solution:String.raw`OPV 30,000, VOSMS 6,000, base 234,000, IPN 23,400. In hand 300,000 − 30,000 − 6,000 − 23,400 = 240,600 ₸. 234,000 is the tax base; 264,000 is the salary without OPV and VOSMS.`},
{q:String.raw`The price of a product is 23,200 ₸ including 16% VAT. What is the VAT amount in the price?`,options:[String.raw`3,712 ₸`,String.raw`3,200 ₸`,String.raw`2,000 ₸`,String.raw`4,000 ₸`],solution:String.raw`Price without VAT = 23,200 / 1.16 = 20,000 ₸; VAT = 3,200 ₸. 3,712 is the error "price × 16%."`},
{q:String.raw`Scale: 10% on income up to 500,000 ₸, 15% on the excess. What is the tax on an income of 700,000 ₸?`,options:[String.raw`80,000 ₸`,String.raw`105,000 ₸`,String.raw`70,000 ₸`,String.raw`50,000 ₸`],solution:String.raw`500,000 × 0.10 + 200,000 × 0.15 = 50,000 + 30,000 = 80,000 ₸. 105,000 would result from applying 15% to the entire amount.`},
{q:String.raw`A tax whose rate rises as income rises is called`,options:[String.raw`regressive`,String.raw`proportional`,String.raw`indirect`,String.raw`progressive`],solution:String.raw`Progressive: the higher the income, the higher the rate. Regressive is the opposite; proportional means a constant rate.`},
{q:String.raw`The tax base for property tax is 12,000,000 ₸, and the conditional rate is 0.15%. What is the annual tax?`,options:[String.raw`1,800 ₸`,String.raw`180,000 ₸`,String.raw`18,000 ₸`,String.raw`12,150,000 ₸`],solution:String.raw`12,000,000 × 0.0015 = 18,000 ₸. 180,000 would result from taking 1.5%.`}
]
});
