const {User} = require("../db")

module.exports = {
    getUsers: async () => {
        const users = await User.findAll()
        return users
    },
    putUser: async (u) => {
        const user = await User.findOne({
            where:{
                id:u.id
            }
        })
        if(user){
            if(u.name) user.name = u.name
            if(u.lastname) user.lastname = u.lastname
            if(u.email) user.email = u.email
            if(u.phone) user.phone = u.phone
            if(u.password) user.password = u.password
            await user.save()
            return "Usuario actualizado"
        }else return "No lo encontramos"
    },
    postUser: async (user) => {
        await User.create(user)
        return "Usuario creado con exito"
    },
    deleteUser: async (id) => {
        const user = await User.findOne({
            where:{
                id:id
            }
        })
        if(user){
            await user.destroy()
            return "Usuario eliminado con exito"
        }else return "No encontramos el usuario"
    }
}