const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM transactions",
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
});

router.post("/", (req, res) => {
  const { book_id, quantity, type } = req.body;

  db.query(
    "INSERT INTO transactions(book_id,quantity,type) VALUES(?,?,?)",
    [book_id, quantity, type],
    (err) => {
      if (err) return res.status(500).json(err);

      if (type === "ADD") {
        db.query(
          "UPDATE books SET quantity = quantity + ? WHERE id=?",
          [quantity, book_id]
        );
      } else {
        db.query(
          "UPDATE books SET quantity = quantity - ? WHERE id=?",
          [quantity, book_id]
        );
      }

      res.json({ message: "Transaction Added" });
    }
  );
});

module.exports = router;