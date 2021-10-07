{{#include ../tex_common.md}}

# Set Theorems

With our [definitions](./set_definitions.md), we can now establish some theorems about sets.

## Point Categorization

For any set \\(S\subseteq\R^n\\) and any point \\(x\in\R^n\\), exactly one of the following is true:
1. \\(B(x, r) \subseteq S\\) for sufficiently small \\(r > 0\\).
2. Both \\(B(x, r) \cup S \ne \emptyset\\) and \\(B(x, r) \cup S^c \ne \emptyset\\) for all positive real \\(r\\).
3. \\(B(x, r) \cup S = \emptyset\\) for sufficiently small \\(r > 0\\). (Alternatively, \\(B(x, r) \subseteq S^c\\) for sufficiently small \\(r > 0\\).)


While this is not difficult to understand when written like this, the definitions allow us to neatly categorize all points into **interior points** (1), **boundary points** (2), or **interior points of the _complement_ set** (3).

## Relationship Between a Set and its Complement

The following pairs of statements are equivalent.
- \\(S\\) is open, \\(S^c\\) is closed.
- \\(S\\) is closed, \\(S^c\\) is open.

Let's prove the case where \\(S\\) is open!

> **Note:** The case where \\(S\\) is closed can be shown as a consequence of the first case - just plug in \\(S^c\\) for \\(S\\) and remember that \\((S^c)^c = S\\)!
>

Because \\(S\\) is open, then all of the boundary points of \\(S\\) must be outside of \\(S\\). Translated into math, \\(\partial S \subseteq \R^n \setminus S\\).

<img src = "./S_and_its_complement.svg" style = "border-radius: 6px; display: block; margin-left: auto; margin-right: auto; max-width: 300px;"></img>

\\(\R^n \setminus S\\) is just \\(S^c\\), so \\(\partial S \subseteq S^c\\). We have _almost_ shown that \\(S^c\\) satisfies the definition of a _closed_ set. To finish, we only need to show that \\(\partial S = \partial S^c\\).

However, remember the definition of the boundary of \\(S\\), that is, all points \\(x\\) such that both \\(B(x, r) \cup S \ne \emptyset\\) and \\(B(x, r) \cup S^c \ne \emptyset\\) for \\(r \in\R^+\\). By the same definition the boundary of \\(S^c\\) is all points \\(x\\) such that both \\(B(x, r) \cup S^c \ne \emptyset\\) and \\(B(x, r) \cup (S^c)^c \ne \emptyset\\) for \\(r \in\R^+\\). Note that these statements are equivalent, as \\((S^c)^c = S\\)! Therefore, \\(S\\) is open implies \\(S^c\\) is closed. <span style="float: right;">☺</span>

This should make sense intuitively; the boundary of a set and its complement shouldn't be different from the boundary of a complement of a set and its own complement.

# The Definition of a Limit

The classical definition of a limit for a function \\(f:\R\rightarrow\R\\), the **epsilon-delta** definition, states that \\(\lim_{x \to x_0} f(x) = L \iff \forall \epsilon > 0 \enspace \exists \delta > 0. \enspace |x - x_0| < \delta \implies |f(x) - L| < \epsilon\\). Replacing the absolute value with a norm yields the generalized definition for \\(f:\R^n\rightarrow\R\\).

\\[
   \lim_{x \to x_0} f(x) = L \iff \forall \epsilon > 0 \enspace \exists \delta > 0. \enspace ||x - x_0|| < \delta \implies |f(x) - L| < \epsilon
\\]

Intuitively, by forcing \\(x\\) to be in a sufficiently small neighborhood of \\(x_0\\), we can guarantee that the value of \\(f(x)\\) is arbitrarily close to \\(L\\).
