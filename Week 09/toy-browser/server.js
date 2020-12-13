const http = require("http");

const requestListener = (request, response) => {
  let body = [];
  request
    .on("error", (err) => {
      console.log(err);
    })
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log("body:", body);
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(
`<html s maaa=a >
<head>
  <style>
  body div #myid{
    width:100px;
    background-color: #ff5000;
  }
  body div img{
    width:30px;
  }
  </style>
</head>
<body>
  <div>
    <img id="myid"/>
    <img />
  </div>
</body>
</html>`
      );
    });
};

const server = http.createServer(requestListener);
server.listen(8088);
console.log(`server start on 8088`)
