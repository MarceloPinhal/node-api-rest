const express = require("express");
const cors = require('cors');
const session = require("express-session")
const MongoStore = require("connect-mongo")
const passport = require("passport");
const auth = require('./src/utils/auth/index');
auth.activarAutenticacion();

const db = require("./src/utils/db");
db.connectDB();


const usersRoutes = require('./src/api/users/user.routes');
const charactersRoutes = require("./src/api/characters/character.routes");
const housesRoutes = require('./src/api/houses/house.routes');
const indexRoutes = require("./src/api/index/index.routes");

const PORT = 3000;

const server = express();


server.use(cors());

server.use(session({
    secret: "asdasfsdfasdafg!!123",
    saveUninitialized: true,
    resave: false,
    cookie:{maxAge: 7*60*1000},
    store: MongoStore.create({mongoUrl: db.DB_URL}) 
}))

server.use(express.json());

server.use(express.urlencoded({ extended: true }));


server.use(passport.initialize());
server.use(passport.session())


server.use('/users', usersRoutes);
server.use("/characters", charactersRoutes);

server.use("/houses", housesRoutes);
server.use("/", indexRoutes);


server.use('*', (req, res, next) => {
    return res.status(404).json('URL not found URL. Try another one');
})


server.use((error, req, res, next) => {
    console.log("controlador:" + error)
   const status = error.status || 500;
   const message = error.message || 'Unexpected Error!';
   return res.status(status).json(message);
});

server.listen(PORT, () => {
    console.log(`[Server] working at http://localhost:${PORT}`);
});

