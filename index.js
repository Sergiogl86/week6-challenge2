require("dotenv").config();
const http = require("http");
const url = require("url");

const { suma, resta, multiplicación, division } = require("./calculator");

const server = http.createServer();

const port = process.env.WEEK6_CHALLENGE2 || 5000;

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

server.on("request", (request, response) => {
  const { a, b } = { ...url.parse(request.url, true).query };

  const path = url.parse(request.url, true).pathname;

  console.log(path);

  if (path !== "/calculator") {
    response.statusCode = 404;
    response.end();
  } else if (!Number.isNaN(+a) && !Number.isNaN(+b)) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write(`<h1>Semana 6 - challenge2</h1>
    <h2>${suma(a, b)}</h2>
    <h2>${resta(a, b)}</h2>
    <h2>${multiplicación(a, b)}</h2>
    <h2>${division(a, b)}</h2>
    `);
    response.end();
  } else {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write(`<h1>Semana 6 - challenge2</h1>
    <h2>El valor de a => ${a} o el valor de b => ${b} no son numeros!</h2>
    `);
    console.log("Error!");
    response.end();
  }
});
