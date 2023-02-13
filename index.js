const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
const port = 8091;
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
let answers = new Array();
app.post("/recive", function (req, res) {
  console.log(req.body.answer);
  answers.push(req.body.answer);
  console.log(answers);
  res.sendStatus(200);
});

app.get("/see", function (req, res) {
  res.send(answers);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
