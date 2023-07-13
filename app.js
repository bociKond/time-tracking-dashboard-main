const navContainer = document.querySelector(".sidebar-navigation");
const infoElements = document.querySelectorAll(".info");

navContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("nav-link")) {
    const targetId = event.target.getAttribute("data-target");

    infoElements.forEach((info) => {
      if (info.id === targetId) {
        info.style.display = "flex";
      } else {
        info.style.display = "none";
      }
    });
  }
});
