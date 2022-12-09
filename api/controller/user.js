const userService = require('./../service/user');
exports.signup = async (req, res, next) => {
    try {
        var {
            email,
            password,
            role
        } = req.body.data;
        var result = await userService.create(email, password, role);
        if (result) {
            return res.json(result);
        }
        return res.json();
    } catch (error) {
        next(error);
    }
}