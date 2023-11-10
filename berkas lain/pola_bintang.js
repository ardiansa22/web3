const express = require("express");
const app = express();

const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const form = `
    <html>
    <head>
        <title>Pola Bintang</title>
    </head>
    <body>
        <h1>Masukan Perulangan :</h1>
        <form method="post" action="/hasil-pola">
            <input type="number" name="repetitions">
            <input type="submit" value="Hasil">
        </form>
    </body>
    </html>
    `;
  res.send(form);
});

app.post("/hasil-pola", function (req, res) {
  const repetitions = parseInt(req.body.repetitions, 10);

  // Code for the right-angled triangle
  const rightAngledTriangle = [];
  for (let i = 1; i <= repetitions; i++) {
    let row = "* ".repeat(i);
    rightAngledTriangle.push(row);
  }

  // Code for the inverted triangle
  const invertedTriangle = [];
  for (let i = repetitions; i >= 1; i--) {
    let row = "* ".repeat(i);
    invertedTriangle.push(row);
  }

  const html = `
    <html>
    <head>
        <title>Pola Bintang</title>
    </head>
    <body>
        <h2>Ini Segitiga:</h2>
        <pre>${rightAngledTriangle.join("\n")}</pre>
        <h2>Ini Segitiga Terbalik:</h2>
        <pre>${invertedTriangle.join("\n")}</pre>
    </body>
    </html>
    `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`terdapat pada port ${port}`);
});
