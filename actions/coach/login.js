"use server";
import { redirect } from "next/navigation";
import coach from "../../Models/CoachUser/coach";
import connectDB from "../../src/lib/db.js";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export default async function coachlogin(formData)
{
    await connectDB();
    const username = formData.get("username");
    const password = formData.get("password");
    const JWT_SECRET = process.env.JWT_SECRET;
    const authFn =await coach.authenticate();
    const {user,error} = await authFn(username,password);
    if (!user || error) {
    return { success: false, error: "Invalid username or password" };
    }

    const payload = {
        id:user._id.toString(),
        role:"coach"
    }

    const token = jwt.sign(payload,JWT_SECRET,{
        expiresIn:"1d"
    });

    const cookieStore = await cookies();
    cookieStore.set("auth_token",token,{
        httpOnly:true,
        secure:true,
        sameSite:'lax',
        path:'/',
        maxAge:24*60*60
    })
    if (user.hasCompletedProfile)
    {
        redirect("/");
    } 
    else 
    {
        redirect("/coach/details");
    }
}