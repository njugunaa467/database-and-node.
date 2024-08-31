
module.exports = (sequelize, DataTypes) => {
    const Budget = sequelize.define('Budget', {
      budget_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'Budgets',
      timestamps: false,
    });
  
    Budget.associate = (models) => {
      Budget.belongsTo(models.User, { foreignKey: 'user_id' });
      Budget.belongsTo(models.Category, { foreignKey: 'category_id' });
    };
  
    return Budget;
  };
  