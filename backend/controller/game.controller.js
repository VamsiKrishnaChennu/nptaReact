const { userModel } = require('../model/user.model');

const mode = async (req, res, next) => {
    const {  } = req.body;

    //gameId creation
    const timestamp = Date.now().toString();
    const mid = Math.floor(timestamp.length / 2);
    const firstHalf = timestamp.slice(0, mid);
    const secondHalf = timestamp.slice(mid);
    const gameId = `${firstHalf}${username.slice(0,3)}${secondHalf}`;
    console.log(userId);

    const data = await userModel.create({

    })
        .then((data) => {
            console.log(data)
            res.status(200).json({message: "game created successfully", data})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "Error occurred", error: err })
        });
}

module.exports = { login, register };
