const express = require("express")
const routes = express.Router();

const db = require("./database/db.js");


routes.get("/", (req,res) => {
    return res.render("index.html")
})
routes.get("/create-point", (req,res) => {
    return res.render("create-point.html")
})
routes.get("/search", (req,res) => {
    const search = req.query.search

    if(search == ""){
        return res.render("search-results.html", {total: 0})
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err){
            return console.log(err)
        }

        const total = rows.length
        //console.log("E lá vem os registros... TOMA")
        //console.log(rows)
        return res.render("search-results.html", {places:rows, total})
    })

    
})


routes.post("/savepoint", (req, res) => {
    const {name,
        image,
        address,
        addressNumber,
        state,
        city,
        items} = req.body;

    const query = `INSERT INTO places (
        name,
        image,
        address,
        addressNumber,
        state,
        city,
        items
        ) VALUES (?,?,?,?,?,?,?);`

    const values = [
        name,
        image,
        address,
        addressNumber,
        state,
        city,
        items
    ]

    function afterInsertData(err) {
        if (err) {
        return res.send("Erro no cadastro")}
        /* console.log("Cadastrado com sucesso")
        console.log(this) */
        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData) 

})


module.exports = routes;