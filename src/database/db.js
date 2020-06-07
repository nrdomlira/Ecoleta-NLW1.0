const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./src/database/database.db");

db.serialize(() => {

/*     db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            addressNumber TEXT,
            state TEXT,
            city TEXT,
            items TEXT
            );
            `)
        }) */
            
    /* const query = `INSERT INTO places (
        name,
        image,
        address,
        addressNumber,
        state,
        city,
        items
        ) VALUES (?,?,?,?,?,?,?);`

    const values = [
        "Papersider",
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Antônio Carlos R.A, Iputinga",
        "Nº 86",
        "Pernambuco",
        "Recife",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) { return console.log(err) }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData) */

     /* db.all(`SELECT * FROM places`, function(err, rows) {
        if(err){
            return console.log(err)
        }

        console.log("E lá vem os registros... TOMA")
        console.log(rows)
    }) */
    /* const DeleteId = [1]

     db.run(`DELETE FROM places WHERE id = ?`, DeleteId, function(err){
        if(err){
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    }) */

})

module.exports = db;