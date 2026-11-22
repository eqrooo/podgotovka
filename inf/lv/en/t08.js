addLevels('inf','t08',{
short:String.raw`
<h3>Predicate</h3>
<ul>
<li><b>Predicate</b> (propositional form) — a sentence with variables that becomes a statement after substituting values.</li>
<li><b>Unary</b> — of one variable; <b>n-ary</b> — of n variables. A statement is a zero-ary predicate.</li>
<li>Example: \(x^2+y^2\le9\) — binary. The pair (2, 2) gives true, the pair (2, 3) gives false.</li>
</ul>

<h3>Classification</h3>
<ul>
<li><b>Identically true</b>: true for any substitution (\(x^2-1=(x-1)(x+1)\) on \(\mathbb{R}\)).</li>
<li><b>Identically false</b>: false for any substitution (\(x^2+1\lt0\) on \(\mathbb{R}\)).</li>
<li><b>Satisfiable</b>: there is at least one set that gives true, but not all sets.</li>
</ul>

<h3>Logic circuits</h3>
<ul>
<li>Inverter — \(\neg A\); conjunctor (AND) — \(A\wedge B\); disjunctor (OR) — \(A\vee B\).</li>
<li>The number of circuit elements equals the number of operations in the formula.</li>
<li>Example: \(F=\neg A\wedge B\vee A\wedge\neg B\) — a circuit of 2 inverters, 2 conjunctors and 1 disjunctor; this is exclusive OR.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>Predicate: a statement that is still waiting for a value</h2>
<p>In the previous topic we talked about statements that are unambiguously true or false. But often in speech we encounter phrases with a variable. For example, "x is greater than three." As long as x is unknown, we cannot say whether it is true or false. Such a phrase is called a <b>predicate</b> (Predicate), or propositional form.</p>
<div class="box def"><span class="t">Definition</span><b>Predicate</b> — a sentence with variables that turns into a statement when specific values are substituted. It can be understood as a property of an object or a relation between objects.</div>
<div class="box tip"><span class="t">In simple terms</span>A predicate is like a blank form with a question: "Age: ___, older than 14?" While the field is empty, there is no answer. When you write in a number, the form becomes an understandable answer: yes or no.</div>
<p>A predicate of one variable is called <b>unary</b>. A predicate of two variables is <b>binary</b>, of three — ternary, and so on. A statement can be considered a predicate with no variables, that is, <b>zero-ary</b>.</p>
<div class="box ex"><span class="t">Step-by-step example: \(x^2+y^2\le9\)</span>
<ol>
<li>This is a binary predicate: it has two variables, x and y.</li>
<li>Substitute the pair (2, 2): \(4+4=8\). Compare: \(8\le9\), this is true.</li>
<li>Substitute the pair (2, 3): \(4+9=13\). Compare: \(13>9\), this is false.</li>
</ol>
<p>So the same predicate gives true for some pairs and false for others.</p>
</div>

<h2><span class="k">2</span>Identically true, identically false and satisfiable predicates</h2>
<p>Predicates are divided into three types. The difference is in how many sets of values give true.</p>
<div class="tw"><table><thead><tr><th>Type</th><th>What it means</th><th>Example</th></tr></thead><tbody>
<tr><td>Identically true</td><td>true for any substitution</td><td>\(x^2-1=(x-1)(x+1)\) on \(\mathbb{R}\)</td></tr>
<tr><td>Identically false</td><td>false for any substitution</td><td>\(x^2+1\lt0\) on \(\mathbb{R}\)</td></tr>
<tr><td>Satisfiable</td><td>true for at least one substitution, but not for all</td><td>\(x>5\) on natural numbers</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">Step-by-step example: \(x^2+1\lt0\) on \(\mathbb{R}\)</span>
<ol>
<li>The square of any real number is non-negative: \(x^2\ge0\).</li>
<li>Therefore, \(x^2+1\ge1\).</li>
<li>Therefore, the sum is never less than zero.</li>
</ol>
<p>Answer: the predicate is identically false.</p>
</div>
<div class="box ex"><span class="t">Step-by-step example: \(x^2-4=(x-2)(x+2)\)</span>
<p>Here it is important to prove that the equality holds for any x. Recall the difference of squares formula: \((x-2)(x+2)=x^2-4\). This is an identity, and it holds for any value of x. Therefore, the predicate is identically true.</p>
</div>
<div class="box warn"><span class="t">Common mistake</span>Thinking that a satisfiable predicate is necessarily identically true. For example, \(x^2=9\) is true for \(x=3\) and \(x=-3\), but false for \(x=2\). So this is a satisfiable predicate, not an identically true one.</div>
<div class="box warn"><span class="t">Common mistake</span>Considering \(x>3\) to be a statement. While x is not substituted, the answer is undefined. A statement is obtained only after substitution or by attaching a quantifier.</div>

<h2><span class="k">3</span>How to turn a predicate into a statement</h2>
<p>There are two ways. The first is to substitute specific values. The second is to attach a <b>quantifier</b>. A quantifier is the phrase "for all" or "there exists".</p>
<ul>
<li>\(\forall\) — "for any" (read as "for all").</li>
<li>\(\exists\) — "there exists" (there is at least one).</li>
</ul>
<div class="box ex"><span class="t">Example</span>The predicate \(x^2\ge0\) turns into the true statement \(\forall x\in\mathbb{R}\;(x^2\ge0)\): for any real x, the square is non-negative. And the statement \(\exists x\in\mathbb{R}\;(x^2<0)\) is false, because there is no such x.</div>

<h2><span class="k">4</span>Logic elements: circuits made of gates</h2>
<p>A formula of Boolean algebra can be drawn as a circuit. Each operation becomes an element, or <b>gate</b>. This is the basis of computer hardware: processors consist of millions of such elements.</p>
<div class="tw"><table><thead><tr><th>Operation</th><th>Element</th><th>When the output is 1</th></tr></thead><tbody>
<tr><td>\(\neg A\)</td><td>inverter (NOT), one input</td><td>when A is 0</td></tr>
<tr><td>\(A\wedge B\)</td><td>conjunctor (AND), two inputs</td><td>when both inputs are 1</td></tr>
<tr><td>\(A\vee B\)</td><td>disjunctor (OR), two inputs</td><td>when at least one input is 1</td></tr>
</tbody></table></div>
<div class="box tip"><span class="t">In simple terms</span>An inverter is a switch in reverse: when you press it, the light goes off. A conjunctor is two switches in series: the light is on only if both are on. A disjunctor is two switches in parallel: the light is on if at least one is on.</div>

<h2><span class="k">5</span>Building a circuit from a formula</h2>
<p>To draw a circuit from a formula, act step by step:</p>
<ol>
<li>Count the variables and operations. Each operation will be a separate element.</li>
<li>Determine the order: first the negations, then the conjunctions, then the disjunctions.</li>
<li>Place an element for each operation. Feed the output of one element to the input of the next.</li>
</ol>
<div class="box ex"><span class="t">Step-by-step example: \(F=\neg(A\wedge B)\vee C\)</span>
<ol>
<li>Variables: 3; operations: 3: conjunction, negation, disjunction.</li>
<li>Element 1: conjunctor, we feed A and B to the inputs.</li>
<li>Element 2: inverter, we feed the output of the conjunctor to its input.</li>
<li>Element 3: disjunctor, we feed the output of the inverter and C to the inputs.</li>
</ol>
<p>Result: 1 conjunctor, 1 inverter, 1 disjunctor. The output equals 0 only when A=1, B=1, C=0.</p>
</div>

<h2><span class="k">6</span>Formula from a circuit</h2>
<p>You can go the reverse way: given a circuit, write the formula. To do this, go from the inputs to the output and write the expression at the output of each element.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<ol>
<li>Input A goes to an inverter. Its output: \(\neg A\).</li>
<li>The output of the inverter and input B go to a conjunctor: \(\neg A\wedge B\).</li>
<li>The output of the conjunctor and input C go to a disjunctor: \((\neg A\wedge B)\vee C\).</li>
</ol>
<p>Table: ones where C=1, or where A=0 and B=1. For example, the set 010 gives 1, and the set 100 gives 0.</p>
</div>
<div class="box tip"><span class="t">Remember</span>A predicate plus a substitution or a quantifier gives a statement. Identically true means "always", identically false means "never", satisfiable means "sometimes". The number of gates in a circuit equals the number of operations in the formula.</div>

<h2><span class="k">7</span>How not to make mistakes</h2>
<ul>
<li>Do not confuse a predicate with a statement. While the variable is undefined, there is no answer.</li>
<li>Do not draw conclusions about all values from one example. To prove identical truth, a general reason is needed, for example a formula or a property of squares.</li>
<li>Count gates by operations, not by variables.</li>
</ul>
<div class="box def"><span class="t">If you remember only one thing</span>A predicate is a propositional form with variables that becomes a statement after substitution or a quantifier. A predicate can be identically true, identically false, or satisfiable. Formulas are translated into logic circuits: each operation is a separate element, and the number of elements equals the number of operations.</div>
`
},'en');
