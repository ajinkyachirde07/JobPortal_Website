import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    // Try cookie first
    let token = req.cookies?.token;

    // Fallback: check Authorization header
    if (!token && req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1]; // "Bearer <token>"
    }

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    req.id = decode.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default isAuthenticated;
