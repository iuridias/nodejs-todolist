const Task = require('../models/Task');

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }

  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false
    }

    //validações (caso necessário)
    //processar dados

    await Task.create(task);
    res.redirect('/tasks');
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    res.render('tasks/all', { tasks });
  }

  static async removeTask(req, res) {
    const id = req.body.id;

    await Task.destroy({ where: { id: id } });
    res.redirect('/tasks');
  }

  static async editTask(req, res) {
    const id = req.params.id;

    const task = await Task.findOne({ raw: true, where: { id: id } });

    res.render('tasks/edit', { task });
  }

  static async editTaskSave(req, res) {
    const id = req.body.id;
    const task = {
      title: req.body.title,
      description: req.body.description
    }

    await Task.update(task, { where: { id: id } });

    res.redirect('/tasks')
  }

  static async showTask(req, res) {
    const id = req.params.id;

    const task = await Task.findOne({ raw: true, where: { id: id } });

    res.render('tasks/task', { task });
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id;

    const task = await Task.findOne({ raw: true, where: { id: id } });

    let done = !task.done;

    const taskStatusUpdate = {
      done
    }

    await Task.update(taskStatusUpdate, { where: { id: id } });

    res.redirect('/tasks');

  }
}