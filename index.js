const express = require("express");
const dotenv = require("dotenv");
const upload = require("./middleware/upload.middleware");

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 3030;

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.post("/uploads", upload.single("file"), (req, res) => {
  //   res.json({ message: "File uploaded successfully!" });
  res.send("File uploaded successfully!");
});

app.get("/", (req, res) => {
  res.render("form");
});

app.listen(PORT, () => {
  console.log(`Express server started at PORT ${PORT}`);
});
