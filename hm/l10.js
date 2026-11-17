registerTopic({
subject:'hm', id:'l10', num:10, module:3,
title:{ru:'Математическая индукция', en:'Mathematical induction'},
summary:{ru:'База и шаг индукции, доказательства для сумм, делимости и неравенств, сильная индукция и принцип полной упорядоченности.',
         en:'Base case and inductive step, proofs for sums, divisibility and inequalities, strong induction and the well-ordering principle.'},
sources:['Higher_Mathematics_10.pdf'],
body:{
ru:String.raw`
<h2><span class="k">1</span>Принцип математической индукции</h2>
<p><b>Цель:</b> доказать, что утверждение \(P(n)\) верно для всех \(n\ge n_0\) (обычно \(n_0=0\) или 1), не проверяя каждый случай.</p>
<div class="box def"><span class="t">Два шага</span>
<ol>
<li><b>База:</b> доказать \(P(n_0)\).</li>
<li><b>Шаг:</b> предположить, что \(P(k)\) верно для произвольного \(k\ge n_0\) (<b>предположение индукции</b>), и вывести \(P(k+1)\).</li>
</ol>
Вывод: \(P(n)\) верно для всех \(n\ge n_0\).</div>
<p><b>Эффект домино:</b> база роняет первую костяшку, шаг гарантирует, что любая падающая роняет следующую. Значит падают все. Формально это держится на устройстве \(\mathbb N\) (аксиома 5 Пеано, лекция 9).</p>

<h2><span class="k">2</span>Пример: сумма первых \(n\) натуральных</h2>
<p>\(P(n):\ 1+2+\dots+n=\dfrac{n(n+1)}{2}\), \(n\ge1\).</p>
<div class="box ex"><span class="t">Доказательство</span>
<b>База (\(n=1\)):</b> слева 1, справа \(\frac{1\cdot2}{2}=1\) ✓.<br>
<b>Шаг:</b> пусть \(1+\dots+k=\frac{k(k+1)}{2}\). Тогда
\[1+\dots+k+(k+1)=\frac{k(k+1)}{2}+(k+1)=(k+1)\left(\frac k2+1\right)=\frac{(k+1)(k+2)}{2},\]
а это ровно формула для \(n=k+1\) ✓.</div>
<div class="box tip"><span class="t">Шаблон для сумм</span>Распиши сумму до \(k+1\) как «сумма до \(k\)» + последний член, замени сумму до \(k\) по предположению, приведи к виду формулы с \(k+1\).</div>

<h2><span class="k">3</span>Пример: делимость</h2>
<p>\(P(n):\ 7^n-1\) делится на 6, \(n\ge1\).</p>
<div class="box ex"><span class="t">Доказательство</span>
<b>База:</b> \(7-1=6=6\cdot1\) ✓.<br>
<b>Шаг:</b> пусть \(7^k-1=6m\), \(m\in\mathbb Z\), то есть \(7^k=6m+1\). Тогда
\[7^{k+1}-1=7\cdot7^k-1=7(6m+1)-1=42m+6=6(7m+1)\ ✓.\]</div>
<div class="box tip"><span class="t">Шаблон для делимости</span>Запиши предположение как «выражение = делитель × целое», вырази оттуда степень и подставь в выражение для \(k+1\).</div>

<h2><span class="k">4</span>Пример: неравенство</h2>
<p>\(P(n):\ 2^n>n\), \(n\ge1\).</p>
<div class="box ex"><span class="t">Доказательство</span>
<b>База:</b> \(2>1\) ✓.<br>
<b>Шаг:</b> пусть \(2^k>k\). Тогда \(2^{k+1}=2\cdot2^k>2k\). Так как \(k\ge1\), \(2k\ge k+1\). Цепочка: \(2^{k+1}>2k\ge k+1\) ✓.</div>
<p>Урок: в неравенствах обычно нужен ещё один маленький алгебраический шаг (здесь \(2k\ge k+1\)) кроме самого предположения.</p>

<h2><span class="k">5</span>Типичные ошибки</h2>
<div class="box warn"><span class="t">Ошибка 1: пропустить базу</span>Без базы цепочке не с чего начать падать — один шаг ничего не доказывает. Классика: «\(n=n+1\)» имеет верный шаг (прибавь 1 к обеим частям), но база ложна.</div>
<div class="box warn"><span class="t">Ошибка 2: круговое рассуждение</span>Использовать \(P(k+1)\) (то, что доказываешь) вместо только \(P(k)\).</div>
<div class="box warn"><span class="t">Ошибка 3: не то направление</span>Доказать \(P(k+1)\Rightarrow P(k)\) вместо \(P(k)\Rightarrow P(k+1)\). Это цепочка назад, о всех \(n\) она ничего не говорит.</div>

<h2><span class="k">6</span>Сильная индукция</h2>
<ul>
<li><b>Обычная:</b> предполагаем только \(P(k)\), выводим \(P(k+1)\).</li>
<li><b>Сильная:</b> предполагаем \(P(n_0),P(n_0+1),\dots,P(k)\) — <b>все</b> предыдущие, выводим \(P(k+1)\).</li>
</ul>
<p>Нужна, когда доказательство «прыгает» назад не на один шаг, а к какому-то гораздо меньшему \(m\lt k\).</p>
<div class="box ex"><span class="t">Основная теорема арифметики</span>
Каждое целое \(n\ge2\) — произведение простых.<br>
<b>База:</b> 2 — простое ✓.<br>
<b>Шаг:</b> пусть все \(m\) с \(2\le m\lt n\) раскладываются. Если \(n\) простое — готово. Если составное, \(n=ab\), \(2\le a,b\lt n\); по сильному предположению \(a\) и \(b\) — произведения простых, значит и \(n=ab\).<br>
Почему сильная: \(a,b\) могут быть намного меньше \(n-1\), а обычная индукция знает только про \(n-1\).</div>

<h2><span class="k">7</span>Принцип полной упорядоченности</h2>
<div class="box def"><span class="t">Утверждение</span>Любое непустое подмножество \(\mathbb N\) имеет наименьший элемент.</div>
<p>Это эквивалентно индукции. Если бы \(P(n)\) было ложно для какого-то \(n\), множество контрпримеров было бы непустым и имело бы наименьший элемент \(n^*\). По минимальности \(P(n^*-1)\) верно, тогда шаг даёт \(P(n^*)\) — противоречие.</p>
<p>Для \(\mathbb N\) полная упорядоченность играет ту же роль, что полнота для \(\mathbb R\). Для \(\mathbb Z\) или \((0,1)\) она не выполняется: у \(\mathbb Z\) и у \((0,1)\) нет наименьшего элемента.</p>

<h2><span class="k">∑</span>Коротко на экзамен</h2>
<ul>
<li>Индукция = база + шаг \(\Rightarrow\) верно для всех \(n\ge n_0\).</li>
<li>Суммы, делимость, неравенства — у каждого свой шаблон шага.</li>
<li>Сильная индукция предполагает все меньшие случаи.</li>
<li>В основе — полная упорядоченность \(\mathbb N\). Всегда проверяй базу и используй только предположение.</li>
</ul>
`,
en:String.raw`
<h2><span class="k">1</span>The principle of induction</h2>
<p><b>Goal:</b> prove \(P(n)\) for all \(n\ge n_0\) (usually 0 or 1) without checking each case.</p>
<div class="box def"><span class="t">The two steps</span>
<ol>
<li><b>Base case:</b> prove \(P(n_0)\).</li>
<li><b>Inductive step:</b> assume \(P(k)\) for an arbitrary \(k\ge n_0\) (the <b>inductive hypothesis</b>) and prove \(P(k+1)\).</li>
</ol>
Conclude: \(P(n)\) holds for all \(n\ge n_0\).</div>
<p><b>Dominoes:</b> the base knocks over the first; the step guarantees each falling domino knocks over the next. Formally this rests on how \(\mathbb N\) is built (Peano axiom 5).</p>

<h2><span class="k">2</span>Example: sum of the first \(n\) naturals</h2>
<p>\(P(n):\ 1+2+\dots+n=\dfrac{n(n+1)}{2}\), \(n\ge1\).</p>
<div class="box ex"><span class="t">Proof</span>
<b>Base:</b> \(1=\frac{1\cdot2}{2}\) ✓.<br>
<b>Step:</b> assume \(1+\dots+k=\frac{k(k+1)}{2}\). Then
\[1+\dots+k+(k+1)=\frac{k(k+1)}{2}+(k+1)=\frac{(k+1)(k+2)}{2}\ ✓.\]</div>
<div class="box tip"><span class="t">Template for sums</span>Split the sum up to \(k+1\) into “sum up to \(k\)” plus the last term, replace the first part with the hypothesis, and simplify to the formula with \(k+1\).</div>

<h2><span class="k">3</span>Example: divisibility</h2>
<p>\(P(n):\ 6\mid 7^n-1\), \(n\ge1\).</p>
<div class="box ex"><span class="t">Proof</span>
<b>Base:</b> \(7-1=6\) ✓.<br>
<b>Step:</b> assume \(7^k-1=6m\). Then \(7^{k+1}-1=7(6m+1)-1=42m+6=6(7m+1)\) ✓.</div>
<div class="box tip"><span class="t">Template for divisibility</span>Write the hypothesis as “expression = divisor × integer”, solve for the power, substitute into the \(k+1\) expression.</div>

<h2><span class="k">4</span>Example: an inequality</h2>
<p>\(P(n):\ 2^n>n\), \(n\ge1\).</p>
<div class="box ex"><span class="t">Proof</span>
<b>Base:</b> \(2>1\) ✓.<br>
<b>Step:</b> assume \(2^k>k\). Then \(2^{k+1}=2\cdot2^k>2k\ge k+1\) since \(k\ge1\) ✓.</div>
<p>Inequalities usually need one small extra algebraic step (\(2k\ge k+1\)) beyond the hypothesis.</p>

<h2><span class="k">5</span>Common mistakes</h2>
<div class="box warn"><span class="t">1. Skipping the base case</span>Without it nothing starts falling. Classic: “\(n=n+1\)” has a valid step but a false base.</div>
<div class="box warn"><span class="t">2. Circular reasoning</span>Using \(P(k+1)\) — what you are proving — instead of only \(P(k)\).</div>
<div class="box warn"><span class="t">3. Wrong direction</span>Proving \(P(k+1)\Rightarrow P(k)\) instead of \(P(k)\Rightarrow P(k+1)\).</div>

<h2><span class="k">6</span>Strong induction</h2>
<ul>
<li><b>Weak:</b> assume only \(P(k)\).</li>
<li><b>Strong:</b> assume \(P(n_0),\dots,P(k)\) — all previous cases.</li>
</ul>
<p>Needed when the proof jumps back to some much smaller \(m\lt k\).</p>
<div class="box ex"><span class="t">Fundamental theorem of arithmetic</span>
Every integer \(n\ge2\) is a product of primes.<br>
<b>Base:</b> 2 is prime ✓.<br>
<b>Step:</b> assume all \(2\le m\lt n\) factor. If \(n\) is prime, done. Otherwise \(n=ab\) with \(2\le a,b\lt n\); both factor by the strong hypothesis, so \(n\) does.<br>
Why strong: \(a,b\) can be far below \(n-1\).</div>

<h2><span class="k">7</span>The well-ordering principle</h2>
<div class="box def"><span class="t">Statement</span>Every non-empty subset of \(\mathbb N\) has a least element.</div>
<p>It is equivalent to induction: if \(P\) failed somewhere, the counterexamples would have a least one \(n^*\); \(P(n^*-1)\) holds by minimality, and the step forces \(P(n^*)\) — contradiction.</p>
<p>Well-ordering plays for \(\mathbb N\) the role completeness plays for \(\mathbb R\). It fails for \(\mathbb Z\) and \((0,1)\), which have no least element.</p>

<h2><span class="k">∑</span>Exam summary</h2>
<ul>
<li>Induction = base + step \(\Rightarrow\) true for all \(n\ge n_0\).</li>
<li>Sums, divisibility, inequalities each have a step template.</li>
<li>Strong induction assumes all smaller cases.</li>
<li>Underneath: well-ordering of \(\mathbb N\). Always check the base; use only the hypothesis.</li>
</ul>
`},
glossary:[
['Mathematical induction','Математическая индукция',''],['Base case','База индукции',''],['Inductive step','Шаг индукции',''],['Inductive hypothesis','Предположение индукции',''],['Weak induction','Обычная (слабая) индукция',''],['Strong induction','Сильная (полная) индукция',''],['Well-ordering principle','Принцип полной упорядоченности',''],['Divisible by','Делится на',''],['Prime number','Простое число',''],['Composite number','Составное число',''],['Fundamental theorem of arithmetic','Основная теорема арифметики',''],['Circular reasoning','Порочный круг','']
],
practice:[
{q:{ru:String.raw`Докажи: \(1+3+5+\dots+(2n-1)=n^2\).`,en:String.raw`Prove: \(1+3+5+\dots+(2n-1)=n^2\).`},a:{ru:String.raw`База: \(1=1^2\). Шаг: \(k^2+(2k+1)=(k+1)^2\) ✓.`,en:String.raw`Base: \(1=1^2\). Step: \(k^2+(2k+1)=(k+1)^2\) ✓.`}},
{q:{ru:String.raw`Докажи: \(1^2+2^2+\dots+n^2=\dfrac{n(n+1)(2n+1)}{6}\).`,en:String.raw`Prove: \(1^2+2^2+\dots+n^2=\dfrac{n(n+1)(2n+1)}{6}\).`},a:{ru:String.raw`База: \(1=\frac{1\cdot2\cdot3}{6}\). Шаг: \(\frac{k(k+1)(2k+1)}{6}+(k+1)^2=\frac{(k+1)(2k^2+7k+6)}{6}=\frac{(k+1)(k+2)(2k+3)}{6}\) ✓.`,en:String.raw`Base: \(1=\frac{6}{6}\). Step: \(\frac{k(k+1)(2k+1)}{6}+(k+1)^2=\frac{(k+1)(k+2)(2k+3)}{6}\) ✓.`}},
{q:{ru:String.raw`Докажи: \(5^n-1\) делится на 4 при \(n\ge1\).`,en:String.raw`Prove: \(4\mid5^n-1\) for \(n\ge1\).`},a:{ru:String.raw`База: 4. Шаг: \(5^k=4m+1\Rightarrow5^{k+1}-1=5(4m+1)-1=4(5m+1)\) ✓.`,en:String.raw`Base: 4. Step: \(5^k=4m+1\Rightarrow5^{k+1}-1=4(5m+1)\) ✓.`}},
{q:{ru:String.raw`Докажи: \(n^3-n\) делится на 3 при \(n\ge0\).`,en:String.raw`Prove: \(3\mid n^3-n\) for \(n\ge0\).`},a:{ru:String.raw`База: \(0\). Шаг: \((k+1)^3-(k+1)=(k^3-k)+3k^2+3k\) — сумма двух слагаемых, делящихся на 3 ✓.`,en:String.raw`Base: 0. Step: \((k+1)^3-(k+1)=(k^3-k)+3(k^2+k)\) ✓.`}},
{q:{ru:String.raw`Докажи: \(2^n\ge n+1\) при \(n\ge0\); и \(n!>2^n\) при \(n\ge4\).`,en:String.raw`Prove \(2^n\ge n+1\) for \(n\ge0\), and \(n!>2^n\) for \(n\ge4\).`},a:{ru:String.raw`(1) База \(1\ge1\); шаг \(2^{k+1}\ge2k+2\ge k+2\). (2) База \(24>16\); шаг \((k+1)!=(k+1)k!>(k+1)2^k\ge2\cdot2^k\), так как \(k+1\ge2\) ✓.`,en:String.raw`(1) Base \(1\ge1\); step \(2^{k+1}\ge2k+2\ge k+2\). (2) Base \(24>16\); step \((k+1)!>(k+1)2^k\ge2^{k+1}\) ✓.`}},
{q:{ru:String.raw`Найди ошибку: «Все лошади одного цвета. База: одна лошадь. Шаг: из \(k+1\) лошадей уберём первую — остальные \(k\) одного цвета; уберём последнюю — тоже; значит все \(k+1\) одного цвета».`,en:String.raw`Find the flaw: “All horses are the same colour. Base: one horse. Step: remove the first of \(k+1\) horses — the other \(k\) match; remove the last — those match too; so all \(k+1\) match.”`},a:{ru:String.raw`Шаг не работает при \(k=1\): у двух групп по одной лошади нет общей лошади, и «перенести» цвет нельзя. Переход \(P(1)\Rightarrow P(2)\) ложен.`,en:String.raw`The step fails for \(k=1\): the two one-horse groups do not overlap, so colour cannot be transferred. \(P(1)\Rightarrow P(2)\) is false.`}},
{q:{ru:String.raw`Почему для разложения на простые нужна именно сильная индукция?`,en:String.raw`Why does prime factorization need strong induction?`},a:{ru:String.raw`Из \(n=ab\) мы прыгаем к \(a\) и \(b\), которые могут быть далеко от \(n-1\); обычная индукция знает только \(P(n-1)\).`,en:String.raw`From \(n=ab\) we jump to \(a,b\), which may be far below \(n-1\); weak induction only knows \(P(n-1)\).`}}
]
});
