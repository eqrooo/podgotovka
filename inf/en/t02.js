addEn('inf','t02',{
title:'System, Structure, Elements and Systems Analysis',
summary:'Basic concepts of systems theory: system, element, subsystem, structure, connection, emergence, and how to carry out a systems analysis of an object.',
body:String.raw`
<h2><span class="k">1</span>Basic definitions</h2>
<div class="box def"><span class="t">Definition</span><b>System</b> — a set of elements connected to each other by a certain structure, united by a unity of purpose (function) and by functional integrity.</div>
<ul>
<li><b>Element</b> — a unit of the system that is indivisible within the given study and has independence relative to it. Indivisibility means that it is not expedient to take its internal structure into account. Depending on the task, an element may be considered a subsystem.</li>
<li><b>Subsystem</b> — a subset of elements for which a system-forming relation can be defined, distinguishing them from the others. Subsystems of different levels can be identified within a system.</li>
<li><b>Suprasystem</b> — a larger system of which the given system is a part.</li>
<li><b>Connection</b> — mutual restriction of the behavior of objects, creating a dependence between them.</li>
<li><b>Structure</b> — the set of properties of the system that are essential for the study, that are invariant (constant) and that ensure the integrity of the system over the whole interval of its functioning of interest.</li>
</ul>

<h2><span class="k">2</span>Types of structures</h2>
<div class="tw"><table><thead><tr><th>Structure</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td>Linear</td><td>elements are arranged in sequence</td><td>stations of one metro line</td></tr>
<tr><td>Hierarchical</td><td>levels of subordination, a "tree"</td><td>management of a university</td></tr>
<tr><td>Network</td><td>many connections, parallel work is possible</td><td>building a house: installing walls and landscaping proceed in parallel</td></tr>
</tbody></table></div>

<h2><span class="k">3</span>Emergence</h2>
<p>A system is formed as a result of the interaction of its elements, and this interaction gives it new properties that individual elements do not have. The properties of the system are not reducible to the sum of the properties of its elements — this is the property of <b>emergence</b>. The more connections between elements there are, the more complex the system is, and the more emergence is manifested.</p>
<div class="box ex"><span class="t">Example</span>A bicycle: wheels, frame, handlebars and chain separately are unable to carry a person. Assembled into a system with certain connections, they provide a new property — transportation.</div>

<h2><span class="k">4</span>Systems analysis: how to examine an object</h2>
<p>The goal is to learn to view a complex object as a system: to find the suprasystem, subsystems of different levels and elements. The order of actions:</p>
<ol>
<li>Formulate the purpose (goal) of the system.</li>
<li>Define the boundaries: what belongs to the system and what belongs to the external environment.</li>
<li>Identify the suprasystem (the larger system into which the object is included).</li>
<li>Divide into subsystems by a system-forming feature (function, process, resource).</li>
<li>Identify the elements at the last level, beyond which further division is not expedient.</li>
<li>Describe the connections (material, energy, informational) and the type of structure.</li>
<li>Indicate inputs, outputs and feedback.</li>
</ol>
<div class="box ex"><span class="t">Example</span>A university. Suprasystem — the country's higher education system. Subsystems: educational (faculties, departments), research, administrative, economic, information. Elements: teacher, student, classroom, curriculum. The management structure is hierarchical.</div>
<div class="box warn"><span class="t">Common mistake</span>Treating a system as a "heap" of elements. If there are no connections and no common goal, it is merely an aggregate, not a system. Also, structure (stable connections) is often confused with composition (the list of elements).</div>
<div class="box tip"><span class="t">Remember</span>System = elements + connections + goal + integrity. The new qualities of the whole are called emergence. What counts as an element and what as a subsystem depends on the goal of the study.</div>
`,
practice:[
{q:String.raw`Describe a library as a system: goal, suprasystem, three subsystems, elements, type of structure.`,a:String.raw`Goal: to give readers access to books and information. Suprasystem: the education/culture system of the city. Subsystems: collection (storage), reader services (lending), catalog (search), acquisitions (purchasing). Elements: book, borrowing card, reader, librarian, shelf. Structure: hierarchical (director — departments — staff) with network connections between departments.`},
{q:String.raw`Determine the type of structure: (a) an assembly line; (b) the organization of a military unit; (c) an apartment renovation project where painting and tiling proceed in parallel in different rooms.`,a:String.raw`(a) linear — operations are strictly sequential; (b) hierarchical — levels of command; (c) network — tasks are performed in parallel, with connections through resources and deadlines.`},
{q:String.raw`Give an example of an emergent property for a football team.`,a:String.raw`The team's play — coordinated combinations, tactics, mutual understanding. These properties do not belong to any single player; they arise from the connections between players. If you gather 11 strong players without connections, the team may play worse.`},
{q:String.raw`Smartphone: what should be considered an element and what a subsystem if the study concerns power consumption? And if it concerns interface usability?`,a:String.raw`For power consumption, subsystems: battery, processor, display, communication modules; elements — their main components. For interface usability, subsystems: touch screen, software, input system; elements — buttons, gestures, menus. Conclusion: the division depends on the goal of the study.`},
{q:String.raw`Why is a set of "table, lamp, cup, laptop" stored in a storage room not a system, while a workplace is a system?`,a:String.raw`In the storage room the objects are not connected by a common goal or interaction. At a workplace they are united by a goal (comfortable work) and are connected (the laptop is on the table, the lamp illuminates it, the cup holds a drink), which gives a new property — a functional workplace.`}
],
quiz:[
{q:String.raw`The property of a system that is not reducible to the sum of the properties of its elements is called`,options:[String.raw`additivity`,String.raw`emergence`,String.raw`invariance`,String.raw`discreteness`],solution:String.raw`This is emergence. Additivity is exactly the sum of properties, invariance is the constancy of structure.`},
{q:String.raw`According to the lecture, the management structure of a university belongs to`,options:[String.raw`linear`,String.raw`network`,String.raw`hierarchical`,String.raw`random`],solution:String.raw`Hierarchical: rector — vice-rectors — deans, and so on.`},
{q:String.raw`A subset of elements singled out by a system-forming relation is`,options:[String.raw`a subsystem`,String.raw`a suprasystem`,String.raw`the environment`,String.raw`a connection`],solution:String.raw`A subsystem. A suprasystem is a larger system, and the environment is everything outside the system.`},
{q:String.raw`What characterizes a connection in a system?`,options:[String.raw`absence of dependencies`,String.raw`mutual restriction of the behavior of objects`,String.raw`the size of the elements`,String.raw`the color of the elements`],solution:String.raw`A connection is a mutual restriction of behavior and a dependence between objects.`},
{q:String.raw`The stations of one metro line form a structure that is`,options:[String.raw`network`,String.raw`hierarchical`,String.raw`necessarily ring-shaped`,String.raw`linear`],solution:String.raw`According to the lecture, this is an example of a linear structure. Network is construction, hierarchical is management.`},
{q:String.raw`An element of a system is`,options:[String.raw`any part of it`,String.raw`a unit that is indivisible within the given study`,String.raw`a suprasystem`,String.raw`any document about the system`],solution:String.raw`An element is a unit whose internal structure is not taken into account in the given task.`},
{q:String.raw`What happens when the number of connections between elements increases?`,options:[String.raw`the system becomes simpler`,String.raw`complexity and the manifestation of emergence grow`,String.raw`the system disappears`,String.raw`the goal is lost`],solution:String.raw`More connections mean a more complex system and more noticeable new properties of the whole.`},
{q:String.raw`The first step of a systems analysis of an object is`,options:[String.raw`identifying the elements`,String.raw`counting the connections`,String.raw`formulating the goal of the system`,String.raw`building a table`],solution:String.raw`First the purpose (goal) is determined, then the boundaries, subsystems and elements.`}
]
});
