addLevels('inf','t03',{
short:String.raw`
<h3>Qualitative methods</h3>
<ul>
<li><b>Qualitative methods</b> study the properties, qualities and experience related to an IS. They give depth and context.</li>
<li>Main techniques: <b>interviews</b>, <b>focus groups</b>, <b>case studies</b> (studying a single case), <b>observation</b>.</li>
<li>Pros: rich data, takes user experience into account. Cons: subjectivity, hard to generalize, takes a lot of time.</li>
</ul>

<h3>Quantitative methods</h3>
<ul>
<li>They use numbers and statistics to measure an IS, test hypotheses and compare objectively.</li>
<li>Techniques: <b>surveys and questionnaires</b>, <b>data analysis</b>, <b>metrics</b> (uptime, response time, error rate), <b>experiments</b> (A/B testing).</li>
<li>Pros: objectivity, possibility of generalization. Cons: contextual nuances are lost.</li>
</ul>

<h3>Problems of systems theory</h3>
<ul>
<li>It is hard to draw clear boundaries of a system; overlapping systems create ambiguity.</li>
<li><b>Emergence</b>: the properties of a whole cannot be predicted from the properties of its parts.</li>
<li><b>Reductionism</b> (studying parts one by one) may miss interactions; <b>holism</b> (looking at the whole) misses details.</li>
<li>Models simplify reality; systems evolve, and static models quickly become outdated.</li>
</ul>

<h3>Cybernetics and feedback</h3>
<ul>
<li><b>Cybernetics</b> is the science of control, communication and observation in complex systems; it studies cyclical processes.</li>
<li><b>Feedback loop</b>: the output of a system affects its input.</li>
<li><b>Positive feedback</b> amplifies a change (growth or decline).</li>
<li><b>Negative feedback</b> reduces deviation and stabilizes the system (thermostat).</li>
</ul>

<h3>Dynamic information systems</h3>
<ul>
<li>A dynamic IS adapts and evolves. Features: flexibility, adaptability, autonomy.</li>
<li><b>Reinforcement learning</b>: a trial-and-error method with rewards and penalties.</li>
<li>Examples: artificial intelligence, social networks, living organisms.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>Why describe an information system at all</h2>
<p>Imagine you are asked to figure out why the queues in the school canteen are the same every day, while the library is empty. To change anything, you first need to describe it. An information system (IS) is people, data, programs and rules that together collect, store and pass on information. To describe it means answering questions: who uses it, what works well in it, where it breaks down and why.</p>
<p>There are two big families of methods for describing it. One answers the question "why", the other answers "how much". That is why they are called qualitative and quantitative.</p>

<h2><span class="k">2</span>Qualitative methods: understanding "why"</h2>
<p><b>Qualitative methods</b> (Qualitative methods) help us understand the properties of a system, its qualities and the experience of the people who work with it. Here the meaning matters more than statistics. These methods are called exploratory: they show where to look for a problem.</p>
<div class="box tip"><span class="t">In plain terms</span>Imagine you have joined a new club. To find out whether the kids like it, you will not count votes. You will talk to a few members and watch a session. That is the qualitative approach: one conversation gives more understanding than a hundred ticks in a table.</div>
<p>The main qualitative techniques:</p>
<ul>
<li><b>Interview</b> — a conversation with one person who is connected to the system. For example, you ask a teacher how they find working in the new CRM system.</li>
<li><b>Focus group</b> — a discussion in a small group led by a moderator. For example, staff together decide whether the internal knowledge base is convenient.</li>
<li><b>Case study</b> (case study) — a detailed study of one or several cases. For example, how one hospital introduced electronic medical records.</li>
<li><b>Observation</b> — you watch how people actually work. This is often more important than what they say about themselves.</li>
</ul>
<p>The advantages are clear: the data is rich, and you see a person's opinion and experience. There are drawbacks too. The results are subjective, one interview is not enough to draw a general conclusion, and this kind of work takes a lot of time. The analysis also requires skill.</p>

<h2><span class="k">3</span>Quantitative methods: counting "how much"</h2>
<p><b>Quantitative methods</b> (Quantitative methods) are based on numbers. Here the questions sound like this: how many users, how often, how much slower. Numbers allow us to compare objects fairly and test hypotheses.</p>
<ul>
<li><b>Surveys and questionnaires</b> — structured collection of answers from a large number of people. For example, rating satisfaction with an ERP system on a scale from 1 to 5.</li>
<li><b>Data analysis</b> — searching for trends in what the system has already recorded. For example, which products are bought more often in the evening.</li>
<li><b>Metrics and performance indicators</b> — uptime, server response time, user error rate.</li>
<li><b>Experiments</b> — controlled tests. The best-known type is <b>A/B testing</b>: half of the users see version A, half see version B, and the results are compared.</li>
</ul>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Task: find out which of two payment buttons leads to more purchases.</p>
<ol>
<li>Randomly split the visitors into two groups.</li>
<li>The first group sees button A, the second sees button B.</li>
<li>Count the number of purchases in each group over the same period.</li>
<li>Compare the results. If the difference is noticeable and not due to chance, choose the better option.</li>
</ol>
<p>Answer: this is a quantitative method, because the numbers of purchases are compared. The qualitative question "why" is not solved here; for that, interviews are needed.</p>
</div>
<p>Pros of quantitative methods: the data is objective and can be generalized to all users. Cons: numbers do not explain the context. You can see that button B works worse, but not why.</p>
<div class="box tip"><span class="t">Remember</span>Qualitative methods give <b>depth</b>, quantitative methods give <b>breadth</b>. They complement each other. The choice depends on the question, the goal of the study and the resources.</div>
<div class="tw"><table><thead><tr><th>Task</th><th>Suitable method</th></tr></thead><tbody>
<tr><td>Understand why staff do not accept the new system</td><td>interview or focus group (qualitative)</td></tr>
<tr><td>Find out which of two designs gets more clicks</td><td>A/B test (quantitative)</td></tr>
<tr><td>Estimate the average server response time</td><td>metrics (quantitative)</td></tr>
<tr><td>Study the rollout of a system in one hospital</td><td>case study (qualitative)</td></tr>
</tbody></table></div>

<h2><span class="k">4</span>Difficulties of systems theory</h2>
<p>Why is it hard to describe systems even for scientists? Because reality is more complex than any model. Here are six problems worth knowing.</p>
<ol>
<li><b>Boundaries.</b> Where does the system end and the environment begin? One and the same employee may belong to two systems at once, and the boundaries blur.</li>
<li><b>Emergence.</b> The whole has properties that none of its parts have. For example, a traffic jam arises from the behavior of individual cars, but no single car "creates" it.</li>
<li><b>Reductionism and holism.</b> Reductionism breaks a system into parts and studies each one. Holism looks at the whole. If you study only the parts, you can miss the interactions.</li>
<li><b>Modeling.</b> A model simplifies reality. Simplification is useful, but important dynamics may be lost.</li>
<li><b>Dynamics.</b> Systems change over time. A model that was correct last year may be outdated.</li>
<li><b>Interdisciplinarity.</b> Different sciences use different methods and words for the same thing. That is why an engineer and a psychologist can argue without understanding each other.</li>
</ol>
<div class="box warn"><span class="t">Common mistake</span>Thinking that if you study every detail of a system, you will understand the whole system. Emergent properties appear precisely in the interaction of details, so they cannot be seen by looking at one detail.</div>

<h2><span class="k">5</span>Cybernetics: the science of control</h2>
<div class="box def"><span class="t">What cybernetics is</span><b>Cybernetics</b> (Cybernetics) — the science of control, communication and observation in complex systems. It is studied in living organisms and in machines. Its main focus is cyclical processes, that is, processes where the result returns and affects the next step.</div>
<p>These cycles are called <b>feedback</b>. The scheme is simple: the system does something, looks at the result, compares it with the goal and corrects its behavior. Cybernetic models of an IS rely on three major theories: general systems theory, control theory and information theory.</p>
<div class="box ex"><span class="t">Step-by-step example: thermostat</span>
<ol>
<li>A sensor measures the current temperature in the room. This is the output of the system.</li>
<li>The device compares it with the set temperature, for example 22 degrees.</li>
<li>If the room is at 19 degrees, the heating switches on.</li>
<li>When the temperature reaches the set value, the heating switches off.</li>
</ol>
<p>Why this matters: the system maintains the required mode by itself. This kind of connection is called negative feedback.</p>
</div>
<div class="box warn"><span class="t">Common mistake</span>Thinking that negative feedback is something bad. On the contrary, it stabilizes the system and reduces deviations. Neither a thermostat nor a cruise control in a car would work without it.</div>

<h2><span class="k">6</span>Positive and negative feedback</h2>
<p>There are two kinds of feedback, and the difference between them is fundamental:</p>
<ul>
<li><b>Positive feedback</b> amplifies a change. The bigger the result, the faster it grows further, so both rapid growth and rapid decline are possible. Example: a post spreads virally because every repost generates new reposts.</li>
<li><b>Negative feedback</b> reduces deviation and keeps the system in a stable state. Example: when the load on a server grows, the system automatically adds one more server, and the load on each one drops.</li>
</ul>
<div class="box tip"><span class="t">In plain terms</span>Positive feedback is like a snowball: the bigger it gets, the faster it grows. Negative feedback is like a spring-loaded seesaw: no matter how hard you push it, it returns to the middle.</div>

<h2><span class="k">7</span>Dynamic information systems</h2>
<p>A <b>dynamic IS</b> is a system that changes in response to changes in its environment or in its own state. Its main features are <b>flexibility</b> (its work can be reorganized), <b>adaptability</b> (it adjusts to new conditions) and <b>autonomy</b> (it makes decisions without constant human involvement).</p>
<p>The key mechanism of adaptation is <b>learning</b>. For example, in <b>reinforcement learning</b> a system tries different actions and gets rewards for good ones and penalties for bad ones. Gradually it chooses what brings a reward.</p>
<div class="box ex"><span class="t">Example: a voice assistant</span>
<ol>
<li>The assistant made a mistake and did not understand the command. That is a penalty.</li>
<li>The user corrected it. The assistant remembered how the phrase should be understood.</li>
<li>Next time it understands the same phrase the first time. That is a reward.</li>
<li>Over time the system becomes adaptive: it adjusts to the habits of a specific person.</li>
</ol>
</div>
<p>Examples of dynamic systems: artificial intelligence, social networks, cyber-physical systems, living organisms. Such systems have advantages: stability, efficiency, better decisions and the possibility of innovation.</p>
<div class="box def"><span class="t">If you remember only one thing</span>Qualitative methods answer the question "why" and give depth, quantitative methods answer the question "how much" and give breadth. Cybernetics explains how a system controls itself through feedback: positive feedback amplifies a change, negative feedback dampens it, and it is negative feedback that makes a system stable.</div>
`
},'en');
