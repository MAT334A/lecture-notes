# Cauchy Sequences and Compactness

{{#include ../tex_common.md}}

...These two concepts aren't necessarily related. Whatever. Fite me.

## Cauchy Sequences

A sequence \\((a_n)_{n = 1}^\infty) is **Cauchy** if for any positive \\(\epsilon\\), there is some positive integer \\(N\\) such that \\(m, n \ge N\\) guarantees \\(a_m\\) and \\(a_n\\) are \\(\epsilon\\)-close. \\(||a_m - a_n|| < \epsilon\\).

The great thing about a sequence being Cauchy is that being Cauchy is *equivalent* to being convergent in \\(\R^n\\). But demonstrating a sequence is Cauchy does not require knowing what it converges to, so it can be more convenient to show a sequence is Cauchy rather than convergent.

Let us prove this equivalence!

### Cauchy \\(\Leftrightarrow\\) Convergent

Suppose an infinite sequence \\((a_n)\\) converges to \\(L\\). Therefore, for any positive \\(\frac{\epsilon}{2}\\), there is some \\(\delta > 0\\) such that \\(||a_n - L|| < \frac{\epsilon}{2}) given \\(n \ge N\\). Therefore, if both \\(m, n \ge N\\), then we have both \\(||a_m - L|| < \epsilon\\) and \\(||a_n - L|| < \epsilon). Therefore, \\(||a_m - a_n|| = ||(a_m - L) + (L - a_n)|| \le ||a_m - L|| + ||a_n - L|| = \epsilon\\) demonstrates that the sequence is Cauchy.

Ok, that was the easy direction. It's harder to show Cauchy implies convergent.

Suppose that \\((a_n)\\) is Cauchy. Therefore for any positive \\(\epsilon\\) there is some \\(N \in \N\\) that forces any \\(m, n < N\\) to be \\(\epsilon\\)-close. Let us arbitrarily choose \\(\epsilon = 1\\). After \\(N\\) terms, all terms are such that \\(||a_m - a_n|| < \epsilon\\), so \\((a_n)\\) is bounded, and therefore we can use [BW](./bolzano_weierstrass.md) to state there is some converging subsequence \\(a_{n_k}\\) converging to \\(a^*\\).

Now, define two positive integers \\(N_1\\) and \\(N_2\\). Let \\(N_1\\) be such that if \\(m, n \ge N_1\\) then \\(||a_m - a_n|| < \frac{\epsilon}{2}\\), guaranteed to exist by the definition of Cauchy. Let \\(N_2\\) be such that if \\(k \ge N_2)\\, then \\(||a_{n_k} - a^\*|| < \frac{\epsilon}{2}\\), which exists as the subsequence converges. Then, let \\(N = \max(N_1, N_2)\\) so both statements are true. Letting \\(n = n_k\\), we have \\(||x_m - x^\*|| = ||(x_m - x_{n_k}) - (x^\* - x_{n_k})|| \le \epsilon\\) for any \\(m\\) by the Triangle Inequality.

## Compactness

`TODO`