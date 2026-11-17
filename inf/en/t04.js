addEn('inf','t04',{
title:'Quantity of Information: Hartley and Shannon Measures',
summary:'Information as the removal of uncertainty, entropy, Hartley\'s formula for equiprobable events, the additivity law, and Shannon\'s formula for events with different probabilities.',
body:String.raw`
<h2><span class="k">1</span>Information and uncertainty</h2>
<p><b>Information</b> is data that removes uncertainty about the surrounding world; it is an object of storage, transformation, transmission and use. The more a message reduces uncertainty, the more information it carries.</p>
<p><b>Entropy</b> (from Greek <i>en</i>, <i>tropē</i> — turn, transformation) is a quantity that characterizes the degree of uncertainty of a system. <b>Amount of information</b> is a numerical quantity that characterizes a message in terms of the diversity, complexity, structure, definiteness and choice (probability) of the system's states.</p>
<p>If a system can take one of <i>N</i> states, then the task of estimating the choice is exactly the measure of information. A measure is a non-negative function defined on a set of events and <b>additive</b>: the measure of a union of events equals the sum of their measures.</p>

<h2><span class="k">2</span>Hartley measure</h2>
<p>Suppose a system has <i>N</i> equally possible states. If they are encoded by binary codes of length <i>d</i>, then \(2^d \ge N\) must hold, and the smallest such <i>d</i> is the measure of diversity.</p>
\[ H = k\log_a N \]
<p>Units: base 2 — bit (\(H=\log_2 N\)); base \(e\) — nat (\(H=\ln N\)); base 10 — dit (\(H=\lg N\)).</p>
<div class="box def"><span class="t">Hartley's formula</span>If a message states that one of <i>N</i> equally probable events has occurred, then the amount of information <i>x</i> in bits is found from the equation \(2^x = N\), that is, \(x = \log_2 N\). Conversely: \(N = 2^x\).</div>
<div class="box ex"><span class="t">Example</span>A lottery drum contains 32 balls. Ball No. 15 is drawn. \(2^x=32\), \(x=5\) bits. The answer does not depend on which number was drawn.</div>
<div class="tw"><table><thead><tr><th>N (number of outcomes)</th><th>2</th><th>4</th><th>8</th><th>16</th><th>32</th><th>64</th><th>128</th><th>256</th><th>1024</th></tr></thead><tbody>
<tr><td>Information, bits</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>10</td></tr>
</tbody></table></div>
<div class="box tip"><span class="t">Remember</span>If N is not a power of two, \(\log_2 N\) is a fractional number (for example, \(\log_2 5 \approx 2{,}32\) bits; \(\log_2 3 \approx 1{,}58\) bits; \(\log_2 10 \approx 3{,}32\) bits). For an integer number of binary digits, round up.</div>

<h2><span class="k">3</span>Additivity law</h2>
<p>The amount of information needed to establish a pair \((x_1,x_2)\) equals the sum of the information needed to establish each element independently:</p>
\[ H(x_1,x_2)=H(x_1)+H(x_2). \]
<div class="box ex"><span class="t">Example: weather forecast</span>The temperature is chosen from 16 values (4 bits), the cloud cover from 4 options (2 bits). Total: \(4+2=6\) bits (the same as \(\log_2(16\cdot4)=\log_2 64\)).</div>

<h2><span class="k">4</span>Shannon measure (probabilistic approach)</h2>
<p>If the events are not equally probable, probabilities must be taken into account. The probability of an event is \(p=K/N\), where <i>K</i> is the number of favorable outcomes and <i>N</i> is the number of all outcomes. The probability of a certain event is 1, of an impossible event is 0. The less probable an event is, the more information a message about it carries:</p>
\[ i = \log_2\frac{1}{p} = -\log_2 p. \]
<p>The average amount of information (Shannon entropy) for <i>N</i> events with probabilities \(p_i\):</p>
\[ I = -\sum_{i=1}^{N} p_i\log_2 p_i. \]
<div class="box ex"><span class="t">Example: balls</span>A box contains 50 balls: 40 white and 10 black. \(p_w=0{,}8\), \(p_b=0{,}2\). White ball: \(i_w=\log_2(1/0{,}8)\approx0{,}32\) bits; black: \(i_b=\log_2 5\approx2{,}32\) bits. Average: \(I=0{,}8\cdot0{,}32+0{,}2\cdot2{,}32\approx0{,}72\) bits.</div>
<div class="box ex"><span class="t">Example: pyramid</span>A symmetric 4-faced pyramid: \(p_i=1/4\), \(I=\log_2 4 = 2\) bits. An asymmetric one with probabilities \(1/2,1/4,1/8,1/8\): \(I=\tfrac12\cdot1+\tfrac14\cdot2+\tfrac18\cdot3+\tfrac18\cdot3=1{,}75\) bits.</div>
<p>The amount of information is greatest when probabilities are equal. When \(p_i=1/N\), Shannon's formula turns into Hartley's formula: \(I=\log_2N\). This is the theorem on the uniqueness of the measure of the amount of information.</p>
<div class="box warn"><span class="t">Common mistake</span>Applying Hartley's formula to outcomes that are not equally probable, and forgetting that a message about a certain event (\(p=1\)) carries 0 bits. Another mistake is computing \(\log_2\) in the decimal system: \(\log_2 N=\lg N/\lg 2\).</div>
`,
practice:[
{q:String.raw`A garage has 64 spaces, all equally likely. How many bits of information are in the message "the car is parked in space No. 37"?`,a:String.raw`Equally probable outcomes, Hartley's formula: \(x=\log_2 64\). Since \(2^6=64\), \(x=6\) bits.`},
{q:String.raw`A building has 8 entrances, 16 floors, and 4 apartments on each floor. How much information does the message "a friend lives in entrance 5, on floor 11, in apartment 3 on the landing" carry?`,a:String.raw`Three independent choices, we use additivity. Entrance: \(\log_2 8 = 3\) bits. Floor: \(\log_2 16 = 4\) bits. Apartment on the landing: \(\log_2 4 = 2\) bits. Total \(3+4+2=9\) bits. Check: the total number of options is \(8\cdot16\cdot4=512=2^9\).`},
{q:String.raw`When guessing an integer from 1 to N, 9 bits of information were obtained. What is N?`,a:String.raw`\(N=2^9=512\) (check: \(\log_2 512=9\)).`},
{q:String.raw`A message reduced the uncertainty of knowledge by a factor of 8. How much information does it carry? What if the factor is 20?`,a:String.raw`Factor of 8: \(\log_2 8=3\) bits. Factor of 20: \(\log_2 20 \approx 4{,}32\) bits (since \(2^4=16<20<32=2^5\)).`},
{q:String.raw`A basket contains 60 balls: 45 white and 15 black. How much information is in the message "a white ball is drawn" and in the message "a black ball is drawn"? What is the average information?`,a:String.raw`\(p_w=45/60=0{,}75\), \(p_b=0{,}25\). White: \(i_w=\log_2(1/0{,}75)=\log_2(4/3)\approx0{,}415\) bits. Black: \(i_b=\log_2 4=2\) bits. Average: \(I=0{,}75\cdot0{,}415+0{,}25\cdot2\approx0{,}311+0{,}5=0{,}811\) bits. Check by Shannon: \(-(0{,}75\log_2 0{,}75+0{,}25\log_2 0{,}25)\approx0{,}811\).`},
{q:String.raw`An asymmetric 4-faced pyramid lands on its faces with probabilities 0.1; 0.2; 0.3; 0.4. Find the average information and compare it with the symmetric pyramid.`,a:String.raw`\(I=-(0{,}1\log_2 0{,}1+0{,}2\log_2 0{,}2+0{,}3\log_2 0{,}3+0{,}4\log_2 0{,}4)\). Terms: \(0{,}1\cdot3{,}322=0{,}332\); \(0{,}2\cdot2{,}322=0{,}464\); \(0{,}3\cdot1{,}737=0{,}521\); \(0{,}4\cdot1{,}322=0{,}529\). Sum \(\approx1{,}846\) bits \(<2\) bits. The maximum is reached at equal probabilities.`},
{q:String.raw`A coin and a six-sided die are tossed. How much information is in the message about both results?`,a:String.raw`Independent events, additivity. Coin: \(\log_2 2=1\) bit. Die: \(\log_2 6\approx2{,}585\) bits. Total \(\approx3{,}585\) bits. Check: \(\log_2 12\approx3{,}585\).`},
{q:String.raw`One card is drawn from a deck of 36 cards. How much information is in the message "the queen of spades was drawn"? And in the message "a queen was drawn" (of any suit)?`,a:String.raw`Queen of spades: one card out of 36, \(p=1/36\), \(i=\log_2 36\approx5{,}17\) bits. Any queen: 4 cards out of 36, \(p=4/36=1/9\), \(i=\log_2 9\approx3{,}17\) bits. A less probable event carries more information; the difference is exactly 2 bits (\(\log_2 4\)).`}
],
quiz:[
{q:String.raw`How many bits of information does a message about the landing of one of 128 equally likely faces carry?`,options:[String.raw`6`,String.raw`8`,String.raw`7`,String.raw`128`],solution:String.raw`\(\log_2 128=7\), since \(2^7=128\). Options 6 and 8 are neighboring powers of two (64 and 256).`},
{q:String.raw`A number from the range 1..N was guessed, 5 bits were obtained. N equals`,options:[String.raw`10`,String.raw`25`,String.raw`32`,String.raw`64`],solution:String.raw`\(N=2^5=32\). 10 and 25 are erroneous results of multiplication/squaring.`},
{q:String.raw`A message reduced uncertainty by a factor of 16. How many bits is that?`,options:[String.raw`16`,String.raw`4`,String.raw`8`,String.raw`2`],solution:String.raw`\(\log_2 16=4\) bits.`},
{q:String.raw`A message about an event with probability 1/8 carries`,options:[String.raw`8 bits`,String.raw`3 bits`,String.raw`4 bits`,String.raw`0.125 bits`],solution:String.raw`\(i=\log_2 8=3\) bits.`},
{q:String.raw`How much information is in the message "the meeting is in the 7th carriage" of a train with 16 carriages?`,options:[String.raw`7 bits`,String.raw`16 bits`,String.raw`8 bits`,String.raw`4 bits`],solution:String.raw`\(\log_2 16=4\). The carriage number (7) does not affect the answer.`},
{q:String.raw`For which probability distribution over 4 events is the entropy maximal?`,options:[String.raw`0.7; 0.1; 0.1; 0.1`,String.raw`0.25; 0.25; 0.25; 0.25`,String.raw`0.5; 0.25; 0.125; 0.125`,String.raw`1; 0; 0; 0`],solution:String.raw`The maximum is at equal probabilities: 2 bits. Option 3 has entropy 1.75, and option 4 has entropy 0.`},
{q:String.raw`The information about a certain event (p=1) is`,options:[String.raw`1 bit`,String.raw`infinity`,String.raw`0 bits`,String.raw`2 bits`],solution:String.raw`\(\log_2 1=0\). The outcome is known in advance — there is no uncertainty.`},
{q:String.raw`The temperature is chosen from 32 values, the wind from 8 options. The information about the pair equals`,options:[String.raw`5 bits`,String.raw`8 bits`,String.raw`40 bits`,String.raw`256 bits`],solution:String.raw`Additivity: \(5+3=8\) bits (= \(\log_2 256\)). Option 40 is the sum 32+8 without logarithms, and 256 is the number of combinations, not bits.`},
{q:String.raw`30 students in a class are equally likely to answer. How many bits does the message about who answers carry?`,options:[String.raw`5 bits`,String.raw`30 bits`,String.raw`about 4.9 bits`,String.raw`6 bits`],solution:String.raw`\(\log_2 30\approx4{,}91\). The integer 5 is only the number of binary digits for a code.`}
]
});
