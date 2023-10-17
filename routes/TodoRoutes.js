const express = require('express');
const router = express.Router();
const TodoModel = require ('../Models/Todo')

router.get('/get', (req, res) => {
  const page = parseInt(req.query.page) || 1; // Obtiene el número de página de los parámetros de consulta o establece un valor predeterminado
  const pageSize = parseInt(req.query.pageSize) || 10; // Obtiene el tamaño de página de los parámetros de consulta o establece un valor predeterminado

  TodoModel.find()
    .skip((page - 1) * pageSize) // Salta las páginas anteriores
    .limit(pageSize) // Limita los resultados a 'pageSize'
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.post('/add', (req, res) => {
  const task = req.body.task;
  console.log(task); // Verificar los datos recibidos
  TodoModel.create({
      task: task
  })
  .then(result => res.json(result))
  .catch(err => {
      console.error(err); // Registrar el error en el servidor
      res.status(500).json({ message: 'An error occurred' }); // Enviar un mensaje genérico al cliente
  });
});

router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  TodoModel.findByIdAndUpdate({_id: id }, { done: true })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  TodoModel.findByIdAndDelete({_id: id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;
