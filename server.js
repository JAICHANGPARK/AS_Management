const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) =>{
//     res.send({message:'Hello Express ! '});
// })

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/any",
      name: "홍길동",
      birthday: "911222",
      gender: "남자",
      job: "대학생"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "박보검",
      birthday: "911222",
      gender: "남자",
      job: "대학생"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/1",
      name: "송혜교",
      birthday: "911222",
      gender: "여자",
      job: "대학생"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
