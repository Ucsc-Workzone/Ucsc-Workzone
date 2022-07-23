const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mysql=require("mysql2");
const loginRoute=require("./routes/login")
const cors=require("cors");

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud_contact'
});
db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
app.use(cors());
app.use(express.json());
// app.use("/login",loginRoute);
app.use(bodyParser.urlencoded({extended:true}));

app.post('/api/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const sqlGet=`SELECT * FROM user where username='${username}' AND password='${password}'`;
    db.query(sqlGet,(error,result)=>{
       
        if(error){
            res.send(error)
        }

        else{
            if(result.length>0){
                res.send(result)
            }
            else{
                res.send({messege:"invalid credentials"})
            }
           
        }
    })

        // db.query(sqlGet,(error,result)=>{
        //     "SELECT * FROM user ",
        //     (err,result)=>{
        //         if(err){
        //             res.send('Jelell')
        //         }
        //         else{
        //             if(result){
        //                 res.send(result)
        //             }
        //             else{
        //                 res.send({messege:"Invalid credentionals"})
        //             }
        //         }
        //     }
        //     res.send(result);
        // })
})

app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM user";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })

})

// app.get("/",(req,res)=>{
// //     const insert="INSERT INTO contact_db (id,name,email,contact) VALUES (2,'John',789,123444)";
// //    connection.query(insert,(error,result)=>{
// //     console.log("error:",error);
// //     console.log("result",result);
//     res.send("Hello Express");

// //    })
   
   
// })

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})