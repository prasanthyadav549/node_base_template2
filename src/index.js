const express = require("express");
const { serverConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();
console.log("inside the index.js file ");
app.use(express.json()); // by default express doesn't know how to read the request body
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.listen(serverConfig.PORT, async () => {
  console.log("listening on port", serverConfig.PORT);
});
