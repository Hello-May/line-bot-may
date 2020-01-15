module.exports = (sequelize, DataTypes) => sequelize.define(
    'habits', {
    habitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    habit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secret: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    tableName: 'habits',
    // 以下兩個屬性是針對createAt、updateAt這兩個預設屬性的，timestamps是不使用，而underscored則是將createAt轉化為create_at
    timestamps: true,
    underscored: false,
}
)