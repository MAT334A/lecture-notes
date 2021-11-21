# The Mean Value Theorem

{{#include ../tex_common.md}}

You might want to know the Mean Value Theorem. Just maybe. 😉

## Prelude: Rolle's Theorem

Suppose \\(f: \R \to \R\\) is differentiable. Furthermore, there are some \\(a < b\\) such that \\(f(a) = f(b)\\). Then, Rolle's Theorem states that there is some \\(k \in (a, b)\\) such that \\(f'(k) = 0\\).

To prove Rolle's Theorem, note that \\(f\\) differentiable implies \\(f\\) continuous, so \\(f\\) maps compact intervals (remember, compact means closed and bounded) to compact intervals, and therefore we can consider \\(f: [a, b] \to [c, d]\\) for some \\(c \le d\\). If \\(c = d\\) then \\(f\\) is constant on the interval and \\(f'(x)\\) is zero everyone on the open interval. Otherwise, suppose \\(c < f(a) = f(b)\\). Then there is some \\(k\\) such that \\(f(k) = c\\), which must be a local minimum. Therefore, \\(f'(k) = 0\\). Otherwise, we have \\(d > f(a) = f(b)\\) and there is some \\(k\\) such that \\(f(k) = d\\) is a local maximum, also forcing \\(f'(k) = 0\\).

Rolle's Theorem is basically always proved along the way to the big boy ... the **Mean Value Theorem**.

## Mean Value Theorem: Statement and Proof

The Mean Value Theorem (usually abbreviated as MVT) states that if \\(f: \R \to \R\\) is differentiable, then for all \\(a < b \in \R\\), there is some \\(c \in (a, b)\\) such that \\(f(b) - f(a) = f'(c)(b - a)\\).

To prove this, let \\(g(x) = f(x) - \frac{f(b) - f(a)}{b - a}(x - a)\\). Note that \\(g(a) = f(a) - \frac{f(b) - f(a)}{b - a}(a - a) = f(a)\\), and \\(g(b) = f(b) - \frac{f(b) - f(a)}{b - a}(b - a) = f(a)\\), so \\(g(a) = g(b)\\). Therefore, Rolle's Theorem guarantees some \\(c \in (a, b)\\) such that \\(g'(c) = 0\\). But \\(g'(x) = \frac{f(b) - f(a)}{b - a}\\), therefore \\(f(b) - f(a) = g'(c)(b - a)\\).

> Application: Approximation
> `TODO`

