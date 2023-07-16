const categoryBtn = document.querySelector(".Categories");
const categArrow = document.querySelector(".Categories .fa-chevron-down");
const categList = document.querySelector(".Categories .sub__list");

const onClickCategory = () => {
  categArrow.classList.toggle("active");
  categList.classList.toggle("active");
};

categoryBtn.addEventListener("click", onClickCategory);
