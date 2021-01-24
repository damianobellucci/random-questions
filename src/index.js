import express from "express"
import cors from "cors"
import getQuestion from "./routers/getQuestion.js"
const app = express()
app.use(cors())

app.use("/getQuestion", getQuestion)

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
app.listen(process.env.PORT, console.log("listening on port 5000"))