"use strict";

const crypto = require("crypto");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let md5 = crypto.createHash("md5");
    let password = md5.update("123456").digest("hex");
    let date = new Date();

    return queryInterface.bulkInsert(
      "User",
      ["zMouse", "mt", "leo", "reci"].map((name, index) => {
        return {
          id: index + 1,
          name,
          password,
          createdAt: date,
          updatedAt: date,
        };
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("User", null, {});
  },
};
