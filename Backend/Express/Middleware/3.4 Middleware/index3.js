import express from "express";

const app = express();
const port = 3000;

const logger = function (req, res, next){
  console.log("logged...");
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
