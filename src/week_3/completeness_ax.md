# The Completeness Axiom

{{#include ../tex_common.md}}

The Completeness Axiom states that for a well-ordered set \\(S\\), given any subset \\(X\\) with an upper bound \\(a\\) (that is, \\(X\\) has the property that there is an element \\(a \in S\\) such that for any \\(x \in X\\), \\(x < a\\), then there exists a _least_ upper bound \\(\alpha \in S\\) of \\(X\\) such that \\(\alpha\\) is an upper bound, and for any \\(a < \alpha\\), there is some \\(x \in S\\) such that \\(x \ge a\\). Also, if a subset has a lower bound \\(b\\), then there exists a _greatest_ upper bound \\(\beta\\).

We will take this as an axiom for the real numbers. This axiom does not apply to the rationals - consider the subset of rationals less than (or greater than) some irrational number. 

We need the completeness axioms for some convergence proofs.

## A Monotonic Increasing Bounded Sequence is Convergent

Using the Completeness Axiom, we can show that for any monotonically increasing and bounded sequence \\(\{x_k\}_{k = 1}^{\infty}\\) where \\(x_k \in \R\\), it is true that the sequence converges.

Define the set \\(S := \{x_k: k \in \N\}\\), which is a subset of \\(\R\\). As we know that \\(\{x_k\}\\) is bounded, so is \\(S\\). Therefore, the supremum of \\(S\\) exists. Let \\(\alpha = \sup(S)\\). In particular, any \\(a < \alpha\\) is not an upper bound, that is, there is some term of the sequence \\(x_i\\) such that \\(x_i > a\\).

We claim that the sequence \\(\{x_k\}\\) converges to \\(\alpha\\). Given a fixed \\(\epsilon > 0\\), we can show that there exists some \\(x_N\\) such that \\(|\alpha - x_N| < \epsilon\\). Note that, as \\(\alpha\\) is the supremum, \\(|\alpha - x_N| = \alpha - x_n\\)). Suppose otherwise, and for all \\(x_N\\), \\(\alpha - x_N \ge \epsilon \implies x_N \le \alpha - \epsilon\\). But since this is true for all \\(x_N\\), we have \\(\alpha - \epsilon\\) is an upper bound of \\(S\\), which contradicts \\(\alpha\\) being the supremum of \\(S\\). Therefore, there does exist some \\(x_N\\) such that \\(\alpha - x_N < \epsilon\\). Since the sequence is monotonically increasing, for all \\(n \ge N\\), we know that \\(\alpha - x_n < \alpha - x_N < \epsilon\\), demonstrating convergence.

## Heron's Method Of Square Roots

This is a veerrrry old method of computing the square root of a number - there is evidence that the Babylonians knew of what some people call today **Heron's Method**. (Paying homage to the Babylonians, this method is also called the **Babylonian Method**.)

Given some positive real number \\(a\\), we would like to compute \\(\sqrt{a}\\). How can we compute it with a high degree of accuracy?

Start with a (positive) guess, which we will call \\(x_0\\). Realistically, we would probably choose one of the integers whose square bounds \\(a\\), but in principle we can choose whatever we want.

Observe that \\(\sqrt{a}\cdot\sqrt{a} = x_0\cdot\frac{a}{x_0} = a\\), and therefore exactly one of \\(x_0\\) and \\(\frac{a}{x_0}\\) is greater than \\(\sqrt{a}\\) and exactly one is less. Perhaps a good next guess is the average of \\(x_0\\) and \\(\frac{a}{x_0}\\)! Let this quantity be \\(x_1\\), and in general, \\(x_{n + 1} = \frac{1}{2}\left(x_n + \frac{a}{x_n}\right)\\). This sequence converges to \\(\sqrt{a}\\)!

To demonstrate that this method works, first note that \\(x_1 \ge \sqrt{a}\\). To demonstrate this, let \\(f(x) = \frac{1}{2}\left(x + \frac{a}{x}\right)\\). We have \\(f'(x) = \frac{1}{2} - \frac{a}{2x^2}\\), so the minimum of \\(f(x)\\) occurs at \\(x = \sqrt{a}\\), where \\(f(\sqrt{a}) = \sqrt{a}\\). Therefore, after a single iteration, we are guaranteed \\(x_1 \ge \sqrt{a}\\) regardless of the value of \\(x_0\\).

Therefore, if \\(n \ge 1\\), we have \\(x_n \ge \sqrt{a}\\). Note that \\(x_{n + 1} \le x_n\\) as \\(x_n \ge \sqrt{a} \implies a \le x_n^2 \implies \frac{a}{x_n} \le x_n \implies \frac{a}{2x_n} \le \frac{x_n}{2} \implies \frac{x_n}{2} + \frac{a}{2x_n} = x_{n + 1} \le x_n\\). Therefore, the sequence \\((x_n)_{n = 1}^\infty\\) is monotonically decreasing and has a lower bound, so there exists some infimum. 

It remains to show that this infimum is indeed \\(\sqrt{a}\\). Suppose the infimum is actually some \\(\alpha > \sqrt{a}\\). Let \\(\alpha = \sqrt{a} + \epsilon\\) for some positive real \\(\epsilon\\). Therefore, as \\(\alpha\\) is the infimum, there exists some iteration \\(x_n\\) such that \\(\alpha \le x_n < \alpha + \epsilon\\). Therefore, \\(x_{n + 1} = \frac{x_n}{2} + \frac{a}{2x_n} < \frac{\sqrt{a} + 2\epsilon}{2} + \frac{a}{2\sqrt{a}}) = \sqrt{a} + \epsilon = \alpha\\), which contradicts \\(\alpha\\) as the minimum. Therefore, this sequence produced by Heron's Method converges to \\(\sqrt{a}\\).