import Product from "../models/Productmodels.js";

export const createProduct =async(req,res)=>{
    try {
        const {name,price,description,category}=req.body
        const product=await Product.create({name,price,description,category})
        res.json({message:"Created Successfully...",data:Product})
    } catch (error) {
        console.log(error);
    }
}