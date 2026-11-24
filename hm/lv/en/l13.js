addLevels('hm','l13',{
short:String.raw`
<h3>Definition of a function limit</h3>
<ul>
<li>\(\lim\limits_{x\to x_0}f(x)=L\): for every \(\varepsilon>0\) there exists \(\delta>0\) such that \(0\lt|x-x_0|\lt\delta\Rightarrow|f(x)-L|\lt\varepsilon\).</li>
<li>The point <b>\(x_0\)</b> itself does not matter: the function may not be defined there.</li>
</ul>
<h3>One-sided limits</h3>
<ul>
<li><b>Left-hand</b> limit \(x\to x_0^-\): \(x\lt x_0\). <b>Right-hand</b> limit \(x\to x_0^+\): \(x>x_0\).</li>
<li>A two-sided limit exists \(\iff\) both one-sided limits exist and are equal.</li>
</ul>
<h3>Infinitesimal and infinite quantities</h3>
<ul>
<li><b>Infinitesimal</b>: \(\lim\alpha(x)=0\). <b>Infinite</b>: \(\lim f(x)=\infty\).</li>
<li>If \(\alpha\) is infinitesimal, then \(\frac1\alpha\) is infinite, and vice versa.</li>
</ul>
<h3>Comparing infinitesimals</h3>
<ul>
<li>Look at \(\lim\frac\alpha\beta\): \(0\) means \(\alpha\) is of higher order; \(C\ne0\) means the same order; \(1\) means equivalent, \(\alpha\sim\beta\).</li>
</ul>
<h3>Remarkable limits</h3>
<ul>
<li>\[\lim_{x\to0}\frac{\sin x}{x}=1.\]</li>
<li>\[\lim_{x\to\infty}\left(1+\frac1x\right)^x=e.\]</li>
</ul>
<h3>Equivalences as \(x\to0\)</h3>
<ul>
<li>\(\sin x\sim x\), \(\tan x\sim x\), \(\arcsin x\sim x\), \(\arctan x\sim x\).</li>
<li>\(1-\cos x\sim\dfrac{x^2}{2}\), \(e^x-1\sim x\), \(\ln(1+x)\sim x\), \((1+x)^a-1\sim ax\).</li>
<li>Equivalents may be substituted only in products and quotients, not in sums and differences.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>What a function limit is</h2>
<p>Imagine walking towards a bus stop. You do not have to reach it to know where you are heading. What matters is what you are getting closer to. It is the same with a function. We look at which value \(f(x)\) "tends to" when \(x\) approaches the point \(x_0\). The point \(x_0\) itself may not even belong to the domain of the function.</p>
<p>In the last lecture we looked at sequences \(a_n\), where the index \(n\) moved only through whole numbers. Now \(x\) can take any real values near \(x_0\). So we measure "closeness" not by an index, but by distance along the \(x\)-axis.</p>

<h2><span class="k">2</span>The definition with ε and δ</h2>
<p>This definition looks scary, but it is really a game with tolerances. Imagine someone gives you a narrow strip around a number \(L\). The width of the strip is called \(\varepsilon\), meaning "how far off you are allowed to be in value". Your job is to find a small enough neighbourhood of \(x_0\) so that all values \(f(x)\) inside it land in that strip. The width of that neighbourhood is called \(\delta\).</p>
<div class="box def"><span class="t">Definition</span>
\(\lim\limits_{x\to x_0}f(x)=L\) means that for every \(\varepsilon>0\) there exists \(\delta>0\) such that
\[0\lt|x-x_0|\lt\delta\ \Longrightarrow\ |f(x)-L|\lt\varepsilon.\]</div>
<p>You can read it like this: no matter how narrow a strip \((L-\varepsilon,\ L+\varepsilon)\) someone chooses, you can always find a neighbourhood \((x_0-\delta,\ x_0+\delta)\) in which the values of \(f(x)\) stay inside the strip. We do not look at the point \(x_0\) itself, which is why we write \(0\lt|x-x_0|\).</p>
<div class="box tip"><span class="t">Why we exclude the point \(x_0\)</span>Imagine you are driving in fog. What matters to you is what you can see near the bend, not exactly what is happening at the bend itself. The function may not even be defined at \(x_0\), yet the limit there can still exist. Only the behaviour nearby matters.</div>

<h2><span class="k">3</span>Example: proving a limit</h2>
<p>Let us work through \(\lim\limits_{x\to2}(3x-1)=5\). We need to show that if \(x\) is close to \(2\), then \(3x-1\) is close to \(5\). But how close? That is what \(\varepsilon\) sets.</p>
<div class="box ex"><span class="t">Let us prove \(\lim\limits_{x\to2}(3x-1)=5\)</span>
<ol>
<li>Take any \(\varepsilon>0\). We need \(|3x-1-5|\lt\varepsilon\).</li>
<li>Simplify the left side: \(|3x-6|\lt\varepsilon\). Factor out the three: \(3|x-2|\lt\varepsilon\).</li>
<li>Divide by three: \(|x-2|\lt\frac\varepsilon3\). This is exactly the closeness we need.</li>
<li>So we take \(\delta=\frac\varepsilon3\). Then for \(0\lt|x-2|\lt\delta\) we get \(|f(x)-5|\lt\varepsilon\).</li>
</ol>
<p>Check with numbers: let \(\varepsilon=0.3\). Then \(\delta=0.1\). Take \(x=2.09\). We get \(f(x)=5.27\), and \(|5.27-5|=0.27\lt0.3\). Everything matches.</p></div>
<div class="box tip"><span class="t">How to remember the pattern</span>Write \(|f(x)-L|\lt\varepsilon\) and try to turn it into \(|x-x_0|\lt\) something that depends on \(\varepsilon\). That "something" is your \(\delta\).</div>

<h2><span class="k">4</span>One-sided limits</h2>
<p>Sometimes \(x\) can approach the point from only one side. For example, from the left of zero or from the right of zero. Then we study each side separately.</p>
<ul>
<li><b>Left-hand limit</b> \(\lim\limits_{x\to x_0^-}f(x)=L\): \(x\) approaches \(x_0\) only through values that are <b>less</b> than \(x_0\). Think of climbing a staircase from below.</li>
<li><b>Right-hand limit</b> \(\lim\limits_{x\to x_0^+}f(x)=L\): \(x\) approaches \(x_0\) only through values that are <b>greater</b> than \(x_0\). This is like coming down from above.</li>
</ul>
<div class="box ex"><span class="t">Example: \(f(x)=\dfrac{|x|}{x}\) at \(x_0=0\)</span>
<ol>
<li>From the left, where \(x\lt0\): the absolute value is \(|x|=-x\). So \(\dfrac{|x|}{x}=\dfrac{-x}{x}=-1\). The left-hand limit is \(-1\).</li>
<li>From the right, where \(x>0\): the absolute value is \(|x|=x\). So \(\dfrac{|x|}{x}=\dfrac{x}{x}=1\). The right-hand limit is \(1\).</li>
<li>The numbers \(-1\) and \(1\) are not equal. So there is no two-sided limit at zero.</li>
</ol></div>
<div class="box def"><span class="t">Theorem</span>
\[\lim_{x\to x_0}f(x)=L\iff\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=L.\]</div>
<p>How to use this. If you need to show that a limit does not exist, find the two one-sided limits and compare them. If they are different, the limit does not exist. If you need to show that a limit exists, compute both and check that they match.</p>

<h2><span class="k">5</span>Infinitesimal and infinite quantities</h2>
<p>An infinitesimal quantity is one that tends to zero. For example, \(x-2\) when \(x\to2\). It is a very small value that is almost zero, but the quantity itself need not be zero.</p>
<div class="box def"><span class="t">Infinitesimal</span>\(\alpha(x)\) is infinitesimal as \(x\to x_0\) if \(\lim\limits_{x\to x_0}\alpha(x)=0\).</div>
<ul>
<li>\(\alpha(x)=x-2\) is infinitesimal as \(x\to2\).</li>
<li>\(\alpha(x)=\sin x\) is infinitesimal as \(x\to0\).</li>
<li>\(\alpha(x)=\frac1x\) is infinitesimal as \(x\to\infty\).</li>
</ul>
<div class="box def"><span class="t">Infinite</span>\(f(x)\) is infinite as \(x\to x_0\) if, however large an \(M>0\) we choose, near \(x_0\) the value \(|f(x)|\) becomes greater than \(M\). This is written \(\lim\limits_{x\to x_0}f(x)=\infty\).</div>
<div class="box tip"><span class="t">The link between them</span>If \(\alpha(x)\) is infinitesimal and not equal to zero near \(x_0\), then \(\frac1{\alpha(x)}\) is infinite. And the reverse holds too. For example, as \(x\to0\), the quantity \(x\) is infinitesimal and \(\frac1x\) is infinite.</div>

<h2><span class="k">6</span>Comparing infinitesimals</h2>
<p>Two infinitesimals can tend to zero at different speeds: one faster, the other slower. To see which is faster, we divide one by the other and look at where the result goes.</p>
<div class="tw"><table><thead><tr><th>If \(\lim\frac\alpha\beta\) equals</th><th>then</th></tr></thead><tbody>
<tr><td>\(0\)</td><td>\(\alpha\) is an infinitesimal of <b>higher order</b>; it decreases faster than \(\beta\)</td></tr>
<tr><td>\(\infty\)</td><td>\(\alpha\) is an infinitesimal of <b>lower order</b> than \(\beta\)</td></tr>
<tr><td>\(C\ne0\), finite</td><td>\(\alpha\) and \(\beta\) are of <b>the same order</b></td></tr>
<tr><td>\(1\)</td><td>\(\alpha\) and \(\beta\) are <b>equivalent</b>: \(\alpha\sim\beta\)</td></tr>
</tbody></table></div>
<p>Examples as \(x\to0\). The quantities \(\sin x\) and \(x\) are equivalent, because their ratio tends to \(1\). The quantity \(x^2\) is of higher order than \(x\), since \(\frac{x^2}{x}=x\to0\). So \(x^2\) decreases faster.</p>

<h2><span class="k">7</span>The first remarkable limit</h2>
<div class="box def"><span class="t">Formula</span>\[\lim_{x\to0}\frac{\sin x}{x}=1.\]</div>
<p>It is worth memorising this formula, because a great many problems rest on it.</p>
<div class="box ex"><span class="t">Why it is true (geometry, for \(0\lt x\lt\frac\pi2\))</span>
<ol>
<li>Draw the unit circle. Compare three areas: the small triangle, the circular sector, and the large triangle. The small triangle is no larger than the sector, and the sector is no larger than the large triangle.</li>
<li>This comparison gives \(\sin x\le x\le\tan x\).</li>
<li>Divide everything by \(\sin x>0\), then take reciprocals of all three parts. You get \(\cos x\le\frac{\sin x}{x}\le1\).</li>
<li>As \(x\to0\), the quantity \(\cos x\) tends to \(1\), and the right side equals \(1\). So \(\frac{\sin x}{x}\) is squeezed between them and also tends to \(1\).</li>
</ol></div>

<h2><span class="k">8</span>The second remarkable limit</h2>
<div class="box def"><span class="t">Formula</span>\[\lim_{x\to\infty}\left(1+\frac1x\right)^x=e\approx2.71828\ldots\]
There is another form. Make the substitution \(t=\frac1x\). Then as \(x\to\infty\), we have \(t\to0\), and we get \[\lim_{t\to0}(1+t)^{1/t}=e.\]</div>
<p>Where this number comes from. The sequence \(\left(1+\frac1n\right)^n\) grows, but it does not go to infinity, because it is bounded above. The theorem from the last lecture says that such a sequence converges. That is exactly why the number \(e\) is well defined in the first place.</p>

<h2><span class="k">9</span>Two useful consequences</h2>
<div class="box ex"><span class="t">\(\ln(1+x)\sim x\) as \(x\to0\)</span>
<ol>
<li>Write the ratio: \(\dfrac{\ln(1+x)}{x}\).</li>
<li>Since the factor \(\frac{1}{x}\) can be moved into the power, we get \(\ln(1+x)^{1/x}\).</li>
<li>The logarithm can be moved outside the limit, because it is continuous. We get \(\ln\lim_{x\to0}(1+x)^{1/x}=\ln e=1\).</li>
</ol>
<p>We will look at the continuity of the logarithm in more detail in Lecture 14.</p></div>
<div class="box ex"><span class="t">\(e^x-1\sim x\) as \(x\to0\)</span>
<p>Introduce a new letter: \(y=e^x-1\). Then \(x=\ln(1+y)\). As \(x\to0\), the quantity \(y\) also tends to \(0\). We get \[\lim_{x\to0}\frac{e^x-1}{x}=\lim_{y\to0}\frac{y}{\ln(1+y)}=\frac11=1.\]</p></div>
<p>Now the table of equivalences has a proof behind it. It is not just a list you have to memorise.</p>

<h2><span class="k">10</span>Equivalent infinitesimals</h2>
<div class="box def"><span class="t">Definition</span>\(\alpha(x)\sim\beta(x)\) as \(x\to x_0\) if \(\lim\limits_{x\to x_0}\dfrac{\alpha(x)}{\beta(x)}=1\).</div>
<div class="box tip"><span class="t">The main substitution rule</span>If a limit is built from <b>products and quotients</b>, an infinitesimal factor can be replaced by an equivalent one. The value of the limit does not change.</div>
<div class="tw"><table><thead><tr><th colspan="4">Table of equivalences as \(x\to0\)</th></tr></thead><tbody>
<tr><td>\(\sin x\sim x\)</td><td>\(\tan x\sim x\)</td><td>\(\arcsin x\sim x\)</td><td>\(\arctan x\sim x\)</td></tr>
<tr><td>\(1-\cos x\sim\dfrac{x^2}{2}\)</td><td>\(e^x-1\sim x\)</td><td>\(\ln(1+x)\sim x\)</td><td>\((1+x)^a-1\sim ax\)</td></tr>
</tbody></table></div>

<h2><span class="k">11</span>Examples of substitution</h2>
<div class="box ex"><span class="t">Example 1</span>
<ol>
<li>In the numerator, \(\sin3x\sim3x\). In the denominator, \(\tan5x\sim5x\).</li>
<li>Substitute: \(\dfrac{3x}{5x}=\dfrac35\).</li>
</ol>
\[\lim_{x\to0}\frac{\sin3x}{\tan5x}=\frac35.\]</div>
<div class="box ex"><span class="t">Example 2</span>
<ol>
<li>Use \(1-\cos x\sim\dfrac{x^2}{2}\).</li>
<li>We get \(\dfrac{x^2/2}{x^2}=\dfrac12\).</li>
</ol>
\[\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12.\]</div>
<div class="box warn"><span class="t">Caution: sums and differences</span>
Consider \(\lim\limits_{x\to0}\dfrac{\sin x-\tan x}{x^3}\). If you replace both terms in the numerator by \(x\), you get \(\dfrac{x-x}{x^3}=0\). This is <b>wrong</b>. The correct answer is \(-\frac12\). Substitution works in products and quotients. In sums and differences the leading parts can cancel, and then substitution gives a false result.</div>
<div class="box def"><span class="t">If you remember only one thing</span>A limit describes the value that a function approaches as its argument approaches a point. The one-sided limits must match. Replace equivalents only in products and quotients, and be careful with sums.</div>
`
},'en');
