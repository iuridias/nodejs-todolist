const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const conn = require('./db/conn');
const PORT = 3000;

//Models
const Task = require('./models/Task');

//Rotas
const taskRoutes = require('./routes/tasksRoutes');

//MIDDLEWARES
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(
  express.urlencoded({
    extended: true
  }),
  express.json(),
  express.static('public')
);

//DEFINIÇÃO DAS ROTAS
app.use('/tasks', taskRoutes);

conn.sync()
  .then(() => app.listen(PORT, () => console.log(`Executando API na porta ${PORT}.`)))
  .catch(error => console.log(error));