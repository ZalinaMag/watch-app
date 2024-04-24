const watchRouter = require("express").Router();
const { Watch } = require("../../db/models");

watchRouter.get("/", async (req, res) => {
  try {
    const allWatch = await Watch.findAll({ raw: true });
    res.json(allWatch);
  } catch (error) {
    console.log(error);
    res.json({ err: "Ошибка при обращении к базе данных" });
  }
});

watchRouter.get("/:id", async (req, res) => {
  try {
    const oneWatch = await Watch.findOne({ where: { id: req.params.id } });
    res.json(oneWatch);
  } catch (error) {
    console.log(error);
    res.json({ err: "Ошибка при обращении к базе данных" });
  }
});

watchRouter.post("/", async (req, res) => {
  try {
    const { title, description, gender, color, img } = req.body;
    if (!title || !gender || !color || !img) {
      res.json({ err: "Получены не все данные" });
      return;
    }
    await Watch.create({
      title,
      description,
      gender,
      color,
      img,
    });
    res.end();
  } catch (error) {
    console.log(error);
    res.json({ err: "Ошибка при обращении к базе данных" });
  }
});

watchRouter.patch("/", async (req, res) => {
  try {
    const { title, description, gender, color, img, id } = req.body;
    if (!title || !gender || !color || !img) {
      res.json({ err: "Получены не все данные" });
    }
    const oneWatch = await Watch.findOne({ where: { id } });
    oneWatch.update({
      title,
      description,
      gender,
      color,
      img,
    });
    res.end();
  } catch (error) {
    console.log(error);
    res.json({ err: "Ошибка при обращении к базе данных" });
  }
});

watchRouter.delete("/", async (req, res) => {
  try {
    await Watch.destroy({ where: { id: req.body.id } });
    res.end();
  } catch (error) {
    console.log(error);
    res.json({ err: "Ошибка при обращении к базе данных" });
  }
});

module.exports = watchRouter;
