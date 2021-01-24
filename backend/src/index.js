
import express from "express"
import getQuestion from "./routers/getQuestion.js"
const app = express()

app.use("/getQuestion", getQuestion)
app.listen(5000, console.log("listening on port 5000"))
