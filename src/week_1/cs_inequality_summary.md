# The Cauchy-Schwarz Inequality

{{#include ../tex_common.md}}

\\[
\left|\left\<x, y\right\>\right| \leq ||x|| \cdot ||y||
\\]

Some say it is the most important theorem in mathematics.

## Oh, and about \\(\iprod{x, y}\\) ...

Throughout these notes, we will use the notation \\(\iprod{x, y}\\) to refer to the **inner product** or **dot product** (or even sometimes the **scalar product**) of two vectors \\(x, y \in\R^n\\). In other contexts, the notation \\(x \cdot y\\) is common, but the former is the notation that will be used. ~~And if you're used to the other way, too bad for you.~~

The inner product \\(\iprod{x, y}\\) with components \\(x_i\\) and \\(y_i\\) for \\(1 \le i \le n\\) is given by

\\[
    \sum_{i = 1}^n x_iy_i    
\\]

The **norm** or **magnitude** of a vector \\(x\\), which can traditionally be understood as its length, is written as \\(\norm{x}\\), and can be defined as:

\\[
    \norm{x} = \sqrt{\iprod{x, x}}
\\]

Note that as \\(\iprod{x, x} = \sum_{i = 1}^n x_i^2\\), the square root is valid, and therefore \\(\norm{x}\\) is always non-negative.

### Simple Inner Product Identities (other than Cauchy-Schwarz)

These can be proved by a simple application of the definition of the inner product! In these identities, \\(x, y \in\R^n\\) and \\(n\\) is a real number. You might receive a consolation prize if you struggle with proving the first one.

- \\(\iprod{x, y} = \iprod{y, x}\\)
- \\(\iprod{x + y, z} = \iprod{x, z} + \iprod{y, z}\\)
- \\(\iprod{nx, y} = n\iprod{x, y}\\)