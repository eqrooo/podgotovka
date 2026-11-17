registerTopic({
subject:'hm', id:'l01', num:1, module:1,
title:{ru:'Матрицы и определители', en:'Matrices and determinants'},
summary:{ru:'Что такое матрица, какие бывают, как их складывать и умножать, транспонирование и определители любого порядка.',
         en:'What a matrix is, its special types, addition and multiplication, transposition, and determinants of any order.'},
sources:['Higher_Mathematics_1.pdf','Higher_Mathematics_1_sem.pdf','Higher_Mathematics_1_D.pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Что такое матрица</h2>
<p><b>Матрица</b> — это прямоугольная таблица чисел из \(n\) строк и \(m\) столбцов, взятая в скобки. Её <b>размер</b> пишут как \(n\times m\): сначала строки, потом столбцы.</p>
\[A_{n\times m}=[a_{ij}]=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1m}\\a_{21}&a_{22}&\dots&a_{2m}\\\vdots&\vdots&\ddots&\vdots\\a_{n1}&a_{n2}&\dots&a_{nm}\end{pmatrix}\]
<p>Элемент \(a_{ij}\) стоит в строке \(i\) и столбце \(j\). Порядок индексов всегда «строка, столбец».</p>
<div class="box ex"><span class="t">Пример</span>
\(B=\begin{pmatrix}2&0&-5\\1&8&3\end{pmatrix}\): 2 строки, 3 столбца, размер \(2\times3\). Элементы: \(b_{13}=-5\), \(b_{22}=8\).</div>
<p>Элементами могут быть не только числа: в продвинутой математике бывают матрицы из комплексных чисел, многочленов, функций и даже других матриц.</p>
<div class="box def"><span class="t">Равенство матриц</span>
\(A=B\) тогда и только тогда, когда (1) у них одинаковый размер и (2) все соответствующие элементы равны: \(a_{ij}=b_{ij}\) для всех \(i,j\).</div>

<h2><span class="k">2</span>Диагонали</h2>
<ul>
<li><b>Главная диагональ</b> — элементы \(a_{ii}\) (номер строки = номеру столбца), идёт из левого верхнего угла в правый нижний.</li>
<li><b>Побочная диагональ</b> — элементы \(a_{i,\,n+1-i}\), из правого верхнего угла в левый нижний. Имеет смысл только для квадратной матрицы.</li>
</ul>

<h2><span class="k">3</span>Особые виды матриц</h2>
<div class="tw"><table><thead><tr><th>Вид</th><th>Условие</th></tr></thead><tbody>
<tr><td>Квадратная</td><td>строк столько же, сколько столбцов: \(n=m\)</td></tr>
<tr><td>Матрица-строка</td><td>одна строка, размер \(1\times m\)</td></tr>
<tr><td>Матрица-столбец</td><td>один столбец, размер \(n\times 1\)</td></tr>
<tr><td>Верхнетреугольная</td><td>под главной диагональю нули: \(a_{ij}=0\) при \(i>j\)</td></tr>
<tr><td>Нижнетреугольная</td><td>над главной диагональю нули: \(a_{ij}=0\) при \(i\lt j\)</td></tr>
<tr><td>Диагональная</td><td>квадратная, всё вне главной диагонали равно нулю</td></tr>
<tr><td>Единичная \(I\) (или \(E\))</td><td>диагональная с единицами на диагонали</td></tr>
<tr><td>Нулевая \(O\)</td><td>все элементы равны нулю</td></tr>
</tbody></table></div>
\[I_3=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}\]
<div class="box tip"><span class="t">Запомни</span>Матрица, которая одновременно верхне- и нижнетреугольная, — диагональная.</div>

<h2><span class="k">4</span>Сложение, вычитание, умножение на число</h2>
<p>Складывать и вычитать можно <span class="hl">только матрицы одного размера</span>. Действие делается поэлементно:</p>
\[C=A\pm B,\qquad c_{ij}=a_{ij}\pm b_{ij}.\]
\[\begin{pmatrix}5&-2\\3&1\end{pmatrix}+\begin{pmatrix}0&4\\-1&6\end{pmatrix}=\begin{pmatrix}5&2\\2&7\end{pmatrix}\]
<p>Свойства: \(A+O=A\), \(A+(-A)=O\).</p>
<p><b>Умножение на число</b> \(k\): умножаем каждый элемент, \(kA=[k\,a_{ij}]\).</p>
\[3\begin{pmatrix}1&-3\\2&0\end{pmatrix}=\begin{pmatrix}3&-9\\6&0\end{pmatrix}\]

<h2><span class="k">5</span>Умножение матриц</h2>
<p>Умножение матриц <b>не поэлементное</b>. Элемент \(c_{ij}\) — это сумма произведений \(i\)-й строки \(A\) на \(j\)-й столбец \(B\) («строка на столбец»).</p>
<div class="box def"><span class="t">Правило домино</span>
Произведение \(AB\) определено, только если число столбцов \(A\) равно числу строк \(B\):
\[(n\times \boxed{k})\cdot(\boxed{k}\times m)=(n\times m).\]
Внутренние числа должны совпасть, внешние дают размер результата.</div>
<div class="box ex"><span class="t">Разбор</span>
\(A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}_{2\times3}\), \(B=\begin{pmatrix}7&8\\9&1\\2&3\end{pmatrix}_{3\times2}\). Внутренние 3 = 3, результат \(2\times2\).
\[\begin{aligned}c_{11}&=1\cdot7+2\cdot9+3\cdot2=31, & c_{12}&=1\cdot8+2\cdot1+3\cdot3=19,\\ c_{21}&=4\cdot7+5\cdot9+6\cdot2=85, & c_{22}&=4\cdot8+5\cdot1+6\cdot3=55.\end{aligned}\]
\(AB=\begin{pmatrix}31&19\\85&55\end{pmatrix}\).</div>
<div class="box warn"><span class="t">Главная ловушка</span>
В общем случае \(AB\ne BA\). Умножение матриц <b>некоммутативно</b>. Иногда \(BA\) вообще не определено из-за размеров.</div>
<p>Что выполняется (если размеры подходят):</p>
<ul>
<li>ассоциативность: \((AB)C=A(BC)\);</li>
<li>дистрибутивность: \(A(B+C)=AB+AC\), \((A+B)C=AC+BC\);</li>
<li>единичная матрица: \(AI=IA=A\).</li>
</ul>
<p><b>Деления матриц нет.</b> Вместо «\(A/B\)» умножают на обратную матрицу: \(AB^{-1}\) или \(B^{-1}A\) (если \(B^{-1}\) существует — тема лекции 2).</p>
<p><b>Степень</b> \(A^k\) определена только для квадратных матриц: \(A^2=A\cdot A\), \(A^3=A\cdot A\cdot A\) и т. д.</p>

<h2><span class="k">6</span>Транспонирование</h2>
<p>\(A^T\): строки становятся столбцами. Размер меняется с \(n\times m\) на \(m\times n\).</p>
\[A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}\ \Longrightarrow\ A^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}\]
<p>Свойства:</p>
<ol>
<li>\((A^T)^T=A\)</li>
<li>\((kA)^T=kA^T\)</li>
<li>\((A+B)^T=A^T+B^T\)</li>
<li>\((AB)^T=B^TA^T\) — <span class="hl">порядок меняется!</span></li>
</ol>
<div class="box warn"><span class="t">Частая ошибка</span>Писать \((AB)^T=A^TB^T\). Это неверно: множители меняются местами.</div>
<h3>Симметричные и кососимметричные</h3>
<ul>
<li><b>Симметричная:</b> \(A^T=A\), то есть \(a_{ij}=a_{ji}\) — зеркальна относительно главной диагонали.</li>
<li><b>Кососимметричная:</b> \(A^T=-A\), то есть \(a_{ij}=-a_{ji}\). Отсюда на диагонали только нули: \(a_{ii}=-a_{ii}\Rightarrow a_{ii}=0\).</li>
</ul>
\[\begin{pmatrix}2&5&-1\\5&0&3\\-1&3&4\end{pmatrix}\ \text{симметричная},\qquad \begin{pmatrix}0&4&-2\\-4&0&1\\2&-1&0\end{pmatrix}\ \text{кососимметричная}.\]
<div class="box tip"><span class="t">Полезный факт</span>Любая квадратная \(M\) раскладывается в сумму симметричной и кососимметричной: \(M=\tfrac12(M+M^T)+\tfrac12(M-M^T)\).</div>

<h2><span class="k">7</span>Определитель: порядки 1 и 2</h2>
<p><b>Определитель</b> (детерминант) — это одно число, посчитанное по квадратной матрице. Обозначения: \(\det A\) или \(|A|\). Это диагностический инструмент: если \(\det A=0\), матрица <b>вырожденная</b> и обратной у неё нет.</p>
<p>Порядок 1: \(\det[-5]=-5\).</p>
<p>Порядок 2: произведение главной диагонали минус произведение побочной.</p>
\[\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=a_{11}a_{22}-a_{12}a_{21},\qquad \begin{vmatrix}3&4\\2&5\end{vmatrix}=15-8=7.\]

<h2><span class="k">8</span>Определитель 3-го порядка</h2>
<h3>Правило треугольников</h3>
\[\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}.\]
<p>Три слагаемых с плюсом: главная диагональ и два треугольника с основанием, параллельным ей. Три с минусом: побочная диагональ и два треугольника, параллельных ей.</p>
<h3>Правило Саррюса</h3>
<p>Допиши справа первые два столбца. Три диагонали вниз-вправо (↘) идут с плюсом, три диагонали вверх-вправо (↗) — с минусом. Можно наоборот дописать снизу первые две строки — получатся те же шесть произведений.</p>
<div class="box ex"><span class="t">Разбор</span>
\[\det A=\begin{vmatrix}1&2&3\\0&4&5\\1&0&2\end{vmatrix}\]
Плюс: \(1\cdot4\cdot2+2\cdot5\cdot1+3\cdot0\cdot0=8+10+0=18\).<br>
Минус: \(1\cdot4\cdot3+0\cdot5\cdot1+2\cdot0\cdot2=12\).<br>
Итого \(\det A=18-12=6\).</div>
<div class="box warn"><span class="t">Важно</span>Треугольники и Саррюс работают <b>только для порядка 3</b>. Для 4×4 и больше — только разложение Лапласа.</div>

<h2><span class="k">9</span>Миноры, алгебраические дополнения, разложение Лапласа</h2>
<ul>
<li><b>Минор</b> \(M_{ij}\) — определитель матрицы, полученной вычёркиванием строки \(i\) и столбца \(j\).</li>
<li><b>Алгебраическое дополнение</b> \(C_{ij}=(-1)^{i+j}M_{ij}\) — минор со знаком.</li>
</ul>
<p>Знаки идут шахматкой:</p>
\[\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}\]
<div class="box def"><span class="t">Теорема Лапласа</span>
Определитель \(n\times n\) можно разложить по любой строке \(i\) или любому столбцу \(j\):
\[\det A=\sum_{j=1}^{n}a_{ij}C_{ij}\quad(\text{по строке}),\qquad \det A=\sum_{i=1}^{n}a_{ij}C_{ij}\quad(\text{по столбцу}).\]</div>
<div class="box tip"><span class="t">Лайфхак</span>Раскладывай по строке или столбцу, где больше всего нулей: каждый ноль убирает целый минор из вычислений.</div>
<div class="box ex"><span class="t">Проверка того же определителя по 1-му столбцу</span>
\(a_{21}=0\), значит одно слагаемое пропадает сразу.
\[C_{11}=+\begin{vmatrix}4&5\\0&2\end{vmatrix}=8,\qquad C_{31}=+\begin{vmatrix}2&3\\4&5\end{vmatrix}=10-12=-2.\]
\(\det A=1\cdot8+0+1\cdot(-2)=6\). Совпало с Саррюсом.</div>

<h2><span class="k">10</span>Свойства определителей</h2>
<ol>
<li>Нулевая строка (столбец) \(\Rightarrow \det A=0\).</li>
<li>Две одинаковые строки (столбца) \(\Rightarrow \det A=0\).</li>
<li>Две пропорциональные строки \(\Rightarrow \det A=0\).</li>
<li>Перестановка двух строк меняет знак: \(\det A\to-\det A\).</li>
<li>\(\det A=\det A^T\).</li>
<li>Для треугольной (и диагональной) матрицы \(\det A\) = произведение диагональных элементов.</li>
<li>\(\det(kA)=k^n\det A\) для матрицы \(n\times n\) — <span class="hl">степень \(n\), а не просто \(k\)</span>.</li>
<li>\(\det(AB)=\det A\cdot\det B\) (теорема Бине — Коши).</li>
</ol>
<div class="box ex"><span class="t">Быстрые ответы без вычислений</span>
\(\begin{vmatrix}3&1&5\\3&1&5\\7&2&0\end{vmatrix}=0\) (одинаковые строки); \(\begin{vmatrix}2&4&6\\1&3&5\\4&8&12\end{vmatrix}=0\) (строка 3 = 2·строка 1); \(\begin{vmatrix}5&0&0\\2&-3&0\\1&4&7\end{vmatrix}=5\cdot(-3)\cdot7=-105\) (треугольная); если \(\det A=6\) для \(3\times3\), то \(\det(2A)=2^3\cdot6=48\).</div>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>Сложение: одинаковые размеры. Умножение: совпадают внутренние размеры, \((n\times k)(k\times m)=n\times m\).</li>
<li>\(AB\ne BA\) в общем случае; \((AB)^T=B^TA^T\).</li>
<li>Определитель есть только у квадратной матрицы; \(\det A=0\) — матрица вырожденная.</li>
<li>Порядок 3 — Саррюс или треугольники; любой порядок — Лаплас по строке/столбцу с нулями.</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>What a matrix is</h2>
<p>A <b>matrix</b> is a rectangular array of elements arranged in \(n\) rows and \(m\) columns, enclosed in brackets. Its <b>size</b> (dimension) is written \(n\times m\): rows first, then columns.</p>
\[A_{n\times m}=[a_{ij}]=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1m}\\a_{21}&a_{22}&\dots&a_{2m}\\\vdots&\vdots&\ddots&\vdots\\a_{n1}&a_{n2}&\dots&a_{nm}\end{pmatrix}\]
<p>The element \(a_{ij}\) sits in row \(i\) and column \(j\). The index order is always “row, column”.</p>
<div class="box ex"><span class="t">Example</span>
\(B=\begin{pmatrix}2&0&-5\\1&8&3\end{pmatrix}\): 2 rows, 3 columns, size \(2\times3\). Elements: \(b_{13}=-5\), \(b_{22}=8\).</div>
<p>Elements need not be real numbers: in advanced mathematics matrices can hold complex numbers, polynomials, functions, or even other matrices.</p>
<div class="box def"><span class="t">Matrix equality</span>
\(A=B\) if and only if (1) they have exactly the same size and (2) all corresponding elements are equal: \(a_{ij}=b_{ij}\) for all \(i,j\).</div>

<h2><span class="k">2</span>Diagonals</h2>
<ul>
<li><b>Main diagonal</b>: elements \(a_{ii}\) (row index = column index), top-left to bottom-right.</li>
<li><b>Secondary (anti-) diagonal</b>: elements \(a_{i,\,n+1-i}\), top-right to bottom-left. Meaningful only for square matrices.</li>
</ul>

<h2><span class="k">3</span>Special types of matrices</h2>
<div class="tw"><table><thead><tr><th>Type</th><th>Condition</th></tr></thead><tbody>
<tr><td>Square</td><td>rows = columns: \(n=m\)</td></tr>
<tr><td>Row matrix</td><td>one row, size \(1\times m\)</td></tr>
<tr><td>Column matrix</td><td>one column, size \(n\times 1\)</td></tr>
<tr><td>Upper triangular</td><td>zeros below the main diagonal: \(a_{ij}=0\) for \(i>j\)</td></tr>
<tr><td>Lower triangular</td><td>zeros above the main diagonal: \(a_{ij}=0\) for \(i\lt j\)</td></tr>
<tr><td>Diagonal</td><td>square, everything off the main diagonal is zero</td></tr>
<tr><td>Identity \(I\) (or \(E\))</td><td>diagonal with 1s on the diagonal</td></tr>
<tr><td>Zero (null) \(O\)</td><td>every element is zero</td></tr>
</tbody></table></div>
\[I_3=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}\]
<div class="box tip"><span class="t">Remember</span>A matrix that is both upper and lower triangular is diagonal.</div>

<h2><span class="k">4</span>Addition, subtraction, scalar multiplication</h2>
<p>You can add or subtract matrices <span class="hl">only if they have the same size</span>. The operation is element by element:</p>
\[C=A\pm B,\qquad c_{ij}=a_{ij}\pm b_{ij}.\]
\[\begin{pmatrix}5&-2\\3&1\end{pmatrix}+\begin{pmatrix}0&4\\-1&6\end{pmatrix}=\begin{pmatrix}5&2\\2&7\end{pmatrix}\]
<p>Properties: \(A+O=A\), \(A+(-A)=O\).</p>
<p><b>Scalar multiplication</b> by \(k\): multiply every element, \(kA=[k\,a_{ij}]\).</p>
\[3\begin{pmatrix}1&-3\\2&0\end{pmatrix}=\begin{pmatrix}3&-9\\6&0\end{pmatrix}\]

<h2><span class="k">5</span>Matrix multiplication</h2>
<p>Matrix multiplication is <b>not</b> element by element. The entry \(c_{ij}\) is the sum of products of row \(i\) of \(A\) with column \(j\) of \(B\) (“row times column”).</p>
<div class="box def"><span class="t">The domino rule</span>
\(AB\) is defined only if the number of columns of \(A\) equals the number of rows of \(B\):
\[(n\times \boxed{k})\cdot(\boxed{k}\times m)=(n\times m).\]
The inner numbers must match; the outer numbers give the size of the result.</div>
<div class="box ex"><span class="t">Worked example</span>
\(A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}_{2\times3}\), \(B=\begin{pmatrix}7&8\\9&1\\2&3\end{pmatrix}_{3\times2}\). Inner 3 = 3, result is \(2\times2\).
\[\begin{aligned}c_{11}&=1\cdot7+2\cdot9+3\cdot2=31, & c_{12}&=1\cdot8+2\cdot1+3\cdot3=19,\\ c_{21}&=4\cdot7+5\cdot9+6\cdot2=85, & c_{22}&=4\cdot8+5\cdot1+6\cdot3=55.\end{aligned}\]
\(AB=\begin{pmatrix}31&19\\85&55\end{pmatrix}\).</div>
<div class="box warn"><span class="t">The big trap</span>
In general \(AB\ne BA\): matrix multiplication is <b>non-commutative</b>. Sometimes \(BA\) is not even defined because of the sizes.</div>
<p>What does hold (when sizes are compatible):</p>
<ul>
<li>associativity: \((AB)C=A(BC)\);</li>
<li>distributivity: \(A(B+C)=AB+AC\), \((A+B)C=AC+BC\);</li>
<li>identity: \(AI=IA=A\).</li>
</ul>
<p><b>There is no matrix division.</b> Instead of “\(A/B\)” we multiply by the inverse: \(AB^{-1}\) or \(B^{-1}A\), if \(B^{-1}\) exists (Lecture 2).</p>
<p><b>Powers</b> \(A^k\) are defined only for square matrices: \(A^2=A\cdot A\), and so on.</p>

<h2><span class="k">6</span>Transposition</h2>
<p>\(A^T\): rows become columns. The size changes from \(n\times m\) to \(m\times n\).</p>
\[A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}\ \Longrightarrow\ A^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}\]
<p>Properties:</p>
<ol>
<li>\((A^T)^T=A\)</li>
<li>\((kA)^T=kA^T\)</li>
<li>\((A+B)^T=A^T+B^T\)</li>
<li>\((AB)^T=B^TA^T\) — <span class="hl">the order reverses!</span></li>
</ol>
<div class="box warn"><span class="t">Common mistake</span>Writing \((AB)^T=A^TB^T\). This is wrong: the factors swap places.</div>
<h3>Symmetric and skew-symmetric</h3>
<ul>
<li><b>Symmetric:</b> \(A^T=A\), i.e. \(a_{ij}=a_{ji}\) — a mirror image across the main diagonal.</li>
<li><b>Skew-symmetric:</b> \(A^T=-A\), i.e. \(a_{ij}=-a_{ji}\). So the diagonal is all zeros: \(a_{ii}=-a_{ii}\Rightarrow a_{ii}=0\).</li>
</ul>
\[\begin{pmatrix}2&5&-1\\5&0&3\\-1&3&4\end{pmatrix}\ \text{symmetric},\qquad \begin{pmatrix}0&4&-2\\-4&0&1\\2&-1&0\end{pmatrix}\ \text{skew-symmetric}.\]
<div class="box tip"><span class="t">Useful fact</span>Any square \(M\) splits into a symmetric plus a skew-symmetric part: \(M=\tfrac12(M+M^T)+\tfrac12(M-M^T)\).</div>

<h2><span class="k">7</span>Determinants of order 1 and 2</h2>
<p>A <b>determinant</b> is a single number computed from a square matrix. Notation: \(\det A\) or \(|A|\). It is a diagnostic tool: if \(\det A=0\), the matrix is <b>singular</b> and has no inverse.</p>
<p>Order 1: \(\det[-5]=-5\).</p>
<p>Order 2: product of the main diagonal minus product of the secondary diagonal (cross-multiplication).</p>
\[\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=a_{11}a_{22}-a_{12}a_{21},\qquad \begin{vmatrix}3&4\\2&5\end{vmatrix}=15-8=7.\]

<h2><span class="k">8</span>Determinants of order 3</h2>
<h3>Triangle rule</h3>
\[\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}.\]
<p>Three positive terms: the main diagonal and two triangles parallel to it. Three negative terms: the secondary diagonal and its two triangles.</p>
<h3>Sarrus’ rule</h3>
<p>Copy the first two columns to the right. The three down-right diagonals (↘) are positive, the three up-right diagonals (↗) are negative. You can copy the first two rows below instead — same six products.</p>
<div class="box ex"><span class="t">Worked example</span>
\[\det A=\begin{vmatrix}1&2&3\\0&4&5\\1&0&2\end{vmatrix}\]
Positive: \(1\cdot4\cdot2+2\cdot5\cdot1+3\cdot0\cdot0=18\).<br>
Negative: \(1\cdot4\cdot3+0\cdot5\cdot1+2\cdot0\cdot2=12\).<br>
Result: \(\det A=18-12=6\).</div>
<div class="box warn"><span class="t">Important</span>Triangles and Sarrus work <b>only for order 3</b>. For 4×4 and larger use Laplace expansion.</div>

<h2><span class="k">9</span>Minors, cofactors, Laplace expansion</h2>
<ul>
<li><b>Minor</b> \(M_{ij}\): the determinant of the matrix left after deleting row \(i\) and column \(j\).</li>
<li><b>Cofactor</b> \(C_{ij}=(-1)^{i+j}M_{ij}\): the signed minor.</li>
</ul>
<p>Signs follow a checkerboard:</p>
\[\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}\]
<div class="box def"><span class="t">Laplace theorem</span>
An \(n\times n\) determinant can be expanded along any row \(i\) or any column \(j\):
\[\det A=\sum_{j=1}^{n}a_{ij}C_{ij}\quad(\text{row}),\qquad \det A=\sum_{i=1}^{n}a_{ij}C_{ij}\quad(\text{column}).\]</div>
<div class="box tip"><span class="t">Strategy</span>Expand along the row or column with the most zeros: every zero removes one minor from the work.</div>
<div class="box ex"><span class="t">Re-check of the same determinant along column 1</span>
\(a_{21}=0\), so that term vanishes immediately.
\[C_{11}=+\begin{vmatrix}4&5\\0&2\end{vmatrix}=8,\qquad C_{31}=+\begin{vmatrix}2&3\\4&5\end{vmatrix}=-2.\]
\(\det A=1\cdot8+0+1\cdot(-2)=6\). Same as Sarrus.</div>

<h2><span class="k">10</span>Properties of determinants</h2>
<ol>
<li>A zero row (column) \(\Rightarrow \det A=0\).</li>
<li>Two identical rows (columns) \(\Rightarrow \det A=0\).</li>
<li>Two proportional rows \(\Rightarrow \det A=0\).</li>
<li>Swapping two rows flips the sign: \(\det A\to-\det A\).</li>
<li>\(\det A=\det A^T\).</li>
<li>Triangular (or diagonal) matrix: \(\det A\) = product of the diagonal entries.</li>
<li>\(\det(kA)=k^n\det A\) for an \(n\times n\) matrix — <span class="hl">power \(n\), not just \(k\)</span>.</li>
<li>\(\det(AB)=\det A\cdot\det B\) (Binet–Cauchy).</li>
</ol>
<div class="box ex"><span class="t">Answers without expanding</span>
\(\begin{vmatrix}3&1&5\\3&1&5\\7&2&0\end{vmatrix}=0\) (identical rows); \(\begin{vmatrix}2&4&6\\1&3&5\\4&8&12\end{vmatrix}=0\) (row 3 = 2·row 1); \(\begin{vmatrix}5&0&0\\2&-3&0\\1&4&7\end{vmatrix}=-105\) (triangular); if \(\det A=6\) for \(3\times3\), then \(\det(2A)=2^3\cdot6=48\).</div>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>Addition needs equal sizes. Multiplication needs matching inner sizes, \((n\times k)(k\times m)=n\times m\).</li>
<li>\(AB\ne BA\) in general; \((AB)^T=B^TA^T\).</li>
<li>Only square matrices have determinants; \(\det A=0\) means singular.</li>
<li>Order 3: Sarrus or triangles. Any order: Laplace along the row/column with zeros.</li>
</ul>
`},
glossary:[
['Matrix (pl. matrices)','Матрица','Матрица'],['Element','Элемент','Элемент'],['Row','Строка','Жол'],['Column','Столбец','Баған'],['Dimension / Size','Размерность','Өлшемділік'],['Equality','Равенство','Теңдік'],['Square matrix','Квадратная матрица','Квадрат матрица'],['Row matrix','Матрица-строка','Жол-матрица'],['Column matrix','Матрица-столбец','Баған-матрица'],['Main diagonal','Главная диагональ','Бас диагональ'],['Secondary diagonal','Побочная диагональ','Көмекші диагональ'],['Upper triangular','Верхнетреугольная','Жоғарғы үшбұрышты'],['Lower triangular','Нижнетреугольная','Төменгі үшбұрышты'],['Diagonal matrix','Диагональная матрица','Диагональ матрица'],['Identity matrix','Единичная матрица','Бірлік матрица'],['Zero matrix','Нулевая матрица','Нөлдік матрица'],['Scalar','Скаляр','Скаляр'],['Addition','Сложение','Қосу'],['Subtraction','Вычитание','Азайту'],['Multiplication','Умножение','Көбейту'],['Dot product','Скалярное произведение','Скаляр көбейтінді'],['Commutativity','Коммутативность','Коммутативтілік'],['Associativity','Ассоциативность','Ассоциативтілік'],['Distributivity','Дистрибутивность','Дистрибутивтілік'],['Transposition','Транспонирование','Транспонирлеу'],['Symmetric','Симметричная','Симметриялы'],['Skew-symmetric','Кососимметричная','Кососимметриялы'],['Inverse matrix','Обратная матрица','Кері матрица'],['Determinant','Определитель','Анықтауыш'],['Singular matrix','Вырожденная матрица','Азыңқы матрица'],['Cross-multiplication','Умножение крест-накрест','Айқас көбейту'],['Triangle Rule','Правило треугольников','Үшбұрыш ережесі'],["Sarrus' Rule",'Правило Саррюса','Саррюс ережесі'],['Minor','Минор','Минор'],['Cofactor','Алгебраическое дополнение','Алгебралық толықтауыш'],['Laplace expansion','Разложение Лапласа','Лаплас жіктелуі']
],
practice:[
{q:{ru:String.raw`\(A=\begin{pmatrix}2&-1\\3&4\end{pmatrix}\), \(B=\begin{pmatrix}0&3\\-1&2\end{pmatrix}\). Найди \(3A-2B\) и матрицу \(X\), для которой \(2X+B=A\).`,en:String.raw`\(A=\begin{pmatrix}2&-1\\3&4\end{pmatrix}\), \(B=\begin{pmatrix}0&3\\-1&2\end{pmatrix}\). Find \(3A-2B\) and the matrix \(X\) with \(2X+B=A\).`},
 a:{ru:String.raw`\(3A-2B=\begin{pmatrix}6&-9\\11&8\end{pmatrix}\). \(X=\tfrac12(A-B)=\begin{pmatrix}1&-2\\2&1\end{pmatrix}\).`,en:String.raw`\(3A-2B=\begin{pmatrix}6&-9\\11&8\end{pmatrix}\). \(X=\tfrac12(A-B)=\begin{pmatrix}1&-2\\2&1\end{pmatrix}\).`}},
{q:{ru:String.raw`\(P=\begin{pmatrix}1&2\\3&4\end{pmatrix}\), \(Q=\begin{pmatrix}0&1\\1&0\end{pmatrix}\). Найди \(PQ\) и \(QP\). Что заметил?`,en:String.raw`\(P=\begin{pmatrix}1&2\\3&4\end{pmatrix}\), \(Q=\begin{pmatrix}0&1\\1&0\end{pmatrix}\). Compute \(PQ\) and \(QP\). What do you notice?`},
 a:{ru:String.raw`\(PQ=\begin{pmatrix}2&1\\4&3\end{pmatrix}\) (переставились столбцы), \(QP=\begin{pmatrix}3&4\\1&2\end{pmatrix}\) (переставились строки). \(PQ\ne QP\) — умножение некоммутативно.`,en:String.raw`\(PQ=\begin{pmatrix}2&1\\4&3\end{pmatrix}\) (columns swapped), \(QP=\begin{pmatrix}3&4\\1&2\end{pmatrix}\) (rows swapped). \(PQ\ne QP\): multiplication is non-commutative.`}},
{q:{ru:String.raw`Студент перемножил \(\begin{pmatrix}1&2\\3&4\end{pmatrix}\cdot\begin{pmatrix}2&0\\1&5\end{pmatrix}\) и получил \(\begin{pmatrix}4&10\\9&20\end{pmatrix}\). Найди ошибку.`,en:String.raw`A student computed \(\begin{pmatrix}1&2\\3&4\end{pmatrix}\cdot\begin{pmatrix}2&0\\1&5\end{pmatrix}\) and got \(\begin{pmatrix}4&10\\9&20\end{pmatrix}\). Find the error.`},
 a:{ru:String.raw`Неверен элемент \(c_{21}\): \(3\cdot2+4\cdot1=10\), а не 9. Правильно \(\begin{pmatrix}4&10\\10&20\end{pmatrix}\).`,en:String.raw`Entry \(c_{21}\) is wrong: \(3\cdot2+4\cdot1=10\), not 9. Correct: \(\begin{pmatrix}4&10\\10&20\end{pmatrix}\).`}},
{q:{ru:String.raw`Вычисли \(\begin{vmatrix}2&0&1\\-1&3&2\\0&1&4\end{vmatrix}\) двумя способами.`,en:String.raw`Compute \(\begin{vmatrix}2&0&1\\-1&3&2\\0&1&4\end{vmatrix}\) in two ways.`},
 a:{ru:String.raw`Саррюс: \((24+0-1)-(0+4+0)=19\). Лаплас по 1-й строке: \(2(12-2)-0+1(-1-0)=20-1=19\).`,en:String.raw`Sarrus: \((24+0-1)-(0+4+0)=19\). Laplace along row 1: \(2(12-2)-0+1(-1-0)=19\).`}},
{q:{ru:String.raw`Для \(A=\begin{pmatrix}2&-1&3\\0&4&1\\5&2&-2\end{pmatrix}\) найди \(M_{12}, C_{12}, M_{23}, C_{23}\) и \(\det A\).`,en:String.raw`For \(A=\begin{pmatrix}2&-1&3\\0&4&1\\5&2&-2\end{pmatrix}\) find \(M_{12}, C_{12}, M_{23}, C_{23}\) and \(\det A\).`},
 a:{ru:String.raw`\(M_{12}=\begin{vmatrix}0&1\\5&-2\end{vmatrix}=-5\), \(C_{12}=5\); \(M_{23}=\begin{vmatrix}2&-1\\5&2\end{vmatrix}=9\), \(C_{23}=-9\). \(\det A=-85\).`,en:String.raw`\(M_{12}=\begin{vmatrix}0&1\\5&-2\end{vmatrix}=-5\), \(C_{12}=5\); \(M_{23}=\begin{vmatrix}2&-1\\5&2\end{vmatrix}=9\), \(C_{23}=-9\). \(\det A=-85\).`}},
{q:{ru:String.raw`Вычисли \(\det B\), \(B=\begin{pmatrix}1&0&2&-1\\3&0&1&4\\0&0&5&0\\2&1&-3&0\end{pmatrix}\). По какой строке/столбцу выгоднее раскладывать?`,en:String.raw`Compute \(\det B\), \(B=\begin{pmatrix}1&0&2&-1\\3&0&1&4\\0&0&5&0\\2&1&-3&0\end{pmatrix}\). Which row/column is best to expand along?`},
 a:{ru:String.raw`По 3-й строке (там одно ненулевое число) или по 2-му столбцу. Ответ: \(\det B=-35\).`,en:String.raw`Along row 3 (one non-zero entry) or column 2. Answer: \(\det B=-35\).`}},
{q:{ru:String.raw`При каких \(p\) матрица \(\begin{pmatrix}p&2\\3&p\end{pmatrix}\) вырождена? При каком \(p\) равен нулю \(\begin{vmatrix}1&p&0\\2&1&p\\0&2&1\end{vmatrix}\)?`,en:String.raw`For which \(p\) is \(\begin{pmatrix}p&2\\3&p\end{pmatrix}\) singular? For which \(p\) is \(\begin{vmatrix}1&p&0\\2&1&p\\0&2&1\end{vmatrix}=0\)?`},
 a:{ru:String.raw`\(p^2-6=0\Rightarrow p=\pm\sqrt6\). Второй: \(1-4p=0\Rightarrow p=\tfrac14\).`,en:String.raw`\(p^2-6=0\Rightarrow p=\pm\sqrt6\). Second: \(1-4p=0\Rightarrow p=\tfrac14\).`}},
{q:{ru:String.raw`\(A,B\) — матрицы \(3\times3\), \(\det A=4\), \(\det B=-3\). Найди \(\det(AB)\), \(\det(BA)\). Если в матрице с \(\det=9\) поменять две строки — что будет?`,en:String.raw`\(A,B\) are \(3\times3\), \(\det A=4\), \(\det B=-3\). Find \(\det(AB)\), \(\det(BA)\). What happens to a determinant of 9 after swapping two rows?`},
 a:{ru:String.raw`\(\det(AB)=\det(BA)=-12\) (хотя сами \(AB\) и \(BA\) могут различаться). После перестановки строк: \(-9\).`,en:String.raw`\(\det(AB)=\det(BA)=-12\) (even though \(AB\) and \(BA\) may differ). After a row swap: \(-9\).`}},
{q:{ru:String.raw`Найди матрицу \(X\): \(X\begin{pmatrix}1&2\\3&4\end{pmatrix}=\begin{pmatrix}5&6\\11&14\end{pmatrix}\).`,en:String.raw`Find \(X\) with \(X\begin{pmatrix}1&2\\3&4\end{pmatrix}=\begin{pmatrix}5&6\\11&14\end{pmatrix}\).`},
 a:{ru:String.raw`Пусть \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\): \(a+3b=5,\ 2a+4b=6\Rightarrow a=-1,b=2\); \(c+3d=11,\ 2c+4d=14\Rightarrow c=-1,d=4\). \(X=\begin{pmatrix}-1&2\\-1&4\end{pmatrix}\).`,en:String.raw`Let \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\): \(a+3b=5,\ 2a+4b=6\Rightarrow a=-1,b=2\); \(c+3d=11,\ 2c+4d=14\Rightarrow c=-1,d=4\). \(X=\begin{pmatrix}-1&2\\-1&4\end{pmatrix}\).`}},
{q:{ru:String.raw`Контрольная: найди \(A-2B\) для \(A=\begin{pmatrix}1&-1\\2&3\end{pmatrix}\), \(B=\begin{pmatrix}0&2\\1&1\end{pmatrix}\); вычисли \(\begin{vmatrix}4&7\\2&5\end{vmatrix}\) и \(\begin{vmatrix}1&2&0\\0&1&3\\2&0&1\end{vmatrix}\).`,en:String.raw`Quiz: find \(A-2B\) for \(A=\begin{pmatrix}1&-1\\2&3\end{pmatrix}\), \(B=\begin{pmatrix}0&2\\1&1\end{pmatrix}\); compute \(\begin{vmatrix}4&7\\2&5\end{vmatrix}\) and \(\begin{vmatrix}1&2&0\\0&1&3\\2&0&1\end{vmatrix}\).`},
 a:{ru:String.raw`\(A-2B=\begin{pmatrix}1&-5\\0&1\end{pmatrix}\); \(20-14=6\); третий определитель \(=13\).`,en:String.raw`\(A-2B=\begin{pmatrix}1&-5\\0&1\end{pmatrix}\); \(20-14=6\); the third determinant \(=13\).`}}
]
});
