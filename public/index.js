const express=require('express');
const body_parser=require('body-parser');
const port=process.env.PORT||5000;
const path=require('path')
const app=express();
const mailer=require('./config/nodemailer');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.post('/',(req,res)=>{
 console.log(req.body.name);
 mailer(req.body);
 return res.redirect("back");
})


app.listen(port,(e)=>{
if(e){
    console.log(e);
}
console.log("Server is running at port:",port);
})