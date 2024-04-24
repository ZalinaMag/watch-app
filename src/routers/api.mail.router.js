const mailRouter = require("express").Router();
const mailer = require("../mailer");

mailRouter.post("/", (req, res) => {
  if (!req.body.email) return res.sendStatus(400);
  const message = {
    to: req.body.email,
    subject: "Ваша заявка оформлена! С вами свяжется наш менеджер",
    html: `
        <h2>Приветствуем USERNAME!</h2>

        <i>Вы оформили завяку на сайте watchcustom.com со следующими данными:</i>
        <ul>
            <li>login: ${req.body.email}</li>
            <li>ЕЩЕ ЧТО-ТО</li>
        </ul>
        <p>Данное письмо не требует ответа.<p>`,
  };
  mailer(message);
});

module.exports = mailRouter;
