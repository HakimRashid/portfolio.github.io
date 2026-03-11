const sidebar = document.querySelector("aside");
const sidebarNavItems = Array.from(sidebar.querySelector("ul").children);
const sections = Array.from(document.querySelectorAll("section"));

sidebarNavItems.forEach((item) =>
  item.addEventListener("click", () => {
    const activeItems = sidebar.querySelector(".active");
    item.classList.add("active");
    activeItems.classList.remove("active");
  }),
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sidebarNavItems.forEach((link) => link.classList.remove("active"));

        const activeLink = sidebar.querySelector(
          `a[href="#${entry.target.id}"]`,
        );

        activeLink?.parentElement.classList.add("active");
      }
    });
  },
  { threshold: 0.6 },
);

sections.forEach((section) => observer.observe(section));
