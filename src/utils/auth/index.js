const passport = require('passport');
const User = require("../../api/users/user.model")
const registerStrategy = require('./registerStrategy');
const loginStrategy = require("./loginStrategy");

passport.serializeUser((user,done)=>done(null,user._id));

passport.deserializeUser(async (id,done)=> {
    try{
        const userDB = await User.findById(id)
        return done(null,userDB)
    } catch(error) {
        return done(error)
    }
});

const activarAutenticacion = () => {
    passport.use('register', registerStrategy);
    passport.use('login-alive', loginStrategy);
};

module.exports = {
    activarAutenticacion,
};

