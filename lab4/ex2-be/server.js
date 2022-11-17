const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CardModel = require("./model/card")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://truong123:123456Tr#@cluster0.lpy4hxj.mongodb.net/card?retryWrites=true&w=majority',()=>{
    console.log("DB connected");
})

app.post('/insert' , async(req , res)=>{
    const card = new CardModel({ name: req.body.name, imgURL: req.body.imgURL});
    try {
        await card.save();
        res.status(200).json("Insert successes")
    } catch (error) {
        console.log(error);
    }
})

app.get('/read',async(req , res)=>{
    CardModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
})

app.listen(3001,()=>{
    console.log("Server running on port 3001")
})
