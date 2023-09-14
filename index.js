const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoRoutes = require('./routes/TodoRoutes');
const HabitRoutes = require('./routes/HabitRoutes');
const DaylyRoutes = require('./routes/DaylyRoutes');

require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a la base de datos exitosa!');
}).catch(err => {
  console.error('Error de conexión a la base de datos:', err);
});

app.use(TodoRoutes);
app.use(HabitRoutes);
app.use(DaylyRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
