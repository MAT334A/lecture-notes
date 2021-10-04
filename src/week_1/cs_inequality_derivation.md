# The Cauchy-Schwarz Inequality Derivation

{{#include ../tex_common.md}}

## Getting the quadratic
Let \\(x, y \in \mathbb{R}^n\\) and \\(t \in \mathbb{R}\\). This proof uses the fact that \\(\iprod{x, x} = ||x||^2 \geq 0\\), as well as that \\(\iprod{x, y} = \iprod{y, x}\\) and that \\(\iprod{x + y, z} = \iprod{x, z} + \iprod{y, z}\\).
\\[
\begin{aligned}
 0 &\leq \iprod{x - ty, x - ty} \\\\
 &= \iprod{x, x - ty} + \iprod{ -ty, x - ty } \\\\
 &= \iprod{ x - ty, x } - t\iprod{ y, x - ty } \\\\
 &= \iprod{ x - ty, x } - t\iprod{ x - ty, y} \\\\
 &= \iprod{x, x} - t\iprod{ y, x } - t\iprod{ x - ty, y }\\\\
 &= \iprod{x, x} - t\iprod{ x, y } - t\iprod{ x, y } - t\iprod{-ty, y}\\\\
 &= \iprod{x, x} - t\iprod{ x, y } - t\iprod{x, y} + t^2\iprod{y, y}\\\\
 &= \iprod{x, x} - 2t\iprod{ x, y } + t^2\iprod{y, y}\\\\
 &= t^2\iprod{y, y} - 2t\iprod{ x, y } + \iprod{x, x}
\end{aligned}
\\]

Let \\(f(t) = t^2\iprod{y, y} - 2t\iprod{x, y} + \iprod{x, x}\\). Notice that \\(f\\) is a quadratic function of \\(t\\)!


## Graphing it

<details><summary>Graph: <math><mi>f(t)</mi><mo>&geq;</mo><mi>0</mi></math></summary>
<iframe src="https://www.desmos.com/calculator/x6kvupelri?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</details>

Notice that when we graph \\(f(t)\\), we get a quadratic that is always above the x-axis: It **must** have a minimum and that minimum **must** be where its first derivative is zero.

Notice that \\(t\\) is the only _variable_ we're changing here, so taking its derivative is easy! Let's find its minimum!
\\[
\begin{aligned}
 f'(t) &= \frac{\partial}{\partial t} \left(t^2\iprod{y, y}\right) - \frac{\partial}{\partial t} \left( 2t\iprod{x, y}\right) + \frac{\partial}{\partial t} (x)\\\\
 &= 2t\iprod{y, y} - 2\iprod{x, y} + 0\\\\
 \implies 0 &= 2t_{\text{min}} \iprod{y, y} - 2\iprod{x, y}\\\\
 \iff 2\iprod{x, y} &= 2t_{\text{min}} \iprod{y, y}\\\\
 \iff 2t_{\text{min}} \iprod{y, y} &= 2\iprod{x, y}
\end{aligned}
\\]

Keeping in mind that we constrain \\(x \neq 0 \neq y\\),
\\[
\begin{aligned}
 t_{\text{min}} &= \frac{\iprod{x, y}}{\iprod{y, y}}
\end{aligned}
\\]

## Using the minimum

That \\(f\left(t_{\text{min}}\right) \geq 0\\) implies that all other \\(f(t) \geq 0\\), and so is a **very strong statement**. Let's see what we get if we substitute \\(t_{\text{min}}\\) into our inequality!

(_Again, note that we have \\(\frac{\iprod{y, y}}{\iprod{y, y}} = 1\\) because \\(y\neq 0\\), so \\(\iprod{y, y} = ||y||^2 \neq 0\\)_)

\\[
\def\tmin{t_{\text{min}}}
\begin{aligned}
 0 &\leq \tmin^2\iprod{y, y} - 2\tmin\iprod{ x, y } + \iprod{x, x} \\\\
 &= \left(\frac{\iprod{x, y}}{\iprod{y, y}}\right)^2 \iprod{y, y} - 2 \left(\frac{\iprod{x, y}}{\iprod{y, y}}\right)\iprod{x, y} + \iprod{x, x} \\\\
 &= \frac{\left(\iprod{x, y}\right)^2 \iprod{y, y}}{\left(\iprod{y, y}\right)^2} - 2 \frac{\left(\iprod{x, y}\right)^2}{\iprod{y, y}} + \iprod{x, x} \\\\
 &= \frac{\iprod{x, y}^2}{\iprod{y, y}} - 2 \frac{\iprod{x, y}^2}{\iprod{y, y}} + \iprod{x, x}\\\\
 \iff 0 &\leq \frac{\iprod{x, y}^2}{\iprod{y, y}} - 2 \frac{\iprod{x, y}^2}{\iprod{y, y}} + \iprod{x, x}\\\\
 \iff 0 &\leq -\frac{\iprod{x, y}^2}{\iprod{y, y}} + \iprod{x, x}\\\\
 \iff \frac{\iprod{x, y}^2}{\iprod{y, y}} &\leq \iprod{x, x}\\\\
\end{aligned}
\\]
Note that \\(0 \leq \iprod{x, y}^2\\) because \\(x, y \in \mathbb{R}^n\\). As such,
\\[
\begin{aligned}
 0 \leq \iprod{x, y}^2 &\leq \iprod{x, x}\iprod{y, y}\\\\
 \implies 0 \leq \sqrt{\iprod{x, y}^2} &\leq \sqrt{\iprod{x, x}\iprod{y, y}}\\\\
 \implies 0 \leq \left|\iprod{x, y}\right| &\leq \sqrt{\iprod{x, x}}\sqrt{\iprod{y, y}}\\\\
 \implies 0 \leq \left|\iprod{x, y}\right| &\leq \sqrt{||x||^2}\sqrt{||y||^2}\\\\
 \implies 0 \leq \left|\iprod{x, y}\right| &\leq ||x|| ||y||^2
\end{aligned}
\\]

We now have the Cauchy-Schwarz Inequality! 🙂.

