const router = require("express").Router();

/**
 * @openapi
 * /logout:
 *   get:
 *     summary: Завершить сессию пользователя
 *     tags:
 *       - Auth
 *     responses:
 *       302:
 *         description: Редирект на главную страницу
 */
router.get("/", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("cookieName");
    res.redirect("/");
  });
});

module.exports = router;
