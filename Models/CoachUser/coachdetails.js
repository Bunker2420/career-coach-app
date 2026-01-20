import mongoose from "mongoose";

const { Schema } = mongoose;

const detailSchema = new Schema({
    coachId:{
        type:Schema.Types.ObjectId,
        ref:"coach",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    personalEmail:{ // for communication
        type:String,
        required:true
    },
    avatar: { url: String, filename: String },
    bio:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    experienceYears:{
        type:Number,
        required:true
    },
    aboutContent:{
        type:String,
        required:true
    },
    subjectsTaught:[{
       type:String,
       required:true
    }],
    rating:{
        type:String,
        default:0,
        required:true
    },
    available:{
        type:Boolean,
        required:true,
        default:true
    }
},{timestamps:true});

const coachdtls = mongoose.models.coachdtls || mongoose.model("coachdtls", detailSchema);

export default coachdtls;
