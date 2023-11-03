const submitButton = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

submitButton.onclick = (event) => {
  event.preventDefault();

  const inputElements = document.querySelectorAll(".arr");
  const data = [];

  inputElements.forEach(function (input) {
    const label = input.getAttribute("data-form");
    const value = input.value;
    data.push({ label, value });
  });

  outBlock.innerHTML = "";

  data.forEach(function (item) {
    const p = document.createElement("p");
    p.textContent = `${item.label}: ${item.value}`;
    outBlock.appendChild(p);
  });
}