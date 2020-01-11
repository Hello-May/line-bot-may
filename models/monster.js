module.exports = (sequelize, DataTypes) => sequelize.define(
    'monsters', {
    monsterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    born: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    exp: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    character: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    money: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    food: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    tableName: 'monsters',
    // 以下兩個屬性是針對createAt、updateAt這兩個預設屬性的，timestamps是不使用，而underscored則是將createAt轉化為create_at
    timestamps: true,
    underscored: false,
}
)