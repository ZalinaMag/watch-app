// npm install nodemailer --save

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "pokopera@mail.ru",
      pass: "D2uPdbcyJRyCEvFpnKUM",
    },
  },
  {
    from: "Mailer Test <pokopera@mail.ru>",
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

module.exports = mailer;
//--------------------------------------------------------------------
// const mailer = require("./mail");

// router.post("/mail", (req, res) => {
//   if (!req.body.email) return res.sendStatus(400);
//   const message = {
//     to: req.body.email,
//     subject: "Ваша заявка оформлена! С вами свяжется наш менеджер",
//     html: `
//         <h2>Приветствуем USERNAME!</h2>

//         <i>Вы оформили завяку на сайте watchcustom.com со следующими данными:</i>
//         <ul>
//             <li>login: ${req.body.email}</li>
//             <li>ЕЩЕ ЧТО-ТО</li>
//         </ul>
//         <p>Данное письмо не требует ответа.<p>`,
//   };
//   mailer(message);
// });
