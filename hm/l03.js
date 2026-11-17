registerTopic({
subject:'hm', id:'l03', num:3, module:1,
title:{ru:'Системы линейных уравнений', en:'Systems of linear equations'},
summary:{ru:'Матричная запись, теорема Кронекера — Капелли, метод Гаусса, правило Крамера и LU-разложение.',
         en:'Matrix form, the Kronecker–Capelli theorem, Gaussian elimination, Cramer’s rule and LU decomposition.'},
sources:['Higher_Mathematics_3 (1).pdf','Higher_Mathematics_3 (2).pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Матричная запись системы</h2>
<p>Система из \(m\) уравнений с \(n\) неизвестными:</p>
\[\begin{cases}a_{11}x_1+a_{12}x_2+\dots+a_{1n}x_n=b_1\\ \quad\vdots\\ a_{m1}x_1+a_{m2}x_2+\dots+a_{mn}x_n=b_m\end{cases}\qquad\Longleftrightarrow\qquad AX=B.\]
<p>\(A\) — матрица коэффициентов \(m\times n\), \(X\) — столбец неизвестных, \(B\) — столбец свободных членов. <b>Расширенная матрица</b> \([A\mid B]\) — коэффициенты и правые части в одной таблице; с ней и работает метод Гаусса.</p>

<h2><span class="k">2</span>Три возможных исхода</h2>
<ul>
<li><b>Единственное решение</b> — прямые пересекаются в одной точке.</li>
<li><b>Нет решений</b> (система несовместна) — прямые параллельны.</li>
<li><b>Бесконечно много решений</b> — прямые совпадают.</li>
</ul>
<p>При \(n>2\) нарисовать уже нельзя, поэтому нужен алгебраический тест — теорема ниже.</p>

<h2><span class="k">3</span>Теорема Кронекера — Капелли</h2>
<div class="box def"><span class="t">Критерий совместности</span>
Система имеет хотя бы одно решение \(\iff \operatorname{rank}A=\operatorname{rank}[A\mid B]\).</div>
<p>Если совместна (\(n\) — число неизвестных):</p>
<ul>
<li>\(\operatorname{rank}A=n\) — ровно одно решение;</li>
<li>\(\operatorname{rank}A\lt n\) — бесконечно много, со свободными параметрами в количестве \(n-\operatorname{rank}A\).</li>
</ul>
<p>Если \(\operatorname{rank}A\ne\operatorname{rank}[A\mid B]\) — решений нет.</p>
<div class="tw"><table><thead><tr><th>\(n\)</th><th>rank A</th><th>rank [A|B]</th><th>Исход</th></tr></thead><tbody>
<tr><td>3</td><td>3</td><td>3</td><td>единственное</td></tr>
<tr><td>3</td><td>2</td><td>2</td><td>бесконечно много, 1 параметр</td></tr>
<tr><td>3</td><td>2</td><td>3</td><td>нет решений</td></tr>
<tr><td>4</td><td>2</td><td>2</td><td>бесконечно много, 2 параметра</td></tr>
</tbody></table></div>

<h2><span class="k">4</span>Метод Гаусса</h2>
<p>Элементарными преобразованиями строк приводим \([A\mid B]\) к ступенчатому виду, затем делаем <b>обратный ход</b> — решаем снизу вверх. Бонус: по ступенчатому виду сразу видны \(\operatorname{rank}A\) и \(\operatorname{rank}[A\mid B]\).</p>
<div class="box ex"><span class="t">Единственное решение</span>
\(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\), \(B=(6,9,3)^T\).
\[\left(\begin{array}{ccc|c}1&2&3&6\\0&4&5&9\\1&0&2&3\end{array}\right)\xrightarrow{R_3-R_1}\left(\begin{array}{ccc|c}1&2&3&6\\0&4&5&9\\0&-2&-1&-3\end{array}\right)\xrightarrow{R_3+\frac12R_2}\left(\begin{array}{ccc|c}1&2&3&6\\0&4&5&9\\0&0&1.5&1.5\end{array}\right)\]
Обратный ход: \(1.5z=1.5\Rightarrow z=1\); \(4y+5=9\Rightarrow y=1\); \(x+2+3=6\Rightarrow x=1\).<br>Ответ: \((1,1,1)\). Проверка: \(\operatorname{rank}A=3=n\), \(\det A=6\ne0\).</div>
<div class="box ex"><span class="t">Бесконечно много решений</span>
\(M=\begin{pmatrix}1&2&3\\2&4&6\\1&0&2\end{pmatrix}\), \(B=(6,12,3)^T\). После \(R_2-2R_1\), \(R_3-R_1\), \(R_2\leftrightarrow R_3\):
\[\left(\begin{array}{ccc|c}1&2&3&6\\0&-2&-1&-3\\0&0&0&0\end{array}\right)\]
\(\operatorname{rank}A=\operatorname{rank}[A|B]=2\lt3\) — один свободный параметр. Пусть \(z=t\):
\[x=3-2t,\quad y=\frac{3-t}{2},\quad z=t,\quad t\in\mathbb R.\]
При \(t=1\) получаем \((1,1,1)\) — одно решение из бесконечного семейства.</div>
<div class="box ex"><span class="t">Нет решений</span>
Та же \(M\), но \(B=(6,13,3)^T\). После \(R_2-2R_1\) вторая строка: \(0x+0y+0z=1\), то есть \(0=1\) — противоречие. \(\operatorname{rank}A=2\), \(\operatorname{rank}[A|B]=3\) — несовместна.</div>

<h2><span class="k">5</span>Правило Крамера</h2>
<div class="box def"><span class="t">Когда можно</span>Только квадратная система (\(n\) уравнений, \(n\) неизвестных) и \(\det A\ne0\).</div>
\[x_i=\frac{\det A_i}{\det A},\]
<p>где \(A_i\) — матрица \(A\), в которой \(i\)-й столбец заменён на \(B\).</p>
<div class="box ex"><span class="t">Та же система</span>
\[\det A_1=\begin{vmatrix}6&2&3\\9&4&5\\3&0&2\end{vmatrix}=6,\quad \det A_2=\begin{vmatrix}1&6&3\\0&9&5\\1&3&2\end{vmatrix}=6,\quad \det A_3=\begin{vmatrix}1&2&6\\0&4&9\\1&0&3\end{vmatrix}=6.\]
\(x=y=z=\tfrac66=1\). Тот же ответ, что и у Гаусса.</div>
<p>Удобно для маленьких систем или когда нужна только одна неизвестная. Для больших и вырожденных систем — Гаусс.</p>

<h2><span class="k">6</span>LU-разложение</h2>
<p><b>Зачем:</b> если нужно решить \(AX=B\) с одной и той же \(A\) для многих разных \(B\), глупо каждый раз заново делать Гаусса. Делаем исключение один раз, запоминаем результат и переиспользуем.</p>
<div class="box def"><span class="t">Идея</span>
\(A=LU\), где \(L\) — нижнетреугольная с единицами на диагонали, \(U\) — верхнетреугольная (это и есть ступенчатый вид из Гаусса).
\[L=\begin{pmatrix}1&0&0\\\ell_{21}&1&0\\\ell_{31}&\ell_{32}&1\end{pmatrix},\qquad U=\begin{pmatrix}u_{11}&u_{12}&u_{13}\\0&u_{22}&u_{23}\\0&0&u_{33}\end{pmatrix}.\]</div>
<p>В \(L\) записываем <b>множители</b> исключения: если делали \(R_i\to R_i-m_{ij}R_j\), то \(\ell_{ij}=m_{ij}\) (сам множитель, без смены знака — соглашение Дулиттла).</p>
<div class="box ex"><span class="t">Пример</span>
Для \(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\) делали \(R_3-1\cdot R_1\) (множитель 1) и \(R_3-(-\tfrac12)R_2\) (множитель \(-\tfrac12\)); \(R_2\) не трогали (множитель 0).
\[L=\begin{pmatrix}1&0&0\\0&1&0\\1&-\tfrac12&1\end{pmatrix},\qquad U=\begin{pmatrix}1&2&3\\0&4&5\\0&0&1.5\end{pmatrix}.\]
Проверка строки 3 произведения \(LU\): \((1,\ 2-2,\ 3-2.5+1.5)=(1,0,2)\) ✓.</div>
<h3>Решение через LU: два лёгких шага</h3>
<ol>
<li><b>Прямая подстановка</b> \(LY=B\) — сверху вниз.</li>
<li><b>Обратная подстановка</b> \(UX=Y\) — снизу вверх.</li>
</ol>
<div class="box ex"><span class="t">Для B = (6, 9, 3)</span>
\(y_1=6,\ y_2=9,\ y_3=3-6+\tfrac12\cdot9=1.5\). Потом \(x_3=1,\ x_2=\tfrac{9-5}{4}=1,\ x_1=6-2-3=1\). Снова \((1,1,1)\).</div>

<h2><span class="k">∑</span>Какой метод выбрать</h2>
<ul>
<li><b>Кронекер — Капелли</b> — заранее говорит, сколько решений, по рангам.</li>
<li><b>Гаусс</b> — универсальный, работает для любой системы и попутно даёт ранги.</li>
<li><b>Крамер</b> — для маленьких квадратных невырожденных систем; для больших непрактичен.</li>
<li><b>LU</b> — одна \(A\), много разных \(B\).</li>
</ul>
<div class="box warn"><span class="t">Ловушка</span>Если \(\det A=0\) у квадратной системы, это ещё не значит «бесконечно много решений»: может быть и «нет решений». Решают только ранги.</div>
`,
en:String.raw`
<h2><span class="k">1</span>Matrix form of a system</h2>
<p>A system of \(m\) equations in \(n\) unknowns:</p>
\[\begin{cases}a_{11}x_1+a_{12}x_2+\dots+a_{1n}x_n=b_1\\ \quad\vdots\\ a_{m1}x_1+a_{m2}x_2+\dots+a_{mn}x_n=b_m\end{cases}\qquad\Longleftrightarrow\qquad AX=B.\]
<p>\(A\) is the \(m\times n\) coefficient matrix, \(X\) the column of unknowns, \(B\) the column of constants. The <b>augmented matrix</b> \([A\mid B]\) combines coefficients and constants; it is the working object of elimination.</p>

<h2><span class="k">2</span>Three possible outcomes</h2>
<ul>
<li><b>Unique solution</b>: lines cross at one point.</li>
<li><b>No solution</b> (inconsistent): lines are parallel.</li>
<li><b>Infinitely many solutions</b>: lines coincide.</li>
</ul>
<p>For \(n>2\) unknowns we cannot draw it, so we need an algebraic test.</p>

<h2><span class="k">3</span>Kronecker–Capelli (Rouché–Capelli) theorem</h2>
<div class="box def"><span class="t">Consistency test</span>
The system has at least one solution \(\iff \operatorname{rank}A=\operatorname{rank}[A\mid B]\).</div>
<p>If consistent (\(n\) = number of unknowns):</p>
<ul>
<li>\(\operatorname{rank}A=n\): exactly one solution;</li>
<li>\(\operatorname{rank}A\lt n\): infinitely many, with \(n-\operatorname{rank}A\) free parameters.</li>
</ul>
<p>If \(\operatorname{rank}A\ne\operatorname{rank}[A\mid B]\), there is no solution.</p>
<div class="tw"><table><thead><tr><th>\(n\)</th><th>rank A</th><th>rank [A|B]</th><th>Outcome</th></tr></thead><tbody>
<tr><td>3</td><td>3</td><td>3</td><td>unique</td></tr>
<tr><td>3</td><td>2</td><td>2</td><td>infinitely many, 1 parameter</td></tr>
<tr><td>3</td><td>2</td><td>3</td><td>no solution</td></tr>
<tr><td>4</td><td>2</td><td>2</td><td>infinitely many, 2 parameters</td></tr>
</tbody></table></div>

<h2><span class="k">4</span>Gaussian elimination</h2>
<p>Apply elementary row operations to \([A\mid B]\) until it is in row echelon form, then solve by <b>back-substitution</b> (bottom to top). Bonus: the echelon form shows \(\operatorname{rank}A\) and \(\operatorname{rank}[A\mid B]\) for free.</p>
<div class="box ex"><span class="t">Unique solution</span>
\(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\), \(B=(6,9,3)^T\).
\[\left(\begin{array}{ccc|c}1&2&3&6\\0&4&5&9\\1&0&2&3\end{array}\right)\xrightarrow{R_3-R_1}\left(\begin{array}{ccc|c}1&2&3&6\\0&4&5&9\\0&-2&-1&-3\end{array}\right)\xrightarrow{R_3+\frac12R_2}\left(\begin{array}{ccc|c}1&2&3&6\\0&4&5&9\\0&0&1.5&1.5\end{array}\right)\]
Back-substitution: \(z=1\); \(4y+5=9\Rightarrow y=1\); \(x+2+3=6\Rightarrow x=1\).<br>Solution \((1,1,1)\); rank \(A=3=n\), \(\det A=6\ne0\).</div>
<div class="box ex"><span class="t">Infinitely many solutions</span>
\(M=\begin{pmatrix}1&2&3\\2&4&6\\1&0&2\end{pmatrix}\), \(B=(6,12,3)^T\). After \(R_2-2R_1\), \(R_3-R_1\), \(R_2\leftrightarrow R_3\):
\[\left(\begin{array}{ccc|c}1&2&3&6\\0&-2&-1&-3\\0&0&0&0\end{array}\right)\]
rank \(A\) = rank \([A|B]\) = 2 < 3: one free parameter. Let \(z=t\):
\[x=3-2t,\quad y=\frac{3-t}{2},\quad z=t,\quad t\in\mathbb R.\]
\(t=1\) gives \((1,1,1)\), one member of an infinite family.</div>
<div class="box ex"><span class="t">No solution</span>
Same \(M\), but \(B=(6,13,3)^T\). After \(R_2-2R_1\), row 2 reads \(0=1\): a contradiction. rank \(A=2\), rank \([A|B]=3\): inconsistent.</div>

<h2><span class="k">5</span>Cramer’s rule</h2>
<div class="box def"><span class="t">When it applies</span>Only square systems (\(n\) equations, \(n\) unknowns) with \(\det A\ne0\).</div>
\[x_i=\frac{\det A_i}{\det A},\]
<p>where \(A_i\) is \(A\) with column \(i\) replaced by \(B\).</p>
<div class="box ex"><span class="t">Same system</span>
\[\det A_1=\begin{vmatrix}6&2&3\\9&4&5\\3&0&2\end{vmatrix}=6,\quad \det A_2=\begin{vmatrix}1&6&3\\0&9&5\\1&3&2\end{vmatrix}=6,\quad \det A_3=\begin{vmatrix}1&2&6\\0&4&9\\1&0&3\end{vmatrix}=6.\]
\(x=y=z=1\), same as elimination.</div>
<p>Use it for small systems or when you need just one unknown. For large or singular systems use elimination.</p>

<h2><span class="k">6</span>LU decomposition</h2>
<p><b>Motivation:</b> solving \(AX=B\) for the same \(A\) and many different \(B\)’s. Redoing elimination each time repeats the same work, so do it once and store it.</p>
<div class="box def"><span class="t">Idea</span>
\(A=LU\): \(L\) is unit lower triangular (1s on the diagonal), \(U\) is upper triangular (the echelon form from elimination).
\[L=\begin{pmatrix}1&0&0\\\ell_{21}&1&0\\\ell_{31}&\ell_{32}&1\end{pmatrix},\qquad U=\begin{pmatrix}u_{11}&u_{12}&u_{13}\\0&u_{22}&u_{23}\\0&0&u_{33}\end{pmatrix}.\]</div>
<p>\(L\) stores the <b>multipliers</b>: if \(R_i\to R_i-m_{ij}R_j\), then \(\ell_{ij}=m_{ij}\) (the multiplier itself — Doolittle convention).</p>
<div class="box ex"><span class="t">Example</span>
For \(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\): \(R_3-1\cdot R_1\) (multiplier 1), then \(R_3-(-\tfrac12)R_2\) (multiplier \(-\tfrac12\)).
\[L=\begin{pmatrix}1&0&0\\0&1&0\\1&-\tfrac12&1\end{pmatrix},\qquad U=\begin{pmatrix}1&2&3\\0&4&5\\0&0&1.5\end{pmatrix}.\]
Row 3 of \(LU\): \((1,0,2)\) ✓.</div>
<h3>Solving with LU: two easy steps</h3>
<ol>
<li><b>Forward substitution</b> \(LY=B\), top to bottom.</li>
<li><b>Back substitution</b> \(UX=Y\), bottom to top.</li>
</ol>
<div class="box ex"><span class="t">For B = (6, 9, 3)</span>
\(y_1=6,\ y_2=9,\ y_3=3-6+4.5=1.5\). Then \(x_3=1,\ x_2=1,\ x_1=1\).</div>

<h2><span class="k">∑</span>Choosing your method</h2>
<ul>
<li><b>Kronecker–Capelli</b>: predicts the number of solutions from ranks.</li>
<li><b>Gaussian elimination</b>: universal workhorse, reveals rank on the way.</li>
<li><b>Cramer</b>: small, square, non-singular systems only.</li>
<li><b>LU</b>: one \(A\), many \(B\)’s.</li>
</ul>
<div class="box warn"><span class="t">Trap</span>\(\det A=0\) in a square system does not mean “infinitely many”: it can also be “no solution”. Only the ranks decide.</div>
`},
glossary:[
['System of linear equations','Система линейных уравнений',''],['Unknown','Неизвестная',''],['Coefficient matrix','Матрица коэффициентов',''],['Augmented matrix','Расширенная матрица',''],['Consistent / inconsistent','Совместная / несовместная',''],['Unique solution','Единственное решение',''],['Infinitely many solutions','Бесконечно много решений',''],['Free parameter','Свободный параметр',''],['Kronecker–Capelli theorem','Теорема Кронекера — Капелли',''],['Gaussian elimination','Метод Гаусса',''],['Back-substitution','Обратный ход (подстановка)',''],['Forward substitution','Прямая подстановка',''],['Pivot','Ведущий элемент',''],["Cramer's rule",'Правило (формулы) Крамера',''],['LU decomposition','LU-разложение',''],['Multiplier','Множитель',''],['Homogeneous system','Однородная система','']
],
practice:[
{q:{ru:String.raw`Реши методом Гаусса: \(2x+y-z=0,\ x+3y+2z=5,\ 3x-y+z=10\).`,en:String.raw`Solve by elimination: \(2x+y-z=0,\ x+3y+2z=5,\ 3x-y+z=10\).`},
 a:{ru:String.raw`\((x,y,z)=(2,-1,3)\). Проверка: \(4-1-3=0\) ✓, \(2-3+6=5\) ✓, \(6+1+3=10\) ✓.`,en:String.raw`\((x,y,z)=(2,-1,3)\). Check: \(4-1-3=0\) ✓, \(2-3+6=5\) ✓, \(6+1+3=10\) ✓.`}},
{q:{ru:String.raw`\(A=\begin{pmatrix}1&1&2\\2&1&3\\1&-1&0\end{pmatrix}\). Найди \(\det A\), \(\operatorname{rank}A\) и условие на \(b_1,b_2,b_3\), при котором \(AX=B\) совместна.`,en:String.raw`\(A=\begin{pmatrix}1&1&2\\2&1&3\\1&-1&0\end{pmatrix}\). Find \(\det A\), \(\operatorname{rank}A\), and the condition on \(b_1,b_2,b_3\) for \(AX=B\) to be consistent.`},
 a:{ru:String.raw`\(\det A=0\), \(\operatorname{rank}A=2\). Строки: \(R_3=-3R_1+2R_2\), значит нужно \(b_3=-3b_1+2b_2\). Единственного решения не бывает никогда, так как \(\operatorname{rank}A=2\lt3\).`,en:String.raw`\(\det A=0\), \(\operatorname{rank}A=2\). Rows: \(R_3=-3R_1+2R_2\), so we need \(b_3=-3b_1+2b_2\). Never a unique solution, since rank \(A=2\lt3\).`}},
{q:{ru:String.raw`Та же \(A\). Реши при \(B=(1,2,1)^T\) и при \(B=(1,2,2)^T\).`,en:String.raw`Same \(A\). Solve for \(B=(1,2,1)^T\) and for \(B=(1,2,2)^T\).`},
 a:{ru:String.raw`\(B=(1,2,1)\): условие выполнено, \(x=1-t,\ y=-t,\ z=t\). \(B=(1,2,2)\): \(-3+4=1\ne2\), получится строка \(0=1\) — решений нет.`,en:String.raw`\(B=(1,2,1)\): condition holds, \(x=1-t,\ y=-t,\ z=t\). \(B=(1,2,2)\): \(-3+4=1\ne2\), a row \(0=1\) appears — no solution.`}},
{q:{ru:String.raw`Система с параметром: \(x+y+kz=2,\ x+ky+z=3,\ kx+y+z=1\). При каких \(k\) матрица вырождена и что тогда с решениями?`,en:String.raw`Parametric system: \(x+y+kz=2,\ x+ky+z=3,\ kx+y+z=1\). For which \(k\) is the matrix singular, and what happens then?`},
 a:{ru:String.raw`\(\det=-(k-1)^2(k+2)\Rightarrow k=1\) или \(k=-2\). При \(k=1\): rank A = 1, rank [A|B] = 2 — нет решений. При \(k=-2\): rank A = 2, rank [A|B] = 3 — тоже нет решений. При остальных \(k\) — единственное решение.`,en:String.raw`\(\det=-(k-1)^2(k+2)\Rightarrow k=1\) or \(k=-2\). \(k=1\): rank A = 1, rank [A|B] = 2 — no solution. \(k=-2\): rank A = 2, rank [A|B] = 3 — no solution. Any other \(k\): unique solution.`}},
{q:{ru:String.raw`Через Крамера найди только \(y\): \(2x-y+z=3,\ x+2y-z=2,\ 3x-y+2z=7\).`,en:String.raw`Use Cramer to find only \(y\): \(2x-y+z=3,\ x+2y-z=2,\ 3x-y+2z=7\).`},
 a:{ru:String.raw`\(\det A=4\), \(\det A_2=\begin{vmatrix}2&3&1\\1&2&-1\\3&7&2\end{vmatrix}=8\Rightarrow y=2\). (Полное решение: \((1,2,3)\).)`,en:String.raw`\(\det A=4\), \(\det A_2=\begin{vmatrix}2&3&1\\1&2&-1\\3&7&2\end{vmatrix}=8\Rightarrow y=2\). (Full solution: \((1,2,3)\).)`}},
{q:{ru:String.raw`Построй LU-разложение \(A=\begin{pmatrix}2&1&1\\4&3&3\\6&5&4\end{pmatrix}\).`,en:String.raw`Build the LU decomposition of \(A=\begin{pmatrix}2&1&1\\4&3&3\\6&5&4\end{pmatrix}\).`},
 a:{ru:String.raw`Множители: \(R_2-2R_1\), \(R_3-3R_1\), затем \(R_3-2R_2\). \(L=\begin{pmatrix}1&0&0\\2&1&0\\3&2&1\end{pmatrix}\), \(U=\begin{pmatrix}2&1&1\\0&1&1\\0&0&-1\end{pmatrix}\).`,en:String.raw`Multipliers: \(R_2-2R_1\), \(R_3-3R_1\), then \(R_3-2R_2\). \(L=\begin{pmatrix}1&0&0\\2&1&0\\3&2&1\end{pmatrix}\), \(U=\begin{pmatrix}2&1&1\\0&1&1\\0&0&-1\end{pmatrix}\).`}},
{q:{ru:String.raw`С этими \(L,U\) реши \(AX=B\) для \(B=(3,7,12)^T\) и для \(B'=(8,20,29)^T\).`,en:String.raw`With these \(L,U\), solve \(AX=B\) for \(B=(3,7,12)^T\) and \(B'=(8,20,29)^T\).`},
 a:{ru:String.raw`\(B\): \(Y=(3,1,1)\Rightarrow X=(1,2,-1)\). \(B'\): \(Y=(8,4,-3)\Rightarrow X=(2,1,3)\).`,en:String.raw`\(B\): \(Y=(3,1,1)\Rightarrow X=(1,2,-1)\). \(B'\): \(Y=(8,4,-3)\Rightarrow X=(2,1,3)\).`}},
{q:{ru:String.raw`Система с 4 неизвестными, \(\operatorname{rank}A=\operatorname{rank}[A|B]=2\). Сколько свободных параметров? Почему при \(\det A=0\) нельзя применять Крамера?`,en:String.raw`A system in 4 unknowns has rank A = rank [A|B] = 2. How many free parameters? Why can’t Cramer be used when \(\det A=0\)?`},
 a:{ru:String.raw`\(4-2=2\) параметра. В формуле Крамера делим на \(\det A\) — на ноль делить нельзя; а Гаусс работает всегда.`,en:String.raw`\(4-2=2\) parameters. Cramer divides by \(\det A\), which is zero; elimination always works.`}}
]
});
