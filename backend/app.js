const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./connections/mongo');
const login = require('./routes/user.route');
const { authMiddleware } = require('./auth');

connectDB();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    const publicRoutes = ['/login', '/register'];

    if (publicRoutes.includes(req.path)) {
        return next();
    }

    return authMiddleware(req, res, next);
});

app.use('/', login);



app.listen(PORT, () => {
    console.log('Server Running in port: ', PORT);
});
