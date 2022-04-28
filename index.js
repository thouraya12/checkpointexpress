const express = require('express')
const path = require('path')
const app = express()

const workingData =(req , res ,next) =>{
    const day =new  Date().getDay()
    const hours = new Date().getHours()
    if ((day===0) || (day===6) ||(hours<9) ||(hours>17)){
        res.sendFile(__dirname + '/Views/Closed.html')
    }
    else{
        next()
    }
}
app.use(workingData)
app.use(express.static('Views'))


app.listen(5000 , ()=>{
    console.log('server is running on port :  5000')

})