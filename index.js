import { MongoClient } from 'mongodb';
import express from 'express'
import cors from 'cors'

const app=express()


// app.use(cors())

async function createConnection()
{
    // const client=new MongoClient("mongodb://localhost:27017")
    const client=new MongoClient("mongodb+srv://arvind080318:6T6Dmphw9vdrF1eQ@cluster0.ph2owwx.mongodb.net/")

    await client.connect();
    console.log('Mongodb is connected successfully');
    return client
}
//Top-level await
const client=await createConnection()

// app.get("/",(req,res)=>{
//     res.send("HelloWorld ⭐⭐⭐⭐!!!")
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>about page</h1>")
// })
app.get("/movies",async(request,response)=>{
    const movies=await client.db("moviedb").collection("movies").find({}).toArray()
    response.send(movies)
})

app.get("/movies/:id",async(request,response)=>{
    console.log(request.params)
    const {id}=request.params
    const movie=await client.db("moviedb").collection("movies").findOne({id:id})
    movie?response.send(movie):response.status(404).send({msg:"No such movie found"})

})

//create server 
app.listen(4000,()=>console.log('App started in port 4000'))





