registerTopic({
subject:'hm', id:'l14', num:14, module:4,
title:{ru:'Непрерывность функции и точки разрыва', en:'Continuity of a function and discontinuity points'},
summary:{ru:'Три условия непрерывности в точке, определение через ε–δ и односторонние пределы, непрерывность на интервале и отрезке, непрерывность элементарных функций и классификация разрывов: устранимый, скачок, бесконечный, колебательный.',
         en:'The three conditions for continuity at a point, the ε–δ and one-sided-limit forms, continuity on intervals, continuity of elementary functions and the classification of discontinuities: removable, jump, infinite and oscillating.'},
sources:['Higher_Mathematics_14.pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Непрерывность в точке</h2>
<p>В лекции 13 мы спрашивали, существует ли предел. Теперь вопрос следующий: <b>совпадает ли он со значением</b> \(f(x_0)\)? И если нет, то как именно это может нарушиться.</p>
<div class="box def"><span class="t">Определение: три условия, нужны все</span>
\(f\) непрерывна в точке \(x_0\), если:
<ol>
<li>\(f(x_0)\) определено;</li>
<li>\(\lim\limits_{x\to x_0}f(x)\) существует и конечен;</li>
<li>\(\lim\limits_{x\to x_0}f(x)=f(x_0)\).</li>
</ol></div>
<p>Нарушено хотя бы одно условие — \(f\) разрывна в \(x_0\). Ниже разберём, какое именно нарушается и как.</p>

<h2><span class="k">2</span>Непрерывность через ε–δ</h2>
<div class="box def"><span class="t">Определение лекции 13 в новой форме</span>
\(f\) непрерывна в \(x_0\): для любого \(\varepsilon>0\) найдётся \(\delta>0\) такое, что
\[|x-x_0|\lt\delta\ \Longrightarrow\ |f(x)-f(x_0)|\lt\varepsilon.\]</div>
<div class="box tip"><span class="t">Маленькое, но важное отличие</span>Условия «\(0\lt|x-x_0|\)» больше нет. Теперь точку \(x=x_0\) включаем: там \(|f(x_0)-f(x_0)|=0\lt\varepsilon\) выполняется само собой.</div>

<h2><span class="k">3</span>Непрерывность через односторонние пределы</h2>
\[f\in C(x_0)\iff\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=f(x_0).\]
<p>Практическая проверка: посчитай оба односторонних предела и \(f(x_0)\). Все три числа должны совпасть.</p>

<h2><span class="k">4</span>Непрерывность на интервале и на отрезке</h2>
<ul>
<li><b>Интервал \((a,b)\):</b> \(f\) непрерывна в каждой точке внутри него.</li>
<li><b>Отрезок \([a,b]\):</b> дополнительно нужна односторонняя непрерывность на концах (полный двусторонний предел на самом краю не имеет смысла):
\[\lim_{x\to a^+}f(x)=f(a),\qquad\lim_{x\to b^-}f(x)=f(b).\]</li>
</ul>

<h2><span class="k">5</span>Элементарные функции непрерывны</h2>
<div class="box def"><span class="t">Факт (без доказательства)</span>Многочлены, рациональные функции, тригонометрические, показательные функции и логарифмы непрерывны на всей своей естественной области определения (лекция 11).</div>
<div class="box ex"><span class="t">Пример</span>\(f(x)=\dfrac1{x-3}\) непрерывна везде, кроме \(x=3\) — ровно там, где она не определена, и больше нигде.</div>

<h2><span class="k">6</span>Операции сохраняют непрерывность</h2>
<p>Если \(f\) и \(g\) непрерывны в \(x_0\), то непрерывны и</p>
\[f\pm g,\qquad f\cdot g,\qquad\frac fg\ \ (g(x_0)\ne0),\qquad f\circ g.\]
<div class="box tip"><span class="t">Почему работает «просто подставь»</span>Именно поэтому пределы элементарных функций считают прямой подстановкой (в лекциях 12–13 мы делали это постоянно). Непрерывность — формальное обоснование этого приёма.</div>

<h2><span class="k">7</span>Что такое точка разрыва</h2>
<div class="box def"><span class="t">Определение</span>\(x_0\) — точка разрыва \(f\), если \(f\) не непрерывна в ней: нарушено хотя бы одно из трёх условий раздела 1.</div>
<p>Разрывы бывают разные. Их делят на два рода:</p>
<div class="tw"><table><thead><tr><th>Род</th><th>Условие</th><th>Виды</th></tr></thead><tbody>
<tr><td><b>Первого рода</b></td><td>оба односторонних предела существуют и конечны</td><td><b>Устранимый:</b> пределы равны между собой, но \(f(x_0)\) не определено или отличается.<br><b>Скачок:</b> пределы не равны.</td></tr>
<tr><td><b>Второго рода</b></td><td>хотя бы один односторонний предел не существует как конечное число</td><td><b>Бесконечный:</b> этот предел равен \(\pm\infty\).<br><b>Колебательный:</b> предела нет вообще, даже бесконечного.</td></tr>
</tbody></table></div>

<h2><span class="k">8</span>Устранимый разрыв</h2>
<div class="box ex"><span class="t">Пример: \(f(x)=\dfrac{x^2-1}{x-1}\), не определена при \(x=1\)</span>
Предел всё равно существует:
\[\lim_{x\to1}\frac{x^2-1}{x-1}=\lim_{x\to1}\frac{(x-1)(x+1)}{x-1}=\lim_{x\to1}(x+1)=2.\]
Диагноз: предел \(=2\) есть, а \(f(1)\) не определено — разрыв <b>устранимый</b>. На графике это «выколотая точка». Достаточно доопределить \(f(1):=2\), и разрыв исчезнет.</div>

<h2><span class="k">9</span>Скачок</h2>
<div class="box ex"><span class="t">Пример из лекции 13: \(f(x)=\dfrac{|x|}{x}\) в точке \(x_0=0\)</span>
\[\lim_{x\to0^-}\frac{|x|}{x}=-1,\qquad\lim_{x\to0^+}\frac{|x|}{x}=1.\]
Диагноз: оба односторонних предела конечны, но \(-1\ne1\) — <b>скачок</b>. Величина скачка \(=|1-(-1)|=2\).</div>

<h2><span class="k">10</span>Бесконечный разрыв</h2>
<div class="box ex"><span class="t">Пример: \(f(x)=\dfrac1x\) в точке \(x_0=0\)</span>
\[\lim_{x\to0^+}\frac1x=+\infty,\qquad\lim_{x\to0^-}\frac1x=-\infty.\]
Диагноз: хотя бы один односторонний предел равен \(\pm\infty\) — <b>бесконечный разрыв</b> («полюс»). Прямая \(x=0\) — вертикальная асимптота.</div>

<h2><span class="k">11</span>Колебательный разрыв</h2>
<div class="box ex"><span class="t">Пример: \(f(x)=\sin\dfrac1x\) в точке \(x_0=0\)</span>
При \(x\to0\) аргумент \(\frac1x\to\infty\), и \(\sin\frac1x\) бесконечно много раз колеблется между \(-1\) и \(1\), всё быстрее и быстрее. Он ни к чему не приближается.<br>
Диагноз: одностороннего предела нет вообще — <b>колебательный (существенный) разрыв</b>.</div>

<h2><span class="k">12</span>Сводная таблица</h2>
<div class="tw"><table><thead><tr><th>Тип</th><th>Условие</th><th>Пример</th></tr></thead><tbody>
<tr><td>I род: устранимый</td><td>односторонние пределы конечны и равны, но \(f(x_0)\) не то или не определено</td><td>\(\frac{x^2-1}{x-1}\) в точке 1</td></tr>
<tr><td>I род: скачок</td><td>односторонние пределы конечны, но не равны</td><td>\(\frac{|x|}{x}\) в точке 0</td></tr>
<tr><td>II род: бесконечный</td><td>односторонний предел равен \(\pm\infty\)</td><td>\(\frac1x\) в точке 0</td></tr>
<tr><td>II род: колебательный</td><td>одностороннего предела нет вообще</td><td>\(\sin\frac1x\) в точке 0</td></tr>
</tbody></table></div>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>Непрерывность = \(f(x_0)\) определено + предел существует + они равны. Все три, без исключений.</li>
<li>Элементарные функции непрерывны на своей области определения — поэтому работает прямая подстановка.</li>
<li>Разрыв I рода: оба односторонних предела конечны (устранимый — равны, скачок — нет). II рода: хотя бы один не конечен (бесконечный или колебательный).</li>
</ul>
<p>В следующей лекции: две главные теоремы о функциях, непрерывных на отрезке, и где эти идеи применяются.</p>
`,
en:String.raw`
<h2><span class="k">1</span>Continuity at a point</h2>
<p>Lecture 13 asked whether a limit exists. Today we ask whether it <b>matches</b> \(f(x_0)\), and catalogue every way that can fail.</p>
<div class="box def"><span class="t">Definition: three conditions, all required</span>
\(f\) is continuous at \(x_0\) if:
<ol>
<li>\(f(x_0)\) is defined;</li>
<li>\(\lim\limits_{x\to x_0}f(x)\) exists (and is finite);</li>
<li>\(\lim\limits_{x\to x_0}f(x)=f(x_0)\).</li>
</ol></div>
<p>Miss any one of the three and \(f\) is discontinuous at \(x_0\). The sections below catalogue exactly which one fails, and how.</p>

<h2><span class="k">2</span>Continuity in ε–δ terms</h2>
<div class="box def"><span class="t">Restating Lecture 13's definition</span>
\(f\) is continuous at \(x_0\): for every \(\varepsilon>0\) there is \(\delta>0\) such that
\[|x-x_0|\lt\delta\ \Longrightarrow\ |f(x)-f(x_0)|\lt\varepsilon.\]</div>
<div class="box tip"><span class="t">One small but crucial difference</span>No more "\(0\lt|x-x_0|\)". This time we want \(x=x_0\) included: there \(|f(x_0)-f(x_0)|=0\lt\varepsilon\) holds trivially.</div>

<h2><span class="k">3</span>Continuity via one-sided limits</h2>
\[f\in C(x_0)\iff\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=f(x_0).\]
<p>The practical test: compute both one-sided limits and \(f(x_0)\). All three must be equal.</p>

<h2><span class="k">4</span>Continuity on an interval</h2>
<ul>
<li><b>Open interval \((a,b)\):</b> \(f\) is continuous at every point inside it.</li>
<li><b>Closed interval \([a,b]\):</b> additionally requires one-sided continuity at the endpoints (a full two-sided limit doesn't make sense right at the edge):
\[\lim_{x\to a^+}f(x)=f(a),\qquad\lim_{x\to b^-}f(x)=f(b).\]</li>
</ul>

<h2><span class="k">5</span>Elementary functions are continuous</h2>
<div class="box def"><span class="t">A standing fact (proof omitted)</span>Polynomials, rational functions, trigonometric functions, exponentials and logarithms are continuous on their entire natural domain (Lecture 11).</div>
<div class="box ex"><span class="t">Example</span>\(f(x)=\dfrac1{x-3}\) is continuous everywhere except \(x=3\): exactly where it is undefined, and nowhere else.</div>

<h2><span class="k">6</span>Operations preserve continuity</h2>
<p>If \(f\) and \(g\) are continuous at \(x_0\), so are</p>
\[f\pm g,\qquad f\cdot g,\qquad\frac fg\ \ (g(x_0)\ne0),\qquad f\circ g.\]
<div class="box tip"><span class="t">Why "just plug in" works</span>This is precisely why direct substitution computes limits of elementary functions (Lectures 12–13 did this constantly): continuity is the formal justification for that shortcut.</div>

<h2><span class="k">7</span>What is a discontinuity?</h2>
<div class="box def"><span class="t">Definition</span>\(x_0\) is a point of discontinuity of \(f\) if \(f\) fails to be continuous there: at least one of the three conditions in section 1 breaks.</div>
<p>Not all failures look the same. They split into two kinds:</p>
<div class="tw"><table><thead><tr><th>Kind</th><th>Condition</th><th>Types</th></tr></thead><tbody>
<tr><td><b>First kind</b></td><td>both one-sided limits exist and are finite</td><td><b>Removable:</b> the one-sided limits are equal, but \(f(x_0)\) is undefined or differs from that limit.<br><b>Jump:</b> the one-sided limits are unequal.</td></tr>
<tr><td><b>Second kind</b></td><td>at least one one-sided limit fails to exist (finitely)</td><td><b>Infinite:</b> that one-sided limit is \(\pm\infty\).<br><b>Oscillating:</b> that one-sided limit doesn't exist at all, not even as infinity.</td></tr>
</tbody></table></div>

<h2><span class="k">8</span>Removable discontinuity</h2>
<div class="box ex"><span class="t">Example: \(f(x)=\dfrac{x^2-1}{x-1}\), undefined at \(x=1\)</span>
The limit still exists:
\[\lim_{x\to1}\frac{x^2-1}{x-1}=\lim_{x\to1}\frac{(x-1)(x+1)}{x-1}=\lim_{x\to1}(x+1)=2.\]
Diagnosis: the limit \(=2\) exists, but \(f(1)\) is undefined, so the discontinuity is <b>removable</b>. On the graph it is a "hole". Just define \(f(1):=2\) and the discontinuity disappears.</div>

<h2><span class="k">9</span>Jump discontinuity</h2>
<div class="box ex"><span class="t">Recall Lecture 13: \(f(x)=\dfrac{|x|}{x}\) at \(x_0=0\)</span>
\[\lim_{x\to0^-}\frac{|x|}{x}=-1,\qquad\lim_{x\to0^+}\frac{|x|}{x}=1.\]
Diagnosis: both one-sided limits are finite, but \(-1\ne1\): a <b>jump</b> discontinuity. Jump size \(=|1-(-1)|=2\).</div>

<h2><span class="k">10</span>Infinite discontinuity</h2>
<div class="box ex"><span class="t">Example: \(f(x)=\dfrac1x\) at \(x_0=0\)</span>
\[\lim_{x\to0^+}\frac1x=+\infty,\qquad\lim_{x\to0^-}\frac1x=-\infty.\]
Diagnosis: at least one one-sided limit is \(\pm\infty\): an <b>infinite discontinuity</b> (a "pole"). The line \(x=0\) is a vertical asymptote.</div>

<h2><span class="k">11</span>Oscillating discontinuity</h2>
<div class="box ex"><span class="t">Example: \(f(x)=\sin\dfrac1x\) at \(x_0=0\)</span>
As \(x\to0\), \(\frac1x\to\infty\), and \(\sin\frac1x\) keeps oscillating between \(-1\) and \(1\) infinitely often, faster and faster. It never settles anywhere.<br>
Diagnosis: genuinely no one-sided limit exists: an <b>oscillating (essential) discontinuity</b>.</div>

<h2><span class="k">12</span>Summary table</h2>
<div class="tw"><table><thead><tr><th>Type</th><th>Condition</th><th>Example</th></tr></thead><tbody>
<tr><td>First kind: removable</td><td>one-sided limits finite and equal, but \(f(x_0)\) wrong or undefined</td><td>\(\frac{x^2-1}{x-1}\) at 1</td></tr>
<tr><td>First kind: jump</td><td>one-sided limits finite but unequal</td><td>\(\frac{|x|}{x}\) at 0</td></tr>
<tr><td>Second kind: infinite</td><td>a one-sided limit is \(\pm\infty\)</td><td>\(\frac1x\) at 0</td></tr>
<tr><td>Second kind: oscillating</td><td>a one-sided limit doesn't exist at all</td><td>\(\sin\frac1x\) at 0</td></tr>
</tbody></table></div>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>Continuity = \(f(x_0)\) defined + limit exists + they are equal. All three, no exceptions.</li>
<li>Elementary functions are continuous on their domains; this is why direct substitution works.</li>
<li>First kind: both one-sided limits finite (removable if equal, jump if not). Second kind: at least one is not finite (infinite or oscillating).</li>
</ul>
<p>Next lecture: two landmark theorems for continuous functions on closed intervals, and where these ideas actually get used.</p>
`},
glossary:[
['Continuity','Непрерывность',''],['Continuous at a point','Непрерывна в точке',''],['Discontinuity point','Точка разрыва',''],['Open interval','Интервал',''],['Closed interval','Отрезок',''],['Endpoint','Конец (отрезка)',''],['One-sided continuity','Односторонняя непрерывность',''],['Natural domain','Естественная область определения',''],['Direct substitution','Прямая подстановка',''],['Composition','Композиция (сложная функция)',''],['Discontinuity of the first kind','Разрыв первого рода',''],['Discontinuity of the second kind','Разрыв второго рода',''],['Removable discontinuity','Устранимый разрыв',''],['Jump discontinuity','Скачок',''],['Jump size','Величина скачка',''],['Infinite discontinuity','Бесконечный разрыв',''],['Pole','Полюс',''],['Vertical asymptote','Вертикальная асимптота',''],['Oscillating (essential) discontinuity','Колебательный (существенный) разрыв',''],['Hole','Выколотая точка','']
],
practice:[
{q:{ru:String.raw`Проверь три условия непрерывности для \(f(x)=x^2+1\) в точке \(x_0=2\).`,en:String.raw`Check the three continuity conditions for \(f(x)=x^2+1\) at \(x_0=2\).`},a:{ru:String.raw`\(f(2)=5\) определено; \(\lim\limits_{x\to2}(x^2+1)=5\) существует; они равны — непрерывна.`,en:String.raw`\(f(2)=5\) is defined; \(\lim\limits_{x\to2}(x^2+1)=5\) exists; they are equal, so \(f\) is continuous.`}},
{q:{ru:String.raw`Найди точки разрыва \(f(x)=\dfrac{x^2-4}{x-2}\) и определи их тип. Как устранить разрыв?`,en:String.raw`Find the discontinuity points of \(f(x)=\dfrac{x^2-4}{x-2}\) and classify them. How can the discontinuity be removed?`},a:{ru:String.raw`Разрыв при \(x=2\). \(\frac{(x-2)(x+2)}{x-2}=x+2\to4\) — предел есть, \(f(2)\) нет: устранимый. Доопределить \(f(2):=4\).`,en:String.raw`Discontinuity at \(x=2\). \(\frac{(x-2)(x+2)}{x-2}=x+2\to4\): the limit exists but \(f(2)\) does not, so it is removable. Define \(f(2):=4\).`}},
{q:{ru:String.raw`\(f(x)=x+1\) при \(x\lt1\) и \(f(x)=3-x\) при \(x\ge1\). Непрерывна ли \(f\) в точке 1?`,en:String.raw`\(f(x)=x+1\) for \(x\lt1\) and \(f(x)=3-x\) for \(x\ge1\). Is \(f\) continuous at 1?`},a:{ru:String.raw`Слева \(1+1=2\), справа \(3-1=2\), \(f(1)=2\). Все три равны — непрерывна.`,en:String.raw`Left: \(1+1=2\), right: \(3-1=2\), \(f(1)=2\). All three are equal, so it is continuous.`}},
{q:{ru:String.raw`\(f(x)=x^2\) при \(x\lt0\) и \(f(x)=x+3\) при \(x\ge0\). Определи тип разрыва в нуле и величину скачка.`,en:String.raw`\(f(x)=x^2\) for \(x\lt0\) and \(f(x)=x+3\) for \(x\ge0\). Classify the discontinuity at 0 and find the jump size.`},a:{ru:String.raw`Слева 0, справа 3 — оба конечны и не равны: скачок (I род), величина \(|3-0|=3\).`,en:String.raw`Left: 0, right: 3; both finite and unequal: a jump (first kind) of size \(|3-0|=3\).`}},
{q:{ru:String.raw`Определи тип разрыва \(f(x)=\dfrac1{(x+1)^2}\) в точке \(x_0=-1\).`,en:String.raw`Classify the discontinuity of \(f(x)=\dfrac1{(x+1)^2}\) at \(x_0=-1\).`},a:{ru:String.raw`Оба односторонних предела \(+\infty\) — бесконечный разрыв (II род), \(x=-1\) — вертикальная асимптота.`,en:String.raw`Both one-sided limits are \(+\infty\): an infinite discontinuity (second kind); \(x=-1\) is a vertical asymptote.`}},
{q:{ru:String.raw`При каком \(a\) функция \(f(x)=\dfrac{\sin x}{x}\) при \(x\ne0\) и \(f(0)=a\) непрерывна в нуле?`,en:String.raw`For which \(a\) is \(f(x)=\dfrac{\sin x}{x}\) for \(x\ne0\), \(f(0)=a\) continuous at 0?`},a:{ru:String.raw`Первый замечательный предел: \(\frac{\sin x}x\to1\), значит \(a=1\). При другом \(a\) разрыв устранимый.`,en:String.raw`By the first remarkable limit \(\frac{\sin x}x\to1\), so \(a=1\). Any other \(a\) gives a removable discontinuity.`}},
{q:{ru:String.raw`Где непрерывна \(f(x)=\dfrac{x+5}{x^2-9}\)? Определи тип каждого разрыва.`,en:String.raw`Where is \(f(x)=\dfrac{x+5}{x^2-9}\) continuous? Classify each discontinuity.`},a:{ru:String.raw`Рациональная функция непрерывна везде, кроме \(x=\pm3\) (знаменатель 0). Числитель там не 0 (8 и 2), поэтому оба разрыва бесконечные (II род).`,en:String.raw`A rational function is continuous everywhere except \(x=\pm3\) (zero denominator). The numerator is non-zero there (8 and 2), so both are infinite discontinuities (second kind).`}},
{q:{ru:String.raw`Почему \(\sin\frac1x\) в нуле — разрыв II рода, а \(x\sin\frac1x\) (с \(f(0)=0\)) непрерывна?`,en:String.raw`Why is \(\sin\frac1x\) at 0 a second-kind discontinuity, while \(x\sin\frac1x\) (with \(f(0)=0\)) is continuous?`},a:{ru:String.raw`\(\sin\frac1x\) колеблется между \(-1\) и 1 и не имеет предела. А \(-|x|\le x\sin\frac1x\le|x|\), обе границы \(\to0\) — по теореме о двух милиционерах предел 0 \(=f(0)\).`,en:String.raw`\(\sin\frac1x\) oscillates between \(-1\) and 1 and has no limit. But \(-|x|\le x\sin\frac1x\le|x|\) with both bounds \(\to0\), so by the squeeze theorem the limit is 0 \(=f(0)\).`}}
]
});
