'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Specialties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },
            name: {
                type: Sequelize.INTEGER
            },
            image: {
                type: Sequelize.INTEGER
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Specialties');
    }
};