
export function handleShowProjectsClick(e, portfolioContainer, showDegradiant) {
    let altura = portfolioContainer.scrollHeight;

    if (portfolioContainer.classList.contains("hidden__projects")) {
        portfolioContainer.classList.replace("hidden__projects", "show__projects");
        portfolioContainer.style.maxHeight = altura + 40 + "px";
        portfolioContainer.parentNode.lastElementChild.childNodes[0].nodeValue =
            "Ver Menos";
    } else {
        portfolioContainer.classList.replace("show__projects", "hidden__projects");
        portfolioContainer.style.maxHeight = "700px";
        portfolioContainer.parentNode.lastElementChild.childNodes[0].nodeValue =
            "Ver Más";
    }
    showDegradiant.classList.toggle("fadeout");
}
