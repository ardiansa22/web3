const express = require("express");
const app = express();

const port = 3000;

app.get("/:username", function (req, res) {
  const username = req.params.username;
  const slice = username.slice(2,3);
  res.send(`Hello, ${slice}!`);
});
app.post("/post", (req, res) => {
  
  res.send(`Hello post`);
});
app.put("/put", (req, res) => {
  
  res.send(`Hello put`);
});
app.patch("/patch", (req, res) => {
  
  res.send(`Hello patch`);
});
app.delete("/delete", (req, res) => {
  
  res.send(`Hello delete`);
});


app.listen(port, () => {
  console.log(`terdapat pada port ${port}`);
});
