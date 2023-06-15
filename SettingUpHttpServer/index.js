// creating with HTTP mode module 
const http = require('http');
const PORT = 3000;
// This function returns a serve sanketsingh8670.ongraphy.com an argument.
// This function created a server objec server

const server = http.createServer(function listener (req,res) {

// request → we will be able to details of incoming http request object
// * response → we will be able to configure what response we need to send
// for an incoming http request object

// this callback is a kind of listener function that is going to collect
// every http request that we will make to our server

// TODO
if(req.url == '/home'){
// if we make a request on /home this if block will be executed
console.log(req.method);
res.write("first res");
res.write("second res");
res.end("completed");

}
console.log("Request received");
});
server.listen(PORT, function exec() {
 console.log("server is running on port " + PORT);
});
// once we succesfully boot up the server on the given port, this callback will be
// executed.