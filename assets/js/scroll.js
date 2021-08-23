const sections = document.querySelectorAll("h2, h3, h4");
const tocLinks = document.querySelectorAll(".sidebar-toc a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    tocLinks.forEach((link) => {
      link.classList.remove("active");
      linkTitle = link.innerText.toUpperCase().replaceAll(" ", "-").replaceAll(",", "").replaceAll(".", "").replaceAll("?", "").replaceAll("/", "").replaceAll("(", "").replaceAll(")", "");
      if (linkTitle == current.toUpperCase()) {
        link.classList.add("active");
      }
    });
  });
