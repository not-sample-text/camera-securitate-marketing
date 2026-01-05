let lastScrollTop = 0;
let scrollTimeout;
const nav = document.querySelector(".nav");

window.addEventListener(
	"scroll",
	() => {
		clearTimeout(scrollTimeout);

		scrollTimeout = setTimeout(() => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop && scrollTop > 100) {
				// Scrolling down
				nav.classList.add("nav-hidden");
				nav.classList.remove("nav-visible");
			} else {
				// Scrolling up
				nav.classList.remove("nav-hidden");
				nav.classList.add("nav-visible");
			}

			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
		}, 10);
	},
	false
);
