const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const {
    name,
    membership_id,
    role,
    username,
    password
  } = req.body;

  db.query(
    "INSERT INTO users(name,membership_id,role,username,password) VALUES(?,?,?,?,?)",
    [name, membership_id, role, username, password],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User Added" });
    }
  );
});

module.exports = router;