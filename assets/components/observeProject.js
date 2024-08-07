export function observeProject(projects) {
  let projectsFeatured = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        let ProjectImgMobile = entry.target.querySelector(
          ".a .project__img img"
        );
        let bgModalMobile = entry.target.querySelector(".a .d");

        let btnMobile = bgModalMobile.querySelector("a");

        let projectImgDesktop = entry.target.querySelector(
          ".project__content .project__img img"
        );

        let bgModalDesktop = entry.target.querySelector(
          ".project__content .project__technologies"
        );

        let iconsProjectsDesktop = entry.target.querySelector(
          ".project__content .project__technologies-list"
        );
        console.log(iconsProjectsDesktop);

        if (entry.isIntersecting) {
          console.log("vista");
          ProjectImgMobile.classList.add("scale-anim");
          bgModalMobile.classList.add("bg-anim");
          btnMobile.classList.add("btn-anim");
          projectImgDesktop.classList.add("scale-anim");
          bgModalDesktop.classList.add("bg-anim");
          iconsProjectsDesktop.classList.add("show-slide");
        } else {
          ProjectImgMobile.classList.remove("scale-anim");
          bgModalMobile.classList.remove("bg-anim");
          btnMobile.classList.remove("btn-anim");
          projectImgDesktop.classList.remove("scale-anim");
          bgModalDesktop.classList.remove("bg-anim");
          iconsProjectsDesktop.classList.remove("show-slide");
        }
      });
    },
    { rootMargin: "-40% 0px -20% 0px" }
  );

  projects.forEach((project) => {
    projectsFeatured.observe(project);
  });
}
