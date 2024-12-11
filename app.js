const http = require("http");
const fs = require("fs");


const index = fs.readFileSync("index.html");

const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// connect to arduino port
const port = new SerialPort({ path: "/dev/cu.usbserial-110", baudRate: 9600 });

// parse binary data
const parser = new ReadlineParser({
  delimiter: "\r\n",
});

port.pipe(parser);
parser.on("data", console.log);

// create a server
let app = http.createServer((req, res) => {
  res.writeHead(200, { Content_type: "text/html" });
  res.end(index);
});

const io = require("socket.io")(app);

// init socket
io.on("connection", (socket) => {
  socket.on("lights", (data) => {
    port.write(data.status);
    console.log(data);
  });
});

app.listen(3000);
