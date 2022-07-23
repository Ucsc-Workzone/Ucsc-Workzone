// // const router = require("express").Router();
// const express=require("express");
// const app=express();
// const mysql=require("mysql2");
// let db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'crud_contact'
// });

// app.post('/login',(req,res)=>{
//     const username=req.body.username;
//     const password=req.body.password;

//         db.query(sqlGet,(error,result)=>{
//             "SELECT * FROM user where username=? password=?",
//             [username,password],
//             (err,result)=>{
//                 if(err){
//                     res.send({err:err})
//                 }
//                 else{
//                     if(result){
//                         res.send(result)
//                     }
//                     else{
//                         res.send({messege:"Invalid credentionals"})
//                     }
//                 }
//             }
//             res.send(result);
//         })
// })