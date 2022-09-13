const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
    humorRating: Number
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;