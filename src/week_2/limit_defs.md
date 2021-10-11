# Limit Definitions

{{#include ../tex_common.md}}

## The Definition of a Limit

The classical definition of a limit for a function \\(f:\R\rightarrow\R\\), the **epsilon-delta** definition, states that \\(\lim_{x \to x_0} f(x) = L \iff \forall \epsilon > 0 \enspace \exists \delta > 0. \enspace |x - x_0| < \delta \implies |f(x) - L| < \epsilon\\). Replacing the absolute value with a norm yields the generalized definition for \\(f:\R^n\rightarrow\R\\).

\\[
   \lim_{x \to x_0} f(x) = L \iff \forall \epsilon > 0 \enspace \exists \delta > 0. \enspace 0 < ||x - x_0|| < \delta \implies |f(x) - L| < \epsilon
\\]

Intuitively, by forcing \\(x\\) to be in a sufficiently small neighborhood of \\(x_0\\), we can guarantee that the value of \\(f(x)\\) is arbitrarily close to \\(L\\).

> **Note:** An alternate definition of the limit.
>
> The above definition does not allow us to substitute \\(x = x_0\\). Some authors define a limit without this restriction, in which case,
>
> \\[
>    \lim_{x \to x_0} f(x) = L \iff \forall \epsilon > 0 \enspace \exists \delta > 0. \enspace ||x - x_0|| < \delta \implies |f(x) - L| < \epsilon
> \\]
>
> Let's study the difference between these two definitions.
>
> Say we have a function,
> \\[
>  f(x) = \begin{cases}
>   1234 & \text{iff } x = 0 \\\\
>   x^2 & \text{otherwise}
>  \end{cases}
> \\]
>
> If we use this alternate definition of a limit, \\(\lim_{x \to 0} f(x)\\) does not exist.
>
> To see why this is the case, let \\(\epsilon = 0.1\\).
> We then must show that for a neighborhood near \\(x = 0\\), there exists \\(L\\) such that \\(|f(x) - L| < \epsilon = 0.1\\).
>
> For \\(x\\) arbitrarily close to zero, we have \\(f(x) \approx 0\\); however, for \\(x = 0\\), we have \\(f(x) = 1234\\). As such, there is no \\(L\\) that satisfies \\(|f(x) - L| < 0.1\\) for all \\(x\\) arbitrarily close to zero (including zero), and so \\(\lim_{x \to 0} f(x)\\) does not exist.
>
> The **only reason** this limit doesn't exist is because we can substitute \\(x = 0\\) into \\(f(x)\\) when computing the limit. If we use our original definition, we can't do that, and so, we would then have \\(\lim_{x\to 0} f(x) = 0\\).
>
> While our definition (the first definition presented here) and the other definition have this difference, we rarely take limits at single-point discontinuities. As such, we can derive the same (or at least very similar) theorems with either.
>

## Defining Continuity

A function, \\(f(t)\\), is continuous on some domain, \\(D\\), if and only if it satisfies all of the following:
\\[
\begin{aligned}
   \text{1.} && \forall x \in D, \lim_{t \to x} f(t) \text{ exists} \\\\
   \text{2.} && \forall x \in D, f(x) = \lim_{t \to x} f(t)
\end{aligned}
\\]

