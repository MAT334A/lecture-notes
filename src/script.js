// Makes small tweaks to the UI's behavior.


// Before printing, expand all dropdowns.
window.addEventListener("beforeprint", () =>
{
    let dropdowns = document.querySelectorAll("details");

    for (let dropdown of dropdowns)
    {
        dropdown.setAttribute("open", true);
    }
});

