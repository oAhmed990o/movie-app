const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

const JWT_SECRET = "serry-geddan";
const port = 3000;

let mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/movie-app";

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

require("./UserDetails");
const Users = mongoose.model("users");

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("server is running!");
});

app.post("/register", async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  const alreadyExists = await Users.findOne({ username: username });
  const matchedPasswords = password === confirmPassword;

  if (!username || !password || !confirmPassword) {
    return res
      .status(400)
      .send("Missing username, password, or confirmPassword in request body");
  }

  if (alreadyExists) {
    return res.send("User already exists!");
  } else if (!matchedPasswords) {
    return res.send("Passwords don't match!");
  }

  try {
    await Users.create({
      username: username,
      password: password,
      picUrl: "",
      favourites: [],
    });
    res.send({ status: "success", data: "User created!" });
  } catch (err) {
    res.send({ status: "error", data: err });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Missing username or password in request body");
  }

  const searchedUser = await Users.findOne({ username: username });

  if (!searchedUser) {
    return res.send("User doesn't exist!");
  }

  if (await bcrypt.compare(password, searchedUser.password)) {
    const token = jwt.sign({ username: searchedUser.username }, JWT_SECRET);
    return res.send({ status: "success", data: token });
  }
});
