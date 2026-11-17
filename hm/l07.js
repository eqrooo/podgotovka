registerTopic({
subject:'hm', id:'l07', num:7, module:2,
title:{ru:'Скалярное, внешнее, векторное и смешанное произведения', en:'Inner, outer, cross and mixed products'},
summary:{ru:'Углы и проекции через скалярное произведение, внешнее произведение как матрица, векторное — площадь и перпендикуляр, смешанное — объём и компланарность.',
         en:'Angles and projections via the inner product, the outer product as a matrix, the cross product for area and normals, the mixed product for volume and coplanarity.'},
sources:['Higher_Mathematics_7 (1).pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Скалярное (внутреннее) произведение</h2>
<div class="box def"><span class="t">Определение</span>
\[\vec u\cdot\vec v=u_1v_1+u_2v_2+\dots+u_nv_n=\vec u^{\,T}\vec v.\]
Результат — <b>число</b>. В матричной записи это строка \(1\times n\) на столбец \(n\times1\) — то самое «строка на столбец» из лекции 1.</div>
<p>Геометрическая формула:</p>
\[\vec u\cdot\vec v=|\vec u|\,|\vec v|\cos\theta\quad\Longrightarrow\quad \cos\theta=\frac{\vec u\cdot\vec v}{|\vec u|\,|\vec v|}.\]
<p>Свойства: \(\vec u\cdot\vec v=\vec v\cdot\vec u\); \(\vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w\); \((k\vec u)\cdot\vec v=k(\vec u\cdot\vec v)\); \(\vec v\cdot\vec v=|\vec v|^2\).</p>
<div class="box def"><span class="t">Критерий ортогональности</span>
\[\vec u\perp\vec v\iff\vec u\cdot\vec v=0.\]
Знак тоже информативен: \(>0\) — угол острый, \(\lt0\) — тупой.</div>
<div class="box ex"><span class="t">Пример</span>
\(\vec a=(1,2,2)\), \(\vec b=(3,0,4)\): \(\vec a\cdot\vec b=3+0+8=11\), \(|\vec a|=3\), \(|\vec b|=5\), \(\cos\theta=\tfrac{11}{15}\), \(\theta\approx42.8^\circ\).</div>

<h2><span class="k">2</span>Проекции</h2>
<ul>
<li><b>Скалярная проекция</b> \(\vec u\) на \(\vec v\) (длина «тени» со знаком): \(\operatorname{comp}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{|\vec v|}\).</li>
<li><b>Векторная проекция</b>: \(\operatorname{proj}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\,\vec v\).</li>
</ul>
<div class="box ex"><span class="t">Пример</span>\(\vec u=(3,4)\), \(\vec v=(1,0)\): скалярная проекция 3, векторная \((3,0)\) — просто \(x\)-часть вектора.</div>
<p>Остаток \(\vec u-\operatorname{proj}_{\vec v}\vec u\) всегда перпендикулярен \(\vec v\).</p>

<h2><span class="k">3</span>Внешнее (тензорное) произведение</h2>
<div class="box def"><span class="t">Определение</span>
\[\vec u\otimes\vec v=\vec u\,\vec v^{\,T}\]
— столбец \(n\times1\) на строку \(1\times m\), результат — <b>матрица \(n\times m\)</b> с элементами \(u_iv_j\).</div>
\[\begin{pmatrix}1\\2\\3\end{pmatrix}\begin{pmatrix}4&5\end{pmatrix}=\begin{pmatrix}4&5\\8&10\\12&15\end{pmatrix}.\]
<p>Ранг такой матрицы всегда 1 (если векторы ненулевые): все строки пропорциональны \(\vec v^{\,T}\). Сравни: внутреннее \(\vec u^{\,T}\vec v\) — число, внешнее \(\vec u\vec v^{\,T}\) — матрица. Порядок множителей опять решает всё.</p>
<p>Смысл: матрица \(\vec u\vec v^{\,T}\) действует на \(\vec x\) как \((\vec u\vec v^{\,T})\vec x=\vec u(\vec v\cdot\vec x)\) — «измеряет» \(\vec x\) вдоль \(\vec v\) и <b>перенаправляет</b> результат вдоль \(\vec u\). Всё пространство проходит через одно направление — «узкое место» ранга 1.</p>

<h2><span class="k">4</span>Векторное произведение (только в \(\mathbb R^3\))</h2>
<div class="box def"><span class="t">Формула через определитель</span>
\[\vec u\times\vec v=\begin{vmatrix}\vec i&\vec j&\vec k\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix}=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1).\]
Результат — <b>вектор</b>.</div>
<ul>
<li>Направление: перпендикулярен и \(\vec u\), и \(\vec v\); тройка \((\vec u,\vec v,\vec u\times\vec v)\) — правая (лекция 5).</li>
<li>Длина: \(|\vec u\times\vec v|=|\vec u|\,|\vec v|\sin\theta\) = <b>площадь параллелограмма</b> на \(\vec u,\vec v\). Площадь треугольника — половина.</li>
<li><b>Антикоммутативность:</b> \(\vec v\times\vec u=-\vec u\times\vec v\). Отсюда \(\vec u\times\vec u=\vec0\).</li>
<li><b>Критерий коллинеарности:</b> \(\vec u\parallel\vec v\iff\vec u\times\vec v=\vec0\).</li>
<li>Базис: \(\vec i\times\vec j=\vec k,\ \vec j\times\vec k=\vec i,\ \vec k\times\vec i=\vec j\).</li>
</ul>
<div class="box ex"><span class="t">Пример</span>
\(\vec u=(2,-1,3)\), \(\vec v=(1,4,0)\):
\[\vec u\times\vec v=\big((-1)\cdot0-3\cdot4,\ 3\cdot1-2\cdot0,\ 2\cdot4-(-1)\cdot1\big)=(-12,\ 3,\ 9).\]
Проверка: \((-12,3,9)\cdot(2,-1,3)=-24-3+27=0\) ✓. Площадь параллелограмма \(=\sqrt{144+9+81}=\sqrt{234}=3\sqrt{26}\).</div>

<h2><span class="k">5</span>Смешанное (тройное) произведение</h2>
<div class="box def"><span class="t">Определение</span>
\[(\vec a,\vec b,\vec c)=\vec a\cdot(\vec b\times\vec c)=\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}.\]
Результат — <b>число</b>, это тот самый \(\det[\vec a\ \vec b\ \vec c]\) из лекции 5.</div>
<ul>
<li>\(|(\vec a,\vec b,\vec c)|\) = <b>объём параллелепипеда</b> на трёх векторах. Объём тетраэдра — \(\tfrac16\) от него.</li>
<li>Знак = ориентация: \(>0\) — правая тройка, \(\lt0\) — левая.</li>
<li><b>Критерий компланарности:</b> \(\vec a,\vec b,\vec c\) компланарны \(\iff(\vec a,\vec b,\vec c)=0\) (объём ноль — значит лежат в одной плоскости, то есть линейно зависимы).</li>
<li>Циклическая перестановка не меняет значение, перестановка двух векторов меняет знак.</li>
</ul>
<div class="box ex"><span class="t">Пример</span>
\(\vec u=(2,-1,3),\ \vec v=(1,4,0),\ \vec w=(1,0,1)\): \(\det=-3\). Объём параллелепипеда 3, тройка левая.<br>
\((1,2,3),(0,1,1),(1,3,4)\): \(\det=0\) — компланарны (третий = первый + второй).</div>

<h2><span class="k">∑</span>Сравнительная таблица</h2>
<div class="tw"><table><thead><tr><th>Произведение</th><th>Формула</th><th>Результат</th><th>Главное применение</th></tr></thead><tbody>
<tr><td>Скалярное</td><td>\(\vec u^{\,T}\vec v\)</td><td>число</td><td>угол, проекция, \(\perp\iff0\)</td></tr>
<tr><td>Внешнее</td><td>\(\vec u\vec v^{\,T}\)</td><td>матрица ранга 1</td><td>построение матриц, перенаправление</td></tr>
<tr><td>Векторное</td><td>\(\det\) с \(\vec i,\vec j,\vec k\)</td><td>вектор (\(\mathbb R^3\))</td><td>площадь, нормаль, \(\parallel\iff\vec0\)</td></tr>
<tr><td>Смешанное</td><td>\(\det[\vec a\ \vec b\ \vec c]\)</td><td>число</td><td>объём, ориентация, компланарность</td></tr>
</tbody></table></div>
`,
en:String.raw`
<h2><span class="k">1</span>Inner (dot) product</h2>
<div class="box def"><span class="t">Definition</span>
\[\vec u\cdot\vec v=u_1v_1+u_2v_2+\dots+u_nv_n=\vec u^{\,T}\vec v.\]
The result is a <b>number</b>. As matrices: a \(1\times n\) row times an \(n\times1\) column — the row-by-column rule from Lecture 1.</div>
<p>Geometric form:</p>
\[\vec u\cdot\vec v=|\vec u|\,|\vec v|\cos\theta\quad\Longrightarrow\quad \cos\theta=\frac{\vec u\cdot\vec v}{|\vec u|\,|\vec v|}.\]
<p>Properties: symmetric, distributive, \((k\vec u)\cdot\vec v=k(\vec u\cdot\vec v)\), \(\vec v\cdot\vec v=|\vec v|^2\).</p>
<div class="box def"><span class="t">Orthogonality test</span>
\[\vec u\perp\vec v\iff\vec u\cdot\vec v=0.\]
The sign tells more: \(>0\) acute angle, \(\lt0\) obtuse.</div>
<div class="box ex"><span class="t">Example</span>
\(\vec a=(1,2,2)\), \(\vec b=(3,0,4)\): \(\vec a\cdot\vec b=11\), \(|\vec a|=3\), \(|\vec b|=5\), \(\cos\theta=\tfrac{11}{15}\), \(\theta\approx42.8^\circ\).</div>

<h2><span class="k">2</span>Projections</h2>
<ul>
<li><b>Scalar projection</b> of \(\vec u\) onto \(\vec v\): \(\operatorname{comp}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{|\vec v|}\).</li>
<li><b>Vector projection</b>: \(\operatorname{proj}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\,\vec v\).</li>
</ul>
<div class="box ex"><span class="t">Example</span>\(\vec u=(3,4)\), \(\vec v=(1,0)\): scalar projection 3, vector projection \((3,0)\).</div>
<p>The remainder \(\vec u-\operatorname{proj}_{\vec v}\vec u\) is always perpendicular to \(\vec v\).</p>

<h2><span class="k">3</span>Outer (tensor) product</h2>
<div class="box def"><span class="t">Definition</span>
\[\vec u\otimes\vec v=\vec u\,\vec v^{\,T}\]
— an \(n\times1\) column times a \(1\times m\) row: an <b>\(n\times m\) matrix</b> with entries \(u_iv_j\).</div>
\[\begin{pmatrix}1\\2\\3\end{pmatrix}\begin{pmatrix}4&5\end{pmatrix}=\begin{pmatrix}4&5\\8&10\\12&15\end{pmatrix}.\]
<p>Its rank is always 1 (for non-zero vectors). Compare: inner \(\vec u^{\,T}\vec v\) is a number, outer \(\vec u\vec v^{\,T}\) is a matrix — the order of factors decides everything.</p>
<p>Meaning: \((\vec u\vec v^{\,T})\vec x=\vec u(\vec v\cdot\vec x)\) measures \(\vec x\) along \(\vec v\) and <b>redirects</b> the result along \(\vec u\). Everything passes through one direction: a rank-1 bottleneck.</p>

<h2><span class="k">4</span>Cross product (\(\mathbb R^3\) only)</h2>
<div class="box def"><span class="t">Determinant formula</span>
\[\vec u\times\vec v=\begin{vmatrix}\vec i&\vec j&\vec k\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix}=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1).\]
The result is a <b>vector</b>.</div>
<ul>
<li>Direction: perpendicular to both; \((\vec u,\vec v,\vec u\times\vec v)\) is right-handed.</li>
<li>Length: \(|\vec u\times\vec v|=|\vec u|\,|\vec v|\sin\theta\) = <b>area of the parallelogram</b>. Triangle: half of it.</li>
<li><b>Anti-commutative:</b> \(\vec v\times\vec u=-\vec u\times\vec v\), so \(\vec u\times\vec u=\vec0\).</li>
<li><b>Collinearity test:</b> \(\vec u\parallel\vec v\iff\vec u\times\vec v=\vec0\).</li>
<li>Basis: \(\vec i\times\vec j=\vec k,\ \vec j\times\vec k=\vec i,\ \vec k\times\vec i=\vec j\).</li>
</ul>
<div class="box ex"><span class="t">Example</span>
\(\vec u=(2,-1,3)\), \(\vec v=(1,4,0)\): \(\vec u\times\vec v=(-12,\ 3,\ 9)\).
Check: \((-12,3,9)\cdot(2,-1,3)=0\) ✓. Parallelogram area \(=\sqrt{234}=3\sqrt{26}\).</div>

<h2><span class="k">5</span>Mixed (triple) product</h2>
<div class="box def"><span class="t">Definition</span>
\[(\vec a,\vec b,\vec c)=\vec a\cdot(\vec b\times\vec c)=\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}.\]
A <b>number</b>: the same \(\det[\vec a\ \vec b\ \vec c]\) as in Lecture 5.</div>
<ul>
<li>\(|(\vec a,\vec b,\vec c)|\) = <b>volume of the parallelepiped</b>; a tetrahedron is \(\tfrac16\) of it.</li>
<li>Sign = orientation: \(>0\) right-handed, \(\lt0\) left-handed.</li>
<li><b>Coplanarity test:</b> coplanar \(\iff(\vec a,\vec b,\vec c)=0\) (zero volume = linearly dependent).</li>
<li>Cyclic shifts keep the value; swapping two vectors flips the sign.</li>
</ul>
<div class="box ex"><span class="t">Example</span>
\((2,-1,3),(1,4,0),(1,0,1)\): \(\det=-3\) — volume 3, left-handed.<br>
\((1,2,3),(0,1,1),(1,3,4)\): \(\det=0\) — coplanar (third = first + second).</div>

<h2><span class="k">∑</span>Comparison table</h2>
<div class="tw"><table><thead><tr><th>Product</th><th>Formula</th><th>Result</th><th>Main use</th></tr></thead><tbody>
<tr><td>Inner</td><td>\(\vec u^{\,T}\vec v\)</td><td>number</td><td>angle, projection, \(\perp\iff0\)</td></tr>
<tr><td>Outer</td><td>\(\vec u\vec v^{\,T}\)</td><td>rank-1 matrix</td><td>building matrices, redirecting</td></tr>
<tr><td>Cross</td><td>\(\det\) with \(\vec i,\vec j,\vec k\)</td><td>vector (\(\mathbb R^3\))</td><td>area, normal, \(\parallel\iff\vec0\)</td></tr>
<tr><td>Mixed</td><td>\(\det[\vec a\ \vec b\ \vec c]\)</td><td>number</td><td>volume, orientation, coplanarity</td></tr>
</tbody></table></div>
`},
glossary:[
['Inner product','Скалярное произведение','Скаляр көбейтінді'],['Vector projection','Векторная проекция','Векторлық проекция'],['Scalar projection','Скалярная проекция','Скалярлық проекция'],['Orthogonality test','Критерий ортогональности','Ортогональдік критерийі'],['Outer product','Внешнее (тензорное) произведение','Сыртқы көбейтінді'],['Redirect','Перенаправлять','Бағытын өзгерту'],['Bottleneck','Узкое место (ограничение)','Тар өткел'],['Cross product','Векторное произведение','Векторлық көбейтінді'],['Anti-commutative','Антикоммутативный','Антикоммутативті'],['Parallelogram','Параллелограмм','Параллелограмм'],['Collinearity test','Критерий коллинеарности','Коллинеарлық критерийі'],['Mixed product','Смешанное произведение','Аралас көбейтінді'],['Triple product','Тройное произведение','Үштік көбейтінді'],['Parallelepiped','Параллелепипед','Параллелепипед'],['Coplanarity test','Критерий компланарности','Компланарлық критерийі'],['Volume','Объём','Көлем']
],
practice:[
{q:{ru:String.raw`Найди угол между \(\vec a=(1,2,2)\) и \(\vec b=(3,0,4)\).`,en:String.raw`Find the angle between \(\vec a=(1,2,2)\) and \(\vec b=(3,0,4)\).`},a:{ru:String.raw`\(\cos\theta=\tfrac{11}{3\cdot5}=\tfrac{11}{15}\), \(\theta=\arccos\tfrac{11}{15}\approx42.8^\circ\).`,en:String.raw`\(\cos\theta=\tfrac{11}{15}\), \(\theta\approx42.8^\circ\).`}},
{q:{ru:String.raw`Ортогональны ли \((2,3)\) и \((3,-2)\)? Проверь двумя способами (скалярное и Пифагор из лекции 5).`,en:String.raw`Are \((2,3)\) and \((3,-2)\) orthogonal? Check two ways (dot product and Lecture 5’s Pythagoras test).`},a:{ru:String.raw`\(6-6=0\) — да. \(|(5,1)|^2=26=13+13\) ✓.`,en:String.raw`\(6-6=0\) — yes. \(|(5,1)|^2=26=13+13\) ✓.`}},
{q:{ru:String.raw`Найди скалярную и векторную проекции \(\vec u=(3,4)\) на \(\vec v=(1,0)\).`,en:String.raw`Find the scalar and vector projections of \(\vec u=(3,4)\) onto \(\vec v=(1,0)\).`},a:{ru:String.raw`\(3\) и \((3,0)\).`,en:String.raw`\(3\) and \((3,0)\).`}},
{q:{ru:String.raw`Вычисли внешнее произведение \((1,2,3)\otimes(4,5)\). Какой у него ранг?`,en:String.raw`Compute the outer product \((1,2,3)\otimes(4,5)\). What is its rank?`},a:{ru:String.raw`\(\begin{pmatrix}4&5\\8&10\\12&15\end{pmatrix}\), ранг 1.`,en:String.raw`\(\begin{pmatrix}4&5\\8&10\\12&15\end{pmatrix}\), rank 1.`}},
{q:{ru:String.raw`Найди \((2,-1,3)\times(1,4,0)\) и площадь параллелограмма на этих векторах.`,en:String.raw`Find \((2,-1,3)\times(1,4,0)\) and the area of the parallelogram they span.`},a:{ru:String.raw`\((-12,3,9)\), площадь \(3\sqrt{26}\approx15.3\).`,en:String.raw`\((-12,3,9)\), area \(3\sqrt{26}\approx15.3\).`}},
{q:{ru:String.raw`Коллинеарны ли \((1,2,3)\) и \((2,4,6)\)? Используй векторное произведение.`,en:String.raw`Are \((1,2,3)\) and \((2,4,6)\) collinear? Use the cross product.`},a:{ru:String.raw`\(\vec u\times\vec v=\vec 0\) — коллинеарны.`,en:String.raw`\(\vec u\times\vec v=\vec 0\) — collinear.`}},
{q:{ru:String.raw`Найди объём параллелепипеда на \((2,-1,3),(1,4,0),(1,0,1)\) и ориентацию тройки. Компланарны ли \((1,2,3),(0,1,1),(1,3,4)\)?`,en:String.raw`Find the volume of the parallelepiped on \((2,-1,3),(1,4,0),(1,0,1)\) and the orientation. Are \((1,2,3),(0,1,1),(1,3,4)\) coplanar?`},a:{ru:String.raw`\(\det=-3\): объём 3, тройка левая. Второе: \(\det=0\) — компланарны.`,en:String.raw`\(\det=-3\): volume 3, left-handed. Second: \(\det=0\) — coplanar.`}},
{q:{ru:String.raw`Найди \((1,1,0)\times(0,1,1)\) и проверь, что результат перпендикулярен обоим.`,en:String.raw`Find \((1,1,0)\times(0,1,1)\) and check that it is perpendicular to both.`},a:{ru:String.raw`\((1,-1,1)\); \((1,-1,1)\cdot(1,1,0)=0\), \((1,-1,1)\cdot(0,1,1)=0\) ✓.`,en:String.raw`\((1,-1,1)\); dot products with both are 0 ✓.`}}
]
});
