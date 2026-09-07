const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'npta-secret-key';

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            uid: user.uid,
            username: user.username,
            email: user.email
        },
        JWT_SECRET,
        { expiresIn: '7d' }
    );
};

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
};

module.exports = {
    generateToken,
    authMiddleware,
    JWT_SECRET
};
