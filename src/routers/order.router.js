const orderRouter = require('express').Router();
const multer = require('multer');
const storage = require('../../multer');
const { Order, User } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const OrderPage = require('../views/OrderPage.jsx');
const mailer = require('../mailer');

orderRouter.get('/', (req, res) => {
  renderTemplate(OrderPage, {}, res);
});

const upload = multer({ storage });

// сохранение в БД
orderRouter.post('/submit', upload.single('image'), async (req, res) => {
  const {
    name, email, phone, comment,
  } = req.body;
  console.log('here', req.body);
  try {
    const user = await User.findOne({ where: { email } });
    console.log('user', user);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const newOrder = await Order.create({
      name,
      userId: user.id,
      phone,
      details: comment,
      img: req.file.path,
    });
    console.log(newOrder);
    const message = {
      to: email,
      subject: 'Ваша заявка оформлена!',
      html: `
        <h2>Приветствуем, ${name}!</h2>
        <p>Вы оформили заявку на сайте watchcustom.com. Ваш заказ был принят со следующими данными:</p>
        <ul>
            <li>Имя: ${name}</li>
            <li>Email: ${email}</li>
            <li>Телефон: ${phone}</li>
            <li>Комментарий: ${comment}</li>
        </ul>
        <p>Мы скоро свяжемся с вами для подтверждения заказа.</p>
        <p>Спасибо за ваш выбор!</p>
      `,
    };

    mailer(message);

    res.send('Заказ сохранен и подтверждение отправлено на вашу электронную почту.');
  } catch (error) {
    console.error('Ошибка при сохранении заказа:', error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = orderRouter;
