addLevels('hm','l05',{
short:String.raw`
<h3>Vectors and geometry</h3>
<ul>
<li><b>Vector</b> — a matrix \(n\times1\) written as a column: \(\vec v=\begin{pmatrix}v_1\\v_2\\\vdots\\v_n\end{pmatrix}\).</li>
<li>Geometrically, a vector is a <b>directed segment</b> with a length and a direction.</li>
<li><b>Zero vector</b> \(\vec 0=(0,\dots,0)\): length 0.</li>
<li><b>Length of a vector</b>: \(|\vec v|=\sqrt{v_1^2+v_2^2+\dots+v_n^2}\).</li>
<li>Vector between points: \(\overrightarrow{AB}=B-A=(b_1-a_1,\dots,b_n-a_n)\).</li>
</ul>

<h3>Collinearity and orthogonality</h3>
<ul>
<li><b>Collinear</b> \(\vec u\parallel\vec v\): they lie on parallel lines, \(\vec u=k\vec v\). When \(k>0\) they are codirectional, when \(k<0\) they are opposite in direction.</li>
<li><b>Orthogonal</b> \(\vec u\perp\vec v\): they are perpendicular, and \(|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2\) holds.</li>
</ul>

<h3>Operations with vectors</h3>
<ul>
<li><b>Addition</b>: \(\vec u+\vec v=(u_1+v_1,\dots,u_n+v_n)\) (triangle or parallelogram rule).</li>
<li><b>Subtraction</b>: \(\vec u-\vec v=\vec u+(-\vec v)\).</li>
<li><b>Multiplication by a number</b>: \(k\vec v=(kv_1,\dots,kv_n)\).</li>
</ul>

<h3>Dependence and span</h3>
<ul>
<li><b>Linear combination</b>: \(c_1\vec v_1+\dots+c_k\vec v_k\).</li>
<li><b>Linear independence</b>: \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\) only when \(c_1=\dots=c_k=0\).</li>
<li><b>Rank theorem</b>: \(\operatorname{rank}V=k\iff\) independent, \(\operatorname{rank}V<k\iff\) dependent.</li>
<li><b>Linear span</b>: \(\operatorname{span}(\vec v_1,\dots,\vec v_k)=\{c_1\vec v_1+\dots+c_k\vec v_k:\ c_i\in\mathbb R\}\). Dimension of the span: \(\dim\operatorname{span}=\operatorname{rank}V\).</li>
</ul>

<h3>Basis and orientation</h3>
<ul>
<li><b>Basis</b> — a set of independent vectors that span the space (\(\mathbb R^n\)).</li>
<li><b>Orientation in \(\mathbb R^3\)</b>: determined by the sign of \(\det[\vec a\ \vec b\ \vec c]\). If \(>0\), it is a right-handed triple; if \(<0\), a left-handed triple; if \(=0\), the vectors are dependent.</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>A vector as a column matrix and a geometric arrow</h2>
<p>In mathematics and linear algebra, a vector may seem abstract, but in fact it is simple. The main idea of this topic: <b>a vector is a matrix of size \(n\times1\)</b>, that is, an ordinary column of numbers.</p>
\[\vec v=\begin{pmatrix}v_1\\v_2\\\vdots\\v_n\end{pmatrix}\]
<p>Since it is a matrix, all the rules for matrices from earlier topics (for example, addition, multiplication by a number, and rank) work here at no extra cost. But a vector also gets a clear geometric meaning.</p>
<p>Geometrically, a vector is a <b>directed segment</b>, simply put, an arrow. It has a length (magnitude) and a direction, but no strictly fixed position on a plane or in space. If you take two identical arrows in different parts of a sheet of paper, they represent the same <b>free</b> vector.</p>
<div class="box tip"><span class="t">In plain terms</span>Think of the arrow on a navigator in your phone. It does not matter where on the screen it is drawn, in the center or in a corner. What matters is where it points and what its scale is. A vector is the same kind of arrow of movement.</div>
<p>To connect geometry and algebra, imagine moving the start of any arrow to the origin \((0,0)\). Then its end lands exactly at the point with coordinates \((v_1,\dots,v_n)\). For example, the vector \(\vec v=(3,2)\) is an arrow that starts at \((0,0)\) and ends at the point \((3,2)\).</p>

<h2><span class="k">2</span>Length of a vector and distance between points</h2>
<p>Every vector has a length, which is called its magnitude. It is calculated in a very familiar way:</p>
\[|\vec v|=\sqrt{v_1^2+v_2^2+\dots+v_n^2}\]
<p>This is nothing other than the Pythagorean theorem written for \(n\) dimensions.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Let's find the length of the vector \(\vec v=(6,8)\).
<ol><li>Square each coordinate: \(6^2=36\), \(8^2=64\).</li><li>Add the squares: \(36+64=100\).</li><li>Take the square root of the sum: \(\sqrt{100}=10\).</li></ol>
Answer: the length of the vector is 10.</div>
<p>If you need to find the vector that connects two specific points \(A\) and \(B\), subtract the coordinates of the start from the coordinates of the end:</p>
\[\overrightarrow{AB}=B-A=(b_1-a_1,\dots,b_n-a_n)\]
<div class="box ex"><span class="t">Step-by-step example</span>
Given the points \(A=(1,2)\) and \(B=(4,-1)\). Let's find the vector \(\overrightarrow{AB}\) and its length.
<ol><li>Subtract the coordinates of the start from the coordinates of the end: \(\overrightarrow{AB}=(4-1, -1-2) = (3,-3)\).</li><li>Calculate the length of the resulting vector using the formula: \(|\overrightarrow{AB}|=\sqrt{3^2+(-3)^2}=\sqrt{9+9}=\sqrt{18}\).</li><li>Simplify the root: \(\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2\).</li></ol>
Answer: \(\overrightarrow{AB}=(3,-3)\), length \(3\sqrt2\).</div>

<h2><span class="k">3</span>Collinearity and orthogonality</h2>
<p>Vectors can be positioned in different ways relative to each other.</p>
<p>Two nonzero vectors are called <b>collinear</b> (\(\vec u\parallel\vec v\)) if they lie on the same line or on parallel lines. Algebraically, this means that one vector is obtained from the other by multiplying by a number: \(\vec u=k\vec v\) with \(k\ne0\). In practice, their coordinates are simply proportional.</p>
<ul>
<li>If the coefficient \(k>0\), the vectors are <b>codirectional</b> (\(\vec u\uparrow\uparrow\vec v\)).</li>
<li>If the coefficient \(k<0\), the vectors are <b>oppositely directed</b> (\(\vec u\uparrow\downarrow\vec v\)).</li>
</ul>
<p>Two vectors are called <b>orthogonal</b> (\(\vec u\perp\vec v\)) if they are perpendicular to each other (the angle between them is 90 degrees). For them, the classic Pythagorean theorem holds in vector form:</p>
\[|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2\]
<div class="box warn"><span class="t">Common mistake</span>Trying to apply the coordinate proportionality formula to orthogonality, or confusing collinearity with perpendicularity. Collinearity means parallelism (the coordinates are proportional), while orthogonality means perpendicularity.</div>

<h2><span class="k">4</span>Basic operations with vectors</h2>
<p>There are three basic operations you can perform with vectors:</p>
<ul>
<li><b>Addition:</b> the corresponding coordinates are added, \(\vec u+\vec v=(u_1+v_1,\dots,u_n+v_n)\). Geometrically, this works by the triangle rule (attach the end of one to the start of the other) or the parallelogram rule.</li>
<li><b>Subtraction:</b> \(\vec u-\vec v=\vec u+(-\vec v)\). If the vectors start from one point, the difference \(\vec u-\vec v\) connects their ends, pointing from the subtrahend to the minuend.</li>
<li><b>Multiplication by a number:</b> each coordinate is multiplied by the number \(k\): \(k\vec v=(kv_1,\dots,kv_n)\). The number changes the length of the vector and can flip it to the opposite direction.</li>
</ul>
<p>Important to remember: you can only add and subtract vectors of the <b>same dimension</b>. An expression like \((3,-2,1)+(1,2)\) has no meaning, because the dimensions are different.</p>

<h2><span class="k">5</span>Linear combination and linear dependence</h2>
<p>If you multiply several vectors by numbers and add them, the result is a <b>linear combination</b>: \(c_1\vec v_1+\dots+c_k\vec v_k\).</p>
<p>Vectors are called <b>linearly dependent</b> if you can choose such numbers \(c_1,\dots,c_k\) (not all equal to zero) that their linear combination gives the zero vector:</p>
\[c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\]
<p>If this equality is achieved only in one way, namely when all the coefficients are strictly equal to zero, then the vectors are called <b>linearly independent</b>.</p>
<div class="box tip"><span class="t">In plain terms</span>Think of vectors as building blocks. If one block can be obtained by just stretching and adding the others (so it adds no new direction), the system is redundant. That is linear dependence. If every block is unique and gives a new dimension, that is independence.</div>
<p>The geometric meaning is simple: two vectors are dependent if they are collinear (parallel); three vectors in three-dimensional space are dependent if they are coplanar (lie in one plane).</p>

<h2><span class="k">6</span>Linear span and checking with the rank</h2>
<p>All possible linear combinations of given vectors form their <b>linear span</b> (or span):</p>
\[\operatorname{span}(\vec v_1,\dots,\vec v_k)=\{c_1\vec v_1+\dots+c_k\vec v_k:\ c_i\in\mathbb R\}\]
<p>This is the set of all points you can reach by combining the original vectors in any proportions. The dimension of this span is always equal to the rank of the matrix formed from these vectors written as rows:</p>
\[\dim\operatorname{span}(\vec v_1,\dots,\vec v_k)=\operatorname{rank}V\]
<div class="box def"><span class="t">Rank theorem</span>
Write the vectors as rows of the matrix \(V\). Then if \(\operatorname{rank}V = k\), the vectors are linearly independent. If \(\operatorname{rank}V < k\), they are linearly dependent.</div>
<div class="box ex"><span class="t">Step-by-step example</span>
Let's check the vectors \(\vec v_1=(1,2,3)\), \(\vec v_2=(2,4,6)\), \(\vec v_3=(1,0,2)\) for linear dependence.
<ol><li>Form the matrix \(V\) by writing the vectors as rows.</li><li>Reduce the matrix to row echelon form and find the rank.</li><li>We get that the rank is 2.</li><li>Compare the rank with the number of vectors: \(2 < 3\).</li><li>Conclusion: the vectors are linearly dependent (here \(\vec v_2 = 2\vec v_1\)).</li></ol>
Answer: the vectors are dependent.</div>

<h2><span class="k">7</span>Basis and orientation in space</h2>
<p>A <b>basis</b> is a set of linearly independent vectors whose combinations generate the whole space. For example, in the space \(\mathbb R^3\), the standard basis consists of the unit vectors \(\vec i=(1,0,0)\), \(\vec j=(0,1,0)\), \(\vec k=(0,0,1)\). Any vector is expressed through them:</p>
\[\vec v=v_1\vec i+v_2\vec j+v_3\vec k\]
<p>The coefficients of the expansion \(v_1, v_2, v_3\) are the coordinates of the vector.</p>
<p>Another important property of a triple of independent vectors in \(\mathbb R^3\) is <b>orientation</b> (a right-handed or left-handed triple). It is determined by the sign of the determinant of the matrix formed from these vectors:</p>
<ul>
<li>If \(\det[\vec a\ \vec b\ \vec c] > 0\), the triple is called <b>right-handed</b>.</li>
<li>If \(\det[\vec a\ \vec b\ \vec c] < 0\), the triple is called <b>left-handed</b>.</li>
<li>If the determinant is zero, the vectors are dependent and no orientation exists.</li>
</ul>
<p>This difference is critically important in physics (for example, when calculating the Lorentz force) and in computer 3D graphics.</p>
<div class="box def"><span class="t">If you remember only one thing</span>
A vector is a column matrix and a geometric arrow with length \(|\vec v|=\sqrt{\sum v_i^2}\). The linear independence of vectors and their ability to span a space are checked through the rank of the matrix formed from their rows. And the orientation of three-dimensional space is determined by the sign of the determinant of the matrix made from three basis vectors.</div>
`
},'en');
