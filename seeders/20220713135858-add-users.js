'use strict';
const uuid  = require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        user_id: uuid.v4(),
        username: 'John Doe',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: uuid.v4(),
        username: 'Jane Doe',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
