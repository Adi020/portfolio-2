export function handleLoadEvent(pointer) {
	let userAgent = window.navigator.userAgent;

	if (
		!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			userAgent
		)
	) {
		document.addEventListener("mousemove", (e) => {
			pointer.style.left = e.clientX + "px";
			pointer.style.top = e.clientY + "px";
		});
	}
}