// const express = require("express");
// const app = express();
// const PORT=3000;
// // respond with "hello world" when a GET request is made to the homepage
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.listen(PORT);

const express = require("express");
const PORT = 3000;
const app = express(); // create a express server object
app.get("/home", (request, response) => {
  // response.send( "hi there, welcome to get");
  response.json({
    message: "OK get req it is ",
  });
});

app.post("/home", (request, response) => {
  // response.send("hi there, welcome to post");
  response.json({
    message: "OK post req , it is ",
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
