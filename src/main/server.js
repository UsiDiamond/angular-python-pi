const compression = require('compression');
const express = require("express");
const path = require("path");
const { spawn } = require("child_process");
const app = express();
const port = 8080;
// Use body-parser
var bodyParser = require("body-parser");
// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "../../../dist/angular-python-pi/";
app.use(express.static(distDir));

function getRoot(request, response) {
    response.sendFile(path.resolve(distDir + 'index.html'));
 }
app.get('/', getRoot);

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
  res.status(200).json({ status: "UP" });
});

app.get("/cgi-gateway/script1", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", ["script1.py"]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});
app.listen(port, () =>
  console.log(`Example app listening on port 
${port}!`)
);
