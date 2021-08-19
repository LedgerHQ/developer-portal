const sections = document.querySelectorAll("h2, h3, h4");
const navLi = document.querySelectorAll(".sidebar-toc ul li");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      formatedLi = li.innerText.toUpperCase().replaceAll(" ", "-").replaceAll(",", "").replaceAll("(", "").replaceAll(")", "");
      if (formatedLi.split('\n')[0] == current.toUpperCase()) {
        li.classList.add("active");
      }
    });
  });
