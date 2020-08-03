// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "./tables.json"));
});
app.post("/api/tables", function (req, res) {
  let savedTables = JSON.parse(fs.readFileSync("./tables.json", "utf8"));
  let newTable = req.body;
  // let uniqueID = savedNotes.length + 1;
  // newNote.id = uniqueID;
  savedTables.push(newTable);
  fs.writeFileSync("./tables.json", JSON.stringify(savedTables));
  console.log("Reservation saved. Content: ", newTable);
  res.json(savedTables);
});
// app.get("/api/waitlist", function (req, res) {
//   res.sendFile(path.join(__dirname, "./waitlist.json"));
// });
// app.post("/api/tables", function (req, res) {
//   let savedTables = JSON.parse(fs.readFileSync("./tables.json", "utf8"));
//   let newTable = req.body;
//   // let uniqueID = savedNotes.length + 1;
//   // newNote.id = uniqueID;
//   savedTables.push(newTable);
//   fs.writeFileSync("./tables.json", JSON.stringify(savedTables));
//   console.log("Reservation saved. Content: ", newTable);
//   res.json(savedTables);
// });
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.listen(PORT, function () {
  console.log(`app listening at http://localhost:${PORT}`);
});