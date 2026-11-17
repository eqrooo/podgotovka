addEn('inf','t05',{
title:'Number Systems and Number Conversion',
summary:'Positional number systems (binary, octal, hexadecimal), expanded notation of a number, and algorithms for converting integers and fractions between systems.',
body:String.raw`
<h2><span class="k">1</span>What is a number system</h2>
<div class="box def"><span class="t">Definition</span><b>Number system</b> — a way of writing numbers using a set of symbols (digits) and rules for their use. The value of a digit in a number is determined by the digit itself, its <b>position</b>, and the <b>base</b> of the system.</div>
<p>Each system is characterized by: the <b>base</b> — the number of digits; the <b>place value</b> — the weight of a position; the <b>digit set</b> — the permitted digits. A number is a value used for counting, measuring and labeling objects. Types of numbers: natural (1, 2, 3, ...), non-negative integers (0, 1, 2, ...), integers (..., −1, 0, 1, ...), rational (fractions p/q, q ≠ 0), irrational (\(\sqrt2\), \(\pi\)), real, complex (\(a+bi\)).</p>
<div class="tw"><table><thead><tr><th>System</th><th>Base</th><th>Digits</th><th>Example</th></tr></thead><tbody>
<tr><td>Binary</td><td>2</td><td>0, 1</td><td>\(1011_2=11_{10}\)</td></tr>
<tr><td>Octal</td><td>8</td><td>0–7</td><td>\(57_8=47_{10}\)</td></tr>
<tr><td>Decimal</td><td>10</td><td>0–9</td><td>\(47_{10}\)</td></tr>
<tr><td>Hexadecimal</td><td>16</td><td>0–9, A–F (A=10, ..., F=15)</td><td>\(2F_{16}=47_{10}\)</td></tr>
</tbody></table></div>
<p><b>Bit</b> — the smallest unit of information (0 or 1); <b>byte</b> — 8 bits. The binary system underlies digital electronics; the octal and hexadecimal systems are compact notations for binary data (memory addresses, colors, machine code).</p>

<h2><span class="k">2</span>Expanded notation and conversion to decimal</h2>
<p>A number \(a_{n}a_{n-1}\dots a_1a_0\) in a system with base \(q\) has the value</p>
\[ A_q = a_n q^n + a_{n-1}q^{n-1}+\dots+a_1q+a_0 . \]
<div class="box ex"><span class="t">Example</span>\(215_8 = 2\cdot8^2+1\cdot8+5 = 128+8+5 = 141_{10}\). \(1056_{16}=1\cdot4096+0+5\cdot16+6=4182_{10}\). \(1101_2=8+4+0+1=13_{10}\).</div>

<h2><span class="k">3</span>Converting integer decimal numbers to base q</h2>
<p><b>Algorithm:</b> divide the number by \(q\) with remainder and record the remainders; divide the quotient again until you get 0. The remainders, read <b>from bottom to top</b> (from the last to the first), give the representation of the number.</p>
<div class="box ex"><span class="t">Example: 45 to binary</span>45 : 2 = 22 (rem. 1); 22 : 2 = 11 (0); 11 : 2 = 5 (1); 5 : 2 = 2 (1); 2 : 2 = 1 (0); 1 : 2 = 0 (1). Reading from the bottom: \(101101_2\). Check: \(32+8+4+1=45\).</div>
<div class="box ex"><span class="t">Example: 349 in different systems</span>\(349_{10}=101011101_2=535_8=15D_{16}\). For hex: 349 : 16 = 21 (rem. 13 = D); 21 : 16 = 1 (rem. 5); 1 : 16 = 0 (rem. 1). From the bottom: 15D.</div>

<h2><span class="k">4</span>Fast conversion between 2, 8 and 16</h2>
<p>Since \(8=2^3\) and \(16=2^4\), each octal digit is a <b>triad</b> (3 bits), and each hexadecimal digit is a <b>tetrad</b> (4 bits). Group the bits from right to left, adding zeros on the left if necessary.</p>
<div class="tw"><table><thead><tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th></tr></thead><tbody>
<tr><td>0</td><td>0000</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0001</td><td>1</td><td>1</td></tr><tr><td>2</td><td>0010</td><td>2</td><td>2</td></tr><tr><td>3</td><td>0011</td><td>3</td><td>3</td></tr>
<tr><td>4</td><td>0100</td><td>4</td><td>4</td></tr><tr><td>5</td><td>0101</td><td>5</td><td>5</td></tr><tr><td>6</td><td>0110</td><td>6</td><td>6</td></tr><tr><td>7</td><td>0111</td><td>7</td><td>7</td></tr>
<tr><td>8</td><td>1000</td><td>10</td><td>8</td></tr><tr><td>9</td><td>1001</td><td>11</td><td>9</td></tr><tr><td>10</td><td>1010</td><td>12</td><td>A</td></tr><tr><td>11</td><td>1011</td><td>13</td><td>B</td></tr>
<tr><td>12</td><td>1100</td><td>14</td><td>C</td></tr><tr><td>13</td><td>1101</td><td>15</td><td>D</td></tr><tr><td>14</td><td>1110</td><td>16</td><td>E</td></tr><tr><td>15</td><td>1111</td><td>17</td><td>F</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">Example</span>\(11010110_2\): into tetrads 1101 | 0110 = D6; into triads 011 | 010 | 110 = 326. Result: \(11010110_2=D6_{16}=326_8\). Reverse: \(7F_{16}=0111\,1111_2=1\,111\,111_2=177_8\).</div>

<h2><span class="k">5</span>Converting fractional numbers</h2>
<p>The <b>integer part</b> is converted by division, and the <b>fractional part</b> by repeated <b>multiplication by the base</b>: multiply the fractional part by \(q\), the integer part of the result is the next digit, and repeat with the fractional part of the result. The digits are read <b>from top to bottom</b>. The process may never end (a periodic fraction) — in that case take the required number of digits.</p>
<div class="box ex"><span class="t">Example: 0,6875 to binary</span>0,6875·2 = 1,375 → 1; 0,375·2 = 0,75 → 0; 0,75·2 = 1,5 → 1; 0,5·2 = 1,0 → 1. Result: \(0{,}1011_2\). Therefore \(45{,}6875_{10}=101101{,}1011_2\).</div>
<div class="box ex"><span class="t">Example: 0,3</span>In binary: 0,3·2=0,6→0; 0,6·2=1,2→1; 0,2·2=0,4→0; 0,4·2=0,8→0; 0,8·2=1,6→1; 0,6… the digits then repeat: \(0{,}3_{10}=0{,}0(1001)_2=0{,}01001100\ldots_2\). In octal \(0{,}2314\ldots_8\), in hexadecimal \(0{,}4CCC\ldots_{16}\).</div>
<div class="box warn"><span class="t">Common mistake</span>Reading the remainders of a division from top to bottom (it must be bottom to top), and reading the digits of the fractional part from bottom to top (it must be top to bottom). Also, digits that are not permitted are confused: a digit 8 cannot appear in the notation \(1782_8\).</div>
<div class="box tip"><span class="t">Remember</span>Powers of two: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. For hex: A=10, B=11, C=12, D=13, E=14, F=15. Always convert the result back to decimal to check it.</div>
`,
practice:[
{q:String.raw`Convert 100 from decimal to binary, octal and hexadecimal. Check the result.`,a:String.raw`Binary: 100:2=50 (0); 50:2=25 (0); 25:2=12 (1); 12:2=6 (0); 6:2=3 (0); 3:2=1 (1); 1:2=0 (1). From the bottom: \(1100100_2\). Octal: 100:8=12 (rem. 4); 12:8=1 (4); 1:8=0 (1): \(144_8\). Hexadecimal: 100:16=6 (rem. 4); 6:16=0 (6): \(64_{16}\). Check: \(64+32+4=100\); \(1\cdot64+4\cdot8+4=100\); \(6\cdot16+4=100\).`},
{q:String.raw`Convert 173 to binary, octal and hexadecimal.`,a:String.raw`Binary: 173:2=86 (1); 86:2=43 (0); 43:2=21 (1); 21:2=10 (1); 10:2=5 (0); 5:2=2 (1); 2:2=1 (0); 1:2=0 (1). From the bottom: \(10101101_2\). Grouping: tetrads 1010|1101 = AD; triads 010|101|101 = 255. Answer: \(173=10101101_2=255_8=AD_{16}\). Check: \(10\cdot16+13=173\); \(2\cdot64+5\cdot8+5=173\).`},
{q:String.raw`Convert to decimal: \(1101101_2\), \(7345_8\), \(3AF_{16}\), \(2B7_{16}\).`,a:String.raw`\(1101101_2=64+32+0+8+4+0+1=109\). \(7345_8=7\cdot512+3\cdot64+4\cdot8+5=3584+192+32+5=3813\). \(3AF_{16}=3\cdot256+10\cdot16+15=768+160+15=943\). \(2B7_{16}=2\cdot256+11\cdot16+7=512+176+7=695\).`},
{q:String.raw`Convert \(11010110_2\) to octal and hexadecimal, then to decimal.`,a:String.raw`Tetrads: 1101|0110 = \(D6_{16}\). Triads (padding with a zero on the left): 011|010|110 = \(326_8\). Decimal: \(13\cdot16+6=214\); check \(3\cdot64+2\cdot8+6=214\).`},
{q:String.raw`Convert \(5062_8\) to binary and hexadecimal.`,a:String.raw`Replace each octal digit by a triad: 5=101, 0=000, 6=110, 2=010. We get \(101\,000\,110\,010_2\). Tetrads from the right: 1010|0011|0010 = \(A32_{16}\). Check in decimal: \(5062_8=2610\); \(A32_{16}=10\cdot256+3\cdot16+2=2610\).`},
{q:String.raw`Convert 0.8125 to binary, octal and hexadecimal.`,a:String.raw`Binary: 0,8125·2=1,625 (1); 0,625·2=1,25 (1); 0,25·2=0,5 (0); 0,5·2=1,0 (1) → \(0{,}1101_2\). Octal: 0,8125·8=6,5 (6); 0,5·8=4,0 (4) → \(0{,}64_8\). Hexadecimal: 0,8125·16=13,0 (D) → \(0{,}D_{16}\). Check: \(13/16=0{,}8125\).`},
{q:String.raw`Convert 45.6875 to binary, octal and hexadecimal.`,a:String.raw`The integer part 45 = \(101101_2=55_8=2D_{16}\). The fractional part 0.6875 = \(0{,}1011_2\) (see the algorithm). Combined: \(101101{,}1011_2\). Grouping around the point: triads 101|101 , 101|100 → \(55{,}54_8\). Tetrads 0010|1101 , 1011 → \(2D{,}B_{16}\). Check: \(2\cdot16+13+11/16=45{,}6875\).`},
{q:String.raw`Convert 0.3 to binary with an accuracy of 8 digits and to octal with 4 digits.`,a:String.raw`Binary: 0,3·2=0,6 (0); 0,6·2=1,2 (1); 0,2·2=0,4 (0); 0,4·2=0,8 (0); 0,8·2=1,6 (1); 0,6·2=1,2 (1); 0,2·2=0,4 (0); 0,4·2=0,8 (0) → \(0{,}01001100\ldots_2\). Octal: 0,3·8=2,4 (2); 0,4·8=3,2 (3); 0,2·8=1,6 (1); 0,6·8=4,8 (4) → \(0{,}2314\ldots_8\). The fraction is infinite (periodic), so the result is approximate.`},
{q:String.raw`Convert 300 from decimal to hexadecimal, binary and octal.`,a:String.raw`Hex: 300:16=18 (rem. 12=C); 18:16=1 (2); 1:16=0 (1) → \(12C_{16}\). Binary: 1|0010|1100 → \(100101100_2\). Octal: 100|101|100 → \(454_8\). Check: \(4\cdot64+5\cdot8+4=300\).`}
],
quiz:[
{q:String.raw`Which notation CANNOT be an octal number?`,options:[String.raw`1257`,String.raw`777`,String.raw`1782`,String.raw`4000`],solution:String.raw`The notation 1782 contains the digit 8, while only digits 0–7 are allowed in the octal system.`},
{q:String.raw`The decimal value of \(1101_2\) is`,options:[String.raw`11`,String.raw`12`,String.raw`14`,String.raw`13`],solution:String.raw`\(8+4+0+1=13\).`},
{q:String.raw`The number 25 is written in binary as`,options:[String.raw`11001`,String.raw`10011`,String.raw`11010`,String.raw`10101`],solution:String.raw`25=16+8+1 → 11001. Check by division: the remainders 1,0,0,1,1 read from the bottom up give 11001.`},
{q:String.raw`The number 255 in hexadecimal is:`,options:[String.raw`EF`,String.raw`FE`,String.raw`FF`,String.raw`100`],solution:String.raw`255=15·16+15 → FF. 100₁₆ = 256.`},
{q:String.raw`The decimal value of \(1F_{16}\) is`,options:[String.raw`16`,String.raw`31`,String.raw`26`,String.raw`15`],solution:String.raw`\(1\cdot16+15=31\).`},
{q:String.raw`How many binary digits correspond to one hexadecimal digit?`,options:[String.raw`2`,String.raw`3`,String.raw`4`,String.raw`8`],solution:String.raw`\(16=2^4\), so one hex digit is a tetrad of 4 bits. Three bits correspond to an octal digit.`},
{q:String.raw`\(777_8\) in decimal equals`,options:[String.raw`511`,String.raw`777`,String.raw`512`,String.raw`448`],solution:String.raw`\(7\cdot64+7\cdot8+7=448+56+7=511\) (=\(8^3-1\)).`},
{q:String.raw`\(101101_2\) in octal is`,options:[String.raw`45`,String.raw`55`,String.raw`2D`,String.raw`35`],solution:String.raw`Triads 101|101 = 5 and 5. 2D is a hexadecimal notation.`},
{q:String.raw`The binary notation of the fraction 0.25 is`,options:[String.raw`0.1`,String.raw`0.001`,String.raw`0.11`,String.raw`0.01`],solution:String.raw`0,25·2=0,5 (0); 0,5·2=1,0 (1) → 0,01. Check: 1/4.`},
{q:String.raw`The minimum base of a system in which the number 1234 can be written is`,options:[String.raw`4`,String.raw`5`,String.raw`10`,String.raw`2`],solution:String.raw`The largest digit is 4, so the base must be at least 5. Base 4 allows only the digits 0–3.`}
]
});
