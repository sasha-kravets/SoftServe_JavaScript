const downloadBtn = document.getElementById("downloadBtn");
const authorsList = document.getElementById("authorsList");

downloadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("/getBooks");
    const data = await response.json();

    data.forEach(book => {
      const listItem = document.createElement("li");
      listItem.textContent = book.author;
      authorsList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching books:", error);
  }
});