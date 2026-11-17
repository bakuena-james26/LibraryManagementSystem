const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { title, author, genre, isbn, quantity } = req.body;

  db.query(
    "INSERT INTO books(title,author,genre,isbn,quantity) VALUES(?,?,?,?,?)",
    [title, author, genre, isbn, quantity],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Book Added" });
    }
  );
});

module.exports = router;