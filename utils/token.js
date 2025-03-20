const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.role,
    id: userInfo._id,
  };

  const token = jwt.sign(payload, "efguywefweufdfedefhweufvfgeheiojwejdvtydgioxkdghwefdewfrefg", {
    expiresIn: "5m",
  });

  return token;
};

exports.verifyToken = (token) => {};
