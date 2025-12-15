const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    // Token format: Bearer tokenvalue
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;  // contains { id: userId }
    next();

  } catch (error) {
    res.json({ success: false, message: "Invalid token" });
  }
};

module.exports = auth;
