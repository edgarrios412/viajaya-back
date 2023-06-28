const {Pack} = require("../db")

module.exports = {
    getPacks: async () => {
        const packs = await Pack.findAll()
        return packs
    },
    getPackById: async (id) => {
        const packs = await Pack.findOne({
            where:{
                id:id
            }
        })
        return packs
    },
    putPack: async (p) => {
        const pack = await Pack.findOne({
            where:{
                id:p.id
            }
        })
        if(pack){
            if(p.title) pack.title = p.title
            if(p.detail) pack.detail = p.detail
            if(p.price) pack.price = p.price
            await pack.save()
            return "Paquete actualizado"
        }else return "No lo encontramos"
    },
    postPack: async (pack) => {
        await Pack.create(pack)
        return "Paquete creado con exito"
    },
    deletePack: async (id) => {
        const pack = await Pack.findOne({
            where:{
                id:id
            }
        })
        if(pack){
            await pack.destroy()
            return "Paquete eliminado"
        }else return "No encontramos el usuario"
    }
}