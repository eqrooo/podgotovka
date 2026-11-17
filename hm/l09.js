registerTopic({
subject:'hm', id:'l09', num:9, module:3,
title:{ru:'Числовые множества, аксиомы, мощность', en:'Numerical sets, axioms, cardinality'},
summary:{ru:'От \(\mathbb N\) до \(\mathbb C\), аксиомы Пеано и аксиомы \(\mathbb R\), супремум, иррациональность \(\sqrt2\), счётные множества и диагональный аргумент Кантора.',
         en:'From \(\mathbb N\) to \(\mathbb C\), Peano and real-number axioms, supremum, irrationality of \(\sqrt2\), countable sets and Cantor’s diagonal argument.'},
sources:['Higher_Mathematics_9.pdf','Higher_Mathematics_9 (1).pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Иерархия числовых множеств</h2>
\[\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb A\subset\mathbb R\subset\mathbb C\]
<ul>
<li>\(\mathbb N=\{0,1,2,\dots\}\) — натуральные (в курсе 0 считается натуральным, как в американской традиции);</li>
<li>\(\mathbb Z=\{\dots,-1,0,1,\dots\}\) — целые;</li>
<li>\(\mathbb Q=\{p/q:\ p,q\in\mathbb Z,\ q\ne0\}\) — рациональные;</li>
<li>\(\mathbb A\) — алгебраические (корни многочленов с целыми коэффициентами, например \(\sqrt2\));</li>
<li>\(\mathbb R\) — действительные (рациональные + иррациональные, или алгебраические + трансцендентные, как \(\pi, e\));</li>
<li>\(\mathbb C=\{a+bi:\ a,b\in\mathbb R\}\) — комплексные.</li>
</ul>
<h3>Зачем каждое расширение</h3>
<div class="tw"><table><thead><tr><th>Переход</th><th>Нерешаемое уравнение</th><th>Что добавили</th></tr></thead><tbody>
<tr><td>\(\mathbb N\to\mathbb Z\)</td><td>\(x+5=3\)</td><td>отрицательные</td></tr>
<tr><td>\(\mathbb Z\to\mathbb Q\)</td><td>\(2x=3\)</td><td>дроби</td></tr>
<tr><td>\(\mathbb Q\to\mathbb R\)</td><td>\(x^2=2\)</td><td>иррациональные</td></tr>
<tr><td>\(\mathbb R\to\mathbb C\)</td><td>\(x^2=-1\)</td><td>мнимая единица \(i\)</td></tr>
</tbody></table></div>
<p>Каждая новая система закрывает дыру, которую не могла закрыть предыдущая.</p>

<h2><span class="k">2</span>Аксиомы Пеано (как построено \(\mathbb N\))</h2>
<ol>
<li>0 — натуральное число.</li>
<li>У каждого \(n\) есть единственный последователь \(S(n)\in\mathbb N\) (думай \(S(n)=n+1\)).</li>
<li>0 не является последователем никакого числа.</li>
<li>\(S(m)=S(n)\Rightarrow m=n\) — функция \(S\) инъективна (лекция 8).</li>
<li><b>Аксиома индукции:</b> если \(K\subseteq\mathbb N\) содержит 0 и вместе с каждым \(n\) содержит \(S(n)\), то \(K=\mathbb N\).</li>
</ol>
<p>Аксиома 5 — это и есть принцип математической индукции (лекция 10).</p>

<h2><span class="k">3</span>Аксиомы поля и порядка</h2>
<p><b>Поле</b> \((\mathbb R,+,\cdot)\): для всех \(a,b,c\)</p>
<ul>
<li>замкнутость: \(a+b,\ ab\in\mathbb R\);</li>
<li>ассоциативность и коммутативность обеих операций;</li>
<li>нейтральные: \(a+0=a\), \(a\cdot1=a\);</li>
<li>обратные: \(a+(-a)=0\); \(a\cdot a^{-1}=1\) при \(a\ne0\);</li>
<li>дистрибутивность: \(a(b+c)=ab+ac\).</li>
</ul>
<p>Матрицы этим аксиомам <b>не</b> удовлетворяют: умножение некоммутативно и не у каждой ненулевой матрицы есть обратная. \(\mathbb Z\) тоже не поле: у 2 нет обратного по умножению в \(\mathbb Z\).</p>
<p><b>Порядок:</b> трихотомия (ровно одно из \(a\lt b,\ a=b,\ a>b\)), транзитивность, \(a\lt b\Rightarrow a+c\lt b+c\), \(a\lt b,\ c>0\Rightarrow ac\lt bc\). Но и \(\mathbb Q\) упорядоченное поле — порядок не отличает \(\mathbb R\) от \(\mathbb Q\).</p>

<h2><span class="k">4</span>Супремум и максимум</h2>
<ul>
<li><b>Верхняя граница</b> (мажоранта) множества \(S\): число \(M\), что \(x\le M\) для всех \(x\in S\).</li>
<li><b>Супремум</b> \(\sup S\) — <b>наименьшая</b> верхняя граница.</li>
<li><b>Инфимум</b> \(\inf S\) — <b>наибольшая</b> нижняя граница.</li>
</ul>
<div class="box warn"><span class="t">sup ≠ max</span>
\(S=(0,1)\): верхние границы \(1,\ 1.5,\ 2,\dots\), \(\sup S=1\). Максимума нет: \(1\notin S\), а любое \(0.999\ldots9\) можно превзойти. Максимум обязан лежать в множестве, супремум — нет.</div>
<div class="box ex"><span class="t">Примеры</span>
\((2,7]\): \(\sup=\max=7\), \(\inf=2\), \(\min\) нет.<br>
\(\{1/n:n\ge1\}\): \(\sup=\max=1\), \(\inf=0\), \(\min\) нет.<br>
\(\mathbb N\): \(\inf=\min=0\), \(\sup\) и \(\max\) нет (не ограничено сверху).</div>

<h2><span class="k">5</span>Аксиома полноты</h2>
<div class="box def"><span class="t">То, что делает \(\mathbb R\) особенным</span>Любое непустое ограниченное сверху подмножество \(\mathbb R\) имеет супремум в \(\mathbb R\).</div>
<p>\(\mathbb Q\) этого не выполняет: \(\{q\in\mathbb Q:q^2\lt2\}\) ограничено сверху, но рационального супремума нет (он равен \(\sqrt2\)). Полнота «заполняет дыры» и превращает \(\mathbb Q\) в \(\mathbb R\).</p>

<h2><span class="k">6</span>\(\sqrt2\) иррационально</h2>
<div class="box ex"><span class="t">Доказательство от противного</span>
Пусть \(\sqrt2=p/q\) — несократимая дробь, \(\gcd(p,q)=1\). Тогда \(p^2=2q^2\Rightarrow p^2\) чётно \(\Rightarrow p\) чётно. Пусть \(p=2k\): \(4k^2=2q^2\Rightarrow q^2=2k^2\Rightarrow q\) тоже чётно. Оба чётные — противоречие с несократимостью. Значит \(\sqrt2\notin\mathbb Q\). ∎</div>
<p>Так же доказывается для \(\sqrt3\) (через делимость на 3). Для \(\sqrt4\) не сработает: из \(p^2=4q^2\) получаем \(p=2q\), противоречия нет — и правильно, \(\sqrt4=2\).</p>

<h2><span class="k">7</span>Мощность через биекции</h2>
<div class="box def"><span class="t">Определение</span>\(|A|=|B|\) означает: существует биекция \(f:A\to B\).</div>
<p>Для конечных множеств — «одинаковое число элементов». Но определение работает и для бесконечных: мы не считаем, а проверяем, есть ли идеальное попарное соответствие.</p>
<p><b>Определение Дедекинда:</b> \(A\) бесконечно, если существует биекция между \(A\) и его собственным подмножеством. Пример: \(f(n)=n+1\) — биекция \(\mathbb N\to\mathbb N\setminus\{0\}\).</p>
<div class="box tip"><span class="t">Отель Гильберта</span>Все номера \(0,1,2,\dots\) заняты, приехал ещё один гость. Каждого из номера \(n\) переселяем в \(n+1\) — номер 0 свободен, все при номерах. Для бесконечно многих новых гостей: из \(n\) в \(2n\) — освобождаются все нечётные.</div>

<h2><span class="k">8</span>Счётные множества</h2>
<p>\(A\) <b>счётно</b> (денумерабельно), если есть биекция \(\mathbb N\to A\), то есть элементы можно выписать в последовательность \(a_0,a_1,a_2,\dots\), где каждый встречается ровно раз. «Не более чем счётное» = конечное или счётное; иначе — <b>несчётное</b>.</p>
<h3>\(\mathbb Z\) счётно</h3>
\[f(n)=\begin{cases}\dfrac n2,& n\text{ чётное}\\[4pt]-\dfrac{n+1}{2},& n\text{ нечётное}\end{cases}\qquad 0,-1,1,-2,2,-3,3,\dots\]
<p>\(\mathbb Z\) «кажется вдвое больше», но \(|\mathbb Z|=|\mathbb N|\).</p>
<h3>\(\mathbb Q\) счётно (зигзаг Кантора)</h3>
<p>Расставляем дроби \(p/q\) в таблицу (строка \(q\), столбец \(p\)) и обходим по диагоналям зигзагом, пропуская повторы вроде \(2/4=1/2\). Хотя \(\mathbb Q\) плотно (между любыми двумя рациональными бесконечно много других), \(|\mathbb Q|=|\mathbb N|\). Тем же зигзагом нумеруется \(\mathbb N\times\mathbb N\): \((0,0),(0,1),(1,0),(0,2),(1,1),(2,0),\dots\)</p>

<h2><span class="k">9</span>Диагональный аргумент: \(\mathbb R\) несчётно</h2>
<div class="box ex"><span class="t">Доказательство</span>
Пусть \((0,1)\) счётно, и все его числа выписаны: \(r_1=0.\mathbf{3}141\ldots,\ r_2=0.7\mathbf{2}81\ldots,\ r_3=0.55\mathbf{9}2\ldots,\ r_4=0.665\mathbf{3}\ldots\)<br>
Строим \(d\): \(n\)-я цифра \(d\) = \(n\)-я цифра \(r_n\) плюс 1 (9 → 0). Получаем \(d=0.4304\ldots\) Оно отличается от каждого \(r_n\) хотя бы в \(n\)-й цифре, значит его нет в списке. Но \(d\in(0,1)\) — противоречие. ∎</div>
<p>Иррациональные числа тоже несчётны: \(\mathbb R=\mathbb Q\cup(\mathbb R\setminus\mathbb Q)\), и если бы обе части были счётными, \(\mathbb R\) тоже было бы счётным.</p>

<h2><span class="k">10</span>Кардинальные числа</h2>
<ul>
<li>\(|\mathbb N|=|\mathbb Z|=|\mathbb Q|=\aleph_0\) («алеф-ноль») — самая маленькая бесконечность.</li>
<li>\(|\mathbb R|=\mathfrak c\) (континуум), \(\mathfrak c>\aleph_0\).</li>
</ul>
<p>Есть ли мощность строго между \(\aleph_0\) и \(\mathfrak c\)? Это <b>континуум-гипотеза</b>; Гёдель и Коэн показали, что её нельзя ни доказать, ни опровергнуть в стандартной теории множеств.</p>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>\(\mathbb N\) — аксиомы Пеано; аксиома 5 = индукция.</li>
<li>\(\mathbb R\) = поле + порядок + <b>полнота</b>; именно полноты нет у \(\mathbb Q\).</li>
<li>\(\sup\) может не лежать в множестве, \(\max\) — обязан.</li>
<li>\(\mathbb N,\mathbb Z,\mathbb Q\) счётны (\(\aleph_0\)); \(\mathbb R\) несчётно (\(\mathfrak c\)) — Кантор.</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>The hierarchy of numerical sets</h2>
\[\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb A\subset\mathbb R\subset\mathbb C\]
<ul>
<li>\(\mathbb N=\{0,1,2,\dots\}\) naturals (0 counts as natural in this course);</li>
<li>\(\mathbb Z\) integers; \(\mathbb Q=\{p/q:\ q\ne0\}\) rationals;</li>
<li>\(\mathbb A\) algebraics — roots of integer polynomials (e.g. \(\sqrt2\));</li>
<li>\(\mathbb R\) reals (rationals + irrationals, or algebraics + transcendentals like \(\pi, e\));</li>
<li>\(\mathbb C=\{a+bi\}\) complex numbers.</li>
</ul>
<h3>Why each extension exists</h3>
<div class="tw"><table><thead><tr><th>Extension</th><th>Unsolvable equation</th><th>Fix</th></tr></thead><tbody>
<tr><td>\(\mathbb N\to\mathbb Z\)</td><td>\(x+5=3\)</td><td>negative numbers</td></tr>
<tr><td>\(\mathbb Z\to\mathbb Q\)</td><td>\(2x=3\)</td><td>fractions</td></tr>
<tr><td>\(\mathbb Q\to\mathbb R\)</td><td>\(x^2=2\)</td><td>irrationals</td></tr>
<tr><td>\(\mathbb R\to\mathbb C\)</td><td>\(x^2=-1\)</td><td>imaginary unit \(i\)</td></tr>
</tbody></table></div>

<h2><span class="k">2</span>Peano axioms</h2>
<ol>
<li>0 is a natural number.</li>
<li>Every \(n\) has a unique successor \(S(n)\in\mathbb N\) (think \(n+1\)).</li>
<li>0 is not the successor of any natural number.</li>
<li>\(S(m)=S(n)\Rightarrow m=n\): the successor function is injective.</li>
<li><b>Induction axiom:</b> if \(K\subseteq\mathbb N\) contains 0 and contains \(S(n)\) whenever it contains \(n\), then \(K=\mathbb N\).</li>
</ol>
<p>Axiom 5 is exactly mathematical induction (Lecture 10).</p>

<h2><span class="k">3</span>Field and order axioms</h2>
<p><b>Field</b> \((\mathbb R,+,\cdot)\): closure; associativity and commutativity of both operations; identities \(a+0=a\), \(a\cdot1=a\); inverses \(-a\) and \(a^{-1}\) (\(a\ne0\)); distributivity.</p>
<p>Matrices are <b>not</b> a field (non-commutative, not every non-zero matrix is invertible). \(\mathbb Z\) is not a field either: 2 has no multiplicative inverse in \(\mathbb Z\).</p>
<p><b>Order:</b> trichotomy, transitivity, compatibility with \(+\) and with multiplication by \(c>0\). \(\mathbb Q\) is also an ordered field — order alone does not separate \(\mathbb R\) from \(\mathbb Q\).</p>

<h2><span class="k">4</span>Supremum vs maximum</h2>
<ul>
<li><b>Upper bound</b> (majorant) of \(S\): \(M\) with \(x\le M\) for all \(x\in S\).</li>
<li><b>Supremum</b> \(\sup S\): the least upper bound. <b>Infimum</b> \(\inf S\): the greatest lower bound.</li>
</ul>
<div class="box warn"><span class="t">sup ≠ max</span>
\(S=(0,1)\): \(\sup S=1\), but there is no maximum since \(1\notin S\). A maximum must belong to the set; a supremum need not.</div>
<div class="box ex"><span class="t">Examples</span>
\((2,7]\): \(\sup=\max=7\), \(\inf=2\), no min.<br>
\(\{1/n:n\ge1\}\): \(\sup=\max=1\), \(\inf=0\), no min.<br>
\(\mathbb N\): \(\inf=\min=0\), no sup, no max.</div>

<h2><span class="k">5</span>The completeness axiom</h2>
<div class="box def"><span class="t">What makes \(\mathbb R\) special</span>Every non-empty subset of \(\mathbb R\) that is bounded above has a supremum in \(\mathbb R\).</div>
<p>\(\mathbb Q\) fails it: \(\{q\in\mathbb Q:q^2\lt2\}\) is bounded but has no rational supremum (it is \(\sqrt2\)). Completeness fills the gaps and turns \(\mathbb Q\) into \(\mathbb R\).</p>

<h2><span class="k">6</span>\(\sqrt2\) is irrational</h2>
<div class="box ex"><span class="t">Proof by contradiction</span>
Suppose \(\sqrt2=p/q\) in lowest terms. Then \(p^2=2q^2\), so \(p\) is even; write \(p=2k\): \(q^2=2k^2\), so \(q\) is even too. Both even contradicts lowest terms. ∎</div>
<p>The same works for \(\sqrt3\). For \(\sqrt4\) it fails: \(p^2=4q^2\) gives \(p=2q\), no contradiction — correctly, since \(\sqrt4=2\).</p>

<h2><span class="k">7</span>Cardinality via bijections</h2>
<div class="box def"><span class="t">Definition</span>\(|A|=|B|\) means there is a bijection \(f:A\to B\).</div>
<p>This works unchanged for infinite sets: we never count, we only check for a perfect pairing.</p>
<p><b>Dedekind:</b> \(A\) is infinite if it is in bijection with a proper subset of itself. \(f(n)=n+1\) maps \(\mathbb N\) onto \(\mathbb N\setminus\{0\}\).</p>
<div class="box tip"><span class="t">Hilbert’s Hotel</span>Fully booked rooms \(0,1,2,\dots\); one more guest arrives: move everyone from \(n\) to \(n+1\), room 0 is free. Infinitely many new guests: move \(n\to2n\), all odd rooms open up.</div>

<h2><span class="k">8</span>Denumerable sets</h2>
<p>\(A\) is <b>denumerable</b> (countably infinite) if there is a bijection \(\mathbb N\to A\): its elements can be listed \(a_0,a_1,a_2,\dots\) hitting each exactly once. Countable = finite or denumerable; otherwise uncountable.</p>
<h3>\(\mathbb Z\) is denumerable</h3>
\[f(n)=\begin{cases}\dfrac n2,& n\text{ even}\\[4pt]-\dfrac{n+1}{2},& n\text{ odd}\end{cases}\qquad 0,-1,1,-2,2,-3,3,\dots\]
<h3>\(\mathbb Q\) is denumerable (Cantor’s zigzag)</h3>
<p>Arrange \(p/q\) in a grid and walk the diagonals, skipping repeats like \(2/4=1/2\). \(\mathbb Q\) is dense, yet \(|\mathbb Q|=|\mathbb N|\). The same zigzag lists \(\mathbb N\times\mathbb N\): \((0,0),(0,1),(1,0),(0,2),(1,1),(2,0),\dots\)</p>

<h2><span class="k">9</span>Cantor’s diagonal argument: \(\mathbb R\) is uncountable</h2>
<div class="box ex"><span class="t">Proof</span>
Suppose all of \((0,1)\) is listed: \(r_1=0.\mathbf{3}141\ldots,\ r_2=0.7\mathbf{2}81\ldots,\ r_3=0.55\mathbf{9}2\ldots,\ r_4=0.665\mathbf{3}\ldots\)<br>
Build \(d\) by adding 1 to each diagonal digit (9 → 0): \(d=0.4304\ldots\) It differs from every \(r_n\) in the \(n\)-th digit, so it is not listed — yet \(d\in(0,1)\). Contradiction. ∎</div>
<p>The irrationals are uncountable too: if both \(\mathbb Q\) and \(\mathbb R\setminus\mathbb Q\) were countable, so would be \(\mathbb R\).</p>

<h2><span class="k">10</span>Cardinal numbers</h2>
<ul>
<li>\(|\mathbb N|=|\mathbb Z|=|\mathbb Q|=\aleph_0\) — the smallest infinity.</li>
<li>\(|\mathbb R|=\mathfrak c\) (the continuum), \(\mathfrak c>\aleph_0\).</li>
</ul>
<p>Is there a size strictly between? That is the <b>Continuum Hypothesis</b>, shown by Gödel and Cohen to be independent of the standard axioms.</p>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>\(\mathbb N\) rests on Peano; axiom 5 is induction.</li>
<li>\(\mathbb R\) = field + order + <b>completeness</b>, which \(\mathbb Q\) lacks.</li>
<li>\(\sup\) need not be in the set; \(\max\) must.</li>
<li>\(\mathbb N,\mathbb Z,\mathbb Q\) are countable (\(\aleph_0\)); \(\mathbb R\) is not (\(\mathfrak c\)).</li>
</ul>
`},
glossary:[
['Natural numbers','Натуральные числа',''],['Integers','Целые числа',''],['Rational numbers','Рациональные числа',''],['Algebraic numbers','Алгебраические числа',''],['Transcendental','Трансцендентное',''],['Real numbers','Действительные числа',''],['Complex numbers','Комплексные числа',''],['Successor','Последователь',''],['Field','Поле',''],['Ordered field','Упорядоченное поле',''],['Trichotomy','Трихотомия',''],['Upper bound (majorant)','Верхняя граница (мажоранта)',''],['Supremum / infimum','Супремум / инфимум',''],['Completeness axiom','Аксиома полноты',''],['Irrational','Иррациональное',''],['Proof by contradiction','Доказательство от противного',''],['Proper subset','Собственное подмножество',''],['Denumerable (countably infinite)','Счётное',''],['Uncountable','Несчётное',''],['Diagonal argument','Диагональный аргумент',''],['Continuum','Континуум',''],['Continuum Hypothesis','Континуум-гипотеза','']
],
practice:[
{q:{ru:String.raw`Является ли \((\mathbb Z,+,\times)\) полем?`,en:String.raw`Is \((\mathbb Z,+,\times)\) a field?`},a:{ru:String.raw`Нет: нет обратных по умножению, например у 2 (\(1/2\notin\mathbb Z\)). Остальные аксиомы выполняются.`,en:String.raw`No: multiplicative inverses fail, e.g. for 2 (\(1/2\notin\mathbb Z\)). The other axioms hold.`}},
{q:{ru:String.raw`Найди sup, inf, max, min: (i) \((2,7]\); (ii) \(\{1/n:n\ge1\}\); (iii) \(\mathbb N\).`,en:String.raw`Find sup, inf, max, min: (i) \((2,7]\); (ii) \(\{1/n:n\ge1\}\); (iii) \(\mathbb N\).`},a:{ru:String.raw`(i) 7, 2, 7, нет; (ii) 1, 0, 1, нет; (iii) нет, 0, нет, 0.`,en:String.raw`(i) 7, 2, 7, none; (ii) 1, 0, 1, none; (iii) none, 0, none, 0.`}},
{q:{ru:String.raw`\(S=\{x\in\mathbb Q:x\lt3\}\). Докажи, что \(\sup S=3\).`,en:String.raw`\(S=\{x\in\mathbb Q:x\lt3\}\). Prove \(\sup S=3\).`},a:{ru:String.raw`(1) 3 — верхняя граница: все \(x\in S\) меньше 3. (2) Если \(M\lt3\), между \(M\) и 3 есть рациональное \(q\) (например \(\frac{M+3}{2}\), если \(M\) рационально; в общем — по плотности \(\mathbb Q\)), и \(q\in S\), \(q>M\) — значит \(M\) не граница.`,en:String.raw`(1) 3 is an upper bound. (2) If \(M\lt3\), density of \(\mathbb Q\) gives a rational \(q\) with \(M\lt q\lt3\); then \(q\in S\) exceeds \(M\), so \(M\) is not an upper bound.`}},
{q:{ru:String.raw`Докажи, что \(\sqrt3\) иррационально.`,en:String.raw`Prove that \(\sqrt3\) is irrational.`},a:{ru:String.raw`\(\sqrt3=p/q\) несократимо \(\Rightarrow p^2=3q^2\Rightarrow 3\mid p^2\Rightarrow3\mid p\) (3 простое). \(p=3k\Rightarrow q^2=3k^2\Rightarrow3\mid q\). Противоречие. ∎`,en:String.raw`\(p^2=3q^2\Rightarrow3\mid p\) (3 is prime); \(p=3k\Rightarrow q^2=3k^2\Rightarrow3\mid q\). Contradiction. ∎`}},
{q:{ru:String.raw`Построй биекции: \(\mathbb N\to\{0,2,4,\dots\}\) и \((0,1)\to(0,2)\).`,en:String.raw`Build bijections \(\mathbb N\to\{0,2,4,\dots\}\) and \((0,1)\to(0,2)\).`},a:{ru:String.raw`\(f(n)=2n\) (обратная \(m/2\)); \(g(x)=2x\).`,en:String.raw`\(f(n)=2n\) (inverse \(m/2\)); \(g(x)=2x\).`}},
{q:{ru:String.raw`Построй биекцию \((0,1)\to\mathbb R\) через \(\tan\).`,en:String.raw`Build a bijection \((0,1)\to\mathbb R\) using \(\tan\).`},a:{ru:String.raw`\(x\mapsto\pi x-\frac\pi2\) переводит \((0,1)\) в \((-\frac\pi2,\frac\pi2)\), затем \(\tan\): \(f(x)=\tan\left(\pi x-\frac\pi2\right)\). Композиция биекций — биекция.`,en:String.raw`\(f(x)=\tan\left(\pi x-\frac\pi2\right)\): a linear bijection onto \((-\frac\pi2,\frac\pi2)\), then \(\tan\).`}},
{q:{ru:String.raw`Используя зигзаг \(f:\mathbb N\to\mathbb Z\) из лекции, найди \(f(6), f(7), f(10), f(11)\).`,en:String.raw`Using the lecture’s zigzag \(f:\mathbb N\to\mathbb Z\), find \(f(6), f(7), f(10), f(11)\).`},a:{ru:String.raw`\(3,\ -4,\ 5,\ -6\).`,en:String.raw`\(3,\ -4,\ 5,\ -6\).`}},
{q:{ru:String.raw`Список: \(r_1=0.42713\ldots,\ r_2=0.19538\ldots,\ r_3=0.88024\ldots,\ r_4=0.33452\ldots,\ r_5=0.66179\ldots\) Построй диагональное \(d\).`,en:String.raw`List: \(r_1=0.42713\ldots,\ r_2=0.19538\ldots,\ r_3=0.88024\ldots,\ r_4=0.33452\ldots,\ r_5=0.66179\ldots\) Build the diagonal \(d\).`},a:{ru:String.raw`Диагональ: 4, 9, 0, 5, 9 → \(d=0.50160\ldots\)`,en:String.raw`Diagonal digits 4, 9, 0, 5, 9 → \(d=0.50160\ldots\)`}},
{q:{ru:String.raw`Верно ли: «\(\mathbb Q\) плотно в \(\mathbb R\), значит \(\mathbb Q\) несчётно»?`,en:String.raw`True or false: “\(\mathbb Q\) is dense in \(\mathbb R\), so \(\mathbb Q\) is uncountable.”`},a:{ru:String.raw`Неверно: \(\mathbb Q\) плотно, но счётно (зигзаг Кантора). Плотность и мощность — разные свойства.`,en:String.raw`False: \(\mathbb Q\) is dense but countable (zigzag). Density and cardinality are different properties.`}},
{q:{ru:String.raw`Отель Гильберта переполнен, приехало бесконечно много новых гостей. Как всех расселить?`,en:String.raw`Hilbert’s Hotel is full and infinitely many new guests arrive. How do you house everyone?`},a:{ru:String.raw`Гостя из номера \(n\) — в \(2n\). Освобождаются все нечётные номера, новых селим туда: \(k\)-го нового — в \(2k+1\).`,en:String.raw`Move the guest in room \(n\) to \(2n\). All odd rooms free up; new guest \(k\) goes to \(2k+1\).`}}
]
});
