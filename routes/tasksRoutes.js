const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router
  .get('/add', TaskController.createTask)
  .post('/add', TaskController.createTaskSave)
  .post('/remove', TaskController.removeTask)
  .get('/edit/:id', TaskController.editTask)
  .post('/edit', TaskController.editTaskSave)
  .get('/details/:id', TaskController.showTask)
  .post('/updatestatus', TaskController.toggleTaskStatus)
  .get('/', TaskController.showTasks)
;

module.exports = router;
