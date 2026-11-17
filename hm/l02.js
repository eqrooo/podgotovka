registerTopic({
subject:'hm', id:'l02', num:2, module:1,
title:{ru:'Обратная матрица, ранг, собственные значения', en:'Inverse matrix, rank, eigenvalues'},
summary:{ru:'Когда у матрицы есть обратная и как её найти через союзную матрицу; ранг двумя способами; характеристическое уравнение.',
         en:'When a matrix has an inverse and how to build it from the adjugate; rank two ways; the characteristic equation.'},
sources:['Higher_Mathematics_2_lecture.pdf','Higher_Mathematics_2 (3).pdf','Higher_Mathematics_2_dictionary.pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Обратная матрица: определение и существование</h2>
<div class="box def"><span class="t">Определение</span>
Для квадратной матрицы \(A\) обратная \(A^{-1}\) — единственная матрица, для которой
\[A\cdot A^{-1}=A^{-1}\cdot A=I.\]</div>
<div class="box def"><span class="t">Условие существования</span>
\(A\) обратима (невырождена) \(\iff \det A\ne0\). Если \(\det A=0\), матрица вырождена и \(A^{-1}\) не существует.</div>
<p>Вот почему в лекции 1 сначала учили определители: они решают, есть обратная или нет.</p>

<h2><span class="k">2</span>Союзная (присоединённая) матрица</h2>
<p>Алгебраические дополнения: \(C_{ij}=(-1)^{i+j}M_{ij}\). Складываем их в матрицу \(C\) и <b>транспонируем</b>:</p>
\[\operatorname{adj}(A)=C^T,\qquad A^{-1}=\frac{1}{\det A}\operatorname{adj}(A).\]
<div class="box warn"><span class="t">Типичная ошибка</span>Забыть транспонировать: \(\operatorname{adj}(A)\ne C\).</div>

<h2><span class="k">3</span>Формула для 2×2</h2>
\[A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\ \Longrightarrow\ A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.\]
<p>Элементы главной диагонали меняем местами, у побочной меняем знак, всё делим на определитель.</p>
<div class="box ex"><span class="t">Пример</span>
\(B=\begin{pmatrix}3&4\\2&5\end{pmatrix}\), \(\det B=7\):
\[B^{-1}=\frac17\begin{pmatrix}5&-4\\-2&3\end{pmatrix}=\begin{pmatrix}5/7&-4/7\\-2/7&3/7\end{pmatrix}.\]</div>

<h2><span class="k">4</span>Обратная 3×3: полный алгоритм</h2>
<ol>
<li>Посчитать \(\det A\). Если 0 — стоп, обратной нет.</li>
<li>Найти все 9 алгебраических дополнений \(C_{ij}\).</li>
<li>Собрать матрицу \(C\) и транспонировать: \(\operatorname{adj}A=C^T\).</li>
<li>Поделить на \(\det A\).</li>
<li>Проверить пару элементов \(AA^{-1}\).</li>
</ol>
<div class="box ex"><span class="t">Разбор</span>
\(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\), \(\det A=6\).
\[\begin{aligned}
C_{11}&=+\begin{vmatrix}4&5\\0&2\end{vmatrix}=8, & C_{12}&=-\begin{vmatrix}0&5\\1&2\end{vmatrix}=5, & C_{13}&=+\begin{vmatrix}0&4\\1&0\end{vmatrix}=-4,\\
C_{21}&=-\begin{vmatrix}2&3\\0&2\end{vmatrix}=-4, & C_{22}&=+\begin{vmatrix}1&3\\1&2\end{vmatrix}=-1, & C_{23}&=-\begin{vmatrix}1&2\\1&0\end{vmatrix}=2,\\
C_{31}&=+\begin{vmatrix}2&3\\4&5\end{vmatrix}=-2, & C_{32}&=-\begin{vmatrix}1&3\\0&5\end{vmatrix}=-5, & C_{33}&=+\begin{vmatrix}1&2\\0&4\end{vmatrix}=4.
\end{aligned}\]
\[C=\begin{pmatrix}8&5&-4\\-4&-1&2\\-2&-5&4\end{pmatrix}\Rightarrow \operatorname{adj}A=\begin{pmatrix}8&-4&-2\\5&-1&-5\\-4&2&4\end{pmatrix},\quad A^{-1}=\frac16\operatorname{adj}A=\begin{pmatrix}4/3&-2/3&-1/3\\5/6&-1/6&-5/6\\-2/3&1/3&2/3\end{pmatrix}.\]
Проверка элемента (1,1): \(1\cdot\tfrac43+2\cdot\tfrac56+3\cdot(-\tfrac23)=\tfrac43+\tfrac53-2=1\) ✓.</div>
<div class="box tip"><span class="t">Привычка</span>Всегда проверяй хотя бы 1–2 элемента \(AA^{-1}\): одна ошибка в дополнении портит всю обратную.</div>

<h2><span class="k">5</span>Свойства обратной матрицы</h2>
<ol>
<li>Если \(A^{-1}\) существует, она единственна.</li>
<li>\((A^{-1})^{-1}=A\).</li>
<li>\((AB)^{-1}=B^{-1}A^{-1}\) — порядок меняется (как у транспонирования).</li>
<li>\((A^T)^{-1}=(A^{-1})^T\).</li>
<li>\((kA)^{-1}=\tfrac1k A^{-1}\), \(k\ne0\).</li>
<li>\(\det(A^{-1})=\dfrac{1}{\det A}\).</li>
</ol>

<h2><span class="k">6</span>Ранг через миноры</h2>
<div class="box def"><span class="t">Определение</span>
<b>Ранг</b> \(\operatorname{rank}A\) — наибольший порядок ненулевого минора матрицы. Матрица может быть не квадратной.</div>
<div class="box ex"><span class="t">Пример</span>
\(M=\begin{pmatrix}1&2&3&4\\2&4&6&8\\1&0&2&1\end{pmatrix}\). Строка 2 = 2·строка 1, поэтому все миноры 3×3 равны нулю. Но минор из строк 1, 3 и столбцов 1, 2: \(\begin{vmatrix}1&2\\1&0\end{vmatrix}=-2\ne0\). Значит \(\operatorname{rank}M=2\).</div>

<h2><span class="k">7</span>Ранг через ступенчатый вид (на практике удобнее)</h2>
<p>\(\operatorname{rank}A\) = число ненулевых строк после приведения к ступенчатому виду элементарными преобразованиями. Эти преобразования ранг не меняют:</p>
<ol>
<li>поменять две строки местами;</li>
<li>умножить строку на ненулевое число;</li>
<li>прибавить к строке другую строку, умноженную на число.</li>
</ol>
<div class="box ex"><span class="t">Та же матрица M</span>
\[\begin{pmatrix}1&2&3&4\\2&4&6&8\\1&0&2&1\end{pmatrix}\xrightarrow{R_2-2R_1,\ R_3-R_1}\begin{pmatrix}1&2&3&4\\0&0&0&0\\0&-2&-1&-3\end{pmatrix}\xrightarrow{R_2\leftrightarrow R_3}\begin{pmatrix}1&2&3&4\\0&-2&-1&-3\\0&0&0&0\end{pmatrix}\]
Две ненулевые строки \(\Rightarrow\operatorname{rank}M=2\). Оба определения всегда дают одно и то же.</div>
<div class="box ex"><span class="t">Большой пример 4×5</span>
\[A=\begin{pmatrix}1&2&-1&0&3\\3&7&-1&2&12\\2&4&1&3&11\\-1&-1&4&5&12\end{pmatrix}\]
Шаг 1: \(R_2-3R_1,\ R_3-2R_1,\ R_4+R_1\). Шаг 2: \(R_4-R_2\). Шаг 3: \(R_3\leftrightarrow R_4\), чтобы ведущим был 1 (без дробей). Шаг 4: \(R_4-3R_3\):
\[U=\begin{pmatrix}1&2&-1&0&3\\0&1&2&2&3\\0&0&1&3&12\\0&0&0&-6&-31\end{pmatrix}\]
4 ненулевые строки \(\Rightarrow \operatorname{rank}A=4\) (полный ранг по строкам).</div>

<h2><span class="k">8</span>Свойства ранга</h2>
<ol>
<li>Для матрицы \(n\times m\): \(\operatorname{rank}A\le\min(n,m)\).</li>
<li>\(\operatorname{rank}A=0\iff A=O\).</li>
<li>\(\operatorname{rank}A=\operatorname{rank}A^T\).</li>
<li>Для квадратной \(n\times n\): \(\operatorname{rank}A=n\iff\det A\ne0\iff A\) обратима.</li>
</ol>
<p>Ранг, определитель и обратимость — три взгляда на один вопрос: действительно ли строки (столбцы) матрицы независимы?</p>

<h2><span class="k">9</span>Собственные значения</h2>
<p>Ищем такие числа \(\lambda\), что если вычесть \(\lambda\) из главной диагонали, матрица станет вырожденной:</p>
\[\det(A-\lambda I)=0.\]
<ul>
<li>\(\lambda\) — <b>собственное значение</b> матрицы \(A\). Геометрически — коэффициент растяжения/сжатия, «встроенный» в преобразование \(A\).</li>
<li>\(P(\lambda)=\det(A-\lambda I)\) — <b>характеристический многочлен</b> степени \(n\).</li>
<li>\(\det(A-\lambda I)=0\) — <b>характеристическое уравнение</b>; его корни и есть собственные значения.</li>
</ul>
<div class="box ex"><span class="t">Пример 2×2</span>
\(A=\begin{pmatrix}4&1\\2&3\end{pmatrix}\):
\[\begin{vmatrix}4-\lambda&1\\2&3-\lambda\end{vmatrix}=(4-\lambda)(3-\lambda)-2=\lambda^2-7\lambda+10=(\lambda-5)(\lambda-2).\]
\(\lambda_1=5,\ \lambda_2=2\).</div>
<div class="box ex"><span class="t">Пример 3×3</span>
\(A=\begin{pmatrix}2&0&0\\0&3&4\\0&2&1\end{pmatrix}\). В первой строке два нуля — раскладываем по ней:
\[\det(A-\lambda I)=(2-\lambda)\begin{vmatrix}3-\lambda&4\\2&1-\lambda\end{vmatrix}=(2-\lambda)(\lambda^2-4\lambda-5)=(2-\lambda)(\lambda-5)(\lambda+1).\]
\(\lambda_1=2,\ \lambda_2=5,\ \lambda_3=-1\).</div>

<h2><span class="k">10</span>Быстрая проверка: след и определитель</h2>
<div class="box def"><span class="t">Две проверки без решения многочлена</span>
\[\lambda_1+\dots+\lambda_n=\operatorname{tr}A\ (\text{сумма диагонали}),\qquad \lambda_1\cdots\lambda_n=\det A.\]</div>
<p>Для 2×2: \(\operatorname{tr}A=4+3=7=5+2\) ✓, \(\det A=10=5\cdot2\) ✓. Для 3×3: \(2+3+1=6=2+5-1\) ✓, \(\det A=-10=2\cdot5\cdot(-1)\) ✓.</p>
<p>Для любой 2×2 характеристическое уравнение сразу: \(\lambda^2-\operatorname{tr}(A)\,\lambda+\det A=0\).</p>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>\(A^{-1}\) есть \(\iff\det A\ne0\); \(A^{-1}=\frac1{\det A}C^T\).</li>
<li>Ранг — наибольший ненулевой минор = число ненулевых строк ступенчатого вида.</li>
<li>Квадратная: полный ранг \(\iff\) обратима \(\iff \det\ne0\).</li>
<li>Собственные значения: \(\det(A-\lambda I)=0\); проверка через след и определитель.</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>Inverse matrix: definition and existence</h2>
<div class="box def"><span class="t">Definition</span>
For a square matrix \(A\), its inverse \(A^{-1}\) is the unique matrix with
\[A\cdot A^{-1}=A^{-1}\cdot A=I.\]</div>
<div class="box def"><span class="t">Existence</span>
\(A\) is invertible (non-singular) \(\iff \det A\ne0\). If \(\det A=0\), \(A\) is singular and \(A^{-1}\) does not exist.</div>
<p>This is exactly why determinants came first in Lecture 1: they are the gatekeeper for invertibility.</p>

<h2><span class="k">2</span>The adjugate (adjoint) matrix</h2>
<p>Cofactors: \(C_{ij}=(-1)^{i+j}M_{ij}\). Collect them into the cofactor matrix \(C\) and <b>transpose</b> it:</p>
\[\operatorname{adj}(A)=C^T,\qquad A^{-1}=\frac{1}{\det A}\operatorname{adj}(A).\]
<div class="box warn"><span class="t">Common mistake</span>Forgetting the transpose: \(\operatorname{adj}(A)\ne C\).</div>

<h2><span class="k">3</span>2×2 shortcut</h2>
\[A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\ \Longrightarrow\ A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.\]
<p>Swap the main diagonal, negate the secondary diagonal, divide by the determinant.</p>
<div class="box ex"><span class="t">Example</span>
\(B=\begin{pmatrix}3&4\\2&5\end{pmatrix}\), \(\det B=7\):
\[B^{-1}=\frac17\begin{pmatrix}5&-4\\-2&3\end{pmatrix}.\]</div>

<h2><span class="k">4</span>Full 3×3 inverse: the algorithm</h2>
<ol>
<li>Compute \(\det A\). If it is 0, stop: no inverse.</li>
<li>Find all nine cofactors \(C_{ij}\).</li>
<li>Build \(C\) and transpose: \(\operatorname{adj}A=C^T\).</li>
<li>Divide by \(\det A\).</li>
<li>Spot-check a couple of entries of \(AA^{-1}\).</li>
</ol>
<div class="box ex"><span class="t">Worked example</span>
\(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\), \(\det A=6\).
\[\begin{aligned}
C_{11}&=8, & C_{12}&=5, & C_{13}&=-4,\\
C_{21}&=-4, & C_{22}&=-1, & C_{23}&=2,\\
C_{31}&=-2, & C_{32}&=-5, & C_{33}&=4.
\end{aligned}\]
\[\operatorname{adj}A=C^T=\begin{pmatrix}8&-4&-2\\5&-1&-5\\-4&2&4\end{pmatrix},\quad A^{-1}=\frac16\operatorname{adj}A=\begin{pmatrix}4/3&-2/3&-1/3\\5/6&-1/6&-5/6\\-2/3&1/3&2/3\end{pmatrix}.\]
Check entry (1,1): \(\tfrac43+\tfrac53-2=1\) ✓. Entry (1,2): \(-\tfrac23-\tfrac13+1=0\) ✓.</div>
<div class="box tip"><span class="t">Habit</span>Always spot-check one or two entries: a single slip in a cofactor ruins the whole inverse.</div>

<h2><span class="k">5</span>Properties of the inverse</h2>
<ol>
<li>If \(A^{-1}\) exists, it is unique.</li>
<li>\((A^{-1})^{-1}=A\).</li>
<li>\((AB)^{-1}=B^{-1}A^{-1}\) — order reverses, just like transposition.</li>
<li>\((A^T)^{-1}=(A^{-1})^T\).</li>
<li>\((kA)^{-1}=\tfrac1k A^{-1}\), \(k\ne0\).</li>
<li>\(\det(A^{-1})=1/\det A\).</li>
</ol>

<h2><span class="k">6</span>Rank via minors</h2>
<div class="box def"><span class="t">Definition</span>
The <b>rank</b> \(\operatorname{rank}A\) is the order of the largest non-zero minor of \(A\). \(A\) need not be square.</div>
<div class="box ex"><span class="t">Example</span>
\(M=\begin{pmatrix}1&2&3&4\\2&4&6&8\\1&0&2&1\end{pmatrix}\). Row 2 = 2·row 1, so every 3×3 minor is 0. But rows 1, 3 and columns 1, 2 give \(\begin{vmatrix}1&2\\1&0\end{vmatrix}=-2\ne0\). So \(\operatorname{rank}M=2\).</div>

<h2><span class="k">7</span>Rank via row echelon form (more practical)</h2>
<p>\(\operatorname{rank}A\) = number of non-zero rows after reducing \(A\) to row echelon form. Elementary row operations do not change the rank:</p>
<ol>
<li>swap two rows;</li>
<li>multiply a row by a non-zero scalar;</li>
<li>add a multiple of one row to another.</li>
</ol>
<div class="box ex"><span class="t">Same matrix M</span>
\[\begin{pmatrix}1&2&3&4\\2&4&6&8\\1&0&2&1\end{pmatrix}\xrightarrow{R_2-2R_1,\ R_3-R_1}\begin{pmatrix}1&2&3&4\\0&0&0&0\\0&-2&-1&-3\end{pmatrix}\xrightarrow{R_2\leftrightarrow R_3}\begin{pmatrix}1&2&3&4\\0&-2&-1&-3\\0&0&0&0\end{pmatrix}\]
Two non-zero rows \(\Rightarrow\operatorname{rank}M=2\). Both definitions always agree.</div>
<div class="box ex"><span class="t">Bigger example 4×5</span>
\[A=\begin{pmatrix}1&2&-1&0&3\\3&7&-1&2&12\\2&4&1&3&11\\-1&-1&4&5&12\end{pmatrix}\]
Step 1: \(R_2-3R_1,\ R_3-2R_1,\ R_4+R_1\). Step 2: \(R_4-R_2\). Step 3: \(R_3\leftrightarrow R_4\) to get pivot 1 (no fractions). Step 4: \(R_4-3R_3\):
\[U=\begin{pmatrix}1&2&-1&0&3\\0&1&2&2&3\\0&0&1&3&12\\0&0&0&-6&-31\end{pmatrix}\]
4 non-zero rows \(\Rightarrow \operatorname{rank}A=4\) (full row rank).</div>

<h2><span class="k">8</span>Properties of rank</h2>
<ol>
<li>For \(n\times m\): \(\operatorname{rank}A\le\min(n,m)\).</li>
<li>\(\operatorname{rank}A=0\iff A=O\).</li>
<li>\(\operatorname{rank}A=\operatorname{rank}A^T\).</li>
<li>Square \(n\times n\): \(\operatorname{rank}A=n\iff\det A\ne0\iff A\) is invertible.</li>
</ol>
<p>Rank, determinant and invertibility are three views of one question: are the rows (columns) truly independent?</p>

<h2><span class="k">9</span>Eigenvalues</h2>
<p>We look for scalars \(\lambda\) such that subtracting \(\lambda\) from the main diagonal makes the matrix singular:</p>
\[\det(A-\lambda I)=0.\]
<ul>
<li>\(\lambda\) is an <b>eigenvalue</b> of \(A\); geometrically, a scaling factor built into the transformation \(A\).</li>
<li>\(P(\lambda)=\det(A-\lambda I)\) is the <b>characteristic polynomial</b>, degree \(n\).</li>
<li>\(\det(A-\lambda I)=0\) is the <b>characteristic equation</b>; its roots are the eigenvalues.</li>
</ul>
<div class="box ex"><span class="t">2×2 example</span>
\(A=\begin{pmatrix}4&1\\2&3\end{pmatrix}\):
\[(4-\lambda)(3-\lambda)-2=\lambda^2-7\lambda+10=(\lambda-5)(\lambda-2)\ \Rightarrow\ \lambda_1=5,\ \lambda_2=2.\]</div>
<div class="box ex"><span class="t">3×3 example</span>
\(A=\begin{pmatrix}2&0&0\\0&3&4\\0&2&1\end{pmatrix}\). Row 1 has two zeros, expand along it:
\[\det(A-\lambda I)=(2-\lambda)\left[(3-\lambda)(1-\lambda)-8\right]=(2-\lambda)(\lambda-5)(\lambda+1).\]
\(\lambda_1=2,\ \lambda_2=5,\ \lambda_3=-1\).</div>

<h2><span class="k">10</span>Fast checks: trace and determinant</h2>
<div class="box def"><span class="t">No need to re-solve the polynomial</span>
\[\lambda_1+\dots+\lambda_n=\operatorname{tr}A\ (\text{sum of the diagonal}),\qquad \lambda_1\cdots\lambda_n=\det A.\]</div>
<p>2×2: \(\operatorname{tr}A=7=5+2\) ✓, \(\det A=10=5\cdot2\) ✓. 3×3: \(6=2+5-1\) ✓, \(-10=2\cdot5\cdot(-1)\) ✓.</p>
<p>For any 2×2 matrix: \(\lambda^2-\operatorname{tr}(A)\,\lambda+\det A=0\).</p>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>\(A^{-1}\) exists \(\iff\det A\ne0\); \(A^{-1}=\frac1{\det A}C^T\).</li>
<li>Rank = largest non-zero minor = number of non-zero rows in echelon form.</li>
<li>Square: full rank \(\iff\) invertible \(\iff \det\ne0\).</li>
<li>Eigenvalues solve \(\det(A-\lambda I)=0\); check with trace and determinant.</li>
</ul>
`},
glossary:[
['Inverse matrix','Обратная матрица','Кері матрица'],['Invertible','Обратимая','Керіленетін'],['Non-singular','Невырожденная','Азыңқы емес'],['Singular','Вырожденная','Азыңқы'],['Adjugate matrix','Союзная (присоединённая) матрица','Жалғамалы матрица'],['Adjoint matrix','Присоединённая матрица','Жалғамалы матрица'],['Cofactor matrix','Матрица алгебраических дополнений','Алгебралық толықтауыштар матрицасы'],['Uniqueness','Единственность','Жалғыздық'],['Rank','Ранг','Ранг'],['Full rank','Полный ранг','Толық ранг'],['Row echelon form','Ступенчатый вид по строкам','Жолдар бойынша сатылы түр'],['Elementary operation','Элементарная операция','Элементар операция'],['Proportional','Пропорциональный','Пропорционал'],['Independence','Независимость','Тәуелсіздік'],['Eigenvalue','Собственное значение','Меншікті мән'],['Characteristic equation','Характеристическое уравнение','Сипаттамалық теңдеу'],['Characteristic polynomial','Характеристический многочлен','Сипаттамалық көпмүше'],['Root','Корень','Түбір'],['Trace','След (матрицы)','Из (матрица ізі)'],['Scaling factor','Коэффициент масштабирования','Масштабтау коэффициенті']
],
practice:[
{q:{ru:String.raw`Без вычислений: обратима ли \(\begin{pmatrix}2&4\\1&2\end{pmatrix}\)? Запиши \(A^{-1}\) для \(A=\begin{pmatrix}3&0\\1&5\end{pmatrix}\).`,en:String.raw`Without computing: is \(\begin{pmatrix}2&4\\1&2\end{pmatrix}\) invertible? Write \(A^{-1}\) for \(A=\begin{pmatrix}3&0\\1&5\end{pmatrix}\).`},
 a:{ru:String.raw`Нет: строка 1 = 2·строка 2, \(\det=0\). \(A^{-1}=\frac1{15}\begin{pmatrix}5&0\\-1&3\end{pmatrix}\).`,en:String.raw`No: row 1 = 2·row 2, \(\det=0\). \(A^{-1}=\frac1{15}\begin{pmatrix}5&0\\-1&3\end{pmatrix}\).`}},
{q:{ru:String.raw`Найди \(A^{-1}\) для \(A=\begin{pmatrix}2&-1\\-3&4\end{pmatrix}\).`,en:String.raw`Find \(A^{-1}\) for \(A=\begin{pmatrix}2&-1\\-3&4\end{pmatrix}\).`},
 a:{ru:String.raw`\(\det A=8-3=5\); \(A^{-1}=\frac15\begin{pmatrix}4&1\\3&2\end{pmatrix}\). Элемент (1,1) произведения: \(2\cdot\tfrac45+(-1)\cdot\tfrac35=1\) ✓.`,en:String.raw`\(\det A=5\); \(A^{-1}=\frac15\begin{pmatrix}4&1\\3&2\end{pmatrix}\). Entry (1,1): \(2\cdot\tfrac45-\tfrac35=1\) ✓.`}},
{q:{ru:String.raw`\(A=\begin{pmatrix}p&3\\4&p\end{pmatrix}\). При каких \(p\) обратной нет? Найди \(A^{-1}\) при \(p=1\).`,en:String.raw`\(A=\begin{pmatrix}p&3\\4&p\end{pmatrix}\). For which \(p\) is there no inverse? Find \(A^{-1}\) for \(p=1\).`},
 a:{ru:String.raw`\(p^2-12=0\Rightarrow p=\pm2\sqrt3\). При \(p=1\): \(\det=-11\), \(A^{-1}=-\frac1{11}\begin{pmatrix}1&-3\\-4&1\end{pmatrix}\).`,en:String.raw`\(p^2-12=0\Rightarrow p=\pm2\sqrt3\). For \(p=1\): \(\det=-11\), \(A^{-1}=-\frac1{11}\begin{pmatrix}1&-3\\-4&1\end{pmatrix}\).`}},
{q:{ru:String.raw`Найди \(A^{-1}\) для \(A=\begin{pmatrix}1&0&2\\-1&3&1\\2&1&-1\end{pmatrix}\).`,en:String.raw`Find \(A^{-1}\) for \(A=\begin{pmatrix}1&0&2\\-1&3&1\\2&1&-1\end{pmatrix}\).`},
 a:{ru:String.raw`\(\det A=-18\). \(\operatorname{adj}A=\begin{pmatrix}-4&2&-6\\1&-5&-3\\-7&-1&3\end{pmatrix}\), \(A^{-1}=-\frac1{18}\operatorname{adj}A=\begin{pmatrix}2/9&-1/9&1/3\\-1/18&5/18&1/6\\7/18&1/18&-1/6\end{pmatrix}\).`,en:String.raw`\(\det A=-18\). \(\operatorname{adj}A=\begin{pmatrix}-4&2&-6\\1&-5&-3\\-7&-1&3\end{pmatrix}\), \(A^{-1}=-\frac1{18}\operatorname{adj}A=\begin{pmatrix}2/9&-1/9&1/3\\-1/18&5/18&1/6\\7/18&1/18&-1/6\end{pmatrix}\).`}},
{q:{ru:String.raw`\(\det A=5\), \(\det B=-2\) (обе 3×3). Найди \(\det A^{-1}\), \(\det (AB)^{-1}\), \(\det (A^{-1})^T\), \(\det (2A)^{-1}\).`,en:String.raw`\(\det A=5\), \(\det B=-2\) (both 3×3). Find \(\det A^{-1}\), \(\det (AB)^{-1}\), \(\det (A^{-1})^T\), \(\det (2A)^{-1}\).`},
 a:{ru:String.raw`\(\tfrac15\); \(-\tfrac1{10}\); \(\tfrac15\); \(\det(2A)=8\cdot5=40\Rightarrow\tfrac1{40}\). И помни: \((AB)^{-1}=B^{-1}A^{-1}\), а не \(A^{-1}B^{-1}\).`,en:String.raw`\(\tfrac15\); \(-\tfrac1{10}\); \(\tfrac15\); \(\det(2A)=40\Rightarrow\tfrac1{40}\). And \((AB)^{-1}=B^{-1}A^{-1}\), not \(A^{-1}B^{-1}\).`}},
{q:{ru:String.raw`Найди ранг \(P=\begin{pmatrix}2&4&1\\1&2&3\\-1&-2&5\end{pmatrix}\) и \(N=\begin{pmatrix}1&2&0&1\\2&1&1&0\\0&3&-1&2\end{pmatrix}\).`,en:String.raw`Find the rank of \(P=\begin{pmatrix}2&4&1\\1&2&3\\-1&-2&5\end{pmatrix}\) and \(N=\begin{pmatrix}1&2&0&1\\2&1&1&0\\0&3&-1&2\end{pmatrix}\).`},
 a:{ru:String.raw`\(\operatorname{rank}P=2\) (столбец 2 = 2·столбец 1, \(\det P=0\), но \(\begin{vmatrix}2&1\\1&3\end{vmatrix}=5\ne0\)). \(\operatorname{rank}N=2\) (после \(R_2-2R_1\) строка 3 становится нулевой).`,en:String.raw`\(\operatorname{rank}P=2\) (column 2 = 2·column 1, \(\det P=0\), but \(\begin{vmatrix}2&1\\1&3\end{vmatrix}=5\ne0\)). \(\operatorname{rank}N=2\) (after \(R_2-2R_1\), row 3 becomes zero).`}},
{q:{ru:String.raw`\(Q(t)=\begin{pmatrix}1&2&3\\2&t&6\\1&1&t\end{pmatrix}\). При каких \(t\) ранг меньше 3?`,en:String.raw`\(Q(t)=\begin{pmatrix}1&2&3\\2&t&6\\1&1&t\end{pmatrix}\). For which \(t\) is the rank below 3?`},
 a:{ru:String.raw`\(\det Q=(t-3)(t-4)\). При \(t=3\) и \(t=4\) ранг равен 2. При \(t=4\) строка 2 = 2·строка 1; при \(t=3\) столбец 3 = 3·столбец 1 — причины разные.`,en:String.raw`\(\det Q=(t-3)(t-4)\). For \(t=3\) and \(t=4\) the rank is 2. At \(t=4\), row 2 = 2·row 1; at \(t=3\), column 3 = 3·column 1 — different reasons.`}},
{q:{ru:String.raw`Найди собственные значения \(\begin{pmatrix}5&2\\3&4\end{pmatrix}\) и \(\begin{pmatrix}1&2&0\\2&1&0\\0&0&3\end{pmatrix}\). Проверь следом и определителем.`,en:String.raw`Find the eigenvalues of \(\begin{pmatrix}5&2\\3&4\end{pmatrix}\) and \(\begin{pmatrix}1&2&0\\2&1&0\\0&0&3\end{pmatrix}\). Check with trace and determinant.`},
 a:{ru:String.raw`Первая: \(\lambda^2-9\lambda+14=0\Rightarrow 7,\ 2\) (след 9, det 14 ✓). Вторая: \(3,\ 3,\ -1\) (след 5, det \(-9\) ✓).`,en:String.raw`First: \(\lambda^2-9\lambda+14=0\Rightarrow 7,\ 2\) (trace 9, det 14 ✓). Second: \(3,\ 3,\ -1\) (trace 5, det \(-9\) ✓).`}},
{q:{ru:String.raw`У матрицы 2×2 след 1 и определитель −6. Найди собственные значения.`,en:String.raw`A 2×2 matrix has trace 1 and determinant −6. Find its eigenvalues.`},
 a:{ru:String.raw`\(\lambda^2-\lambda-6=0\Rightarrow\lambda=3,\ -2\).`,en:String.raw`\(\lambda^2-\lambda-6=0\Rightarrow\lambda=3,\ -2\).`}},
{q:{ru:String.raw`\(A^2-5A+6I=O\). Докажи, что \(A\) обратима, и выведи \(A^{-1}\) через \(A\) и \(I\).`,en:String.raw`\(A^2-5A+6I=O\). Show \(A\) is invertible and express \(A^{-1}\) via \(A\) and \(I\).`},
 a:{ru:String.raw`\(A(5I-A)=6I\Rightarrow A\cdot\tfrac16(5I-A)=I\). Значит \(A^{-1}=\tfrac16(5I-A)\).`,en:String.raw`\(A(5I-A)=6I\Rightarrow A\cdot\tfrac16(5I-A)=I\). So \(A^{-1}=\tfrac16(5I-A)\).`}}
]
});
