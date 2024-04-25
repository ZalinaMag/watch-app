const watchRouter = require('express').Router();
const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');
const storage = require('../../multer');
const { Watch } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const Edit = require('../views/Edit.jsx');

watchRouter.get('/', async (req, res) => {
  try {
    const allWatch = await Watch.findAll({ raw: true });
    res.json(allWatch);
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка при обращении к базе данных' });
  }
});

watchRouter.get('/:id', async (req, res) => {
  try {
    const oneWatch = await Watch.findOne({ where: { id: req.params.id } });
    res.json(oneWatch);
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка при обращении к базе данных' });
  }
});

// add new
const upload = multer({ storage });

watchRouter.post('/', upload.single('image'), async (req, res) => {
  try {
    const {
      title, description, gender, color,
    } = req.body;
    if (!title || !description || !gender || !color || !req.file) {
      res.status(400).json({ err: 'Получены не все данные' });
    }
    const newWatch = await Watch.create({
      title,
      description,
      gender,
      color,
      img: `assets/uploads/${req.file.originalname}`,
    });
    res.json(newWatch);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'Ошибка при обращении к базе данных' });
  }
});

// watchRouter.patch('/', async (req, res) => {
//   try {
//     const {
//       title, description, gender, color, img, id,
//     } = req.body;
//     if (!title || !gender || !color || !img) {
//       res.json({ err: 'Получены не все данные' });
//     }
//     const oneWatch = await Watch.findOne({ where: { id } });
//     oneWatch.update({
//       title,
//       description,
//       gender,
//       color,
//       img,
//     });
//     res.end();
//   } catch (error) {
//     console.log(error);
//     res.json({ err: 'Ошибка при обращении к базе данных' });
//   }
// });

watchRouter.get('/change/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { login } = req.session;
    const watch = await Watch.findOne({ where: { id } });

    if (!watch) {
      return res.status(404).send('Item not found');
    }

    renderTemplate(Edit, { watch, login }, res);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

watchRouter.patch('/change/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title, description, gender, color, img,
  } = req.body;

  if (!title || !gender || !color || !img) {
    return res.status(400).json({ err: 'Недостаточно данных' });
  }

  try {
    const watch = await Watch.findOne({ where: { id } });
    if (!watch) {
      return res.status(404).send('Часы не найдены');
    }

    await watch.update({
      title, description, gender, color, img,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'Ошибка сервера' });
  }
});


// delete
watchRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const watch = await Watch.findByPk(id);
    if (!watch) {
      return res.status(404).json({ err: 'Часы не найдены' });
    }

    const filePath = path.join(__dirname, '../../public', watch.img);

    await fs.unlink(filePath);

    await watch.destroy();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'Ошибка при удалении' });
  }
});

module.exports = watchRouter;
