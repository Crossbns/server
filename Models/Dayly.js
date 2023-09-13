const mongoose = require('mongoose');

const DayliesSchema = new mongoose.Schema({
    name: String,
    description: String
});

const DayliesModel = mongoose.model("Daylies", DayliesSchema);

module.exports = DayliesModel;
