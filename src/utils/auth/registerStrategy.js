const User = require("../../api/users/user.model");
const bcrypt = require('bcrypt');
const { isValidEmail, isValidPassword } = require("../validations");

const LocalStrategy = require("passport-local").Strategy;

// register srategy: check if the user already exists in DB and if email and password are valid
const registerStrategy = new LocalStrategy(
    {
        usernameField: "email", 
        passwordField: "password",
        passReqToCallback: true, 
    },
    async (req, email, password, done) => {
      try {
        const userDB = await User.findOne({ email: email.toLowerCase() });
        console.log(userDB)
        if(userDB) {
            const error = new Error('user already exists');
            console.log("entra a ifffff")
            return done(error, null);
        }

        if(!isValidEmail(email)) {
            const error = new Error("e-mail not valid");
            return done(error, null);
        }

        if(!isValidPassword(password)) {
            const error = new Error("password does not meet requirements of 8 characters, 1 capital letter and 1 number");
            return done(error, null);
        }
            console.log("erroresssssssssss")
    // if all requirements are met, user is created
        const saltRounds = 10;
        const encryptedPassword = await bcrypt.hash(password, saltRounds);

        const userToBeCreated = new User({
            ...req.body,
            email,
            password: encryptedPassword,
        });

// user is saved in data base
        const created = await userToBeCreated.save();

        const userWithoutPassword = created.toObject()
        Reflect.deleteProperty(userWithoutPassword,"password")

        return done(null, created);

      } catch (error) {
        return done(error);
      } 
    }
);

module.exports = registerStrategy;