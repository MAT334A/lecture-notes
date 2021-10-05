# Using the Cauchy-Schwarz Inequality

{{#include ../tex_common.md}}

The Cauchy-Schwarz inequality can be used to show, among other things, that the correlation between two vectors is at most 1, and the triangle inequality (that the two shorter sides of a triangle \\(||a||\\) and \\(||b||\\) have a larger combined length than the longest side of the triangle).

## Proving the Triangle Inequality

Let's say that \\(x, y \in \R^n\\). We can then construct the triangle with sides \\(x, y\\) and \\(x + y\\).

We then have,
\\[
\begin{aligned}
 \norm{x + y}^2 &= \iprod{x, y}
\end{aligned}
\\]

We want to show that \\(\norm{x + y} \leq \norm{x} + \norm{y}\\). Let's start by squaring both sides.
\\[
 \norm{x + y}^2 \leq \left(\norm{x} + \norm{y}\right)^2
\\]

Note that we don't have to consider the negative case because we know \\(\norm{x + y} \geq 0\\), \\(\norm{x} \geq 0\\), and \\(\norm{y} \geq 0\\).

Because we can reverse this operation and get \\(\norm{x + y} \leq \norm{x} + \norm{y}\\), if we can prove \\(\norm{x + y}^2 \leq \left(\norm{x} + \norm{y}\right)^2\\), then we have proven the triangle inequality:
\\[
\begin{aligned}
 \norm{x + y}^2 &\leq \left(\norm{x} + \norm{y}\right)^2\\\\
 \iff \iprod{x, y} &\leq \left(\norm{x} + \norm{y} \right)^2 \\\\
 \iff \iprod{x, y} &\leq \norm{x} \cdot \norm{x} + 2 \cdot \norm{x} \cdot \norm{y} + \norm{y} \cdot \norm{y}
\end{aligned}
\\]

From the Cauchy-Schwarz inequality, we know \\(\iprod{x, y} \leq \norm{x}\norm{y}\\). As such,
\\[
\begin{aligned}
    \iprod{x, y} \leq \norm{x}\cdot \norm{y} &\leq 2\cdot \norm{x}\cdot \norm{y}\\\\
    \implies \iprod{x, y} &\leq 2\cdot \norm{x}\cdot \norm{y}\\\\
    \implies \iprod{x, y} &\leq \norm{x} \cdot \norm{x} + 2 \cdot \norm{x} \cdot \norm{y} + \norm{y} \cdot \norm{y}\\\\
    &= \left(\norm{x} + \norm{y}\right)^2 && \texttt{...as was shown above}
\end{aligned}
\\]

As such, we have \\(\iprod{x, y} \leq \left(\norm{x} + \norm{y}\right)^2\\). From this, square-rooting both sides gives us the triangle inequality.<span style="float: right;">☺</span>

## Correlation

If we have two vectors, \\(x, y \in \R^n\\), then we define the [correlation](http://sepwww.stanford.edu/sep/prof/waves/rnd/paper_html/node22.html) to be:

\\[
 c = \frac{\iprod{x, y}}{\norm{x}\norm{y}}
\\]

We can bound correlation using the Cauchy-Schwarz Inequality:
\\[
\begin{aligned}
 c &= \frac{\iprod{x, y}}{\norm{x}\norm{y}}\\\\
 \implies c \cdot \norm{x}\cdot \norm{y} &= \iprod{x, y} && \texttt{... by Algebra}\\\\
 \implies \abs{c \cdot \norm{x}\cdot \norm{y}} &= \abs{\iprod{x, y}} \\\\
 \implies \Big|c \cdot \norm{x}\cdot\norm{y}\Big| &\leq \norm{x} \cdot \norm{y} && \texttt{... by the Cauchy-Schwarz Inequality}\\\\
 \implies \norm{x}\cdot \norm{y}\cdot \abs{c} &\leq \norm{x} \cdot \norm{y} && \texttt{... because $\norm{x} \geq 0$ and $\norm{y}\geq 0$}\\\\
 \implies \abs{c} &\leq \frac{\norm{x} \cdot \norm{y}}{\norm{x} \cdot \norm{y}}\\\\
 \implies \abs{c} &\leq 1 && \texttt{... assuming $x \neq 0$, $y \neq 0$}
\end{aligned}
\\]

As such, \\(\abs{c} \leq 1\\), and so, \\(-1 \leq c \leq 1\\).<span style="float: right;">☺</span>

