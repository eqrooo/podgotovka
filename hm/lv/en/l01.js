addLevels('hm','l01',{
short:String.raw`
<h3>Matrices and Sizes</h3>
<ul>
<li><b>Matrix</b> — a rectangular table of numbers \(A_{n\times m}=[a_{ij}]\) with \(n\) rows and \(m\) columns.</li>
<li>The element \(a_{ij}\) is in row \(i\) and column \(j\).</li>
<li>Equality: the same size and equal elements \(a_{ij}=b_{ij}\).</li>
</ul>

<h3>Special Types</h3>
<ul>
<li><b>Square</b>: the number of rows equals the number of columns (\(n=m\)).</li>
<li><b>Triangular</b>: upper (zeros below the main diagonal) and lower (zeros above it).</li>
<li><b>Diagonal</b>: square, with zeros outside the main diagonal.</li>
<li><b>Identity \(I\)</b>: diagonal with ones on the diagonal.</li>
<li><b>Zero \(O\)</b>: all elements are equal to zero.</li>
</ul>

<h3>Operations with Matrices</h3>
<ul>
<li><b>Addition and subtraction</b>: only for matrices of the same size, element by element \(c_{ij}=a_{ij}\pm b_{ij}\).</li>
<li><b>Multiplication by a number</b>: each element is multiplied by \(k\).</li>
<li><b>Matrix multiplication</b>: possible if the number of columns of the first matrix equals the number of rows of the second: \((n\times k)\cdot(k\times m)=(n\times m)\). In general, \(AB\ne BA\).</li>
<li><b>Power</b>: only for square matrices.</li>
</ul>

<h3>Transpose</h3>
<ul>
<li><b>Transpose</b> \(A^T\): rows and columns are swapped, size \(m\times n\).</li>
<li>Properties: \((A^T)^T=A\), \((AB)^T=B^T A^T\).</li>
<li><b>Symmetric</b>: \(A^T=A\). <b>Skew-symmetric</b>: \(A^T=-A\) (zeros on the diagonal).</li>
</ul>

<h3>Determinants</h3>
<ul>
<li><b>Determinant</b> \(\det A\) — a single number for a square matrix. If \(\det A=0\), the matrix is singular.</li>
<li>Order 2: \(a_{11}a_{22}-a_{12}a_{21}\).</li>
<li>Order 3: Sarrus rule or the triangle rule (6 terms).</li>
<li><b>Laplace expansion</b>: expansion along a row or column using cofactors \(C_{ij}=(-1)^{i+j}M_{ij}\).</li>
<li>Properties: swapping two rows changes the sign, \(\det(kA)=k^n\det A\), \(\det(AB)=\det A\cdot\det B\).</li>
</ul>
`,
simple:String.raw`
<h2><span class="k">1</span>What a matrix is and how its size works</h2>
<p>Imagine an ordinary table of numbers with rows and columns. In mathematics, such a rectangular table is called a <b>matrix</b>. To write it in general form, the numbers are placed in round or square brackets.</p>
\[A_{n\times m}=[a_{ij}]=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1m}\\a_{21}&a_{22}&\dots&a_{2m}\\\vdots&\vdots&\ddots&\vdots\\a_{n1}&a_{n2}&\dots&a_{nm}\end{pmatrix}\]
<p>Every matrix has a <b>size</b>. It is written as \(n\times m\), where the first letter \(n\) is the number of rows and the second letter \(m\) is the number of columns. The order is strict: rows first, then columns. If a matrix has 2 rows and 3 columns, its size is \(2\times3\).</p>
<p>Each number in the table is called an element and is denoted by a letter with two indices, for example \(a_{ij}\). The first index \(i\) shows the row number, and the second index \(j\) shows the column number. If you see the element \(b_{13}\), it means that it is in the first row and the third column.</p>
<div class="box tip"><span class="t">In plain terms</span>Think of a class timetable or a sports results table. Rows run horizontally, like the rows of desks in a classroom, and columns run vertically, like the columns in a notebook. At the crossing of a row and a column there is a specific number.</div>
<div class="box ex"><span class="t">Step-by-step example</span>
Consider the matrix \(B=\begin{pmatrix}2&0&-5\\1&8&3\end{pmatrix}\).
<ol><li>Count the rows: there are exactly 2.</li><li>Count the columns: there are exactly 3.</li><li>Determine the size: \(2\times3\).</li><li>Find the element \(b_{13}\): look at the first row and the third column, you get \(-5\).</li><li>Find the element \(b_{22}\): look at the second row and the second column, you get \(8\).</li></ol></div>
<p>Two matrices are equal if and only if their sizes match exactly and all corresponding elements are equal.</p>

<h2><span class="k">2</span>Diagonals and special types of matrices</h2>
<p>Any square table has diagonals:</p>
<ul>
<li><b>The main diagonal</b> runs from the top left corner to the bottom right corner. It contains the elements whose row number equals their column number (\(a_{ii}\)).</li>
<li><b>The secondary diagonal</b> runs from the top right corner to the bottom left corner.</li>
</ul>
<p>Depending on its shape and the position of zeros, a matrix is divided into several types:</p>
<div class="tw"><table><thead><tr><th>Type</th><th>Condition</th></tr></thead><tbody>
<tr><td>Square</td><td>the number of rows equals the number of columns (\(n=m\))</td></tr>
<tr><td>Row matrix</td><td>consists of exactly one row (\(1\times m\))</td></tr>
<tr><td>Column matrix</td><td>consists of exactly one column (\(n\times 1\))</td></tr>
<tr><td>Upper triangular</td><td>all elements below the main diagonal are zero</td></tr>
<tr><td>Lower triangular</td><td>all elements above the main diagonal are zero</td></tr>
<tr><td>Diagonal</td><td>a square matrix in which all elements outside the main diagonal are zero</td></tr>
<tr><td>Identity \(I\)</td><td>a diagonal matrix in which the main diagonal contains only ones</td></tr>
<tr><td>Zero \(O\)</td><td>a matrix in which absolutely all elements are zero</td></tr>
</tbody></table></div>
\[I_3=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}\]
<div class="box warn"><span class="t">Common mistake</span>Thinking that an identity matrix can be rectangular. It is always square: \(2\times2\), \(3\times3\), and so on. If a matrix is both upper triangular and lower triangular, it is necessarily diagonal.</div>

<h2><span class="k">3</span>Addition, subtraction and multiplication by a number</h2>
<p>You can add and subtract only matrices that have <b>exactly the same size</b>. The operation itself is very simple: you add or subtract the numbers that stand in the same positions.</p>
\[C=A\pm B,\qquad c_{ij}=a_{ij}\pm b_{ij}.\]
<div class="box ex"><span class="t">Step-by-step example</span>
Let us add two matrices of size \(2\times2\).
<ol><li>Check the sizes: the first is \(2\times2\), the second is \(2\times2\). The sizes are equal, so addition is possible.</li><li>Add the top left elements: \(5+0=5\).</li><li>Add the top right elements: \(-2+4=2\).</li><li>Add the bottom left elements: \(3+(-1)=2\).</li><li>Add the bottom right elements: \(1+6=7\).</li></ol>
Result:
\[\begin{pmatrix}5&-2\\3&1\end{pmatrix}+\begin{pmatrix}0&4\\-1&6\end{pmatrix}=\begin{pmatrix}5&2\\2&7\end{pmatrix}\]</div>
<p><b>Multiplying a matrix by a number</b> \(k\) is just as intuitive: you multiply every number inside the matrix by this number \(k\).</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us multiply a matrix by 3.
<ol><li>Take the element in the first row and first column: \(1\cdot3=3\).</li><li>Top right element: \(-3\cdot3=-9\).</li><li>Bottom left element: \(2\cdot3=6\).</li><li>Bottom right element: \(0\cdot3=0\).</li></ol>
Result:
\[3\begin{pmatrix}1&-3\\2&0\end{pmatrix}=\begin{pmatrix}3&-9\\6&0\end{pmatrix}\]</div>

<h2><span class="k">4</span>Matrix multiplication</h2>
<p>Multiplying one matrix by another is not element-by-element multiplication. Here the "row by column" rule applies.</p>
<div class="box def"><span class="t">Domino rule</span>
You can multiply matrix \(A\) by matrix \(B\) only when the number of columns of the first matrix is exactly equal to the number of rows of the second. If you write their sizes side by side as \((n\times k)\cdot(k\times m)\), the inner numbers \(k\) must match, and the outer numbers \(n\) and \(m\) give the size of the result.</div>
<div class="box warn"><span class="t">Common mistake</span>Trying to multiply matrices element by element, or multiplying matrices of incompatible sizes. Also remember the main rule: in matrices, \(AB \ne BA\). Changing the order of the factors changes the result, and sometimes the reverse product cannot be computed at all.</div>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us multiply matrix \(A\) of size \(2\times3\) by matrix \(B\) of size \(3\times2\).
\(A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}\), \(B=\begin{pmatrix}7&8\\9&1\\2&3\end{pmatrix}\).
<ol><li>Check the inner sizes: \(A\) has three columns, \(B\) has three rows. They are equal, so multiplication is possible. The result will be of size \(2\times2\).</li><li>Compute the element \(c_{11}\) (first row of the first matrix times first column of the second): \(1\cdot7+2\cdot9+3\cdot2=7+18+6=31\).</li><li>Compute the element \(c_{12}\) (first row times second column): \(1\cdot8+2\cdot1+3\cdot3=8+2+9=19\).</li><li>Compute the element \(c_{21}\) (second row times first column): \(4\cdot7+5\cdot9+6\cdot2=28+45+12=85\).</li><li>Compute the element \(c_{22}\) (second row times second column): \(4\cdot8+5\cdot1+6\cdot3=32+5+18=55\).</li></ol>
Assembling the final matrix:
\[AB=\begin{pmatrix}31&19\\85&55\end{pmatrix}\]</div>
<p>Division of matrices does not exist in mathematics. Instead, multiplication by the inverse matrix is used. Only square matrices can be raised to a power.</p>

<h2><span class="k">5</span>Transpose and types of matrices</h2>
<p>The <b>transpose</b> operation means replacing all rows with columns, keeping the same order. If the original matrix had size \(n\times m\), the transposed matrix will have size \(m\times n\).</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Transpose the matrix \(A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}\) of size \(2\times3\).
<ol><li>The first row \((1, 2, 3)\) becomes the first column.</li><li>The second row \((4, 5, 6)\) becomes the second column.</li></ol>
We get a result of size \(3\times2\):
\[A^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}\]</div>
<p>Important properties of transposition: transposing twice returns the original matrix \((A^T)^T=A\), and when transposing a product, the order of the factors is reversed: \((AB)^T=B^TA^T\).</p>
<div class="box warn"><span class="t">Common mistake</span>Forgetting to reverse the order of the factors when transposing a product and writing \((AB)^T=A^TB^T\). This is incorrect.</div>
<p>Among square matrices, two important classes are distinguished:</p>
<ul>
<li><b>Symmetric matrices</b> are equal to their transpose (\(A^T=A\)). Their elements are mirror-equal with respect to the main diagonal.</li>
<li><b>Skew-symmetric matrices</b> are equal to their negative (\(A^T=-A\)). Their main diagonal always contains zeros.</li>
</ul>

<h2><span class="k">6</span>Determinants of order 1 and 2</h2>
<p>A <b>determinant</b> is a number that can be computed only for a square matrix. It is denoted \(\det A\) or \(|A|\). If the determinant is zero, the matrix is called singular, and it has no inverse matrix.</p>
<p>For a first-order matrix, the determinant equals its only element. For a second-order matrix, the determinant is the difference between the product of the main diagonal elements and the product of the secondary diagonal elements.</p>
\[\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=a_{11}a_{22}-a_{12}a_{21}\]
<div class="box ex"><span class="t">Step-by-step example</span>
Let us compute the determinant \(\begin{vmatrix}3&4\\2&5\end{vmatrix}\).
<ol><li>Multiply the elements of the main diagonal: \(3\cdot5=15\).</li><li>Multiply the elements of the secondary diagonal: \(4\cdot2=8\).</li><li>Subtract the second product from the first: \(15-8=7\).</li></ol></div>

<h2><span class="k">7</span>Determinant of order 3</h2>
<p>For a square matrix of size \(3\times3\), the calculation is more complex. There are two classic methods: the triangle rule and the Sarrus rule.</p>
<p>By the <b>Sarrus rule</b>, you can write the first two columns of the matrix again on the right and add the products of the elements along the three diagonals going down (with a plus sign) and along the three diagonals going up (with a minus sign).</p>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us compute the determinant \(\det A=\begin{vmatrix}1&2&3\\0&4&5\\1&0&2\end{vmatrix}\).
<ol><li>Products with a plus sign (the main diagonal and two parallel triangles): \(1\cdot4\cdot2 + 2\cdot5\cdot1 + 3\cdot0\cdot0 = 8 + 10 + 0 = 18\).</li><li>Products with a minus sign (the secondary diagonal and two parallel triangles): \(1\cdot4\cdot3 + 0\cdot5\cdot1 + 2\cdot0\cdot2 = 12 + 0 + 0 = 12\).</li><li>Subtract the sum of the negative terms from the sum of the positive terms: \(18-12=6\).</li></ol></div>
<div class="box warn"><span class="t">Common mistake</span>Trying to apply the Sarrus rule or the triangle rule to matrices of size \(4\times4\) or larger. These rules work only for the third order.</div>

<h2><span class="k">8</span>Minors, cofactors and the Laplace expansion</h2>
<p>To compute determinants of any order, minors and cofactors are used.</p>
<ul>
<li>A <b>minor</b> \(M_{ij}\) is the determinant of a smaller size obtained by mentally crossing out the \(i\)-th row and the \(j\)-th column of the matrix.</li>
<li>A <b>cofactor</b> \(C_{ij}\) is the same minor multiplied by plus or minus one, depending on the sum of the indices: \(C_{ij}=(-1)^{i+j}M_{ij}\).</li>
</ul>
<p>The signs alternate like a checkerboard:</p>
\[\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}\]
<p>By the <b>Laplace expansion</b>, the determinant can be expanded along any chosen row or any column: multiply each element of the row by its cofactor and add the results.</p>
<div class="box tip"><span class="t">In plain terms</span>Always choose for the expansion the row or column with the most zeros. Each zero, multiplied by its cofactor, eliminates a whole term, which saves you extra calculations.</div>

<h2><span class="k">9</span>Properties of determinants</h2>
<p>Determinants have useful properties that allow you to find answers immediately without long calculations:</p>
<ol>
<li>If a matrix contains a completely zero row or column, its determinant is zero.</li>
<li>If a matrix has two identical or proportional rows, its determinant is zero.</li>
<li>When two rows are swapped, the determinant changes its sign.</li>
<li>The determinant of the transposed matrix equals the determinant of the original: \(\det A = \det A^T\).</li>
<li>For a triangular or diagonal matrix, the determinant is simply the product of the elements on the main diagonal.</li>
<li>When a matrix of size \(n\times n\) is multiplied by a number \(k\), its determinant is multiplied by \(k^n\).</li>
<li>The determinant of a product of two matrices equals the product of their determinants: \(\det(AB) = \det A \cdot \det B\).</li>
</ol>
<div class="box ex"><span class="t">Step-by-step example</span>
Let us compute the determinant of the triangular matrix \(\begin{vmatrix}5&0&0\\2&-3&0\\1&4&7\end{vmatrix}\).
<ol><li>Check the form of the matrix: the elements above the main diagonal are zero, so this is a lower triangular matrix.</li><li>Find the elements of the main diagonal: \(5\), \(-3\), \(7\).</li><li>Multiply them together: \(5\cdot(-3)\cdot7=-105\).</li></ol></div>
<div class="box def"><span class="t">If you remember only one thing</span>A matrix is a rectangular table of numbers whose size is defined by the number of rows and columns. Only equal matrices can be added, and they can be multiplied only when the number of columns of the first equals the number of rows of the second. The determinant is a numerical characteristic of a square matrix that helps you check whether it is singular and verify its properties.</div>
`
},'en');
