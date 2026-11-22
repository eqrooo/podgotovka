addLevels('inf','t05',{
short:String.raw`
<h3>Basic concepts</h3>
<ul>
<li><b>Number system</b> is a way of writing numbers with digits; the value of a digit depends on its position and on the <b>base</b>.</li>
<li><b>Base q</b> is the number of different digits in the system. Binary: 0, 1. Octal: 0–7. Hexadecimal: 0–9, A–F (A=10, ..., F=15).</li>
</ul>

<h3>Expanded notation</h3>
<ul>
<li>\(A_q = a_n q^n + a_{n-1}q^{n-1}+\dots+a_1q+a_0\).</li>
<li>Example: \(215_8 = 2\cdot8^2+1\cdot8+5 = 141_{10}\); \(1056_{16}=4182_{10}\).</li>
</ul>

<h3>Converting from decimal to base q (integers)</h3>
<ul>
<li>Divide by \(q\) and record the remainders.</li>
<li>Read the remainders from bottom to top.</li>
<li>Example: \(45_{10}=101101_2\).</li>
</ul>

<h3>Converting fractional numbers</h3>
<ul>
<li>Multiply the fractional part by \(q\), and write the integer part of the result as a digit.</li>
<li>Read the digits from top to bottom. Example: \(0{,}6875_{10}=0{,}1011_2\).</li>
</ul>

<h3>Quick conversion</h3>
<ul>
<li>An octal digit = a triad (3 bits); a hexadecimal digit = a tetrad (4 bits).</li>
<li>Example: \(11010110_2 = D6_{16} = 326_8\).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>What a number system is</h2>
<p>You have been using a number system since childhood without noticing it. The number 347 means three hundreds, four tens and seven units. This is the decimal system: it has 10 digits, from 0 to 9. Each position in the notation of a number is worth 10 times more than the neighbouring position on the right.</p>
<div class="box def"><span class="t">Definition</span><b>Number system</b> is a way of writing numbers using a set of digits and rules for using them. The value of a digit is determined by the digit itself, its <b>position</b> and the <b>base</b> of the system.</div>
<p>The base is the number of digits in the system. It is exactly what determines how many times each next position is worth more than the previous one. The binary system is convenient in computers: it has only two digits, 0 and 1, because an electrical signal is easy to distinguish as "there is current" or "there is no current".</p>
<div class="tw"><table><thead><tr><th>System</th><th>Base</th><th>Digits</th><th>Example</th></tr></thead><tbody>
<tr><td>Binary</td><td>2</td><td>0, 1</td><td>\(1011_2=11_{10}\)</td></tr>
<tr><td>Octal</td><td>8</td><td>0–7</td><td>\(57_8=47_{10}\)</td></tr>
<tr><td>Decimal</td><td>10</td><td>0–9</td><td>\(47_{10}\)</td></tr>
<tr><td>Hexadecimal</td><td>16</td><td>0–9, A–F</td><td>\(2F_{16}=47_{10}\)</td></tr>
</tbody></table></div>
<p><b>Bit</b> is one binary digit, 0 or 1. <b>Byte</b> is a group of 8 bits. The octal and hexadecimal systems are needed to write long binary numbers in a short form.</p>

<h2><span class="k">2</span>Expanded notation: how to read a number</h2>
<p>To understand which number is written in any system, expand it by positions. Each digit is multiplied by the base raised to the power equal to the position number. Positions are counted from right to left, starting from zero.</p>
\[A_q = a_n q^n + a_{n-1}q^{n-1}+\dots+a_1q+a_0\]
<div class="box ex"><span class="t">Step-by-step example: 215 in octal</span>
<ol>
<li>Positions from right to left: 0, 1, 2. Digits by position: 5, 1, 2.</li>
<li>Count the contribution of each digit: \(5\cdot8^0=5\), \(1\cdot8^1=8\), \(2\cdot8^2=128\).</li>
<li>Add them up: \(5+8+128=141\).</li>
</ol>
<p>Answer: \(215_8 = 141_{10}\).</p>
</div>
<div class="box tip"><span class="t">Remember</span>Powers of two: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. For the hexadecimal system: A=10, B=11, C=12, D=13, E=14, F=15. It is useful to memorize this table.</div>

<h2><span class="k">3</span>From decimal to another system: division with remainder</h2>
<p>Now the reverse problem: how to write an ordinary decimal number in the binary system. The algorithm is called "division with remainder". You divide the number by the base, write down the remainder, and keep dividing the quotient until it becomes zero.</p>
<div class="box ex"><span class="t">Step-by-step example: 45 in binary</span>
<ol>
<li>Divide 45 by 2: quotient 22, remainder 1.</li>
<li>Divide 22 by 2: quotient 11, remainder 0.</li>
<li>Divide 11 by 2: quotient 5, remainder 1.</li>
<li>Divide 5 by 2: quotient 2, remainder 1.</li>
<li>Divide 2 by 2: quotient 1, remainder 0.</li>
<li>Divide 1 by 2: quotient 0, remainder 1. Done.</li>
</ol>
<p>Read the remainders from bottom to top: \(101101_2\). Check: \(32+8+4+1=45\).</p>
</div>
<div class="box warn"><span class="t">Common mistake</span>Reading the remainders from top to bottom. The rule is simple: the last remainder is written first, that is, read from bottom to top. It is also easy to check yourself this way: add up the powers of two for the ones in the notation, and you should get the original number.</div>
<p>The same algorithm works for any base. For example, for 349 in the hexadecimal system: divide 349 by 16, getting 21 with remainder 13, which in hexadecimal notation is D. Then divide 21 by 16: quotient 1, remainder 5. Finally, divide 1 by 16: quotient 0, remainder 1. Reading from bottom to top: \(15D_{16}\).</p>

<h2><span class="k">4</span>Quick conversion between 2, 8 and 16</h2>
<p>Here is the good news. The numbers 8 and 16 are powers of two: \(8=2^3\), \(16=2^4\). Therefore, converting between them requires almost no arithmetic.</p>
<ul>
<li>One octal digit corresponds to a <b>triad</b> — three binary bits.</li>
<li>One hexadecimal digit corresponds to a <b>tetrad</b> — four binary bits.</li>
</ul>
<div class="box ex"><span class="t">Step-by-step example: 11010110 in base 16 and base 8</span>
<ol>
<li>Split into tetrads from right to left: 1101 | 0110.</li>
<li>Replace each tetrad with a digit: 1101 is D, 0110 is 6. We get \(D6_{16}\).</li>
<li>Split into triads from right to left, adding zeros on the left: 011 | 010 | 110.</li>
<li>Replace each triad with a digit: 3, 2, 6. We get \(326_8\).</li>
</ol>
</div>
<div class="box tip"><span class="t">In plain words</span>Imagine a long binary string as a tape. The octal system cuts it into pieces of three bits, the hexadecimal system into pieces of four bits. Each piece turns into one digit, and the tape becomes shorter and easier to read.</div>
<div class="box warn"><span class="t">Common mistake</span>Forgetting to add zeros on the left when the last group is incomplete. For example, in the number 10110 the last tetrad consists of one 1 and three empty places. Add zeros on the left: 0001 0110, that is, \(16_{16}\). Check: \(16_{16}=22_{10}\), and \(10110_2=16+4+2=22\), so the conversion is correct.</div>

<h2><span class="k">5</span>Fractional numbers</h2>
<p>The integer part is converted by division, as we did above. But the fractional part is converted by <b>multiplication by the base</b>. You multiply the fraction by 2, take the integer part of the result as the next digit, keep the fractional part and repeat.</p>
<div class="box ex"><span class="t">Step-by-step example: 0.6875 in binary</span>
<ol>
<li>\(0{,}6875 \cdot 2 = 1{,}375\). The integer part 1 is the first digit. Remainder 0.375.</li>
<li>\(0{,}375 \cdot 2 = 0{,}75\). The integer part 0 is the second digit.</li>
<li>\(0{,}75 \cdot 2 = 1{,}5\). The integer part 1 is the third digit. Remainder 0.5.</li>
<li>\(0{,}5 \cdot 2 = 1{,}0\). The integer part 1 is the fourth digit. The fractional part is 0, the process is finished.</li>
</ol>
<p>Read the digits from top to bottom: \(0{,}1011_2\). Then \(45{,}6875_{10} = 101101{,}1011_2\).</p>
</div>
<p>Sometimes the multiplications never give zero. This happens with the number 0.3. Then the digits start to repeat, and the notation is infinite. In such a case, the required number of digits is taken. For example, \(0{,}3_{10} \approx 0{,}01001100_2\).</p>
<div class="box warn"><span class="t">Common mistake</span>Mixing up the direction in the two algorithms. Remainders from dividing the integer part are read from bottom to top, while the digits of the fractional part are read from top to bottom. These are two different rules, and they are easy to confuse.</div>
<div class="box warn"><span class="t">Common mistake</span>Using a digit that does not exist in the system. For example, in the notation \(1782_8\) the digits 8 and 9 cannot appear: in the octal system only 0–7 are allowed.</div>

<h2><span class="k">6</span>How to check yourself</h2>
<p>In any conversion problem, it is useful to go back to the decimal system and check the result. This takes a minute and saves you from silly mistakes.</p>
<ol>
<li>Convert the answer back to decimal using the expanded notation.</li>
<li>Compare it with the original number. If they match, the answer is correct.</li>
<li>If they do not match, find the error by checking each remainder or each group.</li>
</ol>
<div class="box def"><span class="t">If you remember only one thing</span>To convert a number from decimal to a system with base q, divide by q and read the remainders from bottom to top. Multiply the fractional part by q and read the integer parts from top to bottom. Between 2, 8 and 16, convert in groups of bits: triads for 8, tetrads for 16. And always check the result by converting back to decimal.</div>
`},'en');
