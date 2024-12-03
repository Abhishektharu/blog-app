
// Protect routes with a JWT validation middleware.


const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res) => {
    const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    console.log("jwt user id : " + decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authMiddleware;