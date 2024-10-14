import express from "express";
import "dotenv/config";

const app = express();
app.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}.`);
});

app.route("/").get((req, res) => {
  res.send("<h1>Hello World!!</h1>");
});
