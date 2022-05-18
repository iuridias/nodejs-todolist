const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const conn = require('./db/conn');
const PORT = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true
  }),
  express.json(),
  express.static('public')
);

conn.sync()
  .then(() => app.listen(PORT, () => console.log(`Executando API na porta ${PORT}.`)))
  .catch(error => console.log(error));