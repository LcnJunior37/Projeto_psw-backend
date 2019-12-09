const express = require("express");
const routesUser = require("./routes/userRoutes.js");
const app = express();

app.use("/users", routesUser);
app.use(express.json());
const port = process.env.PORT || "3000";
app.listen(port, () => {
  console.log("running on port" + port);
});
