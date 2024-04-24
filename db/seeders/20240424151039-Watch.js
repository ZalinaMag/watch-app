'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Watches',
      [
        {
          img: 'assets/uploads/20',
          title: 'Командирские',
          description: 'Дизанейрские часы цвета дерева и моря',
          gender: 'мужские',
          color: 'серебристый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'assets/uploads/21',
          title: 'Морской бриз',
          description: 'Стильные часы для элегантного образа',
          gender: 'мужские',
          color: 'серебристый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'assets/uploads/22',
          title: 'Серебряный стиль',
          description: 'Универсальные часы для каждодневного образа',
          gender: 'женские',
          color: 'серебристый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'assets/uploads/23',
          title: 'Перламутровый рай',
          description: 'Люксовые часы для роскошного образа',
          gender: 'женские',
          color: 'золотистый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'assets/uploads/24',
          title: 'Вечная классика',
          description: 'Элегантные часы для классического образа',
          gender: 'мужские',
          color: 'серебристый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'assets/uploads/25',
          title: 'Нежность',
          description: 'Стильные элегантные часы для утонченных женщин',
          gender: 'женские',
          color: 'золотистый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'assets/uploads/28',
          title: 'Бизнесмен',
          description: 'Классика для деловоых мужчин',
          gender: 'мужские',
          color: 'серебристый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'assets/uploads/29',
          title: 'Лесные',
          description: 'Утонченные часы для элегантного образа',
          gender: 'man',
          color: 'серебристый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Watches', null, {});
  },
};
