// eslint-disable-next-line
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db;

MongoClient.connect(
  "mongodb+srv://admin:1234qwer@cluster0.pmf8r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  function (err, client) {
    if (err) {
      return console.log("DB연결에러");
    }
    db = client.db("management");
    // db.collection("customer").insertOne(
    //   {
    //     name: "홍길동",
    //     image: "https://placeimg.com/64/64/1",
    //     birth: "961122",
    //     gender: "남자",
    //     job: "학생",
    //   },
    //   function (err, result) {
    //     console.log("저장완료");
    //   }
    // );
    app.listen(5000, function () {
      console.log("Success DB Connect");
      console.log("listening on 8080");
    });
  }
);

app.get("/api/customers", (req, res) => {
  db.collection("customer")
    .find()
    .toArray(function (err, result) {
      console.log(result);
      res.send(result);
    });
});

app.get("/", (req, res) => {
  res.send("fdas");
});
