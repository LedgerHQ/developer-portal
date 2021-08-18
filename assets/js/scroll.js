const sections = document.querySelectorAll("h2, h3");
const navLi = document.querySelectorAll(".sidebar-toc ul li");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.innerText.toUpperCase() == current.toUpperCase()) {
        li.classList.add("active");
      }
    });
  });
