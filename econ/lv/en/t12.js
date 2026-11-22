addLevels('econ','t12',{
short:String.raw`
<h3>Credit and Its Types</h3>
<ul>
<li><b>Credit</b> is the transfer of money or valuables to a borrower on terms of repayment, time limits and payment of interest.</li>
<li>Term: short-term (up to 1 year), medium-term (1–3 years), long-term (over 3 years).</li>
<li>Purpose: consumer, mortgage, car loan, education loan.</li>
<li>To get a loan, the bank looks at income, credit history, purpose, and collateral (pledge, guarantee).</li>
</ul>

<h3>How Payments Are Calculated</h3>
<ul>
<li><b>Annuity</b>: equal payments: \[ A = P \cdot \frac{r}{1-(1+r)^{-n}} \], where r is the monthly rate and n is the number of months.</li>
<li>Overpayment = A·n − P. At the start of the term there is more interest, at the end more principal.</li>
<li><b>Differentiated payment</b>: the principal is repaid in equal parts P/n, payments decrease. Total interest = P·r·(n + 1)/2.</li>
</ul>

<h3>Debt Burden and Loans</h3>
<ul>
<li>Debt burden = monthly debt payments / income × 100%. The guideline is no more than 30–35%.</li>
<li><b>Microfinance organizations (MFOs)</b>: fast loans with very high rates and short terms.</li>
<li><b>Pawnshop</b>: a loan secured by an item, with high interest.</li>
<li>The total cost of credit includes fees, insurance and penalties. Effective cost = (all payments − amount received) / amount received.</li>
</ul>

<h3>Borrower Risks</h3>
<ul>
<li>Rising floating rate, loss of income, currency fluctuations, hidden fees.</li>
<li>Protection: compare the total cost, insure risks, keep a financial cushion, do not take a new loan to repay an old one.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>What a loan is</h2>
<p>Imagine you need money now, but you will earn it later. You take a loan from a bank. The bank gives you money now, and you return it later, usually with a fee. This fee is called interest.</p>
<p><b>A loan</b> is a relationship in which the lender transfers money or valuables to the borrower. The main conditions: the money must be <b>returned</b> (repayability), within a <b>time limit</b> (term), and for a <b>fee</b> (payment).</p>
<div class="box tip"><span class="t">In plain words</span>Lending a friend your notes for a week and getting them back a week later for free is friendship. If the friend returns the notes with a cookie on top, that is also ordinary politeness. A bank charges a fee because the money brings it income and it takes on risk.</div>
<p>Loans are divided by term: short-term up to a year, medium-term from one to three years, long-term over three years. They are also divided by purpose: consumer, mortgage, car loan, education loan.</p>

<h2><span class="k">2</span>How the payment is calculated: annuity and differentiated</h2>
<p>There are two repayment schemes. In an <b>annuity</b> scheme the payment is the same every month. In a <b>differentiated</b> scheme the principal is repaid in equal parts, and interest is charged on the remaining balance. That is why the payments gradually decrease.</p>
<p>The annuity formula, where r is the monthly rate and n is the number of months:</p>
<p>\[ A = P \cdot \frac{r}{1-(1+r)^{-n}} \]</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Condition: a loan of 1,200,000 ₸ for 12 months, 12% per year, that is 1% per month.</p>
<ol><li>Annuity payment: A = 1,200,000 × 0.01 / (1 − 1.01<sup>−12</sup>) ≈ 106,619 ₸.</li><li>Total paid over the year: 106,619 × 12 ≈ 1,279,423 ₸.</li><li>Overpayment: 1,279,423 − 1,200,000 ≈ 79,423 ₸.</li><li>Differentiated: principal 1,200,000 / 12 = 100,000 ₸ per month.</li><li>First payment: 100,000 + 1,200,000 × 0.01 = 112,000 ₸. Last: 100,000 + 100,000 × 0.01 = 101,000 ₸.</li><li>Overpayment: 1,200,000 × 0.01 × (12 + 1) / 2 = 78,000 ₸.</li></ol>
<p>Answer: the annuity is paid at 106,619 ₸ with an overpayment of about 79,423 ₸. The differentiated scheme is cheaper by about 1,400 ₸, but the first payments are higher.</p></div>
<div class="box tip"><span class="t">Which to choose</span>An annuity is convenient if the budget needs to be predictable. A differentiated scheme is more profitable in terms of overpayment if there is money early in the term to cover a large payment.</div>

<h2><span class="k">3</span>Total cost of credit: not just the rate</h2>
<p>Banks like to advertise the rate. But the contract may include fees for issuing the loan, insurance and penalties. That is why the total cost is calculated. Look at how much money you receive in hand and how much you will repay in total.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Condition: a loan of 1,000,000 ₸ for a year, rate 14% per year, interest paid at the end of the term. A 3% issuance fee is withheld immediately.</p>
<ol><li>Fee: 1,000,000 × 0.03 = 30,000 ₸. You receive 970,000 ₸ in hand.</li><li>Interest: 1,000,000 × 0.14 = 140,000 ₸.</li><li>You will have to repay: 1,000,000 + 140,000 = 1,140,000 ₸.</li><li>Effective cost: (1,140,000 − 970,000) / 970,000 ≈ 17.5% per year.</li></ol>
<p>Answer: the real cost of the loan is 17.5%, not 14%. This is the figure you should compare.</p></div>

<h2><span class="k">4</span>Microloans and pawnshops: fast, but expensive</h2>
<p><b>MFOs</b> (microfinance organizations) issue loans online with almost no paperwork. Their rates are very high and their terms are short. A <b>pawnshop</b> gives money against an item as collateral: quick and without checking income, but the interest is high, and an item that is not redeemed goes to the pawnshop.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Condition: a loan of 100,000 ₸ for 30 days, fee 1% per day.</p>
<ol><li>Fee for 30 days: 100,000 × 0.01 × 30 = 30,000 ₸.</li><li>To repay: 130,000 ₸, that is 30% for the month.</li><li>If you extended such a loan every month for a year, the interest alone would be about 12 × 30,000 = 360,000 ₸. That is 3.6 times the amount of the loan itself, and the debt would remain.</li></ol>
<p>Answer: such loans are acceptable only in an emergency and for a short period.</p></div>
<div class="box warn"><span class="t">Common mistake</span>Taking a new loan to repay an old one. A chain of loans grows faster than your salary. "Only 1% per day" sounds small, but it is 365% per year.</div>

<h2><span class="k">5</span>Debt burden: how much debt you can carry</h2>
<p><b>Debt burden</b> is the share of income that goes to debt payments. It is calculated as: monthly payments / monthly income × 100%. The guideline is no more than 30–35%. If it is higher, life becomes tight, and any setback leads to missed payments.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Condition: Daniyar's income is 450,000 ₸ per month. Payments: mortgage 110,000 ₸, car loan 55,000 ₸, consumer loan 35,000 ₸.</p>
<ol><li>Total payments: 110 + 55 + 35 = 200 thousand ₸.</li><li>Burden: 200,000 / 450,000 ≈ 44.4%. This is above the norm.</li><li>If income falls to 360,000 ₸: 200,000 / 360,000 ≈ 55.6%. More than half of the income goes to debt.</li><li>Acceptable payment at an income of 360,000 ₸ and a norm of 35%: 360,000 × 0.35 = 126,000 ₸.</li></ol>
<p>Answer: the burden is currently above the norm. Payments need to be reduced: refinance the expensive loan, repay the most costly debt early, and do not take new loans.</p></div>

<h2><span class="k">6</span>If debts become unmanageable</h2>
<p>The lecture describes a model of personal bankruptcy from Russian legislation: a debt of more than 500,000 rubles and a payment delay of more than three months. For Kazakhstan, there are its own laws on bankruptcy and rehabilitation procedures for individuals. Their conditions should be checked against the laws in force and with lawyers.</p>
<div class="box def"><span class="t">If you remember only one thing</span>A loan is a tool. It is justified if it brings more benefit than it costs (education, a working business). It becomes dangerous when payments eat up more than a third of your income. Before signing, calculate the total cost, not just the rate.</div>
`
},'en');
