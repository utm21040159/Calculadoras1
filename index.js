import express from "express";
 
const app = express();

app.use(express.json());

app.get('/sumar',(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const result = num1 + num2;

    return res.status(200).json({result})
});



app.get('/resta',(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const result = num1 - num2;

    return res.status(200).json({result})
});
app.get('/multi',(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const result = num1 * num2;

    return res.status(200).json({result})
});

app.get('/divicion',(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const result = num1 / num2;

    return res.status(200).json({result})
});

app.listen(4000,()=>{
    console.log("siuu")
})