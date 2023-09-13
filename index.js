const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoRoutes = require('./routes/TodoRoutes');
const HabitRoutes = require('./routes/HabitRoutes');
const DaylyRoutes = require('./routes/DaylyRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

mongoose.connect('mongodb://127.0.0.1:27017/prodlist');

app.use(TodoRoutes);
app.use(HabitRoutes);
app.use(DaylyRoutes);

app.listen(3001, () => {
  console.log("server is Running");
});