require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

// Ignore favicon requests to prevent 404 errors in the console
app.get("/favicon.ico", (req, res) => res.status(204).end());

const port = process.env.PORT || 9000;
app.listen(port, () => console.log("Backend listening on", port));
