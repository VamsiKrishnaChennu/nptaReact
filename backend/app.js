const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./connections/mongo');
const login = require('./routes/user.route')
connectDB()
const PORT = process.env.PORT;
const app = express()
app.use(express.json());
app.use(cors())


app.use("/", login);



app.listen(PORT, () => {
    console.log("Server Running in port: ", PORT);
})
