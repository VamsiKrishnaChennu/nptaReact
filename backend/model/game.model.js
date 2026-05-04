const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    gameId: { type: String, required: true },
    players: { type: Array, required: true },
    lettersPlayed: { type: Array, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date }
})

const gameModel = mongoose.model("game", gameSchema);

module.exports = {gameModel};