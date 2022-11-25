const express =  require('express')
const mongoose= require ('mongoose')
const Cors = require ('cors')
const Videos = require('./dbModel')
const app = express()
const port =process.env.PORT ||9000
const connection_url='mongodb+srv://truong123:123456tr@cluster0.9wqb6hv.mongodb.net/reels?retryWrites=true&w=majority'

app.use(express.json())
app.use(Cors())

mongoose.connect(connection_url,()=>{
  console.log("DB connected")
})
app.get("/",(req,res)=>res.status(200).send("He so lo , ho so ly ly"))
app.post("/v2/posts", (req,res)=>{
  const dbVideos=req.body
  Videos.create(dbVideos,(err, data)=>{
    if(err)
    res.status(500).send(err)
    else
    res.status(201).send(data)
  })
})
app.get("/v2/get", async(req,res)=>{
  Videos.find((err,data)=>{
    if(err){
      res.status(500).send(err)
    }else{
      res.send(data)
    }
  })
})

app.listen(9000, ()=>console.log(`listening on localhost:  9000`))
