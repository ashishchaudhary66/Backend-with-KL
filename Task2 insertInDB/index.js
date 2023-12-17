const express=require('express')
const mongoose=require('mongoose')
const app=express()

const bodyParser=require('body-parser')

app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log("App is running at 3000 port")
})

mongoose.connect('mongodb://localhost:27017/myDatabase')
.then(()=>{console.log("DB Connected Successfully")})
.catch((error)=>{console.log("Error in connection : ",error)})

const mySchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxLength:50
    },
    course:{
        type:String,
        require:true,
        maxLength:50
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now()
    }
})

const ListData=mongoose.model('ListData',mySchema);

const listData=async(req,res)=>{
    try{
        const {name,course}=req.body;

        const response=await ListData.create({name,course})

        res.status(200).json({
            success:true,
            data:response,
            message:"Enter Created Succussfully"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"intrnal server error",
            message:err.message
        })

    }
}

app.post("/add",listData);