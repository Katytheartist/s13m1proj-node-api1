// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model')
const server = express()

server.get('/api/users', (req, res)=>{
    User.find()
    .then(users=>{
        //throw new Error('ahhhhh!!!!!')
        //console.log(users)
        res.json(users)
    })
    .catch(err=>{
        res.status(500).json({
            message: 'error gettin users',
            err: err.message, 
            stack: err.stack
        })
    })
})

server.use('*', (req, res)=>{
    res.status(404).json({
        message: 'losiento'
    })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
