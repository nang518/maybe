const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/maybe', (req, res) => {
    console.log("요청이 왔어요~")
})

app.listen(port, () => {
    console.log(`Server open on ${port} port`)
})