addLevels('hm','l06',{
short:String.raw`<h3>Linear transformation and matrix</h3>
<ul>
<li><b>Linear transformation</b> \(T:\mathbb R^n\to\mathbb R^m\) satisfies additivity \(T(\vec u+\vec v)=T(\vec u)+T(\vec v)\) and homogeneity \(T(c\vec u)=cT(\vec u)\).</li>
<li>Consequence: \(T(\vec 0)=\vec 0\).</li>
<li>The <b>standard matrix</b> \(A\) of a linear transformation is built column by column from the images of the basis vectors: \[A=\big[\,T(\vec e_1)\ \ T(\vec e_2)\ \dots\ T(\vec e_n)\,\big].\]</li>
<li>Any linear map is written as \(T(\vec v)=A\vec v\).</li>
</ul>

<h3>Geometric transformations</h3>
<ul>
<li><b>Rotation</b> counterclockwise by an angle \(\theta\): \[R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.\]</li>
<li><b>Reflection</b> with respect to the \(x\)-axis: \[M_x=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.\]</li>
<li><b>Composition</b> of transformations \(T_2\circ T_1\) corresponds to the product of matrices \(A_2A_1\) (order from right to left, \(A_2A_1 \ne A_1A_2\)).</li>
</ul>

<h3>Eigenvectors and eigenvalues</h3>
<ul>
<li><b>Eigenvector</b> \(\vec v \neq \vec 0\) and <b>eigenvalue</b> \(\lambda\) are related by the equality: \[A\vec v=\lambda\vec v.\]</li>
<li><b>Search:</b> find \(\lambda\) from the characteristic equation \(\det(A-\lambda I)=0\), then for each \(\lambda\) solve the homogeneous system \((A-\lambda I)\vec v=\vec 0\).</li>
<li><b>Eigenspace</b> — a line made of the nonzero vectors of a given \(\lambda\) together with \(\vec 0\).</li>
</ul>

<h3>Diagonalization and powers</h3>
<ul>
<li><b>Diagonalization:</b> if a matrix \(A\) of size \(n\times n\) has \(n\) linearly independent eigenvectors, then \(A=PDP^{-1}\), where \(P\) is formed from the eigenvectors and \(D\) contains the eigenvalues on the diagonal.</li>
<li><b>Fast powers:</b> \(A^k=PD^kP^{-1}\), where \(D^k\) is raised element by element.</li>
</ul>`,
simple:String.raw`<h2><span class="k">1</span>What a linear transformation is</h2>
<p>Imagine a plane with a coordinate grid. You take this grid and deform it somehow: you rotate it, stretch it, or reflect it in a mirror. But you do it according to two strict rules:</p>
<ol>
<li>The origin of coordinates \((0,0)\) must stay in place.</li>
<li>All lines remain straight, and the grid does not bend or tear.</li>
</ol>
<p>Such a correct deformation is called a <b>linear transformation</b>.</p>
<div class="box tip"><span class="t">In plain terms</span>Imagine a rubber mat on a table. If you fix one corner and pull evenly on the corners in all directions, the lines stay straight — this is a linear transformation. But if you crumple it into a ball with your hands, the lines bend, and then it is no longer linear.</div>
<div class="box def"><span class="t">Definition</span>
A function \(T\) is linear if for any vectors and numbers the two properties hold:
<ol>
<li><b>Additivity:</b> \(T(\vec u+\vec v)=T(\vec u)+T(\vec v)\) — the result of the sum equals the sum of the results.</li>
<li><b>Homogeneity:</b> \(T(c\vec u)=cT(\vec u)\) — stretching a vector by \(c\) times stretches the result by the same factor.</li>
</ol></div>

<h2><span class="k">2</span>How to write a transformation as a formula</h2>
<p>In mathematics it is inconvenient to draw pictures every time. Fortunately, any linear transformation can be written as an ordinary matrix multiplied by a vector: \(T(\vec v)=A\vec v\).</p>
<p>How do you find this matrix? Very simply: it is enough to see where the standard basis vectors \(\vec e_1\) and \(\vec e_2\) (unit steps to the right and up) go. These new coordinates are simply written into the columns of the matrix \(A\).</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Let the unit step to the right \((1,0)\) go to \((3,-1)\), and the step up \(\vec e_2=(0,1)\) go to \((2,4)\).</p>
<ol>
<li>Write the vector \((3,-1)\) as the first column of the matrix.</li>
<li>Write the vector \((2,4)\) as the second column.</li>
<li>We get the matrix \(A=\begin{pmatrix}3&2\\-1&4\end{pmatrix}\).</li>
<li>To find where any vector goes, for example \((5,-2)\), multiply the matrix by this vector: \(A\binom{5}{-2}=\binom{3\cdot5+2\cdot(-2)}{-1\cdot5+4\cdot(-2)}=\binom{11}{-13}\).</li>
</ol>
<p>Answer: \((11,-13)\).</p></div>
<div class="box warn"><span class="t">Common mistake</span>People forget that if after the transformation the origin \((0,0)\) has shifted somewhere (for example, a constant shift was added), then such a transformation is <b>no longer linear</b>.</div>

<h2><span class="k">3</span>Geometric tricks: rotations and reflections</h2>
<p>Matrices make it easy to move figures on a plane.</p>
<h3>Rotation</h3>
<p>If you rotate the whole plane counterclockwise by an angle \(\theta\), the rotation matrix looks like this:</p>
\[R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}\]
<p>For example, a rotation by \(90^\circ\) turns the vector \((1,0)\) up to \((0,1)\), and \((0,1)\) to the left to \((-1,0)\). The matrix becomes \(\begin{pmatrix}0&-1\\1&0\end{pmatrix}\).</p>
<h3>Reflection and scaling</h3>
<p>Reflection with respect to the \(x\)-axis simply changes the sign of the second coordinate \(y\):</p>
\[M_x=\begin{pmatrix}1&0\\0&-1\end{pmatrix}\]
<p>And scaling can stretch or compress along the axes in different ways (non-uniformly).</p>

<h2><span class="k">4</span>Composition of transformations</h2>
<p>What if you do one transformation, and then immediately a second one? This is called <b>composition</b>. In the language of matrices, it is ordinary multiplication of matrices.</p>
<div class="box warn"><span class="t">Common mistake</span>The order of actions is written <b>from right to left</b>. If \(T_1\) is applied first, and then \(T_2\), the resulting matrix is \(A_2A_1\). If the matrices are swapped, the result usually changes!</div>

<h2><span class="k">5</span>Eigenvectors: the ones that do not bend</h2>
<p>When we turn and stretch the plane, almost all vectors change their direction — they are simply carried away to the side. But every transformation always has special, "stubborn" directions. Vectors that lie along these directions do not change their angle — they only stretch or shrink.</p>
<div class="box def"><span class="t">Definition</span>
A nonzero vector \(\vec v\) is called an <b>eigenvector</b> of the matrix \(A\) if, when multiplied by the matrix, it is simply multiplied by a number \(\lambda\) (which is called the <b>eigenvalue</b>):
\[A\vec v=\lambda\vec v\]</div>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Given the matrix \(A=\begin{pmatrix}4&1\\2&3\end{pmatrix}\). Let's find its eigenvalues and eigenvectors.</p>
<ol>
<li>Write the characteristic equation \(\det(A-\lambda I)=0\), which gives the eigenvalues \(\lambda_1=5\) and \(\lambda_2=2\).</li>
<li>For \(\lambda=5\), substitute the value into the formula \((A-\lambda I)\vec v=\vec0\): we get the matrix \(\begin{pmatrix}-1&1\\0&0\end{pmatrix}\).</li>
<li>From the equation \(-v_1+v_2=0\) we find the eigenvector \(\vec v_1=\binom11\). Check: \(A\binom11=\binom55=5\binom11\) — everything is correct, the vector simply became 5 times longer.</li>
<li>Similarly for \(\lambda=2\) we find the vector \(\vec v_2=\binom1{-2}\).</li>
</ol>
<p>Answer: the eigenvectors are \(\binom11\) and \(\binom1{-2}\).</p></div>
<div class="box tip"><span class="t">In plain terms</span>Imagine a rod fixed at its center. If you spin it around its axis, the points on the axis do not move at all, and the points on the rod itself move only along the rod. The directions of these rods are the eigenvectors.</div>

<h2><span class="k">6</span>Diagonalization of a matrix</h2>
<p>If an \(n\times n\) matrix has exactly \(n\) independent eigenvectors, we can form from them the matrix \(P\), and from the eigenvalues the diagonal matrix \(D\).</p>
<p>Then the original matrix can be decomposed into a product: \(A=PDP^{-1}\). This is called <b>diagonalization</b>.</p>
<div class="box tip"><span class="t">In plain terms</span>This is like looking at a complex object from the most convenient angle, where all movements separate along independent axes, and it becomes very easy to work with.</div>

<h2><span class="k">7</span>Why eigenvectors are needed</h2>
<p>The main magic of diagonalization is raising matrices to large powers. If you need to compute \(A^{10}\), multiplying the matrix by itself 10 times is hard and slow.</p>
<p>But through the decomposition \(A=PDP^{-1}\), the power becomes \(A^{10}=PD^{10}P^{-1}\). And raising a diagonal matrix to the 10th power means just raising the numbers on its diagonal to the 10th power, which takes a second!</p>
<div class="box def"><span class="t">If you remember only one thing</span>A linear transformation is a matrix whose columns show the images of the unit steps. And eigenvectors are the special directions that do not change their angle under the transformation, only stretch. Knowing the eigenvectors allows you to decompose a matrix into its components and easily raise it to any power.</div>`
},'en');
