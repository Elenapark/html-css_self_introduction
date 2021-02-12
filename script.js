const navbarMenu = document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

const upToTop = document.querySelector(".contact__upBtn");
const home = document.querySelector("#home");
upToTop.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});
