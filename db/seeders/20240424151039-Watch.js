"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Watches",
      [
        {
          img: "assets/uploads/20.jpg",
          title: "Командирские",
          description: "Дизанейрские часы цвета дерева и моря",
          gender: "мужские",
          color: "серебристый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "assets/uploads/21.jpg",
          title: "Морской бриз",
          description: "Стильные часы для элегантного образа",
          gender: "мужские",
          color: "серебристый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "assets/uploads/22.jpg",
          title: "Серебряный стиль",
          description: "Универсальные часы для каждодневного образа",
          gender: "женские",
          color: "серебристый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "assets/uploads/23.jpg",
          title: "Перламутровый рай",
          description: "Люксовые часы для роскошного образа",
          gender: "женские",
          color: "золотистый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "assets/uploads/25.jpg",
          title: "Вечная классика",
          description: "Элегантные часы для классического образа",
          gender: "мужские",
          color: "серебристый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "assets/uploads/28.jpg",
          title: "Нежность",
          description: "Стильные элегантные часы для утонченных женщин",
          gender: "женские",
          color: "золотистый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "assets/uploads/29.jpg",
          title: "Бизнесмен",
          description: "Классика для деловых мужчин",
          gender: "мужские",
          color: "серебристый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "assets/uploads/24.jpg",
          title: "Лесные",
          description: "Утонченные часы для элегантного образа",
          gender: "man",
          color: "серебристый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Watches", null, {});
  },
};
