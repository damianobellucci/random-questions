import fs from "fs"
import express from "express"
const router = express.Router()
const dataPath = "./data/data.txt"
import randomInteger from "../lib/randomInteger.js"
var dataObject = []
var totChapters = null

try {
    let text = fs.readFileSync(dataPath, "utf8")
    let data = text.split("***")
    //remove empty element before the first "***"
    data.shift()
    for (let chapter of data) {
        let tokens = chapter.split("-")
        let chapterName = tokens[0] //take the chapter name
        tokens.shift() //remove chapter name
        dataObject.push({
            title: chapterName,
            listQuestions: tokens
        })
    }
    totChapters = dataObject.length
} catch (e) {
    console.log(e)
}

console.log(dataObject)

router.get('/', (req, res) => {
    try {
        let idxChapter = randomInteger(totChapters - 1)
        let idxQuestion = randomInteger(dataObject[idxChapter].listQuestions.length - 1)
        let question = dataObject[idxChapter].listQuestions[idxQuestion]
	let resObject = {"text":question}
        res.status(200).send(resObject)
    }
    catch (e) {
        res.status(500).send("error")
    }
})

export default router