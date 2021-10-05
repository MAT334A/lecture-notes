# Boolean Logic

{{#include ../tex_common.md}}

<!--
We use \\(math here\\) for inline math and \\[math here\\] for display/block math.
See https://rust-lang.github.io/mdBook/format/mathjax.html for details.
-->

## Boolean Logic
 We'll be using \\(\T\\), \\(\F\\), and the operators \\(\wedge, \vee\\), and \\(\neg\\).

### Summary of Notation
<table>
<tr><th>

\\(\T, \F\\)

</th><td>

`true`, `false`

</td></tr>
<tr><th>

\\(\wedge\\)

</th><td>

`and`

</td></tr>
<tr><th>

\\(\vee\\)

</th><td>

`or`

</td></tr>
<tr><th>

\\(\neg\\)

</th><td>

`not`

</td></tr>
<tr><th>

\\(\iff\\)

</th><td>

Bi-implication/"if and only if"

</td></tr>
</table>

\\(\vee\\) and \\(\wedge\\) are both associative and commutative. Generally, we let \\(\wedge\\) have higher precedence than \\(\vee\\) and \\(\neg\\) have higher precedence than \\(\\wedge\\). In this way,
\\[
    a \vee b \wedge \neg c \vee d = a \vee (b \wedge (\neg c)) \vee d
\\]

### Propositions

Also called sentences, propositions are statements that are either `true` or `false`. We'll be representing them with capital letters. For example, `A`.

### DeMorgan's Laws



## References
 - Lecture notes published for quiz section
 - Lecture
