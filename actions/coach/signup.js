"use server";
import { redirect } from "next/navigation";
import coach from "../../Models/CoachUser/coach.js";
import connectDB from "../../src/lib/db.js";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers.js";

export default async function coachsignup(formData)
{
    await connectDB();
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const JWT_SECRET = process.env.JWT_SECRET;

    const data = new coach({
        username:username,
        email:email
    });


    try{
        await coach.register(data,password);
        console.log("coach signed up")

        const payload = {
            id:data._id.toString(),
            role:"coach"
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
        })
    }
    catch(err)
    {
        console.error("coach signup error:", err);
        return { success: false, error: "Signup failed" };
    }
    redirect('/coach/details');
}