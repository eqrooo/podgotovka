addLevels('inf','t06',{
short:String.raw`
<h3>General principle</h3>
<ul>
<li>Arithmetic in a system with base \(q\) works the same as in decimal: operations by digit positions from right to left.</li>
<li>Carry when the sum \(s \ge q\): write \(s-q\), carry 1.</li>
<li>Borrowing in subtraction: borrow \(q\) units from the higher digit.</li>
<li>Check: convert the operands and the result to decimal.</li>
</ul>

<h3>Binary</h3>
<ul>
<li>Table: \(1+1=10\); \(10-1=1\); \(1\cdot1=1\).</li>
<li>\(1011011_2+110101_2=10010000_2\) (\(91+53=144\)).</li>
<li>\(110010_2-10111_2=11011_2\) (\(50-23=27\)).</li>
<li>\(1101_2\cdot101_2=1000001_2\) (\(13\cdot5=65\)).</li>
</ul>

<h3>Octal</h3>
<ul>
<li>Carry when the sum is 8 or more: \(6+2=10_8\).</li>
<li>\(156_8+662_8=1040_8\) (\(110+434=544\)).</li>
<li>\(456_8-277_8=157_8\) (\(302-191=111\)).</li>
<li>\(725_8\cdot14_8=12774_8\) (\(469\cdot12=5628\)).</li>
</ul>

<h3>Hexadecimal</h3>
<ul>
<li>A=10, B=11, C=12, D=13, E=14, F=15. Carry when the sum is 16 or more.</li>
<li>\(A5B_{16}+C7E_{16}=16D9_{16}\) (\(2651+3198=5849\)).</li>
<li>\(C5B_{16}-A7E_{16}=1DD_{16}\) (\(3163-2686=477\)).</li>
<li>\(3A2_{16}\cdot31_{16}=B202_{16}\) (\(930\cdot49=45570\)).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>The main idea: we count the same way as in school</h2>
<p>You already know how to add in a column. Remember: if a digit position gets 10 or more, you write the remainder and carry one to the left. Number systems work the same way. Simply, "10" in decimal is replaced by the base of the system. In binary, a carry happens at two, in octal at eight, in hexadecimal at sixteen.</p>
<div class="box tip"><span class="t">In simple terms</span>Imagine a counter made of counting sticks, where a bundle can hold only 2 sticks. As soon as a third appears, you replace the bundle with one large one and put it in the next position. Binary arithmetic works exactly like this.</div>
<p>Subtraction works the same way: if a position does not have enough, we borrow one unit from the higher position. Only we borrow not 10, but the base of the system.</p>
<div class="box def"><span class="t">Main check</span>Check any answer in this topic like this: convert both numbers to decimal, perform the operation, and compare with the conversion of the answer. This is the most reliable way not to make a mistake.</div>

<h2><span class="k">2</span>Binary arithmetic</h2>
<p>In the binary system there are only two digits, so the table is very short:</p>
<div class="tw"><table><thead><tr><th>Addition</th><th>Subtraction</th><th>Multiplication</th></tr></thead><tbody>
<tr><td>0+0=0<br>0+1=1<br>1+0=1<br>1+1=10 (write 0, carry 1)</td><td>0−0=0<br>1−0=1<br>1−1=0<br>10−1=1 (borrow)</td><td>0·0=0<br>0·1=0<br>1·0=0<br>1·1=1</td></tr>
</tbody></table></div>
<div class="box ex"><span class="t">Step-by-step example: addition</span>
<p>Given: \(1011011_2 + 110101_2\).</p>
<ol>
<li>Write the numbers one under the other, aligned on the right.</li>
<li>From right to left: \(1+1=10\), write 0, carry 1.</li>
<li>Next position: \(1+0+1=10\), write 0, carry 1.</li>
<li>Continue the same way to the end. In the fifth position we get \(1+1+1=11\), write 1 and carry 1.</li>
<li>In the last position a carry remains, and we write it on the left.</li>
</ol>
<p>Answer: \(10010000_2\). Check: \(91+53=144\), and \(144 = 128+16 = 10010000_2\).</p>
</div>
<div class="box ex"><span class="t">Step-by-step example: subtraction</span>
<p>Given: \(110010_2 - 10111_2\).</p>
<ol>
<li>Rightmost position: \(0-1\) is not possible. Borrow 1 from the left, getting \(10-1=1\).</li>
<li>Next position: it had a 1, but we gave it away. What remains is \(0-1\), so we borrow again.</li>
<li>Keep borrowing until we reach a position that has spare value.</li>
<li>Write the result by positions: \(11011_2\).</li>
</ol>
<p>Check: \(50-23=27\), and \(27 = 16+8+2+1 = 11011_2\).</p>
</div>
<div class="box warn"><span class="t">Common mistake</span>Carrying the unit when the sum is 10. In the binary system the carry starts already at two. Another mistake: when borrowing, forgetting to reduce the next position by one.</div>
<div class="box ex"><span class="t">Step-by-step example: multiplication</span>
<p>Given: \(1101_2 \cdot 101_2\).</p>
<ol>
<li>Read the multiplier 101 from right to left. The first digit is 1: write 1101.</li>
<li>The second digit is 0: write 0000, shifted by one position.</li>
<li>The third digit is 1: write 1101 shifted by two positions, that is 110100.</li>
<li>Add: \(1101 + 110100 = 1000001_2\).</li>
</ol>
<p>Check: \(13\cdot5=65\), and \(65 = 64+1 = 1000001_2\).</p>
</div>

<h2><span class="k">3</span>Octal arithmetic</h2>
<p>In the octal system the digits range from 0 to 7. So the carry starts at eight. For example, \(6+2 = 8\), and in octal notation this is \(10_8\). Write 0 and carry 1.</p>
<div class="box ex"><span class="t">Step-by-step example: 456 minus 277</span>
<p>Given: \(456_8 - 277_8\). Note: the number 456 is not 4568, it has three digits.</p>
<ol>
<li>Rightmost position: \(6-7\) is not possible. Borrow 8 from the higher position: \(6+8-7=7\).</li>
<li>Middle position: the digit 5 gave away one unit, leaving 4. Now \(4-7\) is not possible. Borrow 8: \(4+8-7=5\).</li>
<li>Highest position: the digit 4 also gave away one unit, leaving 3. We get \(3-2=1\).</li>
</ol>
<p>Answer: \(157_8\). Check: \(302-191=111\), and \(111 = 64+40+7 = 157_8\).</p>
</div>
<div class="box ex"><span class="t">Step-by-step example: addition of 156 and 662</span>
<ol>
<li>Rightmost position: \(6+2=8=10_8\). Write 0, carry 1.</li>
<li>Middle position: \(5+6+1=12\). Subtract 8, getting 4, carry 1.</li>
<li>Highest position: \(1+6+1=8=10_8\). Write 0, carry 1 to the left.</li>
<li>Write the carry: 1.</li>
</ol>
<p>Answer: \(1040_8\). Check: \(110+434=544\), and \(544 = 512+32 = 1040_8\).</p>
</div>
<div class="box ex"><span class="t">Step-by-step example: multiplication of 725 by 14</span>
<ol>
<li>Multiply 725 by 4 (the units digit of the multiplier). Position 5: \(5\cdot4=20=24_8\), write 4, carry 2.</li>
<li>Position 2: \(2\cdot4+2=10=12_8\), write 2, carry 1.</li>
<li>Position 7: \(7\cdot4+1=29=35_8\). We get 3524.</li>
<li>Multiply 725 by 1 (the tens digit) and append a 0 on the right: 7250.</li>
<li>Add 3524 and 7250 in the octal system, getting \(12774_8\).</li>
</ol>
<p>Check: \(725_8 = 469\), \(14_8 = 12\), \(469\cdot12 = 5628\), and \(12774_8 = 5628\).</p>
</div>

<h2><span class="k">4</span>Hexadecimal arithmetic</h2>
<p>Here the digits go from 0 to 9 and then continue with letters: A=10, B=11, C=12, D=13, E=14, F=15. The carry happens at sixteen. Do not be afraid of the letters: they are ordinary numbers that are simply written differently.</p>
<div class="box ex"><span class="t">Step-by-step example: A5B + C7E</span>
<ol>
<li>Rightmost position: \(B+E = 11+14 = 25\). This is \(16+9\), write 9, carry 1.</li>
<li>Middle position: \(5+7+1 = 13 = D\). Write D, no carry.</li>
<li>Highest position: \(A+C = 10+12 = 22 = 16+6\). Write 6, carry 1.</li>
<li>Write the carry: 1.</li>
</ol>
<p>Answer: \(16D9_{16}\). Check: \(2651+3198=5849\), and \(16D9_{16} = 4096+1536+208+9 = 5849\).</p>
</div>
<div class="box ex"><span class="t">Step-by-step example: C5B − A7E</span>
<ol>
<li>Rightmost position: \(B-E\) is not possible. Borrow 16: \(11+16-14=13 = D\).</li>
<li>Middle position: \(5-1-7\) is not possible. Borrow 16: \(4+16-7=13 = D\).</li>
<li>Highest position: \(C-1-A = 12-1-10 = 1\).</li>
</ol>
<p>Answer: \(1DD_{16}\). Check: \(3163-2686=477\), and \(1DD_{16}=256+208+13=477\).</p>
</div>
<div class="box ex"><span class="t">Step-by-step example: 3A2 multiplied by 31</span>
<ol>
<li>Multiply 3A2 by 1: we get 3A2.</li>
<li>Multiply 3A2 by 3, we get AE6.</li>
<li>Shift AE6 by one position: AE60.</li>
<li>Add 3A2 and AE60, we get \(B202_{16}\).</li>
</ol>
<p>Check: \(930\cdot49=45570\), and \(B202_{16}=45570\).</p>
</div>
<div class="box warn"><span class="t">Common mistake</span>Carrying the unit when the sum is 10 or 12, as if the system were decimal. In the hexadecimal system the carry starts at 16. If the sum is less than 16, there is no carry, even if it is greater than 10.</div>

<h2><span class="k">5</span>Division: the essentials in brief</h2>
<p>Division is performed in a column, as in school. Only each next digit of the quotient is chosen using the multiplication table of this particular system. For example, in the binary system only 0 and 1 fit, so there is almost nothing to choose: either the divisor fits or it does not.</p>
<div class="box ex"><span class="t">Step-by-step example: 101101 divided by 11</span>
<ol>
<li>Take the first three digits 101, that is 5. The divisor 11 is 3. It fits once, write 1 in the quotient. Remainder \(5-3=2\), that is 10.</li>
<li>Bring down the next digit 1: we get 101, that is 5. Again 1 in the quotient, remainder 10.</li>
<li>Bring down 0: we get 100, that is 4. Write 1, remainder 1.</li>
<li>Bring down 1: we get 11, that is 3. Write 1, remainder 0.</li>
</ol>
<p>Quotient \(1111_2\). Check: \(45:3=15=1111_2\).</p>
</div>

<h2><span class="k">6</span>How not to make mistakes</h2>
<ul>
<li>Check every digit: in octal notation there must be no 8 or 9, and in hexadecimal no letters beyond F.</li>
<li>Remember the tables: in binary \(1+1=10\), in octal \(7+1=10_8\), in hexadecimal \(F+1=10_{16}\).</li>
<li>Convert the answer to decimal and compare it with the answer computed in decimal.</li>
</ul>
<div class="box def"><span class="t">If you remember only one thing</span>Arithmetic in any system with base q goes digit by digit from right to left, and carry and borrow happen at base q, not at 10. The most reliable check of the result is converting the operands and the answer to decimal and comparing.</div>
`
},'en');
