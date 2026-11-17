addEn('econ','t11',{
title:'Money and its functions. Personal budget and savings',
summary:'The essence, functions and types of money; personal budget, emergency fund, deposits, compound interest, inflation and securities.',
body:String.raw`
<h2><span class="k">1</span>The essence and functions of money</h2>
<div class="box def"><span class="t">Definition</span><b>Money</b> — a universal means of exchange, measure of value, store of value and means of payment.</div>
<div class="tw"><table><thead><tr><th>Function</th><th>What it means</th><th>Example</th></tr></thead><tbody>
<tr><td>Measure of value</td><td>prices are expressed in money</td><td>a price tag "5,000 ₸"</td></tr>
<tr><td>Medium of exchange</td><td>intermediary in buying and selling</td><td>paying for groceries in a store</td></tr>
<tr><td>Store of value</td><td>preservation of value over time</td><td>a transfer to a deposit</td></tr>
<tr><td>Means of payment</td><td>settlement of debts and obligations</td><td>paying a loan, taxes, tuition</td></tr>
<tr><td>World money</td><td>international settlements</td><td>foreign currency payments</td></tr></tbody></table></div>
<p><b>Types of money:</b> cash (coins, banknotes), non-cash (funds in accounts), electronic money, digital currencies (including cryptocurrencies). Non-cash money makes up the bulk of the money supply.</p>
<div class="box warn"><span class="t">Common mistake</span>Confusing the functions: when you pay in a store, money acts as a <i>medium of exchange</i>; when you repay a loan, it is a <i>means of payment</i>; when you look at a price tag, it is a <i>measure of value</i>.</div>
<h2><span class="k">2</span>Life cycle and finances</h2>
<p>Priorities change: a student — studies, first earnings and building skills; a young family — housing, children, insurance; middle age — savings for retirement, repaying debts; a pensioner — spending savings, protection against inflation and fraud.</p>
<h2><span class="k">3</span>Personal financial plan and budget</h2>
<p><b>Budget</b> — a plan of income and expenses for a certain period (of a state, an organization, a family, or an individual).</p>
<p>Balance = income − expenses. Balance &gt; 0 — a <b>surplus</b>; &lt; 0 — a <b>deficit</b>.</p>
<p>Planning steps: set goals (short-, medium- and long-term) → analyze income and expenses → draw up a budget → create an <b>emergency fund</b> → invest and protect assets. Tools: spreadsheets, mobile apps, advisors.</p>
<div class="box tip"><span class="t">The 50/30/20 rule (guideline)</span>about 50% of income goes to essential expenses, 30% to wants, and 20% to savings. This is a guideline, not a law: the proportions depend on income and goals.</div>
<p><b>Emergency fund</b> — a reserve for unforeseen situations, usually covering 3–6 months of essential expenses.</p>
<h2><span class="k">4</span>Savings and investing</h2>
<p>Savings are needed for unforeseen events, major purchases, retirement and education. Forms: cash, deposits, assets (real estate, gold), securities.</p>
<p>Investing principles: <b>diversification</b> (not putting all eggs in one basket), assessment of risk and return, a long-term approach, and understanding of the instrument.</p>
<h3>Compound interest</h3>
<p>If interest is capitalized (added to the deposit and itself earns income), then</p>
<p>\[ S = P \cdot (1+r)^n \]</p>
<p>where P — the initial amount, r — the rate per period, n — the number of periods. Simple interest: S = P·(1 + r·n).</p>
<div class="box ex"><span class="t">Example</span>2,000,000 ₸ for 3 years at 12% per year with annual capitalization: 2,000,000 × 1.12³ = 2,809,856 ₸. With simple interest it would be 2,720,000 ₸.</div>
<h3>Inflation and real return</h3>
<p>Nominal return does not take into account the growth of prices. The <b>real rate</b> ≈ nominal rate − inflation; more precisely: (1 + i) / (1 + π) − 1.</p>
<h2><span class="k">5</span>Deposits: terms and risks</h2>
<p>Terms: duration, rate, currency, the possibility of topping up and withdrawing, capitalization. Risks: <b>inflation</b>, loss of interest on early withdrawal, the risk of the bank's bankruptcy. The lecture states that individuals' deposits are insured up to 20 million ₸ (in the problems below the limit is given explicitly; check current limits on the deposit guarantee fund's website). Risk management: a reliable bank, spreading amounts across several banks, and taking inflation into account.</p>
<h2><span class="k">6</span>Securities</h2>
<ul><li><b>Shares</b> — a stake in a company; income — dividends and price growth.</li><li><b>Bonds</b> — a debt instrument; income — coupon. Current yield = annual coupon / purchase price.</li><li><b>Units of investment funds</b>.</li><li><b>Futures and options</b> — riskier derivative instruments.</li></ul>
<p>Pros: potentially high returns and protection against inflation. Cons: risk of losses, and knowledge is required. Rule: do not invest money you will need in the near future, and do not invest in what you do not understand.</p>
`,
practice:[
{q:String.raw`<b>Case 1. Functions of money.</b> A student received a scholarship of 90,000 ₸. He: (1) paid for transport and purchases in a store by card; (2) compared prices in two stores by price tags; (3) transferred 20,000 ₸ to a savings account; (4) paid for the semester's tuition; (5) set aside 10,000 ₸ in cash in an envelope. Determine the functions of money and the types of money in each operation.`,
 a:String.raw`(1) <b>Medium of exchange</b>, non-cash money (card payment). (2) <b>Measure of value</b> — prices are expressed in tenge and allow goods to be compared. (3) <b>Store of value</b>, non-cash money in an account. (4) <b>Means of payment</b> — settling an obligation to the university (non-cash or cash). (5) <b>Store of value</b>, cash. All the functions show why money is the basis of financial relations: they connect purchases, settlements and savings.`},
{q:String.raw`<b>Case 2. Family budget.</b> Monthly family income: father's salary 360,000 ₸, mother's salary 290,000 ₸, other 50,000 ₸. Expenses: groceries 170,000, rent 190,000, transport 55,000, utilities and communication 45,000, child's education 60,000, entertainment 40,000, clothing and other 60,000 ₸. Find the income, the expenses and the balance; distribute the balance by the rule "half to the safety fund, the rest to goals."`,
 a:String.raw`Income = 360,000 + 290,000 + 50,000 = <b>700,000 ₸</b>. Expenses = 170 + 190 + 55 + 45 + 60 + 40 + 60 = <b>620,000 ₸</b>. Balance = 700,000 − 620,000 = <b>80,000 ₸</b> (a surplus, 11.4% of income).<br>Distribution: 40,000 ₸ to the emergency fund, 40,000 ₸ toward a goal (down payment, vacation, education). Spending on essential needs (excluding entertainment and other) is 520,000 ₸ (74% of income), so little is left for "wants" — to speed up savings it is worth optimizing entertainment and other spending.`},
{q:String.raw`<b>Case 3. Emergency fund.</b> Askhat's income is 300,000 ₸, and his essential expenses are 210,000 ₸ per month. He wants a fund covering 6 months of essential expenses and sets aside 40,000 ₸ per month. What amount is needed, and in how many months will he accumulate it? How many months will it take if he cuts non-essential expenses and sets aside 60,000 ₸?`,
 a:String.raw`Target = 210,000 × 6 = <b>1,260,000 ₸</b>. At 40,000 ₸ per month: 1,260,000 / 40,000 = 31.5 → <b>32 months</b>. At 60,000 ₸: 1,260,000 / 60,000 = <b>21 months</b>. The saved money can be kept in a deposit with withdrawal available; interest will speed up saving slightly, but one should not rely on it.`},
{q:String.raw`<b>Case 4. Compound interest.</b> A deposit of 2,000,000 ₸ for 3 years at 12% per year. Find the final amount with simple interest and with compound interest (annual capitalization). What is the difference and what does it depend on?`,
 a:String.raw`Simple: 2,000,000 × (1 + 0.12 × 3) = <b>2,720,000 ₸</b>.<br>Compound: 2,000,000 × 1.12³ = 2,000,000 × 1.404928 = <b>2,809,856 ₸</b>.<br>Difference = 89,856 ₸. It grows with the term, the rate and the frequency of capitalization: interest is accrued also on previously accrued interest.`},
{q:String.raw`<b>Case 5. Inflation.</b> A deposit of 1,000,000 ₸ yields 11% per year, and inflation over the year is 8.5%. Find the amount after one year, the purchasing power of this amount in prices at the beginning of the year, and the real return.`,
 a:String.raw`After one year: 1,000,000 × 1.11 = <b>1,110,000 ₸</b>. Prices rose by 8.5%, so in beginning-of-year prices: 1,110,000 / 1.085 ≈ <b>1,023,041 ₸</b>. Real return = 1.11 / 1.085 − 1 ≈ <b>2.3%</b> (approximately 11% − 8.5% = 2.5%). Conclusion: nominally you earned 110,000 ₸, but in real terms about 23,000 ₸.`},
{q:String.raw`<b>Case 6. Deposit insurance limit.</b> According to the problem conditions, the guaranteed return of an individual's deposit is 20 million ₸ per person per bank. A depositor has 26 million ₸ in one bank whose license has been revoked. How much will be returned under the guarantee? What is the correct course of action?`,
 a:String.raw`Under the guarantee, <b>20 million ₸</b> will be returned; 6 million ₸ is at risk of remaining unrecovered (one will have to wait for the results of the bank's liquidation). The correct approach: split the money between banks so that each holds no more than the limit (for example, 13 + 13 million ₸), and check which accounts are covered by the insurance terms.`},
{q:String.raw`<b>Case 7. Bond.</b> A bond with a face value of 100,000 ₸ and a coupon of 9% per year, bought at a price of 95,000 ₸. What is the annual coupon, and what is the current yield?`,
 a:String.raw`Coupon = 100,000 × 0.09 = <b>9,000 ₸</b> per year. Current yield = 9,000 / 95,000 ≈ <b>9.47%</b> — above the coupon rate, because the bond was bought at a discount. If held to maturity at face value, one additionally gets 5,000 ₸ of income.`}
],
quiz:[
{q:String.raw`Which function of money is at work when you pay for a purchase in a store?`,options:[String.raw`Measure of value`,String.raw`Store of value`,String.raw`Medium of exchange`,String.raw`World money`],solution:String.raw`In buying and selling, money is the intermediary in the exchange (medium of exchange). The measure of value appears on the price tag, and the store of value appears when saving.`},
{q:String.raw`Repaying a loan is a manifestation of the function of money as a`,options:[String.raw`means of payment`,String.raw`measure of value`,String.raw`store of value`,String.raw`medium of exchange`],solution:String.raw`Repaying a debt and obligations is the payment function.`},
{q:String.raw`A family's income is 520,000 ₸, and its expenses are 565,000 ₸. What results?`,options:[String.raw`A surplus of 45,000 ₸`,String.raw`A deficit of 45,000 ₸`,String.raw`Balance`,String.raw`A deficit of 1,085,000 ₸`],solution:String.raw`520,000 − 565,000 = −45,000: expenses exceed income — a deficit. Income and expenses cannot be added together.`},
{q:String.raw`Essential expenses are 180,000 ₸ per month. A fund covering 4 months is`,options:[String.raw`540,000 ₸`,String.raw`900,000 ₸`,String.raw`45,000 ₸`,String.raw`720,000 ₸`],solution:String.raw`180,000 × 4 = 720,000 ₸. 45,000 is the result of division, not multiplication.`},
{q:String.raw`A deposit of 1,000,000 ₸ for 2 years at 10% per year with annual capitalization. What is the final amount?`,options:[String.raw`1,210,000 ₸`,String.raw`1,200,000 ₸`,String.raw`1,100,000 ₸`,String.raw`1,020,000 ₸`],solution:String.raw`1,000,000 × 1.1² = 1,210,000 ₸. 1,200,000 is simple interest (without interest on interest).`},
{q:String.raw`The nominal deposit rate is 9%, and inflation is 6%. What is the approximate real return?`,options:[String.raw`15%`,String.raw`6%`,String.raw`9%`,String.raw`3%`],solution:String.raw`The real rate ≈ 9% − 6% = 3% (exact calculation 1.09 / 1.06 − 1 ≈ 2.8%). Adding the rates together is incorrect.`},
{q:String.raw`Which of the following is NOT an investing principle?`,options:[String.raw`Diversification`,String.raw`Understanding the instrument`,String.raw`Investing all money in one "reliable" asset`,String.raw`Assessing risk and return`],solution:String.raw`Investing all money in one asset contradicts diversification, the main way of reducing risk.`},
{q:String.raw`A bond with a face value of 50,000 ₸ and a coupon of 8% was bought for 50,000 ₸. What is the annual coupon income?`,options:[String.raw`8,000 ₸`,String.raw`400 ₸`,String.raw`4,000 ₸`,String.raw`40,000 ₸`],solution:String.raw`50,000 × 0.08 = 4,000 ₸. 8,000 is a place-value error; 40,000 is multiplication by 0.8.`},
{q:String.raw`What is the income from owning a share?`,options:[String.raw`A coupon`,String.raw`Dividends and price growth`,String.raw`Interest on a deposit`,String.raw`An insurance payout`],solution:String.raw`A shareholder receives dividends and can earn from the growth of the share price. A coupon is the income on bonds.`}
]
});
