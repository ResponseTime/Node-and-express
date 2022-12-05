const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/test.html"));
});
// app.post("/login", (req, res) => {
//   let { name } = req.body;
//   if (name) {
//     res.send(`Hello ${name}`);
//   } else {
//     res.status(401).send("No name");
//   }
// });
app.get("/login", (req, res) => {
  let { name } = req.query;
  if (name) {
    res.send(`Hello ${name}`);
  } else {
    res.status(401).send("No name");
  }
});
app.listen(5000, () => console.log("5000"));
