const orderRouter = require('express').Router();
const multer = require('multer');
const { Order, User } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const OrderPage = require('../views/OrderPage.jsx');

orderRouter.get('/', (req, res) => {
  renderTemplate(OrderPage, {}, res);
});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './assets/uploads'); // Укажите путь к папке, где будут сохраняться файлы
  },
  filename: function(req, file, cb) {
    // Сохраняем файл под его оригинальным именем и расширением
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage })
// const upload = multer({ dest: '/assets/uploads' });

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

    res.send('Заказ сохранен');
  } catch (error) {
    console.error('Ошибка при сохранении заказа:', error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = orderRouter;
