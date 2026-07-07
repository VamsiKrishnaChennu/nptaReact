const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    gameId: { type: String, required: true },
    mode: { 
        type: String, 
        enum: ['single', 'multiple'],
        required: true 
    },
    player: {
        type: String,
        required: function () {
            return this.mode === "single";
        }
    },
    players: {
        type: [String],
        required: function () {
            return this.mode === "multiple";
        },
        validate: {
            validator: function (value) {
                if (this.mode === "multiple") {
                    return value.length > 1;
                }
                return true;
            },
            message: "Multiple mode requires at least 2 players"
        }
    },
    lettersPlayed: { type: [String], required: true },
    status: { type: String, required: true },
    createdAt: { type: Date }
})

const gameModel = mongoose.model("game", gameSchema);

module.exports = {gameModel};