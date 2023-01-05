$(".main-info-title").click(function () {
  $(this).addClass("hero").siblings().removeClass("hero");
  $(".main-info-right-side").hide().eq($(this).index()).fadeIn(0);
});

$(".slider-container").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
});

//choose lang
var languages = {
  en: "EN",
  ru: "RU",
  ua: "UA",
};

var DEFAULT_LANGUAGE = "en";

var menuElem = document.getElementById("dropdown-menu-lang");
var titleElem = menuElem.querySelector(".title-lang");

// Set currently selected value (English in our case)
function selectOption(optionName) {
  titleElem.dataset.language = optionName;
  titleElem.innerText = languages[optionName];
}
selectOption(DEFAULT_LANGUAGE);

// Handle dropdown opening
titleElem.onclick = function () {
  menuElem.classList.toggle("open");
};

// Handle selecting new language
var optionsHolter = menuElem.querySelector("ul");
optionsHolter.onclick = function (event) {
  menuElem.classList.remove("open");
  console.log(event.target.dataset.language);
  if (event.target.dataset && event.target.dataset.language) {
    selectOption(event.target.dataset.language);
  }
};
