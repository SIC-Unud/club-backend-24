const { Router } = require("express");

const authRouter = Router();

authRouter.use(function (req, res, next) {
  const user = req.body.user;

  // Jika user tidak mengirimkan data user, kembalikan pesan error
  if (typeof user == 'undefined') {
    res.json({ message: "OOPS! Anda bukan user toko buku!" });
  } else {
    next();
  }
});

module.exports = { authRouter }