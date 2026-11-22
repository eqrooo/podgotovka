addLevels('hm','l11',{
short:String.raw`
<h3>Basics</h3>
<ul>
<li><b>Function</b> \(f:D\to\mathbb R\), \(y=f(x)\): each \(x\) from \(D\) is assigned one \(y\).</li>
<li><b>Natural domain</b>: denominator \(\ne0\), radicand \(\ge0\) under an even root, argument of a logarithm \(>0\).</li>
<li><b>Range</b> \(E(f)=\{f(x):x\in D(f)\}\) is the set of values actually attained.</li>
</ul>

<h3>Graph</h3>
<ul>
<li><b>Vertical line test</b>: a curve is the graph of a function if a vertical line intersects it at most once.</li>
<li><b>Horizontal line test</b>: if a horizontal line intersects the graph at most once, the function is injective. A strictly monotonic function is injective.</li>
</ul>

<h3>Ways to define a function</h3>
<ul>
<li><b>Analytic</b>: formula \(y=f(x)\).</li>
<li><b>Implicit</b>: \(F(x,y)=0\), for example \(x^2+y^2=1\).</li>
<li><b>Parametric</b>: \(x=x(t),\ y=y(t)\), for example \(x=\cos t,\ y=\sin t\).</li>
<li><b>Tabular</b>: a finite set of pairs \((x,y)\).</li>
<li><b>Piecewise</b>: different formulas on different parts of the domain, for example \(|x|\).</li>
<li><b>Recursive</b>: \(0!=1\), \(n!=n\cdot(n-1)!\).</li>
</ul>

<h3>Elementary functions</h3>
<ul>
<li>Polynomials, rational fractions, power functions \(x^a\), exponential functions \(a^x\), logarithms \(\log_a x\), trigonometric and inverse trigonometric functions.</li>
</ul>

<h3>Properties</h3>
<ul>
<li><b>Monotonicity</b>: increasing or decreasing.</li>
<li><b>Boundedness</b>: \(|f(x)|\le M\).</li>
<li><b>Evenness</b>: \(f(-x)=f(x)\); <b>oddness</b>: \(f(-x)=-f(x)\).</li>
<li><b>Periodicity</b>: \(f(x+T)=f(x)\) for some \(T>0\).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>What a function is, in simple words</h2>
<p>A function is a rule. You give it a number, and it returns one number in response. For example, the rule "double it and add one" turns 3 into 7, and 5 into 11. It is written as \(y=f(x)\). The number \(x\) is called the argument, and the number \(y\) is called the value.</p>
<div class="box tip"><span class="t">In simple terms</span>Imagine a coffee machine. You press a button (input), and the machine gives exactly one drink (output). If one button produces two drinks, it is no longer a function. The main rule: one input — one output.</div>
<p>Everything we knew about mappings applies to functions too. A function \(f:D\to\mathbb R\) is a mapping in which both the input and the output are real numbers. One can ask whether it is injective, whether it is surjective, and whether it has an inverse.</p>

<h2><span class="k">2</span>Domain: where the rule works</h2>
<p>The <b>domain</b> \(D(f)\) is all the values of \(x\) for which the formula makes sense. If it is not specified, the <b>natural domain</b> is used: the largest set on which the formula works.</p>
<p>A formula breaks down in three cases. Remember them:</p>
<ol><li>You cannot divide by zero: the denominator of a fraction must not be equal to zero.</li><li>You cannot take an even root of a negative number: the expression under the root must be non-negative.</li><li>A logarithm is defined only for a positive argument.</li></ol>
<div class="box ex"><span class="t">Step-by-step example</span>
Let's find the domain of \(\dfrac{\sqrt{x-1}}{x-3}\).
<ol><li>The root requires \(x-1\ge0\), that is, \(x\ge1\).</li><li>The denominator must not be zero: \(x\ne3\).</li><li>Combining: \(D=[1,3)\cup(3,\infty)\). The point 3 is excluded.</li></ol></div>
<div class="box warn"><span class="t">Common mistake</span>Checking only one condition. In a formula with several parts, all the conditions work at the same time. For example, in \(\dfrac{\sqrt{x-2}}{\ln(x-1)}\) you need to account for the root, the logarithm and the fact that the denominator is not zero. Since \(\ln(x-1)=0\) at \(x=2\), the point 2 is excluded, and \(D=(2,\infty)\).</div>

<h2><span class="k">3</span>Range: what the function actually outputs</h2>
<p>The <b>range</b> \(E(f)\) is all the values of \(y\) that the function actually receives. It may be smaller than what is allowed.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Let's find the range of \(f(x)=\sqrt{9-x^2}\).
<ol><li>Domain: \(9-x^2\ge0\), that is, \(-3\le x\le3\).</li><li>A root is never negative: \(y\ge0\).</li><li>The largest value is at \(x=0\): \(y=\sqrt9=3\).</li><li>So \(E=[0,3]\). The graph is the upper half of a circle of radius 3.</li></ol></div>

<h2><span class="k">4</span>Graph and the vertical line test</h2>
<p>The graph of a function is the set of points \((x,f(x))\). To determine whether a curve is the graph of a function, draw a vertical line. If it intersects the curve more than once, you are not looking at a function.</p>
<div class="box tip"><span class="t">In simple terms</span>A vertical line asks the question: "which values of \(y\) correspond to this \(x\)?" If there are two or more answers, the rule "one input — one output" is broken.</div>
<p>A horizontal line answers a different question: is the function injective? If a horizontal line intersects the graph more than once, different \(x\) give the same \(y\).</p>

<h2><span class="k">5</span>Five ways to define a function</h2>
<p>The same dependence can be written in different ways. There are five main ways.</p>
<ol>
<li><b>Analytic.</b> A formula: \(f(x)=x^2+3x-1\). The most familiar way.</li>
<li><b>Implicit.</b> A relation \(F(x,y)=0\) without expressing \(y\) through \(x\). For example, the circle \(x^2+y^2=1\). As a whole this is not a function of \(x\), because a vertical line intersects it twice. But the circle splits into two functions: \(y=\sqrt{1-x^2}\) and \(y=-\sqrt{1-x^2}\).</li>
<li><b>Parametric.</b> Both coordinates are expressed through a third variable \(t\): \(x=\cos t\), \(y=\sin t\). This pair of formulas describes the same circle, and it does not need to be split into halves.</li>
<li><b>Tabular.</b> A list of pairs: at \(x=0,1,2,3\) the values are \(y=5,8,13,20\). This is how measurements and surveys are recorded. There is no formula between the points.</li>
<li><b>Piecewise.</b> Different formulas on different parts of the domain. For example, \(|x|=x\) for \(x\ge0\) and \(|x|=-x\) for \(x\lt0\).</li>
</ol>
<div class="box ex"><span class="t">Step-by-step example: a piecewise function</span>
\(f(x)=x+1\) for \(x\lt0\); \(f(x)=x^2\) for \(0\le x\lt2\); \(f(x)=5\) for \(x\ge2\). Let's find \(f(-3)\), \(f(1.5)\), \(f(2)\).
<ol><li>\(-3\lt0\), so we take the first formula: \(-3+1=-2\).</li><li>\(0\le1.5\lt2\), so we take the second: \(1.5^2=2.25\).</li><li>\(2\ge2\), so we take the third: \(f(2)=5\).</li></ol></div>
<div class="box tip"><span class="t">Bonus: the recursive way</span>The value at \(n\) is expressed through the previous ones. Factorial: \(0!=1\), \(n!=n\cdot(n-1)!\). Fibonacci: \(F(0)=0\), \(F(1)=1\), \(F(n)=F(n-1)+F(n-2)\). Sequences are often defined this way.</div>

<h2><span class="k">6</span>Elementary functions: the basic building blocks</h2>
<p>Elementary functions are the main building blocks of mathematical analysis. They include:</p>
<ul>
<li>polynomials \(a_nx^n+\dots+a_0\) and fractions \(\dfrac{P(x)}{Q(x)}\) made of polynomials;</li>
<li>power functions \(x^a\) and exponential functions \(a^x\);</li>
<li>logarithms \(\log_a x\);</li>
<li>trigonometric \(\sin x,\cos x,\tan x\) and their inverses, for example \(\arcsin x\), \(\arctan x\).</li>
</ul>
<p>Limits and continuity, which will be covered in the following topics, will be checked on these functions.</p>

<h2><span class="k">7</span>Properties of functions</h2>
<p><b>Monotonicity.</b> A function is increasing if a larger \(x\) corresponds to a larger \(f(x)\). It is decreasing if the opposite holds. A strictly monotonic function is always injective.</p>
<p><b>Boundedness.</b> There exists a number \(M\) such that \(|f(x)|\le M\) for all \(x\) from the domain.</p>
<p><b>Evenness and oddness.</b> A function is even if \(f(-x)=f(x)\): its graph is symmetric about the \(y\)-axis. It is odd if \(f(-x)=-f(x)\): the graph is symmetric about the origin. In both cases, the domain must be symmetric about zero.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Let's determine the type of the function \(x^4-3x^2+1\), and then \(x^3-2x\).
<ol><li>For \(x^4-3x^2+1\), substitute \(-x\): \((-x)^4-3(-x)^2+1=x^4-3x^2+1\). We get the same expression, so the function is even.</li><li>For \(x^3-2x\), substitute \(-x\): \((-x)^3-2(-x)=-x^3+2x=-(x^3-2x)\). We get the negative of the original function, so it is odd.</li></ol></div>
<div class="box warn"><span class="t">Common mistake</span>Assuming a function is "almost even" without checking. For \(x^2+x\) we get \(f(-x)=x^2-x\). This is equal neither to \(f(x)\) nor to \(-f(x)\), so the function is neither even nor odd.</div>
<p><b>Periodicity.</b> A function is periodic if there exists \(T>0\) with \(f(x+T)=f(x)\) for all \(x\). For example, \(\sin x\) repeats every \(2\pi\).</p>

<h2><span class="k">8</span>What to remember</h2>
<div class="box def"><span class="t">If you remember only one thing</span>A function is a rule of "one input — one output". Before working with a formula, find the natural domain: the denominator is not zero, the expression under the root is not negative, the argument of a logarithm is positive. A vertical line checks whether what you are looking at is a function, and a horizontal line checks whether it is injective.</div>
`
},'en');
