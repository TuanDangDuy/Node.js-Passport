const mongoose = require('mongoose')

const connectMongoose = () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/passport')
        .then((e) => console.log(`Connected to mongoDB: ${e.connection.host}`))
        .catch((e) => console.log(e))
}

module.exports.connectMongoose = connectMongoose
// // or
// exports.connectMongoose = () => {...}


//Schema
const userSchema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: String
})

exports.User = mongoose.model('User', userSchema)
//or exports.exports = mongoose.model('User', userSchema)