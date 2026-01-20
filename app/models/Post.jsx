import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    postId:{type:Number,unique:true,required:true},
    title:{type:String,required:true,trim:true},
    content:{type:String,required:true,trim:true},
    date:{type:Date,default:Date.now},
})
const Post=mongoose.models.Post || mongoose.model("Post",postSchema);
export default Post;