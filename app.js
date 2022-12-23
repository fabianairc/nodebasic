const express = require("express");
const server = express();
server.get("/", function (req, res) {
  res.send("express y node js");
  res.end;
});

/*const EventEmitter = require("events");
const emiter = new EventEmitter();
emiter.on("mi evento", function (args) {
  console.log("escuchando", args);
});
emiter.emit("mi evento", { id: 1, mensaje: "hola" });*/

/*const http = require("http");
http
  .createServer(function (request, response) {
    response.write("servidor Node.js");
    response.end;
  })
  .listen(3000);

//const fs = require("fs");
/*fs.writeFile("nuevo.txt", "Hello Node.js", (err) => {
  if (err) throw err;
  console.log("The file has been snaved!");
});*/

/*fs.readFile("./nuevo.txt", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});*/
