const app = require("./src/app.js")
const {conn} = require("./src/db.js")
const {Promo} = require("./src/db.js")

conn.sync({force:true}).then(() =>{
    app.listen(3001, () => {
        Promo.create({
            title:"Mi promo",
            details:"Texto de ejemplo",
            image:"https://res.cloudinary.com/dftvenl2z/image/upload/v1687911328/viajaya/a2j4izia5ziz882fdrfx.jpg"
        })
        console.log("Server listening on port 3001")
    })
})
