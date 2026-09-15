import express from 'express';

const app = express();
app.use(express.json());

const userData = [
  { id: 101, name: 'cm', email: 'dcgdi@gmail.com' }
];

app.get("/msg", (req, res) => {
  res.status(200).json({ message: "welcome user" });
});

app.post("/user", (req, res) => {
  res.status(200).json({ message: "user added successfully" });
});

app.put("/user/:id", (req, res) => {
  res.status(200).json({ message: "user updated successfully" });
});

app.delete("/user/:id", (req, res) => {
  res.status(200).json({ message: "user deleted successfully" });
});

app.get("/user", (req,res)=>{
    res.status(200).json({
        message:"Data recieved",
        data: userData,
    })
});

app.post("/create", (req,res)=>{
  const{id,name,email}=req.body
  const newuser={
    id,
    name,
    email,
  }
  userData.push(newuser);
  res.status(201).json({message:"user created successfully", newuser})
});

app.listen(3010, () => {
  console.log('Server is running on port 3010');
});