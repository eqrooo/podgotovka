registerTopic({
subject:'hm', id:'l13', num:13, module:4,
title:{ru:'Предел функции, бесконечно малые и эквивалентность', en:'Limit of a function, infinitesimals and equivalence'},
summary:{ru:'Определение предела функции через ε–δ, односторонние пределы, бесконечно малые и бесконечно большие, сравнение бесконечно малых, два замечательных предела и таблица эквивалентностей.',
         en:'The ε–δ definition of the limit of a function, one-sided limits, infinitesimal and infinite quantities, comparing infinitesimals, the two remarkable limits and the table of equivalences.'},
sources:['Higher_Mathematics_13 (1).pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>От последовательностей к функциям</h2>
<p>В лекции 12 мы смотрели, что происходит с \(a_n\) при \(n\to\infty\), то есть по целым номерам. Теперь вопрос другой: что происходит с \(f(x)\), когда \(x\) подходит к точке \(x_0\) по всем действительным числам рядом с ней.</p>
<p>Напомним: \(\lim\limits_{n\to\infty}a_n=L\) — для любого \(\varepsilon>0\) члены, начиная с некоторого номера \(N\), остаются в пределах \(\varepsilon\) от \(L\). Для функции вместо «после номера \(N\)» нужно «достаточно близко к \(x_0\)». Эта близость измеряется новым допуском \(\delta\) на оси \(x\).</p>

<h2><span class="k">2</span>Определение предела (ε–δ)</h2>
<div class="box def"><span class="t">Определение</span>
\(\lim\limits_{x\to x_0}f(x)=L\), если для любого \(\varepsilon>0\) найдётся \(\delta>0\) такое, что
\[0\lt|x-x_0|\lt\delta\ \Longrightarrow\ |f(x)-L|\lt\varepsilon.\]</div>
<p>Вслух: какую бы узкую полосу \((L-\varepsilon,\ L+\varepsilon)\) вокруг \(L\) ни задали, найдётся окрестность \((x_0-\delta,\ x_0+\delta)\), в которой (кроме, может быть, самой точки \(x_0\)) все значения \(f(x)\) попадают в эту полосу.</p>
<div class="box tip"><span class="t">Почему \(0\lt|x-x_0|\), а не просто \(|x-x_0|\)</span>Саму точку \(x=x_0\) специально исключают. Функция даже не обязана быть определена в \(x_0\), чтобы предел там существовал. Важно только поведение рядом.</div>

<h2><span class="k">3</span>Пример: доказательство через ε–δ</h2>
<div class="box ex"><span class="t">Докажем \(\lim\limits_{x\to2}(3x-1)=5\)</span>
Пусть дано \(\varepsilon>0\). Нужно \(|3x-1-5|\lt\varepsilon\):
\[|3x-6|\lt\varepsilon\iff3|x-2|\lt\varepsilon\iff|x-2|\lt\frac\varepsilon3.\]
Берём \(\delta=\frac\varepsilon3\). Тогда \(0\lt|x-2|\lt\delta\Rightarrow|f(x)-5|\lt\varepsilon\).<br>
Проверка: \(\varepsilon=0.3\Rightarrow\delta=0.1\); при \(x=2.09\): \(f=5.27\), \(|5.27-5|=0.27\lt0.3\).</div>
<div class="box tip"><span class="t">Шаблон ε–δ</span>Запиши \(|f(x)-L|\lt\varepsilon\), сведи к виду \(|x-x_0|\lt\text{что-то}(\varepsilon)\) — это «что-то» и есть \(\delta\).</div>

<h2><span class="k">4</span>Односторонние пределы</h2>
<ul>
<li><b>Левый предел</b> \(\lim\limits_{x\to x_0^-}f(x)=L\): \(x\) подходит к \(x_0\) только по значениям <b>меньше</b> \(x_0\).</li>
<li><b>Правый предел</b> \(\lim\limits_{x\to x_0^+}f(x)=L\): \(x\) подходит к \(x_0\) только по значениям <b>больше</b> \(x_0\).</li>
</ul>
<div class="box ex"><span class="t">Пример: \(f(x)=\dfrac{|x|}{x}\) в точке \(x_0=0\)</span>
Слева, при \(x\lt0\): \(|x|=-x\), поэтому \(\lim\limits_{x\to0^-}\dfrac{|x|}{x}=\lim\limits_{x\to0^-}\dfrac{-x}{x}=-1\).<br>
Справа, при \(x>0\): \(|x|=x\), поэтому \(\lim\limits_{x\to0^+}\dfrac{|x|}{x}=1\).<br>
\(-1\ne1\) — двустороннего предела в нуле нет.</div>
<div class="box def"><span class="t">Теорема</span>
\[\lim_{x\to x_0}f(x)=L\iff\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=L.\]</div>
<p>Как пользоваться: чтобы показать, что предела нет, найди два разных односторонних предела. Чтобы доказать, что он есть, — посчитай оба и убедись, что они совпадают.</p>

<h2><span class="k">5</span>Бесконечно малые и бесконечно большие</h2>
<div class="box def"><span class="t">Бесконечно малая</span>\(\alpha(x)\) — бесконечно малая при \(x\to x_0\), если \(\lim\limits_{x\to x_0}\alpha(x)=0\).</div>
<ul>
<li>\(\alpha(x)=x-2\) — бесконечно малая при \(x\to2\).</li>
<li>\(\alpha(x)=\sin x\) — бесконечно малая при \(x\to0\).</li>
<li>\(\alpha(x)=\frac1x\) — бесконечно малая при \(x\to\infty\).</li>
</ul>
<div class="box def"><span class="t">Бесконечно большая</span>\(f(x)\) — бесконечно большая при \(x\to x_0\), если для любого \(M>0\) найдётся \(\delta>0\): \(0\lt|x-x_0|\lt\delta\Rightarrow|f(x)|>M\). Пишут \(\lim\limits_{x\to x_0}f(x)=\infty\).</div>
<div class="box tip"><span class="t">Связь между ними</span>Если \(\alpha(x)\) бесконечно малая (и не равна нулю рядом с \(x_0\)), то \(\frac1{\alpha(x)}\) бесконечно большая при \(x\to x_0\), и наоборот. Пример: при \(x\to0\) \(x\) — бесконечно малая, \(\frac1x\) — бесконечно большая.</div>

<h2><span class="k">6</span>Сравнение бесконечно малых</h2>
<p>Пусть \(\alpha(x)\) и \(\beta(x)\) — бесконечно малые при \(x\to x_0\). Смотрим на \(\lim\limits_{x\to x_0}\dfrac{\alpha}{\beta}\):</p>
<div class="tw"><table><thead><tr><th>Если \(\lim\frac\alpha\beta\) равен</th><th>то</th></tr></thead><tbody>
<tr><td>\(0\)</td><td>\(\alpha\) — бесконечно малая <b>высшего порядка</b> (убывает быстрее), чем \(\beta\)</td></tr>
<tr><td>\(\infty\)</td><td>\(\alpha\) — бесконечно малая <b>низшего порядка</b>, чем \(\beta\)</td></tr>
<tr><td>\(C\ne0\), конечное</td><td>\(\alpha\) и \(\beta\) — <b>одного порядка</b></td></tr>
<tr><td>\(1\)</td><td>\(\alpha\) и \(\beta\) <b>эквивалентны</b>: \(\alpha\sim\beta\)</td></tr>
</tbody></table></div>
<p>Примеры при \(x\to0\): \(\sin x\sim x\) (отношение \(\to1\)); \(x^2\) — высшего порядка, чем \(x\), так как \(\frac{x^2}{x}=x\to0\).</p>

<h2><span class="k">7</span>Первый замечательный предел</h2>
<div class="box def"><span class="t">Формула</span>\[\lim_{x\to0}\frac{\sin x}{x}=1.\]</div>
<div class="box ex"><span class="t">Геометрическое доказательство (при \(0\lt x\lt\frac\pi2\))</span>
На единичной окружности сравним площади: малый треугольник \(\le\) круговой сектор \(\le\) большой треугольник. Это даёт
\[\sin x\le x\le\tan x.\]
Делим на \(\sin x>0\) и переворачиваем все три части:
\[\cos x\le\frac{\sin x}{x}\le1.\]
При \(x\to0\): \(\cos x\to1\), а верхняя граница и так равна 1. По теореме о двух милиционерах (лекция 12) \(\frac{\sin x}{x}\to1\).</div>

<h2><span class="k">8</span>Второй замечательный предел</h2>
<div class="box def"><span class="t">Формула</span>\[\lim_{x\to\infty}\left(1+\frac1x\right)^x=e\approx2.71828\ldots\]
Равносильная форма (замена \(t=\frac1x\), \(t\to0\)): \[\lim_{t\to0}(1+t)^{1/t}=e.\]</div>
<p>Откуда он берётся: последовательность \(\left(1+\frac1n\right)^n\) возрастает и ограничена. По теореме из лекции 12 такая последовательность сходится — именно поэтому число \(e\) вообще определено.</p>

<h2><span class="k">9</span>Следствия: ещё две эквивалентности</h2>
<div class="box ex"><span class="t">\(\ln(1+x)\sim x\) при \(x\to0\)</span>
\[\lim_{x\to0}\frac{\ln(1+x)}{x}=\lim_{x\to0}\ln(1+x)^{1/x}=\ln\lim_{x\to0}(1+x)^{1/x}=\ln e=1.\]
Менять местами \(\ln\) и предел можно, потому что логарифм — непрерывная функция (это строго разберём в лекции 14).</div>
<div class="box ex"><span class="t">\(e^x-1\sim x\) при \(x\to0\)</span>
Пусть \(y=e^x-1\). Тогда \(x=\ln(1+y)\), и \(y\to0\) при \(x\to0\):
\[\lim_{x\to0}\frac{e^x-1}{x}=\lim_{y\to0}\frac{y}{\ln(1+y)}=\frac11=1.\]</div>
<p>Теперь у всей таблицы эквивалентностей есть доказательство, а не только список для заучивания.</p>

<h2><span class="k">10</span>Эквивалентные бесконечно малые</h2>
<div class="box def"><span class="t">Определение</span>\(\alpha(x)\sim\beta(x)\) при \(x\to x_0\) \(\iff\lim\limits_{x\to x_0}\dfrac{\alpha(x)}{\beta(x)}=1\).</div>
<div class="box tip"><span class="t">Принцип замены</span>В пределе, составленном из <b>произведений и частных</b>, бесконечно малый множитель можно заменить эквивалентным — значение предела не изменится.</div>
<div class="tw"><table><thead><tr><th colspan="4">Таблица эквивалентностей при \(x\to0\)</th></tr></thead><tbody>
<tr><td>\(\sin x\sim x\)</td><td>\(\tan x\sim x\)</td><td>\(\arcsin x\sim x\)</td><td>\(\arctan x\sim x\)</td></tr>
<tr><td>\(1-\cos x\sim\dfrac{x^2}{2}\)</td><td>\(e^x-1\sim x\)</td><td>\(\ln(1+x)\sim x\)</td><td>\((1+x)^a-1\sim ax\)</td></tr>
</tbody></table></div>

<h2><span class="k">11</span>Примеры на замену</h2>
<div class="box ex"><span class="t">Пример 1</span>
\[\lim_{x\to0}\frac{\sin3x}{\tan5x}=\lim_{x\to0}\frac{3x}{5x}=\frac35\qquad(\sin3x\sim3x,\ \tan5x\sim5x).\]</div>
<div class="box ex"><span class="t">Пример 2</span>
\[\lim_{x\to0}\frac{1-\cos x}{x^2}=\lim_{x\to0}\frac{x^2/2}{x^2}=\frac12.\]</div>
<div class="box warn"><span class="t">Осторожно: суммы и разности</span>
\(\lim\limits_{x\to0}\dfrac{\sin x-\tan x}{x^3}\): если наивно заменить, получится \(\dfrac{x-x}{x^3}=0\) — <b>неверно</b>, правильный ответ \(-\frac12\). Замена надёжна в произведениях и частных, но не в суммах, где главные члены сокращаются.</div>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>\(\lim\limits_{x\to x_0}f(x)=L\): \(\forall\varepsilon>0\ \exists\delta>0:\ 0\lt|x-x_0|\lt\delta\Rightarrow|f(x)-L|\lt\varepsilon\). Сама точка \(x_0\) не важна.</li>
<li>Двусторонний предел есть \(\iff\) оба односторонних есть и равны.</li>
<li>Бесконечно малая: предел 0. Сравниваем через \(\lim\frac\alpha\beta\): 0 — высший порядок, \(C\ne0\) — один порядок, 1 — эквивалентны.</li>
<li>\(\frac{\sin x}{x}\to1\) при \(x\to0\); \(\left(1+\frac1x\right)^x\to e\) при \(x\to\infty\).</li>
<li>Эквивалентные заменяем только в произведениях и частных.</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>From sequences to functions</h2>
<p>Lecture 12 asked what happens to \(a_n\) as \(n\to\infty\) through the integers. Today: what happens to \(f(x)\) as \(x\to x_0\) through all real numbers nearby.</p>
<p>Recall: \(\lim\limits_{n\to\infty}a_n=L\) means that for every \(\varepsilon>0\) the terms eventually (past some \(N\)) stay within \(\varepsilon\) of \(L\). For a function, instead of "past some \(N\)" we need "close enough to \(x_0\)", measured by a new tolerance \(\delta\) on the \(x\)-axis.</p>

<h2><span class="k">2</span>The formal definition (ε–δ)</h2>
<div class="box def"><span class="t">Definition</span>
\(\lim\limits_{x\to x_0}f(x)=L\) means: for every \(\varepsilon>0\) there exists \(\delta>0\) such that
\[0\lt|x-x_0|\lt\delta\ \Longrightarrow\ |f(x)-L|\lt\varepsilon.\]</div>
<p>In words: however narrow a band \((L-\varepsilon,\ L+\varepsilon)\) around \(L\) you choose, there is a neighbourhood \((x_0-\delta,\ x_0+\delta)\) where all values of \(f(x)\) (except possibly at \(x_0\) itself) fall inside that band.</p>
<div class="box tip"><span class="t">Why \(0\lt|x-x_0|\), not just \(|x-x_0|\)?</span>We deliberately exclude \(x=x_0\) itself: \(f\) doesn't even need to be defined at \(x_0\) for the limit to exist there. Only the behaviour nearby matters.</div>

<h2><span class="k">3</span>Worked example: proving a limit via ε–δ</h2>
<div class="box ex"><span class="t">Claim: \(\lim\limits_{x\to2}(3x-1)=5\)</span>
Let \(\varepsilon>0\). We need \(|3x-1-5|\lt\varepsilon\):
\[|3x-6|\lt\varepsilon\iff3|x-2|\lt\varepsilon\iff|x-2|\lt\frac\varepsilon3.\]
Choose \(\delta=\frac\varepsilon3\). Then \(0\lt|x-2|\lt\delta\Rightarrow|f(x)-5|\lt\varepsilon\).<br>
Check: \(\varepsilon=0.3\Rightarrow\delta=0.1\); at \(x=2.09\): \(f=5.27\), \(|5.27-5|=0.27\lt0.3\).</div>
<div class="box tip"><span class="t">ε–δ template</span>Write \(|f(x)-L|\lt\varepsilon\) and reduce it to \(|x-x_0|\lt\text{something}(\varepsilon)\); that "something" is \(\delta\).</div>

<h2><span class="k">4</span>One-sided limits</h2>
<ul>
<li><b>Left-hand limit</b> \(\lim\limits_{x\to x_0^-}f(x)=L\): \(x\) approaches \(x_0\) only through values <b>less</b> than \(x_0\).</li>
<li><b>Right-hand limit</b> \(\lim\limits_{x\to x_0^+}f(x)=L\): \(x\) approaches \(x_0\) only through values <b>greater</b> than \(x_0\).</li>
</ul>
<div class="box ex"><span class="t">Example: \(f(x)=\dfrac{|x|}{x}\) at \(x_0=0\)</span>
From the left, for \(x\lt0\): \(|x|=-x\), so \(\lim\limits_{x\to0^-}\dfrac{|x|}{x}=\lim\limits_{x\to0^-}\dfrac{-x}{x}=-1\).<br>
From the right, for \(x>0\): \(|x|=x\), so \(\lim\limits_{x\to0^+}\dfrac{|x|}{x}=1\).<br>
\(-1\ne1\): no two-sided limit at 0.</div>
<div class="box def"><span class="t">Theorem</span>
\[\lim_{x\to x_0}f(x)=L\iff\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=L.\]</div>
<p>Practical use: to disprove that a limit exists, show the two one-sided limits differ. To prove it exists, compute both sides and confirm they match.</p>

<h2><span class="k">5</span>Infinitesimal and infinite quantities</h2>
<div class="box def"><span class="t">Infinitesimal</span>\(\alpha(x)\) is infinitesimal as \(x\to x_0\) if \(\lim\limits_{x\to x_0}\alpha(x)=0\).</div>
<ul>
<li>\(\alpha(x)=x-2\) is infinitesimal as \(x\to2\).</li>
<li>\(\alpha(x)=\sin x\) is infinitesimal as \(x\to0\).</li>
<li>\(\alpha(x)=\frac1x\) is infinitesimal as \(x\to\infty\).</li>
</ul>
<div class="box def"><span class="t">Infinite (infinitely large)</span>\(f(x)\) is infinite as \(x\to x_0\) if for every \(M>0\) there is \(\delta>0\) with \(0\lt|x-x_0|\lt\delta\Rightarrow|f(x)|>M\). Written \(\lim\limits_{x\to x_0}f(x)=\infty\).</div>
<div class="box tip"><span class="t">The reciprocal relationship</span>If \(\alpha(x)\) is infinitesimal (and non-zero near \(x_0\)), then \(\frac1{\alpha(x)}\) is infinite as \(x\to x_0\), and vice versa. Example: as \(x\to0\), \(x\) is infinitesimal and \(\frac1x\) is infinite.</div>

<h2><span class="k">6</span>Comparing infinitesimals</h2>
<p>Let \(\alpha(x)\) and \(\beta(x)\) be infinitesimals as \(x\to x_0\). Look at \(\lim\limits_{x\to x_0}\dfrac{\alpha}{\beta}\):</p>
<div class="tw"><table><thead><tr><th>If \(\lim\frac\alpha\beta\) equals</th><th>then</th></tr></thead><tbody>
<tr><td>\(0\)</td><td>\(\alpha\) is <b>higher-order</b> (vanishes faster) than \(\beta\)</td></tr>
<tr><td>\(\infty\)</td><td>\(\alpha\) is <b>lower-order</b> than \(\beta\)</td></tr>
<tr><td>\(C\ne0\), finite</td><td>\(\alpha\) and \(\beta\) are of <b>the same order</b></td></tr>
<tr><td>\(1\)</td><td>\(\alpha\) and \(\beta\) are <b>equivalent</b>: \(\alpha\sim\beta\)</td></tr>
</tbody></table></div>
<p>Examples as \(x\to0\): \(\sin x\sim x\) (ratio \(\to1\)); \(x^2\) is higher-order than \(x\), since \(\frac{x^2}{x}=x\to0\).</p>

<h2><span class="k">7</span>The first remarkable limit</h2>
<div class="box def"><span class="t">Statement</span>\[\lim_{x\to0}\frac{\sin x}{x}=1.\]</div>
<div class="box ex"><span class="t">Geometric proof (for \(0\lt x\lt\frac\pi2\))</span>
On the unit circle compare areas: small triangle \(\le\) circular sector \(\le\) large triangle. This gives
\[\sin x\le x\le\tan x.\]
Divide by \(\sin x>0\), then take reciprocals of all three parts:
\[\cos x\le\frac{\sin x}{x}\le1.\]
As \(x\to0\): \(\cos x\to1\), and the upper bound is already 1. By the squeeze theorem (Lecture 12), \(\frac{\sin x}{x}\to1\).</div>

<h2><span class="k">8</span>The second remarkable limit</h2>
<div class="box def"><span class="t">Statement</span>\[\lim_{x\to\infty}\left(1+\frac1x\right)^x=e\approx2.71828\ldots\]
Equivalent form (substitute \(t=\frac1x\), so \(t\to0\)): \[\lim_{t\to0}(1+t)^{1/t}=e.\]</div>
<p>Where the proof lives: the sequence \(\left(1+\frac1n\right)^n\) is increasing and bounded. Lecture 12's theorem guarantees that such a sequence converges, which is exactly what makes \(e\) well-defined in the first place.</p>

<h2><span class="k">9</span>Consequences: two more equivalences</h2>
<div class="box ex"><span class="t">\(\ln(1+x)\sim x\) as \(x\to0\)</span>
\[\lim_{x\to0}\frac{\ln(1+x)}{x}=\lim_{x\to0}\ln(1+x)^{1/x}=\ln\lim_{x\to0}(1+x)^{1/x}=\ln e=1.\]
Swapping \(\ln\) and the limit is valid because \(\ln\) is a continuous function (made precise in Lecture 14).</div>
<div class="box ex"><span class="t">\(e^x-1\sim x\) as \(x\to0\)</span>
Let \(y=e^x-1\). Then \(x=\ln(1+y)\), and \(y\to0\) as \(x\to0\):
\[\lim_{x\to0}\frac{e^x-1}{x}=\lim_{y\to0}\frac{y}{\ln(1+y)}=\frac11=1.\]</div>
<p>Now the whole equivalence table has a proof behind it, not just a list to memorise.</p>

<h2><span class="k">10</span>Equivalent infinitesimals</h2>
<div class="box def"><span class="t">Definition</span>\(\alpha(x)\sim\beta(x)\) as \(x\to x_0\) \(\iff\lim\limits_{x\to x_0}\dfrac{\alpha(x)}{\beta(x)}=1\).</div>
<div class="box tip"><span class="t">The substitution principle</span>Inside a limit built from <b>products and quotients</b>, an infinitesimal factor can be replaced by an equivalent one without changing the limit's value.</div>
<div class="tw"><table><thead><tr><th colspan="4">Standard equivalent infinitesimals as \(x\to0\)</th></tr></thead><tbody>
<tr><td>\(\sin x\sim x\)</td><td>\(\tan x\sim x\)</td><td>\(\arcsin x\sim x\)</td><td>\(\arctan x\sim x\)</td></tr>
<tr><td>\(1-\cos x\sim\dfrac{x^2}{2}\)</td><td>\(e^x-1\sim x\)</td><td>\(\ln(1+x)\sim x\)</td><td>\((1+x)^a-1\sim ax\)</td></tr>
</tbody></table></div>

<h2><span class="k">11</span>Worked examples: using the substitution</h2>
<div class="box ex"><span class="t">Example 1</span>
\[\lim_{x\to0}\frac{\sin3x}{\tan5x}=\lim_{x\to0}\frac{3x}{5x}=\frac35\qquad(\sin3x\sim3x,\ \tan5x\sim5x).\]</div>
<div class="box ex"><span class="t">Example 2</span>
\[\lim_{x\to0}\frac{1-\cos x}{x^2}=\lim_{x\to0}\frac{x^2/2}{x^2}=\frac12.\]</div>
<div class="box warn"><span class="t">Caution: sums and differences are risky</span>
\(\lim\limits_{x\to0}\dfrac{\sin x-\tan x}{x^3}\): naive substitution gives \(\dfrac{x-x}{x^3}=0\), which is <b>wrong</b> (the true answer is \(-\frac12\)). Substitution is safe in products and quotients, not in sums where the leading terms cancel.</div>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>\(\lim\limits_{x\to x_0}f(x)=L\): \(\forall\varepsilon>0\ \exists\delta>0:\ 0\lt|x-x_0|\lt\delta\Rightarrow|f(x)-L|\lt\varepsilon\). The point \(x_0\) itself doesn't matter.</li>
<li>A two-sided limit exists \(\iff\) both one-sided limits exist and agree.</li>
<li>Infinitesimal: limit 0. Compare via \(\lim\frac\alpha\beta\): 0 means higher order, \(C\ne0\) same order, 1 equivalent.</li>
<li>\(\frac{\sin x}{x}\to1\) as \(x\to0\); \(\left(1+\frac1x\right)^x\to e\) as \(x\to\infty\).</li>
<li>Replace by equivalents only in products and quotients.</li>
</ul>
`},
glossary:[
['Limit of a function','Предел функции',''],['Neighbourhood','Окрестность',''],['Tolerance (ε, δ)','Допуск (ε, δ)',''],['One-sided limit','Односторонний предел',''],['Left-hand limit','Левый предел',''],['Right-hand limit','Правый предел',''],['Two-sided limit','Двусторонний предел',''],['Infinitesimal','Бесконечно малая',''],['Infinite (infinitely large)','Бесконечно большая',''],['Higher-order infinitesimal','Бесконечно малая высшего порядка',''],['Same order','Одного порядка',''],['Equivalent infinitesimals','Эквивалентные бесконечно малые',''],['First remarkable limit','Первый замечательный предел',''],['Second remarkable limit','Второй замечательный предел',''],['Squeeze theorem','Теорема о двух милиционерах',''],['Substitution principle','Принцип замены',''],['Reciprocal','Обратная величина','']
],
practice:[
{q:{ru:String.raw`По определению ε–δ докажи \(\lim\limits_{x\to1}(2x+3)=5\). Найди \(\delta\) для \(\varepsilon=0.01\).`,en:String.raw`Use ε–δ to prove \(\lim\limits_{x\to1}(2x+3)=5\). Find \(\delta\) for \(\varepsilon=0.01\).`},a:{ru:String.raw`\(|2x+3-5|=2|x-1|\lt\varepsilon\iff|x-1|\lt\frac\varepsilon2\). Берём \(\delta=\frac\varepsilon2\); при \(\varepsilon=0.01\) \(\delta=0.005\).`,en:String.raw`\(|2x+3-5|=2|x-1|\lt\varepsilon\iff|x-1|\lt\frac\varepsilon2\). Take \(\delta=\frac\varepsilon2\); for \(\varepsilon=0.01\), \(\delta=0.005\).`}},
{q:{ru:String.raw`Найди односторонние пределы \(f(x)=\dfrac{|x-3|}{x-3}\) в точке \(x_0=3\). Есть ли двусторонний предел?`,en:String.raw`Find the one-sided limits of \(f(x)=\dfrac{|x-3|}{x-3}\) at \(x_0=3\). Does a two-sided limit exist?`},a:{ru:String.raw`Слева \(|x-3|=-(x-3)\), предел \(-1\); справа \(+1\). Они различны — двустороннего предела нет.`,en:String.raw`On the left \(|x-3|=-(x-3)\), the limit is \(-1\); on the right it is \(+1\). They differ, so there is no two-sided limit.`}},
{q:{ru:String.raw`Сравни при \(x\to0\) бесконечно малые: (i) \(x^3\) и \(x\); (ii) \(5x\) и \(x\); (iii) \(\tan x\) и \(x\).`,en:String.raw`Compare as \(x\to0\): (i) \(x^3\) and \(x\); (ii) \(5x\) and \(x\); (iii) \(\tan x\) and \(x\).`},a:{ru:String.raw`(i) \(\frac{x^3}{x}=x^2\to0\) — \(x^3\) высшего порядка; (ii) \(\frac{5x}{x}=5\) — одного порядка; (iii) \(\frac{\tan x}{x}\to1\) — эквивалентны.`,en:String.raw`(i) \(\frac{x^3}{x}=x^2\to0\): \(x^3\) is higher-order; (ii) \(\frac{5x}{x}=5\): same order; (iii) \(\frac{\tan x}{x}\to1\): equivalent.`}},
{q:{ru:String.raw`Найди \(\lim\limits_{x\to0}\dfrac{\sin7x}{2x}\) и \(\lim\limits_{x\to0}\dfrac{\arctan4x}{\sin2x}\).`,en:String.raw`Find \(\lim\limits_{x\to0}\dfrac{\sin7x}{2x}\) and \(\lim\limits_{x\to0}\dfrac{\arctan4x}{\sin2x}\).`},a:{ru:String.raw`\(\frac{7x}{2x}=\frac72\); \(\frac{4x}{2x}=2\).`,en:String.raw`\(\frac{7x}{2x}=\frac72\); \(\frac{4x}{2x}=2\).`}},
{q:{ru:String.raw`Найди \(\lim\limits_{x\to\infty}\left(1+\dfrac2x\right)^{x}\) и \(\lim\limits_{x\to0}(1+3x)^{1/x}\).`,en:String.raw`Find \(\lim\limits_{x\to\infty}\left(1+\dfrac2x\right)^{x}\) and \(\lim\limits_{x\to0}(1+3x)^{1/x}\).`},a:{ru:String.raw`\(\left[\left(1+\frac2x\right)^{x/2}\right]^2\to e^2\); \(\left[(1+3x)^{1/(3x)}\right]^3\to e^3\).`,en:String.raw`\(\left[\left(1+\frac2x\right)^{x/2}\right]^2\to e^2\); \(\left[(1+3x)^{1/(3x)}\right]^3\to e^3\).`}},
{q:{ru:String.raw`Найди \(\lim\limits_{x\to0}\dfrac{e^{2x}-1}{\ln(1+5x)}\).`,en:String.raw`Find \(\lim\limits_{x\to0}\dfrac{e^{2x}-1}{\ln(1+5x)}\).`},a:{ru:String.raw`\(e^{2x}-1\sim2x\), \(\ln(1+5x)\sim5x\): предел \(\frac{2x}{5x}=\frac25\).`,en:String.raw`\(e^{2x}-1\sim2x\), \(\ln(1+5x)\sim5x\): the limit is \(\frac{2x}{5x}=\frac25\).`}},
{q:{ru:String.raw`Найди \(\lim\limits_{x\to0}\dfrac{1-\cos4x}{x^2}\) и \(\lim\limits_{x\to0}\dfrac{\sqrt{1+x}-1}{x}\).`,en:String.raw`Find \(\lim\limits_{x\to0}\dfrac{1-\cos4x}{x^2}\) and \(\lim\limits_{x\to0}\dfrac{\sqrt{1+x}-1}{x}\).`},a:{ru:String.raw`\(1-\cos4x\sim\frac{(4x)^2}{2}=8x^2\), предел 8. \((1+x)^{1/2}-1\sim\frac x2\), предел \(\frac12\).`,en:String.raw`\(1-\cos4x\sim\frac{(4x)^2}{2}=8x^2\), limit 8. \((1+x)^{1/2}-1\sim\frac x2\), limit \(\frac12\).`}},
{q:{ru:String.raw`Почему в \(\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{x^3}\) нельзя просто заменить \(\tan x\) и \(\sin x\) на \(x\)? Найди предел, записав разность как произведение.`,en:String.raw`Why can't we simply replace \(\tan x\) and \(\sin x\) by \(x\) in \(\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{x^3}\)? Find the limit by writing the difference as a product.`},a:{ru:String.raw`Это разность: главные члены сокращаются, и замена даёт ложный 0. \(\tan x-\sin x=\tan x\,(1-\cos x)\sim x\cdot\frac{x^2}{2}\), предел \(\frac12\).`,en:String.raw`It is a difference: the leading terms cancel and substitution gives a false 0. \(\tan x-\sin x=\tan x\,(1-\cos x)\sim x\cdot\frac{x^2}{2}\), so the limit is \(\frac12\).`}}
]
});
