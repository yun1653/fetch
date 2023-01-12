const express = require('express');
const cors = require('cors');
const app = express();

let id = 2;
const todoList = [
  {
    id: 1,
    text: '할일1',
    done: false,
  },
];

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); /// for parsing application/x-www-form-urlencoded.

app.get('/api/todo', (req, res) => {
  res.json(todoList);
});

app.post('/api/todo', (req, res) => {
  const { text, done } = req.body;
  console.log('req.body : ', req.body);
  todoList.push({
    id: id++,
    text: text,
    done: done,
  });
  return res.send('success!');
});

const PORT = 10615;
app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 서버가동`);
});
