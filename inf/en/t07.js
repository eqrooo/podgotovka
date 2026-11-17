addEn('inf','t07',{
title:'Statements, Logical Operations and Truth Tables',
summary:'Statement, logical connectives (negation, conjunction, disjunction, implication, equivalence, exclusive OR), building truth tables, operation precedence, laws of Boolean algebra and equivalent transformations.',
body:String.raw`
<h2><span class="k">1</span>Statement</h2>
<div class="box def"><span class="t">Definition</span><b>Statement</b> (Proposition) — a declarative sentence that is either true or false, but not both at the same time. It must have a definite truth value; it cannot be ambiguous or evaluative.</div>
<ul>
<li>Statements: "Zero multiplied by any number equals zero" (T); "1+1=2" (T); "2+2=5" (F); "All birds can fly" (F).</li>
<li>Not statements: "Come here" (command); "Who are you?" (question); "I am lying" (paradox); "You are in Almaty" (true at some times and false at others — this is a <i>predicate</i>, see the next topic); "This statement is false" (neither true nor false).</li>
</ul>
<p>Truth is denoted by 1 (T, True), falsehood by 0 (F, False). Simple statements are denoted by the letters A, B, C; using connectives, they form <b>compound statements</b> (formulas).</p>

<h2><span class="k">2</span>Logical connectives (operations)</h2>
<div class="tw"><table><thead><tr><th>A</th><th>B</th><th>¬A (NOT)</th><th>A∧B (AND)</th><th>A∨B (OR)</th><th>A→B (if…then)</th><th>A↔B (equivalent)</th><th>A⊕B (exclusive OR)</th></tr></thead><tbody>
<tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
</tbody></table></div>
<ul>
<li><b>Conjunction</b> \(A\wedge B\) is true only if both are true.</li>
<li><b>Disjunction</b> \(A\vee B\) is false only if both are false.</li>
<li><b>Implication</b> \(A\to B\) is false only when A=1, B=0 ("from truth follows falsehood").</li>
<li><b>Equivalence</b> \(A\leftrightarrow B\) is true when the values coincide.</li>
<li><b>Exclusive OR</b> \(A\oplus B\) is true when the values differ.</li>
</ul>
<p><b>Precedence:</b> first negation (¬), then conjunction (∧), disjunction (∨), implication (→), equivalence (↔); parentheses change the order.</p>

<h2><span class="k">3</span>How to build a truth table</h2>
<ol>
<li>Determine the number of variables \(n\). There will be \(2^n\) rows (two variables — 4, three — 8, four — 16).</li>
<li>Fill the columns of the variables with all combinations of values (as binary counting 000, 001, …, 111).</li>
<li>Determine the order of operations by precedence and add a column for each operation (subformulas).</li>
<li>Compute the columns from left to right; the last column is the value of the formula.</li>
</ol>
<div class="box ex"><span class="t">Example: \((A\vee B)\wedge\neg C\)</span>3 variables → 8 rows. The value is 1 only when C=0 and at least one of A, B equals 1: the sets (A,B,C) = 010, 100, 110. The other five rows give 0. Number of operations: ∨, ¬, ∧ — three; in a circuit: 1 OR gate, 1 inverter, 1 AND gate.</div>
<p>A formula is called a <b>tautology</b> (identically true) if all rows are 1; a <b>contradiction</b> if all rows are 0; <b>satisfiable</b> if there is at least one 1.</p>

<h2><span class="k">4</span>Laws of Boolean algebra</h2>
<div class="tw"><table><thead><tr><th>Law</th><th>Notation</th></tr></thead><tbody>
<tr><td>Commutativity</td><td>\(A\wedge B=B\wedge A\);  \(A\vee B=B\vee A\)</td></tr>
<tr><td>Associativity</td><td>\((A\wedge B)\wedge C=A\wedge(B\wedge C)\); the same for ∨</td></tr>
<tr><td>Distributivity</td><td>\(A\wedge(B\vee C)=(A\wedge B)\vee(A\wedge C)\);  \(A\vee(B\wedge C)=(A\vee B)\wedge(A\vee C)\)</td></tr>
<tr><td>Idempotence</td><td>\(A\wedge A=A\);  \(A\vee A=A\)</td></tr>
<tr><td>Double negation</td><td>\(\neg\neg A=A\)</td></tr>
<tr><td>De Morgan's laws</td><td>\(\neg(A\wedge B)=\neg A\vee\neg B\);  \(\neg(A\vee B)=\neg A\wedge\neg B\)</td></tr>
<tr><td>Absorption</td><td>\(A\wedge(A\vee B)=A\);  \(A\vee(A\wedge B)=A\)</td></tr>
<tr><td>Gluing (combining)</td><td>\((A\wedge B)\vee(A\wedge\neg B)=A\)</td></tr>
<tr><td>Constants</td><td>\(A\vee1=1\); \(A\wedge0=0\); \(A\vee0=A\); \(A\wedge1=A\); \(A\vee\neg A=1\); \(A\wedge\neg A=0\)</td></tr>
<tr><td>Expressing implication</td><td>\(A\to B=\neg A\vee B\);  \(A\leftrightarrow B=(A\to B)\wedge(B\to A)\)</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">Simplification</span>\((A\vee B)\wedge(A\vee\neg B)=A\vee(B\wedge\neg B)=A\vee0=A\) (distributivity and the law of contradiction).</div>
<div class="box warn"><span class="t">Common mistake</span>Distributing a negation over a bracket without changing the operation: \(\neg(A\wedge B)\ne\neg A\wedge\neg B\). By De Morgan's law, conjunction turns into disjunction. Another mistake is thinking that \(A\to B\) is false when A=0.</div>
<div class="box tip"><span class="t">Remember</span>The number of rows is \(2^n\). Implication is false in only one case: 1→0. Equivalence of formulas is checked by matching the columns of truth tables or by transformations using the laws.</div>
`,
practice:[
{q:String.raw`Build the truth table for \(F=(A\vee B)\wedge\neg C\). How many rows and operations does it have?`,a:String.raw`3 variables → \(2^3=8\) rows; 3 operations (∨, ¬, ∧). Precedence: ¬C, then A∨B, then the conjunction. Values of F for (A,B,C): 000→0; 001→0; 010→1; 011→0; 100→1; 101→0; 110→1; 111→0. The ones: 010, 100, 110.`},
{q:String.raw`Build the table for \(F=\neg A\wedge B\vee A\wedge\neg B\) and name the operation.`,a:String.raw`Precedence: ¬A and ¬B, then the two conjunctions, then the disjunction. Values (A,B): 00→0 (¬A∧B=0, A∧¬B=0); 01→1 (¬A∧B=1); 10→1 (A∧¬B=1); 11→0 (both terms 0). This is exclusive OR \(A\oplus B\): 1 when the values differ. There are 5 operations (2 negations, 2 conjunctions, 1 disjunction).`},
{q:String.raw`Prove from the table that \(\neg(A\wedge B)=\neg A\vee\neg B\).`,a:String.raw`Rows (A,B): 00: \(\neg(0)=1\); \(\neg A\vee\neg B=1\vee1=1\). 01: \(\neg(0)=1\); \(1\vee0=1\). 10: \(\neg(0)=1\); \(0\vee1=1\). 11: \(\neg(1)=0\); \(0\vee0=0\). The columns match: 1,1,1,0 — the formulas are equivalent.`},
{q:String.raw`Verify that \(A\to B=\neg A\vee B\) and find for which values \(A\to B\) is false.`,a:String.raw`Rows (A,B): 00: \(A\to B=1\), \(\neg A\vee B=1\vee0=1\). 01: 1 and 1. 10: 0 and \(0\vee0=0\). 11: 1 and \(0\vee1=1\). The columns 1,1,0,1 match. It is false only when A=1, B=0.`},
{q:String.raw`Determine whether \((A\to B)\vee(B\to A)\) is a tautology.`,a:String.raw`Rows (A,B): 00: 1∨1=1; 01: \((0\to1)=1\), so 1; 10: \((1\to0)=0\), \((0\to1)=1\), so 1; 11: 1∨1=1. All rows are 1 — it is a tautology.`},
{q:String.raw`Simplify: \(F=(A\wedge B)\vee(A\wedge\neg B)\vee(\neg A\wedge B)\).`,a:String.raw`The first two terms combine: \((A\wedge B)\vee(A\wedge\neg B)=A\). What remains is \(F=A\vee(\neg A\wedge B)\). Distributivity: \((A\vee\neg A)\wedge(A\vee B)=1\wedge(A\vee B)=A\vee B\). Answer: \(F=A\vee B\). Check: F=0 only when A=B=0.`},
{q:String.raw`Build the table for \(F=\neg(A\wedge B)\vee C\). For which set of values is F=0?`,a:String.raw`8 rows. \(F=0\) only if \(\neg(A\wedge B)=0\) and C=0, that is, A=1, B=1, C=0. The other 7 sets give 1: 000→1, 001→1, 010→1, 011→1, 100→1, 101→1, 110→0, 111→1.`},
{q:String.raw`Compute the value of \(F=(A\to B)\wedge(B\to C)\) when A=1, B=1, C=0. Then verify that \(((A\to B)\wedge(B\to C))\to(A\to C)\) is a tautology.`,a:String.raw`When A=1, B=1, C=0: \(A\to B=1\), \(B\to C=1\to0=0\), so \(F=1\wedge0=0\). Tautology: the left part \((A\to B)\wedge(B\to C)\) is true only if neither implication is 1→0; then A=1 implies B=1, and B=1 implies C=1, so \(A\to C\) is also true. If the left part is false, the whole implication is true. All 8 rows give 1.`}
],
quiz:[
{q:String.raw`Which of the following is a statement?`,options:[String.raw`What time is it?`,String.raw`Close the door.`,String.raw`2 + 2 = 5`,String.raw`This sentence is false.`],solution:String.raw`"2+2=5" is a false statement. A question and a command have no truth value, and "this sentence is false" is a paradox.`},
{q:String.raw`The implication A→B is false when`,options:[String.raw`A=0, B=1`,String.raw`A=1, B=0`,String.raw`A=0, B=0`,String.raw`A=1, B=1`],solution:String.raw`Only when the premise is true and the consequence is false.`},
{q:String.raw`How many rows are in the truth table of a formula with 4 variables?`,options:[String.raw`8`,String.raw`4`,String.raw`16`,String.raw`12`],solution:String.raw`\(2^4=16\).`},
{q:String.raw`The value of \((1\vee0)\wedge\neg1\) is`,options:[String.raw`0`,String.raw`1`,String.raw`depends on the notation`,String.raw`undefined`],solution:String.raw`\(1\vee0=1\), \(\neg1=0\), \(1\wedge0=0\).`},
{q:String.raw`By De Morgan's law, \(\neg(A\vee B)\) equals`,options:[String.raw`\(\neg A\vee\neg B\)`,String.raw`\(\neg A\wedge\neg B\)`,String.raw`\(A\wedge B\)`,String.raw`\(\neg A\wedge B\)`],solution:String.raw`The negation of a disjunction is the conjunction of the negations. Option 1 is the formula for the negation of a conjunction.`},
{q:String.raw`Simplifying \(A\wedge(A\vee B)\) gives`,options:[String.raw`B`,String.raw`A\(\vee\)B`,String.raw`A\(\wedge\)B`,String.raw`A`],solution:String.raw`Absorption law: \(A\wedge(A\vee B)=A\).`},
{q:String.raw`\(A\oplus B\) is true when`,options:[String.raw`A and B are equal`,String.raw`A and B are different`,String.raw`both are 1`,String.raw`both are 0`],solution:String.raw`Exclusive OR is true when the values differ (unlike equivalence).`},
{q:String.raw`Which formula is a tautology?`,options:[String.raw`\(A\wedge\neg A\)`,String.raw`\(A\vee\neg A\)`,String.raw`\(A\to\neg A\)`,String.raw`\(A\oplus A\)`],solution:String.raw`\(A\vee\neg A=1\) always (law of the excluded middle). \(A\wedge\neg A\) and \(A\oplus A\) are always 0, and \(A\to\neg A\) is false when A=1.`},
{q:String.raw`The order of operations in a formula without parentheses is:`,options:[String.raw`∨, ∧, ¬`,String.raw`∧, ¬, ∨`,String.raw`¬, ∧, ∨`,String.raw`→, ∨, ∧`],solution:String.raw`First negation, then conjunction, then disjunction (then → and ↔).`},
{q:String.raw`The formula \(A\to B\) is equivalent to`,options:[String.raw`\(A\vee\neg B\)`,String.raw`\(\neg A\wedge B\)`,String.raw`\(\neg A\vee B\)`,String.raw`\(A\wedge B\)`],solution:String.raw`\(A\to B=\neg A\vee B\) (check by table: 1,1,0,1).`}
]
});
