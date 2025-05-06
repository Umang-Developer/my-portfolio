function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


  function toggleDescription(button) {
    const desc = button.parentElement.nextElementSibling;
    if (desc.style.display === "none" || desc.style.display === "") {
      desc.style.display = "block";
      button.textContent = "Show Less";
    } else {
      desc.style.display = "none";
      button.textContent = "Show More";
    }
  }
