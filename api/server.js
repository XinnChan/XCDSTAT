const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");
const http = require("http");

const port = 8080;
const indexPath = path.join(__dirname, "../index.html"); // Adjust the path according to the project structure
const index = fs.readFileSync(indexPath, "utf8");

const handler = function (req, res) {
  if (req.url === "/dstat") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("dstat endpoint");
  } else if (req.url === "/favicon.ico") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(index);
  }
};

const server = http.createServer(handler);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.send("Connected to WebSocket server");
  // Here you can handle incoming messages and send updates
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the server for Vercel
module.exports = server;
