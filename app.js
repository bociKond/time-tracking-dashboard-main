// const dailyLink = document.getElementsByClassName("daily");
// const weeklyLink = document.getElementsByClassName("weekly");
// const monthlyLink = document.getElementsByClassName("monthly");

// const dailyInfo = document.getElementById("daily");
// const weeklyInfo = document.getElementById("weekly");
// const monthlyInfo = document.getElementById("monthly");

// dailyLink.onclick = function () {
//   dailyInfo.style.display = "flex";
//   weeklyInfo.style.display = "none";
//   monthlyInfo.style.display = "none";
// };

// weeklyLink.onclick = function () {
//   dailyInfo.style.display = "none";
//   weeklyInfo.style.display = "flex";
//   monthlyInfo.style.display = "none";
// };

// monthlyLink.onclick = function () {
//   dailyInfo.style.display = "none";
//   weeklyInfo.style.display = "none";
//   monthlyInfo.style.display = "flex";
// };

// Get reference to the navigation bar container
const navContainer = document.querySelector(".sidebar-navigation");

// Get references to the dashboard information elements
const infoElements = document.querySelectorAll(".info");

// Add click event listener to the navigation bar container
navContainer.addEventListener("click", (event) => {
  event.preventDefault();

  // Check if a navigation link was clicked
  if (event.target.classList.contains("nav-link")) {
    const targetId = event.target.getAttribute("data-target");

    // Toggle the visibility of the corresponding information element
    infoElements.forEach((info) => {
      if (info.id === targetId) {
        info.style.display = "flex";
      } else {
        info.style.display = "none";
      }
    });
  }
});
