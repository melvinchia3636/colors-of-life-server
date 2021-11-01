const express = require('express');
const app = express();

cors = require('cors');
bodyParser = require('body-parser');
mysql = require('mysql');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

db = mysql.createConnection({
  host: 'thecodeblog.net',
  user: 'thecodeb_thecodeb',
  password: 'redaxe3636',
  database: 'thecodeb_colorsoflife'
});

app.get('/exhibition/:id', (req, res) => {
  db.query(`SELECT * from exhibition WHERE id LIKE '_${req.params.id}__'`, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Data list fetched successfully"
    })
  })
});

app.get('/winner/:group/:category', (req, res) => {
  const groups = ['Logo设计比赛', '吉祥物设计比赛'];
  const categories = ['甲', '乙', '丙'];

  db.query(`SELECT * from winner WHERE group_='${groups[req.params.group]}' AND category='${categories[req.params.category]}'`, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Data list fetched successfully"
    })
  })
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});