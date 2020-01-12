module.exports = (sequelize, DataTypes) => sequelize.define(
    'tasks', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
          },
          level: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          desc: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        
}, {
    tableName: 'tasks',
    // 以下兩個屬性是針對createAt、updateAt這兩個預設屬性的，timestamps是不使用，而underscored則是將createAt轉化為create_at
    timestamps: true,
    underscored: false,
}
)