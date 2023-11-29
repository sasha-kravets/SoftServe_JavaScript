const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/vote', (req, res) => {
  const responseData = {
    date: new Date().toString()
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});