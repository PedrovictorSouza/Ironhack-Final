//our database connection file.
const mongoose = require('mongoose');

const connectDB = async () => {
    //specialized error handling

    //lets you attempt to perform a series of statements. If any of these statements fail, the rest of the statement wont run.
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

    //catch receives a parameter and will run when an error is found in the try statement.
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB