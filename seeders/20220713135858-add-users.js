'use strict';
const uuid  = require('uuid');
const bcrypt = require('bcrypt')
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
        password: bcrypt.hashSync('password', 5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: uuid.v4(),
        username: 'Jane Doe',
        password: bcrypt.hashSync('password', 5),
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
