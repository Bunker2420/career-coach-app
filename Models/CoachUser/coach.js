import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const CoachSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:'coach'
    },
    hasCompletedProfile:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

CoachSchema.plugin(passportLocalMongoose);

const coach = mongoose.models.coach || mongoose.model("coach", CoachSchema);

export default coach;
