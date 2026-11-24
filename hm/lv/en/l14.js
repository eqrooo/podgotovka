addLevels('hm','l14',{
short:String.raw`
<h3>Three conditions for continuity</h3>
<ul>
<li>\(f\) is continuous at the point \(x_0\) if all three conditions hold:</li>
<li><b>\(f(x_0)\)</b> is defined;</li>
<li><b>\(\lim\limits_{x\to x_0}f(x)\)</b> exists and is finite;</li>
<li><b>\(\lim\limits_{x\to x_0}f(x)=f(x_0)\)</b>.</li>
</ul>
<p>If at least one condition fails, there is a discontinuity at \(x_0\).</p>
<h3>Other forms of the definition</h3>
<ul>
<li><b>ε–δ:</b> for every \(\varepsilon>0\) there is \(\delta>0\) such that \(|x-x_0|\lt\delta \Rightarrow |f(x)-f(x_0)|\lt\varepsilon\). The point \(x=x_0\) is included.</li>
<li><b>One-sided limits:</b> \(\lim\limits_{x\to x_0^-}f(x)=\lim\limits_{x\to x_0^+}f(x)=f(x_0)\).</li>
</ul>
<h3>Continuity on an interval</h3>
<ul>
<li><b>Open interval \((a,b)\):</b> continuous at every interior point.</li>
<li><b>Closed interval \([a,b]\):</b> additionally one-sided continuity at the endpoints: \(\lim\limits_{x\to a^+}f(x)=f(a)\), \(\lim\limits_{x\to b^-}f(x)=f(b)\).</li>
</ul>
<h3>Elementary functions and operations</h3>
<ul>
<li>Polynomials, rational, trigonometric, exponential functions and logarithms are continuous on their domain.</li>
<li>Sums, differences, products, quotients (when \(g(x_0)\ne0\)) and compositions of continuous functions are continuous. This is why direct substitution works.</li>
</ul>
<h3>Classification of discontinuities</h3>
<ul>
<li><b>First kind:</b> both one-sided limits are finite. Removable: the limits are equal; jump: the limits are not equal.</li>
<li><b>Second kind:</b> at least one one-sided limit is not finite. Infinite: the limit equals \(\pm\infty\); oscillating: the limit does not exist at all.</li>
</ul>
<h3>Examples</h3>
<ul>
<li>\(\dfrac{x^2-1}{x-1}\) at \(x=1\): the limit is 2, the discontinuity is removable.</li>
<li>\(\dfrac{|x|}{x}\) at \(x=0\): limits \(-1\) and \(1\), a jump of size 2.</li>
<li>\(\dfrac1x\) at \(x=0\): infinite discontinuity.</li>
<li>\(\sin\dfrac1x\) at \(x=0\): oscillating discontinuity.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>What "continuous" means</h2>
<p>Imagine drawing a graph with a pencil and never lifting the pencil off the paper. If the line runs as one unbroken piece, the function is continuous. If at some point you have to lift the pencil and put it down somewhere else, the function breaks at that point.</p>
<p>In Lecture 13 we asked what number the function approaches. Now the question is different: <b>does that number match</b> the value of the function at the point? If it does, the pencil never lifts. If not, the function "jumps" or "breaks" at that point.</p>
<div class="box tip"><span class="t">On your fingers</span>Picture a road. If the asphalt is smooth with no holes, it is easy to drive on. If there is a pothole or a drop in one spot, the road is interrupted. Continuity of a function means there are no such potholes in its graph.</div>

<h2><span class="k">2</span>The three conditions for continuity</h2>
<p>For a function to be continuous at the point \(x_0\), <b>all three</b> conditions must hold at once:</p>
<ol>
<li>The function is defined at \(x_0\), meaning the value \(f(x_0)\) exists.</li>
<li>The limit \(\lim\limits_{x\to x_0}f(x)\) exists and is a finite number.</li>
<li>This limit equals the value of the function: \(\lim\limits_{x\to x_0}f(x)=f(x_0)\).</li>
</ol>
<p>Why all three. The first condition says there is a value at the point. The second says the function does approach something as we come close to the point. The third says the value at the point and the thing the function approaches are the same. If at least one of these conditions fails, there is no continuity.</p>
<div class="box def"><span class="t">Important</span>All three conditions are equally important. Breaking just one is enough to lose continuity.</div>

<h2><span class="k">3</span>Checking with two limits</h2>
<p>Often it is easier to look at two limits instead of one: from the left and from the right of the point. From the left we approach \(x_0\) using values smaller than \(x_0\). From the right we use values larger than \(x_0\). We write the left limit as \(x\to x_0^-\) and the right limit as \(x\to x_0^+\).</p>
<p>The practical routine is simple. Work out the left limit, the right limit and the value \(f(x_0)\). If all three numbers match, the function is continuous at the point. For example, if the left limit is 2, the right limit is 2, and \(f(x_0)=2\), then everything is fine.</p>
<div class="box tip"><span class="t">Why two limits</span>Sometimes the function heads to one number from the left and to a different number from the right. Then there is no single limit, and looking from one side is not enough. That is why we check both sides.</div>

<h2><span class="k">4</span>Continuity on an interval</h2>
<p>A function can be continuous not just at one point but over a whole interval. There are two cases here too.</p>
<ul>
<li><b>Open interval \((a,b)\).</b> The endpoints are not included. It is enough for the function to be continuous at every point between \(a\) and \(b\).</li>
<li><b>Closed interval \([a,b]\).</b> The endpoints are included. At the very edge a two-sided limit makes no sense, because there are no points beyond the edge. So at the endpoints we only require one-sided continuity:
\[\lim_{x\to a^+}f(x)=f(a),\qquad\lim_{x\to b^-}f(x)=f(b).\]</li>
</ul>

<h2><span class="k">5</span>Which functions are continuous "by themselves"</h2>
<p>Good news: most familiar functions are continuous without extra checking. These include polynomials, rational functions, trigonometric functions, exponential functions and logarithms. All of them are continuous everywhere they are defined.</p>
<div class="box ex"><span class="t">Example</span>The function \(f(x)=\dfrac1{x-3}\) is continuous for all \(x\) except \(x=3\). That is exactly where the denominator becomes zero and the function is undefined. There are no other discontinuities.</div>

<h2><span class="k">6</span>Why substitution works</h2>
<p>If the functions \(f\) and \(g\) are continuous at the point \(x_0\), then so are their sum, difference, product, quotient (when \(g(x_0)\ne0\)) and composition \(f\circ g\).</p>
<div class="box tip"><span class="t">Connection with limits</span>In Lectures 12 and 13 we often found limits by simply substituting the number. Now it is clear why this is allowed: elementary functions are continuous, so the limit equals the value at the point.</div>

<h2><span class="k">7</span>What a point of discontinuity is</h2>
<p>A point \(x_0\) is called a point of discontinuity if the function is not continuous there. This means at least one of the three conditions from section 2 fails. Discontinuities come in different kinds, so they are divided into two classes.</p>
<div class="box def"><span class="t">First kind</span>Both one-sided limits exist and are finite. There are two types here: a removable discontinuity (the limits are equal, but the value at the point is missing or different) and a jump (the limits are not equal).</div>
<div class="box def"><span class="t">Second kind</span>At least one one-sided limit does not exist as a finite number. There are two types here: an infinite discontinuity (the limit equals \(\pm\infty\)) and an oscillating discontinuity (there is no limit at all).</div>

<h2><span class="k">8</span>Removable discontinuity</h2>
<div class="box ex"><span class="t">Example step by step: \(f(x)=\dfrac{x^2-1}{x-1}\) at the point 1</span>
<p>Task: find the limit \(\displaystyle\lim_{x\to1}\dfrac{x^2-1}{x-1}\) and determine the type of discontinuity at the point 1.</p>
<ol>
<li>Factor the numerator using the difference of squares: \(x^2-1=(x-1)(x+1)\). Why: substituting \(x=1\) gives \(\dfrac00\), so we cannot read off the answer right away.</li>
<li>Cancel the common factor \(x-1\). This is allowed because \(x-1\) is not zero when \(x\ne1\).</li>
<li>We get \(\lim\limits_{x\to1}(x+1)=2\). The limit equals 2.</li>
</ol>
<p>Answer: the limit exists and equals 2, but \(f(1)\) is not defined. So the discontinuity is <b>removable</b>. On the graph it is a hole. To "repair" the function, it is enough to define \(f(1):=2\).</p></div>

<h2><span class="k">9</span>Jump</h2>
<div class="box ex"><span class="t">Example step by step: \(f(x)=\dfrac{|x|}{x}\) at the point 0</span>
<p>Recall that \(|x|\) equals \(x\) when \(x\) is positive, and \(-x\) when \(x\) is negative.</p>
<ol>
<li>To the left of zero \(x\lt0\), so \(|x|=-x\), and \(\dfrac{|x|}{x}=\dfrac{-x}{x}=-1\). The left limit is \(-1\).</li>
<li>To the right of zero \(x\gt0\), so \(|x|=x\), and \(\dfrac{|x|}{x}=1\). The right limit is 1.</li>
</ol>
<p>Answer: both limits are finite, but they are different: \(-1\ne1\). This is a <b>jump</b>. The size of the jump is \(|1-(-1)|=2\).</p></div>
<div class="box warn"><span class="t">Common mistake</span>Many people think that if the function is not defined at the point, then the limit does not exist either. This is wrong. For a jump, what matters is that both one-sided limits exist, even if they are different.</div>

<h2><span class="k">10</span>Infinite discontinuity</h2>
<div class="box ex"><span class="t">Example: \(f(x)=\dfrac1x\) at the point 0</span>
<p>As \(x\) approaches zero from the right, the values of \(\dfrac1x\) grow: at \(x=0{,}1\) we get 10, at \(x=0{,}01\) we get 100, at \(x=0{,}001\) we get 1000. The value goes off to infinity.</p>
<p>From the left of zero, for example at \(x=-0{,}1\) and \(x=-0{,}01\), the values of \(\dfrac1x\) go off to minus infinity.</p>
<p>Answer: at least one one-sided limit equals \(\pm\infty\). This is an <b>infinite discontinuity</b>, also called a pole. The line \(x=0\) is a vertical asymptote: the graph gets arbitrarily close to it but never crosses it.</p></div>

<h2><span class="k">11</span>Oscillating discontinuity</h2>
<div class="box ex"><span class="t">Example: \(f(x)=\sin\dfrac1x\) at the point 0</span>
<p>Here the question "what does the function approach" has no answer. When \(x\) becomes very small, the argument \(\dfrac1x\) becomes very large. The sine then swings between \(-1\) and \(1\) infinitely many times, faster and faster.</p>
<p>So for arbitrarily small \(x\), the function takes the value 1 and also the value \(-1\). It never settles on anything.</p>
<p>Answer: there is no limit from either side, not even an infinite one. This is an <b>oscillating</b> discontinuity, also called essential.</p></div>

<h2><span class="k">12</span>How to solve a discontinuity problem</h2>
<ol>
<li>Find the suspicious points. Usually these are points where the denominator becomes zero, or points where the function is defined piece by piece.</li>
<li>At each such point, check whether \(f(x_0)\) is defined.</li>
<li>Work out the left and right limits at that point.</li>
<li>Compare the results. If both limits are finite, equal, and match the value of the function, there is no discontinuity. Otherwise, determine the kind and type of discontinuity using the scheme below.</li>
</ol>

<h2><span class="k">13</span>Scheme of all types of discontinuity</h2>
<ul>
<li><b>First kind, removable:</b> both limits are finite and equal, but \(f(x_0)\) is undefined or different. Example: \(\dfrac{x^2-1}{x-1}\) at 1.</li>
<li><b>First kind, jump:</b> both limits are finite, but not equal. Example: \(\dfrac{|x|}{x}\) at 0.</li>
<li><b>Second kind, infinite:</b> one of the limits equals \(\pm\infty\). Example: \(\dfrac1x\) at 0.</li>
<li><b>Second kind, oscillating:</b> there is no limit at all. Example: \(\sin\dfrac1x\) at 0.</li>
</ul>

<div class="box def"><span class="t">If you remember only one thing</span>A function is continuous at a point if its value there is defined, the limit exists, and they are equal. If at least one of these conditions fails, there is a discontinuity at that point. You find its type from the one-sided limits: whether they are finite and whether they are equal to each other.</div>
`
},'en');
