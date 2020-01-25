module.exports = (sequelize, DataTypes) => sequelize.define(
  'skins', {
  skinId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  say: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  tableName: 'skins',
  // 以下兩個屬性是針對createAt、updateAt這兩個預設屬性的，timestamps是不使用，而underscored則是將createAt轉化為create_at
  timestamps: true,
  underscored: false,
}
)