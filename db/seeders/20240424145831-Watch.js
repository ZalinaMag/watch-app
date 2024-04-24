"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Watches",
      [
        {
          img: "assets/uploads/3.jpg",
          title: "sijadkg",
          description: "asfqeq",
          gender: "woman",
          color: "gold",
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
