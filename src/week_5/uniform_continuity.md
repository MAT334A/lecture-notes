# Continuity ... but *Uniform*

{{#include ../tex_common.md}}

Let's begin by reviewing our definition of continuity for a function \\(f: S \rightarrow \R^m\\) for \\(S \subseteq \R^n\\)

> **Continuity**: \\(\forall x \in S \forall \epsilon > 0 \exists \delta > 0 \forall y (||x - y|| < \delta \implies ||f(x) - f(y)|| < \epsilon)\\)

Importantly, our choice of \\(\delta\\) can depend on the specific \\(x\\) we are showing is continuous. Uniform continuity, on the other hand, is ever so slightly different.

> **Uniform Continuity**: \\(\forall \epsilon > 0 \exists \delta > 0 \forall x \in S \forall y (||x - y|| < \delta \implies ||f(x) - f(y)|| < \epsilon)\\)

In Uniform Continuity, our choice of \\(\delta\\) can only depend on \\(\epsilon\\) and not on \\(x\\). This makes uniform continuity stronger than continuity, and there are some functions that are continuous that are not uniformly continuous.

## Polynomials?

Consider the quadratic \\(f(x) = x^2\\). It obviously is continuous. Is this function uniformly continuous? The answer is actually no!

If \\(f(x)\\) were uniformly continuous, then for every \\(\epsilon > 0\\) there is some \\(\delta > 0\\) so that \\(||x - y|| < \delta \implies ||x^2 - y^2|| < \epsilon\\) regardless of the choice for \\(x\\) and \\(y\\). Let \\(\epsilon = 1\\), and let \\(y = x + \frac{\delta}{2}\\). This choice of \\(x\\) and \\(y\\) satisfies \\(||x - y|| < \delta\\), therefore we should have \\(||x^2 - y^2|| = \left|x^2 - x^2 - \delta x - \frac{\delta^2}{4}\right| = \left|\delta x + \frac{\delta^2}{4}\right| < 1\\). However, if \\(x \ge \frac{1}{\delta}\\), then this inequality is false, contradicting uniform continuity.

Conceptually, the reason why \\(f(x) = x^2\\) is not uniformly continuous is because its slope goes to infinity as \\(x\\) goes to infinity, so no bound for \\(\delta\\) will constrain \\(f(x)\\) to an \\(\epsilon\\) interval for any choice of \\(x\\).

In fact, this observation may lead us to the following (sufficient) criteria for uniform continuity: \\(f: \R \to \R\\) continuous and differentiable is uniformly continuous if \\(\sup_\limits{x \in \R} |f'(x)| < N\\) for some \\(N \in \R\\). That is, if the slope is bounded, then regardless of the choice of \\(x\\) and \\(y\\) that are \\(\delta\\)-close, the function values will also by \\(\epsilon\\)-close.

However, infinite slope by itself isn't enough to disprove uniform continuity ...

## Sqrt what?

Now let us consider the function \\(f(x) = \sqrt{x}\\) on \\(x \in [0, \infty)\\). Given \\(\epsilon > 0\\), let \\(\delta = \epsilon^2\\). Then, given \\(|x - y| < \delta\\), note that \\(f(x)\\) is monotonically increasing, so \\(\max\limits_{|x - y| < \delta}|\sqrt{x} - \sqrt{y}|\\) is just \\(\max\limits_{x \ge 0}|\sqrt{x + \delta} - \sqrt{x}|\\), which, as the slope of \\(f(x)\\) is positive but strictly decreasing, is maximized at \\(x = 0\\). Therefore, \\(\max\limits_{|x - y| < \delta}|\sqrt{x} - \sqrt{y}| = |\sqrt{\delta}| = \sqrt{\epsilon^2} = \epsilon\\), completing the uniform continuity proof.

## Compactness is Sufficient

We do have another theorem that gives us a different sufficient condition for uniform continuity. Suppose \\(S \subseteq \R^n\\) and \\(f: S \to \R^m\\) be continuous. Then, \\(S\\) is compact implies \\(f\\) is uniformly continuous.

`TODO`