import data from "./data.js";

let url = location.href;
let id = 0;

if (url.indexOf("?") != -1) {
  let urlData = url.split("?")[1];
  id = urlData.split("=")[1];
}

console.log(data[id]);
