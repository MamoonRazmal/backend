const express = require('express')
const app = express();
app.use(express.json())
const port = 3000;

require ("dotenv").config();
const {Pool,Client}=require("pg");
const cors=require("cors")
app.use(cors());
app.use(express.json())
 const pool=new Pool();
 app.get("/time",(req,res)=>{
  pool.query("SELECT NOW()",(err,response)=>{
    res.send(response.rows)
    //pool.end();
    //console.log("err:",err,"res:",res.rows)
  });
 })
 app.get("/fighters",(req,res)=>{
  pool.query("select * from fighters")
  .then(data=> res.json(data.rows))
  .catch(e=> res.sendStatus(500).send("something went wronmg"))

 })
 app.get("/fighters/:id",(req,res)=>{
  const {id}=req.params;
  pool.query("select * from fighters where id =$1;",[id])
  .then(data=> res.json(data.rows))
  .catch(e=> res.sendStatus(500).send("some thing goes wrong"))
 })
app.get('/', (req, res) => {
  res.json("welcome to my apis");
})
app.post("/fighters",(req,res)=>{
  const {first_name,last_name,country_id,style}=req.body;
  pool.query("insert into fighters (first_name,last_name,country_id,style) values($1,$2,$3,$4)returning *",[first_name,last_name,country_id,style])
  .then((data)=> res.json(data.rows)).catch((e)=>res.sendStatus(500).send(e))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`.bgGreen)
})
