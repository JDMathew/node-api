const express = require("express"); // Get express package into this file - allows you to create routs
const mongoose = require("mongoose"); // Get mongoose package into this file
const bodyParser = require("body-parser");
const app = express(); //executes express (typical way of doing this)
require("dotenv/config");

// Middlewares
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute); // middle where to say, when you go to posts, use the PostsRoutes

//authentication can go here.
// app.use("/posts", () => {
//   console.log("This is a middleware running");
// });

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB!")
);

// To start listening ot the server
app.listen(3000);

// console.log()
