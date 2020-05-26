// here is the entity from database, which we create before to do migration
/**
 * to create a migration you should to do "yarn sequelize migration:create --name="name""
 * to migrate the entity to database the command is "yarn sequelize db:migrate"
 * to undo the migrate the command is "yarn sequelize db:migrate:undo" this will delete the last migrate.
 * */
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.createTable('files', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    Example:
    */
    return queryInterface.dropTable('files');
  },
};
