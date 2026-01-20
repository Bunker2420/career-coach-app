"use server";
import connectDB from "../../src/lib/db.js";
import Admin from "../../Models/Admin/admin.js";
import { redirect } from "next/navigation.js";

export default async function emailvalidate(FormData)
{
    await connectDB();
    const email = FormData.get("email");
    const admin = await Admin.findOne({email:email});
    if(!admin)
    {
        console.log("Admin not found")
        redirect('/wrongmail')
        return({success:false,message:"Admin not found"});
    }
    redirect('/admin/login');
}