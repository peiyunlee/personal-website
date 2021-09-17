import data from "./data.js";

let url = location.href;
let id = 4;

if (url.indexOf("?") != -1) {
  let urlData = url.split("?");
  id = urlData[1].split("=")[1];
}

function setMainImg() {
  let element = document.getElementById("mainImg");

  element.setAttribute("src", work.infoImgUrl);
}

function setColor() {
  let element = document.getElementById("wrapper-info-other");

  element.style["background-color"] = `${work.color}`;
}

function renderTag() {
  let element = document.getElementById("tag");
  let list = "";

  work.infoTag.forEach((item, index) => {
    list += `<div class="info__tag">${item}</div>`;
  });

  element.innerHTML = list;
}

function setLink() {
  let element = document.getElementById("link");
  
  if(work.link === undefined) {
    element.style["display"] = "none";
    return;
  }

  if (work.link.type === "website") element.textContent = "View Website";
  else if (work.link.type === "video") element.textContent = "View Video";

  element.setAttribute("href", work.link.url);
}

function renderInfo() {
  let element = document.getElementById("info");
  let list = "";

  list += `<div class="info__title">${work.title}</div>`;
  list += `<p class="short-info">${work.shortInfo.join("<br>")}</p>`;

  element = document.getElementById("mainInfo");

  work.info.forEach((item, index) => {
    if (item.type === "text") {
      list += `<p>${item.content}</p>`;
    } else if (item.type === "imgUrl") {
      list += `<img src="${item.content}" alt="">`;
    } else if (item.type === "title") {
      list += `<div class="main-info__title">- ${item.content} -</div>`;
    }
  });

  element.innerHTML = list;
}

let work;

if (id < data.length) {
  work = data[id];
} else {
  work = data[0];
}

setMainImg();
renderTag();
setLink();
setColor();
renderInfo();
