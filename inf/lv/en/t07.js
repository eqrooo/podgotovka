addLevels('inf','t07',{
short:String.raw`
<h3>Statement</h3>
<ul>
<li><b>Statement</b> — a declarative sentence that is either true or false, but not both at once.</li>
<li>Truth is denoted by 1 (T), falsehood by 0 (F). Simple statements are denoted by letters A, B, C.</li>
<li>Not statements: questions, commands, paradoxes, sentences without a definite meaning.</li>
</ul>

<h3>Logical Connectives</h3>
<ul>
<li><b>Negation</b> \(\neg A\): changes the value to the opposite.</li>
<li><b>Conjunction</b> \(A\wedge B\): true only if both are true.</li>
<li><b>Disjunction</b> \(A\vee B\): false only if both are false.</li>
<li><b>Implication</b> \(A\to B\): false only when A=1, B=0.</li>
<li><b>Equivalence</b> \(A\leftrightarrow B\): true when the values coincide.</li>
<li><b>Exclusive OR</b> \(A\oplus B\): true when the values differ.</li>
<li>Precedence: \(\neg\), then \(\wedge\), then \(\vee\), then \(\to\), then \(\leftrightarrow\).</li>
</ul>

<h3>Truth Table</h3>
<ul>
<li>Number of rows is \(2^n\), where n is the number of variables.</li>
<li>Compute the columns of subformulas from left to right; the last column is the value of the formula.</li>
<li>Example: \(F=(A\vee B)\wedge\neg C\) is true on the sets 010, 100, 110.</li>
</ul>

<h3>Laws of Boolean Algebra</h3>
<ul>
<li>De Morgan: \(\neg(A\wedge B)=\neg A\vee\neg B\); \(\neg(A\vee B)=\neg A\wedge\neg B\).</li>
<li>Absorption: \(A\wedge(A\vee B)=A\). Gluing: \((A\wedge B)\vee(A\wedge\neg B)=A\).</li>
<li>Implication: \(A\to B=\neg A\vee B\).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>What a Statement Is</h2>
<p>Logic begins with a simple question: can a phrase be unambiguously true or false? If so, it is a <b>statement</b> (Statement, Proposition). For example, “2+2=4” is true, “The Earth is flat” is false. But “Close the window” does not qualify. It is a command, and it has no truth value. “What time is it?” is a question, so it does not qualify either.</p>
<div class="box def"><span class="t">Definition</span><b>Statement</b> (Statement, Proposition) — a declarative sentence that is either true or false, but not both at once. It cannot be ambiguous or evaluative.</div>
<p>Truth is conventionally denoted by the digit 1 (T, True), falsehood by the digit 0 (F, False). Simple statements are denoted by letters A, B, C. From them, using connectives, we build <b>compound statements</b>, that is, formulas.</p>
<div class="box warn"><span class="t">Common mistake</span>Considering any phrase that makes an assertion a statement. The phrase “This sentence is false” is a paradox: it cannot be either true or false. Such phrases are not statements in logic.</div>

<h2><span class="k">2</span>Logical Connectives in Simple Terms</h2>
<p>A connective is a word that joins statements and creates a new meaning. Logic has only a few of them. It is convenient to understand each through an everyday situation.</p>
<ul>
<li><b>NOT (negation)</b>, \(\neg A\). Changes the value to the opposite. If A is true, then \(\neg A\) is false.</li>
<li><b>AND (conjunction)</b>, \(A\wedge B\). True only when both statements are true. “I did my homework and washed the dishes” is true only if both conditions hold.</li>
<li><b>OR (disjunction)</b>, \(A\vee B\). False only when both are false. “Take an umbrella or a jacket” means at least one of the conditions is satisfied.</li>
<li><b>If…, then… (implication)</b>, \(A\to B\). The most unusual connective. It is false in only one case: the premise A is true and the consequence B is false. “If it rains, I will take an umbrella” is violated only when it rains and I have no umbrella.</li>
<li><b>Equivalent (equivalence)</b>, \(A\leftrightarrow B\). True when the values match. Both true or both false.</li>
<li><b>Exclusive OR</b>, \(A\oplus B\). True when the values differ. This is “either one or the other, but not both”.</li>
</ul>
<div class="tw"><table><thead><tr><th>A</th><th>B</th><th>NOT A</th><th>A AND B</th><th>A OR B</th><th>A → B</th><th>A ↔ B</th><th>A ⊕ B</th></tr></thead><tbody>
<tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
</tbody></table></div>
<div class="box tip"><span class="t">In plain terms</span>Remember implication as a promise. You promised: “If you pass the exam, you will get a gift.” The promise is broken only when you pass the exam and there is no gift. If you do not pass the exam, the promise is not broken, whatever happens.</div>

<h2><span class="k">3</span>Truth Table</h2>
<p>A <b>truth table</b> shows what value a formula takes for each set of values of the variables. This is the main tool of the topic: with it you can check equivalence, find errors, and solve circuit problems.</p>
<p>Build it in order:</p>
<ol>
<li>Count the variables. If there are n of them, there will be \(2^n\) rows: two variables give 4 rows, three give 8, four give 16.</li>
<li>Fill the variable columns with all sets, like binary counting: 000, 001, 010, ..., 111.</li>
<li>Determine the order of operations and write out the intermediate parts of the formula.</li>
<li>Compute the columns from left to right. The last column is the answer.</li>
</ol>
<div class="box ex"><span class="t">Step-by-step example: \((A\vee B)\wedge\neg C\)</span>
<ol>
<li>There are 3 variables, so there are 8 rows.</li>
<li>First compute \(\neg C\): this is simply the opposite value of C.</li>
<li>Then compute \(A\vee B\): if at least one of A, B equals 1, we get 1.</li>
<li>At the end compute the conjunction: the result is 1 only if \(A\vee B\) equals 1 and \(\neg C\) equals 1.</li>
</ol>
<p>Result: \(F=1\) only for the sets 010, 100 and 110. The other five rows give 0. For example, the set 011 gives 0, because C=1 and \(\neg C=0\).</p>
</div>
<div class="tw"><table><thead><tr><th>A</th><th>B</th><th>C</th><th>A∨B</th><th>¬C</th><th>F</th></tr></thead><tbody>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
</tbody></table></div>
<p>A formula is called a <b>tautology</b> if its column contains only ones. It is a <b>contradiction</b> if it contains only zeros. And it is <b>satisfiable</b> if there is a one in at least one row.</p>

<h2><span class="k">4</span>Operator Precedence: What Is Evaluated First</h2>
<p>As in arithmetic, logic has an order of operations. Without brackets, negation is evaluated first, then conjunction, then disjunction, then implication, and finally equivalence. Brackets change everything: what is inside brackets is evaluated first.</p>
<div class="box tip"><span class="t">Remember</span>The order is the same as for multiplication and addition: first the “strong” connectives, then the “weak” ones. NOT is stronger than AND, and AND is stronger than OR. So the notation \(\neg A\wedge B\vee C\) is understood as \(((\neg A)\wedge B)\vee C\).</div>

<h2><span class="k">5</span>Laws of Boolean Algebra</h2>
<p>The laws let you simplify formulas without building a table. This is like expanding brackets in algebra. Here are the main laws:</p>
<div class="tw"><table><thead><tr><th>Law</th><th>Notation</th></tr></thead><tbody>
<tr><td>Commutativity</td><td>\(A\wedge B=B\wedge A\); \(A\vee B=B\vee A\)</td></tr>
<tr><td>Associativity</td><td>\((A\wedge B)\wedge C=A\wedge(B\wedge C)\); the same for \(\vee\)</td></tr>
<tr><td>Distributivity</td><td>\(A\wedge(B\vee C)=(A\wedge B)\vee(A\wedge C)\)</td></tr>
<tr><td>De Morgan</td><td>\(\neg(A\wedge B)=\neg A\vee\neg B\); \(\neg(A\vee B)=\neg A\wedge\neg B\)</td></tr>
<tr><td>Absorption</td><td>\(A\wedge(A\vee B)=A\); \(A\vee(A\wedge B)=A\)</td></tr>
<tr><td>Gluing</td><td>\((A\wedge B)\vee(A\wedge\neg B)=A\)</td></tr>
<tr><td>Implication</td><td>\(A\to B=\neg A\vee B\)</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">Step-by-step example: simplification</span>
<ol>
<li>Starting formula: \((A\vee B)\wedge(A\vee\neg B)\).</li>
<li>Expand by distributivity: \(A\vee(B\wedge\neg B)\).</li>
<li>The expression \(B\wedge\neg B\) is always false, so it equals 0.</li>
<li>What remains is \(A\vee 0 = A\).</li>
</ol>
<p>Answer: \(A\). Check by table: when A=1 the formula is true, when A=0 it is false. So it coincides with A.</p>
</div>
<div class="box warn"><span class="t">Common mistake</span>Expanding a negated bracket without changing the operation. The expression \(\neg(A\wedge B)\) is not equal to \(\neg A\wedge\neg B\). By De Morgan's law, when the negation is moved inside, AND changes to OR.</div>
<div class="box warn"><span class="t">Common mistake</span>Thinking that implication is false when A=0. In fact, when A=0 the implication is always true. It is false only in the case 1→0.</div>

<h2><span class="k">6</span>Checking Equivalence</h2>
<p>Two formulas are equivalent if their columns in the truth table match. This is a reliable method that does not require knowing the laws.</p>
<div class="box ex"><span class="t">Step-by-step example: checking De Morgan</span>
<ol>
<li>Build a table for \(\neg(A\wedge B)\) and \(\neg A\vee\neg B\) for the four sets 00, 01, 10, 11.</li>
<li>For 00: \(\neg(0\wedge0)=1\), and \(\neg0\vee\neg0=1\vee1=1\). Match.</li>
<li>For 01: \(\neg(0)=1\), and \(\neg0\vee\neg1=1\vee0=1\). Match.</li>
<li>For 10: \(\neg(0)=1\), and \(0\vee1=1\). Match.</li>
<li>For 11: \(\neg(1)=0\), and \(0\vee0=0\). Match.</li>
</ol>
<p>The columns 1, 1, 1, 0 match, so the formulas are equivalent.</p>
</div>
<div class="box ex"><span class="t">Step-by-step example: tautology</span>
<p>Task: check whether \((A\to B)\vee(B\to A)\) is a tautology.</p>
<ol>
<li>Set 00: both implications are true, so 1.</li>
<li>Set 01: \(0\to1=1\), so the whole expression is 1.</li>
<li>Set 10: \(1\to0=0\), but \(0\to1=1\), so the whole expression is 1.</li>
<li>Set 11: both implications are true, so 1.</li>
</ol>
<p>All rows contain ones, so this is a tautology.</p>
</div>

<h2><span class="k">7</span>How Not to Make Mistakes</h2>
<ul>
<li>Always check the number of rows: \(2^n\), not \(n\) and not \(2n\).</li>
<li>Remember that implication is false only in the case 1→0.</li>
<li>When negating a bracket, change AND to OR and OR to AND.</li>
<li>To check a result, substitute one or two sets into the original formula and compare.</li>
</ul>
<div class="box def"><span class="t">If you remember only one thing</span>A statement is a phrase that is unambiguously true or false. The connectives NOT, AND, OR, implication, equivalence and exclusive OR build formulas from simple statements. A truth table shows the value of a formula for all sets, and the laws of De Morgan and absorption help to simplify.</div>
`
},'en');
