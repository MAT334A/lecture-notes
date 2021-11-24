# The Mean Value Theorem

{{#include ../tex_common.md}}

You might want to know the Mean Value Theorem. Just maybe. 😉

## Prelude: Rolle's Theorem

Suppose \\(f: \R \to \R\\) is differentiable. Furthermore, there are some \\(a < b\\) such that \\(f(a) = f(b)\\). Then, Rolle's Theorem states that there is some \\(k \in (a, b)\\) such that \\(f'(k) = 0\\).

To prove Rolle's Theorem, note that \\(f\\) differentiable implies \\(f\\) continuous, so \\(f\\) maps compact intervals (remember, compact means closed and bounded) to compact intervals, and therefore we can consider \\(f: [a, b] \to [c, d]\\) for some \\(c \le d\\). If \\(c = d\\) then \\(f\\) is constant on the interval and \\(f'(x)\\) is zero everyone on the open interval. Otherwise, suppose \\(c < f(a) = f(b)\\). Then there is some \\(k\\) such that \\(f(k) = c\\), which must be a local minimum. Therefore, \\(f'(k) = 0\\). Otherwise, we have \\(d > f(a) = f(b)\\) and there is some \\(k\\) such that \\(f(k) = d\\) is a local maximum, also forcing \\(f'(k) = 0\\).

Rolle's Theorem is basically always proved along the way to the big boy ... the **Mean Value Theorem**.

## Mean Value Theorem: Statement and Proof

The Mean Value Theorem (usually abbreviated as MVT) states that if \\(f: \R \to \R\\) is differentiable on some interval \\((a, b)\\) and continuous on some interval \\([a, b]\\), then for all \\(a < b \in \R\\), there is some \\(c \in (a, b)\\) such that \\(f(b) - f(a) = f'(c)(b - a)\\).

To prove this, let \\(g(x) = f(x) - \frac{f(b) - f(a)}{b - a}(x - a)\\). Note that \\(g(a) = f(a) - \frac{f(b) - f(a)}{b - a}(a - a) = f(a)\\), and \\(g(b) = f(b) - \frac{f(b) - f(a)}{b - a}(b - a) = f(a)\\), so \\(g(a) = g(b)\\). Therefore, Rolle's Theorem guarantees some \\(c \in (a, b)\\) such that \\(g'(c) = 0\\). But \\(g'(x) = \frac{f(b) - f(a)}{b - a}\\), therefore \\(f(b) - f(a) = g'(c)(b - a)\\).

## Collary: Another Mean Value Theorem

Suppose \\(f : ℝ \to ℝ\\) is differentiable on \\((a, b)\\) and continuous on \\([a, b]\\). If \\(∀ x ∈ (a, b), g'(x) \neq 0 ∧ g(b) - g(a) \neq 0\\), then
\\[
    ∃ c ∈ (a, b),\enspace \frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}
\\]

**Proof**: Define \\(h : ℝ\to ℝ\\), \\[
    h(x) := ( f(b) - f(a) ) ( g(x) - g(a) ) - ( f(x) - f(a) ) ( g(b) - g(a) )
.\\]

Notice that \\(h(a) = h(b) = 0\\) &mdash; we can apply Rolle's Theorem! \\[
    ∃ c ∈ (a, b),\enspace h'(c) = 0
.\\]

To apply this, let's first find \\(h'(x)\\):\\[
\begin{aligned}
    && h(x) &= (g(x)) ( f(b) - f(a) ) - (g(a)) ( f(b) - f(a))\\\\ && &+ (f(a))( g(b) - g(a) ) - ( f(x) ) ( g(b) - g(a) )\\\\
    ⇒&& h'(x) &= (g'(x))(f(b) - f(a)) - 0 + 0 - (f'(x))(g(b) - g(a))\\\\
    ⇒&& h'(x) &= (f(b) - f(a)) g'(x) - (g(b) - g(a)) f'(x)
\end{aligned}
\\]

As such, because there exists \\(c \in (a, b)\\) where \\(h'(c) = 0\\),\\[
\begin{aligned}
    && 0 = h'(c) &= (f(b) - f(a)) g'(c) - (g(b) - g(a)) f'(c)\\\\
    ⇒&& (g(b) - g(a)) f'(c) &= (f(b) - f(a)) g'(c) && \text{... by Algebra}\\\\
    ⇒&& \frac{(g(b) - g(a)) f'(c)}{(g(b) - g(a)) g'(c)} &= \frac{(f(b) - f(a))g'(c)}{(g(b) - g(a))g'(c)} && 
\end{aligned}
\\]

Note that the last implication holds because we require \\(g(b) - g(a) \neq 0\\) and \\(\forall x \in (a, b) g'(x) \neq 0\\). As such, \\(\frac{g'(c)}{g'(c)} = 1\\) and so, \\[
    \frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}
\\]
... as desired. <span class="qed"></span>

> Application: Approximation
> `TODO`

