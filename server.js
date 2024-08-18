const app = require("./app");
const port = 4000;

app.get("/", (req, res) => {
  res.send(`server berjalan di port ${port}`);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
