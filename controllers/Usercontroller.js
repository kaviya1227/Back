    import User from "../models/Usermodels.js";
    // import bcrypt from "bcryptjs"

    // export  const registerUser = async(req,res)=>{
    //     try{
    //         const {name,email,password}=req.body
    //         const existingUser = await User.findOne({email:email})
    //         if(existingUser){
    //             return res.json({message:"User already exists"})
    //         }
    //         const hashedPassword = await bcrypt.hash(password,10)
    //         const User=await User.create({...req.body,password:hashedPassword})
    //         res.json({message:"User successfully registered",data:User})
    //     }
    //     catch(error){
    //         console.log(error);
    //         res.json({message:error})
    //     }
    // }








    export const Createuser = async (req,res)=>{
        try {

            const {name,email,age,password}=req.body
            const user=await User.create({name,email,age,password})
            res.json({message:"Created Successfully",data:user})
            
        } catch (error) {
            console.log(error);
            res.json({message:error.message})        
        }
    }


    export const getuser = async (req,res)=>{
        try {

            const user=await User.find()
            res.json({data:user})
            
        } catch (error) {
            console.log(error);
            res.json({message:error.message})  
        }
    }
    export const getUserById = async (req,res)=>{
        try {

            const {id} = req.params

            const user=await User.findById(id)
            res.json({data:user})
            
        } catch (error) {
            console.log(error);
            res.json({message:error.message})
            
            
        }
    }

    export const updateUser = async (req,res)=>{
        try {

            const {id} = req.params
            const {name,email,age}=req.body

            const existingUser=await User.findById(id)

            if(!existingUser){return res.json({message:"User not found"})}

            const user=await User.findByIdAndUpdate(id,{name,email,age},{new:true})
            res.json({message:"Updated Successfully",data:user})
            
        } catch (error) {
            console.log(error);
            res.json({message:error.message})
            
            
        }
    }
    export const deleteUser = async (req,res)=>{
        try {

            const {id} = req.params

            const existingUser=await User.findById(id)

            if(!existingUser){return res.json({message:"User not found"})}

            const user=await User.findByIdAndDelete(id)
            res.json({message:"Deleted Successfully",data:user})
            
        } catch (error) {
            console.log(error);
            res.json({message:error})
        }
    }






    export const loginUser = async (req,res)=>{
        try {
            const {email,password} = req.body

            const existingUser=await User.findOne({email})

            if(!existingUser){return res.json({message:"User not found"})}

            const matchedpassword =await bcrypt.compare(password.existingUser.password)
            if(!matchedpassword){
                return
            }

            
        } catch (error) {
            console.log(error);
            res.json({message:error})
        }
    }




