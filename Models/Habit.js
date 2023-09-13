const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
    name: String,
    description: String
});

const HabitModel = mongoose.model("habits", HabitSchema);

module.exports = HabitModel;
