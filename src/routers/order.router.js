const orderRouter = require('express').Router();
const multer = require('multer');
const storage = require('../../multer');
const { Order, User } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const OrderPage = require('../views/OrderPage.jsx');
const mailer = require('../mailer');
const path = require('path');

/**
 * @openapi
 * /order:
 *   get:
 *     summary: Отобразить страницу оформления заказа
 *     tags:
 *       - Order
 *     responses:
 *       200:
 *         description: HTML-код страницы оформления заказа
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
orderRouter.get('/', (req, res) => {
  renderTemplate(OrderPage, {}, res);
});

const upload = multer({ storage });

// сохранение в БД
/**
 * @openapi
 * /order/submit:
 *   post:
 *     summary: Создать новый заказ
 *     tags:
 *       - Order
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               comment:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Заказ создан, email с подтверждением отправлен
 *       404:
 *         description: Пользователь не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */
orderRouter.post('/submit', upload.single('image'), async (req, res) => {
  const {
    name, email, phone, comment,
  } = req.body;
  // console.log('order', req.file.path);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const newOrder = await Order.create({
      name,
      userId: user.id,
      phone,
      details: comment,
      img: `assets/uploads/${req.file.originalname}`,
    });
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
    res.end();
    // res.send('Заказ сохранен и подтверждение отправлено на вашу электронную почту.');
  } catch (error) {
    console.error('Ошибка при сохранении заказа:', error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = orderRouter;
