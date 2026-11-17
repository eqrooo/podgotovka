registerTopic({
subject:'hm', id:'l12', num:12, module:4,
title:{ru:'Числовые последовательности и их пределы', en:'Numerical sequences and their limits'},
summary:{ru:'Последовательность как функция на \(\mathbb N\), определение предела через ε–N, расходимость, арифметика пределов, стандартные пределы, неопределённости и теорема о двух милиционерах.',
         en:'A sequence as a function on \(\mathbb N\), the ε–N definition of a limit, divergence, limit laws, standard limits, indeterminate forms and the squeeze theorem.'},
sources:['Higher_Mathematics_12.pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Последовательность — функция на \(\mathbb N\)</h2>
<div class="box def"><span class="t">Определение</span>Числовая последовательность — функция \(a:\mathbb N\to\mathbb R\). Пишут \(a_n\) вместо \(a(n)\), обозначают \(\{a_n\}_{n=1}^\infty\) или \(\{a_n\}\).</div>
<ul>
<li><b>Явно:</b> \(a_n=\frac1n\): \(1,\frac12,\frac13,\dots\); \(a_n=(-1)^n\): \(-1,1,-1,\dots\)</li>
<li><b>Рекуррентно:</b> \(a_1=2,\ a_{n+1}=\frac{a_n}{2}+1\): \(2,2,2,\dots\) — постоянная, уже стоит в своём пределе.</li>
</ul>

<h2><span class="k">2</span>Ограниченность и монотонность</h2>
<ul>
<li><b>Ограничена:</b> \(\exists M:\ |a_n|\le M\) для всех \(n\).</li>
<li><b>Возрастает:</b> \(a_n\le a_{n+1}\) (строго, если \(\lt\)). <b>Убывает:</b> \(a_n\ge a_{n+1}\).</li>
</ul>
<div class="box tip"><span class="t">Важная теорема (пригодится)</span>Ограниченная монотонная последовательность всегда сходится (теорема Вейерштрасса).</div>

<h2><span class="k">3</span>Интуиция предела</h2>
<p>При \(n\to\infty\) члены «успокаиваются» около одного числа? \(a_n=\frac1n\): \(1,\ 0.5,\ 0.33,\ 0.25,\ 0.2,\dots\to0\). Члены сколь угодно близко подходят к 0 и <b>остаются</b> рядом. Но «близко» — расплывчато, нужно строгое определение.</p>

<h2><span class="k">4</span>Определение предела (ε–N)</h2>
<div class="box def"><span class="t">Определение</span>
\(\lim\limits_{n\to\infty}a_n=L\), если для любого \(\varepsilon>0\) найдётся \(N\), что
\[n>N\ \Longrightarrow\ |a_n-L|\lt\varepsilon.\]</div>
<p>Вслух: какой бы маленький допуск \(\varepsilon\) ни назвали, найдётся номер \(N\), после которого <b>все</b> члены лежат в полосе \((L-\varepsilon,\ L+\varepsilon)\) — навсегда.</p>
<div class="box ex"><span class="t">Доказательство \(\lim\frac1n=0\)</span>
Пусть дано \(\varepsilon>0\). Возьмём \(N=\frac1\varepsilon\). Тогда при \(n>N\): \(n>\frac1\varepsilon\Rightarrow\frac1n\lt\varepsilon\Rightarrow\left|\frac1n-0\right|\lt\varepsilon\) ✓.<br>
Проверка: \(\varepsilon=0.01\Rightarrow N=100\); \(\frac1{101}\approx0.0099\lt0.01\).</div>
<div class="box tip"><span class="t">Шаблон ε–N</span>Запиши \(|a_n-L|\lt\varepsilon\), упрости до вида \(n>\text{что-то}(\varepsilon)\) — это «что-то» и есть \(N\).</div>

<h2><span class="k">5</span>Расходящиеся последовательности</h2>
<ul>
<li><b>К бесконечности:</b> \(a_n=n\) растёт неограниченно, пишут \(\lim a_n=\infty\) (это не число — конечного \(L\) нет).</li>
<li><b>Колебания:</b> \(a_n=(-1)^n\) прыгает между \(-1\) и \(1\), ни к чему не приближается — предела нет вообще.</li>
</ul>
<p>Обе расходятся, но по разным причинам.</p>

<h2><span class="k">6</span>Арифметика пределов</h2>
<p>Если \(\lim a_n=A\) и \(\lim b_n=B\) (<b>оба конечны</b>):</p>
\[\lim(a_n\pm b_n)=A\pm B,\quad \lim(a_nb_n)=AB,\quad \lim\frac{a_n}{b_n}=\frac AB\ (B\ne0),\quad \lim(k\,a_n)=kA.\]
<div class="box warn"><span class="t">Условие</span>Работает только когда оба предела существуют и конечны. Иначе сначала преобразуй выражение.</div>

<h2><span class="k">7</span>Стандартные пределы</h2>
<div class="tw"><table><thead><tr><th>Последовательность</th><th>Предел</th></tr></thead><tbody>
<tr><td>\(\dfrac1{n^p},\ p>0\)</td><td>0</td></tr>
<tr><td>\(r^n,\ |r|\lt1\)</td><td>0</td></tr>
<tr><td>\(r^n,\ r>1\)</td><td>\(\infty\)</td></tr>
<tr><td>\(\sqrt[n]{n}\)</td><td>1</td></tr>
<tr><td>\(\left(1+\dfrac1n\right)^n\)</td><td>\(e\approx2.718\)</td></tr>
</tbody></table></div>

<h2><span class="k">8</span>Рациональные последовательности: делим на старшую степень</h2>
<div class="box ex"><span class="t">Пример</span>
\[\lim_{n\to\infty}\frac{3n^2+2n-1}{5n^2-4n+3}\]
И числитель, и знаменатель \(\to\infty\) — правило частного не применимо. Делим на \(n^2\):
\[\frac{3+\frac2n-\frac1{n^2}}{5-\frac4n+\frac3{n^2}}\ \xrightarrow[n\to\infty]{}\ \frac{3+0-0}{5-0+0}=\frac35.\]</div>
<div class="box tip"><span class="t">Правило старших степеней</span>Для \(\frac{P(n)}{Q(n)}\): степень числителя меньше — предел 0; равны — отношение старших коэффициентов; больше — \(\pm\infty\).</div>

<h2><span class="k">9</span>Неопределённости</h2>
<p>«Подставить бесконечность» нельзя: в выражениях вроде \(\frac\infty\infty\) ответ зависит от того, кто растёт быстрее. Семь неопределённостей:</p>
\[\frac00,\quad\frac\infty\infty,\quad\infty-\infty,\quad0\cdot\infty,\quad1^\infty,\quad0^0,\quad\infty^0.\]
<p>Каждая может дать любое число, \(\infty\) или вообще не иметь предела. Стратегия: алгебраически преобразовать (разложить на множители, поделить на старшую степень, домножить на сопряжённое), пока неопределённость не исчезнет. Показательные (\(1^\infty, 0^0, \infty^0\)) обычно решают через \(\ln\) и правило Лопиталя (позже).</p>
<div class="box ex"><span class="t">Пример \(\infty-\infty\)</span>
\[\sqrt{n+1}-\sqrt n=\frac{(\sqrt{n+1}-\sqrt n)(\sqrt{n+1}+\sqrt n)}{\sqrt{n+1}+\sqrt n}=\frac1{\sqrt{n+1}+\sqrt n}\to0.\]</div>

<h2><span class="k">10</span>Теорема о двух милиционерах (сжатия)</h2>
<div class="box def"><span class="t">Теорема</span>Если \(a_n\le b_n\le c_n\) для всех \(n\) и \(\lim a_n=\lim c_n=L\), то \(\lim b_n=L\).</div>
<div class="box ex"><span class="t">Пример \(\lim\frac{\sin n}{n}\)</span>
\(-1\le\sin n\le1\Rightarrow-\frac1n\le\frac{\sin n}{n}\le\frac1n\). Обе границы \(\to0\), значит \(\lim\frac{\sin n}{n}=0\).</div>
<p>Используй, когда прямое вычисление тяжёлое, но последовательность зажата между двумя простыми.</p>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>Последовательность — функция \(\mathbb N\to\mathbb R\); \(\lim a_n=L\): \(\forall\varepsilon\ \exists N:\ n>N\Rightarrow|a_n-L|\lt\varepsilon\).</li>
<li>Арифметика пределов — только для конечных пределов.</li>
<li>\(\frac\infty\infty\) у дробей — делим на старшую степень \(n\).</li>
<li>Зажата между двумя с одинаковым пределом — тот же предел.</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>A sequence is a function on \(\mathbb N\)</h2>
<div class="box def"><span class="t">Definition</span>A numerical sequence is a function \(a:\mathbb N\to\mathbb R\), written \(a_n\) and denoted \(\{a_n\}_{n=1}^\infty\) or \(\{a_n\}\).</div>
<ul>
<li><b>Explicit:</b> \(a_n=\frac1n\): \(1,\frac12,\frac13,\dots\); \(a_n=(-1)^n\): \(-1,1,-1,\dots\)</li>
<li><b>Recursive:</b> \(a_1=2,\ a_{n+1}=\frac{a_n}{2}+1\): \(2,2,2,\dots\) — constant, already at its limit.</li>
</ul>

<h2><span class="k">2</span>Bounded and monotonic</h2>
<ul>
<li><b>Bounded:</b> \(\exists M:\ |a_n|\le M\) for all \(n\).</li>
<li><b>Increasing:</b> \(a_n\le a_{n+1}\); <b>decreasing:</b> \(a_n\ge a_{n+1}\).</li>
</ul>
<div class="box tip"><span class="t">Key theorem (used later)</span>A bounded monotonic sequence always converges.</div>

<h2><span class="k">3</span>Intuition</h2>
<p>Do the terms settle near one value? \(\frac1n\): \(1,\ 0.5,\ 0.33,\ 0.25,\dots\to0\) — they get arbitrarily close to 0 and stay close. “Close” is vague, so we need a rigorous definition.</p>

<h2><span class="k">4</span>The ε–N definition</h2>
<div class="box def"><span class="t">Definition</span>
\(\lim\limits_{n\to\infty}a_n=L\) means: for every \(\varepsilon>0\) there is \(N\) with
\[n>N\ \Longrightarrow\ |a_n-L|\lt\varepsilon.\]</div>
<p>However small a tolerance \(\varepsilon\) you demand, beyond some \(N\) every term stays within \(\varepsilon\) of \(L\) forever.</p>
<div class="box ex"><span class="t">Proof that \(\lim\frac1n=0\)</span>
Given \(\varepsilon>0\), choose \(N=\frac1\varepsilon\). For \(n>N\): \(\frac1n\lt\varepsilon\) ✓. Check: \(\varepsilon=0.01\Rightarrow N=100\), \(\frac1{101}\approx0.0099\).</div>
<div class="box tip"><span class="t">ε–N template</span>Write \(|a_n-L|\lt\varepsilon\), simplify to \(n>\text{something}(\varepsilon)\); that something is your \(N\).</div>

<h2><span class="k">5</span>Divergent sequences</h2>
<ul>
<li><b>To infinity:</b> \(a_n=n\); \(\lim a_n=\infty\) (not a real number).</li>
<li><b>By oscillation:</b> \((-1)^n\) bounces forever; no limit at all.</li>
</ul>

<h2><span class="k">6</span>Limit laws</h2>
<p>If \(\lim a_n=A\), \(\lim b_n=B\) (<b>both finite</b>):</p>
\[\lim(a_n\pm b_n)=A\pm B,\quad \lim(a_nb_n)=AB,\quad \lim\frac{a_n}{b_n}=\frac AB\ (B\ne0),\quad \lim(k\,a_n)=kA.\]
<div class="box warn"><span class="t">Condition</span>Only when both limits exist and are finite; otherwise rewrite first.</div>

<h2><span class="k">7</span>Standard limits</h2>
<div class="tw"><table><thead><tr><th>Sequence</th><th>Limit</th></tr></thead><tbody>
<tr><td>\(\dfrac1{n^p},\ p>0\)</td><td>0</td></tr>
<tr><td>\(r^n,\ |r|\lt1\)</td><td>0</td></tr>
<tr><td>\(r^n,\ r>1\)</td><td>\(\infty\)</td></tr>
<tr><td>\(\sqrt[n]{n}\)</td><td>1</td></tr>
<tr><td>\(\left(1+\dfrac1n\right)^n\)</td><td>\(e\)</td></tr>
</tbody></table></div>

<h2><span class="k">8</span>Rational sequences: divide by the highest power</h2>
<div class="box ex"><span class="t">Example</span>
\[\lim_{n\to\infty}\frac{3n^2+2n-1}{5n^2-4n+3}=\lim\frac{3+\frac2n-\frac1{n^2}}{5-\frac4n+\frac3{n^2}}=\frac35.\]</div>
<div class="box tip"><span class="t">Degree rule</span>For \(\frac{P(n)}{Q(n)}\): lower degree on top → 0; equal → ratio of leading coefficients; higher → \(\pm\infty\).</div>

<h2><span class="k">9</span>Indeterminate forms</h2>
\[\frac00,\quad\frac\infty\infty,\quad\infty-\infty,\quad0\cdot\infty,\quad1^\infty,\quad0^0,\quad\infty^0.\]
<p>Each can resolve to any value, \(\infty\), or nothing — the notation carries no information. Strategy: rewrite (factor, divide by the highest power, rationalize). Exponential forms are usually handled with \(\ln\) and L’Hôpital later.</p>
<div class="box ex"><span class="t">\(\infty-\infty\) example</span>
\[\sqrt{n+1}-\sqrt n=\frac1{\sqrt{n+1}+\sqrt n}\to0.\]</div>

<h2><span class="k">10</span>The squeeze (sandwich) theorem</h2>
<div class="box def"><span class="t">Theorem</span>If \(a_n\le b_n\le c_n\) for all \(n\) and \(\lim a_n=\lim c_n=L\), then \(\lim b_n=L\).</div>
<div class="box ex"><span class="t">\(\lim\frac{\sin n}{n}\)</span>
\(-\frac1n\le\frac{\sin n}{n}\le\frac1n\), both bounds \(\to0\), so the limit is 0.</div>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>A sequence is \(\mathbb N\to\mathbb R\); \(\lim a_n=L\): \(\forall\varepsilon\ \exists N:\ n>N\Rightarrow|a_n-L|\lt\varepsilon\).</li>
<li>Limit laws need finite limits.</li>
<li>\(\frac\infty\infty\) in fractions: divide by the highest power.</li>
<li>Trapped between two sequences with the same limit: same limit.</li>
</ul>
`},
glossary:[
['Sequence','Последовательность',''],['Term','Член (последовательности)',''],['Limit','Предел',''],['Converge / convergent','Сходиться / сходящаяся',''],['Diverge / divergent','Расходиться / расходящаяся',''],['Oscillation','Колебание',''],['Bounded','Ограниченная',''],['Monotonic','Монотонная',''],['Limit laws','Арифметика (свойства) пределов',''],['Standard limits','Стандартные (замечательные) пределы',''],['Indeterminate form','Неопределённость',''],['Highest power','Старшая степень',''],['Squeeze (sandwich) theorem','Теорема о двух милиционерах (сжатия)',''],['Infinitesimal','Бесконечно малая','']
],
practice:[
{q:{ru:String.raw`Выпиши первые 5 членов: \(a_n=\frac{n}{n+1}\); \(a_1=1,\ a_{n+1}=2a_n+1\).`,en:String.raw`First 5 terms: \(a_n=\frac{n}{n+1}\); \(a_1=1,\ a_{n+1}=2a_n+1\).`},a:{ru:String.raw`\(\frac12,\frac23,\frac34,\frac45,\frac56\); \(1,3,7,15,31\) (\(=2^n-1\)).`,en:String.raw`\(\frac12,\frac23,\frac34,\frac45,\frac56\); \(1,3,7,15,31\) (\(=2^n-1\)).`}},
{q:{ru:String.raw`По определению ε–N докажи \(\lim\frac{2n+1}{n}=2\). Найди \(N\) для \(\varepsilon=0.001\).`,en:String.raw`Use ε–N to prove \(\lim\frac{2n+1}{n}=2\). Find \(N\) for \(\varepsilon=0.001\).`},a:{ru:String.raw`\(\left|\frac{2n+1}{n}-2\right|=\frac1n\lt\varepsilon\iff n>\frac1\varepsilon\). \(N=\frac1\varepsilon\); при \(\varepsilon=0.001\) \(N=1000\).`,en:String.raw`\(\left|\frac{2n+1}{n}-2\right|=\frac1n\lt\varepsilon\iff n>\frac1\varepsilon\); \(N=1000\).`}},
{q:{ru:String.raw`Найди: (i) \(\lim\frac{4n^3-n}{2n^3+5}\); (ii) \(\lim\frac{n^2+1}{n^3-2}\); (iii) \(\lim\frac{n^2}{3n+1}\).`,en:String.raw`Find: (i) \(\lim\frac{4n^3-n}{2n^3+5}\); (ii) \(\lim\frac{n^2+1}{n^3-2}\); (iii) \(\lim\frac{n^2}{3n+1}\).`},a:{ru:String.raw`(i) 2; (ii) 0; (iii) \(\infty\).`,en:String.raw`(i) 2; (ii) 0; (iii) \(\infty\).`}},
{q:{ru:String.raw`Найди \(\lim\left(\sqrt{n^2+n}-n\right)\).`,en:String.raw`Find \(\lim\left(\sqrt{n^2+n}-n\right)\).`},a:{ru:String.raw`Домножим на сопряжённое: \(\frac{n}{\sqrt{n^2+n}+n}=\frac{1}{\sqrt{1+\frac1n}+1}\to\frac12\).`,en:String.raw`Rationalize: \(\frac{n}{\sqrt{n^2+n}+n}=\frac{1}{\sqrt{1+\frac1n}+1}\to\frac12\).`}},
{q:{ru:String.raw`Найди: (i) \(\lim\left(\frac23\right)^n\); (ii) \(\lim\frac{2^n+3^n}{3^n}\); (iii) \(\lim\sqrt[n]{n}\).`,en:String.raw`Find: (i) \(\lim\left(\frac23\right)^n\); (ii) \(\lim\frac{2^n+3^n}{3^n}\); (iii) \(\lim\sqrt[n]{n}\).`},a:{ru:String.raw`(i) 0; (ii) \(\left(\frac23\right)^n+1\to1\); (iii) 1.`,en:String.raw`(i) 0; (ii) \(\left(\frac23\right)^n+1\to1\); (iii) 1.`}},
{q:{ru:String.raw`Найди \(\lim\frac{\cos n}{n^2}\) и \(\lim\frac{(-1)^n}{n}\).`,en:String.raw`Find \(\lim\frac{\cos n}{n^2}\) and \(\lim\frac{(-1)^n}{n}\).`},a:{ru:String.raw`Обе 0 по теореме о двух милиционерах: \(-\frac1{n^2}\le\frac{\cos n}{n^2}\le\frac1{n^2}\), \(-\frac1n\le\frac{(-1)^n}n\le\frac1n\).`,en:String.raw`Both 0 by squeeze: \(-\frac1{n^2}\le\frac{\cos n}{n^2}\le\frac1{n^2}\), \(-\frac1n\le\frac{(-1)^n}n\le\frac1n\).`}},
{q:{ru:String.raw`Сходится ли \(a_n=(-1)^n+\frac1n\)? А \(a_n=n\sin\frac{\pi n}{2}\)?`,en:String.raw`Does \(a_n=(-1)^n+\frac1n\) converge? And \(a_n=n\sin\frac{\pi n}{2}\)?`},a:{ru:String.raw`Первая: нет — чётные члены \(\to1\), нечётные \(\to-1\) (колебание). Вторая: \(1,0,-3,0,5,\dots\) — неограниченные колебания, предела нет.`,en:String.raw`First: no — even terms → 1, odd → −1. Second: \(1,0,-3,0,5,\dots\) — unbounded oscillation, no limit.`}},
{q:{ru:String.raw`Почему нельзя сказать «\(\lim(n-n)=\infty-\infty=0\)» как правило? Приведи пример \(\infty-\infty\) с другим ответом.`,en:String.raw`Why is “\(\infty-\infty=0\)” not a rule? Give an \(\infty-\infty\) example with another answer.`},a:{ru:String.raw`Это неопределённость: \((n+5)-n\to5\), \(n^2-n\to\infty\), \(\sqrt{n+1}-\sqrt n\to0\) — всё вида \(\infty-\infty\).`,en:String.raw`It is indeterminate: \((n+5)-n\to5\), \(n^2-n\to\infty\), \(\sqrt{n+1}-\sqrt n\to0\).`}}
]
});
