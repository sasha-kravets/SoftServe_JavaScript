const body = document.body;
const oneClickBtn = document.getElementById("oneClickBtn");
const dblclickBtn = document.getElementById("dblclickBtn");
const mouseupBtn = document.getElementById("mouseupBtn");
const link = document.getElementById("link");

oneClickBtn.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

dblclickBtn.addEventListener("dblclick", () => {
  body.style.backgroundColor = "pink";
});

mouseupBtn.addEventListener("mousedown", () => {
  body.style.backgroundColor = "brown";
});

mouseupBtn.addEventListener("mouseup", () => {
  body.style.backgroundColor = "white";
});

link.addEventListener("mouseover", () => {
  body.style.backgroundColor = "yellow";
});

link.addEventListener("mouseout", () => {
  body.style.backgroundColor = "white";
});