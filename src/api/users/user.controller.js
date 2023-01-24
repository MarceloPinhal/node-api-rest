const passport = require("passport");

const registerPost = (req, res, next) => {
    try {
        const done = (error, user) => {
            if (error) return next(error)
            
            req.logIn(user , (error) => {
                if (error) return next(error)

                return res.status(201).json(user)
            })
        };

        passport.authenticate('register', done)(req);
    } catch(error) {
        return next(error);
    }
};

const loginPost = (req, res, next) => {
    try {
        const done = (error, user) => {
            if(error) return next(error);

            req.logIn(user , (error) => {
                if (error) return next(error)

                return res.status(201).json(user)
            })
        }
        passport.authenticate("login-alive",done)(req)
    } catch(error) {
        return next(error);
    }

    
};

module.exports = {
    registerPost,
    loginPost,
}