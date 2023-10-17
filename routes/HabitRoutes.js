const express = require('express');
const router = express.Router();
const HabitModel = require('../Models/Habit');

router.get('/get-habits', (req, res) => {
    HabitModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

router.post('/add-habit', (req, res) => {
    const habit = req.body.habit;
    console.log(habit); // Verificar los datos recibidos
    HabitModel.create({
        name: habit
    })
    .then(result => res.json(result))
    .catch(err => {
        console.error(err); // Registrar el error en el servidor
        res.status(500).json({ message: 'An error occurred' }); // Enviar un mensaje genérico al cliente
    });
});

router.put('/update-habit/:id', (req, res) => {
    const { id } = req.params;
    HabitModel.findByIdAndUpdate({_id: id }, { done: true })
      .then(result => res.json(result))
      .catch(err => res.json(err));
});

router.delete('/delete-habit/:id', (req, res) => {
    const { id } = req.params;
    HabitModel.findByIdAndDelete({_id: id })
      .then(result => res.json(result))
      .catch(err => res.json(err));
});

module.exports = router;

