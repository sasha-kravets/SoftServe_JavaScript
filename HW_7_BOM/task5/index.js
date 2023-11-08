const button = document.getElementById("liveBtn");
const messagesList = document.getElementById("messages");

function addMessage(text) {
  const message = document.createElement("li");
  message.textContent = text;
  messagesList.appendChild(message);
}

button.addEventListener("click", () => {
  addMessage("I was pressed!");
});

button.addEventListener("mouseover", () => {
  addMessage("Mouse on me!");
});

button.addEventListener("mouseout", () => {
  addMessage("Mouse is not on me!");
});