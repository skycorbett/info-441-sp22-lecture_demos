import fetch from 'node-fetch'
import parser from 'node-html-parser'

let url = "https://ischool.uw.edu/"
let response = await fetch(url)
let pageText = await response.text()

console.log(pageText)

let htmlPage = parser.parse(pageText)
let imgTags = htmlPage.querySelectorAll("img")
for(let i = 0; i < imgTags.length; i++){
    let imgTag = imgTags[i];

    console.log("Image " + i + " info:")
    console.log("alt text: " + imgTag.attributes.alt)
    console.log("img src: " + imgTag.attributes.src)
    console.log("\n\n")
}

// ** I DID THIS ! ** Debug ran correctly
// The following image info came up upon successful Debug

/* Image 0 info:
app.js:15
alt text: Mei’lani Eyre and Dev Wilder
app.js:16
img src: /sites/default/files/2023-05/Eyre_Wilder1440.jpg
app.js:17



app.js:18
Image 1 info:
app.js:15
alt text: Akshita Gundavarapu, Emily Smokoff, Erica Gordy, Audrey Dennis, Meghan Munagala. 
app.js:16
img src: undefined
app.js:17



app.js:18
Image 2 info:
app.js:15
alt text: Group photo of the Capstone student team on the University of Washington Seattle campus.
app.js:16
img src: undefined
app.js:17



app.js:18
Image 3 info:
app.js:15
alt text: MSIM students (from left) Raymond Su, Frank Lai, Jia Jia Yu, Isabella Eriksen, Max Lieberman, Ken Masumoto and Alana Montoya.
app.js:16
img src: undefined
app.js:17 */
