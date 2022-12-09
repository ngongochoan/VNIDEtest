const authRoute = require('./users');



module.exports = (app) => {
    authRoute(app);
    
}