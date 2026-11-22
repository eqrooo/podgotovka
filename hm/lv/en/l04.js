addLevels('hm','l04',{
short:String.raw`
<h3>Matrix method</h3>
<ul>
<li><b>Matrix method</b>: solving the system \(AX=B\) with a square matrix with \(\det A\neq0\) by multiplying from the left by the inverse matrix: \(\[X=A^{-1}B\]\).</li>
<li>Multiplication is strictly from the left, because matrix multiplication is not commutative, and the size of \(B\) (a column) does not allow multiplying from the right.</li>
<li>If \(A^{-1}\) is already found, the solution requires only one multiplication of a matrix by a column.</li>
</ul>

<h3>Comparison of methods</h3>
<ul>
<li><b>Gaussian elimination</b> applies to any system (square or not, degenerate or not) and is chosen by default, since it also gives the rank.</li>
<li><b>Cramer's rule</b> works only for a square system with \(\det A\neq0\); it is convenient for small systems, but for large \(n\) it requires computing \(n+1\) determinants.</li>
<li><b>The matrix method</b> applies to a square system with \(\det A\neq0\) when we have one matrix \(A\) and many different columns \(B\), which allows computing \(A^{-1}\) once.</li>
</ul>

<h3>Module cheat sheet</h3>
<ul>
<li><b>L1</b>: Sizes, element-wise operations, "row by column" multiplication (\(AB\neq BA\), \((AB)^T=B^TA^T\)), determinants (2×2, Sarrus, Laplace, properties).</li>
<li><b>L2</b>: Inverse matrix \(A^{-1}=\frac1{\det A}C^T\), \((AB)^{-1}=B^{-1}A^{-1}\), rank, characteristic equation \(\det(A-\lambda I)=0\), relation of eigenvalues to the trace and the determinant.</li>
<li><b>L3</b>: Kronecker–Capelli theorem, Gaussian elimination with back substitution, Cramer's rule, LU decomposition.</li>
<li><b>L4</b>: Finding the solution by the matrix method \(X=A^{-1}B\).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>The matrix method for solving systems</h2>
<p>If you have a system of linear equations, it can be written in compact matrix form \(AX=B\). Here \(A\) is the square matrix of coefficients, whose determinant is not zero, \(X\) is the column of unknowns, and \(B\) is the column of constant terms.</p>
<p>To find the unknowns in such an equation, we act just as with ordinary equations, but taking into account the rules for matrices. We multiply both sides of the equation by the inverse matrix \(A^{-1}\).</p>
\[A^{-1}(AX)=A^{-1}B\ \Rightarrow\ (A^{-1}A)X=A^{-1}B\ \Rightarrow\ IX=A^{-1}B\ \Rightarrow\ \boxed{X=A^{-1}B}\]
<div class="box tip"><span class="t">In plain terms</span>Imagine a lock that opens with a specific key. The matrix \(A\) is the lock, and \(A^{-1}\) is the key. Multiplying the lock by the key gives an identity result (the door is open), and what remains on the table is only the column of answers \(X\).</div>
<p>If the inverse matrix \(A^{-1}\) has been found in advance, solving any system with the same matrix reduces to one quick multiplication of a matrix by a column.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Given the matrix \(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\), its inverse \(A^{-1}=\begin{pmatrix}4/3&-2/3&-1/3\\5/6&-1/6&-5/6\\-2/3&1/3&2/3\end{pmatrix}\), and the column of constant terms \(B=(6,9,3)^T\).</p>
<ol>
<li>Substitute the data into the formula \(X=A^{-1}B\).</li>
<li>Compute the first unknown \(x_1\): \(\tfrac43\cdot6-\tfrac23\cdot9-\tfrac13\cdot3 = 8-6-1 = 1\).</li>
<li>Compute the second unknown \(x_2\): \(\tfrac56\cdot6-\tfrac16\cdot9-\tfrac56\cdot3 = 5-1.5-2.5 = 1\).</li>
<li>Compute the third unknown \(x_3\): \(-\tfrac23\cdot6+\tfrac13\cdot9+\tfrac23\cdot3 = -4+3+2 = 1\).</li>
</ol>
<p>Answer: \((1, 1, 1)\). The same system can be solved in four different ways (Gaussian elimination, Cramer's rule, LU decomposition and the matrix method), and in every case the result is the same.</p></div>

<h2><span class="k">2</span>Why multiplication in the matrix method is strictly from the left</h2>
<p>When deriving the formula, it is important to multiply both sides of \(AX=B\) from the left. If you multiply from the right, nothing works out.</p>
<div class="box warn"><span class="t">Common mistake</span>Writing the solution as \(X=BA^{-1}\). This is a gross error. The matrix sizes would not even match for multiplication (since \(B\) is an \(n\times1\) column), and matrix multiplication is not commutative.</div>

<h2><span class="k">3</span>Comparing methods for solving systems</h2>
<p>We have several methods for working with systems of equations at our disposal. Each one is good in its own situation.</p>
<div class="tw"><table><thead><tr><th>Method</th><th>When it works</th><th>When to choose it</th></tr></thead><tbody>
<tr><td>Gauss</td><td>any system: square or not, degenerate or not</td><td>choose by default, since it is universal and also shows the rank</td></tr>
<tr><td>Cramer</td><td>only a square system where \(\det A\neq0\)</td><td>for small systems or if you need to find only one unknown; for large \(n\) it requires computing \(n+1\) determinants, which is very slow</td></tr>
<tr><td>Matrix</td><td>only a square system where \(\det A\neq0\)</td><td>when there is one matrix \(A\) and many columns of constant terms \(B\): in this case \(A^{-1}\) or the LU decomposition is computed once</td></tr>
</tbody></table></div>

<h2><span class="k">4</span>A brief cheat sheet for the whole module</h2>
<p>Let us recall the main milestones of the matrix module:</p>
<ul>
<li><b>Lecture 1</b>: Matrix sizes, addition, subtraction, "row by column" multiplication, the non-commutativity \(AB\ne BA\), transposition \((AB)^T=B^TA^T\), as well as computing determinants of orders 2 and 3 (Sarrus's rule, Laplace expansion) and their properties (\(\det kA=k^n\det A\), \(\det AB=\det A\det B\)).</li>
<li><b>Lecture 2</b>: Finding the inverse matrix through cofactors \(A^{-1}=\frac1{\det A}C^T\), the property of the inverse of a product \((AB)^{-1}=B^{-1}A^{-1}\), defining the rank through minors and echelon form, the characteristic equation \(\det(A-\lambda I)=0\), and the relation of the sum and product of eigenvalues to the trace and the determinant.</li>
<li><b>Lecture 3</b>: Analysing systems by the Kronecker–Capelli theorem, solving by Gaussian elimination with back substitution, Cramer's rule via determinants \(x_i=\det A_i/\det A\), and factorization of a matrix \(A=LU\).</li>
<li><b>Lecture 4</b>: Solving systems by the matrix method using the inverse matrix \(X=A^{-1}B\).</li>
</ul>
<p>In the "Practice" tab, all 12 problems of the trial test with ready answers are waiting for you. Solve them first on paper, and then check your results.</p>
<div class="box def"><span class="t">If you remember only one thing</span>The matrix method allows solving systems of linear equations in one multiplication of the inverse matrix by the column of constant terms, provided the determinant of the matrix is not zero. The choice of a specific method depends on the size of the system and the number of different right-hand sides.</div>
`
},'en');
