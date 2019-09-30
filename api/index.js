const express = require("express");
const path = require("path");
const fs = require("fs");
const http = require("http");
const proxy = require("express-http-proxy");
const PORT = process.env.PORT || 443;

const app = express();

const cert = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson_com.crt")
);
const ca = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson_com.ca-bundle")
);
const key = fs.readFileSync(
  path.join(__dirname, "./certs", "/aidanlowson.key")
);

//  X-Forwarded-Proto header field to be trusted so its value can be used to determine the portocol.
app.enable("trust proxy");

const httpsOptions = {
  key: key,
  cert: cert,
  ca: ca
};

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Answer API requests.
app.get("/api", function(req, res) {
  res.set("Content-Type", "application/json");
});

// app.use(
//   "/",
//   proxy("https://www.aidanlowson.com", {
//     https: true
//   })
// );

app.use(function(req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect("https://www.aidanlowson.com" + req.url);
  }
});

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

//  Use proxy to send traffic from http -> https

http
  .createServer(httpsOptions, app)
  .listen(PORT, () =>
    console.log(`listening on port http://localhost:${PORT}`)
  );
