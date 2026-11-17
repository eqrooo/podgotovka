registerTopic({
subject:'hm', id:'l04', num:4, module:1,
title:{ru:'Матричный метод и повторение модуля', en:'Matrix method and module review'},
summary:{ru:'Решение систем через \(X=A^{-1}B\), сравнение трёх методов и пробный тест по всему модулю «Матрицы».',
         en:'Solving systems via \(X=A^{-1}B\), comparing the three methods, and a practice test on the whole matrix module.'},
sources:['Higher_Mathematics_4 (1).pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Матричный метод</h2>
<p>Система \(AX=B\), \(A\) квадратная и \(\det A\ne0\). Умножаем обе части <b>слева</b> на \(A^{-1}\):</p>
\[A^{-1}(AX)=A^{-1}B\ \Rightarrow\ (A^{-1}A)X=A^{-1}B\ \Rightarrow\ IX=A^{-1}B\ \Rightarrow\ \boxed{X=A^{-1}B}.\]
<div class="box warn"><span class="t">Именно слева</span>\(X=BA^{-1}\) — ошибка: размеры даже не совпадут (\(B\) — столбец \(n\times1\)), а умножение некоммутативно.</div>
<p>То есть если \(A^{-1}\) уже найдена (лекция 2), решение любой системы с этой матрицей — одно умножение матрицы на столбец.</p>
<div class="box ex"><span class="t">Пример</span>
\(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\), \(A^{-1}=\begin{pmatrix}4/3&-2/3&-1/3\\5/6&-1/6&-5/6\\-2/3&1/3&2/3\end{pmatrix}\), \(B=(6,9,3)^T\).
\[\begin{aligned}x_1&=\tfrac43\cdot6-\tfrac23\cdot9-\tfrac13\cdot3=8-6-1=1,\\ x_2&=\tfrac56\cdot6-\tfrac16\cdot9-\tfrac56\cdot3=5-1.5-2.5=1,\\ x_3&=-\tfrac23\cdot6+\tfrac13\cdot9+\tfrac23\cdot3=-4+3+2=1.\end{aligned}\]
Одна и та же система решена четырьмя способами (Гаусс, Крамер, LU, матричный метод) — везде \((1,1,1)\).</div>

<h2><span class="k">2</span>Сравнение методов</h2>
<div class="tw"><table><thead><tr><th>Метод</th><th>Когда работает</th><th>Когда выбирать</th></tr></thead><tbody>
<tr><td>Гаусс</td><td>любая система: квадратная или нет, вырожденная или нет</td><td>по умолчанию; заодно даёт ранг</td></tr>
<tr><td>Крамер</td><td>только квадратная, \(\det A\ne0\)</td><td>маленькая система или нужна одна неизвестная; для больших \(n\) нужно \(n+1\) определителей — дорого</td></tr>
<tr><td>Матричный</td><td>только квадратная, \(\det A\ne0\)</td><td>одна \(A\), много разных \(B\): \(A^{-1}\) (или LU) считаем один раз</td></tr>
</tbody></table></div>

<h2><span class="k">3</span>Шпаргалка по всему модулю</h2>
<ul>
<li><b>Л1.</b> Размеры, сложение, умножение «строка на столбец», \(AB\ne BA\), \((AB)^T=B^TA^T\). Определители: 2×2, Саррюс, Лаплас; свойства (\(\det kA=k^n\det A\), \(\det AB=\det A\det B\)).</li>
<li><b>Л2.</b> \(A^{-1}=\frac1{\det A}C^T\); \((AB)^{-1}=B^{-1}A^{-1}\); ранг — миноры или ступенчатый вид; \(\det(A-\lambda I)=0\); \(\sum\lambda=\operatorname{tr}A\), \(\prod\lambda=\det A\).</li>
<li><b>Л3.</b> Кронекер — Капелли; Гаусс + обратный ход; Крамер \(x_i=\det A_i/\det A\); \(A=LU\).</li>
<li><b>Л4.</b> \(X=A^{-1}B\).</li>
</ul>
<p>Во вкладке «Практика» — все 12 задач пробного теста с ответами. Реши сначала сам, на бумаге.</p>
`,
en:String.raw`
<h2><span class="k">1</span>The matrix method</h2>
<p>System \(AX=B\), \(A\) square with \(\det A\ne0\). Multiply both sides <b>on the left</b> by \(A^{-1}\):</p>
\[A^{-1}(AX)=A^{-1}B\ \Rightarrow\ (A^{-1}A)X=A^{-1}B\ \Rightarrow\ IX=A^{-1}B\ \Rightarrow\ \boxed{X=A^{-1}B}.\]
<div class="box warn"><span class="t">On the left</span>\(X=BA^{-1}\) is wrong: sizes don’t even match (\(B\) is \(n\times1\)), and multiplication is non-commutative.</div>
<p>Once you have \(A^{-1}\) (Lecture 2), solving any system with that matrix is one matrix–column multiplication.</p>
<div class="box ex"><span class="t">Example</span>
\(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\), \(A^{-1}=\begin{pmatrix}4/3&-2/3&-1/3\\5/6&-1/6&-5/6\\-2/3&1/3&2/3\end{pmatrix}\), \(B=(6,9,3)^T\).
\[x_1=8-6-1=1,\quad x_2=5-1.5-2.5=1,\quad x_3=-4+3+2=1.\]
The same system, solved four ways (elimination, Cramer, LU, matrix method): always \((1,1,1)\).</div>

<h2><span class="k">2</span>Comparing the methods</h2>
<div class="tw"><table><thead><tr><th>Method</th><th>Works for</th><th>Choose it when</th></tr></thead><tbody>
<tr><td>Gaussian elimination</td><td>any system, square or not, singular or not</td><td>default; reveals rank for free</td></tr>
<tr><td>Cramer’s rule</td><td>square, \(\det A\ne0\) only</td><td>small \(n\) or one unknown; \(n+1\) determinants get expensive fast</td></tr>
<tr><td>Matrix method</td><td>square, \(\det A\ne0\) only</td><td>same \(A\), many \(B\)’s: compute \(A^{-1}\) (or LU) once</td></tr>
</tbody></table></div>

<h2><span class="k">3</span>Module cheat sheet</h2>
<ul>
<li><b>L1.</b> Sizes, addition, row-by-column product, \(AB\ne BA\), \((AB)^T=B^TA^T\). Determinants: 2×2, Sarrus, Laplace; properties (\(\det kA=k^n\det A\), \(\det AB=\det A\det B\)).</li>
<li><b>L2.</b> \(A^{-1}=\frac1{\det A}C^T\); \((AB)^{-1}=B^{-1}A^{-1}\); rank via minors or echelon form; \(\det(A-\lambda I)=0\); \(\sum\lambda=\operatorname{tr}A\), \(\prod\lambda=\det A\).</li>
<li><b>L3.</b> Kronecker–Capelli; elimination + back-substitution; Cramer \(x_i=\det A_i/\det A\); \(A=LU\).</li>
<li><b>L4.</b> \(X=A^{-1}B\).</li>
</ul>
<p>The Practice tab holds all 12 problems of the practice test with answers. Solve them on paper first.</p>
`},
glossary:[
['Matrix method','Матричный метод',''],['Inverse matrix','Обратная матрица','Кері матрица'],['Left multiplication','Умножение слева',''],['Practice test','Пробный тест',''],['Answer key','Ключ ответов',''],['Module exam','Модульный экзамен','']
],
practice:[
{q:{ru:String.raw`\(A=\begin{pmatrix}2&-1\\3&0\end{pmatrix}\), \(B=\begin{pmatrix}1&4\\-2&5\end{pmatrix}\). Найди \(2A-B\).`,en:String.raw`\(A=\begin{pmatrix}2&-1\\3&0\end{pmatrix}\), \(B=\begin{pmatrix}1&4\\-2&5\end{pmatrix}\). Find \(2A-B\).`},a:{ru:String.raw`\(\begin{pmatrix}3&-6\\8&-5\end{pmatrix}\)`,en:String.raw`\(\begin{pmatrix}3&-6\\8&-5\end{pmatrix}\)`}},
{q:{ru:String.raw`\(A=\begin{pmatrix}1&0&2\\3&1&-1\end{pmatrix}_{2\times3}\), \(B=\begin{pmatrix}2\\0\\-1\end{pmatrix}_{3\times1}\). Найди \(AB\) и \(BA\).`,en:String.raw`\(A=\begin{pmatrix}1&0&2\\3&1&-1\end{pmatrix}_{2\times3}\), \(B=\begin{pmatrix}2\\0\\-1\end{pmatrix}_{3\times1}\). Find \(AB\) and \(BA\).`},a:{ru:String.raw`\(AB=\begin{pmatrix}0\\7\end{pmatrix}_{2\times1}\). \(BA\) не определено: \((3\times1)(2\times3)\), внутренние 1 ≠ 2.`,en:String.raw`\(AB=\begin{pmatrix}0\\7\end{pmatrix}_{2\times1}\). \(BA\) is undefined: \((3\times1)(2\times3)\), inner 1 ≠ 2.`}},
{q:{ru:String.raw`\(C=\begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}\). Найди \(C^T\).`,en:String.raw`\(C=\begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}\). Find \(C^T\).`},a:{ru:String.raw`\(\begin{pmatrix}1&3&5\\2&4&6\end{pmatrix}\)`,en:String.raw`\(\begin{pmatrix}1&3&5\\2&4&6\end{pmatrix}\)`}},
{q:{ru:String.raw`Вычисли \(\begin{vmatrix}5&-3\\2&4\end{vmatrix}\).`,en:String.raw`Compute \(\begin{vmatrix}5&-3\\2&4\end{vmatrix}\).`},a:{ru:String.raw`\(20+6=26\)`,en:String.raw`\(20+6=26\)`}},
{q:{ru:String.raw`Вычисли \(\begin{vmatrix}2&1&0\\1&3&1\\0&1&2\end{vmatrix}\).`,en:String.raw`Compute \(\begin{vmatrix}2&1&0\\1&3&1\\0&1&2\end{vmatrix}\).`},a:{ru:String.raw`\(8\)`,en:String.raw`\(8\)`}},
{q:{ru:String.raw`Для матрицы из задачи 5 найди \(C_{23}\).`,en:String.raw`For the matrix in problem 5, find \(C_{23}\).`},a:{ru:String.raw`\(C_{23}=-\begin{vmatrix}2&1\\0&1\end{vmatrix}=-2\)`,en:String.raw`\(C_{23}=-\begin{vmatrix}2&1\\0&1\end{vmatrix}=-2\)`}},
{q:{ru:String.raw`Найди \(A^{-1}\), \(A=\begin{pmatrix}2&5\\1&3\end{pmatrix}\).`,en:String.raw`Find \(A^{-1}\), \(A=\begin{pmatrix}2&5\\1&3\end{pmatrix}\).`},a:{ru:String.raw`\(\det=1\), \(A^{-1}=\begin{pmatrix}3&-5\\-1&2\end{pmatrix}\)`,en:String.raw`\(\det=1\), \(A^{-1}=\begin{pmatrix}3&-5\\-1&2\end{pmatrix}\)`}},
{q:{ru:String.raw`Найди \(\operatorname{rank}N\) для \(N=\begin{pmatrix}1&3&2\\2&6&5\\1&3&4\end{pmatrix}\) приведением к ступенчатому виду.`,en:String.raw`Find \(\operatorname{rank}N\), \(N=\begin{pmatrix}1&3&2\\2&6&5\\1&3&4\end{pmatrix}\), by row reduction.`},a:{ru:String.raw`\(R_2-2R_1=(0,0,1)\), \(R_3-R_1=(0,0,2)\), затем \(R_3-2R_2=0\). \(\operatorname{rank}N=2\).`,en:String.raw`\(R_2-2R_1=(0,0,1)\), \(R_3-R_1=(0,0,2)\), then \(R_3-2R_2=0\). \(\operatorname{rank}N=2\).`}},
{q:{ru:String.raw`Собственные значения \(A=\begin{pmatrix}5&4\\1&2\end{pmatrix}\).`,en:String.raw`Eigenvalues of \(A=\begin{pmatrix}5&4\\1&2\end{pmatrix}\).`},a:{ru:String.raw`\(\lambda^2-7\lambda+6=0\Rightarrow\lambda_1=6,\ \lambda_2=1\)`,en:String.raw`\(\lambda^2-7\lambda+6=0\Rightarrow\lambda_1=6,\ \lambda_2=1\)`}},
{q:{ru:String.raw`\(A=\begin{pmatrix}1&2&1\\2&4&2\\1&2&3\end{pmatrix}\). По Кронекеру — Капелли (не решая) классифицируй: (a) \(B=(3,6,7)^T\); (b) \(B=(3,5,7)^T\).`,en:String.raw`\(A=\begin{pmatrix}1&2&1\\2&4&2\\1&2&3\end{pmatrix}\). Classify with Kronecker–Capelli (don’t solve): (a) \(B=(3,6,7)^T\); (b) \(B=(3,5,7)^T\).`},a:{ru:String.raw`(a) бесконечно много решений (rank A = rank [A|B] = 2 < 3); (b) нет решений (rank [A|B] = 3).`,en:String.raw`(a) infinitely many (rank A = rank [A|B] = 2 < 3); (b) no solution (rank [A|B] = 3).`}},
{q:{ru:String.raw`Реши методом Гаусса: \(x+y+z=6,\ 2x+y-z=1,\ x-y+2z=5\).`,en:String.raw`Solve by elimination: \(x+y+z=6,\ 2x+y-z=1,\ x-y+2z=5\).`},a:{ru:String.raw`\((x,y,z)=(1,2,3)\)`,en:String.raw`\((x,y,z)=(1,2,3)\)`}},
{q:{ru:String.raw`Реши матричным методом: \(3x+2y=7,\ x-y=1\).`,en:String.raw`Solve with the matrix method: \(3x+2y=7,\ x-y=1\).`},a:{ru:String.raw`\(\det A=-5\), \(A^{-1}=-\tfrac15\begin{pmatrix}-1&-2\\-1&3\end{pmatrix}\), \(X=A^{-1}B=(\tfrac95,\ \tfrac45)\).`,en:String.raw`\(\det A=-5\), \(A^{-1}=-\tfrac15\begin{pmatrix}-1&-2\\-1&3\end{pmatrix}\), \(X=A^{-1}B=(\tfrac95,\ \tfrac45)\).`}}
]
});
