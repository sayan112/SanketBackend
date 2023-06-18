const dotenv = require("dotenv");
// dotenv.config();
 console.log(dotenv.config());
 module.exports={
    PORT:process.env.PORT
 }
  console.log(process.env.PORT);