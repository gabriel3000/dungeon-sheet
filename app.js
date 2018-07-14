var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './',
  port: 8080,
  cors: '*',
});

server.start(function () {
  console.log("\x1b[43m","\x1b[30m",'Server listening to', server.port,"\x1b[0m");
});

server.on('request', function (req, res) {
  console.log("\x1b[36m","Request: "+req.path,"\x1b[0m");
});

server.on('response', function (req, res, err, file, stat) {
  if(req.status){
    console.log("\x1b[1m",req.status,"\x1b[0m");
  }
  if (err != null) {
    console.log("\x1b[1m",res.headers,"\x1b[0m");
  }
});
