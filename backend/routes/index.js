const express = require('express')


const router = express.Router()
const userRouter = require('./user')
const AccRouter = require('./Account') 



router.use('/user',userRouter)
router.use('/account',AccRouter)




module.exports = router