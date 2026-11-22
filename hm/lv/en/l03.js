addLevels('hm','l03',{
short:String.raw`<h3>Matrix Form and Outcomes</h3>
<ul>
<li>A system of equations is written as <b>\(AX=B\)</b>, where \(A\) is the coefficient matrix, \(X\) is the column of unknowns, and \(B\) is the column of constant terms.</li>
<li>The <b>augmented matrix</b> \([A\mid B]\) combines the coefficients and the right-hand sides.</li>
<li>Possible outcomes: a unique solution, no solutions (inconsistent), or infinitely many solutions.</li>
</ul>

<h3>Kronecker–Capelli Theorem</h3>
<ul>
<li>The system has at least one solution \(\iff \operatorname{rank}A=\operatorname{rank}[A\mid B]\).</li>
<li>If \(\operatorname{rank}A=n\) (the number of unknowns), the solution is unique.</li>
<li>If \(\operatorname{rank}A\lt n\), there are infinitely many solutions with \(n-\operatorname{rank}A\) free parameters.</li>
<li>If the ranks are not equal, there are no solutions.</li>
</ul>

<h3>Gaussian Elimination and Cramer's Rule</h3>
<ul>
<li><b>Gaussian elimination</b>: reducing the augmented matrix to echelon form using elementary row operations, followed by back substitution from bottom to top.</li>
<li><b>Cramer's rule</b>: applicable only to square systems with \(\det A\ne0\), computed as \(x_i=\frac{\det A_i}{\det A}\).</li>
</ul>

<h3>LU Decomposition</h3>
<ul>
<li>Representation of a matrix as <b>\(A=LU\)</b>, where \(L\) is a lower triangular matrix with ones on the diagonal, and \(U\) is an upper triangular matrix.</li>
<li>The multipliers in \(L\) correspond to the coefficients used to eliminate rows.</li>
<li>Solving the system splits into two simple steps: forward substitution \(LY=B\) and back substitution \(UX=Y\).</li>
</ul>`,
simple:String.raw`<h2><span class="k">1</span>Matrix form of a system</h2>
<p>When you have many equations and unknowns, writing out all the letters and plus signs is inconvenient. So linear equations are written more compactly, using matrices. A system of \(m\) equations with \(n\) unknowns is written as:</p>
\[\begin{cases}a_{11}x_1+a_{12}x_2+\dots+a_{1n}x_n=b_1\\ \quad\vdots\\ a_{m1}x_1+a_{m2}x_2+\dots+a_{mn}x_n=b_m\end{cases}\qquad\Longleftrightarrow\qquad AX=B.\]
<p>Here \(A\) is the table of coefficients of size \(m\times n\), \(X\) is the column of unknowns that we need to find, and \(B\) is the column of constant terms (right-hand sides). If we take the coefficients from the matrix \(A\) and attach the column \(B\) to the right, we get the <b>augmented matrix</b> \([A\mid B]\). It is with this that all the calculations are easiest to perform.</p>
<div class="box tip"><span class="t">In plain words</span>Imagine a table of product prices and total receipts. The matrix \(A\) shows how much of each product you bought, \(X\) is the unknown prices of the products, and \(B\) is the total amounts on the receipts. The notation \(AX=B\) simply compresses a huge system into one compact equation.</div>

<h2><span class="k">2</span>Three possible outcomes</h2>
<p>When you try to solve a system of equations, exactly three situations are possible:</p>
<ul>
<li><b>A unique solution</b>: exactly one set of numbers fits all the equations. Graphically, for two variables, this means the lines intersect at one point.</li>
<li><b>No solutions</b> (the system is inconsistent): the equations contradict each other. Graphically, these are parallel lines that never meet.</li>
<li><b>Infinitely many solutions</b>: there are fewer equations than needed, or they duplicate each other. Graphically, the lines coincide completely.</li>
</ul>
<p>If there are more than two unknowns, you can no longer draw a graph. That is why mathematicians came up with strict algebraic rules.</p>

<h2><span class="k">3</span>Kronecker–Capelli theorem</h2>
<p>Before spending time searching for roots, it is useful to know whether they exist at all. The Kronecker–Capelli theorem helps with this.</p>
<div class="box def"><span class="t">Consistency criterion</span>
The system has at least one solution \(\iff \operatorname{rank}A=\operatorname{rank}[A\mid B]\).</div>
<p>The rank of a matrix is the size of the largest nonsingular submatrix (or the number of nonzero rows after reduction to echelon form). If the rank of the original matrix \(A\) equals the rank of the augmented matrix \([A\mid B]\), then solutions exist. Let \(n\) be the number of unknowns:</p>
<ul>
<li>If \(\operatorname{rank}A=n\), there is exactly one solution.</li>
<li>If \(\operatorname{rank}A\lt n\), there are infinitely many solutions, and the number of free parameters equals \(n-\operatorname{rank}A\).</li>
</ul>
<p>If the rank of \(A\) is not equal to the rank of the augmented matrix, there are no solutions.</p>
<div class="box warn"><span class="t">Common mistake</span>Do not confuse the cases where the ranks are not equal (then there are no solutions at all) and where the ranks are equal but smaller than \(n\) (then there are infinitely many solutions).</div>

<h2><span class="k">4</span>Gaussian elimination</h2>
<p>This is a universal way to solve any system. The idea is to use elementary row operations (swapping rows, multiplying a row by a nonzero number, adding one row to another) to reduce the augmented matrix \([A\mid B]\) to echelon form. After that comes the <b>back substitution</b>: finding the unknowns from bottom to top.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
<p>Consider a system with the matrix \(A=\begin{pmatrix}1&2&3\\0&4&5\\1&0&2\end{pmatrix}\) and \(B=(6,9,3)^T\).</p>
<ol>
<li>We write the augmented matrix and, using the operation \(R_3-R_1\), get a zero in the lower left corner.</li>
<li>With the second operation \(R_3+\frac12R_2\), we obtain the triangular echelon form of the matrix.</li>
<li>We perform the back substitution from bottom to top: from the last equation we find \(z=1\).</li>
<li>Substituting \(z\) into the second equation, we find \(y=1\).</li>
<li>Substituting \(y\) and \(z\) into the first equation, we find \(x=1\).</li>
</ol>
<p>Answer: \((1,1,1)\). The check shows that \(\operatorname{rank}A=3=n\) and \(\det A=6\ne0\).</p>
</div>

<h2><span class="k">5</span>Cramer's rule</h2>
<p>If your system is square (the number of equations is exactly equal to the number of unknowns) and the determinant of the matrix \(A\) is not zero, you can use Cramer's rule.</p>
<div class="box def"><span class="t">When you can use it</span>Only for a square system (\(n\) equations, \(n\) unknowns) with \(\det A\ne0\).</div>
<p>The formula for each unknown looks like this:</p>
\[x_i=\frac{\det A_i}{\det A},\]
<p>where \(A_i\) is the same matrix \(A\), but with its \(i\)-th column replaced by the column of constant terms \(B\).</p>
<div class="box tip"><span class="t">In plain words</span>Cramer's rule is like finding a ratio through determinants. You compute the main determinant of the whole system, then replace one column with the answers and compute the determinant again. Dividing one by the other gives x or y. It is convenient if you need to find only one variable, but for large systems it takes too long.</div>

<h2><span class="k">6</span>LU decomposition</h2>
<p>Imagine a problem: you need to solve the system \(AX=B\) many times, but the matrix \(A\) is always the same, while the column \(B\) keeps changing. Doing Gaussian elimination from scratch each time would be a waste of time. Instead, the matrix \(A\) is factored once into a product of two triangular matrices: \(A=LU\).</p>
<div class="box def"><span class="t">Idea</span>
\(A=LU\), where \(L\) is a lower triangular matrix with ones on the diagonal, and \(U\) is an upper triangular matrix obtained during the forward pass of Gaussian elimination.</div>
<p>The elimination multipliers are recorded in the matrix \(L\). After such a decomposition, solving any system with the same \(A\) reduces to two very simple steps:</p>
<ol>
<li><b>Forward substitution</b> \(LY=B\) from top to bottom, to find the intermediate column \(Y\).</li>
<li><b>Back substitution</b> \(UX=Y\) from bottom to top, to find the required column of unknowns \(X\).</li>
</ol>
<div class="box warn"><span class="t">Common mistake</span>Do not forget that in the Doolittle convention the diagonal of the matrix \(L\) always contains ones, and the elimination multipliers are written strictly below the diagonal.</div>

<div class="box def"><span class="t">If you remember only one thing</span>Systems of linear equations are easiest to analyze through matrix ranks using the Kronecker–Capelli theorem, and to solve with the universal Gaussian elimination method. Cramer's rule suits only small square systems with a nonzero determinant, while LU decomposition saves time when a system with the same coefficient matrix is solved repeatedly.</div>`
},'en');
