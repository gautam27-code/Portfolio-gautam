const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-img");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      var image = elem.getAttribute("data-image");
      // If image is missing, try src attribute (for Gautam)
      if (!image || image.startsWith("blob:")) {
        image = elem.getAttribute("src");
      }
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

// Page 4 tab functionality
function setupPg4Tabs() {
  var tabs = document.querySelectorAll(".pg4-tab");
  var desc = document.getElementById("pg4-desc");
  var img = document.querySelector(".pg4img");
  tabs.forEach(function (tab, idx) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tab.classList.add("active");
      desc.textContent = tab.getAttribute("data-text");
      // Change image based on tab index
      if (idx === 0) {
        img.src = "page4img.webp";
      } else if (idx === 1) {
        img.src = "pg4img-2.jpg";
      } else if (idx === 2) {
        img.src = "pg4img3.jpg";
      }
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav h1");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = "0%";
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4000);
}

document.addEventListener("DOMContentLoaded", function () {
  setupPg4Tabs();
  page3Animation();
  swiperAnimation();
  menuAnimation();
  loaderAnimation();
});


