<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const paymentRouter = require("./router");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/payment", paymentRouter);

module.exports = app;
=======
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const paymentRouter = require("./router");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/payment", paymentRouter);

module.exports = app;
>>>>>>> b5a97a875d677f2ea7415ac64ad45b7e11c273f3
