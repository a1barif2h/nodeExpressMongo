const express = require("express");
const dotenv = require("dotenv")
require("./db/conn")
const Student = require("./models/students")

const app = express();

app.use(express.json())

dotenv.config("./config.env")
const PORT = process.env.PORT || 8000;

app.get("/", (req,res) => {
    res.send("this is home")
})

app.post("/students", (req,res) => {
    console.log(req.body)
    const user = new Student(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})





app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})


