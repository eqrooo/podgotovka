addLevels('hm','l07',{
short:String.raw`
<h3>Dot Product</h3>
<ul>
<li><b>Definition</b>: \(\vec u\cdot\vec v=u_1v_1+u_2v_2+\dots+u_nv_n=\vec u^{\,T}\vec v\). The result is a number.</li>
<li>Geometrically: \(\vec u\cdot\vec v=|\vec u|\,|\vec v|\cos\theta\), hence \(\cos\theta=\dfrac{\vec u\cdot\vec v}{|\vec u|\,|\vec v|}\).</li>
<li><b>Perpendicularity</b>: \(\vec u\perp\vec v\iff\vec u\cdot\vec v=0\). A sign \(>0\) means the angle is acute, \(\lt0\) means it is obtuse.</li>
</ul>

<h3>Projections</h3>
<ul>
<li><b>Scalar</b>: \(\operatorname{comp}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{|\vec v|}\) (a number).</li>
<li><b>Vector</b>: \(\operatorname{proj}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\,\vec v\) (a vector).</li>
</ul>

<h3>Outer Product</h3>
<ul>
<li>\(\vec u\otimes\vec v=\vec u\,\vec v^{\,T}\): a column times a row; the result is an \(n\times m\) matrix with elements \(u_iv_j\).</li>
<li>The rank of such a matrix is 1 (for nonzero vectors).</li>
</ul>

<h3>Cross Product (only in \(\mathbb R^3\))</h3>
<ul>
<li>The result is a vector perpendicular to \(\vec u\) and \(\vec v\). Its length \(|\vec u\times\vec v|=|\vec u|\,|\vec v|\sin\theta\) is the area of the parallelogram; the area of the triangle is half of that.</li>
<li>\(\vec u\parallel\vec v\iff\vec u\times\vec v=\vec 0\). Anticommutativity: \(\vec v\times\vec u=-\vec u\times\vec v\).</li>
</ul>

<h3>Scalar Triple Product</h3>
<ul>
<li>\((\vec a,\vec b,\vec c)=\vec a\cdot(\vec b\times\vec c)=\det[\vec a\ \vec b\ \vec c]\) — a number.</li>
<li>The absolute value is the volume of the parallelepiped; the volume of a tetrahedron is \(\tfrac16\) of it.</li>
<li>Coplanar \(\iff(\vec a,\vec b,\vec c)=0\). The sign shows the orientation of the triple.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>Why we need "products" of vectors</h2>
<p>You already know how to add vectors and multiply them by a number. But often you need something else. You need to find out at what angle two vectors point relative to each other. You need to understand which part of one vector lies along another. You need to find the area or volume spanned by vectors. For these tasks there are four kinds of products. Each has its own question and its own type of answer.</p>

<h2><span class="k">2</span>Dot product: a number that tells you about the angle</h2>
<p>The dot (scalar, inner) product takes two vectors of the same length list and gives <b>one number</b>. First we multiply the numbers in the same positions, then add the results:</p>
\[\vec u\cdot\vec v=u_1v_1+u_2v_2+\dots+u_nv_n.\]
<div class="box tip"><span class="t">In plain words</span>Imagine you are pulling a sled by a rope at an angle. The sled moves forward only because of the part of the force that points along the road. The dot product measures exactly this alignment of directions. If the vectors point the same way, the result is large and positive. If they are perpendicular, the result is zero. If they point in opposite directions, the result is negative.</div>
<p>The geometric meaning is written with the formula:</p>
\[\vec u\cdot\vec v=|\vec u|\,|\vec v|\cos\theta.\]
<p>Here \(|\vec u|\) is the length of the vector, and \(\theta\) is the angle between the vectors. So the angle is found like this:</p>
\[\cos\theta=\frac{\vec u\cdot\vec v}{|\vec u|\,|\vec v|}.\]
<div class="box ex"><span class="t">Step-by-step example</span>
Let us find the angle between \(\vec a=(1,2,2)\) and \(\vec b=(3,0,4)\).
<ol><li>Dot product: \(1\cdot3+2\cdot0+2\cdot4=3+0+8=11\).</li><li>Length of \(\vec a\): \(\sqrt{1+4+4}=\sqrt9=3\).</li><li>Length of \(\vec b\): \(\sqrt{9+0+16}=\sqrt{25}=5\).</li><li>Divide: \(\cos\theta=\dfrac{11}{3\cdot5}=\dfrac{11}{15}\).</li><li>Using a calculator, \(\theta\approx42.8^\circ\).</li></ol></div>
<div class="box def"><span class="t">Main criterion</span>\(\vec u\perp\vec v\) if and only if \(\vec u\cdot\vec v=0\). The sign of the result also gives a hint: plus means an acute angle, minus means an obtuse angle.</div>

<h2><span class="k">3</span>Projections: which part of one vector lies along another</h2>
<p>Imagine the sun shining straight down. The shadow of the vector \(\vec u\) on the line of the vector \(\vec v\) is its projection. There are two variants: a number (the length of the shadow with a sign) and a vector (the shadow itself).</p>
<ul>
<li><b>Scalar projection</b>: \(\operatorname{comp}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{|\vec v|}\). This is a number.</li>
<li><b>Vector projection</b>: \(\operatorname{proj}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\,\vec v\). This is a vector pointing along \(\vec v\).</li>
</ul>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us find the projections of \(\vec u=(3,4)\) onto \(\vec v=(1,0)\).
<ol><li>Dot product: \(3\cdot1+4\cdot0=3\).</li><li>Length of \(\vec v\): \(|\vec v|=1\).</li><li>Scalar projection: \(\dfrac{3}{1}=3\).</li><li>Vector projection: \(\dfrac{3}{1\cdot1}\cdot(1,0)=(3,0)\).</li></ol>
<p>Answer: 3 and \((3,0)\). This is the horizontal part of the vector \((3,4)\).</p></div>
<div class="box tip"><span class="t">In plain words</span>The remainder \(\vec u-\operatorname{proj}_{\vec v}\vec u\) is always perpendicular to \(\vec v\). The projection is the "base", and the remainder is the "height" that forms a right angle.</div>

<h2><span class="k">4</span>Outer product: from two vectors we get a matrix</h2>
<p>The outer (tensor) product works differently. Here the vectors are not compared but combined into a table. We place the first vector as a column, the second as a row, and multiply:</p>
\[\vec u\otimes\vec v=\vec u\,\vec v^{\,T}.\]
<div class="box ex"><span class="t">Step-by-step example</span>
Let us multiply \((1,2,3)\) and \((4,5)\).
<ol><li>The first vector is a column of three numbers, the second is a row of two. The result will be a \(3\times2\) table.</li><li>Row 1 is obtained by multiplying the number 1 by \((4,5)\): \((4,5)\).</li><li>Row 2 is obtained by multiplying the number 2: \((8,10)\).</li><li>Row 3 is obtained by multiplying the number 3: \((12,15)\).</li></ol>
\[\begin{pmatrix}1\\2\\3\end{pmatrix}\begin{pmatrix}4&5\end{pmatrix}=\begin{pmatrix}4&5\\8&10\\12&15\end{pmatrix}\]</div>
<p>All rows of such a table are proportional to one row \(\vec v^{\,T}\). Therefore the rank, that is, the number of independent rows, equals one. Compare with the dot product: \(\vec u^{\,T}\vec v\) is a number, while \(\vec u\,\vec v^{\,T}\) is a matrix. The order of the factors makes all the difference.</p>
<div class="box warn"><span class="t">Common mistake</span>Confusing the two products: \(\vec u^{\,T}\vec v\) (a number) and \(\vec u\,\vec v^{\,T}\) (a matrix). The first is a row times a column, the second is a column times a row.</div>

<h2><span class="k">5</span>Cross product: a vector perpendicular to two others</h2>
<p>The cross product exists only in three-dimensional space. The result is again a vector, and it is perpendicular to both original vectors. Its length equals the area of the parallelogram built on these vectors.</p>
\[\vec u\times\vec v=\begin{vmatrix}\vec i&\vec j&\vec k\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix}=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1).\]
<div class="box tip"><span class="t">In plain words</span>Lay two pencils on a table in different directions. A vertical stick pushed into the table is perpendicular to both pencils. The cross product is a vector that is just as perpendicular to the two given vectors.</div>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us find \((2,-1,3)\times(1,4,0)\).
<ol><li>First coordinate: \((-1)\cdot0-3\cdot4=0-12=-12\).</li><li>Second coordinate: \(3\cdot1-2\cdot0=3-0=3\).</li><li>Third coordinate: \(2\cdot4-(-1)\cdot1=8+1=9\).</li><li>Check: \((-12,3,9)\cdot(2,-1,3)=-24-3+27=0\). The result is perpendicular to the first vector.</li></ol>
<p>The area of the parallelogram equals the length of the result: \(\sqrt{144+9+81}=\sqrt{234}=3\sqrt{26}\approx15.3\).</p></div>
<p>Two useful facts follow from the formula. If the vectors are parallel, the result is the zero vector. When the vectors are swapped, the result changes sign: \(\vec v\times\vec u=-\vec u\times\vec v\).</p>

<h2><span class="k">6</span>Scalar triple product: volume and coplanarity</h2>
<p>The scalar (triple) product takes three vectors. First we compute the cross product of two of them, then multiply the result by the third one scalarly. The answer is a number.</p>
\[(\vec a,\vec b,\vec c)=\vec a\cdot(\vec b\times\vec c)=\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}.\]
<div class="box ex"><span class="t">Step-by-step example</span>
Let us find the volume of the parallelepiped spanned by \(\vec u=(2,-1,3)\), \(\vec v=(1,4,0)\), \(\vec w=(1,0,1)\).
<ol><li>We write the determinant from the rows \(\vec u,\vec v,\vec w\).</li><li>Expand along the first row: \(2\cdot(4\cdot1-0\cdot0)-(-1)\cdot(1\cdot1-0\cdot1)+3\cdot(1\cdot0-4\cdot1)\).</li><li>Calculate: \(2\cdot4+1\cdot1+3\cdot(-4)=8+1-12=-3\).</li><li>The volume is the absolute value: \(|-3|=3\). The minus sign means the triple is left-handed.</li></ol></div>
<div class="box ex"><span class="t">Step-by-step example</span>
Do the vectors \((1,2,3)\), \((0,1,1)\), \((1,3,4)\) lie in one plane?
<ol><li>Compute the determinant: \(1\cdot(1\cdot4-1\cdot3)-2\cdot(0\cdot4-1\cdot1)+3\cdot(0\cdot3-1\cdot1)\).</li><li>We get \(1\cdot1-2\cdot(-1)+3\cdot(-1)=1+2-3=0\).</li><li>Zero means the vectors are coplanar. Check: \((1,2,3)+(0,1,1)=(1,3,4)\), so the third vector is the sum of the first two.</li></ol></div>
<div class="box tip"><span class="t">In plain words</span>Three vectors from one point define a box, that is, a parallelepiped. If all three lie in one plane, the box is flattened and its volume is zero. The volume of a pyramid with a triangular base (a tetrahedron) is six times smaller than the volume of such a box.</div>

<div class="box def"><span class="t">If you remember only one thing</span>The dot product gives a number and is related to the angle: zero means perpendicularity. The cross product gives a vector and is related to area. The scalar triple product gives a number and is related to volume and coplanarity.</div>
`
},'en');
