import data from "./data.js";

const filterType = ["All", "Front-end", "UI/UX", "Game"];

let listElement;
let list = "";

filterType.forEach((item, index) => {
  list += `<div id="${"filter" + index}" class="works-nav__item">${item}</div>`;
});

listElement = document.querySelector(".works-nav");
listElement.innerHTML = list;

filterType.forEach((item, index) => {
  let filterBtn = document.getElementById("filter" + index);

  filterBtn.addEventListener("click", function (event) {
    FilterWorks(event.target.innerHTML);
  });
});

function FilterWorks(filter = filterType[0]) {
  let filter_works = data;

  if (filter !== filterType[0]) {
    filter_works = data.filter((item) => item.typeTag.includes(filter));
  } else {
    filter_works = data;
  }

  renderWork(filter_works);
}

function renderWork(works = data) {
  listElement = document.querySelector("#works-list");
  list = "";

  works.forEach((item, index) => {
    list += `<a href="./work.html?work=${index}"  id="${"work" + index}" class="wrapper-work">
      <div class="work__tag">${item.typeTag.join(" & ")}</div>
      <h3 class="work__title">《${item.title}》</h3>
      <p class="work__info">${item.shortInfo.join("<br>")}</p>
      <img src="${item.mainImgUrl}" alt="">
    </div>`;
  });

  listElement.innerHTML = list;

  works.forEach((item, index) => {
    let work = document.querySelector(`#${"work" + index}`);
    work.style["background-color"] = `${item.color}`;
  });
}

renderWork();
