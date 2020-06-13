const jwt = require("jsonwebtoken");

const authLogIn = (req, res, next) => {
  const token = req.header("token-backend");

  if (!token)
    return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "myToken");
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};

module.exports = authLogIn
