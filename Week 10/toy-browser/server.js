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
  #container{
    display:flex;
    width:500px;
    height:300px;
    background-color: rgb(255,255,255);
  }
  #container #myid{
    width:200px;
    height:100px;
    background-color: rgb(255,0,0);
  }
  #container .c1{
    flex:1;
    background-color: rgb(0,255,0);
  }
  </style>
</head>
<body>
  <div id="container">
    <div id="myid"/>
    <div class="c1" />
  </div>
</body>
</html>`
      );
    });
};

const server = http.createServer(requestListener);
server.listen(8088);
console.log(`server start on 8088`)
