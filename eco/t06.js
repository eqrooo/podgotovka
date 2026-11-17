registerTopic({
subject:'eco', id:'t06', num:6, module:1,
title:{ru:'Экосистемы: структура, типы, пищевые цепи и пирамиды'},
summary:{ru:'Что такое экосистема, её типы (наземные, пресноводные, морские, техноэкосистемы, агроэкосистемы), трофические уровни, пищевые цепи и сети, экологические пирамиды и правило 10%.'},
body:{ru:String.raw`
<h2><span class="k">1</span>Понятие и структура экосистемы</h2>
<div class="box def"><span class="t">Определение</span><b>Ecosystem</b> — система, состоящая из биотических и абиотических компонентов, функционирующих как единое целое. Простое определение: ecosystem = community + environment (сообщество плюс среда).</div>
<p>Биотические компоненты — все живые существа (producers, consumers, decomposers), абиотические — неживая природа (свет, вода, воздух, минеральные соли). Идею экосистемы как целостной системы развил Юджин Одум (Eugene Odum), «отец современной экологии»; его идеи отчасти вдохновлены отцом, Говардом В. Одумом.</p>

<h2><span class="k">2</span>Типы экосистем</h2>
<div class="tw"><table><thead><tr><th>Тип</th><th>Характеристика</th><th>Примеры</th></tr></thead><tbody>
<tr><td>Terrestrial</td><td>наземное сообщество и взаимодействие биотических и абиотических компонентов</td><td>tundra, taiga, temperate deciduous forests, tropical rainforests, grasslands, deserts</td></tr>
<tr><td>Freshwater</td><td>часть водных экосистем с малым содержанием соли</td><td>lakes, ponds, rivers, streams, springs, bogs, wetlands</td></tr>
<tr><td>Marine</td><td>водная среда с высоким содержанием растворённой соли</td><td>open ocean, deep-sea ocean, coastal marine ecosystems</td></tr>
<tr><td>Technoecosystem</td><td>экосистема с развитой технологией, рыночной экономикой и большим экологическим следом (ecological footprint)</td><td>города, промышленные районы, технические водохранилища и ГЭС</td></tr>
<tr><td>Agroecosystem</td><td>экосистема, обеспечивающая производство пищи на фермах и в садах</td><td>поля, пастбища, сады, rice-fish системы, agroforestry, aquaculture</td></tr>
</tbody></table></div>
<p><b>Technoecosystem</b> (идея Говарда Т. Одума и Зеева Навеха): человеческая среда (дороги, заводы, электростанции, города), сложная сеть взаимосвязей, требующая много энергии и ресурсов; потоки энергии и информации идут при помощи технологий; такие системы нередко конкурируют с природными или действуют на них «паразитически». Технические системы образуют <i>technosphere</i>.</p>
<p><b>Agroecosystem</b> от естественной экосистемы отличают: управление человеком (human management), изменённая среда, зависимость от внешних вложений энергии и питательных веществ (удобрения, вода), высокая продуктивность по пище, волокну и топливу, но более простое биоразнообразие, а значит уязвимость к вредителям и болезням. В состав входят управляемые поля, природные местообитания по соседству и поселения людей. Бывают polycultures, monocultures, смешанные системы, crop-livestock, rangelands, pastures и fallow lands.</p>
<div class="box warn"><span class="t">Типичная ошибка</span>Агроэкосистему считают самоподдерживающейся. На деле без внешней энергии и удобрений она не работает, а видовое разнообразие в ней ниже, чем в естественной.</div>

<h2><span class="k">3</span>Трофические уровни, пищевые цепи и сети</h2>
<p>Живое вещество организовано в <b>trophic levels</b> (трофические уровни): организмы с одинаковым типом питания относятся к одному уровню. Продуценты всегда образуют основание.</p>
<ul>
<li><b>Food chain</b> — упрощённый линейный путь питания от базового вида до верхнего консумента: трава → кузнечик → лягушка → змея → орёл.</li>
<li><b>Food web</b> (food cycle) — сеть связей «кто кого ест» в сообществе; consumer-resource system.</li>
<li>Консументы бывают: <b>herbivores</b> (травоядные), <b>carnivores</b> (хищники), <b>omnivores</b> (всеядные).</li>
</ul>
<div class="box ex"><span class="t">Пример: пруд</span>Фитопланктон (продуцент) → дафния (herbivore) → карась (consumer 2) → щука (top carnivore). Бактерии и грибы разлагают остатки (decomposers).</div>

<h2><span class="k">4</span>Экологические пирамиды</h2>
<div class="tw"><table><thead><tr><th>Пирамида</th><th>Что показывает</th></tr></thead><tbody>
<tr><td>Pyramid of numbers (Чарльз Элтон, 1927)</td><td>число организмов на каждом трофическом уровне</td></tr>
<tr><td>Pyramid of biomass</td><td>количество биомассы на каждом уровне на определённый момент</td></tr>
<tr><td>Pyramid of productivity (energy)</td><td>продукцию или оборот биомассы, то есть поток энергии через цепь питания</td></tr>
</tbody></table></div>
<p>Каждый уровень изображается слоем, размер которого пропорционален числу особей, массе или энергии. Пирамида продуктивности чаще всего самая полезная, так как показывает не «снимок», а поток энергии.</p>
<h3>Правило 10% (закон Линдемана)</h3>
<p>На следующий трофический уровень переходит примерно <b>10%</b> энергии, остальное теряется как тепло, тратится на дыхание и не усваивается.</p>
<div class="box ex"><span class="t">Пример</span>В продуцентах накоплено 80 000 кДж. Травоядные получат 8 000 кДж, хищники первого порядка 800 кДж, верхние хищники 80 кДж. Поэтому цепи редко бывают длиннее 4–5 звеньев.</div>
<div class="box tip"><span class="t">Запомни</span>Вверх по пирамиде энергия и биомасса уменьшаются в ~10 раз на каждом шаге. Для расчёта «назад»: энергия предыдущего уровня = энергия данного уровня × 10.</div>
`},
glossary:[
['ecosystem','экосистема — сообщество плюс среда'],
['biotic component','биотический компонент — живые организмы'],
['abiotic component','абиотический компонент — неживая природа'],
['terrestrial ecosystem','наземная экосистема — тундра, тайга, пустыня'],
['freshwater ecosystem','пресноводная экосистема — озёра, реки, болота'],
['marine ecosystem','морская экосистема — солёная вода океанов'],
['technoecosystem','техноэкосистема — город и промышленность как экосистема'],
['agroecosystem','агроэкосистема — поля, фермы, сады'],
['ecological footprint','экологический след — нагрузка человека на среду'],
['trophic level','трофический уровень — звено в цепи питания'],
['food chain','пищевая цепь — линейная последовательность питания'],
['food web','пищевая сеть — переплетение цепей питания'],
['herbivore','травоядное животное'],
['carnivore','хищник — питается мясом'],
['omnivore','всеядное животное'],
['producer','продуцент — создаёт органику'],
['ecological pyramid','экологическая пирамида — график по уровням питания'],
['pyramid of biomass','пирамида биомассы — масса живого на уровнях'],
['pyramid of productivity','пирамида продуктивности — поток энергии'],
['pyramid of numbers','пирамида чисел — численность особей по уровням'],
['10% rule','правило 10% — на следующий уровень переходит ~10% энергии'],
['estuary','эстуарий — смесь речной и морской воды'],
['erosion','эрозия — разрушение почвы ветром и водой'],
['monoculture','монокультура — одна культура на поле'],
['shifting cultivation','подсечно-огневое земледелие — смена участков полей'],
['genetic diversity','генетическое разнообразие внутри вида']
],
practice:[
{q:{ru:'Сопоставьте: 1) food chain, 2) food web, 3) biomass pyramid, 4) pyramid of productivity, 5) pyramid of numbers. A) показывает число организмов на каждом уровне; B) линейный путь питания от базового вида до верхнего консумента; C) показывает производство/оборот биомассы на уровне; D) сеть связей «кто что ест»; E) показывает массу живого на каждом уровне.'},
 a:{ru:'1-B; 2-D; 3-E; 4-C; 5-A.'}},
{q:{ru:'Составьте пищевую цепь пруда из: водоросли, окунь, карась, бактерии, дафния, цапля. Назовите роли.'},
 a:{ru:'Водоросли (producer) → дафния (herbivore, consumer 1) → карась (consumer 2) → окунь (consumer 3) → цапля (top consumer). Бактерии — decomposers, разлагают остатки на всех уровнях.'}},
{q:{ru:'Орлы получили за год 1 200 кДж энергии с пищей. Сколько энергии содержалось в уровне змей и в продуцентах, если цепь: трава → кузнечик → лягушка → змея → орёл (правило 10%)?'},
 a:{ru:'Змеи (уровень 4): 1 200 × 10 = 12 000 кДж. Лягушки (3): 120 000 кДж. Кузнечики (2): 1 200 000 кДж. Трава (1): 12 000 000 кДж. На каждый шаг вниз умножаем на 10.'}},
{q:{ru:'Чем отличается ecosystem от agroecosystem? Назовите три признака.'},
 a:{ru:'Агроэкосистема управляется человеком, зависит от внешних вложений энергии и удобрений и содержит меньше видов (уязвима к вредителям), а естественная экосистема саморегулируется и имеет высокое видовое разнообразие.'}},
{q:{ru:'Классифицируйте: озеро, город-мегаполис, поле пшеницы, тундра, океанический желоб, болото.'},
 a:{ru:'Озеро — freshwater; мегаполис — technoecosystem; поле пшеницы — agroecosystem; тундра — terrestrial; океанический желоб — marine; болото — freshwater (wetland).'}},
{q:{ru:'Почему пирамида продуктивности информативнее пирамиды биомассы?'},
 a:{ru:'Биомасса показывает «снимок» на момент времени (мало биомассы может быстро обновляться, как у фитопланктона), а продуктивность показывает скорость производства и поток энергии, поэтому даёт верную картину.'}}
],
quiz:[
{q:{ru:'Ecosystem is best defined as:'},options:[{ru:'population only'},{ru:'community plus its environment'},{ru:'the sum of all biospheres'},{ru:'only living organisms'}],answer:1,solution:{ru:'Ecosystem = community + environment.'}},
{q:{ru:'A graphic showing the number of organisms at each trophic level:'},options:[{ru:'pyramid of biomass'},{ru:'pyramid of productivity'},{ru:'pyramid of numbers'},{ru:'food web'}],answer:2,solution:{ru:'Pyramid of numbers (Elton, 1927).'}},
{q:{ru:'Which ecosystem is characterized by large ecological footprint and advanced technology?'},options:[{ru:'marine'},{ru:'technoecosystem'},{ru:'freshwater'},{ru:'terrestrial'}],answer:1,solution:{ru:'Это определение technoecosystem.'}},
{q:{ru:'Какая часть энергии обычно переходит на следующий трофический уровень?'},options:[{ru:'about 90%'},{ru:'about 50%'},{ru:'about 10%'},{ru:'about 1%'}],answer:2,solution:{ru:'Правило Линдемана: около 10%.'}},
{q:{ru:'Which of these is an example of a freshwater ecosystem?'},options:[{ru:'open ocean'},{ru:'coral reef'},{ru:'wetland'},{ru:'desert'}],answer:2,solution:{ru:'Wetlands, bogs, lakes, rivers — пресноводные.'}},
{q:{ru:'Food web — это:'},options:[{ru:'one linear chain'},{ru:'network of feeding connections in a community'},{ru:'list of decomposers'},{ru:'a type of biome'}],answer:1,solution:{ru:'Food web — сеть пищевых связей, а linear chain — food chain.'}},
{q:{ru:'Agroecosystems typically have:'},options:[{ru:'higher biodiversity than natural ones'},{ru:'no need for external energy'},{ru:'simpler biodiversity and external inputs'},{ru:'no human management'}],answer:2,solution:{ru:'Упрощённое разнообразие и внешние вложения (удобрения, вода).'}},
{q:{ru:'Eugene Odum is known as:'},options:[{ru:'the father of modern ecology'},{ru:'the author of the biosphere concept'},{ru:'the author of the Law of Tolerance'},{ru:'the discoverer of greenhouse effect'}],answer:0,solution:{ru:'Юджин Одум — «отец современной экологии». Биосфера — Вернадский, толерантность — Шелфорд, парниковый эффект — Фурье.'}},
{q:{ru:'Animals that eat both plants and animals:'},options:[{ru:'herbivores'},{ru:'carnivores'},{ru:'omnivores'},{ru:'decomposers'}],answer:2,solution:{ru:'Omnivores — всеядные.'}}
]
});
