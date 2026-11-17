addEn('inf','t03',{
title:'Methods for Describing IS, the Cybernetic Approach and Dynamics',
summary:'Qualitative and quantitative methods for describing information systems, problems of systems theory, cybernetics, feedback, and dynamic information systems.',
body:String.raw`
<h2><span class="k">1</span>Qualitative methods</h2>
<p><b>Qualitative methods</b> aim to understand the properties, qualities and experience related to an IS. They are exploratory and provide depth and context.</p>
<ul>
<li><b>Interviews</b> — individual or group conversations with stakeholders. Example: a survey of users about a new CRM system.</li>
<li><b>Focus groups</b> — group discussion led by a moderator. Example: employees discuss the usability of an internal knowledge base.</li>
<li><b>Case study</b> — an in-depth study of one or several cases. Example: the introduction of an electronic medical record in a hospital.</li>
<li><b>Observation</b> — direct observation of users at work. Example: how employees use a workflow management system.</li>
</ul>
<p>Advantages: rich data, consideration of user experience. Disadvantages: subjectivity, difficulty in generalizing, time-consuming, requires analytical skill.</p>

<h2><span class="k">2</span>Quantitative methods</h2>
<p><b>Quantitative methods</b> use numerical data and statistics to describe and measure an IS, test hypotheses and make objective comparisons.</p>
<ul>
<li><b>Surveys and questionnaires</b> — structured data collection from a large number of respondents (satisfaction with an ERP system).</li>
<li><b>Data analysis</b> — identifying trends in system data (analysis of transactions in an online store).</li>
<li><b>Metrics and performance indicators</b> — uptime, response time, share of user errors.</li>
<li><b>Experiments</b> — controlled tests, for example A/B testing of interfaces.</li>
</ul>
<p>Advantages: objective measurable data, the possibility of generalization. Disadvantages: nuances of context are lost, careful research design is required.</p>
<div class="box tip"><span class="t">Remember</span>Qualitative methods give <b>depth</b>, quantitative methods give <b>breadth</b>. They complement each other. The choice depends on the research question, goals and resources.</div>
<div class="tw"><table><thead><tr><th>Task</th><th>Method</th></tr></thead><tbody>
<tr><td>Understand why employees do not accept a new system</td><td>interviews, focus group (qualitative)</td></tr>
<tr><td>Find out which of two designs gets more clicks</td><td>A/B test (quantitative)</td></tr>
<tr><td>Estimate the average server response time</td><td>metrics (quantitative)</td></tr>
<tr><td>Study the implementation in one hospital</td><td>case study (qualitative)</td></tr>
</tbody></table></div>

<h2><span class="k">3</span>Problems of systems theory</h2>
<ol>
<li><b>Definition and boundaries:</b> it is difficult to draw clear boundaries; overlapping systems lead to ambiguity.</li>
<li><b>Complexity and emergence:</b> the properties of a whole cannot be predicted from the properties of its parts.</li>
<li><b>Reductionism and holism:</b> analysis of parts may miss interactions, while a holistic view may miss details.</li>
<li><b>Modeling:</b> models simplify reality and may lose critical dynamics.</li>
<li><b>Dynamics and adaptivity:</b> systems evolve, and static models become outdated.</li>
<li><b>Interdisciplinarity:</b> different sciences use different methods and terms.</li>
</ol>

<h2><span class="k">4</span>The cybernetic approach</h2>
<div class="box def"><span class="t">Definition</span><b>Cybernetics</b> — the science of control, communication and information in complex systems, primarily in living organisms and machines. It studies cyclic processes, in particular feedback systems, where the output serves as the input.</div>
<p>Cybernetic models of IS rely on general systems theory, control theory and information theory.</p>
<div class="box ex"><span class="t">Example</span>A thermostat: a sensor measures the temperature (output), compares it with the set value, and switches the heating on or off (control). This is negative feedback.</div>

<h2><span class="k">5</span>Dynamic information systems</h2>
<p>A <b>dynamic IS</b> is able to adapt and develop in response to changes in the environment or in its internal state. Features: flexibility, adaptivity, autonomy.</p>
<ul>
<li><b>Positive feedback</b> amplifies a change (exponential growth or decline). Example: viral spread of a publication.</li>
<li><b>Negative feedback</b> reduces deviation, maintaining stability. Example: automatic scaling of server load.</li>
<li><b>Learning and adaptation:</b> machine learning, reinforcement learning (trial and error with rewards and penalties).</li>
<li><b>Autonomy and self-organization:</b> decentralized decisions, emergent properties.</li>
</ul>
<p>Examples: artificial intelligence, cyber-physical systems, social networks, living organisms. Advantages: stability, efficiency, improved decisions, innovation.</p>
<div class="box warn"><span class="t">Common mistake</span>Thinking that "negative" feedback is bad. It stabilizes the system, so it is necessary (a thermostat, a speed governor).</div>
`,
practice:[
{q:String.raw`For each task, choose a method and state whether it is qualitative or quantitative: (a) find out why doctors are reluctant to use a new interface; (b) measure the average page load time; (c) compare two versions of a payment button by the number of purchases.`,a:String.raw`(a) interviews or a focus group, qualitative: reasons and opinions are needed; (b) metrics and data analysis, quantitative: numerical measurement; (c) A/B experiment, quantitative: comparison of purchase counts and statistical testing.`},
{q:String.raw`Give one example each of positive and negative feedback in an information system.`,a:String.raw`Positive: a recommendation system shows a popular video more often, so it is watched even more — the growth intensifies. Negative: a monitoring system adds servers when the load grows, the load per server decreases — the system stabilizes.`},
{q:String.raw`What is the dispute between reductionism and holism? Which approach will miss emergent properties?`,a:String.raw`Reductionism studies a system by its parts and may miss interactions; holism studies the whole and may not give a detailed understanding of components. Reductionism misses emergent properties, so in practice the approaches are combined.`},
{q:String.raw`What are the drawbacks of a survey of a large number of respondents, and how can they be compensated?`,a:String.raw`A survey does not reveal the reasons behind answers or the context, and closed questions miss nuances; the results depend on how questions are worded. This can be compensated by interviews or a focus group for deeper understanding (a combination of methods).`},
{q:String.raw`Describe an autonomous "smart home" system as a dynamic IS: flexibility, adaptivity, autonomy.`,a:String.raw`Flexibility: devices and scenarios can be added. Adaptivity: the system learns the residents' habits and adjusts temperature and light. Autonomy: devices make decisions without a human command (heating switches on according to a sensor).`}
],
quiz:[
{q:String.raw`Which method is quantitative?`,options:[String.raw`focus group`,String.raw`case study`,String.raw`A/B testing`,String.raw`observation`],solution:String.raw`A/B testing is an experiment with numerical results. The others are qualitative.`},
{q:String.raw`The main drawback of qualitative methods is`,options:[String.raw`lack of context`,String.raw`subjectivity and difficulty of generalization`,String.raw`impossibility of studying users`,String.raw`being too fast`],solution:String.raw`The data are subjective and hard to generalize, and the analysis is labor-intensive.`},
{q:String.raw`Cybernetics studies`,options:[String.raw`only the design of computers`,String.raw`control, communication and feedback in systems`,String.raw`only biology`,String.raw`only programming languages`],solution:String.raw`Cybernetics is the science of control and communication in living organisms and machines.`},
{q:String.raw`Positive feedback`,options:[String.raw`stabilizes the system`,String.raw`amplifies a change and leads to growth or decline`,String.raw`shuts the system down`,String.raw`has no effect on the system`],solution:String.raw`Positive feedback amplifies a change; negative feedback stabilizes.`},
{q:String.raw`An example of a dynamic IS is`,options:[String.raw`a paper reference book`,String.raw`a static web page`,String.raw`a self-learning voice assistant`,String.raw`a printed book`],solution:String.raw`The assistant learns and adapts. The others are static.`},
{q:String.raw`Surveys and questionnaires allow one to`,options:[String.raw`collect structured data from many respondents`,String.raw`observe behavior live`,String.raw`conduct an in-depth case study`,String.raw`measure response time`],solution:String.raw`This is a method of collecting statistical data from a large number of people.`},
{q:String.raw`The problem of "definition and boundaries" consists in the fact that`,options:[String.raw`systems do not exist`,String.raw`it is hard to set clear boundaries, and systems overlap`,String.raw`all systems are identical`,String.raw`boundaries are always obvious`],solution:String.raw`The overlap of systems and subsystems creates ambiguity.`},
{q:String.raw`Reinforcement learning is`,options:[String.raw`supervised learning without rewards`,String.raw`trial-and-error learning with rewards and penalties`,String.raw`data storage`,String.raw`file compression`],solution:String.raw`The system receives rewards and penalties for its actions and learns from experience.`}
]
});
