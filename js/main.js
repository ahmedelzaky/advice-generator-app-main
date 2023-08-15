const api = "https://api.adviceslip.com/advice";
let id = document.querySelector("#qoute-id");
let advice = document.querySelector(".advice-content");
let icon = document.querySelector(".icon-box");

async function getData() {
  let res = await fetch(api);
  let data = await res.json();
  updateUi(data.slip);
}

function updateUi(qoute) {
  console.log(qoute);
  id.textContent = qoute.id;
  advice.textContent = qoute.advice;
}

getData();

setInterval(() => {
  getData();
}, 5000);

icon.addEventListener("click", () => {
  window.location = "https://www.linkedin.com/in/ahmed-el-zaki/";
});
