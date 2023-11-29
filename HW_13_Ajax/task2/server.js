const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/getBooks", (req, res) => {
  fs.readFile("books.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading books.json:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const books = JSON.parse(data);
    res.json(books);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});