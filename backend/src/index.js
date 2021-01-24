
import express from "express"
import cors from "cors"
import getQuestion from "./routers/getQuestion.js"
const app = express()

app.use(cors())

app.use("/getQuestion", getQuestion)
app.listen(5000, console.log("listening on port 5000"))
