const express = require("express");
const { PORT } = require("./config/index");
const apiRoutes = require("./routes");
console.log(PORT);
const app = express();
app.use("/api", apiRoutes);
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
