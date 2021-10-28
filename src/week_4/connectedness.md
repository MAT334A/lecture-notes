# The Notion of Connectedness

{{#include ../tex_common.md}}

Or ... rather, the notion of disconnectedness.

We say a set \\(S \in \R^n\\) is ***dis*connected** if there exists a partition of \\(S\\) into some \\(S_1\\), \\(S_2\\) (that is, \\(S_1 \cup S_2 = S\\)) such that \\(S_1 \cap \bar{S_2} = \bar{S_1} \cap S_2 = \emptyset\\). Intuitively, if I can divide a set into two parts such that the two parts do not touch each other, then the set is disconnected. If a set is not disconnected, then it is **connected**. (No partition into two sets \\(S_1 \cup S_2 = S\\) satisfies \\(S_1 \cap \bar{S_2} = \bar{S_1} \cap S_2 = \emptyset\\).)

Note: by this definition, if \\(S\\) is the union of the (open) unit balls centered at \\((0, 0)\\) and \\((1, 0)\\), then \\(S\\) is disconnected. 

## Connectedness Theorems

Here's a simple one. If \\(S \subseteq \R\\) is not an interval, then it is not connected.

Given \\(S\\) is not an interval, there exist some \\(a, b, c \in \R\\) such that \\(a, c \in S\\) and \\(b \not\in S\\). Therefore, consider \\(S_1 = (-\infty, b) \cap S\\) and \\(S_2 = (b, \infty) \cap S\\). Note that \\(S_1 \cup S_2 = (\R \setminus \{b\}) \cap S = S\\), and \\(\bar{S_1} \subseteq (-\infty, b]\\), \\(\bar{S_2} \subseteq [b, \infty)\\).

# The Notion of Pathwise Connectedness=