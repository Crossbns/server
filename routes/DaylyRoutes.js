const express = require('express');
const router = express.Router();
const DayliesModel = require('../Models/Dayly');

router.get('/get-Daylies', (req, res) => {
    DayliesModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

router.post('/add-Daylies', (req, res) => {
    const Daylies = req.body.Daylies;
    console.log(Daylies); // Verificar los datos recibidos
    DayliesModel.create({
        name: Daylies
    })
    .then(result => res.json(result))
    .catch(err => {
        console.error(err); // Registrar el error en el servidor
        res.status(500).json({ message: 'An error occurred' }); // Enviar un mensaje genérico al cliente
    });
});

router.put('/update-Daylies/:id', (req, res) => {
    const { id } = req.params;
    DayliesModel.findByIdAndUpdate({_id: id }, { done: true })
      .then(result => res.json(result))
      .catch(err => res.json(err));
});

router.delete('/delete-Daylies/:id', (req, res) => {
    const { id } = req.params;
    DayliesModel.findByIdAndDelete({_id: id })
      .then(result => res.json(result))
      .catch(err => res.json(err));
});

module.exports = router;
