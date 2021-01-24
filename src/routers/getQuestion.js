import fs from "fs"
import express from "express"
const router = express.Router()
const dataPath = "./data/data.txt"
import randomInteger from "../lib/randomInteger.js"
var listQuestions = null

try {
    let text = fs.readFileSync(dataPath, "utf8")
    listQuestions = text.split("-").splice(1)
}
catch (e) {
    console.log(e)
}

router.get('/', (req, res) => {
    try {
        let idxRandomQuestion = randomInteger(listQuestions.length)
        let question = listQuestions[idxRandomQuestion]
        res.status(200).send(question)
    }
    catch (e) {
        res.status(500).send("error")
    }
})

export default router