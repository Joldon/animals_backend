const mongoose = require('mongoose');

// const mongoDB = 'insert url of db';
const connectDB = async () => {
    const options = {
        useNewUrlParser: true,
        useCreateindex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    };

    const conn = await mongoose.connect(process.env.MONGO_URI, options);
    console.log(`Animals DB connected ${conn.connection.host}`.yellow.underline);
}

module.exports = connectDB;