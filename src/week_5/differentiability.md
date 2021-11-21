# Differentiability

{{#include ../tex_common.md}}

Hold on to your hats, because we're about to explore a new definition of differentiability that makes certain derivative rules a lot simpler to prove. 😄

> **The Usual Definition**
>
>We say \\(f: \R \to \R\\) is differentiable at some real \\(x\\) if \\(\lim\limits_{h \to 0} \frac{f(x + h) - f(x)}{h}\\) exists. If it exists, then we say that \\(f'(x) = \frac{d}{dx}f(x)\\) is the value of this limit.

## Horray for New Differentiability!

The definition we will use more frequently in this class is the following definition. 

\\(f: \R \to \R\\) is differentiable at some real \\(x\\) if there exists some \\(f'(x)\\) and error function \\(E_x(h)\\) such that \\(f(x + h) = f(x) + f'(x)h + E_x(h)\\) and \\(\lim\limits_{h \to 0} \frac{E_x(h)}{h} = 0\\).

These two definitions are the same, just rearranged slightly. Neverless, this error definition makes it really easy to prove things like the Product Rule for differentiability.

## Product Rule, Chain Rule, Whatever Rule

Suppose that \\(f(x)\\) and \\(g(x)\\) are both differentiable. To evaluate the derivative of \\(f(x)g(x) = h(x)\\), we can find \\(f(x + h)g(x + h)\\) and write it in the error function form:

\\[f(x + h)g(x + h) = \left(f(x) + f'(x)h + E_f(h)\right)\left(g(x) + g'(x)h + E_g(h)\right) \\\\ = f(x)g(x) + g(x)f'(x)h + E_f(h)g(x) + f(x)g'(x)h + E_g(h)f(x) \\\\ + f'(x)g'(x)h^2 + f'(x)hE_g(h) + g'(x)hE_f(h) + E_f(h)E_g(h)\\]

But note that as \\(h\\) approaches \\(0\\), the terms \\(E_f(h)g(x) + E_g(h)f(x) + f'(x)g'(x)h^2 + f'(x)hE_g(h) + g'(x)hE_f(h) + E_f(h)E_g(h)\\) all approach \\(0\\) faster than \\(h\\), implying that this term can be an error term of \\h(x)\\). Therefore, \\(h(x + h) = h(x) + (f'(x)g(x) + f(x)g'(x))h + E_h(x)\\), implying that \\(h'(x) = f'(x)g(x) + f(x)g'(x)\\), as expected.

Similarly, now consider \\(f(g(x)) = h(x)\\). To find the derivative of \\(h(x)\\), we write \\(h(x + h)\\) in the error function form:

\\[f(g(x + h)) = f(g(x) + g'(x)h + E_g(h)) \\\\ = f(g(x)) + f'(g(x))(g'(x)h + E_g(h)) + E_f(g'(x)h + E_g(h)) \\\\ = f(g(x)) + f'(g(x))g'(x)h + E_h(x)\\]

as everything else vanishes faster than \\(h\\), and we find that \\(\frac{d}{dx}f(g(x)) = f'(g(x))g'(x)\\).

## Maxima and Minima

As a further exercise, let us show that if \\(f: \R \to \R\\) has a local maximum \\(x_0\\), then \\(f'(x_0) = 0\\). We define a local maximum as there is some \\(\epsilon > 0\\) such that if \\(0 < |x - x_0| < \epsilon\\), then \\(f(x_0) - f(x) \ge 0\\).

For a contradiction, suppose that \\(f'(x_0) > 0\\), and a similar argument will demonstrate the impossibility of \\(f'(x_0) < 0\\). The error function definition of differentiability tells us that \\(f(x_0 + h) = f(x_0) + f'(x_0)h + E(h)\\). By the definition of a local maximum, if \\(0 < h < \epsilon\\), then \\(f(x_0 + h) \le f(x_0)\\). Therefore, we have \\(f'(x_0)h + E(h) \le 0\\) and therefore \\(E(h) \le -f'(x_0)h\\) and \\(\frac{E(h)}{h} \le -f'(x_0)h < 0\\). Therefore, \\(\frac{E(h)}{h}\\) cannot converge to \\(0\\), contradicting the definition of the error function.

Therefore, we have \\(f'(x_0) = 0\\). A similar argument shows the same thing for \\(x_0\\) a local minimum.