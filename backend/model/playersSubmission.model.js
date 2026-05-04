const mongoose = require('mongoose');

const playerSubmissionSchema = mongoose.Schema({
    playerId: { type: String, required: true },
    gameId: { type: String, required: true },
    round: [
        {
            roundNumber: { type: Number, required: true },
            alphabet: { type: String, required: true },
            response: {
                name: { type: String, required: true },
                place: { type: String, required: true },
                animal: { type: String, required: true },
                thing: { type: String, required: true }
            },
            score: { type: Number, required: true }
        }
    ]
})

const playerSubmissionModel = mongoose.model("playerSubmission", playerSubmissionSchema);

module.exports = { playerSubmissionModel };