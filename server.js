// eslint-disable-next-line
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birth: "961122",
      gender: "남자",
      job: "학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "김주호",
      birth: "950807",
      gender: "남자",
      job: "프로그래머",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "송상윤",
      birth: "950802",
      gender: "남자",
      job: "사람",
    },
  ]);
});

app.get("/", (req, res) => {
  res.send("fdas");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
