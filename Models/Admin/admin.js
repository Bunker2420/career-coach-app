import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const AdminSchema = new Schema({
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
        default:'admin'
    }
},{
    timestamps:true
});

AdminSchema.plugin(passportLocalMongoose);

const admin = mongoose.models.admin || mongoose.model("admin", AdminSchema);

export default admin;
