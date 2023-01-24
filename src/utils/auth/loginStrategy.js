const User = require("../../api/users/user.model")
const bcrypt = require('bcrypt');
const { isValidEmail, isValidPassword } = require("../validations");


const LocalStrategy = require("passport-local").Strategy;

// this trategy allow us to know if the user is already in the server/database
const loginStrategy = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, 
    async (req, email, password,done )=>{
        try {
        if(!isValidEmail(email) || !isValidPassword (password)) {
            const error = new Error("e-mail or password is not valid");
            return done(error, null);
        }   
            const userDB = await User.findOne({ email })

            const isValidUserPassword = await bcrypt.compare(password,userDB.password)
            
            if (!isValidUserPassword) {
                const error = new Error("passwords do not match. Try again")
                error.status= 400;
                return done(error)
            }
            
            const userWithoutPassword = userDB.toObject()
            Reflect.deleteProperty(userWithoutPassword,"password")

            return done(null,userWithoutPassword)

            }catch(error){
                return done(error)
            }
});


module.exports = loginStrategy;