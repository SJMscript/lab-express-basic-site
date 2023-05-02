const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Ejectuando codigo");
  next();
});
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/photoGallery", (req, res) => {
  res.sendFile(__dirname + "/views/photoGallery.html");
});

const port = 3000;
app.listen(port, () => {
  console.log("Leyendo puerto 3000");
});
