# The Notion of Connectedness

{{#include ../tex_common.md}}

Or ... rather, the notion of disconnectedness.

We say a set \\(S \in \R^n\\) is ***dis*connected** if there exists a partition of \\(S\\) into some \\(S_1\\), \\(S_2\\) (that is, \\(S_1 \cup S_2 = S\\)) such that \\(S_1 \cap \bar{S_2} = \bar{S_1} \cap S_2 = \emptyset\\). Intuitively, if I can divide a set into two parts such that the two parts do not touch each other, then the set is disconnected. If a set is not disconnected, then it is **connected**. (No partition into two sets \\(S_1 \cup S_2 = S\\) satisfies \\(S_1 \cap \bar{S_2} = \bar{S_1} \cap S_2 = \emptyset\\).)

Note: by this definition, if \\(S\\) is the union of the (open) unit balls centered at \\((0, 0)\\) and \\((1, 0)\\), then \\(S\\) is disconnected. 

## Connectedness Theorems

Here's a simple one. If \\(S \subseteq \R\\) is not an interval, then it is not connected.

Given \\(S\\) is not an interval, there exist some \\(a, b, c \in \R\\) such that \\(a, c \in S\\) and \\(b \not\in S\\). Therefore, consider \\(S_1 = (-\infty, b) \cap S\\) and \\(S_2 = (b, \infty) \cap S\\). Note that \\(S_1 \cup S_2 = (\R \setminus \{b\}) \cap S = S\\), and \\(\bar{S_1} \subseteq (-\infty, b]\\), \\(\bar{S_2} \subseteq [b, \infty)\\).

Here is a more significant theorem. Consider \\(f: S \rightarrow \R^m\\) continuous, where \\(S\\) is connected. We can show that \\(f(S)\\) is also connected.

We proceed by proof by contradiction. Let us assume \\(f(S)\\) is disconnected and derive a contradiction. The definition of disconnectedness tells us that there is some \\(S_1, S_2 \in \R^m\\) such that \\(S_1 \cup S_2 = S\\) and \\(S_1 \cap \overline{S_2} = \overline{S_1} \cap S_2 = \emptyset). Clearly, \\(S_1\\) and \\(S_2\\) are disjoint, so let us define \\(U_1: \{x \in S: f(x) \in S_1\}\\) and \\(U_2: \{x \in S: f(x) \in S_2\}\\). Therefore, \\(U_1 \cup U_2 = S\\). No \\(x \in S\\) is such that \\(f(x) \in S_1\\) and \\(f(x) \in S_2\\), so \\(U_1 \cap U_2 = \emptyset\\). If we can show that \\(\overline{U_1} \cap U_2 = U_1 \cap \overline{U_2} = \emptyset\\) to derive a contradiction on \\(S\\) being connected.

To prove this, we will use proof by contradiction *again*. We want to show \\(\overline{U_1} \cap U_2 = U_1 \cap \overline{U_2} = \emptyset\\) to finish our outside proof by contradiction, so we will assume *the opposite*, namely, \\(\overline{U_1} \cap U_2 \ne \emptyset\\), and show that this assumption results in a contradiction, forcing \\(S\\) to be disconnected, itself forcing a contradiction that implies our first assumption that \\(f(S)\\) is disconnected is false.

Suppose that \\(\overline{U_1} \cap U_2 \ne \emptyset\\). Therefore, there exists some \\(x \in \overline{U_1} \cap U_2\\). As \\(U_1\\) and \\(U_2\\) are disjoint, we have \\(x \in U_2\\) and \\(x \not\in U_1\\). Therefore, we conclude \\(x \in \partial U_1\\). But as \\(x\\) is on the boundary of \\(U_1\\), there exists a point \\(x_k \in U_1\\) at any arbitrarily small radius from \\(x\\), so we can construct a sequence \\((x_n)_{n = 1}^\infty\\) in \\(U_1\\) that converges to \\(x\\). But as \\(f\\) is continuous, this implies that \\(f(x_n)\\) is a sequence in \\(f(U_1) = S_1\\) converging to \\(f(x) \in S_2\\), which implies \\(x \in \overline{S_1}\\). This demonstrates that \\(x \in \overline{S_1} \cap S_2\\), so \\(f(S)\\) is connected, contradicting *our first contradiction assumption*, namely, \\(f(S)\\) is disconnected.

Therefore, we conclude that \\(\overline{U_1} \cap U_2 = \emptyset\\), and a symmetrical argument demonstrates the same for \\(U_1 \cap \overline{U_2}\\), so we conclude that \\(S\\) is disconnected, contradicting the premises of the problem.

Nested contradictions are tricky. 😉

# The Notion of Pathwise Connectedness=

In addition to the above notion of connectedness, we can also define a different (and not entirely the same!) notion of connectedness called **pathwise connectedness**. Informally, a set is pathwise connected if between any two points in a set one can draw a (continuous) line in the set connecting the two points.

Formally, \\(S\\) is pathwise connected if \\(\forall a, b \in S\\), there is some \\(\gamma: [0, 1] \rightarrow S\\) continuous such that \\(\gamma(0) = a\\) and \\(\gamma(1) = b\\).

As it turns out, **pathwise connectedness is stronger than connectedness**. That is, pathwise connectedness implies connectedness, but connectedness *does not* imply pathwise connectedness. A counterexample for the latter is the extremely weird set in \\(\R^2\\) defined by \\(S:\{(x, y): 0 < x \le 2, y = \sin \frac{\pi}{x}\} U \{(0, y): -1 \le y \le 1\}\\) is connected (the frequency of \\(\sin \frac{\pi}{x}\\) goes to infinity as \\(x \to 0\\), and it can be shown that \\(x = 0\\) for \\(-1 \le y \le 1\\) is in the closure of the set), but there is no path going from \\((0, 1))\\ to \\((1, 0)\\).