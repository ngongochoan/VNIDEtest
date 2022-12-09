const models = require('./../models/index');
exports.create = async (user) => {
    try {
        var value = await models.user.create(user);
        return value;
    } catch (error) {
        throw error;
    }
}