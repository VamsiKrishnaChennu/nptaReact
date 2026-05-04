const { userModel } = require('../model/user.model');

const login = async (req, res, next) => {
    console.log("entering controller")
    const { email, pwd } = req.body;
    const data = await userModel.findOne({email})
        .then((data) => {
            console.log(data)
            if(!data || data.password !== pwd) {
                return res.status(401).json({message: "Invalid credentials"})
            }
            res.status(200).json({message: "Login successfull", data})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "Error occurred", error: err })
        });
}

const register = async (req, res, next) => {
    console.log("req body", req.body.username, req.body.email, req.body.pwd);
    const { username, email, pwd } = req.body;
    console.log(username, email, pwd);
    
    //userId creation
    const timestamp = Date.now().toString();
    const mid = Math.floor(timestamp.length / 2);
    const firstHalf = timestamp.slice(0, mid);
    const secondHalf = timestamp.slice(mid);
    const userId = `${firstHalf}${username.slice(0,3)}${secondHalf}`;
    console.log(userId);
    
    const data = await userModel.create({
        uid: userId,
        username: username,
        email: email,
        password: pwd,
        createdAt: timestamp,
        updatedAt: timestamp
    })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(500).json({ message: "Error occurred", error: err })
    })
}

module.exports = { login, register };
