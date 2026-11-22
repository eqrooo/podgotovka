addLevels('hm','l10',{
short:String.raw`
<h3>The principle of induction</h3>
<ul>
<li>Goal: prove \(P(n)\) for all \(n\ge n_0\).</li>
<li><b>Base</b>: check \(P(n_0)\).</li>
<li><b>Step</b>: from the assumption \(P(k)\), derive \(P(k+1)\).</li>
</ul>

<h3>Step templates</h3>
<ul>
<li><b>Sums</b>: the sum up to \(k+1\) equals the sum up to \(k\) plus the last term; the first part is replaced using the assumption.</li>
<li><b>Divisibility</b>: from \(7^k-1=6m\) it follows that \(7^{k+1}-1=7(6m+1)-1=6(7m+1)\). Write the assumption as "the expression equals the divisor times an integer".</li>
<li><b>Inequalities</b>: besides the assumption, another step is needed, for example \(2k\ge k+1\).</li>
</ul>

<h3>Typical errors</h3>
<ul>
<li>No base case.</li>
<li>The step uses \(P(k+1)\) (circular reasoning).</li>
<li>Proving \(P(k+1)\Rightarrow P(k)\) instead of \(P(k)\Rightarrow P(k+1)\).</li>
</ul>

<h3>Strong induction</h3>
<ul>
<li>All cases \(P(n_0),\dots,P(k)\) are assumed, not only \(P(k)\).</li>
<li>Example: prime factorization. For \(n=ab\), both factors are less than \(n\).</li>
</ul>

<h3>Basis of induction</h3>
<ul>
<li><b>Well-ordering principle</b>: every nonempty subset of \(\mathbb N\) has a least element.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>How to prove something for all natural numbers at once</h2>
<p>Imagine you need to prove that some formula holds for any natural number \(n\). It is impossible to check all the numbers one by one, because there are infinitely many of them. The method of mathematical induction helps here.</p>
<div class="box tip"><span class="t">In plain words</span>Imagine a row of dominoes. For all the tiles to fall, two conditions are needed. First: push the first tile. Second: each fallen tile must push the next one. If both conditions are met, all of them fall, even the ones you did not count.</div>
<p>Induction works the same way. It consists of two steps:</p>
<ol><li><b>Base:</b> we check that the statement is true for the first number \(n_0\) (usually 0 or 1).</li><li><b>Step:</b> we assume that the statement is true for some \(k\). This is the <b>induction hypothesis</b>. We prove that then it is also true for \(k+1\).</li></ol>
<p>If both steps are fulfilled, the statement is true for all \(n\ge n_0\).</p>
<div class="box warn"><span class="t">Common mistake</span>Thinking that the step proves something by itself. Without the base the chain never starts. The step only says "if it is true for \(k\), then it is also true for \(k+1\)".</div>

<h2><span class="k">2</span>First example: the sum of the first \(n\) numbers</h2>
<p>Let us prove the formula \(1+2+\dots+n=\dfrac{n(n+1)}{2}\).</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<ol><li>Base, \(n=1\): on the left 1, on the right \(\dfrac{1\cdot2}{2}=1\). They match.</li><li>Assumption: suppose that for some \(k\) we have \(1+\dots+k=\dfrac{k(k+1)}{2}\).</li><li>Consider the sum up to \(k+1\): \(1+\dots+k+(k+1)\). Replace the first part using the assumption: \(\dfrac{k(k+1)}{2}+(k+1)\).</li><li>Factor out the common factor \((k+1)\): \((k+1)\left(\dfrac k2+1\right)=(k+1)\cdot\dfrac{k+2}{2}\).</li><li>We get \(\dfrac{(k+1)(k+2)}{2}\). This is exactly the formula for \(n=k+1\).</li></ol>
<p>Both steps are done, so the formula holds for all \(n\ge1\).</p></div>
<div class="box tip"><span class="t">Template for sums</span>Write the sum up to \(k+1\) as "the sum up to \(k\)" plus the last term. Replace the first part using the assumption and bring the result to the form of the formula with \(k+1\).</div>

<h2><span class="k">3</span>Second example: divisibility</h2>
<p>Let us prove that \(7^n-1\) is divisible by 6 for any \(n\ge1\). Divisible means that the result of the division is an integer.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<ol><li>Base: for \(n=1\) we get \(7-1=6=6\cdot1\). Divisible.</li><li>Assumption: suppose \(7^k-1=6m\), where \(m\) is an integer. Hence \(7^k=6m+1\).</li><li>Consider \(7^{k+1}-1=7\cdot7^k-1\). Substitute: \(7(6m+1)-1\).</li><li>Expand the brackets: \(42m+7-1=42m+6\).</li><li>Factor out 6: \(42m+6=6(7m+1)\). The factor \(7m+1\) is an integer, so the result is divisible by 6.</li></ol></div>
<div class="box tip"><span class="t">Template for divisibility</span>Write the assumption as "the expression equals the divisor times an integer". Express the power from it and substitute it into the expression for \(k+1\). Then factor out the divisor.</div>

<h2><span class="k">4</span>Third example: an inequality</h2>
<p>Let us prove \(2^n>n\) for \(n\ge1\).</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<ol><li>Base: \(2^1=2>1\). True.</li><li>Assumption: suppose \(2^k>k\).</li><li>Multiply both sides by 2: \(2^{k+1}>2k\).</li><li>Since \(k\ge1\), we have \(2k\ge k+1\). For example, when \(k=3\) we get \(6\ge4\).</li><li>Combine the chain: \(2^{k+1}>2k\ge k+1\). Therefore \(2^{k+1}>k+1\).</li></ol></div>
<p>In inequalities, there is almost always one more small step needed besides the assumption. Here that step was \(2k\ge k+1\).</p>
<div class="box warn"><span class="t">Common mistake</span>Moving from \(2k\) to \(k+1\) "obviously". Every such "obviously" must be proved.</div>

<h2><span class="k">5</span>Traps that everyone falls into</h2>
<div class="box warn"><span class="t">Error 1: no base</span>Without a base the chain does not start. The step by itself proves nothing.</div>
<div class="box warn"><span class="t">Error 2: circular reasoning</span>In the step you cannot use \(P(k+1)\), that is, what you are trying to prove. You can only use \(P(k)\).</div>
<div class="box warn"><span class="t">Error 3: the direction is reversed</span>You need to prove \(P(k)\Rightarrow P(k+1)\). Proving \(P(k+1)\Rightarrow P(k)\) gives nothing.</div>
<div class="box warn"><span class="t">Error 4: a false step with a correct base</span>The classic example is the horse paradox, which "proves" that all horses are the same colour. The base is correct, but the transition from \(k=1\) to two horses does not work: the two groups of one horse each do not overlap, so there is nothing to carry the colour over from. The step must be checked just as carefully as the base.</div>

<h2><span class="k">6</span>Strong induction</h2>
<p>Ordinary induction assumes only \(P(k)\). Strong induction assumes <b>all</b> the previous cases: \(P(n_0),P(n_0+1),\dots,P(k)\). This version is needed when the transition to \(k+1\) relies not on the neighbouring number, but on a much smaller one.</p>
<div class="box ex"><span class="t">Step-by-step example: prime factorization</span>
We prove that every integer \(n\ge2\) is a product of primes.
<ol><li>Base: the number 2 is prime, that is, it is a product of itself.</li><li>Assumption: all \(m\) with \(2\le m\lt n\) can be factored into primes.</li><li>If \(n\) is prime, we are done.</li><li>If \(n\) is composite, then \(n=ab\), where \(2\le a\lt n\) and \(2\le b\lt n\).</li><li>By the assumption, \(a\) and \(b\) can be factored, so \(n=ab\) can also be factored.</li></ol>
<p>Strong induction is needed here: the numbers \(a\) and \(b\) may be much smaller than \(n-1\).</p></div>

<h2><span class="k">7</span>Why induction works at all</h2>
<p>There is the well-ordering principle: every nonempty subset of natural numbers has a least element. Induction rests on it. Suppose the statement is false for at least one number. Then among such numbers there is a smallest one, \(n^*\). For \(n^*-1\) the statement is true by minimality, and the step gives it for \(n^*\). This leads to a contradiction.</p>
<div class="box tip"><span class="t">In plain words</span>Natural numbers go in order, starting from the smallest. Integers or the interval \((0,1)\) have no smallest element, so this trick does not work there.</div>
<div class="box def"><span class="t">If you remember only one thing</span>Induction is a base plus a step, and then the statement is true for all \(n\ge n_0\). In the step, use only the assumption \(P(k)\), and do not forget to check the base. In strong induction, all the previous cases are assumed.</div>
`},'en');
