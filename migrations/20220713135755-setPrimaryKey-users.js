'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('users', 'users_pkey')
    await queryInterface.addConstraint('users', {
      fields: ['user_id'],
      type: 'primary key',
      name: 'pk_user_id'
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('users', 'pk_user_id');
  }
};
