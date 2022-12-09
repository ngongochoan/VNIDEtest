const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class User extends Model { };
    User.init({
        email: {
            type: DataTypes.STRING,
        },
        hash_password: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName:"user",
        timestamps: false,
    });

   
    

    return User;
}