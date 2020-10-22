const express=require('express')
const app=express()
const PORT=process.env.PORT||3000;
const path=require('path')

const static_path=path.join(__dirname+"/public")
app.use(express.static(static_path));
app.get('/',(req,res)=>{
   res.sendFile(__dirname+"/public/index.html");
})
app.listen(PORT)