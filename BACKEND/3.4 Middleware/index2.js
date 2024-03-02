import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Request URL: " + req.url);
  next();
} );

app.get("/", (req, res) => {
  res.send("Hello World");
} );

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(req.body);
} );

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
