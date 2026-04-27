const jwt = require("jsonwebtoken");

function authAdmin(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ succes: false, message: "Token manquant" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ succes: false, message: "Token invalide" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ succes: false, message: "Accès refusé" });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      succes: false,
      message: "Session expirée, reconnecte-toi",
    });
  }
}

module.exports = authAdmin;
