addEn('inf','t08',{
title:'Predicates and Logic Circuits',
summary:'A predicate as a propositional form, n-place predicates, identically true, identically false and satisfiable predicates; building logic circuits from formulas and formulas from circuits.',
body:String.raw`
<h2><span class="k">1</span>Predicate</h2>
<div class="box def"><span class="t">Definition</span><b>Predicate</b> — a sentence with variables that becomes a statement when specific values are substituted (a propositional form). In other words: a logical function of subject variables that describes a property of an object or a relation between objects.</div>
<p>A predicate of one variable is <b>one-place</b>; a predicate of \(n\) variables is <b>\(n\)-place</b> (two-place, three-place…). Any statement is a <b>zero-place</b> predicate.</p>
<div class="box ex"><span class="t">Examples</span>
<ul>
<li>\(A(x)\): "\(|x|=x\)" — a one-place predicate on \(\mathbb{R}\). For \(x=5\) it is true, for \(x=-3\) it is false.</li>
<li>"River \(x\) flows into Lake Baikal" — a one-place predicate on the set of river names. "Barguzin" gives true, "Dnieper" gives false.</li>
<li>"\(x^2+y^2\le9\)" — a two-place predicate on \(\mathbb{R}\times\mathbb{R}\). The pair (2, 2): \(4+4=8\le9\) — true; the pair (2, 3): \(4+9=13>9\) — false.</li>
</ul></div>

<h2><span class="k">2</span>Classification of predicates</h2>
<p>Let a predicate be defined on a set \(A\) (or on \(A_1\times\dots\times A_n\)).</p>
<div class="tw"><table><thead><tr><th>Type</th><th>Condition</th><th>Example</th></tr></thead><tbody>
<tr><td>Identically true</td><td>true for any substitution</td><td>\(x^2-1=(x-1)(x+1)\) on \(\mathbb{R}\); \(\sin^2x+\cos^2x=1\)</td></tr>
<tr><td>Identically false</td><td>false for any substitution</td><td>\(x^2+1&lt;0\) on \(\mathbb{R}\); \(x^2+y^2&lt;0\)</td></tr>
<tr><td>Satisfiable (refutable)</td><td>there is at least one set of values that turns it into a true (false) statement</td><td>"city \(x\) stands on the Volga" (Saratov — yes, Prague — no)</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">How to prove</span>For \(\sin^2x+\cos^2x=1\): on the unit circle, the point \((\cos x,\sin x)\) satisfies \(X^2+Y^2=1\), so the equality holds for any \(x\). For \(x^2+y^2<0\): a sum of squares cannot be negative, so the predicate is false for all \(x,y\).</div>
<p>Compound predicates are built from predicates using the connectives \(\neg,\wedge,\vee,\to,\leftrightarrow\). A predicate can be turned into a statement by substituting values or by attaching quantifiers: "for all" (\(\forall\)) and "there exists" (\(\exists\)). Example: \(\forall x\in\mathbb{R}\;(x^2\ge0)\) — a true statement.</p>

<h2><span class="k">3</span>Logic circuits</h2>
<p>Formulas of Boolean algebra can be represented by circuits made of functional elements (gates): an <b>inverter</b> (NOT), a <b>conjunctor</b> (AND), a <b>disjunctor</b> (OR). From them, computing circuits are built — the basis of digital technology.</p>
<div class="tw"><table><thead><tr><th>Operation</th><th>Element</th><th>Output signal</th></tr></thead><tbody>
<tr><td>\(\neg A\)</td><td>inverter (1 input)</td><td>1, if A=0</td></tr>
<tr><td>\(A\wedge B\)</td><td>conjunctor (AND, 2 inputs)</td><td>1, if both inputs are 1</td></tr>
<tr><td>\(A\vee B\)</td><td>disjunctor (OR, 2 inputs)</td><td>1, if at least one input is 1</td></tr>
</tbody></table></div>
<h3>Building a circuit from a formula</h3>
<ol>
<li>Count the variables and operations.</li>
<li>Determine the order: first inversions, then conjunctions, then disjunctions (as the precedence of operations).</li>
<li>Place an element for each operation; feed the output of one element to the input of the next.</li>
</ol>
<div class="box ex"><span class="t">Example</span>\(F=\neg A\wedge B\vee A\wedge\neg B\): 2 variables, 5 operations. Circuit: 2 inverters (for A and B), 2 conjunctors, 1 disjunctor. Table (A,B): 00→0, 01→1, 10→1, 11→0 — exclusive OR.</div>
<h3>Formula from a circuit</h3>
<p>Go from the inputs to the output: write the expression at the output of each element and substitute it into the next one. Then build the truth table.</p>
<div class="box ex"><span class="t">Example</span>Inputs A and B go to an OR; the result together with the inverted C goes to an AND. The formula is \(F=(A\vee B)\wedge\neg C\), with 3 elements (OR, NOT, AND); \(F=1\) for the sets 010, 100, 110.</div>
<div class="box warn"><span class="t">Common mistake</span>Confusing a predicate with a statement: "\(x>3\)" is not a statement until a value is substituted. It is also wrong to think that a satisfiable predicate must be identically true.</div>
<div class="box tip"><span class="t">Remember</span>Predicate + substitution (or quantifier) = statement. Identically true means "always", identically false means "never", satisfiable means "at least once". The number of gates in a circuit equals the number of operations in the formula.</div>
`,
practice:[
{q:String.raw`Determine the type of predicate on the set \(\mathbb{R}\): (a) \(x^2-4=(x-2)(x+2)\); (b) \(x^2+1<0\); (c) \(x^2=9\); (d) \(|x|=x\).`,a:String.raw`(a) identically true (difference of squares formula). (b) identically false: \(x^2\ge0\), so \(x^2+1\ge1\). (c) satisfiable, not identically true: true for \(x=3\) and \(x=-3\), false for \(x=2\). (d) satisfiable: true for \(x\ge0\), false for \(x=-1\).`},
{q:String.raw`Two-place predicate \(P(x,y)\): \(x^2+y^2\le4\). Find the values for the pairs (1,1), (2,0), (2,1), (0,−2).`,a:String.raw`(1,1): \(1+1=2\le4\) — true. (2,0): \(4+0=4\le4\) — true. (2,1): \(4+1=5>4\) — false. (0,−2): \(0+4=4\le4\) — true. The predicate is satisfiable, not identically true.`},
{q:String.raw`On the set \(\{1,2,\dots,10\}\), the predicate \(P(x)\) is defined as "\(x\) is even and \(x>4\)". How many elements satisfy it?`,a:String.raw`Even numbers greater than 4 in the set: 6, 8, 10. There are 3 elements in total. The predicate is satisfiable; it is neither identically false nor identically true.`},
{q:String.raw`Draw a circuit for \(F=\neg(A\wedge B)\vee C\): how many elements of each type does it have? For which sets is \(F=0\)?`,a:String.raw`3 variables, 3 operations: conjunction A∧B, inversion of the result, disjunction with C. Elements: 1 conjunctor, 1 inverter, 1 disjunctor. \(F=0\) when \(A\wedge B=1\) and \(C=0\), that is, only for A=1, B=1, C=0.`},
{q:String.raw`Write the formula for the circuit: input A goes to an inverter; the output of the inverter and B go to a conjunctor; the output of the conjunctor and C go to a disjunctor. Build the table.`,a:String.raw`\(F=(\neg A\wedge B)\vee C\). Values (A,B,C): 000→0; 001→1; 010→1 (¬0∧1=1); 011→1; 100→0 (¬1∧B=0); 101→1; 110→0; 111→1. The ones are where C=1 or (A=0 and B=1). There are 3 elements (NOT, AND, OR).`},
{q:String.raw`Build the formula and table for a "multiplexer" circuit: if A=1, the output equals \(\neg B\), otherwise C. Write \(F=A\wedge\neg B\vee\neg A\wedge C\) and build the table.`,a:String.raw`Three variables, 8 rows. Values (A,B,C): 000→0; 001→1; 010→0; 011→1; 100→1; 101→1; 110→0; 111→0. The ones: 001, 011, 100, 101. Elements: inverters for B and A (2), conjunctors (2), a disjunctor (1) — 5 operations in total.`},
{q:String.raw`The predicate \(Q(x,y)\): "\(x+y=y+x\)" on \(\mathbb{R}^2\). What type is it? And "\(x+1=x\)"?`,a:String.raw`\(x+y=y+x\) is commutativity, true for all pairs, so the predicate is identically true. \(x+1=x\) leads to \(1=0\), which is impossible for any \(x\) — identically false.`}
],
quiz:[
{q:String.raw`A predicate of one variable is called`,options:[String.raw`two-place`,String.raw`zero-place`,String.raw`one-place`,String.raw`identical`],solution:String.raw`One-place. A zero-place predicate is a statement (it has no variables).`},
{q:String.raw`"\(x^2+y^2\ge0\)" on \(\mathbb{R}\times\mathbb{R}\) is`,options:[String.raw`identically false`,String.raw`satisfiable, but not identically true`,String.raw`zero-place`,String.raw`identically true`],solution:String.raw`The sum of squares is non-negative for any x, y — the predicate is identically true.`},
{q:String.raw`The predicate "\(x>5\)" on the set of natural numbers is`,options:[String.raw`satisfiable, but not identically true`,String.raw`identically true`,String.raw`identically false`,String.raw`a statement`],solution:String.raw`It is true for x=6 and false for x=1. It is not a statement until x is substituted.`},
{q:String.raw`The two-place predicate \(x^2+y^2\le9\) for the pair (2, 3) is`,options:[String.raw`true`,String.raw`undefined`,String.raw`false, since 13>9`,String.raw`false, since 5>9`],solution:String.raw`\(4+9=13>9\) — false. The option "5" is an addition error.`},
{q:String.raw`How many logic elements are needed for \(F=\neg A\vee(B\wedge C)\)?`,options:[String.raw`2`,String.raw`4`,String.raw`3`,String.raw`5`],solution:String.raw`Three operations: inversion, conjunction, disjunction — 3 elements.`},
{q:String.raw`What turns a predicate into a statement?`,options:[String.raw`substitution of values or a quantifier`,String.raw`changing its name`,String.raw`adding brackets`,String.raw`multiplying by 1`],solution:String.raw`Substituting specific values or binding variables with the quantifiers \(\forall\), \(\exists\).`},
{q:String.raw`The predicate \(x^2-1=(x-1)(x+1)\) on \(\mathbb{R}\) is`,options:[String.raw`identically false`,String.raw`satisfiable, but not identically true`,String.raw`identically true`,String.raw`meaningless`],solution:String.raw`This is the difference of squares formula — it holds for all real x.`},
{q:String.raw`The predicate "\(|x|=x\)" on \(\mathbb{R}\) is`,options:[String.raw`identically false`,String.raw`satisfiable, but not identically true`,String.raw`identically true`,String.raw`zero-place`],solution:String.raw`True for x≥0, false for x<0 (for example, x=−3).`}
]
});
