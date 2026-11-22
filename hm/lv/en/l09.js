addLevels('hm','l09',{
short:String.raw`
<h3>Number sets</h3>
<ul>
<li><b>Hierarchy:</b> \(\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb A\subset\mathbb R\subset\mathbb C\).</li>
<li><b>\(\mathbb N\):</b> natural numbers \(\{0,1,2,\dots\}\), with 0 counted as natural.</li>
<li><b>\(\mathbb Z\):</b> integers \(\{\dots,-1,0,1,\dots\}\).</li>
<li><b>\(\mathbb Q\):</b> rational numbers \(p/q\) (\(q\ne0\)).</li>
<li><b>\(\mathbb A\):</b> algebraic numbers (roots of polynomials with integer coefficients).</li>
<li><b>\(\mathbb R\):</b> real numbers (rational and irrational).</li>
<li><b>\(\mathbb C\):</b> complex numbers \(a+bi\).</li>
</ul>

<h3>Peano axioms for \(\mathbb N\)</h3>
<ul>
<li>0 is a natural number.</li>
<li>Every \(n\) has a unique successor \(S(n)=n+1\).</li>
<li>0 is not the successor of any number.</li>
<li>Injectivity: \(S(m)=S(n)\Rightarrow m=n\).</li>
<li><b>Induction axiom:</b> if \(K\subseteq\mathbb N\) contains 0 and the step \(S(n)\), then \(K=\mathbb N\).</li>
</ul>

<h3>Field, order and completeness</h3>
<ul>
<li><b>Field \(\mathbb R\):</b> closure, associativity, commutativity, neutral elements 0 and 1, inverse elements, distributivity.</li>
<li><b>Order:</b> trichotomy, transitivity, compatibility with the operations.</li>
<li><b>Completeness axiom:</b> every nonempty subset of \(\mathbb R\) that is bounded above has a supremum. \(\mathbb Q\) has no completeness.</li>
<li><b>Supremum \(\sup\):</b> the least upper bound (it may not belong to the set).</li>
<li><b>Maximum \(\max\):</b> the greatest element (it must belong to the set).</li>
</ul>

<h3>Cardinality of sets</h3>
<ul>
<li><b>Cardinality:</b> \(|A|=|B|\) if there is a bijection between them.</li>
<li><b>Countable sets:</b> \(\mathbb N, \mathbb Z, \mathbb Q\) have cardinality \(\aleph_0\) (they are bijective with \(\mathbb N\)).</li>
<li><b>Uncountable sets:</b> \(\mathbb R\) has cardinality the continuum \(\mathfrak c>\aleph_0\) (by Cantor's proof).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>How numbers are built: from natural to complex</h2>
<p>In mathematics, numbers are grouped into sets that sit inside one another. The simplest are the natural numbers used for counting objects. But they are not enough for solving equations, so new number sets appear.</p>
\[\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb A\subset\mathbb R\subset\mathbb C\]
<p>Each new extension fixes a problem of the previous one:</p>
<ul>
<li>\(\mathbb N=\{0,1,2,\dots\}\) — natural numbers. In this course, zero counts as natural.</li>
<li>\(\mathbb Z\) — integers (negative numbers were added to solve \(x+5=3\)).</li>
<li>\(\mathbb Q\) — rational numbers or fractions (added to solve \(2x=3\)).</li>
<li>\(\mathbb A\) — algebraic numbers (roots of equations with integer coefficients, for example \(\sqrt2\)).</li>
<li>\(\mathbb R\) — real numbers (all rational and irrational numbers together).</li>
<li>\(\mathbb C\) — complex numbers \(a+bi\) (added so that we can take roots of negative numbers, such as \(x^2=-1\)).</li>
</ul>
<div class="box tip"><span class="t">In simple terms</span>Imagine you could at first only count apples on a table (\(\mathbb N\), from zero upward). Then you owed a friend money (\(\mathbb Z\)). Then you had to cut an apple into pieces (\(\mathbb Q\)). Then geometry required measuring the diagonal of a square with side 1, and \(\mathbb R\) was needed. Finally, higher algebra needed the imaginary world \(\mathbb C\). Each step patches the holes left by the previous one.</div>

<h2><span class="k">2</span>How natural numbers are built: the Peano axioms</h2>
<p>So that mathematics does not rest on intuition, the natural numbers are defined strictly by five Peano rules:</p>
<ol>
<li>Zero is a natural number.</li>
<li>Every number has a unique next element (its successor), which can be written as \(n+1\).</li>
<li>Zero does not follow any number (there is nothing before it).</li>
<li>If two numbers have the same successor, then the numbers themselves are equal.</li>
<li><b>Induction axiom:</b> if a property holds for zero, and whenever it holds for \(n\) it also holds for \(n+1\), then the property holds for all natural numbers.</li>
</ol>
<p>The fifth axiom is the foundation of the method of mathematical induction, which is used to prove formulas for all natural \(n\).</p>

<h2><span class="k">3</span>Rules of arithmetic and order: the field \(\mathbb R\)</h2>
<p>Real numbers form what is called a field. This means the usual rules of addition and multiplication hold: changing the order of the addends does not change the sum, brackets can be expanded (distributivity), every number has an opposite, and every nonzero number has an inverse.</p>
<p>Interestingly, matrices do not form a field, because in matrix multiplication the order matters (multiplication is not commutative), and not every matrix has an inverse. The set of integers \(\mathbb Z\) is also not a field, because the integer 2 has no multiplicative inverse among integers (the fraction \(1/2\) is not an integer).</p>
<p>Besides arithmetic, \(\mathbb R\) has an order: numbers can be compared with each other while following the laws of transitivity and compatibility with the operations. However, \(\mathbb Q\) also has an order, so the order alone does not distinguish real numbers from rational ones.</p>

<h2><span class="k">4</span>Upper bounds, supremum and maximum</h2>
<p>When we consider a set of numbers, it is often important to know its bounds.</p>
<ul>
<li><b>Upper bound (majorant)</b> — a number \(M\) that is greater than or equal to every number in our set.</li>
<li><b>Supremum (\(\sup S\))</b> — the smallest of all possible upper bounds.</li>
<li><b>Infimum (\(\inf S\))</b> — the largest of all possible lower bounds.</li>
</ul>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Take the interval \(S=(0,1)\) — all numbers strictly between 0 and 1.</p>
<ol>
<li>Upper bounds for this set include the numbers \(1, 1.5, 2, 10\) and so on, because all elements are less than or equal to them.</li>
<li>Among all upper bounds, the smallest is the number 1. So the supremum is 1.</li>
<li>Does the number 1 itself lie inside the interval \((0,1)\)? No, because the brackets are round and the number 1 is not included.</li>
<li>Since 1 does not belong to the set, the set has no maximum. Any number we try to name as the maximum that is less than 1 (for example \(0.999\)) can be made even closer to 1 (\(0.9999\)), so there is no greatest element inside the set.</li>
</ol>
<p>Answer: the supremum is 1, and there is no maximum.</p></div>
<div class="box warn"><span class="t">Common mistake</span>Do not confuse supremum and maximum. The maximum must lie inside the set itself. The supremum may or may not lie in the set (it can be "outside", like a boundary).</div>

<h2><span class="k">5</span>The main difference between \(\mathbb R\) and \(\mathbb Q\): the completeness axiom</h2>
<p>What is the fundamental difference between fractions \(\mathbb Q\) and real numbers \(\mathbb R\)? The answer lies in the completeness axiom.</p>
<div class="box def"><span class="t">Completeness axiom</span>Every nonempty set of real numbers that is bounded above necessarily has a supremum, which is also a real number.</div>
<p>Rational numbers \(\mathbb Q\) do not satisfy this axiom. Consider the set of all rational numbers whose square is less than two (\(\{q\in\mathbb Q:q^2\lt2\}\)). It is bounded above, but in the world of rational numbers it has no supremum, because the supremum is the irrational number \(\sqrt2\). In \(\mathbb Q\) there is a gap at this point. The completeness of the real numbers fills all such gaps.</p>

<h2><span class="k">6</span>Proof that \(\sqrt2\) is irrational</h2>
<p>We will prove that \(\sqrt2\) cannot be written as a common fraction. This is a classic proof by contradiction.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Task: prove that \(\sqrt2\) is irrational.</p>
<ol>
<li>Assume the opposite: let \(\sqrt2 = p/q\), where the fraction is in lowest terms, meaning \(p\) and \(q\) have no common divisors except 1.</li>
<li>Square both sides: \(2 = p^2/q^2\), so \(p^2 = 2q^2\).</li>
<li>This means \(p^2\) is even (since it is divisible by 2). But if the square of a number is even, then the number \(p\) itself must be even.</li>
<li>Since \(p\) is even, we can write \(p = 2k\). Substitute into the equation: \((2k)^2 = 2q^2\), that is, \(4k^2 = 2q^2\), so \(q^2 = 2k^2\).</li>
<li>So \(q^2\) is also even, and therefore \(q\) itself is even.</li>
<li>But we originally assumed the fraction \(p/q\) was in lowest terms, and now both \(p\) and \(q\) turned out to be even and divisible by 2. This is a contradiction.</li>
</ol>
<p>Answer: our assumption was false, so \(\sqrt2\) is irrational.</p></div>

<h2><span class="k">7</span>The size of infinity: cardinality and Hilbert's hotel</h2>
<p>How do we compare the number of elements in infinite sets? We cannot count them one by one, but we can check whether a one-to-one correspondence (a bijection) can be set up between them.</p>
<div class="box def"><span class="t">Cardinality of sets</span>Two sets have the same cardinality (\(|A|=|B|\)) if a bijection can be built between them — a perfect pairing with no gaps and no repeats.</div>
<p>By Dedekind's definition, an infinite set is one that can be matched with its own smaller part. For example, the natural numbers can be matched with the even numbers using the rule \(f(n)=2n\).</p>
<div class="box tip"><span class="t">In simple terms</span>Imagine the legendary infinite Hilbert hotel, in which all rooms from 0 to infinity are occupied. A new guest arrives. The manager asks each guest in room \(n\) to move to room \(n+1\). Room 0 becomes free for the new guest, and nobody is left out in the street! What if infinitely many new guests arrive? Then each guest in room \(n\) is moved to room \(2n\), and all odd-numbered rooms are magically freed for the infinite crowd of arrivals.</div>

<h2><span class="k">8</span>Countable sets: why the integers and rationals are no more numerous than the naturals</h2>
<p>A set is called countable if its elements can be written in an infinite list in order: first, second, third, and so on, so that no element is skipped and none is repeated.</p>
<p>It seems that there are twice as many integers \(\mathbb Z\) as natural numbers (since there are also negative ones). But this is an illusion! They can be numbered with a clever rule: alternate zero, negative and positive numbers (\(0, -1, 1, -2, 2, -3, 3 \dots\)). This proves that the integers are countable.</p>
<p>The rational numbers \(\mathbb Q\) seem even denser — between any two fractions there are infinitely many other fractions. But Cantor proved a brilliant idea: write all the fractions in an infinite table and traverse it in a zigzag, skipping repeated equal fractions. This zigzag proves that there are exactly as many fractions as natural numbers. The cardinality of countable sets is denoted by the symbol \(\aleph_0\) (aleph-null).</p>

<h2><span class="k">9</span>Why there are more real numbers: Cantor's diagonal method</h2>
<p>But the real numbers \(\mathbb R\) (or the interval from 0 to 1) cannot be counted. Cantor proved this with his famous diagonal method.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Task: prove that the interval \((0,1)\), and therefore the whole line \(\mathbb R\), is uncountable.</p>
<ol>
<li>Assume the opposite: suppose all the numbers in the interval \((0,1)\) can be written in one long infinite list: the first number, the second, the third, and so on.</li>
<li>Write them as decimal fractions with infinite tails of digits, one below another.</li>
<li>Build a new number \(d\) by taking the digits along the diagonal of the original list and changing each one to a different digit (for example, replace any digit other than 5 with 5, and replace 5 with 4).</li>
<li>The resulting number \(d\) certainly lies in the interval \((0,1)\), but it is guaranteed to differ from the first number in the first digit, from the second number in the second digit, from the third in the third digit, and so on.</li>
<li>This means our number \(d\) did not appear anywhere in the list, although we assumed we had written down all the numbers. Contradiction.</li>
</ol>
<p>Answer: the set of real numbers is uncountable.</p></div>

<h2><span class="k">10</span>Cardinal numbers and the continuum hypothesis</h2>
<p>The cardinality of the natural numbers, \(\aleph_0\), is the smallest of all infinities. The cardinality of the real numbers (the continuum) is denoted by the letter \(\mathfrak c\). Cantor proved that the continuum is strictly greater than aleph-null (\(\mathfrak c > \aleph_0\)).</p>
<p>A natural question arises: is there an intermediate infinity between aleph-null and the continuum? Is there a set that is larger than the natural numbers but smaller than the real numbers? This statement is called the continuum hypothesis. The famous mathematicians Kurt Gödel and Paul Cohen proved a remarkable fact: in standard set theory, this hypothesis can be neither proved nor disproved, it is independent of the other axioms.</p>

<div class="box def"><span class="t">If you remember only one thing</span>Number sets are built by extending from the natural numbers to the complex numbers. The completeness axiom distinguishes the real numbers \(\mathbb R\) from the rational numbers \(\mathbb Q\), guaranteeing that suprema exist. Countable sets (\(\mathbb N, \mathbb Z, \mathbb Q\)) have cardinality aleph-null, while the real numbers are uncountable and form the continuum of strictly greater cardinality.</div>
`,
},'en');
