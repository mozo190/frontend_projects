import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(logger);

function logger(req, res, next) {
  console.log("Request method: " + req.method + " " + req.url);
  console.log("Request URL: " + req.url);
  next();
};

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Request URL: " + req.url);
  next();
} );

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
