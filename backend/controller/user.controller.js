const bcrypt = require('bcryptjs');
const { userModel } = require('../model/user.model');
const { generateToken } = require('../auth');

const login = async (req, res, next) => {
    try {
        const { email, pwd } = req.body;

        if (!email || !pwd) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await userModel.findOne({ email: email.trim().toLowerCase() });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(pwd, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user);

        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                uid: user.uid,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error occurred', error: err.message });
    }
};

const register = async (req, res, next) => {
    try {
        const { username, email, pwd } = req.body;

        if (!username || !email || !pwd) {
            return res.status(400).json({ message: 'Username, email and password are required' });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const existingUser = await userModel.findOne({ email: normalizedEmail });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const timestamp = Date.now().toString();
        const mid = Math.floor(timestamp.length / 2);
        const firstHalf = timestamp.slice(0, mid);
        const secondHalf = timestamp.slice(mid);
        const userId = `${firstHalf}${username.slice(0, 3)}${secondHalf}`;
        const hashedPassword = await bcrypt.hash(pwd, 10);

        const user = await userModel.create({
            uid: userId,
            username: username.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            createdAt: timestamp,
            updatedAt: timestamp
        });

        const token = generateToken(user);

        return res.status(201).json({
            message: 'Registration successful',
            token,
            user: {
                uid: user.uid,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error occurred', error: err.message });
    }
};

module.exports = { login, register };
