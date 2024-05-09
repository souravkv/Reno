const express = require('express')
const z = require('zod')
const { User } = require('../db')
const { Account } = require('../db')

const {JWT_SECRET} = require("../config")

const router =express.Router()
const jwt = require('jsonwebtoken')
// var ls = require('local-storage');

//schema for zod
const signupSchema = z.object({
    username: z.string(),
    password: z.string(),
    firstName:z.string(),
    lastName:z.string()

})

router.post('/signup',async function(req,res){ 

    const {success} = signupSchema.safeParse(req.body);
    if(!success){
       return  res.status(411).json({msg:"somethingss wrong pas,name,email?"})
    }

    const existingUser = await User.findOne({
        username:req.body.username
    })

    if(existingUser){
        return res.status(411).json({msg:"user alreadyyy exist" })
    }

    const user = await User.create({ 
        username:req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
    })

    const userId = user._id;

    //acoutnt initi (adding random balance)
    const userAcc= await Account.create({
        userId,
        balance: 1+Math.random()*100
    }) 



    const token = jwt.sign({
        userId:user._id
    },JWT_SECRET)

    res.json({
        userId: user.firstName+"User created successfully ",
        balance: userAcc.balance,
        token: token
    })
})

const signInSchema = z.object({
    username:z.string(),
    password:z.string()
})


router.post('/signin',async function(req,res){
    const {success} = signInSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({msg:"zod auth is wrong somehow"})
    }

    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    if(!user){
        return res.status(411).json({msg: "user dosent exist in dbbbb"})
    }
 /// get id and to mixupawt.sign({ },JWT_SECRET
 if(user){

    const token2 = jwt.sign({
        userId:user._id
    },JWT_SECRET)

    
    res.json({token:token2})
 }
 

})
//bulk request

    router.get('/bulk',async(req,res)=>{
        const filter = req.query.filter || " ";

        const users = await User.find({

            $or:[{
                firstName:{
                    "$regex":filter
                }
            }
                ,{lastName:{
                    "$regex":filter


                }
            }]
        })
        res.json({ user:users.map(user=>({
            username:user.username,
            firstName : user.firstName,
            lastName: user.lastName,
            _id:user._id


        }))})
    })

module.exports= router