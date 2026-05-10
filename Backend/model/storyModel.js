import mongoosh from "mongoose";

const storySchema=new mongoosh.Schema({
    title:{type:String, required:true},
    url:{type:String, required:true},
    points:{type:Number, default:0},
    postedAt:{type:Date, default:Date.now},
    bookmarkedBy:[{type:mongoosh.Schema.Types.ObjectId,ref:"User"}]

},{timestamps:true})

const Story = mongoosh.model.Story||mongoosh.model("Story", storySchema);

export default Story;