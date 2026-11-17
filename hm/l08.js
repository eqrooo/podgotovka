registerTopic({
subject:'hm', id:'l08', num:8, module:3,
title:{ru:'Множества и отображения', en:'Sets and mappings'},
summary:{ru:'Операции над множествами, декартово произведение, область определения и значений; инъекции, сюръекции, биекции, обратные функции и композиция.',
         en:'Set operations, the Cartesian product, domain, codomain and range; injections, surjections, bijections, inverses and composition.'},
sources:['Higher_Mathematics_8.pdf','Higher_Mathematics_8 (1).pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Множества: обозначения и операции</h2>
<ul>
<li>\(a\in A\) — \(a\) принадлежит \(A\); \(a\notin A\) — не принадлежит.</li>
<li>\(A\subseteq B\) — \(A\) подмножество \(B\); \(\varnothing\) — пустое множество.</li>
<li>\(A\cup B\) — <b>объединение</b> (хотя бы в одном), \(A\cap B\) — <b>пересечение</b> (в обоих), \(A\setminus B\) — <b>разность</b> (в \(A\), но не в \(B\)).</li>
<li>Дополнение \(\bar A=U\setminus A\) относительно универсального множества \(U\).</li>
</ul>
<div class="box def"><span class="t">Законы де Моргана</span>
\[\overline{A\cup B}=\bar A\cap\bar B,\qquad \overline{A\cap B}=\bar A\cup\bar B.\]</div>
<div class="box ex"><span class="t">Пример</span>\(A=\{1,2,3,4\}\), \(B=\{3,4,5,6\}\): \(A\cup B=\{1,\dots,6\}\), \(A\cap B=\{3,4\}\), \(A\setminus B=\{1,2\}\).</div>

<h2><span class="k">2</span>Декартово произведение</h2>
\[A\times B=\{(a,b):a\in A,\ b\in B\},\qquad |A\times B|=|A|\cdot|B|.\]
<p>\(A=\{1,2\}\), \(B=\{x,y,z\}\): \(A\times B=\{(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)\}\), 6 пар. Это та же причина, по которой у матрицы \(n\times m\) ровно \(nm\) элементов. Пары упорядочены: \((1,x)\ne(x,1)\).</p>
<p>Для сравнения: число всех подмножеств \(n\)-элементного множества равно \(2^n\) — растёт гораздо быстрее, чем \(|A\times A|=n^2\).</p>

<h2><span class="k">3</span>Отображение (функция)</h2>
<div class="box def"><span class="t">Определение</span>
Отображение \(f:A\to B\) каждому \(a\in A\) ставит в соответствие <b>ровно один</b> элемент \(f(a)\in B\). \(A\) — <b>область определения</b>, \(B\) — <b>область прибытия</b> (кодомен).<br>
Формально: \(f\subseteq A\times B\), и каждый \(a\in A\) — первая координата ровно одной пары \((a,f(a))\).</div>
<p>Не функция, если из какого-то элемента \(A\) выходит две стрелки или ни одной. Пример: \(f(1)=a,\ f(1)=b\) — не функция.</p>

<h2><span class="k">4</span>Область значений ≠ кодомен</h2>
<p><b>Область значений</b> (образ) \(f(A)=\{f(a):a\in A\}\subseteq B\) — элементы \(B\), в которые реально что-то попадает.</p>
<div class="box warn"><span class="t">Ключевое различие</span>Образ \(\subseteq\) кодомен, но они не обязаны совпадать. Именно поэтому понятие «сюръекция» имеет смысл. Пример: \(f:\mathbb Z\to\mathbb Z,\ f(x)=2x\): кодомен \(\mathbb Z\), а образ — только чётные числа.</div>

<h2><span class="k">5</span>Инъекция (взаимно однозначно «в»)</h2>
<div class="box def"><span class="t">Определение</span>
\(f\) инъективна, если разные входы дают разные выходы: \(a_1\ne a_2\Rightarrow f(a_1)\ne f(a_2)\).<br>
Удобнее в доказательствах: \(f(a_1)=f(a_2)\Rightarrow a_1=a_2\).</div>
<p>Инъекция не обязана покрывать всё \(B\). Для функций \(\mathbb R\to\mathbb R\) — <b>тест горизонтальной прямой</b>: каждая горизонталь пересекает график не более одного раза.</p>
<div class="box ex"><span class="t">Проверка</span>
\(f(x)=3x-2\): \(3a-2=3b-2\Rightarrow a=b\) — инъекция.<br>
\(f(x)=x^2\): \(f(-2)=f(2)=4\), а \(-2\ne2\) — не инъекция.</div>

<h2><span class="k">6</span>Сюръекция («на»)</h2>
<div class="box def"><span class="t">Определение</span>
\(f\) сюръективна, если у каждого \(b\in B\) есть хотя бы один прообраз: \(\forall b\in B\ \exists a\in A:\ f(a)=b\). То же самое: образ = кодомен.</div>
<p><b>Метод:</b> возьми произвольный \(b\) и реши \(f(a)=b\) относительно \(a\). Если решение в \(A\) есть всегда — сюръекция; если для какого-то \(b\) нет — это и есть контрпример.</p>
<div class="box ex"><span class="t">Проверка</span>
\(f(x)=3x-2\): \(a=\frac{b+2}{3}\in\mathbb R\) всегда — сюръекция.<br>
\(f(x)=x^2\): для \(b=-1\) нет \(a\) с \(a^2=-1\) — не сюръекция (образ \([0,\infty)\)).</div>

<h2><span class="k">7</span>Биекция и обратная функция</h2>
<p><b>Биекция</b> — одновременно инъекция и сюръекция: идеальное попарное соответствие \(A\) и \(B\). Пример: \(f(x)=3x-2\).</p>
<div class="box def"><span class="t">Теорема</span>
\(f:A\to B\) имеет обратную \(f^{-1}:B\to A\) \(\iff\) \(f\) биекция.
<ul><li>Инъективность: у каждого \(b\) не больше одного прообраза — \(f^{-1}\) однозначна.</li><li>Сюръективность: хотя бы один — \(f^{-1}\) определена на всём \(B\).</li></ul></div>
<div class="box ex"><span class="t">Построение обратной</span>
\(y=3x-2\Rightarrow x=\frac{y+2}{3}\), то есть \(f^{-1}(y)=\frac{y+2}{3}\).
Проверка: \(f(f^{-1}(y))=y\), \(f^{-1}(f(x))=x\) ✓.</div>
<div class="box tip"><span class="t">Роль области определения</span>\(x^2:\mathbb R\to[0,\infty)\) — сюръекция, но не инъекция. \(x^2:[0,\infty)\to[0,\infty)\) — уже биекция, обратная \(\sqrt y\). Сужение области может создать обратную.</div>

<h2><span class="k">8</span>Мощность конечных множеств и принцип Дирихле</h2>
<ul>
<li>Есть инъекция \(A\to B\) \(\Rightarrow|A|\le|B|\).</li>
<li>Есть сюръекция \(A\to B\) \(\Rightarrow|A|\ge|B|\).</li>
<li>Есть биекция \(\Rightarrow|A|=|B|\).</li>
</ul>
<div class="box def"><span class="t">Принцип Дирихле (голубей и клеток)</span>Если \(|A|>|B|\), инъекции \(A\to B\) не существует: два элемента \(A\) обязательно попадут в один выход. Применения: коллизии хешей, рассадка, «задача о днях рождения». Из 13 студентов двое родились в одном месяце.</div>
<p>Подсчёт: функций \(A\to B\) всего \(|B|^{|A|}\); инъекций из \(k\)-элементного в \(n\)-элементное \(n(n-1)\cdots(n-k+1)\); биекций \(n\)-элементного на себя \(n!\).</p>

<h2><span class="k">9</span>Композиция</h2>
\[(g\circ f)(a)=g(f(a))\quad\text{— сначала }f,\text{ потом }g.\]
<ul>
<li>\(f,g\) инъекции \(\Rightarrow g\circ f\) инъекция.</li>
<li>\(f,g\) сюръекции \(\Rightarrow g\circ f\) сюръекция.</li>
<li>\(f,g\) биекции \(\Rightarrow g\circ f\) биекция и \((g\circ f)^{-1}=f^{-1}\circ g^{-1}\).</li>
</ul>
<p>Опять порядок меняется при обращении — как \((AB)^{-1}=B^{-1}A^{-1}\) и \((AB)^T=B^TA^T\). Третий раз за семестр тот же шаблон: «снимаешь носки после ботинок».</p>
<div class="box ex"><span class="t">Пример</span>\(f(x)=3x-2\), \(g(x)=x^2\): \((g\circ f)(x)=(3x-2)^2\), \((f\circ g)(x)=3x^2-2\). При \(x=2\): 16 и 10 — разные.</div>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>Инъекция: \(f(a_1)=f(a_2)\Rightarrow a_1=a_2\) — нет «склеек».</li>
<li>Сюръекция: образ = кодомен — ничего не пропущено.</li>
<li>Биекция: обе сразу — единственный случай, когда есть обратная.</li>
<li>Дирихле: \(|A|>|B|\Rightarrow\) инъекции нет. \((g\circ f)^{-1}=f^{-1}\circ g^{-1}\).</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>Sets: notation and operations</h2>
<ul>
<li>\(a\in A\): \(a\) is an element of \(A\); \(a\notin A\): it is not.</li>
<li>\(A\subseteq B\): subset; \(\varnothing\): the empty set.</li>
<li>\(A\cup B\) <b>union</b>, \(A\cap B\) <b>intersection</b>, \(A\setminus B\) <b>difference</b>.</li>
<li>Complement \(\bar A=U\setminus A\) relative to the universal set \(U\).</li>
</ul>
<div class="box def"><span class="t">De Morgan’s laws</span>
\[\overline{A\cup B}=\bar A\cap\bar B,\qquad \overline{A\cap B}=\bar A\cup\bar B.\]</div>
<div class="box ex"><span class="t">Example</span>\(A=\{1,2,3,4\}\), \(B=\{3,4,5,6\}\): \(A\cup B=\{1,\dots,6\}\), \(A\cap B=\{3,4\}\), \(A\setminus B=\{1,2\}\).</div>

<h2><span class="k">2</span>Cartesian product</h2>
\[A\times B=\{(a,b):a\in A,\ b\in B\},\qquad |A\times B|=|A|\cdot|B|.\]
<p>\(A=\{1,2\}\), \(B=\{x,y,z\}\): 6 ordered pairs. That is exactly why an \(n\times m\) matrix has \(nm\) entries. Pairs are ordered: \((1,x)\ne(x,1)\).</p>
<p>Compare: an \(n\)-element set has \(2^n\) subsets, which grows much faster than \(|A\times A|=n^2\).</p>

<h2><span class="k">3</span>Mappings (functions)</h2>
<div class="box def"><span class="t">Definition</span>
\(f:A\to B\) assigns to each \(a\in A\) <b>exactly one</b> \(f(a)\in B\). \(A\) is the <b>domain</b>, \(B\) the <b>codomain</b>.<br>
Formally: \(f\subseteq A\times B\) such that every \(a\in A\) is the first coordinate of exactly one pair.</div>
<p>Not a function if some element of \(A\) has two arrows out, or none. \(f(1)=a,\ f(1)=b\) is not a function.</p>

<h2><span class="k">4</span>Range ≠ codomain</h2>
<p>The <b>range</b> (image) \(f(A)=\{f(a):a\in A\}\subseteq B\): the elements of \(B\) actually hit.</p>
<div class="box warn"><span class="t">The crucial distinction</span>Range \(\subseteq\) codomain, but not necessarily equal — that gap is why “surjective” means something. \(f:\mathbb Z\to\mathbb Z,\ f(x)=2x\): codomain \(\mathbb Z\), range = even integers.</div>

<h2><span class="k">5</span>Injective (one-to-one)</h2>
<div class="box def"><span class="t">Definition</span>
\(a_1\ne a_2\Rightarrow f(a_1)\ne f(a_2)\). Equivalently (better for proofs): \(f(a_1)=f(a_2)\Rightarrow a_1=a_2\).</div>
<p>Need not cover all of \(B\). For real functions: the <b>horizontal line test</b> — every horizontal line meets the graph at most once.</p>
<div class="box ex"><span class="t">Check</span>
\(3x-2\): \(3a-2=3b-2\Rightarrow a=b\) — injective.<br>
\(x^2\): \(f(-2)=f(2)\) — not injective.</div>

<h2><span class="k">6</span>Surjective (onto)</h2>
<div class="box def"><span class="t">Definition</span>
\(\forall b\in B\ \exists a\in A:\ f(a)=b\). Equivalently: range = codomain.</div>
<p><b>Method:</b> take an arbitrary \(b\) and solve \(f(a)=b\). If a valid \(a\) always exists — surjective; if some \(b\) has none, that \(b\) is your counterexample.</p>
<div class="box ex"><span class="t">Check</span>
\(3x-2\): \(a=\frac{b+2}{3}\) always — surjective.<br>
\(x^2\): \(b=-1\) has no preimage — not surjective (range \([0,\infty)\)).</div>

<h2><span class="k">7</span>Bijections and inverses</h2>
<p><b>Bijective</b> = injective and surjective: a perfect pairing. Example: \(3x-2\).</p>
<div class="box def"><span class="t">Theorem</span>
\(f:A\to B\) has an inverse \(f^{-1}:B\to A\) \(\iff\) \(f\) is bijective.
<ul><li>Injective: each \(b\) has at most one preimage — \(f^{-1}\) is unambiguous.</li><li>Surjective: at least one — \(f^{-1}\) is defined on all of \(B\).</li></ul></div>
<div class="box ex"><span class="t">Constructing an inverse</span>
\(y=3x-2\Rightarrow f^{-1}(y)=\frac{y+2}{3}\). Check both \(f(f^{-1}(y))=y\) and \(f^{-1}(f(x))=x\) ✓.</div>
<div class="box tip"><span class="t">The role of the domain</span>\(x^2:\mathbb R\to[0,\infty)\) is onto but not one-to-one; \(x^2:[0,\infty)\to[0,\infty)\) is a bijection with inverse \(\sqrt y\). Restricting the domain can create an inverse.</div>

<h2><span class="k">8</span>Cardinality of finite sets; pigeonhole</h2>
<ul>
<li>Injection \(A\to B\) exists \(\Rightarrow|A|\le|B|\).</li>
<li>Surjection \(A\to B\) exists \(\Rightarrow|A|\ge|B|\).</li>
<li>Bijection \(\Rightarrow|A|=|B|\).</li>
</ul>
<div class="box def"><span class="t">Pigeonhole principle</span>If \(|A|>|B|\), no injection \(A\to B\) exists: two elements must share an output. Applications: hash collisions, seat assignments, birthday problems. Among 13 students two share a birth month.</div>
<p>Counting: there are \(|B|^{|A|}\) functions \(A\to B\); \(n(n-1)\cdots(n-k+1)\) injections from a \(k\)-set into an \(n\)-set; \(n!\) bijections of an \(n\)-set onto itself.</p>

<h2><span class="k">9</span>Composition</h2>
\[(g\circ f)(a)=g(f(a))\quad\text{— apply }f\text{ first, then }g.\]
<ul>
<li>both injective \(\Rightarrow g\circ f\) injective;</li>
<li>both surjective \(\Rightarrow g\circ f\) surjective;</li>
<li>both bijective \(\Rightarrow g\circ f\) bijective and \((g\circ f)^{-1}=f^{-1}\circ g^{-1}\).</li>
</ul>
<p>Order reverses under inversion, like \((AB)^{-1}=B^{-1}A^{-1}\) and \((AB)^T=B^TA^T\) — the third appearance this semester.</p>
<div class="box ex"><span class="t">Example</span>\(f(x)=3x-2\), \(g(x)=x^2\): \((g\circ f)(x)=(3x-2)^2\), \((f\circ g)(x)=3x^2-2\). At \(x=2\): 16 vs 10.</div>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>Injective: \(f(a_1)=f(a_2)\Rightarrow a_1=a_2\) — no collisions.</li>
<li>Surjective: range = codomain — nothing left out.</li>
<li>Bijective: both — the only case with a true inverse.</li>
<li>Pigeonhole: \(|A|>|B|\Rightarrow\) no injection. \((g\circ f)^{-1}=f^{-1}\circ g^{-1}\).</li>
</ul>
`},
glossary:[
['Set','Множество',''],['Element','Элемент',''],['Subset','Подмножество',''],['Empty set','Пустое множество',''],['Union','Объединение',''],['Intersection','Пересечение',''],['Difference','Разность',''],['Complement','Дополнение',''],['Cartesian product','Декартово произведение',''],['Ordered pair','Упорядоченная пара',''],['Cardinality','Мощность',''],['Mapping / function','Отображение / функция',''],['Domain','Область определения',''],['Codomain','Область прибытия (кодомен)',''],['Range / image','Область значений / образ',''],['Preimage','Прообраз',''],['Injective (one-to-one)','Инъективная',''],['Surjective (onto)','Сюръективная',''],['Bijective','Биективная (взаимно однозначная)',''],['Inverse function','Обратная функция',''],['Composition','Композиция',''],['Pigeonhole principle','Принцип Дирихле',''],['Counterexample','Контрпример','']
],
practice:[
{q:{ru:String.raw`\(U=\{1,\dots,8\}\), \(A=\{1,2,3,4\}\), \(B=\{3,4,5,6\}\), \(C=\{2,4,6,8\}\). Найди \((A\cup B)\cap C\), \(A\setminus(B\cup C)\), \(\overline{A\cap B}\) и проверь закон де Моргана \(\overline{A\cup B}=\bar A\cap\bar B\).`,en:String.raw`\(U=\{1,\dots,8\}\), \(A=\{1,2,3,4\}\), \(B=\{3,4,5,6\}\), \(C=\{2,4,6,8\}\). Find \((A\cup B)\cap C\), \(A\setminus(B\cup C)\), \(\overline{A\cap B}\), and verify \(\overline{A\cup B}=\bar A\cap\bar B\).`},
 a:{ru:String.raw`\(\{2,4,6\}\); \(\{1\}\); \(\{1,2,5,6,7,8\}\). \(\overline{A\cup B}=\{7,8\}\), \(\bar A\cap\bar B=\{5,6,7,8\}\cap\{1,2,7,8\}=\{7,8\}\) ✓.`,en:String.raw`\(\{2,4,6\}\); \(\{1\}\); \(\{1,2,5,6,7,8\}\). \(\overline{A\cup B}=\{7,8\}=\bar A\cap\bar B\) ✓.`}},
{q:{ru:String.raw`\(f:\mathbb Z\to\mathbb Z\), \(f(x)=2x+1\). Кодомен и область значений совпадают?`,en:String.raw`\(f:\mathbb Z\to\mathbb Z\), \(f(x)=2x+1\). Are the codomain and range equal?`},
 a:{ru:String.raw`Нет: кодомен \(\mathbb Z\), образ — нечётные числа.`,en:String.raw`No: codomain \(\mathbb Z\), range = odd integers.`}},
{q:{ru:String.raw`\(f:\{1,2,3,4\}\to\{a,b,c\}\): \(f(1)=b,f(2)=a,f(3)=b,f(4)=a\). Образ? Инъекция? Сюръекция?`,en:String.raw`\(f:\{1,2,3,4\}\to\{a,b,c\}\): \(f(1)=b,f(2)=a,f(3)=b,f(4)=a\). Range? Injective? Surjective?`},
 a:{ru:String.raw`Образ \(\{a,b\}\ne\) кодомен. Не инъекция: \(f(1)=f(3)\). Не сюръекция: в \(c\) ничего не попадает.`,en:String.raw`Range \(\{a,b\}\ne\) codomain. Not injective: \(f(1)=f(3)\). Not surjective: nothing hits \(c\).`}},
{q:{ru:String.raw`\(g(x)=\frac1{x-2}\). Найди естественную область определения и область значений.`,en:String.raw`\(g(x)=\frac1{x-2}\). Find the natural domain and the range.`},
 a:{ru:String.raw`\(D=\mathbb R\setminus\{2\}\). Из \(y=\frac1{x-2}\Rightarrow x=2+\frac1y\), невозможно только \(y=0\): \(E=\mathbb R\setminus\{0\}\).`,en:String.raw`\(D=\mathbb R\setminus\{2\}\). \(x=2+\frac1y\) fails only for \(y=0\): range \(\mathbb R\setminus\{0\}\).`}},
{q:{ru:String.raw`Исследуй \(f(x)=4-5x\) и \(f(x)=x^2-4\) (обе \(\mathbb R\to\mathbb R\)) на инъективность и сюръективность.`,en:String.raw`Test \(f(x)=4-5x\) and \(f(x)=x^2-4\) (both \(\mathbb R\to\mathbb R\)) for injectivity and surjectivity.`},
 a:{ru:String.raw`\(4-5x\): \(4-5a=4-5b\Rightarrow a=b\); \(a=\frac{4-b}{5}\) всегда — биекция. \(x^2-4\): \(f(-1)=f(1)\) — не инъекция; \(b=-5\) недостижимо — не сюръекция.`,en:String.raw`\(4-5x\): injective and \(a=\frac{4-b}{5}\) always works — bijective. \(x^2-4\): \(f(-1)=f(1)\) — not injective; \(b=-5\) is never hit — not surjective.`}},
{q:{ru:String.raw`При каких \(k\) функция \(f(x)=kx+3\) биективна на \(\mathbb R\)?`,en:String.raw`For which \(k\) is \(f(x)=kx+3\) bijective on \(\mathbb R\)?`},
 a:{ru:String.raw`При \(k\ne0\) (тогда \(f^{-1}(y)=\frac{y-3}{k}\)). При \(k=0\) — константа 3: ни инъекция, ни сюръекция.`,en:String.raw`For \(k\ne0\) (\(f^{-1}(y)=\frac{y-3}{k}\)). \(k=0\) gives the constant 3: neither.`}},
{q:{ru:String.raw`Для каждого: инъекция, сюръекция, биекция? (i) \(3x:\mathbb Z\to\mathbb Z\); (ii) \(x^3:\mathbb R\to\mathbb R\); (iii) \(x^2:\mathbb R\to[0,\infty)\); (iv) \(x^2:[0,\infty)\to[0,\infty)\).`,en:String.raw`Injective, surjective, bijective? (i) \(3x:\mathbb Z\to\mathbb Z\); (ii) \(x^3:\mathbb R\to\mathbb R\); (iii) \(x^2:\mathbb R\to[0,\infty)\); (iv) \(x^2:[0,\infty)\to[0,\infty)\).`},
 a:{ru:String.raw`(i) инъекция, не сюръекция (нет 1); (ii) биекция; (iii) сюръекция, не инъекция; (iv) биекция. Изменилась только область определения.`,en:String.raw`(i) injective, not surjective (1 missed); (ii) bijective; (iii) surjective, not injective; (iv) bijective. Only the domain changed.`}},
{q:{ru:String.raw`Подсчёт: (i) функций \(\{1,2,3\}\to\{a,b\}\); (ii) инъекций \(\{1,2\}\to\{a,b,c\}\); (iii) биекций 4-элементного множества на себя; (iv) инъекций из 4-элементного в 3-элементное.`,en:String.raw`Counting: (i) functions \(\{1,2,3\}\to\{a,b\}\); (ii) injections \(\{1,2\}\to\{a,b,c\}\); (iii) bijections of a 4-set; (iv) injections from a 4-set into a 3-set.`},
 a:{ru:String.raw`(i) \(2^3=8\); (ii) \(3\cdot2=6\); (iii) \(4!=24\); (iv) 0 — по принципу Дирихле.`,en:String.raw`(i) \(2^3=8\); (ii) \(3\cdot2=6\); (iii) \(4!=24\); (iv) 0 — pigeonhole.`}},
{q:{ru:String.raw`Какой минимальный размер группы гарантирует троих студентов, родившихся в одном месяце?`,en:String.raw`What is the smallest group size that guarantees three students born in the same month?`},
 a:{ru:String.raw`\(2\cdot12+1=25\).`,en:String.raw`\(2\cdot12+1=25\).`}},
{q:{ru:String.raw`\(f(x)=x+1\), \(g(x)=2x\). Найди \(g\circ f\), \(f\circ g\), \((g\circ f)^{-1}\). Найди \(f^{-1}\) для \(f(x)=x^3+1\).`,en:String.raw`\(f(x)=x+1\), \(g(x)=2x\). Find \(g\circ f\), \(f\circ g\), \((g\circ f)^{-1}\). Find \(f^{-1}\) for \(f(x)=x^3+1\).`},
 a:{ru:String.raw`\(g\circ f=2x+2\), \(f\circ g=2x+1\) — разные. \((g\circ f)^{-1}(y)=f^{-1}(g^{-1}(y))=\frac y2-1\). Для \(x^3+1\): \(f^{-1}(y)=\sqrt[3]{y-1}\).`,en:String.raw`\(g\circ f=2x+2\), \(f\circ g=2x+1\) — different. \((g\circ f)^{-1}(y)=\frac y2-1\). For \(x^3+1\): \(f^{-1}(y)=\sqrt[3]{y-1}\).`}},
{q:{ru:String.raw`Докажи: если \(f:A\to B\) и \(g:B\to C\) инъективны, то \(g\circ f\) инъективна.`,en:String.raw`Prove: if \(f:A\to B\) and \(g:B\to C\) are injective, then \(g\circ f\) is injective.`},
 a:{ru:String.raw`Пусть \(g(f(a_1))=g(f(a_2))\). Так как \(g\) инъективна, \(f(a_1)=f(a_2)\); так как \(f\) инъективна, \(a_1=a_2\). ∎`,en:String.raw`Let \(g(f(a_1))=g(f(a_2))\). \(g\) injective gives \(f(a_1)=f(a_2)\); \(f\) injective gives \(a_1=a_2\). ∎`}}
]
});
