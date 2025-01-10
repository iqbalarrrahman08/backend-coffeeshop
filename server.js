<<<<<<< HEAD
const app = require("./app");
const port = 4000;

app.get("/", (req, res) => {
  res.send(`server berjalan di port ${port}`);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
=======
const app = require("./app");
const port = 4000;

app.get("/", (req, res) => {
  res.send(`server berjalan di port ${port}`);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
>>>>>>> b5a97a875d677f2ea7415ac64ad45b7e11c273f3
