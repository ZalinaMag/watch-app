const removeHeaderFunc = (req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
};

module.exports = removeHeaderFunc;
