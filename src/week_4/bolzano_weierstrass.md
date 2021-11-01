# The Garbanzo-Wirestress ... wait what?

{{#include ../tex_common.md}}

## The Statement

The **Bolzano-Weirstrass** Theorem (often abbreviated 'BW') states that every bounded sequence in \\(\R\\) has a *convergent subsequence*.

> A **subsequence** \\(\left(x_{n_k}\right)\_{k = 1}^\infty\\) of some sequence \\((x_n)\_{n = 1}^{\infty}\\) is composed of some terms of \\(x_n\\) such that if \\(i < j\\), \\(n_i < n_j\\). Informally, a subsequence takes some terms of a sequence, but keeps the terms in the relative order they appeared in the sequence.

To prove BW, suppose that the sequence \\((x_n)_{n = 1}^\infty\\) is bounded above by \\(c_2\\) and below by \\(c_1\\). Let us map the sequence to the interval \\([0, 1]\\).

Consider the intervals \\(\left[0, \frac{1}{2}\right]\\) and \\(\left[\frac{1}{2}, 1\right]\\). As the sequence \\((x_n)\\) is an infinite sequence, at least one of the halves contains an infinite amount of elements. Let this half be the interval \\(I_1\\).

Let \\(I_n = [a, b]\\) for some \\(n \ge 1\\) containing an infinite amount of elements of \\((x_n)\\). We can then define \\(I_{n + 1}\\) as either \\(\left[a, \frac{a + b}{2} \right]\\) or \\(\left[\frac{a + b}{2}, b\right]\\), whichever contains an infinite number of elements. The length of the sequence of intervals \\(I_N\\) goes to zero, and \\(I_{n + 1} \subseteq I_n\\), therefore, there exists some number \\(x \in [0, 1]\\) that is in all of the intervals. Therefore, we can construct a subsequence \\(x_{n_k} \in I_k\\), and \\(n_{k + 1} > n_k\\) is always possible as each interval contains an infinite amount of elments of \\((x_n)\\). 

**BW can be extended to show that every bounded sequence in \\(\R^n\\) has a convergent subsequence.**

In practice, we often use BW in relation to continuity of functions, as it allows us to assume there is always a term arbitrarily close to some point in the bounded set containing the sequence.
