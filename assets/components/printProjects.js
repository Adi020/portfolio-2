function printProjects(projects, check) {
  function printProjects() {
    const projectsDOM = document.querySelector(".portfolio__content");
    let htmlProjects = "";

    projects.map((project, i) => {
      if ((i + 1) % 2 === 0) {
        htmlProjects += `
        <article class="portfolio__item">
        <div class="portfolio__body">
          <h3 class="portfolio__title">
            <span class="portfolio__tag">${project.projectName.slice(
          0,
          project.projectName.indexOf(" ")
        )}</span> ${project.projectName.slice(
          project.projectName.indexOf(" ")
        )}
          </h3>
          <p class="portfolio__text">
            <span class="portfolio__info hidden-info">
              ${project.projectText}
            </span>
            <span class="viewMore">
              Show More<i class="bx bx-chevron-up"></i
            >
              </span>
          </p>
        </div>
        <div class="portfolio__img">
          <img src="../assets/img/mask.webp" alt="image" />
          <img
            class="ellipse__left"
            src="../assets/img/EllipseProyects.png"
            alt="image"
          />
          <div class="project__desktop right">
            <div class="project__img">
              <img src="${project.projectDesktopImg}" alt="project image" />
            </div>
          </div>
          <div class="project__mobile right">
            <div class="project__img">
              <img src="${project.projectMobileImg}" alt="project image" />
            </div>
          </div>
        </div>
      </article>`;
      } else {
        htmlProjects += `
        <article class="portfolio__item">
        <div class="portfolio__body">
          <h3 class="portfolio__title">
            <span class="portfolio__tag">${project.projectName.slice(
          0,
          project.projectName.indexOf(" ")
        )}</span> ${project.projectName.slice(
          project.projectName.indexOf(" ")
        )}
          </h3>
          <p class="portfolio__text">
            <span class="portfolio__info hidden-info">
              ${project.projectText}
            </span>
            <span class="viewMore">
              Show More<i class="bx bx-chevron-up"></i
            >
              </span>
          </p>
        </div>
        <div class="portfolio__img">
          <img src="../assets/img/mask.webp" alt="image" />
          <img
            class="ellipse__right"
            src="../assets/img/EllipseProyects2.png"
            alt="image"
          />
          <div class="project__desktop left">
            <div class="project__img">
              <img src="${project.projectDesktopImg}" alt="project image" />
            </div>
          </div>
          <div class="project__mobile left">
            <div class="project__img">
              <img src="${project.projectMobileImg}" alt="project image" />
            </div>
          </div>
        </div>
      </article>`;
      }

    });

    projectsDOM.innerHTML = htmlProjects;
  }
  printProjects();

  let showText = document.querySelectorAll(".viewMore");

  showText.forEach((text) =>
    text.addEventListener("click", function (e) {
      let spanElement = this;
      if (
        spanElement.previousElementSibling.classList.contains("hidden-info")
      ) {
        spanElement.previousElementSibling.classList.remove("hidden-info");
        spanElement.childNodes[0].nodeValue = check.checked
          ? "Show Less"
          : "Mostrar Menos";
      } else {
        spanElement.previousElementSibling.classList.add("hidden-info");
        spanElement.childNodes[0].nodeValue = check.checked
          ? "Show More"
          : "Mostrar Más";
      }
    })
  );
}

export default printProjects;
