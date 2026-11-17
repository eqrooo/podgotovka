registerTopic({
subject:'hm', id:'l05', num:5, module:2,
title:{ru:'Векторная алгебра', en:'Vector algebra'},
summary:{ru:'Вектор как матрица-столбец и как стрелка; операции, коллинеарность и ортогональность, линейная зависимость, оболочка, базис, ориентация.',
         en:'A vector as a column matrix and as an arrow; operations, collinearity and orthogonality, linear dependence, span, basis, orientation.'},
sources:['Higher_Mathematics_5 (1).pdf','Higher_Mathematics_5 (3).pdf','Higher_Mathematics_5 (2).pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Вектор — это матрица \(n\times1\)</h2>
<div class="box def"><span class="t">Определение</span>
\(n\)-мерный вектор — упорядоченный список из \(n\) чисел, записанный столбцом:
\[\vec v=\begin{pmatrix}v_1\\v_2\\\vdots\\v_n\end{pmatrix}.\]</div>
<p>Главная мысль: <span class="hl">вектор — это матрица \(n\times1\)</span>. Все правила матриц из модуля 1 (и ранг) переносятся бесплатно, добавляется только геометрический смысл.</p>

<h2><span class="k">2</span>Геометрия: направленный отрезок</h2>
<p>Геометрически вектор — <b>направленный отрезок</b>: у него есть длина (модуль) и направление, но нет фиксированного положения. Две стрелки одинаковой длины и направления в разных местах — один и тот же <b>свободный</b> вектор.</p>
<p><b>Мост между геометрией и алгеброй:</b> поставь начало вектора в начало координат — его конец попадёт ровно в точку с координатами \((v_1,\dots,v_n)\). Например, \(\vec v=(3,2)\) — стрелка из \((0,0)\) в \((3,2)\).</p>

<h2><span class="k">3</span>Особые векторы и длина</h2>
<ul>
<li><b>Нулевой вектор</b> \(\vec 0=(0,\dots,0)\): длина 0, направления нет.</li>
<li><b>Единичные (базисные)</b> в \(\mathbb R^3\): \(\vec i=(1,0,0),\ \vec j=(0,1,0),\ \vec k=(0,0,1)\); в \(\mathbb R^n\): \(\vec e_1,\dots,\vec e_n\).</li>
</ul>
\[|\vec v|=\sqrt{v_1^2+v_2^2+\dots+v_n^2}\]
<p>Это теорема Пифагора в \(n\) измерениях. Пример: \(|(6,8)|=\sqrt{36+64}=10\).</p>
<p>Вектор между точками: \(\overrightarrow{AB}=B-A=(b_1-a_1,\dots,b_n-a_n)\). Для \(A=(1,2)\), \(B=(4,-1)\): \(\overrightarrow{AB}=(3,-3)\), \(|\overrightarrow{AB}|=\sqrt{18}=3\sqrt2\).</p>

<h2><span class="k">4</span>Коллинеарность и ортогональность</h2>
<div class="box def"><span class="t">Коллинеарные \(\vec u\parallel\vec v\)</span>
Лежат на параллельных прямых: \(\vec u=k\vec v\) для некоторого \(k\ne0\).
<ul><li>\(k>0\) — <b>сонаправленные</b> \(\vec u\uparrow\uparrow\vec v\);</li><li>\(k\lt0\) — <b>противоположно направленные</b> \(\vec u\uparrow\downarrow\vec v\).</li></ul>
Практически: координаты пропорциональны. \((2,-4)\) и \((-1,2)\): \(k=-2\), противоположные.</div>
<div class="box def"><span class="t">Ортогональные \(\vec u\perp\vec v\)</span>
Перпендикулярны (угол 90°). Для них выполняется теорема Пифагора:
\[|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2.\]
Пример: \((2,2)\) и \((2,-2)\): \(|(4,0)|^2=16=8+8\) — ортогональны.</div>

<h2><span class="k">5</span>Операции</h2>
<ul>
<li><b>Сложение:</b> \(\vec u+\vec v=(u_1+v_1,\dots,u_n+v_n)\). Геометрически — правило треугольника (конец к началу) или параллелограмма (общее начало, диагональ).</li>
<li><b>Вычитание:</b> \(\vec u-\vec v=\vec u+(-\vec v)\). Если у векторов общее начало, \(\vec u-\vec v\) идёт <b>от конца \(\vec v\) к концу \(\vec u\)</b>.</li>
<li><b>Умножение на число:</b> \(k\vec v=(kv_1,\dots,kv_n)\). \(|k|>1\) растягивает, \(0\lt|k|\lt1\) сжимает, \(k\lt0\) разворачивает, \(k=0\) даёт \(\vec 0\).</li>
</ul>
<p>Свойства (те же, что у матриц): \(\vec u+\vec v=\vec v+\vec u\), \((\vec u+\vec v)+\vec w=\vec u+(\vec v+\vec w)\), \(\vec u+\vec0=\vec u\), \(\vec u+(-\vec u)=\vec 0\), \(k(\vec u+\vec v)=k\vec u+k\vec v\), \((k+m)\vec u=k\vec u+m\vec u\), \(k(m\vec u)=(km)\vec u\), \(1\cdot\vec u=\vec u\).</p>
<p>Складывать можно только векторы одной размерности: \((3,-2,1)+(1,2)\) не определено.</p>

<h2><span class="k">6</span>Линейная комбинация и линейная зависимость</h2>
<p><b>Линейная комбинация</b> векторов \(\vec v_1,\dots,\vec v_k\) с числами \(c_1,\dots,c_k\): \(c_1\vec v_1+\dots+c_k\vec v_k\). Например, \(3(1,0)-2(0,1)=(3,-2)\).</p>
<div class="box def"><span class="t">Зависимость</span>
Векторы <b>линейно зависимы</b>, если существуют числа \(c_1,\dots,c_k\), <b>не все нули</b>, такие что \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\).<br>
Если подходит только \(c_1=\dots=c_k=0\) — векторы <b>линейно независимы</b>.</div>
<p>Геометрия: два вектора зависимы \(\iff\) коллинеарны; три вектора в \(\mathbb R^3\) зависимы \(\iff\) компланарны (лежат в одной плоскости).</p>

<h2><span class="k">7</span>Проверка через ранг</h2>
<div class="box def"><span class="t">Теорема</span>
Запиши \(\vec v_1,\dots,\vec v_k\) строками матрицы \(V\). Тогда
\[\operatorname{rank}V=k\iff\text{независимы},\qquad \operatorname{rank}V\lt k\iff\text{зависимы}.\]</div>
<p>Почему: \(c_1\vec v_1+\dots+c_k\vec v_k=\vec0\) — это однородная система, нетривиальное решение есть ровно тогда, когда строки не полностью независимы, а это и измеряет ранг.</p>
<div class="box ex"><span class="t">Зависимые</span>
\((1,2,3),(2,4,6),(1,0,2)\): ранг 2 < 3. Видно и так: \(\vec v_2=2\vec v_1\), то есть \(2\vec v_1-\vec v_2+0\vec v_3=\vec0\).</div>
<div class="box ex"><span class="t">Независимые</span>
\((1,2,3),(0,4,5),(1,0,2)\): \(\det=6\ne0\Rightarrow\) ранг 3 — независимы.</div>
<div class="box tip"><span class="t">Для квадратного случая</span>\(k\) векторов в \(\mathbb R^k\): \(\det\ne0\iff\) полный ранг \(\iff\) независимы.</div>

<h2><span class="k">8</span>Линейная оболочка (span)</h2>
<div class="box def"><span class="t">Определение</span>
\[\operatorname{span}(\vec v_1,\dots,\vec v_k)=\{c_1\vec v_1+\dots+c_k\vec v_k:\ c_i\in\mathbb R\}\]
— все точки, до которых можно «дойти», комбинируя векторы в любых количествах.</div>
<p>Оболочка может быть меньше всего пространства: \(\operatorname{span}((1,0,0),(0,1,0))=\{(x,y,0)\}\) — плоскость \(xy\) в \(\mathbb R^3\); вектор с ненулевой \(z\) из неё не получить.</p>
\[\dim\operatorname{span}(\vec v_1,\dots,\vec v_k)=\operatorname{rank}V.\]
<h3>Сколько векторов нужно, чтобы покрыть \(\mathbb R^n\)</h3>
<ul>
<li><b>Необходимость:</b> меньше \(n\) векторов никогда не дают всё \(\mathbb R^n\), потому что \(\operatorname{rank}V\le k\lt n\).</li>
<li><b>Ровно \(n\) векторов:</b> \(\det V\ne0\iff\operatorname{rank}V=n\iff\) порождают \(\mathbb R^n\) \(\iff\) независимы. Это один и тот же факт.</li>
<li><b>Больше \(n\):</b> определитель не применим (матрица не квадратная), используем ранг. Порождать могут, но независимыми быть не могут.</li>
</ul>
<div class="box ex"><span class="t">4 вектора в \(\mathbb R^3\)</span>
\((1,0,0),(0,1,0),(0,0,1),(1,1,1)\): ранг 3 = \(n\), значит порождают \(\mathbb R^3\); но зависимы: \(\vec v_4=\vec v_1+\vec v_2+\vec v_3\) — лишний вектор.</div>

<h2><span class="k">9</span>Базис и координаты</h2>
<p><b>Базис</b> — набор линейно независимых векторов, порождающих пространство. Стандартный базис \(\mathbb R^3\): \(\{\vec i,\vec j,\vec k\}\), и
\[\vec v=v_1\vec i+v_2\vec j+v_3\vec k.\]
Коэффициенты \((v_1,v_2,v_3)\) — это и есть <b>координаты</b>. В другом базисе у того же вектора будут другие координаты.</p>

<h2><span class="k">10</span>Ориентация: правая и левая тройки</h2>
<p>Упорядоченная тройка независимых векторов \((\vec a,\vec b,\vec c)\) в \(\mathbb R^3\):</p>
<ul>
<li><b>правая</b>, если \(\det[\vec a\ \vec b\ \vec c]>0\);</li>
<li><b>левая</b>, если \(\det[\vec a\ \vec b\ \vec c]\lt0\).</li>
</ul>
<p>Правило правой руки: указательный — \(\vec a\), средний — \(\vec b\), большой — \(\vec c\). Если поменять два вектора местами, определитель меняет знак, и ориентация переворачивается. Если векторы зависимы, \(\det=0\) — ориентации нет.</p>
<p>Где это важно: физика (сила Лоренца \(\vec F=q\,\vec v\times\vec B\), момент силы), 3D-графика (DirectX — левая система, ось Z в экран; OpenGL — правая, Z из экрана), робототехника.</p>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>Вектор = матрица \(n\times1\) = стрелка; \(|\vec v|=\sqrt{\sum v_i^2}\); \(\overrightarrow{AB}=B-A\).</li>
<li>Коллинеарны: \(\vec u=k\vec v\). Ортогональны: \(|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2\).</li>
<li>Зависимы \(\iff\operatorname{rank}V\lt k\); \(\dim\operatorname{span}=\operatorname{rank}V\).</li>
<li>\(n\) векторов в \(\mathbb R^n\): \(\det\ne0\) — базис. Знак \(\det\) — ориентация.</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>A vector is an \(n\times1\) matrix</h2>
<div class="box def"><span class="t">Definition</span>
An \(n\)-dimensional vector is an ordered list of \(n\) numbers written as a column:
\[\vec v=\begin{pmatrix}v_1\\v_2\\\vdots\\v_n\end{pmatrix}.\]</div>
<p>The key realization: <span class="hl">a vector is an \(n\times1\) matrix</span>. Every matrix rule from Module 1 (and rank) transfers for free; only the geometric meaning is new.</p>

<h2><span class="k">2</span>Geometry: a directed segment</h2>
<p>Geometrically a vector is a <b>directed line segment</b>: it has magnitude and direction but no fixed position. Two arrows of the same length and direction in different places are the same <b>free</b> vector.</p>
<p><b>The bridge:</b> slide the tail to the origin; the head lands at the point \((v_1,\dots,v_n)\). For example, \(\vec v=(3,2)\) is the arrow from \((0,0)\) to \((3,2)\).</p>

<h2><span class="k">3</span>Special vectors and magnitude</h2>
<ul>
<li><b>Zero vector</b> \(\vec 0=(0,\dots,0)\): length 0, no direction.</li>
<li><b>Unit (basis) vectors</b> in \(\mathbb R^3\): \(\vec i=(1,0,0),\ \vec j=(0,1,0),\ \vec k=(0,0,1)\); in \(\mathbb R^n\): \(\vec e_1,\dots,\vec e_n\).</li>
</ul>
\[|\vec v|=\sqrt{v_1^2+v_2^2+\dots+v_n^2}\]
<p>Pythagoras in \(n\) dimensions. Example: \(|(6,8)|=10\).</p>
<p>Vector between two points: \(\overrightarrow{AB}=B-A\). For \(A=(1,2)\), \(B=(4,-1)\): \(\overrightarrow{AB}=(3,-3)\), \(|\overrightarrow{AB}|=3\sqrt2\).</p>

<h2><span class="k">4</span>Collinearity and orthogonality</h2>
<div class="box def"><span class="t">Collinear \(\vec u\parallel\vec v\)</span>
They lie on parallel lines: \(\vec u=k\vec v\) for some \(k\ne0\).
<ul><li>\(k>0\): <b>codirectional</b> \(\vec u\uparrow\uparrow\vec v\);</li><li>\(k\lt0\): <b>opposite</b> \(\vec u\uparrow\downarrow\vec v\).</li></ul>
In practice: proportional coordinates. \((2,-4)\) and \((-1,2)\): \(k=-2\), opposite.</div>
<div class="box def"><span class="t">Orthogonal \(\vec u\perp\vec v\)</span>
Perpendicular (90°). Pythagoras holds:
\[|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2.\]
Example: \((2,2)\) and \((2,-2)\): \(|(4,0)|^2=16=8+8\) — orthogonal.</div>

<h2><span class="k">5</span>Operations</h2>
<ul>
<li><b>Addition:</b> \(\vec u+\vec v=(u_1+v_1,\dots,u_n+v_n)\). Geometrically: triangle rule (tip to tail) or parallelogram rule (common tail, diagonal).</li>
<li><b>Subtraction:</b> \(\vec u-\vec v=\vec u+(-\vec v)\). With a shared tail, \(\vec u-\vec v\) points <b>from the head of \(\vec v\) to the head of \(\vec u\)</b> (tip-to-tip rule).</li>
<li><b>Scalar multiple:</b> \(k\vec v=(kv_1,\dots,kv_n)\). \(|k|>1\) stretches, \(0\lt|k|\lt1\) shrinks, \(k\lt0\) reverses, \(k=0\) gives \(\vec 0\).</li>
</ul>
<p>Properties (same as matrices): commutativity, associativity, \(\vec u+\vec0=\vec u\), \(\vec u+(-\vec u)=\vec0\), \(k(\vec u+\vec v)=k\vec u+k\vec v\), \((k+m)\vec u=k\vec u+m\vec u\), \(k(m\vec u)=(km)\vec u\), \(1\cdot\vec u=\vec u\).</p>
<p>Only vectors of the same dimension can be added: \((3,-2,1)+(1,2)\) is undefined.</p>

<h2><span class="k">6</span>Linear combination and dependence</h2>
<p>A <b>linear combination</b> of \(\vec v_1,\dots,\vec v_k\): \(c_1\vec v_1+\dots+c_k\vec v_k\). E.g. \(3(1,0)-2(0,1)=(3,-2)\).</p>
<div class="box def"><span class="t">Dependence</span>
The vectors are <b>linearly dependent</b> if there are scalars \(c_1,\dots,c_k\), <b>not all zero</b>, with \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\).<br>
If only \(c_1=\dots=c_k=0\) works, they are <b>linearly independent</b>.</div>
<p>Geometry: two vectors are dependent \(\iff\) parallel; three vectors in \(\mathbb R^3\) are dependent \(\iff\) coplanar.</p>

<h2><span class="k">7</span>Testing via rank</h2>
<div class="box def"><span class="t">Theorem</span>
Stack \(\vec v_1,\dots,\vec v_k\) as rows of \(V\). Then
\[\operatorname{rank}V=k\iff\text{independent},\qquad \operatorname{rank}V\lt k\iff\text{dependent}.\]</div>
<p>Why: \(c_1\vec v_1+\dots+c_k\vec v_k=\vec0\) is a homogeneous system; a non-trivial solution exists exactly when the rows are not fully independent, which is what rank measures.</p>
<div class="box ex"><span class="t">Dependent</span>
\((1,2,3),(2,4,6),(1,0,2)\): rank 2 < 3. Indeed \(\vec v_2=2\vec v_1\), so \(2\vec v_1-\vec v_2+0\vec v_3=\vec0\).</div>
<div class="box ex"><span class="t">Independent</span>
\((1,2,3),(0,4,5),(1,0,2)\): \(\det=6\ne0\Rightarrow\) rank 3 — independent.</div>
<div class="box tip"><span class="t">Square case</span>\(k\) vectors in \(\mathbb R^k\): \(\det\ne0\iff\) full rank \(\iff\) independent.</div>

<h2><span class="k">8</span>Span</h2>
<div class="box def"><span class="t">Definition</span>
\[\operatorname{span}(\vec v_1,\dots,\vec v_k)=\{c_1\vec v_1+\dots+c_k\vec v_k:\ c_i\in\mathbb R\}\]
— everything you can reach by combining the vectors in every possible amount.</div>
<p>A span can be smaller than the whole space: \(\operatorname{span}((1,0,0),(0,1,0))=\{(x,y,0)\}\), the \(xy\)-plane in \(\mathbb R^3\).</p>
\[\dim\operatorname{span}(\vec v_1,\dots,\vec v_k)=\operatorname{rank}V.\]
<h3>How many vectors do you need for \(\mathbb R^n\)?</h3>
<ul>
<li><b>Necessity:</b> fewer than \(n\) vectors can never span \(\mathbb R^n\), since \(\operatorname{rank}V\le k\lt n\).</li>
<li><b>Exactly \(n\):</b> \(\det V\ne0\iff\operatorname{rank}V=n\iff\) spans \(\mathbb R^n\) \(\iff\) independent — all the same statement.</li>
<li><b>More than \(n\):</b> no determinant (not square), use rank. They may span but can’t be independent.</li>
</ul>
<div class="box ex"><span class="t">4 vectors in \(\mathbb R^3\)</span>
\((1,0,0),(0,1,0),(0,0,1),(1,1,1)\): rank 3 = \(n\), so they span \(\mathbb R^3\); but \(\vec v_4=\vec v_1+\vec v_2+\vec v_3\) — redundant.</div>

<h2><span class="k">9</span>Basis and coordinates</h2>
<p>A <b>basis</b> is a set of linearly independent vectors that span the space. Standard basis of \(\mathbb R^3\): \(\{\vec i,\vec j,\vec k\}\), and
\[\vec v=v_1\vec i+v_2\vec j+v_3\vec k.\]
The coefficients are the <b>coordinates</b>. Another basis gives the same vector different coordinates.</p>

<h2><span class="k">10</span>Orientation: right- and left-handed systems</h2>
<p>An ordered triple of independent vectors \((\vec a,\vec b,\vec c)\) in \(\mathbb R^3\) is</p>
<ul>
<li><b>right-handed</b> if \(\det[\vec a\ \vec b\ \vec c]>0\);</li>
<li><b>left-handed</b> if \(\det[\vec a\ \vec b\ \vec c]\lt0\).</li>
</ul>
<p>Right hand: index = \(\vec a\), middle = \(\vec b\), thumb = \(\vec c\). Swapping two vectors flips the sign and the orientation. Dependent vectors give \(\det=0\): no orientation.</p>
<p>Where it matters: physics (\(\vec F=q\,\vec v\times\vec B\), torque), 3D graphics (DirectX is left-handed, Z into the screen; OpenGL right-handed, Z out of the screen), robotics.</p>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>Vector = \(n\times1\) matrix = arrow; \(|\vec v|=\sqrt{\sum v_i^2}\); \(\overrightarrow{AB}=B-A\).</li>
<li>Collinear: \(\vec u=k\vec v\). Orthogonal: \(|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2\).</li>
<li>Dependent \(\iff\operatorname{rank}V\lt k\); \(\dim\operatorname{span}=\operatorname{rank}V\).</li>
<li>\(n\) vectors in \(\mathbb R^n\): \(\det\ne0\) means a basis. The sign of \(\det\) gives orientation.</li>
</ul>
`},
glossary:[
['Vector','Вектор','Вектор'],['Directed segment','Направленный отрезок','Бағытталған кесінді'],['Magnitude','Модуль (длина)','Модуль (ұзындық)'],['Direction','Направление','Бағыт'],['Free vector','Свободный вектор','Еркін вектор'],['Zero vector','Нулевой вектор','Нөлдік вектор'],['Unit vector','Единичный вектор','Бірлік вектор'],['Collinear','Коллинеарный','Коллинеар'],['Codirectional','Сонаправленный','Бағыттас'],['Opposite','Противоположно направленный','Қарама-қарсы бағытталған'],['Orthogonal','Ортогональный','Ортогональ'],['Coplanar','Компланарный','Компланар'],['Triangle rule','Правило треугольника','Үшбұрыш ережесі'],['Parallelogram rule','Правило параллелограмма','Параллелограмм ережесі'],['Tip-to-tip rule','Правило соединения концов','Ұшын ұшына қосу ережесі'],['Linear combination','Линейная комбинация','Сызықтық комбинация'],['Linearly dependent','Линейно зависимый','Сызықтық тәуелді'],['Linearly independent','Линейно независимый','Сызықтық тәуелсіз'],['Span','Линейная оболочка','Сызықтық қабық'],['Necessity','Необходимость','Қажеттілік'],['Sufficiency','Достаточность','Жеткіліктілік'],['Redundant','Избыточный (излишний)','Артық'],['Basis','Базис','Базис'],['Standard basis','Стандартный базис','Стандартты базис'],['Right-handed system','Правая система координат','Оң жүйе'],['Left-handed system','Левая система координат','Сол жүйе'],['Orientation','Ориентация','Ориентация (бағдар)'],['Origin','Начало координат','Координаталар басы']
],
practice:[
{q:{ru:String.raw`\(\vec p=(3,-2,1)\), \(\vec q=(1,4,-3)\). Найди \(2\vec p-3\vec q\) и \(\vec x\) из \(2\vec x-\vec q=\vec p\).`,en:String.raw`\(\vec p=(3,-2,1)\), \(\vec q=(1,4,-3)\). Find \(2\vec p-3\vec q\) and \(\vec x\) from \(2\vec x-\vec q=\vec p\).`},
 a:{ru:String.raw`\(2\vec p-3\vec q=(3,-16,11)\); \(\vec x=\tfrac12(\vec p+\vec q)=(2,1,-1)\).`,en:String.raw`\(2\vec p-3\vec q=(3,-16,11)\); \(\vec x=\tfrac12(\vec p+\vec q)=(2,1,-1)\).`}},
{q:{ru:String.raw`Найди длины: \((3,4)\), \((1,2,2)\), \((0,-5,12)\), \((1,1,1,1)\).`,en:String.raw`Find the magnitudes: \((3,4)\), \((1,2,2)\), \((0,-5,12)\), \((1,1,1,1)\).`},
 a:{ru:String.raw`\(5,\ 3,\ 13,\ 2\).`,en:String.raw`\(5,\ 3,\ 13,\ 2\).`}},
{q:{ru:String.raw`\(A=(2,-1)\), \(B=(5,3)\). Найди \(\overrightarrow{AB}\) и \(|\overrightarrow{AB}|\).`,en:String.raw`\(A=(2,-1)\), \(B=(5,3)\). Find \(\overrightarrow{AB}\) and \(|\overrightarrow{AB}|\).`},
 a:{ru:String.raw`\((3,4)\), длина 5.`,en:String.raw`\((3,4)\), length 5.`}},
{q:{ru:String.raw`Коллинеарны ли: (i) \((2,-4)\) и \((-1,2)\); (ii) \((3,6,-9)\) и \((1,2,-3)\); (iii) \((1,2)\) и \((2,3)\)? При каком \(t\) коллинеарны \((t,4)\) и \((3,6)\)?`,en:String.raw`Collinear? (i) \((2,-4)\), \((-1,2)\); (ii) \((3,6,-9)\), \((1,2,-3)\); (iii) \((1,2)\), \((2,3)\). For which \(t\) are \((t,4)\) and \((3,6)\) collinear?`},
 a:{ru:String.raw`(i) да, \(k=-2\), противоположные; (ii) да, \(k=3\), сонаправленные; (iii) нет. \(t/3=4/6\Rightarrow t=2\).`,en:String.raw`(i) yes, \(k=-2\), opposite; (ii) yes, \(k=3\), codirectional; (iii) no. \(t/3=4/6\Rightarrow t=2\).`}},
{q:{ru:String.raw`Через \(|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2\) найди \(x\), при котором \((x,3)\perp(4,-2)\).`,en:String.raw`Using \(|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2\), find \(x\) such that \((x,3)\perp(4,-2)\).`},
 a:{ru:String.raw`\((x+4)^2+1=x^2+9+20\Rightarrow 8x+17=29\Rightarrow x=1.5\).`,en:String.raw`\((x+4)^2+1=x^2+9+20\Rightarrow 8x+17=29\Rightarrow x=1.5\).`}},
{q:{ru:String.raw`Зависимы ли: (i) \((1,2),(3,6)\); (ii) \((2,-1,3),(1,0,1),(0,1,1)\); (iii) \((1,1,0),(0,1,1),(1,2,1)\)?`,en:String.raw`Dependent? (i) \((1,2),(3,6)\); (ii) \((2,-1,3),(1,0,1),(0,1,1)\); (iii) \((1,1,0),(0,1,1),(1,2,1)\).`},
 a:{ru:String.raw`(i) ранг 1 — зависимы, коллинеарны; (ii) ранг 3 — независимы; (iii) ранг 2 — зависимы, компланарны (\(\vec v_3=\vec v_1+\vec v_2\)).`,en:String.raw`(i) rank 1 — dependent, collinear; (ii) rank 3 — independent; (iii) rank 2 — dependent, coplanar (\(\vec v_3=\vec v_1+\vec v_2\)).`}},
{q:{ru:String.raw`Найди \(c_1,c_2\): \(c_1(1,0)+c_2(1,1)=(3,-2)\). И \(c_1,c_2,c_3\): \(c_1(1,0,0)+c_2(0,1,0)+c_3(1,1,1)=(4,3,2)\).`,en:String.raw`Find \(c_1,c_2\): \(c_1(1,0)+c_2(1,1)=(3,-2)\). And \(c_1,c_2,c_3\): \(c_1(1,0,0)+c_2(0,1,0)+c_3(1,1,1)=(4,3,2)\).`},
 a:{ru:String.raw`\(c_2=-2,\ c_1=5\). Второе: \(c_3=2,\ c_2=1,\ c_1=2\).`,en:String.raw`\(c_2=-2,\ c_1=5\). Second: \(c_3=2,\ c_2=1,\ c_1=2\).`}},
{q:{ru:String.raw`Порождают ли \(\mathbb R^3\) векторы \((1,2,1),(0,1,1),(2,0,-1)\)? При каком \(m\) зависимы \((1,2,3),(2,1,m),(1,1,1)\)?`,en:String.raw`Do \((1,2,1),(0,1,1),(2,0,-1)\) span \(\mathbb R^3\)? For which \(m\) are \((1,2,3),(2,1,m),(1,1,1)\) dependent?`},
 a:{ru:String.raw`\(\det=1\ne0\) — да, это базис. Во втором \(\det=m\), зависимы при \(m=0\).`,en:String.raw`\(\det=1\ne0\) — yes, a basis. In the second, \(\det=m\): dependent for \(m=0\).`}},
{q:{ru:String.raw`Ориентация тройки \(\vec a=(1,2,0)\), \(\vec b=(0,1,1)\), \(\vec c=(2,0,1)\)? А тройки \((\vec b,\vec a,\vec c)\)?`,en:String.raw`Orientation of \(\vec a=(1,2,0)\), \(\vec b=(0,1,1)\), \(\vec c=(2,0,1)\)? And of \((\vec b,\vec a,\vec c)\)?`},
 a:{ru:String.raw`\(\det[\vec a\ \vec b\ \vec c]=5>0\) — правая. После перестановки \(\vec a,\vec b\): \(-5\) — левая.`,en:String.raw`\(\det[\vec a\ \vec b\ \vec c]=5>0\) — right-handed. After swapping \(\vec a,\vec b\): \(-5\) — left-handed.`}},
{q:{ru:String.raw`Могут ли 2 вектора породить \(\mathbb R^3\)? Образуют ли базис \(\mathbb R^2\): (i) \((1,2),(2,4)\); (ii) \((1,1),(1,-1)\)?`,en:String.raw`Can 2 vectors span \(\mathbb R^3\)? Basis of \(\mathbb R^2\)? (i) \((1,2),(2,4)\); (ii) \((1,1),(1,-1)\).`},
 a:{ru:String.raw`Нет: ранг ≤ 2 < 3. (i) ранг 1 — не базис; (ii) ранг 2 (\(\det=-2\)) — базис.`,en:String.raw`No: rank ≤ 2 < 3. (i) rank 1 — not a basis; (ii) rank 2 (\(\det=-2\)) — a basis.`}}
]
});
