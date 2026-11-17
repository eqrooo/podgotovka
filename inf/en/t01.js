addEn('inf','t01',{
title:'Information Society and Informatization',
summary:'What an information system is, the values and stages of the information society, what informatization means, and the principles of digital development of the state.',
body:String.raw`
<h2><span class="k">1</span>Information system and information society</h2>
<p><b>Information System (IS)</b> — an organized set of people, data, hardware and software, procedures and communication networks, designed to collect, store, process and transmit information in order to support decisions and management. Examples: a banking system, an electronic library, an online doctor appointment system, a government services portal.</p>
<div class="box def"><span class="t">Definition</span><b>Information Society</b> — a stage of social development in which information and knowledge become the main resource and the main product, and most of the population is engaged in producing, storing, processing and distributing information.</div>
<p>It was preceded by the agrarian society (the main resource is land), the industrial society (the resource is energy and machines) and the post-industrial society (the resource is services and technologies). In the information society, the growth of welfare is determined not so much by the amount of raw materials as by the quality of knowledge and the speed of information exchange.</p>

<h2><span class="k">2</span>Main values of the information society</h2>
<ul>
<li>knowledge and qualification;</li>
<li>independent thinking;</li>
<li>the ability to work with information and make well-founded decisions based on it;</li>
<li>awareness not only in one's narrow professional field, but also in related fields.</li>
</ul>
<p>The level of development of a society is determined not only by technology, but also by the qualities of its people:</p>
<ol>
<li>responsibility for taking part in joint socio-political decisions;</li>
<li>the ability to coexist with people of other cultures, languages and religions on the basis of understanding differences;</li>
<li>command of oral and written communication — a person who lacks it risks being "left out" of society;</li>
<li>the ability to master new technologies;</li>
<li>a critical attitude toward information and advertising in the media (the ability to tell truth from lies);</li>
<li>the ability to learn throughout life (lifelong education).</li>
</ol>

<h2><span class="k">3</span>Informatization as a system of processes</h2>
<div class="box def"><span class="t">Definition</span><b>Informatization</b> — a system of interrelated processes of three types: informational, cognitive and material.</div>
<div class="tw"><table><thead><tr><th>Process</th><th>Essence</th><th>Example</th></tr></thead><tbody>
<tr><td>Informational</td><td>identifying and presenting all socially significant information in a form accessible for electronic storage, processing and transmission</td><td>digitization of archives, electronic registers</td></tr>
<tr><td>Cognitive</td><td>forming and maintaining a holistic information model of the world that allows society to regulate its development proactively</td><td>big data analytics, predictive models</td></tr>
<tr><td>Material</td><td>creating a global infrastructure of electronic means for storing, processing and transmitting information</td><td>data centers, fiber-optic lines, mobile networks</td></tr>
</tbody></table></div>

<h2><span class="k">4</span>Concept of ICT development and the digital sphere</h2>
<p>The state concept for the development of Information and Communication Technologies (ICT) defines the optimal ways to solve tasks in the field of government services for citizens and businesses, the transformation of public administration, and the development of economic sectors by means of digital technologies, in line with the priorities of the national plan. The strategic goal is pursued on the basis of the following principles:</p>
<ul>
<li><b>Human-centricity</b> — the goal is to improve quality of life; services are built around human needs, with a shift to providing services via mobile devices.</li>
<li><b>Transparency and openness</b> — openness of government bodies and processes, joint decision-making with society, digital channels of direct communication between citizens and the state.</li>
<li><b>Focus on results</b> through systemic changes (impact-oriented).</li>
<li><b>Service approach</b> — high-quality service as a value; citizens can easily evaluate the work of government bodies.</li>
<li><b>Flexibility</b> — studying trends and adjusting goals to new challenges.</li>
<li><b>Pragmatism</b> — eliminating duplication of information systems.</li>
<li><b>Transition to horizontal structures</b>, handing over open data to the market, and the provision of government services by market players.</li>
<li><b>Trust</b> — protection of privacy and personal data, control of digital security.</li>
</ul>
<div class="box ex"><span class="t">Example</span>Submitting a tax return through an online portal: human-centricity (there is no need to go to an office), transparency (the status of the application is visible), pragmatism (the data is taken from existing registers rather than entered again).</div>
<div class="box warn"><span class="t">Common mistake</span>Equating informatization only with buying computers. This is only a material process; without the informational process (digitizing data) and the cognitive process (using data for decisions), there is no informatization.</div>
<div class="box tip"><span class="t">Remember</span>Informatization = informational + cognitive + material processes. The information society is a society in which the main value is knowledge and the ability to use it.</div>
`,
practice:[
{q:String.raw`Name three types of informatization processes and give one example of each from university life.`,a:String.raw`Informational: converting exam sheets and study materials into electronic form. Cognitive: analyzing student performance using system data to predict dropouts and adjust programs. Material: Wi-Fi in the buildings, servers of the electronic journal, computer labs.`},
{q:String.raw`A medical appointment service requires you to enter your passport details even though they are already in the state register. Which principle of digital development is violated, and how can it be fixed?`,a:String.raw`The principles of pragmatism (eliminating duplication) and human-centricity are violated: the person enters the data again. Solution: integration with the register, obtaining the data with the citizen's consent, pre-filling the form.`},
{q:String.raw`Explain why the ability to critically evaluate information is considered a value of the information society.`,a:String.raw`The volume of information is enormous, it spreads quickly and often contains errors, advertising and manipulation. Without a critical attitude, a person makes decisions based on false information. Therefore, the ability to tell truth from lies is a condition for independent thinking and well-founded decisions.`},
{q:String.raw`Match the principles with the situations: (a) an app shows the status of an application in real time; (b) protection against leaking passport data; (c) the service is available on a smartphone. Indicate the principles.`,a:String.raw`(a) transparency and openness; (b) trust (protection of personal data and digital security); (c) human-centricity (services via mobile devices).`},
{q:String.raw`How does the information society differ from the industrial society in terms of its main resource and employment of the population?`,a:String.raw`In the industrial society the main resources are energy, machines and raw materials, and most of the population works in industry. In the information society the main resource is information and knowledge, and most of the population is engaged in creating, processing, storing and transmitting information and in services based on it.`}
],
quiz:[
{q:String.raw`The main resource of the information society is`,options:[String.raw`land`,String.raw`energy and raw materials`,String.raw`information and knowledge`,String.raw`capital in the form of gold`],solution:String.raw`Information and knowledge. Land is the resource of the agrarian society, and energy and raw materials are the resources of the industrial society.`},
{q:String.raw`Which informatization process describes building a global infrastructure for storing and transmitting information?`,options:[String.raw`informational`,String.raw`material`,String.raw`cognitive`,String.raw`social`],solution:String.raw`This is the material process (networks, data centers). The informational process is presenting information in an accessible form, and the cognitive process is forming a model of the world. There is no social process in this classification.`},
{q:String.raw`What is NOT a value of the information society?`,options:[String.raw`independent thinking`,String.raw`qualification`,String.raw`awareness in related fields`,String.raw`refusing to learn after getting a diploma`],solution:String.raw`The value is lifelong education, not refusing to learn. The other items are directly named as values.`},
{q:String.raw`The principle "elimination of reproduction and duplication of information systems" is called`,options:[String.raw`pragmatism`,String.raw`flexibility`,String.raw`trust`,String.raw`transparency`],solution:String.raw`Pragmatism. Flexibility is adjusting goals, trust is data protection, transparency is openness of government bodies.`},
{q:String.raw`The cognitive process of informatization is`,options:[String.raw`laying fiber-optic cable`,String.raw`digitizing paper archives`,String.raw`forming a holistic information model of the world for proactive regulation of development`,String.raw`selling computers`],solution:String.raw`Exactly the model of the world and proactive regulation. Laying networks is a material process, digitization is an informational process.`},
{q:String.raw`Human-centricity means that`,options:[String.raw`all services are provided only in an office`,String.raw`services are built around human needs`,String.raw`robots replace officials`,String.raw`data is closed to citizens`],solution:String.raw`Services are built around human needs, including mobile channels. The other options contradict the principle.`},
{q:String.raw`Passing open data to the market for use refers to the principle of`,options:[String.raw`privacy protection`,String.raw`flexibility`,String.raw`service approach`,String.raw`transition to horizontal structures`],solution:String.raw`It is part of the principle of transition to horizontal structures, together with the provision of services by market players.`},
{q:String.raw`The danger for a person who lacks oral and written communication skills in the information society is`,options:[String.raw`receiving a high salary`,String.raw`being left out of society`,String.raw`becoming a programmer`,String.raw`breaking the law`],solution:String.raw`Exactly "being left out of society": communication plays an important role in social and professional activity.`}
]
});
