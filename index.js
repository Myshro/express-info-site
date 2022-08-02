// const http = require('http')
// const fs = require('fs')
// const port = 3000
// const url = require('url')

// const server = http.createServer((req, res) => {
//     const reqUrl = url.parse(req.url, true)
//     const filename = "." + reqUrl.pathname
//     console.log(reqUrl)
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     fs.readFile(reqUrl, (error, data) => {
//         if (error) {
//             res.writeHead(404)
//             res
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }).listen(port, (err) => {
//     if (err) {
//         console.error(`Error! ${err}`)
//         return
//     } 
//     console.log(`Server is listening on port ${port}`)
// })

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/', (req, res) => {
    res.render("index", { text: 'World' })
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.get('/contact', (req, res) => {
    res.render("contact")
})

app.get('*', (req, res) => {
    res.render("404")
})