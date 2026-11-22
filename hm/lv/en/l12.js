addLevels('hm','l12',{
short:String.raw`
<h3>Sequences</h3>
<ul>
<li>A function \(a:\mathbb N\to\mathbb R\), denoted \(\{a_n\}\).</li>
<li>Ways to define it: explicitly (\(a_n=\dfrac1n\)) or recursively (\(a_1=2,\ a_{n+1}=\dfrac{a_n}{2}+1\)).</li>
<li><b>Bounded</b>: \(|a_n|\le M\). <b>Monotone</b>: increasing or decreasing.</li>
<li>A bounded monotone sequence converges.</li>
</ul>

<h3>Limit (the ε–N definition)</h3>
<ul>
<li>\(\lim\limits_{n\to\infty}a_n=L\) if \(\forall\varepsilon>0\ \exists N:\ n>N\Rightarrow|a_n-L|\lt\varepsilon\).</li>
<li>Template: simplify \(|a_n-L|\lt\varepsilon\) to the form \(n>\dots\). That expression is \(N\).</li>
<li>Example: \(\lim\dfrac1n=0\), \(N=\dfrac1\varepsilon\) works.</li>
</ul>

<h3>Divergence</h3>
<ul>
<li><b>To infinity</b>: \(\lim a_n=\infty\), there is no finite limit.</li>
<li><b>Oscillation</b>: \((-1)^n\), there is no limit at all.</li>
</ul>

<h3>Rules and standard limits</h3>
<ul>
<li>\(\lim(a_n\pm b_n)=A\pm B\), \(\lim(a_nb_n)=AB\), \(\lim\dfrac{a_n}{b_n}=\dfrac AB\ (B\ne0)\). Only for finite limits.</li>
<li>\(\dfrac1{n^p}\to0\) for \(p>0\); \(r^n\to0\) for \(|r|\lt1\); \(\sqrt[n]{n}\to1\); \(\left(1+\dfrac1n\right)^n\to e\).</li>
</ul>

<h3>Indeterminate forms and the squeeze theorem</h3>
<ul>
<li>\(\dfrac00,\ \dfrac\infty\infty,\ \infty-\infty,\ 0\cdot\infty,\ 1^\infty,\ 0^0,\ \infty^0\).</li>
<li>Fraction with polynomials: divide the numerator and denominator by the highest power \(n\).</li>
<li>If \(a_n\le b_n\le c_n\) and \(\lim a_n=\lim c_n=L\), then \(\lim b_n=L\).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>A sequence is a list of numbers in order</h2>
<p>A numerical sequence is a list of numbers that have positions: first, second, third, and so on. Formally, it is a function that assigns to each natural \(n\) a number \(a_n\). For example, \(a_n=\dfrac1n\) gives \(1,\dfrac12,\dfrac13,\dots\).</p>
<p>A list can be defined in two ways:</p>
<ul>
<li><b>Explicitly</b>: by a formula for \(a_n\). For example, \(a_n=(-1)^n\) gives \(-1,1,-1,\dots\).</li>
<li><b>Recursively</b>: each next term is expressed through the previous one. Example: \(a_1=2\), \(a_{n+1}=\dfrac{a_n}{2}+1\). This gives \(2,2,2,\dots\).</li>
</ul>

<h2><span class="k">2</span>Boundedness and monotonicity</h2>
<p>A sequence is <b>bounded</b> if all its terms stay within some number \(M\): \(|a_n|\le M\). It is <b>increasing</b> if each next term is not less than the previous one, and <b>decreasing</b> if it is not greater.</p>
<div class="box tip"><span class="t">In plain terms</span>Imagine a staircase that only goes up but hits a ceiling. You keep climbing (monotonicity), but you cannot go above the ceiling (boundedness). Such a path must reach something.</div>
<div class="box def"><span class="t">Important theorem</span>A bounded monotone sequence always converges. We will need it later when we prove that limits exist.</div>

<h2><span class="k">3</span>The intuition of a limit</h2>
<p>A limit is a number that the terms of a sequence approach as \(n\to\infty\). For \(a_n=\dfrac1n\) we get \(1,\ 0.5,\ 0.33,\ 0.25,\ 0.2,\dots\). The numbers become ever closer to zero. But the word "close" is vague, so we need a strict definition.</p>

<h2><span class="k">4</span>The strict definition: ε–N</h2>
<p>Imagine a game. Your opponent names a small number \(\varepsilon\), the tolerance. You must name a number \(N\) such that starting from it, all terms fall into the band from \(L-\varepsilon\) to \(L+\varepsilon\). If this works for any \(\varepsilon\), the limit is \(L\).</p>
<div class="box def"><span class="t">Definition</span>\(\lim\limits_{n\to\infty}a_n=L\) if for any \(\varepsilon>0\) there exists \(N\) such that for \(n>N\) we have \(|a_n-L|\lt\varepsilon\).</div>
<div class="box ex"><span class="t">Step-by-step example: let us prove \(\lim\dfrac1n=0\)</span>
<ol><li>Let \(\varepsilon>0\) be given.</li><li>We need \(\left|\dfrac1n-0\right|\lt\varepsilon\), that is, \(\dfrac1n\lt\varepsilon\).</li><li>Invert: \(n>\dfrac1\varepsilon\). So we can take \(N=\dfrac1\varepsilon\).</li><li>Check: for \(\varepsilon=0.01\) we take \(N=100\). For \(n=101\) we get \(\dfrac1{101}\approx0.0099\lt0.01\).</li></ol></div>
<div class="box tip"><span class="t">ε–N template</span>Write \(|a_n-L|\lt\varepsilon\) and simplify it to the form \(n>\) something that depends on \(\varepsilon\). That "something" is \(N\).</div>

<h2><span class="k">5</span>Divergent sequences</h2>
<p>Not every sequence has a limit. There are two kinds of divergence:</p>
<ul>
<li><b>Going to infinity.</b> \(a_n=n\) grows without bound. We write \(\lim a_n=\infty\), but this describes growth, not a finite number.</li>
<li><b>Oscillation.</b> \(a_n=(-1)^n\) jumps between \(-1\) and \(1\) and approaches nothing. There is no limit at all.</li>
</ul>
<div class="box warn"><span class="t">Common mistake</span>Thinking that since a sequence goes to infinity, it has a limit. The answer "\(\infty\)" means there is no finite limit.</div>

<h2><span class="k">6</span>Arithmetic of limits</h2>
<p>If \(\lim a_n=A\) and \(\lim b_n=B\), and both numbers are finite, then:</p>
\[\lim(a_n\pm b_n)=A\pm B,\quad \lim(a_nb_n)=AB,\quad \lim\frac{a_n}{b_n}=\frac AB\ (B\ne0),\quad \lim(k\,a_n)=kA.\]
<div class="box warn"><span class="t">Condition</span>These rules work only if both limits exist and are finite. If a limit is infinite or does not exist, first transform the expression.</div>

<h2><span class="k">7</span>Standard limits</h2>
<p>Some limits are worth simply memorizing:</p>
<ul>
<li>\(\dfrac1{n^p}\to0\) for \(p>0\);</li>
<li>\(r^n\to0\) for \(|r|\lt1\);</li>
<li>\(r^n\to\infty\) for \(r>1\);</li>
<li>\(\sqrt[n]{n}\to1\);</li>
<li>\(\left(1+\dfrac1n\right)^n\to e\approx2.718\).</li>
</ul>

<h2><span class="k">8</span>Fractions with polynomials: divide by the highest power</h2>
<p>If the numerator and denominator contain powers of \(n\), you cannot "substitute infinity". Instead, divide every term by the highest power.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us find \(\lim\dfrac{3n^2+2n-1}{5n^2-4n+3}\).
<ol><li>The highest power is \(n^2\). Divide the numerator and denominator by \(n^2\).</li><li>We get \(\dfrac{3+\frac2n-\frac1{n^2}}{5-\frac4n+\frac3{n^2}}\).</li><li>Fractions like \(\frac1n\) and \(\frac1{n^2}\) tend to zero.</li><li>What remains is \(\dfrac35\).</li></ol></div>
<div class="box tip"><span class="t">Degree rule</span>For a fraction \(\dfrac{P(n)}{Q(n)}\): if the degree of the numerator is smaller, the limit is 0. If the degrees are equal, the limit is the ratio of the leading coefficients. If the degree of the numerator is larger, the limit is \(\pm\infty\).</div>

<h2><span class="k">9</span>Indeterminate forms: when the answer is not immediately visible</h2>
<p>There are seven expressions that cannot be evaluated directly: \(\dfrac00,\ \dfrac\infty\infty,\ \infty-\infty,\ 0\cdot\infty,\ 1^\infty,\ 0^0,\ \infty^0\). They are called indeterminate forms. The value can turn out to be anything, infinite, or may not exist at all.</p>
<p>Therefore the expression is first transformed: factored, divided by the highest power, or multiplied by the conjugate.</p>
<div class="box ex"><span class="t">Step-by-step example: \(\infty-\infty\)</span>
Let us find \(\lim(\sqrt{n+1}-\sqrt n)\).
<ol><li>We cannot substitute directly: we get \(\infty-\infty\).</li><li>Multiply and divide by the conjugate \(\sqrt{n+1}+\sqrt n\).</li><li>In the numerator we get \((n+1)-n=1\).</li><li>We get \(\dfrac{1}{\sqrt{n+1}+\sqrt n}\). The denominator tends to infinity, so the limit is 0.</li></ol></div>
<div class="box warn"><span class="t">Common mistake</span>Writing "\(\infty-\infty=0\)" as a rule. This is an indeterminate form. For example, \((n+5)-n\to5\), while \(n^2-n\to\infty\). The result depends on the specific expression.</div>

<h2><span class="k">10</span>The squeeze theorem</h2>
<div class="box def"><span class="t">Theorem</span>If \(a_n\le b_n\le c_n\) for all \(n\), and \(\lim a_n=\lim c_n=L\), then \(\lim b_n=L\).</div>
<p>The meaning is simple: if a sequence is squeezed between two others that approach the same number, it also approaches that number. Like a ball squeezed between two walls, which cannot escape to the side.</p>
<div class="box ex"><span class="t">Step-by-step example: \(\lim\dfrac{\sin n}{n}\)</span>
<ol><li>We know that \(-1\le\sin n\le1\) for any \(n\).</li><li>Divide by \(n\gt0\): \(-\dfrac1n\le\dfrac{\sin n}{n}\le\dfrac1n\).</li><li>The left and right sides tend to zero.</li><li>Therefore \(\lim\dfrac{\sin n}{n}=0\).</li></ol></div>

<h2><span class="k">11</span>What to remember</h2>
<div class="box def"><span class="t">If you remember only one thing</span>A limit is a number that the terms of a sequence approach permanently, with any tolerance \(\varepsilon\). The arithmetic of limits works only with finite values. For indeterminate forms, first transform the expression, and only then compute.</div>
`
},'en');
