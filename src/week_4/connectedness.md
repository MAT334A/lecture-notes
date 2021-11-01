# The Notion of Connectedness

{{#include ../tex_common.md}}

Or ... rather, the notion of disconnectedness.

We say a set \\(S \in \R^n\\) is ***dis*connected** if there exists a partition of \\(S\\) into some \\(S_1\\), \\(S_2\\) (that is, \\(S_1 \cup S_2 = S\\)) such that \\(S_1 \cap \bar{S_2} = \bar{S_1} \cap S_2 = \emptyset\\). Intuitively, if I can divide a set into two parts such that the two parts do not touch each other, then the set is disconnected. If a set is not disconnected, then it is **connected**. (No partition into two sets \\(S_1 \cup S_2 = S\\) satisfies \\(S_1 \cap \bar{S_2} = \bar{S_1} \cap S_2 = \emptyset\\).)

Note: by this definition, if \\(S\\) is the union of the (open) unit balls centered at \\((0, 0)\\) and \\((1, 0)\\), then \\(S\\) is disconnected. 

## Connectedness Theorems

Here's a simple one. If \\(S \subseteq \R\\) is not an interval, then it is not connected.

Given \\(S\\) is not an interval, there exist some \\(a, b, c \in \R\\) such that \\(a, c \in S\\) and \\(b \not\in S\\). Therefore, consider \\(S_1 = (-\infty, b) \cap S\\) and \\(S_2 = (b, \infty) \cap S\\). Note that \\(S_1 \cup S_2 = (\R \setminus \{b\}) \cap S = S\\), and \\(\bar{S_1} \subseteq (-\infty, b]\\), \\(\bar{S_2} \subseteq [b, \infty)\\).

# The Notion of Pathwise Connectedness

Intuitively, a set is pathwise connected if, for all points in that set, we can construct a curve between any two of them for which all points of the curve are in the set.s

Formally, a set, \\(S \subseteq D\\) is pathwise connected iff \\(\forall a, b \in S, \exists f : [0, 1] \to D, \textsf{Continuous}\_D(f) \wedge f(0) = a \wedge f(1) = b\\).

Pathwise connectedness is also known as "arcwise connectedness".

> Some sets are connected but **not pathwise connected.**
>
> <details><summary>
>
> \\(S = \left\\\{ \left(x, \sin\left(\frac{1}{x}\right)\right) : x \in (0, 1] \right\\\} \enspace\cup\enspace \left\\\{ \left(0, y\right) : y \in [-1, 1] \right\\\}\\), for example, is connected, but not pathwise connected.
>
> </summary>
> <iframe src="https://www.desmos.com/calculator/ur8jlwcl1d?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
>
> \\(S\\) cannot be divided into two non-empty sets whose closures don't intersect, so \\(S\\) is connected.
>
> To see why, consider a point on the vertical line segment, \\(\left\\\{ (0, y) : y \in [-1, 1]\right\\\}\\). If we tried to draw a path from that point to the point \\(\left(\frac{1}{\pi}, 0\right)\\), we couldn't! The path from our point to \\(\left(\frac{1}{\pi}, 0\right)\\) must be larger than any real quantity (to see why, look at the graph).
>
> </details>
>
>

