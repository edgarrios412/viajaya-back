const app = require("./src/app.js")
const {conn} = require("./src/db.js")
const {Promo, Char} = require("./src/db.js")

conn.sync({alter:true}).then(() =>{
    app.listen(3001, () => {
        Char.create({name:"Wifi"})
        Char.create({name:"Parqueadero"})
        Char.create({name:"Piscina"})
        Char.create({name:"Jacuzzi"})
        Char.create({name:"Cama Doble"})
        Char.create({name:"Gimnasio"})
        Promo.create({
            title:"Mi promo",
            details:"Texto de ejemplo",
            image:"https://res.cloudinary.com/dftvenl2z/image/upload/v1687911328/viajaya/a2j4izia5ziz882fdrfx.jpg"
        })
        console.log("Server listening on port 3001")
    })
})
