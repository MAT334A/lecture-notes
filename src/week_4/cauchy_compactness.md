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

We define a set to be **compact** if it is both closed and bounded.

### Bolzano-Weierstrass V2

A set \\(S \subseteq \R^n\\) is compact iff every sequence in \\(S\\) has a subsequence that converges to a point in \\(S\\). Some people refer to this equivalence as Bolzano-Weierstrass instead of the theorem provided earlier.

Suppose that \\(S\\) is compact. Therefore, it is bounded. Thus, given any subsequence in \\(S\\), we know from (the original) BW that there exists a converging subsequence \\((x_n)\\). Assume for contradiction that this subsequence converges to some \\(x \not\in S \rightarrow x \in S^c\\), an open set. But by the definition of an open set, there exists some radius \\(r\\) around \\(x\\) such that all points \\(r\\)-close to \\(x\\) are in \\(S^c\\). As the subsequence converges to \\(S^c\\), there is some positive integer \\(N\\) such that \\(n \ge N\\) implies all terms of the subsequence \\((x_n)\\) are \\(r\\)-close and therefore not in \\(S\\), contradicting that \\((x_n)\\) is in \\(S\\).

Suppose that \\(S\\) is a set such that every sequence in \\(S\\) has some converging subsequence \\((x_n)\\) that converges to some point in \\(S\\). Suppose for a contradiction that \\(S\\) is not compact. Then it is either unbounded or open. If it is unbounded, there exists some sequence that goes to infinity and does not converge at all. If \\(S\\) is open but bounded, then consider a point \\(x \in \partial S\\). As \\(S\\) is open, \\(x \not\in S\\). However, we can construct a sequence in \\(S\\) that converges to \\(x\\) by letting \\(x_n\\) be any point in the ball of radius \\(\frac{1}{n}\\) around \\(x\\). By the definition of an open set, there is some positive \\(r\\) such that all points \\(r\\)-close to \\(x\\) are in \\(S\\). Thus, after a finite amount of terms, we have a sequence in \\(S\\) that converges to a point outside of \\(S\\), which is a contradiction.

Here is a theorem that is a corollary to BW for sets.

### Continuous Functions and Compactness

Given \\(f: \R^n \rightarrow \R^m\\), where \\(f\\) is continuous, and some set \\(S \subseteq \R^n\\) such that \\(S\\) is compact, the set \\(f(S): \{y \in \R^m: \exists x \in \R^n (f(x) = y)\}\\) is also compact.

To prove \\(f(S)\\) is compact, let \\((y_n)\_{n = 1}^\infty\\) be any sequence in \\(f(S)\\), and let \\((x_n)\_{n = 1}^\infty\\) be the corresponding sequence in \\(S\\). By BW for sets, this there exists some convergent subsequence \\((x_{n_k})\\) that converges to some \\(x \in S\\). As \\(f\\) is continuous, converging sequences map to converging sequences, so \\((y_{n_k})\\) converges to \\(f(x) \in f(S)\\), and therefore any sequence in \\(f(S)\\) converges to some point in \\(f(S)\\), and therefore \\(f(S)\\) is compact.