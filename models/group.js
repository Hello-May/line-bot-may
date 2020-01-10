module.exports = (sequelize, DataTypes) => sequelize.define(
    'groups', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    groupId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mosterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'groups',
    // 以下兩個屬性是針對createAt、updateAt這兩個預設屬性的，timestamps是不使用，而underscored則是將createAt轉化為create_at
    timestamps: true,
    underscored: false,
}
)