//const {mongoose} = require('mongoose')


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://zourv:1CzzGtZUocFeuBmq@cluster0.07p8rrk.mongodb.net/paytmm')


const   UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String

})

const AccountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    balance:Number
})

const User = mongoose.model('User', UserSchema)
const Account = mongoose.model('Account', AccountSchema)
module.exports = {User,Account};


