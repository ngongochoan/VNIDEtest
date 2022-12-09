const { Router } = require('express');
const userController= require("./../controller/user")

module.exports = (app) => {
    const router = new Router();

   
    router.get('/refresh_token',userController.signup);
    
    app.use('/user', router);
}