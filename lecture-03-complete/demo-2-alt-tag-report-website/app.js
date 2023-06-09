import fs from 'fs'
import fetch from 'node-fetch'
import parser from 'node-html-parser'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.type('html')
    res.send(fs.readFileSync("index.html").toString())
})

app.get('/index.js', (req, res) => {
    res.type('js')
    res.send(fs.readFileSync("index.js").toString())
})

app.get('/api/auditurl', async (req, res) => {
    let url = req.query.url
    let response = await fetch(url)
    let pageText = await response.text()

    let htmlPage = parser.parse(pageText)
    let imgTags = htmlPage.querySelectorAll("img")

    let htmlReturn = ""

    for(let i = 0; i < imgTags.length; i++){
        let imgTag = imgTags[i];

        htmlReturn += "<h3>Image " + i + " info:</h3>"
        htmlReturn += "alt text: " + imgTag.attributes.alt + "<br>"
        htmlReturn += "img src: " + imgTag.attributes.src + "<br>"
        htmlReturn += "<img src='"+ url + imgTag.attributes.src+ "' />"
    }

    res.type("html")
    res.send(htmlReturn)
})


app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})

// ** I HAVE DONE THIS ! ** The two images from Google.com loaded
// and they gave me this result:

/* Audit Img Tags
http://www.google.com
 Audit Img Tags for Url
Image 0 info:
alt text: Celebrating Willi Ninja
img src: /logos/doodles/2023/celebrating-willi-ninja-6753651837109840.2-l.png

Image 1 info:
alt text: undefined
img src: https://www.google.com/images/hpp/rainbow_flag_128.png

*/

/* Image 1 info:
alt text: Akshita Gundavarapu, Emily Smokoff, Erica Gordy, Audrey Dennis, Meghan Munagala.
img src: undefined

Image 2 info:
alt text: Group photo of the Capstone student team on the University of Washington Seattle campus.
img src: undefined

Image 3 info:
alt text: MSIM students (from left) Raymond Su, Frank Lai, Jia Jia Yu, Isabella Eriksen, Max Lieberman, Ken Masumoto and Alana Montoya.
img src: undefined

Image 4 info:
alt text:
img src: /sites/default/files/2021-06/MSIMcombo.jpg

*/