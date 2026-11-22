addLevels('hm','l02',{
short:String.raw`
<h3>Inverse matrix</h3>
<ul>
<li><b>Inverse matrix</b> \(A^{-1}\) of a square matrix \(A\) is the only matrix for which \(A\cdot A^{-1}=A^{-1}\cdot A=I\).</li>
<li><b>Existence condition</b>: the matrix is invertible (non-singular) \(\iff \det A\ne0\). If \(\det A=0\), there is no inverse.</li>
<li><b>Formula via the adjugate</b>: \(A^{-1}=\frac{1}{\det A}\operatorname{adj}(A)\), where \(\operatorname{adj}(A)=C^T\) is the transpose of the matrix of cofactors \(C_{ij}=(-1)^{i+j}M_{ij}\).</li>
<li><b>Formula for 2×2</b>: \(A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\).</li>
</ul>

<h3>Properties of the inverse matrix</h3>
<ul>
<li>Uniqueness: if an inverse exists, it is unique.</li>
<li>Involution: \((A^{-1})^{-1}=A\).</li>
<li>Product: \((AB)^{-1}=B^{-1}A^{-1}\).</li>
<li>Transpose: \((A^T)^{-1}=(A^{-1})^T\).</li>
<li>Multiplication by a number: \(\frac{1}{k}A^{-1}\) for \(kA\).</li>
<li>Determinant: \(\det(A^{-1})=\frac{1}{\det A}\).</li>
</ul>

<h3>Rank of a matrix</h3>
<ul>
<li><b>Rank</b> \(\operatorname{rank}A\) is the highest order of a non-zero minor of the matrix.</li>
<li>Connection with row echelon form: the rank equals the number of non-zero rows after elementary transformations.</li>
<li>For an \(n\times m\) matrix: \(\operatorname{rank}A\le\min(n,m)\).</li>
<li>For a square \(n\times n\) matrix: \(\operatorname{rank}A=n \iff \det A\ne0 \iff A\) is invertible.</li>
</ul>

<h3>Eigenvalues</h3>
<ul>
<li>An <b>eigenvalue</b> \(\lambda\) is found from the characteristic equation \(\det(A-\lambda I)=0\).</li>
<li>The <b>characteristic polynomial</b> \(P(\lambda)=\det(A-\lambda I)\) has degree \(n\).</li>
<li>Trace of a matrix: the sum of the eigenvalues equals the trace \(\lambda_1+\dots+\lambda_n=\operatorname{tr}A\).</li>
<li>Determinant: the product of the eigenvalues equals the determinant \(\lambda_1\cdots\lambda_n=\det A\).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>Inverse matrix: what it is and when it exists</h2>
<p>In ordinary arithmetic, every number except zero has an inverse. For example, the inverse of \(5\) is \(\frac{1}{5}\), because multiplying them gives one. The idea with matrices is similar, but only for square matrices.</p>
<div class="box def"><span class="t">Definition</span>
For a square matrix \(A\), the inverse matrix \(A^{-1}\) is the single matrix which, when multiplied by the original matrix on both sides, gives the identity matrix:
\[A\cdot A^{-1}=A^{-1}\cdot A=I.\]</div>
<p>But an inverse matrix does not always exist. To find out whether it can be found at all, we check the determinant.</p>
<div class="box def"><span class="t">Existence condition</span>
A matrix \(A\) is invertible (non-singular) if and only if its determinant is not equal to zero: \(\det A\ne0\). If \(\det A=0\), the matrix is called singular, and it has no inverse.</div>
<p>This is exactly why in the previous topic we studied determinants in such detail. They work like a gate pass: if the determinant is zero, there is no point in looking for the inverse matrix.</p>
<div class="box tip"><span class="t">In simple terms</span>Imagine the matrix is a door with a lock. The determinant shows whether the door is locked. If the determinant is zero, the lock is jammed completely, and you cannot open it (that is, find the inverse matrix). If the determinant is not zero, the door opens.</div>

<h2><span class="k">2</span>Adjugate matrix and the formula for the inverse</h2>
<p>How exactly do we find the inverse matrix when the determinant is not zero? For this we use the formula through the adjugate (adjoint) matrix.</p>
<p>First, we find all the algebraic cofactors for each element of the original matrix. They are calculated by the formula \(C_{ij}=(-1)^{i+j}M_{ij}\), where \(M_{ij}\) is the minor, that is, the determinant of a smaller size that remains when row \(i\) and column \(j\) are crossed out.</p>
<p>From all the cofactors we form a new matrix \(C\), and then <b>transpose</b> it, that is, swap its rows and columns. The result is the adjugate matrix \(\operatorname{adj}(A)=C^T\).</p>
<p>The final formula looks like this:</p>
\[A^{-1}=\frac{1}{\det A}\operatorname{adj}(A)\]
<div class="box warn"><span class="t">Common mistake</span>Forgetting to transpose the matrix of cofactors. The adjugate matrix is \(C^T\), not just \(C\). If you forget the transpose, the whole inverse matrix will be wrong.</div>

<h2><span class="k">3</span>Formula for 2×2 and algorithm for 3×3</h2>
<p>For a \(2\times2\) matrix there is a very convenient ready-made formula that lets you avoid calculating the minors by hand.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Given the matrix \(A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\).
<ol>
<li>Find the determinant \(\det A = ad-bc\). If it is zero, stop.</li>
<li>Swap the elements on the main diagonal (\(a\) and \(d\)).</li>
<li>Change the signs of the elements on the secondary diagonal (\(b\) and \(c\)).</li>
<li>Divide the entire resulting matrix by the determinant.</li>
</ol>
We get the formula:
\[A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\]</div>
<p>For a \(3\times3\) matrix, the algorithm is longer and consists of five steps.</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Algorithm for a \(3\times3\) matrix:
<ol>
<li>Calculate \(\det A\). If it is zero, there is no inverse, and the work ends.</li>
<li>Find all nine algebraic cofactors \(C_{ij}\) for each element.</li>
<li>Form the matrix \(C\) from them and transpose it, obtaining \(\operatorname{adj}A=C^T\).</li>
<li>Divide each element of the adjugate matrix by \(\det A\).</li>
<li>Check by multiplying the original matrix by the obtained inverse.</li>
</ol>
<p>Answer: the result is the ready inverse \(3\times3\) matrix.</p></div>
<div class="box tip"><span class="t">In simple terms</span>Finding the inverse of a \(3\times3\) matrix is routine work that requires attention. A single mistake in one sign will spoil the entire result, so always check yourself by multiplying \(AA^{-1}\).</div>

<h2><span class="k">4</span>Properties of the inverse matrix</h2>
<p>Inverse matrices have useful mathematical properties that help simplify complex expressions without calculations:</p>
<ul>
<li>If an inverse matrix exists, it is unique.</li>
<li>If you take the inverse of the inverse matrix, you get the original matrix back: \((A^{-1})^{-1}=A\).</li>
<li>When inverting a product of two matrices, the order is reversed: \((AB)^{-1}=B^{-1}A^{-1}\).</li>
<li>Inversion and transposition can be swapped: \((A^T)^{-1}=(A^{-1})^T\).</li>
<li>When a matrix is multiplied by a number, the inverse matrix is divided by that number: \((kA)^{-1}=\frac{1}{k}A^{-1}\) for \(k\ne0\).</li>
<li>The determinant of the inverse matrix equals the reciprocal of the determinant: \(\det(A^{-1})=\frac{1}{\det A}\).</li>
</ul>

<h2><span class="k">5</span>Rank of a matrix: through minors and through row echelon form</h2>
<p>Sometimes a matrix needs to be characterized not by its size, but by its "meaningful strength" — the number of truly independent rows or columns. For this purpose, the concept of rank is introduced.</p>
<div class="box def"><span class="t">Definition</span>
<b>Rank of a matrix</b> \(\operatorname{rank}A\) is the highest order of its non-zero minor. The matrix does not have to be square.</div>
<p>Finding minors of high order by hand is difficult, so in practice the rank is found more easily by reducing the matrix to row echelon form.</p>
<p>Elementary transformations do not change the rank:</p>
<ol>
<li>swap two rows;</li>
<li>multiply a row by a non-zero number;</li>
<li>add to one row another row multiplied by a number.</li>
</ol>
<p>After reducing the matrix to row echelon form, its rank equals the number of non-zero rows. Both definitions always give exactly the same result.</p>
<div class="box warn"><span class="t">Common mistake</span>Thinking that elementary transformations change the rank of a matrix. They do change the determinant (multiply it by a number or change its sign), but the rank remains completely unchanged.</div>

<h2><span class="k">6</span>Properties of rank and eigenvalues</h2>
<p>Rank has important properties:</p>
<ul>
<li>For a rectangular \(n\times m\) matrix, the rank does not exceed the smaller of the sizes: \(\operatorname{rank}A\le\min(n,m)\).</li>
<li>The rank is zero if and only if the matrix is zero: \(\operatorname{rank}A=0 \iff A=O\).</li>
<li>The rank of a matrix equals the rank of its transpose: \(\operatorname{rank}A=\operatorname{rank}A^T\).</li>
<li>For a square \(n\times n\) matrix, full rank (equal to \(n\)) means the same thing as a non-zero determinant, that is, invertibility of the matrix.</li>
</ul>
<p>Another most important concept of linear algebra is <b>eigenvalues</b>. These are the numbers \(\lambda\) which turn the matrix minus \(\lambda\) times the identity matrix into a singular one:</p>
\[\det(A-\lambda I)=0\]
<p>This equation is called the characteristic equation, and the polynomial \(P(\lambda)=\det(A-\lambda I)\) is the characteristic polynomial. The numbers \(\lambda\) show the stretching or compression coefficients along certain directions.</p>

<h2><span class="k">7</span>Quick check: trace and determinant</h2>
<p>Finding the roots of the characteristic polynomial for large matrices is difficult, but there is a way to check quickly. For this we use the trace of the matrix — the sum of the elements on the main diagonal \(\operatorname{tr}A\).</p>
<div class="box def"><span class="t">Properties of eigenvalues</span>
There is a connection between the eigenvalues, the trace and the determinant:
\[\lambda_1+\dots+\lambda_n=\operatorname{tr}A,\qquad \lambda_1\cdots\lambda_n=\det A.\]</div>
<p>The sum of all eigenvalues is always equal to the sum of the elements on the main diagonal, and their product is always equal to the determinant of the matrix. For \(2\times2\) matrices, the characteristic equation can be written immediately through the trace and the determinant:</p>
\[\lambda^2-\operatorname{tr}(A)\lambda+\det A=0\]
<div class="box def"><span class="t">If you remember only one thing</span>
An inverse matrix exists only when the determinant is non-zero, and it is calculated through the transpose of the matrix of algebraic cofactors. The rank of a matrix equals the number of non-zero rows in row echelon form, and eigenvalues are found from the equation \(\det(A-\lambda I)=0\) and checked through the trace and the determinant.</div>
`
},'en');
