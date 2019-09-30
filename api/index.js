const express = require("express");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;
// const hostname = "aidanlowson.com";

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Answer API requests.
app.get("/api", function(req, res) {
  res.set("Content-Type", "application/json");
});

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

http.get("*", (req, res, next) => {
  if (req.protocol === "http") {
    res.redirect(res.redirect("https://" + req.headers.host + req.url));
    //  'https://aidanlowson.com'
  }
});

http
  .createServer(app)
  .listen(PORT, () =>
    console.log(`listening on port https://localhost:${PORT}`)
  );

// const cert = fs.readFileSync(
//   path.join(__dirname, "./certs", "/aidanlowson_com.crt")
// );
// const ca = fs.readFileSync(
//   path.join(__dirname, "./certs", "/aidanlowson_com.ca-bundle")
// );
// const key = fs.readFileSync(
//   path.join(__dirname, "./certs", "/aidanlowson.key")
// );

// const httpsOptions = {
//   key: key,
//   cert: cert,
//   ca: ca
// };

/* simple redirect middleware  */
// app.use(function(req, res, next) {
//   if (req.secure) {
//     // request was via https, so do no special handling
//     next();
//   } else {
//     // request was via http, so redirect to https
//     res.redirect("https://" + req.headers.host + req.url);
//   }
// });

//  Redirect?
// if (req.protocol === 'http') {
//   http.get('*', function(req, res) {
//     res.redirect('https://' + req.headers.host + req.url);
//     //  'https://aidanlowson.com'
//   });
// }
