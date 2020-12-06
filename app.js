const express = require("express");
const mysql = require("mysql");
const db = require("./db/index.js");

const app = express();

app.set("port", 3000);

app.get("/messages", (req, res) => {
  db.connection.query(`SELECT * FROM messages`, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

app.get("/users", (req, res) => {
  db.connection.query(`SELECT * FROM users`, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));
