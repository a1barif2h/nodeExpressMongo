const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://restfulapiUser:DOmoZeLtcA4mM55q@cluster0.39psk.mongodb.net/restfulAPI?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("db connected");
})
.catch(err => console.log("db not connected"))