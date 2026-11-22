addLevels('hm','l08',{
short:String.raw`
<h3>Sets</h3>
<ul>
<li><b>Subset</b> \(A\subseteq B\); the empty set \(\varnothing\).</li>
<li><b>Union</b> \(A\cup B\), <b>intersection</b> \(A\cap B\), <b>difference</b> \(A\setminus B\), <b>complement</b> \(\bar A\).</li>
<li>De Morgan's laws: \(\overline{A\cup B}=\bar A\cap\bar B\), \(\overline{A\cap B}=\bar A\cup\bar B\).</li>
<li><b>Cartesian product</b>: \(A\times B=\{(a,b):a\in A,\ b\in B\}\), \(|A\times B|=|A|\cdot|B|\).</li>
</ul>

<h3>Mappings</h3>
<ul>
<li><b>Mapping</b> \(f:A\to B\): each \(a\in A\) is assigned exactly one \(f(a)\in B\).</li>
<li><b>Range</b> \(f(A)\subseteq B\) — the values actually reached; it may be smaller than the codomain.</li>
</ul>

<h3>Types of mappings</h3>
<ul>
<li><b>Injection</b>: \(f(a_1)=f(a_2)\Rightarrow a_1=a_2\) (no merging).</li>
<li><b>Surjection</b>: the image coincides with \(B\); every \(b\) has a preimage.</li>
<li><b>Bijection</b>: injection and surjection at the same time. Only it has an inverse \(f^{-1}\).</li>
</ul>

<h3>Cardinality and composition</h3>
<ul>
<li An injection \(A\to B\) means \(|A|\le|B|\). If \(|A|>|B|\), there is no injection (pigeonhole principle).</li>
<li>\((g\circ f)(a)=g(f(a))\): first \(f\), then \(g\).</li>
<li For bijections \((g\circ f)^{-1}=f^{-1}\circ g^{-1}\).</li>
</ul>

<h3>How to check</h3>
<ul>
<li Solve \(f(a)=b\) for \(a\): if a solution exists for any \(b\), the mapping is surjective.</li>
<li If \(f(a_1)=f(a_2)\) only when \(a_1=a_2\), the mapping is injective.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>A set is a collection of objects</h2>
<p>A set is a collection of objects united by a common feature. The objects are called <b>elements</b>. The notation \(a\in A\) is read "\(a\) belongs to \(A\)". The notation \(a\notin A\) is read "does not belong".</p>
<div class="box tip"><span class="t">In simple terms</span>Imagine a box with items. The box is a set, and the items inside are its elements. A box with nothing in it is the empty set \(\varnothing\).</div>
<p>If all elements of one set are also elements of another, the first is called a <b>subset</b>: \(A\subseteq B\). The empty set is a subset of any set.</p>

<h2><span class="k">2</span>Operations on sets</h2>
<ul>
<li><b>Union</b> \(A\cup B\): all elements that are in at least one of the sets.</li>
<li><b>Intersection</b> \(A\cap B\): only the elements that are in both.</li>
<li><b>Difference</b> \(A\setminus B\): the elements of \(A\) that are not in \(B\).</li>
<li><b>Complement</b> \(\bar A\): everything that is in the "universe" \(U\) but not in \(A\).</li>
</ul>
<div class="box ex"><span class="t">Step-by-step example</span>
\(A=\{1,2,3,4\}\), \(B=\{3,4,5,6\}\).
<ol><li>Union: collect everything from both sets, counting repeats once: \(\{1,2,3,4,5,6\}\).</li><li>Intersection: find the numbers that are in both: \(\{3,4\}\).</li><li>Difference \(A\setminus B\): take the numbers from \(A\) and remove those that are in \(B\): \(\{1,2\}\).</li></ol></div>
<p>There are two important rules, called De Morgan's laws:</p>
\[\overline{A\cup B}=\bar A\cap\bar B,\qquad \overline{A\cap B}=\bar A\cup\bar B.\]
<div class="box warn"><span class="t">Common mistake</span>Forgetting that when you negate, a union turns into an intersection, and an intersection turns into a union. The sign changes along with the operation.</div>

<h2><span class="k">3</span>Cartesian product: all pairs</h2>
<p>The Cartesian product \(A\times B\) is all pairs \((a,b)\), where \(a\) is from \(A\) and \(b\) is from \(B\). The order in a pair matters: the pair \((1,x)\) is not equal to the pair \((x,1)\). The number of pairs equals \(|A|\cdot|B|\).</p>
<div class="box ex"><span class="t">Step-by-step example</span>
\(A=\{1,2\}\), \(B=\{x,y,z\}\).
<ol><li>Take element 1 and pair it with each of \(x,y,z\): \((1,x)\), \((1,y)\), \((1,z)\).</li><li>Take element 2 and do the same: \((2,x)\), \((2,y)\), \((2,z)\).</li><li>Count: \(2\cdot3=6\) pairs.</li></ol></div>

<h2><span class="k">4</span>Mapping: a rule with one answer</h2>
<p>A mapping (function) \(f:A\to B\) is a rule that assigns to each element of \(A\) <b>exactly one</b> element of \(B\). The set \(A\) is called the <b>domain</b>, and the set \(B\) is called the <b>codomain</b>.</p>
<div class="box tip"><span class="t">In simple terms</span>Imagine a drink vending machine. You press a button (element \(A\)), and exactly one cup comes out (element \(B\)). If one button gives two cups or none, the machine is working incorrectly.</div>
<p>Do not mix up two concepts. The <b>range</b> (image) is what was actually obtained. The <b>codomain</b> is what is allowed. The image always lies inside the codomain, but it may be smaller. For example, \(f(x)=2x\) from integers to integers gives only even numbers.</p>

<h2><span class="k">5</span>Injection: no merging</h2>
<p>A mapping is injective if different inputs give different outputs. It is more convenient to check it like this: if \(f(a_1)=f(a_2)\), then necessarily \(a_1=a_2\).</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us check \(f(x)=3x-2\).
<ol><li>Assume \(f(a)=f(b)\): \(3a-2=3b-2\).</li><li>Add 2 to both sides: \(3a=3b\).</li><li>Divide by 3: \(a=b\).</li><li>So different inputs give different outputs. This is an injection.</li></ol>
<p>For \(f(x)=x^2\) this is not so: \(f(-2)=f(2)=4\), although \(-2\ne2\). So \(x^2\) is not injective.</p></div>
<div class="box tip"><span class="t">In simple terms</span>For functions on a line there is a quick trick: draw a horizontal line. If it crosses the graph more than once, the function is not injective.</div>

<h2><span class="k">6</span>Surjection: nothing is missed</h2>
<p>A mapping is surjective if every element of \(B\) is obtained from at least one element of \(A\). In other words, the image coincides with the codomain.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us check \(f(x)=3x-2\) on \(\mathbb R\).
<ol><li>Take any number \(b\).</li><li>Solve the equation \(3a-2=b\) for \(a\): \(a=\dfrac{b+2}{3}\).</li><li>This number is in \(\mathbb R\) for any \(b\). So every \(b\) is obtained, and the mapping is surjective.</li></ol>
<p>For \(f(x)=x^2\) on \(\mathbb R\) with codomain \(\mathbb R\), this does not work: for \(b=-1\) there is no \(a\) with \(a^2=-1\).</p></div>
<div class="box warn"><span class="t">Common mistake</span>Considering a function surjective because it "looks like it covers everything". A full check is needed: for every \(b\) from the codomain, there must be a preimage.</div>

<h2><span class="k">7</span>Bijection and the inverse function</h2>
<p>A mapping that is both injective and surjective is called a <b>bijection</b>. It is an ideal one-to-one correspondence: each element of \(A\) corresponds to exactly one element of \(B\), and vice versa.</p>
<p>Only for a bijection does the inverse mapping \(f^{-1}\) exist. It returns each result to the original element. Let us build it for \(f(x)=3x-2\):</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<ol><li>Write \(y=3x-2\).</li><li>Express \(x\): add 2, get \(3x=y+2\), divide by 3: \(x=\dfrac{y+2}{3}\).</li><li>Rename the variables: \(f^{-1}(y)=\dfrac{y+2}{3}\).</li><li>Check: \(f(f^{-1}(y))=3\cdot\dfrac{y+2}{3}-2=y\). Everything matches.</li></ol></div>
<div class="box tip"><span class="t">The role of the domain</span>The function \(x^2\) from \(\mathbb R\) to \([0,\infty)\) is surjective, but not injective. If the domain is restricted to \([0,\infty)\), we get a bijection, and it has an inverse \(\sqrt y\). Changing the domain is sometimes enough for an inverse function to exist.</div>

<h2><span class="k">8</span>Cardinality and the pigeonhole principle</h2>
<p>For finite sets, simple rules apply. If there is an injection \(A\to B\), then \(|A|\le|B|\). If there is a surjection \(A\to B\), then \(|A|\ge|B|\). If there is a bijection, then \(|A|=|B|\).</p>
<div class="box def"><span class="t">Pigeonhole principle</span>If there are more items than boxes, at least one box will contain two items. It is also called the pigeonhole principle. For example, among 13 students at least two were born in the same month, because there are only 12 months.</div>

<h2><span class="k">9</span>Composition: first one function, then another</h2>
<p>The composition \((g\circ f)(a)=g(f(a))\) means: first apply \(f\), then \(g\). The order matters.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
\(f(x)=3x-2\), \(g(x)=x^2\). Let us find the values at \(x=2\).
<ol><li>\((g\circ f)(2)\): first \(f(2)=3\cdot2-2=4\), then \(g(4)=16\).</li><li>\((f\circ g)(2)\): first \(g(2)=4\), then \(f(4)=3\cdot4-2=10\).</li><li>The results 16 and 10 are different. So the composition is not commutative.</li></ol></div>
<p>For bijections, the inverse of a composition is found as follows: \((g\circ f)^{-1}=f^{-1}\circ g^{-1}\). The order is reversed, as in \((AB)^{-1}=B^{-1}A^{-1}\).</p>

<h2><span class="k">10</span>How to answer on the exam</h2>
<p>For each question, ask yourself one phrase. Injection: are there any merges? Surjection: is anything missed? Bijection: are both previous conditions met? Composition: in what order are the functions applied?</p>
<div class="box def"><span class="t">If you remember only one thing</span>Injection means "no merging", surjection means "nothing is missed", bijection means "both at once", and only a bijection has an inverse function. If \(|A|\gt|B|\), there is no injection from \(A\) to \(B\).</div>
`
},'en');
