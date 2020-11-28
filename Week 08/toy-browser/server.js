const http = require("http");

const requestListener = (request, response) => {
  let body = [];
  request
    .on("error", (err) => {
      console.log(err);
    })
    .on("data", (chunk) => {
      body.push(chunk.toString());
    })
    .on("end", () => {
      body = (Buffer.concat([ Buffer.from(body.toString()) ])).toString();
      console.log("body:", body);
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("Hello, World!");
    });
};

const server = http.createServer(requestListener);
server.listen(8088);
console.log(`server start on 8088`)
