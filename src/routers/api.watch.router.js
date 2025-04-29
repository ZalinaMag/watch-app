const watchRouter = require('express').Router();
const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');
const storage = require('../../multer');
const { Watch } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const Edit = require('../views/Edit.jsx');

/**
 * @openapi
 * /api/watch:
 *   get:
 *     summary: Получить список часов с фильтрацией по gender и color
 *     tags:
 *       - Watch
 *     parameters:
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string
 *         description: Фильтр по полу
 *       - in: query
 *         name: color
 *         schema:
 *           type: string
 *         description: Фильтр по цвету
 *     responses:
 *       200:
 *         description: Массив объектов Watch
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Watch'
 */

watchRouter.get('/', async (req, res) => {
  try {
    const { gender, color } = req.query;
    const queryOptions = { where: {} };

    if (gender) queryOptions.where.gender = gender;
    if (color) queryOptions.where.color = color;
console.log('seeee', queryOptions);
console.log('heee', req.query);
    const allWatch = await Watch.findAll(queryOptions);
    res.json(allWatch);
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка при обращении к базе данных' });
  }
});

/**
 * @openapi
 * /api/watch/{id}:
 *   get:
 *     summary: Получить один объект Watch по ID
 *     tags:
 *       - Watch
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID часов
 *     responses:
 *       200:
 *         description: Объект Watch
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Watch'
 *       404:
 *         description: Часы не найдены
 */
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
/**
 * @openapi
 * /api/watch:
 *   post:
 *     summary: Создать новый объект Watch
 *     tags:
 *       - Watch
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - gender
 *               - color
 *               - image
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               gender:
 *                 type: string
 *               color:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Созданный объект Watch
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Watch'
 *       400:
 *         description: Недостаточно данных
 */
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

/**
 * @openapi
 * /api/watch/change/{id}:
 *   get:
 *     summary: Получить HTML-форму для редактирования Watch по ID
 *     tags:
 *       - Watch
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID редактируемого товара
 *     responses:
 *       200:
 *         description: HTML-код формы редактирования
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *       404:
 *         description: Часы не найдены
 */
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

/**
 * @openapi
 * /api/watch/change/{id}:
 *   patch:
 *     summary: Обновить поля Watch по ID
 *     tags:
 *       - Watch
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID обновляемого товара
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - gender
 *               - color
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               gender:
 *                 type: string
 *               color:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешное обновление
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *       400:
 *         description: Недостаточно данных в запросе
 *       404:
 *         description: Часы не найдены
 *       500:
 *         description: Внутренняя ошибка сервера
 */
watchRouter.patch('/change/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title, description, gender, color, 
  } = req.body;

  if (!title || !gender || !color) {
    return res.status(400).json({ err: 'Недостаточно данных' });
  }

  try {
    const watch = await Watch.findOne({ where: { id } });
    if (!watch) {
      return res.status(404).send('Часы не найдены');
    }

    await watch.update({
      title, description, gender, color,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'Ошибка сервера' });
  }
});


// delete
/**
 * @openapi
 * /api/watch/{id}:
 *   delete:
 *     summary: Удалить Watch по ID
 *     tags:
 *       - Watch
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID удаляемых часов
 *     responses:
 *       200:
 *         description: Успех
 *       404:
 *         description: Часы не найдены
 */
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
