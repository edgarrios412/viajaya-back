const {Router} = require("express")
const {getUsers, putUser, postUser, deleteUser} = require("../controllers/userController")

const userRoutes = Router()

userRoutes.get("/", async (req,res) => {
    // Traer todos los usuarios
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message:error})
    }
})
userRoutes.post("/", async (req,res) => {
    // Crear un usuarios
    const user = req.body
    try {
        const users = await postUser(user)
        res.status(200).json({message:users})
    } catch (error) {
        res.status(404).json({message:error})
    }
})



userRoutes.put("/", async (req,res) => {
    // Editar un usuario
    const user = req.body
    try {
        const users = await putUser(user)
        res.status(200).json({message:users})
    } catch (error) {
        res.status(404).json({message:error})
    }
})

userRoutes.delete("/:id", async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try {
        const user = await deleteUser(id)
        res.status(200).json({message:user})
    } catch (error) {
        res.status(404).json({message:error})
    }
})



module.exports = userRoutes