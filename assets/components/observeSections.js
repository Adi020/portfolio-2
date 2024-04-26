export function observeSections(sections, links) {
	let observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					links.forEach((link) => {
						link.classList.remove("active");
					});
					document
						.querySelector(`header nav a.list__link[href="#${entry.target.id}"]`)
						.classList.add("active");
					history.pushState(null, "", `#${entry.target.id}`);
					entry.target.classList.add("show-animate");
					entry.target.classList.remove("hidden-animate");
				} else {
					entry.target.classList.replace("show-animate", "hidden-animate");
				}
			});
		},
		{ rootMargin: "-60% 0px -40% 0px" }
	);

	sections.forEach((section) => {
		observer.observe(section);
	});
}