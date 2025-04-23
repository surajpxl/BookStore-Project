import mongoose from "mongoose";

const booScheema= new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
})
const Book = mongoose.model("Book", booScheema);
export default Book;