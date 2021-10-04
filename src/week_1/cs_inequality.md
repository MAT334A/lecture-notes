# The Cauchy-Schwarz Inequality

## Derivation
Let \\(x, y \in \mathbb{R}^n\\) and \\(t \in \mathbb{R}\\). This proof uses the fact that \\(\<x, x\> = ||x||^2 \geq 0\\), as well as that \\(\<x, y\> = \<y, x\>\\) and that \\(\<x + y, z\> = \<x, z\> + \<y, z\>\\).
\\[
\begin{aligned}
 0 &\leq \<x - ty, x - ty\> \\\\
 &= \<x, x - ty\> + \<-ty, x - ty\> \\\\
 &= \<x - ty, x\> - t\<y, x - ty\> \\\\
 &= \<x - ty, x\> - t\<x - ty, y\> \\\\
 &= \<x, x\> - t\<y, x\> - t\<x - ty, y\>\\\\
 &= \<x, x\> - t\<x, y\> - t\<x, y\> - t\<-ty, y\>\\\\
 &= \<x, x\> - t\<x, y\> - t\<x, y\> + t^2\<y, y\>\\\\
 &= \<x, x\> - 2t\<x, y\> + t^2\<y, y\>\\\\
 &= t^2\<y, y\> - 2t\<x, y\> + \<x, x\>
\end{aligned}
\\]

Notice that we now have a quadratic.

