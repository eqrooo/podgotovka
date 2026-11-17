registerTopic({
subject:'hm', id:'l06', num:6, module:2,
title:{ru:'Линейные преобразования и собственные векторы', en:'Linear transformations and eigenvectors'},
summary:{ru:'Матрица как оператор: повороты, отражения, масштабирование, композиция. Собственные векторы и диагонализация \(A=PDP^{-1}\).',
         en:'Matrices as operators: rotation, reflection, scaling, composition. Eigenvectors and diagonalization \(A=PDP^{-1}\).'},
sources:['Higher_Mathematics_6.pdf','Higher_Mathematics_6 (2).pdf','Higher_Mathematics_6_Dictionary.pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Линейное преобразование</h2>
<div class="box def"><span class="t">Определение</span>
Функция \(T:\mathbb R^n\to\mathbb R^m\) линейна, если для любых векторов \(\vec u,\vec v\) и числа \(c\):
<ol><li><b>аддитивность:</b> \(T(\vec u+\vec v)=T(\vec u)+T(\vec v)\);</li><li><b>однородность:</b> \(T(c\vec u)=cT(\vec u)\).</li></ol></div>
<p>Следствие (возьми \(c=0\)): \(T(\vec 0)=\vec 0\) — любое линейное преобразование оставляет начало координат на месте. Если \(T(\vec0)\ne\vec0\), преобразование точно не линейное.</p>

<h2><span class="k">2</span>Стандартная матрица</h2>
<div class="box def"><span class="t">Главная теорема</span>
Любое линейное \(T:\mathbb R^n\to\mathbb R^m\) записывается как \(T(\vec v)=A\vec v\) с единственной матрицей \(A\) размера \(m\times n\).
<b>Столбцы \(A\) — это образы базисных векторов:</b>
\[A=\big[\,T(\vec e_1)\ \ T(\vec e_2)\ \dots\ T(\vec e_n)\,\big].\]</div>
<p>Знаешь, куда переходят \(\vec i\) и \(\vec j\) — знаешь о преобразовании всё.</p>
<div class="box ex"><span class="t">Пример</span>
\(T(1,0)=(3,-1)\), \(T(0,1)=(2,4)\Rightarrow A=\begin{pmatrix}3&2\\-1&4\end{pmatrix}\). Тогда \(T(5,-2)=A\binom{5}{-2}=\binom{11}{-13}\).</div>

<h2><span class="k">3</span>Геометрические преобразования</h2>
<h3>Поворот на угол \(\theta\) против часовой стрелки</h3>
\[R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},\qquad R_{90^\circ}=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.\]
<p>\(R_{90}\): \(\vec i\to(0,1)\), \(\vec j\to(-1,0)\), \((2,1)\to(-1,2)\). Поворот на 180°: \(\begin{pmatrix}-1&0\\0&-1\end{pmatrix}\) — каждый вектор меняется на противоположный.</p>
<h3>Отражение относительно оси x и масштабирование</h3>
\[M_x=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad S=\begin{pmatrix}2&0\\0&0.5\end{pmatrix}.\]
<p>\(M_x\) меняет знак \(y\): \((2,1.2)\to(2,-1.2)\). \(S\) растягивает по \(x\) вдвое и сжимает по \(y\) вдвое: \((1,1)\to(2,0.5)\) — неоднородное масштабирование.</p>

<h2><span class="k">4</span>Композиция = умножение матриц</h2>
\[(T_2\circ T_1)(\vec v)=A_2(A_1\vec v)=(A_2A_1)\vec v.\]
<p>Сначала \(T_1\), потом \(T_2\) — матрицы пишутся <b>справа налево</b>: \(A_2A_1\).</p>
<div class="box warn"><span class="t">Порядок важен</span>
\(A_2A_1\ne A_1A_2\). «Повернуть, потом отразить» — \(M_xR_{90}=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}\); «отразить, потом повернуть» — \(R_{90}M_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}\). Это разные преобразования: \((1,0)\) переходит в \((0,-1)\) и в \((0,1)\) соответственно.</div>

<h2><span class="k">5</span>Собственные векторы</h2>
<div class="box def"><span class="t">Определение</span>
Ненулевой вектор \(\vec v\) — <b>собственный вектор</b> матрицы \(A\) с собственным значением \(\lambda\), если
\[A\vec v=\lambda\vec v.\]</div>
<p>Геометрически: преобразование \(A\) не меняет направление \(\vec v\), только растягивает/сжимает в \(\lambda\) раз. Все остальные векторы поворачиваются или перекашиваются, а собственные — это особые направления, которые «не гнутся».</p>
<h3>Как искать</h3>
<ol>
<li>Найти собственные значения: \(\det(A-\lambda I)=0\) (лекция 2).</li>
<li>Для каждого \(\lambda\) решить однородную систему \((A-\lambda I)\vec v=\vec 0\).</li>
</ol>
<p>Система всегда имеет нетривиальное решение: \(\lambda\) выбрано так, что \(A-\lambda I\) вырождена.</p>
<div class="box ex"><span class="t">Разбор</span>
\(A=\begin{pmatrix}4&1\\2&3\end{pmatrix}\), \(\lambda_1=5,\ \lambda_2=2\).<br>
<b>\(\lambda=5\):</b> \(A-5I=\begin{pmatrix}-1&1\\2&-2\end{pmatrix}\to\begin{pmatrix}-1&1\\0&0\end{pmatrix}\): \(-v_1+v_2=0\Rightarrow \vec v_1=\binom11\). Проверка: \(A\binom11=\binom55=5\binom11\) ✓.<br>
<b>\(\lambda=2\):</b> \(A-2I=\begin{pmatrix}2&1\\2&1\end{pmatrix}\to\begin{pmatrix}2&1\\0&0\end{pmatrix}\): \(2v_1+v_2=0\Rightarrow\vec v_2=\binom1{-2}\). Проверка: \(A\binom1{-2}=\binom2{-4}=2\binom1{-2}\) ✓.</div>

<h2><span class="k">6</span>Собственное подпространство</h2>
<p>Собственный вектор <b>не единственен</b>: если \(\vec v\) подходит, то и \(c\vec v\) (\(c\ne0\)): \(A(c\vec v)=cA\vec v=\lambda(c\vec v)\).</p>
<p>Все собственные векторы для данного \(\lambda\) вместе с \(\vec 0\) образуют <b>собственное подпространство</b> — прямую через начало координат (если направление одно). В ответе достаточно одного представителя; любое кратное тоже правильно.</p>

<h2><span class="k">7</span>Диагонализация \(A=PDP^{-1}\)</h2>
<div class="box def"><span class="t">Идея</span>
Если у \(A\) (\(n\times n\)) есть \(n\) линейно независимых собственных векторов, ставим их столбцами в \(P\), а собственные значения (в том же порядке!) — на диагональ \(D\):
\[A=PDP^{-1}.\]
Гарантировано, если все \(n\) собственных значений различны.</div>
<div class="box ex"><span class="t">Продолжение примера</span>
\[P=\begin{pmatrix}1&1\\1&-2\end{pmatrix},\quad D=\begin{pmatrix}5&0\\0&2\end{pmatrix},\quad \det P=-3\ne0,\quad P^{-1}=\frac13\begin{pmatrix}2&1\\1&-1\end{pmatrix}.\]
Проверка: \(PD=\begin{pmatrix}5&2\\5&-4\end{pmatrix}\), \(PDP^{-1}=\begin{pmatrix}4&1\\2&3\end{pmatrix}=A\) ✓.</div>
<div class="box warn"><span class="t">Не каждая матрица диагонализуема</span>Нужны \(n\) независимых собственных векторов. Например, у \(\begin{pmatrix}1&1\\0&1\end{pmatrix}\) только одно направление — не диагонализуется.</div>

<h2><span class="k">8</span>Зачем: быстрые степени</h2>
\[A^k=(PDP^{-1})(PDP^{-1})\cdots(PDP^{-1})=PD^kP^{-1},\]
<p>потому что внутренние \(P^{-1}P\) сокращаются в \(I\). А диагональную матрицу возводить в степень легко — каждый элемент отдельно:</p>
\[D^{10}=\begin{pmatrix}5^{10}&0\\0&2^{10}\end{pmatrix}=\begin{pmatrix}9\,765\,625&0\\0&1024\end{pmatrix},\qquad A^{10}=PD^{10}P^{-1}.\]
<p>Вместо 9 тяжёлых умножений — два. Ещё бонус: если \(A\) обратима, \(A^{-1}=PD^{-1}P^{-1}\).</p>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>Линейное \(T\) — это матрица; столбцы = образы \(\vec e_i\); \(T(\vec0)=\vec0\).</li>
<li>\(R_\theta\), \(M_x\), \(S\); композиция \(T_2\circ T_1\) = \(A_2A_1\), порядок важен.</li>
<li>\(A\vec v=\lambda\vec v\); ищем из \((A-\lambda I)\vec v=\vec0\); ответ с точностью до множителя.</li>
<li>\(A=PDP^{-1}\) при \(n\) независимых собственных векторах; \(A^k=PD^kP^{-1}\).</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>Linear transformation</h2>
<div class="box def"><span class="t">Definition</span>
\(T:\mathbb R^n\to\mathbb R^m\) is linear if for all vectors \(\vec u,\vec v\) and scalars \(c\):
<ol><li><b>additivity:</b> \(T(\vec u+\vec v)=T(\vec u)+T(\vec v)\);</li><li><b>homogeneity:</b> \(T(c\vec u)=cT(\vec u)\).</li></ol></div>
<p>Consequence (take \(c=0\)): \(T(\vec 0)=\vec 0\) — every linear map fixes the origin. If \(T(\vec0)\ne\vec0\), the map is not linear.</p>

<h2><span class="k">2</span>The standard matrix</h2>
<div class="box def"><span class="t">The big theorem</span>
Every linear \(T:\mathbb R^n\to\mathbb R^m\) is \(T(\vec v)=A\vec v\) for a unique \(m\times n\) matrix \(A\).
<b>The columns of \(A\) are the images of the standard basis vectors:</b>
\[A=\big[\,T(\vec e_1)\ \ T(\vec e_2)\ \dots\ T(\vec e_n)\,\big].\]</div>
<p>Know where \(\vec i\) and \(\vec j\) go, and you know everything about the map.</p>
<div class="box ex"><span class="t">Example</span>
\(T(1,0)=(3,-1)\), \(T(0,1)=(2,4)\Rightarrow A=\begin{pmatrix}3&2\\-1&4\end{pmatrix}\), so \(T(5,-2)=(11,-13)\).</div>

<h2><span class="k">3</span>Geometric transformations</h2>
<h3>Counterclockwise rotation by \(\theta\)</h3>
\[R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},\qquad R_{90^\circ}=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.\]
<p>\(R_{90}\): \(\vec i\to(0,1)\), \(\vec j\to(-1,0)\), \((2,1)\to(-1,2)\). Rotation by 180°: \(-I\), every vector is reversed.</p>
<h3>Reflection across the x-axis; scaling</h3>
\[M_x=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad S=\begin{pmatrix}2&0\\0&0.5\end{pmatrix}.\]
<p>\(M_x\) flips the sign of \(y\): \((2,1.2)\to(2,-1.2)\). \(S\) doubles \(x\) and halves \(y\): \((1,1)\to(2,0.5)\) — non-uniform scaling.</p>

<h2><span class="k">4</span>Composition = matrix multiplication</h2>
\[(T_2\circ T_1)(\vec v)=A_2(A_1\vec v)=(A_2A_1)\vec v.\]
<p>First \(T_1\), then \(T_2\): matrices are applied <b>right to left</b>, \(A_2A_1\).</p>
<div class="box warn"><span class="t">Order matters</span>
“Rotate, then reflect”: \(M_xR_{90}=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}\); “reflect, then rotate”: \(R_{90}M_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}\). \((1,0)\) goes to \((0,-1)\) and to \((0,1)\) respectively.</div>

<h2><span class="k">5</span>Eigenvectors</h2>
<div class="box def"><span class="t">Definition</span>
A non-zero vector \(\vec v\) is an <b>eigenvector</b> of \(A\) with eigenvalue \(\lambda\) if
\[A\vec v=\lambda\vec v.\]</div>
<p>Geometrically: \(A\) does not change the direction of \(\vec v\), only stretches or shrinks it by \(\lambda\). Every other vector gets rotated or skewed; eigenvectors are the special directions that don’t.</p>
<h3>Method</h3>
<ol>
<li>Find eigenvalues: \(\det(A-\lambda I)=0\) (Lecture 2).</li>
<li>For each \(\lambda\), solve \((A-\lambda I)\vec v=\vec 0\).</li>
</ol>
<p>A non-trivial solution always exists, because \(A-\lambda I\) is singular by construction.</p>
<div class="box ex"><span class="t">Worked example</span>
\(A=\begin{pmatrix}4&1\\2&3\end{pmatrix}\), \(\lambda_1=5,\ \lambda_2=2\).<br>
<b>\(\lambda=5\):</b> \(A-5I\to\begin{pmatrix}-1&1\\0&0\end{pmatrix}\): \(v_2=v_1\Rightarrow\vec v_1=\binom11\); \(A\vec v_1=\binom55\) ✓.<br>
<b>\(\lambda=2\):</b> \(A-2I\to\begin{pmatrix}2&1\\0&0\end{pmatrix}\): \(v_2=-2v_1\Rightarrow\vec v_2=\binom1{-2}\); \(A\vec v_2=\binom2{-4}\) ✓.</div>

<h2><span class="k">6</span>Eigenspaces and non-uniqueness</h2>
<p>Eigenvectors are never unique: if \(\vec v\) works, so does \(c\vec v\) (\(c\ne0\)). All eigenvectors for \(\lambda\), together with \(\vec 0\), form the <b>eigenspace</b> of \(\lambda\) — a line through the origin for a single direction. Report one representative; any multiple is equally valid.</p>

<h2><span class="k">7</span>Diagonalization \(A=PDP^{-1}\)</h2>
<div class="box def"><span class="t">Idea</span>
If \(A\) (\(n\times n\)) has \(n\) linearly independent eigenvectors, put them as columns of \(P\) and their eigenvalues (same order!) on the diagonal of \(D\):
\[A=PDP^{-1}.\]
Guaranteed when all \(n\) eigenvalues are distinct.</div>
<div class="box ex"><span class="t">Continuing the example</span>
\[P=\begin{pmatrix}1&1\\1&-2\end{pmatrix},\quad D=\begin{pmatrix}5&0\\0&2\end{pmatrix},\quad \det P=-3\ne0,\quad P^{-1}=\frac13\begin{pmatrix}2&1\\1&-1\end{pmatrix}.\]
\(PD=\begin{pmatrix}5&2\\5&-4\end{pmatrix}\), \(PDP^{-1}=A\) ✓.</div>
<div class="box warn"><span class="t">Not every matrix is diagonalizable</span>You need \(n\) independent eigenvectors. \(\begin{pmatrix}1&1\\0&1\end{pmatrix}\) has only one eigen-direction and cannot be diagonalized.</div>

<h2><span class="k">8</span>Why: fast matrix powers</h2>
\[A^k=(PDP^{-1})(PDP^{-1})\cdots(PDP^{-1})=PD^kP^{-1},\]
<p>since the inner \(P^{-1}P\) cancel. Powers of a diagonal matrix are entry-wise:</p>
\[D^{10}=\begin{pmatrix}5^{10}&0\\0&2^{10}\end{pmatrix}=\begin{pmatrix}9\,765\,625&0\\0&1024\end{pmatrix},\qquad A^{10}=PD^{10}P^{-1}.\]
<p>Two multiplications instead of nine. Bonus: if \(A\) is invertible, \(A^{-1}=PD^{-1}P^{-1}\).</p>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>Linear \(T\) is a matrix; columns = images of \(\vec e_i\); \(T(\vec0)=\vec0\).</li>
<li>\(R_\theta\), \(M_x\), \(S\); composition \(T_2\circ T_1\) = \(A_2A_1\), order matters.</li>
<li>\(A\vec v=\lambda\vec v\); solve \((A-\lambda I)\vec v=\vec0\); answers up to a scalar.</li>
<li>\(A=PDP^{-1}\) with \(n\) independent eigenvectors; \(A^k=PD^kP^{-1}\).</li>
</ul>
`},
glossary:[
['Linear transformation','Линейное преобразование','Сызықтық түрлендіру'],['Operator','Оператор','Оператор'],['Additivity','Аддитивность','Аддитивтілік'],['Homogeneity','Однородность','Біртектілік'],['Standard matrix','Матрица линейного преобразования','Түрлендіру матрицасы'],['Rotation','Поворот (вращение)','Бұру (айналдыру)'],['Reflection','Отражение','Шағылу'],['Scaling','Масштабирование','Масштабтау'],['Non-uniform scaling','Неоднородное масштабирование','Біртекті емес масштабтау'],['Composition','Композиция (составное преобразование)','Композиция'],['Eigenvector','Собственный вектор','Меншікті вектор'],['Eigenspace','Собственное подпространство','Меншікті кеңістік'],['Non-trivial solution','Нетривиальное решение','Тривиалды емес шешім'],['Diagonalization','Диагонализация','Диагоналдау'],['Diagonalizable','Диагонализируемый','Диагоналданатын'],['Matrix power','Степень матрицы','Матрицаның дәрежесі']
],
practice:[
{q:{ru:String.raw`\(T(\vec e_1)=(1,4)\), \(T(\vec e_2)=(2,0)\). Запиши стандартную матрицу. Чему всегда равно \(T(\vec 0)\)?`,en:String.raw`\(T(\vec e_1)=(1,4)\), \(T(\vec e_2)=(2,0)\). Write the standard matrix. What is \(T(\vec 0)\) always?`},
 a:{ru:String.raw`\(A=\begin{pmatrix}1&2\\4&0\end{pmatrix}\). \(T(\vec0)=\vec0\), так как \(T(0\cdot\vec u)=0\cdot T(\vec u)\).`,en:String.raw`\(A=\begin{pmatrix}1&2\\4&0\end{pmatrix}\). \(T(\vec0)=\vec0\), since \(T(0\cdot\vec u)=0\cdot T(\vec u)\).`}},
{q:{ru:String.raw`Запиши матрицы поворотов на 180° и 270° и примени к \(\vec v=(3,-1)\).`,en:String.raw`Write the rotation matrices for 180° and 270° and apply them to \(\vec v=(3,-1)\).`},
 a:{ru:String.raw`\(R_{180}=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}\Rightarrow(-3,1)\). \(R_{270}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\Rightarrow(-1,-3)\).`,en:String.raw`\(R_{180}=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}\Rightarrow(-3,1)\). \(R_{270}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\Rightarrow(-1,-3)\).`}},
{q:{ru:String.raw`Верно ли: если \(A\) — матрица \(T_1\), \(B\) — матрица \(T_2\), то «сначала \(T_1\), потом \(T_2\)» имеет матрицу \(AB\)?`,en:String.raw`True or false: if \(A\) is the matrix of \(T_1\) and \(B\) of \(T_2\), then “apply \(T_1\), then \(T_2\)” has matrix \(AB\).`},
 a:{ru:String.raw`Неверно: матрица \(BA\) (последнее действие пишется слева).`,en:String.raw`False: it is \(BA\) (the last map is written on the left).`}},
{q:{ru:String.raw`\(A=\begin{pmatrix}3&1\\0&2\end{pmatrix}\), \(\lambda_1=3,\ \lambda_2=2\). Найди собственные векторы. Является ли \((2,0)\) собственным? А \((3,1)\)?`,en:String.raw`\(A=\begin{pmatrix}3&1\\0&2\end{pmatrix}\), \(\lambda_1=3,\ \lambda_2=2\). Find eigenvectors. Is \((2,0)\) an eigenvector? Is \((3,1)\)?`},
 a:{ru:String.raw`\(\lambda=3\): \(\binom10\); \(\lambda=2\): \(\binom1{-1}\). \((2,0)\) — да, для \(\lambda=3\). \(A\binom31=\binom{10}{2}\) — не кратен \(\binom31\), не собственный.`,en:String.raw`\(\lambda=3\): \(\binom10\); \(\lambda=2\): \(\binom1{-1}\). \((2,0)\) — yes, for \(\lambda=3\). \(A\binom31=\binom{10}{2}\), not a multiple — not an eigenvector.`}},
{q:{ru:String.raw`Для той же \(A\) построй \(P\), \(D\), \(P^{-1}\) и найди \(A^5\).`,en:String.raw`For the same \(A\), build \(P\), \(D\), \(P^{-1}\) and compute \(A^5\).`},
 a:{ru:String.raw`\(P=\begin{pmatrix}1&1\\0&-1\end{pmatrix}\), \(D=\begin{pmatrix}3&0\\0&2\end{pmatrix}\), \(P^{-1}=P\) (\(\det P=-1\)). \(A^5=PD^5P^{-1}=\begin{pmatrix}243&211\\0&32\end{pmatrix}\).`,en:String.raw`\(P=\begin{pmatrix}1&1\\0&-1\end{pmatrix}\), \(D=\begin{pmatrix}3&0\\0&2\end{pmatrix}\), \(P^{-1}=P\) (\(\det P=-1\)). \(A^5=PD^5P^{-1}=\begin{pmatrix}243&211\\0&32\end{pmatrix}\).`}},
{q:{ru:String.raw`\(A=\begin{pmatrix}4&1&1\\0&3&2\\0&0&2\end{pmatrix}\). Найди собственные векторы для \(\lambda=2,3,4\) и собери \(P\), \(D\).`,en:String.raw`\(A=\begin{pmatrix}4&1&1\\0&3&2\\0&0&2\end{pmatrix}\). Find eigenvectors for \(\lambda=2,3,4\) and assemble \(P\), \(D\).`},
 a:{ru:String.raw`\(\lambda=2\): \((1,-4,2)\); \(\lambda=3\): \((-1,1,0)\); \(\lambda=4\): \((1,0,0)\). \(P=\begin{pmatrix}1&-1&1\\-4&1&0\\2&0&0\end{pmatrix}\), \(D=\operatorname{diag}(2,3,4)\).`,en:String.raw`\(\lambda=2\): \((1,-4,2)\); \(\lambda=3\): \((-1,1,0)\); \(\lambda=4\): \((1,0,0)\). \(P=\begin{pmatrix}1&-1&1\\-4&1&0\\2&0&0\end{pmatrix}\), \(D=\operatorname{diag}(2,3,4)\).`}},
{q:{ru:String.raw`\(A=PDP^{-1}\) и \(A\) обратима. Выведи формулу для \(A^{-1}\).`,en:String.raw`\(A=PDP^{-1}\) and \(A\) is invertible. Derive a formula for \(A^{-1}\).`},
 a:{ru:String.raw`\(A^{-1}=(P^{-1})^{-1}D^{-1}P^{-1}=PD^{-1}P^{-1}\), где \(D^{-1}=\operatorname{diag}(1/\lambda_i)\).`,en:String.raw`\(A^{-1}=(P^{-1})^{-1}D^{-1}P^{-1}=PD^{-1}P^{-1}\), with \(D^{-1}=\operatorname{diag}(1/\lambda_i)\).`}}
]
});
