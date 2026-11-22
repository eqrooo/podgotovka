addLevels('inf','t04',{
short:String.raw`
<h3>Information and uncertainty</h3>
<ul>
<li><b>Information</b> — data that removes uncertainty. The more a message reduces it, the more information it carries.</li>
<li><b>Entropy</b> — a quantity that characterizes the degree of uncertainty of a system.</li>
<li>A measure of information must be non-negative and <b>additive</b>: for independent events, the information adds up.</li>
</ul>

<h3>Hartley measure (equally likely events)</h3>
<ul>
<li>If there are <i>N</i> equally likely outcomes, the information in bits is: \(2^x = N\), that is, \(x = \log_2 N\).</li>
<li>Units: bit (base 2), nat (base \(e\)), dit (base 10).</li>
<li>Example: 32 equally likely outcomes give \(\log_2 32 = 5\) bits.</li>
<li>If N is not a power of two, the result is fractional: \(\log_2 5 \approx 2{,}32\) bits.</li>
</ul>

<h3>Additivity</h3>
<ul>
<li>For independent choice of a pair \((x_1,x_2)\): \(H(x_1,x_2)=H(x_1)+H(x_2)\).</li>
</ul>

<h3>Shannon measure (different probabilities)</h3>
<ul>
<li>Probability of an event: \(p=K/N\). Information about the event: \(i=\log_2\frac{1}{p}\).</li>
<li>Average information: \(I=-\sum_{i=1}^{N} p_i\log_2 p_i\).</li>
<li>For equal probabilities \(p_i=1/N\), the Shannon formula coincides with the Hartley formula.</li>
<li>A certain event (\(p=1\)) carries 0 bits. Information is maximal when the probabilities are equal.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>Information is what removes a question</h2>
<p>Imagine you write to a friend: "I am somewhere in the house." He knows nothing about your location. Now you write: "I am in the kitchen." The question has become smaller, and this message carried information. The key idea to remember: <b>information is the reduction of uncertainty</b>. If you are told something you already knew, there is almost no information.</p>
<p>Uncertainty is how many different options are still possible. The more options there are, the more information is needed to choose one of them.</p>
<div class="box tip"><span class="t">In simple terms</span>Guess a number from 1 to 8. At first you have 8 options. Someone tells you: "More than four." Now 4 options remain. Another hint: "Even" leaves 2. The last hint, and the answer is clear. Each hint cut the options in half. So in total there was information of three "halvings" in a row.</div>

<h2><span class="k">2</span>Entropy: how much uncertainty is in a system</h2>
<p>The course often uses the word <b>entropy</b>. It comes from Greek, where it means "turn" or "transformation". In computer science, entropy shows how unpredictable a system is. If the outcome is known exactly, the entropy is zero. If all outcomes are equally possible, the uncertainty is maximal.</p>
<p>The amount of information is a number that shows how much uncertainty a message removes. It is measured in bits.</p>
<div class="box def"><span class="t">Bit</span>A bit is a unit of information that corresponds to choosing one of two equally likely options, for example "heads" or "tails". It is the smallest portion of information.</div>

<h2><span class="k">3</span>Hartley's formula: when all options are equal</h2>
<p>Suppose a system can be in one of <i>N</i> states, and all of them are equally likely. For example, a lottery drum has 32 balls, and any one can come out with the same chance. Then the amount of information in the message "ball number 15 came out" is found by Hartley's formula.</p>
\[2^x = N, \qquad x = \log_2 N\]
<p>The meaning is simple: <b>x</b> is how many times you need to "cut in half" to reach a single option. The logarithm to base 2 answers the question "which power of two gives N".</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Task: the drum has 32 balls. Ball number 15 came out. How many bits of information does the message carry?</p>
<ol>
<li>The total number of equally likely outcomes is \(N = 32\).</li>
<li>We write the equation \(2^x = 32\).</li>
<li>Recall the powers of two: \(2^1=2\), \(2^2=4\), \(2^3=8\), \(2^4=16\), \(2^5=32\).</li>
<li>We get \(x = 5\).</li>
</ol>
<p>Answer: 5 bits. Note that the number 15 does not affect the result here. Only the number of options matters.</p>
</div>
<p>Remember the table of powers of two, it saves time on exams:</p>
<div class="tw"><table><thead><tr><th>Number of outcomes N</th><th>2</th><th>4</th><th>8</th><th>16</th><th>32</th><th>64</th><th>128</th><th>256</th><th>1024</th></tr></thead><tbody>
<tr><td>Information, bits</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>10</td></tr>
</tbody></table></div>
<div class="box warn"><span class="t">Common mistake</span>Thinking that when N is not a power of two the answer must be a whole number. For example, for 5 options we get \(\log_2 5 \approx 2{,}32\) bits. A fractional value is normal. The number of bits needed for a code, on the other hand, is rounded up: for 5 options you need 3 bits of code.</div>

<h2><span class="k">4</span>Additivity: information adds up</h2>
<p>Imagine a weather forecast. The temperature can be one of 16 values, and the cloud cover one of 4 options. These two choices are not connected to each other. Then the information about the pair (temperature, cloud cover) equals the sum of the information about each choice separately.</p>
\[H(x_1,x_2)=H(x_1)+H(x_2)\]
<div class="box tip"><span class="t">In simple terms</span>This is like a lock with a code of two parts. The first part is 4 digits in one category, the second part is 2 digits in another. If you learn both parts, you know the information about each and about the whole. Nothing is lost and nothing extra appears.</div>
<div class="box ex"><span class="t">Step-by-step example</span>
<ol>
<li>Temperature: 16 values, \(\log_2 16 = 4\) bits.</li>
<li>Cloud cover: 4 options, \(\log_2 4 = 2\) bits.</li>
<li>Add them: \(4+2=6\) bits.</li>
<li>Check: there are \(16\cdot4=64\) combinations in total, and \(\log_2 64 = 6\). It matches.</li>
</ol>
</div>
<p>The same method works for a building. If a building has 8 entrances, 16 floors, and 4 apartments per landing, then the message "lives in entrance 5, on floor 11, in apartment 3" carries \(3+4+2=9\) bits. Check: \(8\cdot16\cdot4=512=2^9\).</p>

<h2><span class="k">5</span>Shannon's formula: when options are not equal</h2>
<p>In real life, events are rarely equally likely. If a box has 40 white balls and 10 black balls, then drawing a white ball is much more likely. For such cases we use <b>probability</b>: \(p = K/N\), where <i>K</i> is the number of favorable outcomes and <i>N</i> is the total number of outcomes.</p>
<p>The less likely an event is, the more information a message about it carries. The information about one event:</p>
\[i = \log_2\frac{1}{p}\]
<p>The average information over all events, that is, the <b>Shannon measure</b>:</p>
\[I = -\sum_{i=1}^{N} p_i\log_2 p_i\]
<div class="box ex"><span class="t">Step-by-step example: balls</span>
<p>Task: the box has 40 white and 10 black balls. Find the information of each outcome and the average.</p>
<ol>
<li>Probabilities: \(p_w = 40/50 = 0.8\), \(p_b = 10/50 = 0.2\).</li>
<li>White ball: \(i_w = \log_2(1/0.8) \approx 0.32\) bits. It is expected, so it carries little.</li>
<li>Black ball: \(i_b = \log_2 5 \approx 2.32\) bits. It is rare, so it carries a lot.</li>
<li>Average information: \(I = 0.8\cdot0.32 + 0.2\cdot2.32 \approx 0.26 + 0.46 = 0.72\) bits.</li>
</ol>
</div>
<div class="box ex"><span class="t">Step-by-step example: pyramid</span>
<p>Task: a four-sided pyramid lands on its faces with probabilities 1/2, 1/4, 1/8, 1/8. Find the average information.</p>
<ol>
<li>Compute the contribution of each face: \(\tfrac12\cdot1 = 0.5\), \(\tfrac14\cdot2 = 0.5\), \(\tfrac18\cdot3 = 0.375\), \(\tfrac18\cdot3 = 0.375\).</li>
<li>Add them up: \(0.5+0.5+0.375+0.375 = 1.75\) bits.</li>
</ol>
<p>Answer: 1.75 bits. For a symmetric four-sided pyramid it would be 2 bits, which is more.</p>
</div>
<p>Here the main rule is visible: <b>information is greatest when all options are equally likely</b>. If the probabilities are equal, \(p_i = 1/N\), Shannon's formula turns into Hartley's formula: \(I = \log_2 N\). So Hartley's is a special case of Shannon's.</p>
<div class="box warn"><span class="t">Common mistake</span>Applying Hartley's formula to outcomes that are not equally likely. Another mistake: thinking that a message about a certain event carries some information. If \(p = 1\), then \(\log_2 1 = 0\): the outcome is already known, so there is no information.</div>
<div class="box warn"><span class="t">Common mistake</span>Computing a base-2 logarithm on an ordinary calculator without converting. You need the formula \(\log_2 N = \lg N / \lg 2\), where \(\lg\) is the base-10 logarithm.</div>

<h2><span class="k">6</span>What to check in practice</h2>
<ol>
<li>First find out whether the outcomes are equally likely. If they are, use Hartley's formula.</li>
<li>If not, find the probability of each outcome and use Shannon's formula.</li>
<li>If a message consists of independent parts, add the information of the parts.</li>
<li>Check the answer by the reverse operation: \(2^x\) should give N.</li>
</ol>
<div class="box def"><span class="t">If you remember only one thing</span>Information is removed uncertainty, measured in bits. For N equally likely outcomes it equals \(\log_2 N\), and for unequal outcomes it is computed by Shannon's formula \(-\sum p_i\log_2 p_i\). The information of independent events adds up, and the largest information is obtained when probabilities are equal.</div>
`
},'en');
