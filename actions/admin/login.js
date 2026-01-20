"use server";
import connectDB from "../../src/lib/db.js";
import Admin from "../../Models/Admin/admin.js";
import { redirect } from "next/navigation.js";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers.js";

export default async function uservalidate(formData)
{
    await connectDB();
    const username = formData.get("username");
    const password = formData.get("password");
    const JWT_SECRET = process.env.JWT_SECRET;

    const admin = await Admin.authenticate();
    const {user,error} = await admin(username,password);
    if (!user || error) {
    return { success: false, error: "Invalid username or password" };
    }
    console.log("Successfully login");

    const payload = {
        id:user._id.toString(),
        role:'admin'
    }

    const token = jwt.sign(payload,JWT_SECRET,{
        expiresIn:"1d"
    });

    const cookieStore = await cookies();
    cookieStore.set("auth_token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"lax",
        path:'/',
        maxAge:24*60*60
   });
    
    redirect('/admin/dashboard');
}