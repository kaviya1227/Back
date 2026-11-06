import express from 'express'
import { Createuser, deleteUser, getuser, getUserById, registerUser, updateUser } from '../controllers/Usercontroller.js'

const router = express.Router()

router.post("/",Createuser)
router.get("/",getuser)
router.get("/:id",getUserById)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)




export default router