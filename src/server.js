const express = require("express");
const Routes = require("./routes");

const nunjucks = require("nunjucks")

const app = express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.use(Routes);

nunjucks.configure("src/pages", {
    express: app,
    noCache: true
})

app.listen(3000, () => {
    console.log("Server is Running !!!")
})