const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "mySuperSecretKey";

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.adminToken;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.adminId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = verifyAdmin;
