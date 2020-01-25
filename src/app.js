const routesUser = require("./routes/user.router");
const routesVehicle = require("./routes/vehicle.router");
const routesCliente = require("./routes/cliente.router");
const routesEndereco = require("./routes/endereco.router");
const routesConstructions = require("./routes/constructionWork.router");
const routesDirigiu = require("./routes/dirigiu.router");
const routesMotorista = require("./routes/motorista.router");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const port = process.env.PORT || "3000";
const host = process.env.PORT || "localhost";

app.disable("x-powered-by");

app.use(
  bodyParser.json({
    limit: "50mb"
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/", routesUser);
app.use("/", routesVehicle);
app.use("/", routesCliente);
app.use("/", routesConstructions);
app.use("/", routesEndereco);
app.use("/", routesEndereco);
app.use("/", routesDirigiu);
app.use("/", routesMotorista);
app.use((req, res, next) => {
  res.status(404);
  res.send(ERRORS.NOT_FOUND);
});

app.listen(port, () =>
  console.info(`The Web Server is Listening at http://${host}:${port}`)
);

module.exports = app;
//module.exports.find();
