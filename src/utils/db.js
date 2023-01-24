const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://root:root@cluster0.medc7xx.mongodb.net/got-2?retryWrites=true&w=majority";



const connectDB = async() => {
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(DB_URL);
        const { name, host, port } = db.connection;
        console.log(`[Server] Conected sucessfully at server name ${name} host ${host} and port ${port}`);
    }
    catch(error) {
        console.log('[Server ERROR] connecting to database', error);
    }
};

module.exports = {
    connectDB,
    DB_URL
}