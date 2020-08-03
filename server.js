// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ========================= FRONT END ROUTES
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// ============================= API ROUTES

app.get("/api/reservations", (req, res) => {
  res.send("this will display all the reservations");
});

app.get("/api/tables", (req, res) => {
  res.send("this will display all the tables");
});

app.listen(PORT, function () {
  console.log(`app listening at http://localhost:${PORT}`);
});
