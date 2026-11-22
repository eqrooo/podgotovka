addLevels('econ','t13',{
short:String.raw`
<h3>Essence and functions of tax</h3>
<ul>
<li><b>Tax</b> — a mandatory, non-refundable payment to the state on the basis of law.</li>
<li>Functions: fiscal (filling the budget), distributive (redistribution of income), regulatory (influence on the economy), control.</li>
<li>Elements: object, subject, source, tax base, rate, tax period, payment deadlines.</li>
<li>Formula: <b>Tax = tax base × rate</b>.</li>
</ul>

<h3>Classification</h3>
<ul>
<li><b>Direct</b> — from income or property (IPN, property tax). <b>Indirect</b> — included in the price (VAT, excise duties).</li>
<li><b>Republican</b> (VAT, excise duties, profit tax) and <b>local</b> (property, land, transport).</li>
<li><b>Proportional</b> — the rate is constant; <b>progressive</b> — the rate rises with income; <b>regressive</b> — the rate falls as income rises.</li>
</ul>

<h3>Taxes of individuals and calculation</h3>
<ul>
<li>IPN on income, property tax, land tax, transport tax, state duties, indirect taxes through the price.</li>
<li>Training conditions: OPV 10%, VOSMS 2%, deduction 30 000 ₸, IPN 10%.</li>
<li>IPN base = salary − OPV − VOSMS − deduction. IPN = base × rate. Take-home = salary − OPV − VOSMS − IPN.</li>
<li>VAT from a price with rate s: VAT = price × s / (1 + s).</li>
</ul>
`,
simple:String.raw`
<div class="box warn"><span class="t">Important</span>Rates, deductions and thresholds change together with the Tax Code. In this summary all rates in the tasks are given in the condition. Before real calculations, check the current rules and the tax authority's website.</div>

<h2><span class="k">1</span>What a tax is</h2>
<p>Imagine residents of a building chipping in for a common repair of the entrance. Each pays their share, even if they do not use the elevator every day. A tax is like this pooled contribution, only it is collected by the state, and it is done by law.</p>
<p><b>Tax</b> is a mandatory payment that is not tied to a specific service for a specific person. It is paid by individuals and organizations. It cannot be refused, and if it is not paid on time, there will be penalties.</p>
<div class="box tip"><span class="t">In plain terms</span>A tax is an entry ticket to the common system. Roads, schools, hospitals and pensions are paid from a common pot. Everyone contributes their share, and everyone uses it.</div>

<h2><span class="k">2</span>Why taxes are needed</h2>
<p>Taxes perform four functions. They are easy to remember through examples:</p>
<ul>
<li><b>Fiscal</b> — fills the budget: this money pays teachers and doctors.</li>
<li><b>Distributive</b> — redistributes income among layers of the population: some are helped by benefits, paid for by taxes from others.</li>
<li><b>Regulatory</b> — influences behavior: a high excise on alcohol makes it more expensive and reduces consumption.</li>
<li><b>Control</b> — shows where a person's and a company's money comes from, and helps track income.</li>
</ul>

<h2><span class="k">3</span>What a tax consists of</h2>
<p>Any tax has several parts. The most important are: the <b>object</b> (what is taxed, for example income or an apartment), the <b>subject</b> (who pays), the <b>tax base</b> (the object expressed in money) and the <b>rate</b> (what percentage of the base is taken). There is only one formula:</p>
<p>\[ \text{Tax} = \text{Tax base} \times \text{Rate} \]</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Condition: an apartment owner. The estimated value of the apartment is 18 000 000 ₸. In the task, the property tax rate is conventionally taken as 0.1% per year.</p>
<ol><li>Subject: the apartment owner, an individual.</li><li>Object: the apartment. Base: estimated value 18 000 000 ₸.</li><li>Tax: 18 000 000 × 0.001 = 18 000 ₸ per year.</li></ol>
<p>Answer: the tax is 18 000 ₸ per year. The period is the calendar year.</p></div>
<div class="box warn"><span class="t">Common mistake</span>Confusing the tax base with income and calculating the tax on the amount after payment. First the base is found according to the rules, and then it is multiplied by the rate. Deductions reduce the base, not the tax itself.</div>

<h2><span class="k">4</span>Direct and indirect, proportional and progressive</h2>
<p><b>A direct</b> tax is paid on income or property, and it is visible on the receipt: for example, IPN. <b>An indirect</b> tax is hidden in the price of a good. For example, VAT and excise duties are included in the price. Formally the seller transfers them to the state, but in fact the buyer pays.</p>
<p>By the nature of the rate, taxes come in three types. With a <b>proportional</b> rate, the rate is the same for everyone. With a <b>progressive</b> rate, the rate rises as income rises. With a <b>regressive</b> rate, the rate falls as income rises.</p>
<div class="box ex"><span class="t">Step-by-step example: progressive scale</span>
<p>Condition: in the training scale, on income up to 600 000 ₸ per month 10% is taken, and on the part of income above 600 000 ₸ 15% is taken. Yermek's income is 900 000 ₸.</p>
<ol><li>First part: 600 000 × 0.10 = 60 000 ₸.</li><li>Excess: 900 000 − 600 000 = 300 000 ₸.</li><li>Second part: 300 000 × 0.15 = 45 000 ₸.</li><li>Total tax: 60 000 + 45 000 = 105 000 ₸. Share of income: 105 000 / 900 000 ≈ 11.7%.</li></ol>
<p>Answer: at an income of 400 000 ₸, the tax would be 40 000 ₸, that is 10%. The share grows with income, so the scale is progressive.</p></div>
<div class="box warn"><span class="t">Common mistake</span>Applying a high rate to the entire income. With progression, the rate applies only to its own part.</div>

<h2><span class="k">5</span>Take-home salary</h2>
<p>From a salary, the employer as a tax agent withholds the mandatory payments by itself: pension contributions (OPV), medical insurance contributions (VOSMS) and IPN. The employee receives the amount after withholdings. For the tasks, the following conditions apply: OPV 10% of salary, VOSMS 2%, deduction 30 000 ₸ per month, IPN 10%.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Condition: salary 500 000 ₸.</p>
<ol><li>OPV: 500 000 × 0.10 = 50 000 ₸.</li><li>VOSMS: 500 000 × 0.02 = 10 000 ₸.</li><li>IPN base: 500 000 − 50 000 − 10 000 − 30 000 = 410 000 ₸. The deduction reduces the base.</li><li>IPN: 410 000 × 0.10 = 41 000 ₸.</li><li>Take-home: 500 000 − 50 000 − 10 000 − 41 000 = 399 000 ₸.</li></ol>
<p>Answer: 101 000 ₸ was withheld, that is about 20% of the salary. 399 000 ₸ will be received.</p></div>
<div class="box tip"><span class="t">Compare two salaries</span>With a salary of 300 000 ₸, 240 600 ₸ is received, withholdings 19.8%. With a salary of 750 000 ₸, 597 000 ₸ is received, withholdings 20.4%. The share is almost the same, because the IPN rate is proportional, and the fixed deduction makes the system only weakly progressive.</div>

<h2><span class="k">6</span>VAT in the price of a good</h2>
<p>VAT is the value added tax. Sellers often indicate the price already including VAT. To find the amount of tax, you need to divide the price by the rate with an adjustment: VAT = price × s / (1 + s), where s is the rate as a fraction.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Condition: a smartphone costs 58 000 ₸ including VAT. The VAT rate in the task is 16%.</p>
<ol><li>Price without VAT: 58 000 / 1.16 = 50 000 ₸.</li><li>VAT amount: 58 000 − 50 000 = 8 000 ₸.</li><li>Check: 58 000 × 16 / 116 = 8 000 ₸.</li></ol>
<p>Answer: the VAT in the price is 8 000 ₸. The tax is indirect: the buyer pays it as part of the price.</p></div>
<div class="box warn"><span class="t">Common mistake</span>Calculating 58 000 × 0.16 = 9 280 ₸. This calculation is correct only when the price is stated without VAT.</div>

<div class="box def"><span class="t">If you remember only one thing</span>A tax equals the tax base multiplied by the rate. First determine the base according to the rules, then calculate. To find the price without VAT, divide the price including VAT by 1.16, and get the VAT by subtraction.</div>
`
},'en');
