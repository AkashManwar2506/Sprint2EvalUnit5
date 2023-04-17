const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors")
app.use(cors({origin:"*"}));
require("dotenv").config();
const connection = require("./config/db.js")
const UserRouter = require("./routes/user.router.js")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
const {BlogRouter} = require("./routes/blogs.router.js")

app.use("/user", UserRouter)
app.use("/blog", BlogRouter)

app.get("/", (req, res)=>{
    res.send("welcome")
})


app.listen(process.env.Port, async()=>{
    try {
        await connection

    } catch (error) {
        console.log(error);
    }
    console.log(`Listening on Port ${process.env.Port}`)
})