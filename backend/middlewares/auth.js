import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({
      message: "Authorization required",
    });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, "CLAVE_SECRETA");

    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).send({
      message: "Invalid token",
    });
  }
};

export default auth;
