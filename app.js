const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

const PageTransition = () => {
  //Button click active class
  sectBtn.forEach((section) => {
    section.addEventListener("click", (event) => {
      const button = event.target;
      sectBtn.forEach((btn) => btn.classList.remove("active-btn"));
      button.classList.add("active-btn");
    });
  });

  //Section Active class
  allSections.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      event.target.classList.add("active");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
};

PageTransition();
