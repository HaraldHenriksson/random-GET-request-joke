const express = require('express')

const fs = require('fs')

const app = express()

const port = 3000

app.get('/joke', (req, res) => {
    fs.readFile('data/oneliners.json', 'utf8', (err, data) => {
        if (err) throw err
        const jokes = JSON.parse(data)
        const joke = jokes[Math.floor(Math.random()*jokes.length)]
        res.json({ joke })
    })
})

app.listen(port, () => {
	console.log(`Example listening on localhost ${port}`)
})