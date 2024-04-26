import { observeProjects } from "./observeProjects.js";

function printFeaturedProjects(projects, check) {
	function printProjects() {
		const projectsDOM = document.querySelector(".featured__content");
		let htmlProjects = "";

		projects.map((project, i) => {
			htmlProjects += `
      <div class="swiper-slide">
          <div id="${i + 1}" class="featured__item project-hidden">
            <div class="featured__img">
              <img src="${project.projectImg}" alt="image" />
            </div>
            <div class="featured__body">
              <h3 class="featured__title">${project.projectName}</h3>
              <p class="featured__text">
                ${project.projectText}
              </p>
              <a
                class="featured__link"
                target="_blank"
                href="${project.link}"
                >Sitio Web<i class="bx bx-right-top-arrow-circle"></i
              ></a>
            </div>
          </div>
        </div>`;
		});

		projectsDOM.innerHTML = htmlProjects;
	}
	printProjects();
	let featuredProjects = document.querySelectorAll(".featured__item");
	observeProjects(featuredProjects)
}


export default printFeaturedProjects;
