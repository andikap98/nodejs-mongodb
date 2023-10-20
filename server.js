const express = require("express")
const cors  = require("cors")

const app = express();

const corsOption = {
    origin: "*"
};


// register cors  midleware
app.use(cors(corsOption));

app.use(express.json());

// membuat route

app.get("/", (req, res) =>{
    res.json({message: "hello"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))