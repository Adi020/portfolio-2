export function observeProjects(projects) {
  let projectsFeatured = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.replace("project-hidden", "project-active");
        } else {
          entry.target.classList.replace("project-active", "project-hidden");
        }
      });
    },
    { rootMargin: "0px -60% 0px -40%" }
  );

  projects.forEach((project) => {
    projectsFeatured.observe(project);
  });
}
