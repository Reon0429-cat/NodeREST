const express = require('express');
const app = express();
app.use(express.static("web"));

// http://localhost:3000/api/v1/list にアクセスしてきたときにTODOリストを返す
app.get('/api/v1/list', (req, res) => {
    const todoList = [
      {title: 'JavaScriptを勉強する', done: true},
      {title: 'Node.jsを勉強する', done: false},
      {title: 'Web APIを作る', done: false}
    ];
    res.json(todoList);
});

app.listen(3000, () => console.log('Listening on port 3000'));