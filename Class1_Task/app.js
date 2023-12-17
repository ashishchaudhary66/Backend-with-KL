const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const port = 3000
const mongoose=require('mongoose')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
// mongoose.connect('mongodb+srv://uic18bca1230:Ashish@11989198@cluster0.b3frkv1.mongodb.net/Employee?retryWrites=true&w=majority')
// .then(()=>console.log("Mongoose Connected"))
// .catch((err)=>console.log("No Connection"))

mongoose.connect('mongodb://localhost:27017/employees',{
  // useNewUrlParser:true,
  // useUnifiedTopology:true
  // // optional
})
.then(()=>{console.log("Connected Successfully")})
.catch((error)=>{console.log("Received an error")})

let arr=[1,2,3,4,5]
app.get('/', (req, res) => {
  res.send(arr)
  
})

app.post('/push', (req, res) => {
  let val=req.body.val
  arr.push(val)
  res.send(`This is post operation and pushed ${val} element in the array : ${arr}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})