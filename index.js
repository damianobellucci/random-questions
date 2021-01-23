
import fs from "fs"
import assert from "assert"

try {
    let text = fs.readFileSync("./data.txt", "utf8")
    console.log(text.split("-").splice(1))
    /////////////////////////////////////////////////////////////////////////
    const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
    assert(data != null, "Data object is null")
    const listLength = data.list.length
    assert(listLength !== 0, "List length is 0.")
    const randomNumber = Math.trunc((Math.random() * 100) * (listLength - 1) / 100)
    console.log(data.list[randomNumber])
}
catch (e) {
    console.log(e)
}