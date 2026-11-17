registerTopic({
subject:'hm', id:'l11', num:11, module:4,
title:{ru:'Функции и способы их задания', en:'Functions and ways of defining them'},
summary:{ru:'Действительная функция, естественная область определения, график, пять способов задания (+ рекуррентный), элементарные функции и свойства.',
         en:'Real functions, natural domain, graphs, five methods of definition (plus recursive), elementary functions and key properties.'},
sources:['Higher_Mathematics_11 (1).pdf','Higher_Mathematics_11.pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Действительная функция</h2>
<p>Это отображение из лекции 8, в котором \(A,B\subseteq\mathbb R\). Пишем \(f:D\to\mathbb R\), \(y=f(x)\), \(D\) — область определения. Всё из лекции 8 работает: инъекция, сюръекция, биекция, композиция, обратная.</p>

<h2><span class="k">2</span>Область определения и область значений</h2>
<ul>
<li><b>Область определения</b> \(D(f)\) — все допустимые \(x\). Если не указана, берут <b>естественную</b>: самое большое подмножество \(\mathbb R\), где формула имеет смысл.</li>
<li><b>Область значений</b> \(E(f)=\{f(x):x\in D(f)\}\) — реально достигаемые значения. \(E(f)\subseteq\) кодомен, но не обязательно равна ему.</li>
</ul>
<h3>Что запрещено в формуле</h3>
<div class="tw"><table><thead><tr><th>Конструкция</th><th>Условие</th><th>Пример</th></tr></thead><tbody>
<tr><td>Дробь \(\frac{1}{g(x)}\)</td><td>\(g(x)\ne0\)</td><td>\(\frac1{x-3}\): \(D=\mathbb R\setminus\{3\}\)</td></tr>
<tr><td>Чётный корень \(\sqrt{g(x)}\)</td><td>\(g(x)\ge0\)</td><td>\(\sqrt{x-2}\): \(D=[2,\infty)\)</td></tr>
<tr><td>Логарифм \(\ln g(x)\)</td><td>\(g(x)>0\)</td><td>\(\ln(x+1)\): \(D=(-1,\infty)\)</td></tr>
<tr><td>Комбинация</td><td>все условия сразу</td><td>\(\frac{\sqrt{x-1}}{x-3}\): \(D=[1,3)\cup(3,\infty)\)</td></tr>
</tbody></table></div>
<div class="box warn"><span class="t">Ловушка</span>\(\dfrac{\sqrt{x-2}}{\ln(x-1)}\): корень требует \(x\ge2\), логарифм \(x>1\), а знаменатель \(\ne0\): \(\ln(x-1)=0\iff x=2\). Итого \(D=(2,\infty)\) — точка 2 проходит по корню, но выпадает из-за знаменателя.</div>

<h2><span class="k">3</span>График и тест вертикальной прямой</h2>
\[\operatorname{Graph}(f)=\{(x,f(x)):x\in D(f)\}\subseteq\mathbb R^2.\]
<p><b>Тест вертикальной прямой:</b> кривая — график функции \(y(x)\), если каждая вертикаль пересекает её не более одного раза. Это картинка к правилу «один вход — один выход». (Тест <b>горизонтальной</b> прямой из лекции 8 проверяет инъективность.)</p>

<h2><span class="k">4</span>Способы задания функции</h2>
<h3>1. Аналитический (явная формула)</h3>
<p>\(y=f(x)\) дана формулой: \(f(x)=x^2+3x-1\), \(f(x)=\sin2x+1\). Самый частый способ, с ним работает весь матанализ.</p>
<h3>2. Неявный</h3>
<p>Соотношение \(F(x,y)=0\) без выражения \(y\). Пример: окружность \(x^2+y^2=1\). Целиком это не функция от \(x\) (вертикаль пересекает дважды), но локально распадается на две функции:</p>
\[y=\sqrt{1-x^2}\ (\text{верхняя половина}),\qquad y=-\sqrt{1-x^2}\ (\text{нижняя}).\]
<p>Неявное уравнение может скрывать несколько функций или ни одной.</p>
<h3>3. Параметрический</h3>
<p>\(x\) и \(y\) заданы через третью переменную — параметр \(t\): \(x=x(t),\ y=y(t)\). Та же окружность: \(x=\cos t,\ y=\sin t,\ t\in[0,2\pi)\) — без разбиения на половины.</p>
<p>Одна кривая — три описания: неявное, две явные ветви, одна параметрическая.</p>
<h3>4. Табличный</h3>
<p>Конечная таблица пар \((x,y)\) — измерения, опросы, финансовые данные.</p>
<div class="tw"><table><thead><tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td>y</td><td>5</td><td>8</td><td>13</td><td>20</td></tr></tbody></table></div>
<p>Между точками и за их пределами формулы нет — нужна интерполяция или экстраполяция (позже).</p>
<h3>5. Кусочный</h3>
<p>На разных частях области — разные формулы. Модуль:</p>
\[|x|=\begin{cases}x,&x\ge0\\-x,&x\lt0\end{cases}\]
<p>В жизни: прогрессивный налог, тарифы доставки, коммуналка.</p>
<h3>Бонус: рекуррентный</h3>
<p>Значение в \(n\) выражается через предыдущие. Факториал: \(0!=1,\ n!=n\cdot(n-1)!\). Фибоначчи: \(F(0)=0,\ F(1)=1,\ F(n)=F(n-1)+F(n-2)\). Так часто задают последовательности (лекция 12).</p>

<h2><span class="k">5</span>Элементарные функции</h2>
<ul>
<li>многочлены \(a_nx^n+\dots+a_0\); рациональные \(P(x)/Q(x)\); степенные \(x^a\);</li>
<li>показательные \(a^x\); логарифмические \(\log_ax\);</li>
<li>тригонометрические \(\sin,\cos,\tan,\dots\); обратные тригонометрические \(\arcsin,\arctan,\dots\)</li>
</ul>
<p>На них дальше будем проверять пределы и непрерывность.</p>

<h2><span class="k">6</span>Ключевые свойства</h2>
<ul>
<li><b>Монотонность:</b> возрастает, если \(x_1\lt x_2\Rightarrow f(x_1)\lt f(x_2)\) (убывает — наоборот). Строго монотонная функция автоматически <b>инъективна</b>.</li>
<li><b>Ограниченность:</b> \(\exists M:\ |f(x)|\le M\) для всех \(x\in D\).</li>
<li><b>Чётность:</b> чётная \(f(-x)=f(x)\) (симметрия относительно оси \(y\)), нечётная \(f(-x)=-f(x)\) (симметрия относительно начала). Область должна быть симметричной.</li>
<li><b>Периодичность:</b> \(f(x+T)=f(x)\) для всех \(x\), некоторого \(T>0\).</li>
</ul>
<div class="box ex"><span class="t">Примеры</span>
\(x^4-3x^2+1\) — чётная; \(x^3-2x\) — нечётная; \(x^2+x\) — ни то ни другое. Единственная функция, которая одновременно чётная и нечётная, — \(f(x)\equiv0\): из \(f(x)=f(-x)=-f(x)\) следует \(f(x)=0\).</div>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>Функция = отображение из лекции 8 при \(A,B\subseteq\mathbb R\).</li>
<li>Естественная область: знаменатель \(\ne0\), под чётным корнем \(\ge0\), под логарифмом \(>0\).</li>
<li>Пять способов: явный, неявный, параметрический, табличный, кусочный (+ рекуррентный).</li>
<li>Вертикаль — «это функция?», горизонталь — «инъекция?». Строгая монотонность \(\Rightarrow\) инъективность.</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>Real functions</h2>
<p>A Lecture 8 mapping with \(A,B\subseteq\mathbb R\). We write \(f:D\to\mathbb R\), \(y=f(x)\), where \(D\) is the domain. Injective, surjective, bijective, composition, inverses — all still apply.</p>

<h2><span class="k">2</span>Domain and range</h2>
<ul>
<li><b>Domain</b> \(D(f)\): all valid inputs. If not stated, use the <b>natural domain</b> — the largest subset of \(\mathbb R\) where the formula makes sense.</li>
<li><b>Range</b> \(E(f)=\{f(x):x\in D(f)\}\): values actually achieved, \(\subseteq\) codomain, not necessarily equal.</li>
</ul>
<div class="tw"><table><thead><tr><th>Construction</th><th>Condition</th><th>Example</th></tr></thead><tbody>
<tr><td>Fraction \(\frac{1}{g(x)}\)</td><td>\(g(x)\ne0\)</td><td>\(\frac1{x-3}\): \(D=\mathbb R\setminus\{3\}\)</td></tr>
<tr><td>Even root \(\sqrt{g(x)}\)</td><td>\(g(x)\ge0\)</td><td>\(\sqrt{x-2}\): \(D=[2,\infty)\)</td></tr>
<tr><td>Logarithm \(\ln g(x)\)</td><td>\(g(x)>0\)</td><td>\(\ln(x+1)\): \(D=(-1,\infty)\)</td></tr>
<tr><td>Combined</td><td>all at once</td><td>\(\frac{\sqrt{x-1}}{x-3}\): \(D=[1,3)\cup(3,\infty)\)</td></tr>
</tbody></table></div>
<div class="box warn"><span class="t">Trap</span>\(\dfrac{\sqrt{x-2}}{\ln(x-1)}\): root needs \(x\ge2\), log needs \(x>1\), and the denominator must be non-zero: \(\ln(x-1)=0\iff x=2\). So \(D=(2,\infty)\).</div>

<h2><span class="k">3</span>The graph and the vertical line test</h2>
\[\operatorname{Graph}(f)=\{(x,f(x)):x\in D(f)\}\subseteq\mathbb R^2.\]
<p><b>Vertical line test:</b> a curve is the graph of a function \(y(x)\) iff every vertical line meets it at most once — Lecture 8’s “one output per input”, drawn. (The <b>horizontal</b> line test checks injectivity.)</p>

<h2><span class="k">4</span>Methods of defining a function</h2>
<h3>1. Analytical (explicit formula)</h3>
<p>\(f(x)=x^2+3x-1\), \(f(x)=\sin2x+1\). The most common method and the one calculus works with.</p>
<h3>2. Implicit</h3>
<p>A relation \(F(x,y)=0\). The unit circle \(x^2+y^2=1\) is not a function of \(x\) as a whole, but splits locally into \(y=\sqrt{1-x^2}\) (upper) and \(y=-\sqrt{1-x^2}\) (lower). An implicit equation can hide several functions, or none.</p>
<h3>3. Parametric</h3>
<p>\(x=x(t),\ y=y(t)\). The same circle: \(x=\cos t,\ y=\sin t,\ t\in[0,2\pi)\), no splitting needed. One curve, three descriptions.</p>
<h3>4. Tabular</h3>
<div class="tw"><table><thead><tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td>y</td><td>5</td><td>8</td><td>13</td><td>20</td></tr></tbody></table></div>
<p>Measured data. No formula between or beyond the points — that needs interpolation or extrapolation.</p>
<h3>5. Piecewise</h3>
\[|x|=\begin{cases}x,&x\ge0\\-x,&x\lt0\end{cases}\]
<p>Real life: tax brackets, shipping tiers, utility billing.</p>
<h3>Bonus: recursive</h3>
<p>Factorial \(n!=n\cdot(n-1)!\), \(0!=1\); Fibonacci \(F(n)=F(n-1)+F(n-2)\). Common for sequences (Lecture 12).</p>

<h2><span class="k">5</span>Elementary functions</h2>
<p>Polynomials, rational \(P/Q\), power \(x^a\), exponential \(a^x\), logarithmic \(\log_ax\), trigonometric and inverse trigonometric. Limits and continuity will be tested on these.</p>

<h2><span class="k">6</span>Key properties</h2>
<ul>
<li><b>Monotonic:</b> increasing if \(x_1\lt x_2\Rightarrow f(x_1)\lt f(x_2)\). Strictly monotonic \(\Rightarrow\) <b>injective</b>.</li>
<li><b>Bounded:</b> \(\exists M:\ |f(x)|\le M\) on \(D\).</li>
<li><b>Even/odd:</b> \(f(-x)=f(x)\) (symmetric about the \(y\)-axis) / \(f(-x)=-f(x)\) (about the origin). The domain must be symmetric.</li>
<li><b>Periodic:</b> \(f(x+T)=f(x)\) for some fixed \(T>0\).</li>
</ul>
<div class="box ex"><span class="t">Examples</span>
\(x^4-3x^2+1\) even; \(x^3-2x\) odd; \(x^2+x\) neither. The only function both even and odd is \(f\equiv0\): \(f(x)=f(-x)=-f(x)\Rightarrow f(x)=0\).</div>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>A real function is a Lecture 8 mapping with \(A,B\subseteq\mathbb R\).</li>
<li>Natural domain: denominator \(\ne0\), even root \(\ge0\), log argument \(>0\).</li>
<li>Five methods: explicit, implicit, parametric, tabular, piecewise (+ recursive).</li>
<li>Vertical test: is it a function? Horizontal test: injective? Strictly monotonic \(\Rightarrow\) injective.</li>
</ul>
`},
glossary:[
['Real function','Действительная функция',''],['Domain','Область определения',''],['Natural domain','Естественная область определения',''],['Range','Область значений',''],['Graph','График',''],['Vertical line test','Тест вертикальной прямой',''],['Explicit (analytical)','Явный (аналитический)',''],['Implicit','Неявный',''],['Parametric','Параметрический',''],['Parameter','Параметр',''],['Tabular','Табличный',''],['Piecewise','Кусочно-заданный',''],['Recursive','Рекуррентный',''],['Interpolation','Интерполяция',''],['Elementary functions','Элементарные функции',''],['Monotonic (increasing / decreasing)','Монотонная (возрастающая / убывающая)',''],['Bounded','Ограниченная',''],['Even / odd','Чётная / нечётная',''],['Periodic','Периодическая','']
],
practice:[
{q:{ru:String.raw`Найди естественную область: (i) \(\frac1{x+5}\); (ii) \(\sqrt{4-x}\); (iii) \(\ln(2x-6)\); (iv) \(\frac1{x^2-9}\); (v) \(\frac{\sqrt{x+2}}{x-1}\).`,en:String.raw`Natural domain: (i) \(\frac1{x+5}\); (ii) \(\sqrt{4-x}\); (iii) \(\ln(2x-6)\); (iv) \(\frac1{x^2-9}\); (v) \(\frac{\sqrt{x+2}}{x-1}\).`},
 a:{ru:String.raw`(i) \(\mathbb R\setminus\{-5\}\); (ii) \((-\infty,4]\); (iii) \((3,\infty)\); (iv) \(\mathbb R\setminus\{\pm3\}\); (v) \([-2,1)\cup(1,\infty)\).`,en:String.raw`(i) \(\mathbb R\setminus\{-5\}\); (ii) \((-\infty,4]\); (iii) \((3,\infty)\); (iv) \(\mathbb R\setminus\{\pm3\}\); (v) \([-2,1)\cup(1,\infty)\).`}},
{q:{ru:String.raw`Найди область определения и значений \(f(x)=\sqrt{9-x^2}\).`,en:String.raw`Find the domain and range of \(f(x)=\sqrt{9-x^2}\).`},a:{ru:String.raw`\(D=[-3,3]\), \(E=[0,3]\) (верхняя полуокружность радиуса 3).`,en:String.raw`\(D=[-3,3]\), \(E=[0,3]\) (upper semicircle of radius 3).`}},
{q:{ru:String.raw`Найди область \(\frac{\sqrt{x-2}}{\ln(x-1)}\) и \(\sqrt{\frac{x-1}{x+2}}\).`,en:String.raw`Find the domain of \(\frac{\sqrt{x-2}}{\ln(x-1)}\) and of \(\sqrt{\frac{x-1}{x+2}}\).`},a:{ru:String.raw`Первая: \((2,\infty)\). Вторая: \(\frac{x-1}{x+2}\ge0\) и \(x\ne-2\): \((-\infty,-2)\cup[1,\infty)\).`,en:String.raw`First: \((2,\infty)\). Second: \(\frac{x-1}{x+2}\ge0\), \(x\ne-2\): \((-\infty,-2)\cup[1,\infty)\).`}},
{q:{ru:String.raw`\(y^2=x\): почему это не одна функция \(y(x)\)? Выпиши явные ветви.`,en:String.raw`\(y^2=x\): why is this not a single function \(y(x)\)? Write the explicit branches.`},a:{ru:String.raw`Каждому \(x>0\) соответствуют два \(y=\pm\sqrt x\). Ветви \(y=\sqrt x\) и \(y=-\sqrt x\), обе на \([0,\infty)\).`,en:String.raw`Each \(x>0\) gives two values \(\pm\sqrt x\). Branches \(y=\sqrt x\) and \(y=-\sqrt x\), both on \([0,\infty)\).`}},
{q:{ru:String.raw`\(f(x)=x+1\) при \(x\lt0\); \(x^2\) при \(0\le x\lt2\); \(5\) при \(x\ge2\). Найди \(f(-3), f(0), f(1.5), f(2), f(10)\).`,en:String.raw`\(f(x)=x+1\) for \(x\lt0\); \(x^2\) for \(0\le x\lt2\); \(5\) for \(x\ge2\). Find \(f(-3), f(0), f(1.5), f(2), f(10)\).`},a:{ru:String.raw`\(-2,\ 0,\ 2.25,\ 5,\ 5\).`,en:String.raw`\(-2,\ 0,\ 2.25,\ 5,\ 5\).`}},
{q:{ru:String.raw`\(g(1)=2\), \(g(n)=3g(n-1)-1\). Найди \(g(2), g(3), g(4)\).`,en:String.raw`\(g(1)=2\), \(g(n)=3g(n-1)-1\). Find \(g(2), g(3), g(4)\).`},a:{ru:String.raw`\(5,\ 14,\ 41\).`,en:String.raw`\(5,\ 14,\ 41\).`}},
{q:{ru:String.raw`Функция ли \(y\) от \(x\): (i) \(y=3x-7\); (ii) \(x^2+y^2=16\); (iii) \(y^3=x\)?`,en:String.raw`Is \(y\) a function of \(x\)? (i) \(y=3x-7\); (ii) \(x^2+y^2=16\); (iii) \(y^3=x\).`},a:{ru:String.raw`(i) да; (ii) нет — окружность; (iii) да, \(y=\sqrt[3]x\).`,en:String.raw`(i) yes; (ii) no — a circle; (iii) yes, \(y=\sqrt[3]x\).`}},
{q:{ru:String.raw`Период \(T=6\), \(f(1)=4\), \(f(3)=-2\), \(f(5)=0\). Найди \(f(7), f(9), f(11)\).`,en:String.raw`Period \(T=6\), \(f(1)=4\), \(f(3)=-2\), \(f(5)=0\). Find \(f(7), f(9), f(11)\).`},a:{ru:String.raw`\(4,\ -2,\ 0\).`,en:String.raw`\(4,\ -2,\ 0\).`}},
{q:{ru:String.raw`Докажи, что \(f(x)=\frac1{x^2+1}\) ограничена, и найди наименьшее \(M\).`,en:String.raw`Prove \(f(x)=\frac1{x^2+1}\) is bounded and find the smallest \(M\).`},a:{ru:String.raw`\(x^2+1\ge1\Rightarrow0\lt f(x)\le1\); при \(x=0\) достигается 1, значит \(M=1\).`,en:String.raw`\(x^2+1\ge1\Rightarrow0\lt f(x)\le1\), with 1 attained at \(x=0\): \(M=1\).`}},
{q:{ru:String.raw`Кривая \(x=3+2\cos t,\ y=-1+2\sin t\). Найди неявное уравнение и явную формулу верхней половины.`,en:String.raw`Curve \(x=3+2\cos t,\ y=-1+2\sin t\). Find the implicit equation and an explicit formula for the upper half.`},a:{ru:String.raw`\((x-3)^2+(y+1)^2=4\) — окружность, не функция. Верхняя: \(y=-1+\sqrt{4-(x-3)^2}\), \(x\in[1,5]\).`,en:String.raw`\((x-3)^2+(y+1)^2=4\) — a circle, not a function. Upper half: \(y=-1+\sqrt{4-(x-3)^2}\), \(x\in[1,5]\).`}}
]
});
