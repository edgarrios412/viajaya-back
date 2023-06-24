const app = require("./src/app.js")
const {conn} = require("./src/db.js")
const {Promo} = require("./src/db.js")

conn.sync({force:true}).then(() =>{
    app.listen(3001, () => {
        Promo.create({
            title:"Mi promo",
            details:"Texto de ejemplo"
        })
        console.log("Server listening on port 3001")
    })
})
