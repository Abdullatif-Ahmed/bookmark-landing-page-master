let openNav = document.getElementById("open-nav");
let closeNav = document.getElementById("close-nav");
let tabsLi = document.querySelectorAll(".tabs li");
let tabBoxes = document.querySelectorAll(".tab-box");
let questions = document.querySelectorAll(".question-tab-heading");
let newsletterInp = document.getElementById("newsletter-inp");
let newsletterBtn = document.getElementById("newsletter-btn");
openNav.addEventListener("click", (e) => {
  e.preventDefault;
  document.querySelector(".header-content nav").classList.add("open");
});
closeNav.addEventListener("click", (e) => {
  e.preventDefault;
  document.querySelector(".header-content nav").classList.remove("open");
});
tabsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    tabsLi.forEach((li) => {
      li.classList.remove("active");
    });
    tabBoxes.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    document.getElementById(e.target.dataset.id).classList.add("active");
  });
});
questions.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      document
        .getElementById(e.currentTarget.dataset.id)
        .classList.remove("active");
    } else {
      questions.forEach((el) => {
        el.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      document.querySelectorAll(".question-tab-answer").forEach((el) => {
        el.classList.remove("active");
      });
      document
        .getElementById(e.currentTarget.dataset.id)
        .classList.add("active");
    }
  });
});
newsletterBtn.addEventListener("click", (e) => {
  e.preventDefault;
  if (document.querySelector(".inp-gr .error")) {
    document.querySelector(".inp-gr .error").remove();
  }
  if (newsletterInp.value === "") {
    let error = document.createElement("span");
    error.className = "error";
    error.appendChild(document.createTextNode("Whoops, this can't be empty"));
    document.querySelector(".inp-gr").appendChild(error);
  } else if (!/\w+@\w+\.\w+/gi.test(newsletterInp.value)) {
    let error = document.createElement("span");
    error.className = "error";
    error.appendChild(
      document.createTextNode("Whoops, make sure it's an email")
    );
    document.querySelector(".inp-gr").appendChild(error);
  }
});
