const express = require("express");
const app = express();
const courses = [
  {id: 1, name: "国語"},
  {id: 2, name: "英語"},
  {id: 3, name: "理科"},
  {id: 4, name: "数学"},
  {id: 5, name: "社会"},
];

app.get('/api/courses', (request, response) => {
  response.send(courses);
});

// サイトのPORTを指定
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
