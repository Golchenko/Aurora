//footer navigation

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.classList === "visible") {
      panel.classList.toggle("visible");
    } else {
      panel.classList.toggle("visible");
    }
  });
}


//mobile navigation menu

$(document).ready(function () {
  $(".burger").click(function (event) {
    $(
      ".site-nav__list,.header__background,.site-nav__close"
    ).toggleClass("site-nav--active");
  });
});

$(document).ready(function () {
  $(".site-nav__close").click(function (event) {
    $(
      ".site-nav__list,.header__background,.site-nav__close"
    ).toggleClass("site-nav--active");
  });
});


// mobile search

$(document).ready(function () {
  $(".search").click(function (event) {
    $(".header__search,.search-close").toggleClass("search--active");
    $(".header__background").toggleClass("site-nav--active");

  });
});

$(document).ready(function () {
  $(".search-close").click(function (event) {
    $(".header__search,.search-close").toggleClass("search--active");
    $(".header__background").toggleClass("site-nav--active");
  });
});

