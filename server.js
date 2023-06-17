const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");
const rateLimit = require("express-rate-limit");
const { spawn } = require("child_process");
const app = express();
const port = 8443;
// Use body-parser
var corsOptions = {
  origin: "http://localhost:9443/",
  optionsSuccessStatus: 200,
};

var bodyParser = require("body-parser");
// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/public/angular-python-pi/";
app.use(express.static(distDir));

function getRoot(request, response) {
  response.sendFile(path.resolve(distDir + "index.html"));
}

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to API calls only

app.get("/", getRoot, apiLimiter);

https
  .createServer(
    {
      key: fs.readFileSync("./server.key"),
      cert: fs.readFileSync("./server.crt"),
    },
    app
  )
  .listen(port, () =>
    console.log(`Example app listening on port 
${port}!`)
  );
