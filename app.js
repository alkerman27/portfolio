const container = document.querySelectorAll(".container");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

const navItems = {
  home: selectElementByClass("control-1"),
  projects: selectElementByClass("control-2"),
  skills: selectElementByClass("control-3"),
  contact: selectElementByClass("control-4"),
};

function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}

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
        btn.classList.remove("active-btn");
      });

      const element = document.getElementById(id);
      element.classList.add("active-btn");
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
};

PageTransition();

//observing scrolling
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const navItem = navItems[entry.target.id];
        // add 'active' class on the navItem
        navItem.classList.add("active-btn");
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navItems).forEach((item) => {
          if (item != navItem) {
            item.classList.remove("active-btn");
          }
        });
      }
    });
  },
  {
    threshold: 0.7,
  }
);

container.forEach((con) => {
  observer.observe(con);
});
