# Working With mdbook's Markdown

## MathJax

`mdbook` uses MathJax to render \\(\LaTeX\\)-like math. It isn't as powerful as full \\(\LaTeX\\).

<table>
  <tr><th><code>\\(</code>, <code>\\)</code></th>  <td>Enter/exit <b>inline</b> math mode. Note the double-backslash!</td></tr>
  <tr><th><code>\\[</code>, <code>\\]</code></th>  <td>Enter/exit <b>block</b> math mode.</td></tr>
</table>

For example, to write \\(e^{i\theta} = \cos \theta + i \sin \theta\\) in both block and inline math mode,
```md
In inline mode, \\(e^{i\theta} = \cos \theta + i \sin\theta\\).

Below this line, in block mode,
\\[
  e^{i\theta} = \cos\theta + i\sin\theta
\\]
```

...which gives us...
<div style = "border: 1px solid grey; border-radius: 5px; padding: 4px;">

In inline mode, \\(e^{i\theta} = \cos \theta + i \sin\theta\\).

Below this line, in block mode,
\\[
  e^{i\theta} = \cos\theta + i\sin\theta
\\]

</div>

If we want to stack equations, we use `\\[\begin{aligned} ... \end{aligned}\\]`. For example,

\\[
\begin{aligned}
         & 5 + x &= x + 5\\\\
 \implies& 5     &=     5
\end{aligned}
\\]

...is...

```tex

\\[
\begin{aligned}
         & 5 + x &= x + 5\\\\
 \implies& 5     &=     5
\end{aligned}
\\]
```

Note that the `&` characters are used for alignment and we use **four** back-slashes to start a new line.

This section is unfinished. For now, please reference [`src/week_1/cs_inequality_derivation.md`](https://github.com/MAT334A/lecture-notes/blob/main/src/week_1/cs_inequality_derivation.md?plain=1).

## Including Files

```md
\{{#include file.md}}
```

[`mdbook` lets you include files](https://rust-lang.github.io/mdBook/format/mdbook.html). Like a C-language `#include`, `mdbook` just removes our include statement and inserts the contents of the file we specify.

## Embedding Graphs

We can embed graphs from [`Desmos`](https://www.desmos.com/calculator) via its `embed` feature.

To do this,
 * Click the `share` icon in `Desmos`
![](./clicking_share_in_desmos.png)

 * Click "embed" and copy the `<iframe ... />`. This `<iframe />` can be pasted directly into a (`mdbook`) markdown file.
![](./desmos_embed_what_to_copy.png)

By default, Desmos graphs don't have a hide/show (or a play/pause button for interactive graphs). As such, I like to put graphs in a dropdown by surrounding their `iframe` with `<details>` and `</details>`. Let's see an example:
```html
<details>
<iframe src="https://www.desmos.com/calculator/sgy4fdiswd?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</details>
```

gives us

<details>
<iframe src="https://www.desmos.com/calculator/sgy4fdiswd?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</details>

Let's give the dropdown a descriptive title (which, unfortunately, is difficult to include MathJax in):
```html
<details><summary>Show Graph</summary>
<iframe src="https://www.desmos.com/calculator/sgy4fdiswd?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</details>
```

...which gives us...
<details><summary>Show Graph</summary>
<iframe src="https://www.desmos.com/calculator/sgy4fdiswd?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</details>

**When embedding graphs, it is very useful to adjust the `window` (under `Graph Settings`)!**

