# L'Hôpital's Rule

{{#include ../tex_common.md}}

> **L'Hôpital's Rule 1A:** (There are _many_ things like this in the set of all L'Hôpital's Rules).
> 
> Suppose that \\(f : ℝ \to ℝ\\) and \\(g : ℝ \to ℝ\\). If \\(f, g\\) are differentiable on some interval \\((a, b)\\) and \\(f(a) = g(a) = 0\\).
> If, for all \\(c \in (a, b]\\), \\(g'(c) \neq 0\\), we have,
> \\[\lim_{x \to a+} \frac{f(x)}{g(x)} = \lim_{x\to a+} \frac{f'(x)}{g'(x)} = L\\]

L'Hôpital's rule is really a collection of theorems that let you evaluate limits at a point (or for arbitrarily large input). It comes from the mean value theorem.

## Proof of L'Hôpital's Rule 1A:

The key to this proof is the [**mean value theorem**](mean_value_theorem.html). Suppose that \\(c\\) is some arbitrary real number between \\(a\\) and \\(b\\).

Define \\(h(x) = \frac{f(x)}{g(x)}\\), `TODO: Use mean value theorem 2 on h(x)`

Part of the requirement for L'Hôpital's rule is that \\(g'(c) \neq 0\\).
