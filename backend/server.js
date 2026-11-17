const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", require("./routes/books"));
app.use("/users", require("./routes/users"));
app.use("/transactions", require("./routes/transactions"));

app.get("/", (req, res) => {
  res.send("Library API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});