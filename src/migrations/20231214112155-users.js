'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    display_name: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING(255),
      unique: true,
    },
    password: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    image: {
      allowNull: true,
      type: Sequelize.STRING(255),
    },
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
   
}
};
