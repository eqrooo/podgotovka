addEn('econ','t04',{
title:'Money, Price, Price Formation and Inflation',
summary:'The origin and functions of money, forms and types of money circulation, the law of money circulation, functions and types of prices, the price formation mechanism, inflation: causes, types, consequences.',
body:String.raw`
<h2><span class="k">1</span>Origin, essence and functions of money</h2>
<p>Money arose naturally as a universal means of exchange. The evolution: <b>barter</b> → commodity money (livestock, grain, furs) → metal money (gold, silver, coins) → paper and electronic money. Barter is inconvenient because of the "double coincidence of wants": one must find someone who needs your good and who has the good you need.</p>
<div class="box def"><span class="t">Definition</span><b>Money</b> (money) — a special commodity that performs the role of the universal equivalent of value.</div>
<div class="tw"><table><thead><tr><th>Function</th><th>Content</th><th>Example</th></tr></thead><tbody>
<tr><td>Measure of value</td><td>express the value of goods in price</td><td>a smartphone "costs" 250,000 tenge</td></tr>
<tr><td>Medium of circulation</td><td>intermediary in the act of buying and selling</td><td>paying for bread in a shop</td></tr>
<tr><td>Store of value</td><td>preservation of value over time</td><td>a deposit, a piggy bank</td></tr>
<tr><td>Means of payment</td><td>settlement of obligations</td><td>repayment of a loan, taxes, wages</td></tr>
<tr><td>World money</td><td>settlements between countries</td><td>payment for imports in dollars</td></tr>
</tbody></table></div>
<p>The role of money in the economy: it ensures exchange, stimulates production and investment, and is a tool for regulating the economy through monetary policy.</p>

<h2><span class="k">2</span>Forms of money and types of money circulation</h2>
<ul>
<li><b>Cash</b> — banknotes and coins.</li>
<li><b>Non-cash</b> — funds in bank accounts, card payments, transfers, checks.</li>
<li><b>Electronic</b> — the digital form of non-cash money: e-wallets, cryptocurrencies (the latter are not legal tender in all countries).</li>
</ul>
<p>Types of money circulation: cash (the movement of banknotes and coins), non-cash (settlements through banks, online operations), credit money (bills of exchange, bank loans, credit cards), electronic money.</p>

<h2><span class="k">3</span>Circular flow of money and the law of money circulation</h2>
<p>The <b>simple model</b> of the circular flow: households ↔ firms. Households provide resources and receive incomes (wages, rent, interest, profit), with which they buy goods and services; household expenditures become the firms' revenue. The <b>extended model</b> adds the government (taxes, transfers), the financial sector (savings, loans) and the external sector (exports, imports).</p>
<div class="box def"><span class="t">Law of money circulation (equation of exchange)</span>M × V = P × Q. Here M is the quantity of money, V is the velocity of circulation (how many times a tenge changes hands per year on average), P is the price level, Q is the volume of goods. The required quantity of money: M = (P × Q) / V.</div>
<div class="box ex"><span class="t">Example</span>During the year, 2 million goods were sold at an average price of 2,500 tenge: P × Q = 5 billion tenge. With a velocity of 5, the required money supply is M = 5 billion / 5 = 1 billion tenge. If there is more money while V and Q remain unchanged, prices will rise — one of the sources of inflation.</div>

<h2><span class="k">4</span>Price and its functions</h2>
<p><b>Price</b> — the monetary expression of the value of a good. Functions of prices: <b>accounting</b> (measuring costs and results), <b>informational</b> (signals about demand and supply), <b>distributive</b> (redistribution of income and resources), <b>stimulating</b> (encourages or restrains production and consumption).</p>

<h2><span class="k">5</span>Price formation mechanism and types of prices</h2>
<ul>
<li><b>Market price formation</b>: the price is determined by demand and supply.</li>
<li><b>State regulation</b>: fixed or maximum prices (for socially important goods, monopoly tariffs).</li>
</ul>
<p>Types of prices: <b>wholesale</b> (between enterprises), <b>retail</b> (for the final consumer), <b>procurement</b> (from producers of agricultural products), <b>exchange</b> (on trading floors), <b>tariffs</b> for services (transport, utilities), <b>free</b> and <b>regulated</b>.</p>
<div class="box ex"><span class="t">Structure of price</span>Retail price = cost + producer's profit + taxes (VAT and others) + trade markup. Example: cost 600 tg, profit 100, trade markup 150 — the retail price before tax is 850 tg.</div>

<h2><span class="k">6</span>Inflation</h2>
<div class="box def"><span class="t">Definition</span><b>Inflation</b> (inflation) — the depreciation of money, manifested as a sustained rise in the general price level. It is measured by the consumer price index (CPI): inflation rate = (CPI₁ − CPI₀) / CPI₀ × 100 %.</div>
<p><b>Causes</b>: excessive money supply; rising production costs (cost-push inflation); monopolistic pricing; a budget deficit covered by money issuance; rising aggregate demand (demand-pull inflation).</p>
<div class="tw"><table><thead><tr><th>Type</th><th>Rate</th></tr></thead><tbody>
<tr><td>Moderate (creeping)</td><td>up to 10 % per year</td></tr>
<tr><td>Galloping</td><td>10–50 %</td></tr>
<tr><td>Hyperinflation</td><td>more than 50 % per month</td></tr>
</tbody></table></div>
<p><b>Consequences</b>: a decline in the purchasing power of money, depreciation of savings, disruption of economic ties, social tension. Debtors with fixed-rate loans gain, while recipients of fixed incomes and depositors lose. The central bank fights inflation by raising the interest rate (the key rate) and restricting the money supply.</p>
<div class="box warn"><span class="t">Common mistake</span>Thinking that inflation is simply the rise in price of one good. Inflation is a rise in the <i>general</i> price level. Another mistake is subtracting rates instead of calculating precisely: the real return on a deposit = (1 + nominal rate) / (1 + inflation) − 1 (approximately: rate − inflation).</div>
<div class="box tip"><span class="t">Remember</span>Five functions of money: measure of value, circulation, accumulation, payment, world money. Equation of exchange M·V = P·Q. Inflation depreciates money; only a rate above inflation protects savings.</div>
`,
practice:[
{q:String.raw`In the economy, 3 million units of goods were sold during the year at an average price of 4,000 tenge. The velocity of money is 6. How much money is needed for circulation? How much will be needed if the velocity falls to 5 and everything else stays the same? What will happen to prices if the amount of money stays the same and the velocity falls?`,
a:String.raw`P × Q = 4,000 × 3,000,000 = 12 billion tenge. M = 12 billion / 6 = 2 billion tenge. With V = 5: M = 12 / 5 = 2.4 billion tenge (0.4 billion more is needed). If the money supply remains 2 billion and the velocity falls to 5: M × V = 10 billion, so P × Q = 10 billion (with Q unchanged, prices will fall by 1 − 10/12 ≈ 16.7 %: to about 3,333 tenge). That is, when there is not enough money for circulation, pressure arises toward lower prices.`},
{q:String.raw`The consumer basket cost 180,000 tenge in January and 196,200 tenge in December. Find the annual inflation, determine its type, and calculate how many goods at "January prices" can be bought for 500,000 tenge in December (purchasing power).`,
a:String.raw`Inflation = (196,200 − 180,000) / 180,000 = 9 %. This is moderate (creeping) inflation (up to 10 % per year). The purchasing power of 500,000 tenge at January prices: 500,000 / 1.09 ≈ 458,716 tenge, that is, the money "lost" about 41,284 tenge (8.3 %).`},
{q:String.raw`Aizhan put 1,000,000 tenge into a deposit at 12 % per year. Inflation over the year was 9 %. Find the amount after one year, the approximate and the exact real return on the deposit. Is this placement profitable?`,
a:String.raw`Amount: 1,000,000 × 1.12 = 1,120,000 tenge (nominal income 120,000). Approximate real rate: 12 − 9 = 3 %. Exact: 1.12 / 1.09 − 1 ≈ 2.75 %. The real value of the deposit in today's prices: 1,120,000 / 1.09 ≈ 1,027,523 tenge — the purchasing power grew by ≈ 27,523 tenge. The investment protects against inflation (a positive real rate), although the gain is small.`},
{q:String.raw`Structure of consumer spending: food — 40 % (rose by 12 %), non-food goods — 35 % (by 6 %), services — 25 % (by 9 %). Find the overall inflation rate for this basket and determine the type of inflation. Which factor made the largest contribution?`,
a:String.raw`Inflation = 0.40 × 12 + 0.35 × 6 + 0.25 × 9 = 4.8 + 2.1 + 2.25 = 9.15 %. Type — moderate (creeping, up to 10 %). Contributions: food 4.8 p.p. (52.5 % of all inflation), non-food 2.1, services 2.25. The largest contribution came from food — because of its high share in spending and the fastest price growth.`},
{q:String.raw`In a certain country, inflation is 50 % per month. By how many times will prices rise over 3 months and over a year? What will a good priced at 1,000 tenge cost in 3 months? What type of inflation is this?`,
a:String.raw`The monthly multiplier is 1.5. Over 3 months: 1.5³ = 3.375 times; the good will cost 3,375 tenge. Over a year: 1.5¹² ≈ 129.7 times (prices will rise about 130 times, or by ≈ 12,874 %). 50 % per month is the threshold of hyperinflation (more than 50 % per month): the monetary system is practically destroyed, people switch to barter and foreign currency.`},
{q:String.raw`Determine the function of money in each situation: (a) the price tag shows 12,500 tenge; (b) mom pays 8,000 tenge for a club; (c) Daniyar sets aside 30,000 tenge a month for a laptop; (d) a company pays a supplier from China in yuan; (e) a borrower makes a monthly loan payment. Name two forms of non-cash money.`,
a:String.raw`(a) measure of value; (b) medium of circulation (payment for a service, an act of buying and selling); (c) store of value; (d) world money; (e) means of payment (settlement of an obligation). Non-cash money: balances in bank accounts and card/online transfers; e-wallets are classified as electronic money. The difference between (b) and (e): in (b) money mediates an exchange, in (e) it settles a debt.`},
{q:String.raw`The cost of a loaf of bread is 110 tg, the producer's profit is 15 tg, taxes and fees are 12 tg, the wholesale markup is 8 tg, and the retail trade markup is 20 tg. Find the wholesale and retail prices (in total). What share of the retail price is accounted for by trade markups? The state introduces a maximum retail price of 150 tg: what will happen?`,
a:String.raw`Wholesale price = 110 + 15 + 12 + 8 = 145 tg (in the simplified structure). Retail = 145 + 20 = 165 tg. Share of trade markups: (8 + 20) / 165 ≈ 17.0 %. If the maximum price is 150 tg, the retail markup cannot exceed 5 tg, or other components must be reduced; otherwise trade becomes unprofitable: producers and shops reduce output, and a shortage or shadow trade is possible. Regulated prices are useful for social goods, but they must not be below costs.`}
],
quiz:[
{q:String.raw`Who acts as the intermediary in an act of buying and selling, and what function of money is this?`,options:[String.raw`Store of value`,String.raw`Measure of value`,String.raw`Medium of circulation`,String.raw`World money`],solution:String.raw`Correct: C: money serves exchange (goods — money — goods). Accumulation is preservation of value; measure of value is the expression of price; world money is international settlement.`},
{q:String.raw`Goods worth 24 billion tenge, and the velocity of money is 8 turnovers. The required quantity of money is:`,options:[String.raw`192 billion tenge`,String.raw`32 billion tenge`,String.raw`16 billion tenge`,String.raw`3 billion tenge`],solution:String.raw`Correct: D: M = PQ / V = 24 / 8 = 3 billion tenge. A is multiplication instead of division; B is addition; C is subtraction.`},
{q:String.raw`The CPI rose from 120 to 132. What is the inflation rate?`,options:[String.raw`12 %`,String.raw`10 %`,String.raw`9.1 %`,String.raw`110 %`],solution:String.raw`Correct: B: (132 − 120) / 120 = 0.10 = 10 %. A is simply the difference in points; C is division by the final value (12/132); D is the index itself, not the rate.`},
{q:String.raw`Annual inflation is 7 %, and the deposit rate is 11 %. The approximate real rate is:`,options:[String.raw`4 %`,String.raw`18 %`,String.raw`7 %`,String.raw`−4 %`],solution:String.raw`Correct: A: 11 − 7 = 4 % (exactly 1.11/1.07 − 1 ≈ 3.7 %). B is the sum; C equals inflation; D has the wrong sign.`},
{q:String.raw`Which type of inflation corresponds to a rise in prices of 25 % per year?`,options:[String.raw`Creeping`,String.raw`Hyperinflation`,String.raw`Galloping`,String.raw`Deflation`],solution:String.raw`Correct: C: 10–50 % is galloping inflation. Up to 10 % is creeping; hyperinflation is more than 50 % per month; deflation is a fall in prices.`},
{q:String.raw`Which of the following is NOT a cause of inflation?`,options:[String.raw`Excessive money supply`,String.raw`Monopolistic pricing`,String.raw`Rising production costs`,String.raw`An increase in the supply of goods with an unchanged money supply`],solution:String.raw`Correct: D: with a growing volume of goods and unchanged money, pressure goes toward lower prices. A, B and C are classic causes of inflation.`},
{q:String.raw`Which group gains from unexpectedly high inflation?`,options:[String.raw`Depositors with non-interest-bearing accounts`,String.raw`Pensioners with a fixed income`,String.raw`Borrowers who took a loan at a fixed rate`,String.raw`People who keep their money in cash`],solution:String.raw`Correct: C: the debt depreciates, and it is repaid with "cheaper" money. A, B and D lose purchasing power.`},
{q:String.raw`The wholesale price is the price:`,options:[String.raw`at which goods are sold in large batches between enterprises`,String.raw`at which goods are sold to the final consumer`,String.raw`a tariff for utility services`,String.raw`set on the stock exchange`],solution:String.raw`Correct: A. B is the retail price; C is a tariff; D is an exchange price.`},
{q:String.raw`Prices in the country rise by 50 % per month. Over two months, prices will rise by:`,options:[String.raw`2 times`,String.raw`1.5 times`,String.raw`3.5 times`,String.raw`2.25 times`],solution:String.raw`Correct: D: 1.5² = 2.25. A and C are simple sums of percentages (100 % and 150 %) without compound growth; B is the growth over one month only.`}
]
});
