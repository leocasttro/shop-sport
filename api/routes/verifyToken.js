const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(401).json('Token invalido');
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('Não possui autenticação');
  }

  return console.log('Deu certo');
};

const verifyTokenAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Erro, não é administrador');
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Erro, não é administrador');
    }
  });
};

module.exports = { verifyToken, verifyTokenAuth, verifyTokenAndAdmin };
