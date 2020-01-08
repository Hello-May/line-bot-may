module.exports = (sequelize, DataTypes) => sequelize.define(
    'users', {
    id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
        // field: 'user_id' // 指定存儲在表中的鍵名稱
    }
}, {
    tableName: 'users',
    // 以下兩個屬性是針對createAt、updateAt這兩個預設屬性的，timestamps是不使用，而underscored則是將createAt轉化為create_at
    timestamps: true,
    underscored: false,
}
)