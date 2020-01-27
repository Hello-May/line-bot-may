module.exports = (sequelize, DataTypes) => sequelize.define(
  'battles', {
    battleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monsterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    identity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    agi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lucky: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    character: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
  tableName: 'battles',
  // 以下兩個屬性是針對createAt、updateAt這兩個預設屬性的，timestamps是不使用，而underscored則是將createAt轉化為create_at
  timestamps: true,
  underscored: false,
}
)