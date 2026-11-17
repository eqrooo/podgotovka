addEn('inf','t06',{
title:'Arithmetic in Binary, Octal and Hexadecimal Systems',
summary:'Rules for addition, subtraction, multiplication and division "in a column" in number systems with base 2, 8 and 16, carry and borrow, and verification through the decimal system.',
body:String.raw`
<h2><span class="k">1</span>General principle</h2>
<p>In any positional system with base \(q\), arithmetic works the same way as in the decimal system: operations are performed digit by digit from right to left. There is one difference: a carry occurs when the value \(q\) is reached, and in subtraction one borrows not 10 but \(q\) units of the higher digit.</p>
<ul>
<li><b>Addition:</b> add the digits of the place and the carry. If the sum \(s\ge q\), write \(s-q\) and carry 1 to the next place.</li>
<li><b>Subtraction:</b> if the digit of the minuend is smaller than the digit of the subtrahend (taking the borrow into account), borrow 1 from the higher place — add \(q\) to the current digit.</li>
<li><b>Multiplication:</b> multiply the multiplicand by each digit of the multiplier, shifting the results to the left, and add them.</li>
<li><b>Division:</b> in a column, selecting the digits of the quotient using the multiplication table of this system.</li>
</ul>
<div class="box tip"><span class="t">Remember</span>Check any result: convert the operands to the decimal system, perform the operation and compare with the conversion of the answer.</div>

<h2><span class="k">2</span>Binary arithmetic</h2>
<div class="tw"><table><thead><tr><th>Addition</th><th>Subtraction</th><th>Multiplication</th></tr></thead><tbody>
<tr><td>0+0=0<br>0+1=1<br>1+0=1<br>1+1=10 (0, carry 1)</td><td>0−0=0<br>1−0=1<br>1−1=0<br>10−1=1 (borrow)</td><td>0·0=0<br>0·1=0<br>1·0=0<br>1·1=1</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">Addition example: 1011011 + 110101</span>From right to left: 1+1=0 (carry 1); 1+0+1=0 (carry 1); 0+1+1=0 (carry 1); 1+0+1=0 (carry 1); 1+1+1=1 (carry 1); 0+1+1=0 (carry 1); 1+0+1=0 (carry 1); the last carry gives 1. Answer: \(10010000_2\). Check: \(91+53=144=10010000_2\).</div>
<div class="box ex"><span class="t">Subtraction example: 110010 − 10111</span>Digit 0: 0−1 — borrow, \(10-1=1\). Digit 1: 1−1(borrow)−1=−1, add 2 → 1, borrow again. Digit 2: 0−1−1 → 0 (borrow). Digit 3: 0−0−1 → 1 (borrow). Digit 4: 1−1−1 → 1 (borrow). Digit 5: 1−0−1=0. Answer: \(11011_2\). Check: \(50-23=27\).</div>
<div class="box ex"><span class="t">Multiplication: 1101 · 101</span>1101·1 = 1101; 1101·0 = 0000 (shift by 1); 1101·1 = 110100 (shift by 2). Sum: \(1101+110100=1000001_2\). Check: \(13\cdot5=65\).</div>

<h2><span class="k">3</span>Octal arithmetic</h2>
<p>A carry occurs when the sum is 8 or more: \(6+2=8=10_8\), i.e. write 0 and carry 1.</p>
<div class="box ex"><span class="t">Addition: 156₈ + 662₈</span>6+2=8 → 0, carry 1; 5+6+1=12=8+4 → 4, carry 1; 1+6+1=8 → 0, carry 1; write 1. Answer: \(1040_8\). Check: \(110+434=544=1\cdot512+0+4\cdot8+0\).</div>
<div class="box ex"><span class="t">Subtraction: 4568 − 2778</span>6−7 → borrow: 6+8−7=7; 5−1−7 → borrow: (5−1)+8−7=5; 4−1−2=1. Answer: \(157_8\). Check: \(302-191=111=1\cdot64+5\cdot8+7\).</div>
<div class="box ex"><span class="t">Multiplication: 725₈ · 14₈</span>725·4 = 3524 (5·4=20=24₈: write 4, carry 2; 2·4+2=10=12₈: write 2, carry 1; 7·4+1=29=35₈). 725·1=725, shifted: 7250. Sum 3524+7250 = 12774. Answer: \(12774_8\).</div>

<h2><span class="k">4</span>Hexadecimal arithmetic</h2>
<p>Remember: A=10, B=11, C=12, D=13, E=14, F=15. A carry occurs when the sum is 16 or more.</p>
<div class="box ex"><span class="t">Addition: A5B₁₆ + C7E₁₆</span>B+E = 11+14 = 25 = 16+9 → 9, carry 1; 5+7+1 = 13 = D; A+C = 10+12 = 22 = 16+6 → 6, carry 1. Answer: \(16D9_{16}\).</div>
<div class="box ex"><span class="t">Subtraction: C5B₁₆ − A7E₁₆</span>B−E: (11+16)−14=13=D; 5−1−7: (4+16)−7=13=D; C−1−A = 11−10 = 1. Answer: \(1DD_{16}\).</div>
<div class="box ex"><span class="t">Multiplication: 3A2₁₆ · 31₁₆</span>3A2·1 = 3A2; 3A2·3: 2·3=6; A·3=30=1E → E, carry 1; 3·3+1=10=A → AE6. Shift: AE60. Sum 3A2+AE60 = B202. Answer: \(B202_{16}\).</div>
<div class="box warn"><span class="t">Common mistake</span>Carrying 1 when the sum is 10 (as in the decimal system), instead of carrying when the sum equals the base. In the binary system one carries at 2, in the octal system at 8, in the hexadecimal system at 16. Also, people forget to decrease the place after a borrow.</div>
`,
practice:[
{q:String.raw`Perform in the binary system: \(1011011_2+110101_2\). Check in the decimal system.`,a:String.raw`Align: 1011011 and 0110101. From right to left: 1+1=10 (0, carry 1); 1+0+1=10 (0, carry 1); 0+1+1=10 (0, carry 1); 1+0+1=10 (0, carry 1); 1+1+1=11 (1, carry 1); 0+1+1=10 (0, carry 1); 1+0+1=10 (0, carry 1); carry 1. Answer: \(10010000_2\). Check: \(91+53=144=128+16\).`},
{q:String.raw`Perform: \(110010_2-10111_2\).`,a:String.raw`Write 110010 and 010111. Digit 0: 0−1 → borrow, 2−1=1. Digit 1: 1−1(borrow)−1=−1 → 1, borrow. Digit 2: 0−1(borrow)−1=−2 → 0, borrow. Digit 3: 0−1(borrow)−0=−1 → 1, borrow. Digit 4: 1−1(borrow)−1=−1 → 1, borrow. Digit 5: 1−1(borrow)−0=0. Result 011011 = \(11011_2\). Check: \(50-23=27=16+8+2+1\).`},
{q:String.raw`Multiply \(1101_2\cdot101_2\) and divide \(101101_2:11_2\).`,a:String.raw`Multiplication: 1101 + 110100 (shift by 2) = \(1000001_2\) (\(13\cdot5=65\)). Division: 101>11, so we take 101: 11 fits into 101 once, remainder 10. Bring down 1: 101 → 1, remainder 10. Bring down 0: 100 → 1, remainder 1. Bring down 1: 11 → 1, remainder 0. Quotient \(1111_2\). Check: \(45:3=15=1111_2\).`},
{q:String.raw`Add in the octal system \(3467_8+1756_8\).`,a:String.raw`7+6=13=8+5 → 5, carry 1; 6+5+1=12=8+4 → 4, carry 1; 4+7+1=12=8+4 → 4, carry 1; 3+1+1=5. Answer \(5445_8\). Check: \(1847+1006=2853\); \(5\cdot512+4\cdot64+4\cdot8+5=2560+256+32+5=2853\).`},
{q:String.raw`Subtract in the octal system \(5214_8-2767_8\).`,a:String.raw`Digit 0: 4−7 → borrow: 12−7=5. Digit 1: 1−1−6=−6 → +8=2, borrow. Digit 2: 2−1−7=−6 → 2, borrow. Digit 3: 5−1−2=2. Answer \(2225_8\). Check: \(2700-1527=1173=2\cdot512+2\cdot64+2\cdot8+5\).`},
{q:String.raw`Multiply in the octal system \(345_8\cdot26_8\).`,a:String.raw`345·6: 5·6=30=3·8+6 → 6, carry 3; 4·6+3=27=3·8+3 → 3, carry 3; 3·6+3=21=2·8+5 → 5, carry 2; total 2536. 345·2=712. Shifted: 7120. Sum: 2536+7120: 6; 3+2=5; 5+1=6; 2+7=9=8+1 → 1, carry 1; 1 → \(11656_8\). Check: \(229\cdot22=5038\); \(11656_8=4096+512+384+40+6=5038\).`},
{q:String.raw`Add and subtract in the hexadecimal system: \(7F9_{16}+A8C_{16}\) and \(C30_{16}-5AB_{16}\).`,a:String.raw`Sum: 9+C=9+12=21=16+5 → 5, carry 1; F+8+1=15+8+1=24=16+8 → 8, carry 1; 7+A+1=7+10+1=18=16+2 → 2, carry 1; total \(1285_{16}\) (\(2041+2700=4741\)). Difference: 0−B → borrow: 16−11=5; 3−1−A=2−10=−8 → +16=8, borrow; C−1−5=12−1−5=6. Total \(685_{16}\) (\(3120-1451=1669\)).`},
{q:String.raw`Multiply \(2F_{16}\cdot1C_{16}\).`,a:String.raw`2F·C: F·C=15·12=180=11·16+4 → 4, carry B; 2·C+B=24+11=35=2·16+3 → 3, carry 2; total 234. 2F·1=2F, shifted: 2F0. Sum: 4; 3+F=18=16+2 → 2, carry 1; 2+2+1=5 → \(524_{16}\). Check: \(47\cdot28=1316=5\cdot256+2\cdot16+4\).`}
],
quiz:[
{q:String.raw`\(1_2+1_2\) in the binary system equals`,options:[String.raw`2`,String.raw`10`,String.raw`11`,String.raw`0`],solution:String.raw`Two in the binary system is written as 10: write 0, carry 1.`},
{q:String.raw`\(1011_2+101_2\)`,options:[String.raw`10000`,String.raw`1110`,String.raw`10100`,String.raw`1111`],solution:String.raw`\(11+5=16=10000_2\).`},
{q:String.raw`\(7_8+1_8\)`,options:[String.raw`8`,String.raw`7`,String.raw`10`,String.raw`17`],solution:String.raw`There is no digit 8 in the octal system: 7+1=8=\(10_8\). The option "8" is not valid.`},
{q:String.raw`\(F_{16}+1_{16}\)`,options:[String.raw`16`,String.raw`F1`,String.raw`G`,String.raw`10`],solution:String.raw`15+1=16=\(10_{16}\). There is no digit G, and F1 is 241.`},
{q:String.raw`\(A_{16}+B_{16}\)`,options:[String.raw`15`,String.raw`21`,String.raw`AB`,String.raw`1F`],solution:String.raw`10+11=21=16+5 → \(15_{16}\). The answer "21" is the decimal notation, and "1F" is 31.`},
{q:String.raw`\(110_2\cdot11_2\)`,options:[String.raw`1010`,String.raw`10010`,String.raw`1100`,String.raw`10001`],solution:String.raw`\(6\cdot3=18=10010_2\). Check: 110+1100=10010.`},
{q:String.raw`\(5_8+6_8\)`,options:[String.raw`11`,String.raw`12`,String.raw`13`,String.raw`15`],solution:String.raw`5+6=11=8+3 → \(13_8\). "11" is the decimal sum without carry.`},
{q:String.raw`\(1000_2-1_2\)`,options:[String.raw`1001`,String.raw`110`,String.raw`111`,String.raw`100`],solution:String.raw`\(8-1=7=111_2\): the borrow passes through three zeros.`},
{q:String.raw`\(4A_{16}+37_{16}\)`,options:[String.raw`7D`,String.raw`81`,String.raw`91`,String.raw`71`],solution:String.raw`A+7=17=16+1 → 1, carry 1; 4+3+1=8 → \(81_{16}\). Check: 74+55=129=\(81_{16}\).`},
{q:String.raw`\(20_8-1_8\)`,options:[String.raw`27`,String.raw`1`,String.raw`17`,String.raw`20`],solution:String.raw`\(16-1=15=17_8\): borrow 8 from the higher place.`}
]
});
