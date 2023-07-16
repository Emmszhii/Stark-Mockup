const categoryBtn = document.querySelector(".Categories");
const categorySpan = document.querySelector(".Categories span");
const categArrow = document.querySelector(".Categories .fa-chevron-down");
const categList = document.querySelector(".Categories .sub__list");

// libraries
const btnLibraryHome = document.querySelector("#home");
const btnLibraryCollections = document.querySelector("#collections");
const allCategory = document.querySelectorAll(".library__content__item");
const categHome = document.querySelectorAll(".library__content__item.home");
const categCollections = document.querySelectorAll(
  ".library__content__item.collections"
);

const clearAllCateg = () => {
  allCategory.forEach((item) => {
    item.classList.remove("active");
  });
};

btnLibraryHome.addEventListener("click", () => {
  clearAllCateg();
  categHome.forEach((item) => {
    console.log(item);
    item.classList.add("active");
  });
});

btnLibraryCollections.addEventListener("click", () => {
  clearAllCateg();
  categCollections.forEach((item) => {
    item.classList.add("active");
  });
});

const onClickCategory = () => {
  categArrow.classList.toggle("active");
  categList.classList.toggle("active");
  categorySpan.classList.toggle("active");
};

categoryBtn.addEventListener("click", onClickCategory);
