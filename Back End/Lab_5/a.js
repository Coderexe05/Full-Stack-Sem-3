import express from "express";
const app=express();
const userData=
{
    id:101,
    name:"cm",
    
}
app.listen(4000, () => {
    console.log("Server is running on port number 4000");
})