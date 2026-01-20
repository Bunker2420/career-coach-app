"use server";
import connectDB from '../../src/lib/db.js';
import student from '../../Models/StudentUser/student.js';
import { redirect } from 'next/navigation.js';
import { cookies } from "next/headers";      
import jwt from "jsonwebtoken";  
export default async function stsignup(formData) {
    await connectDB();
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const user = new student({username:username,email:email});
    const JWT_SECRET = process.env.JWT_SECRET;
    try {
    await student.register(user, password); // hashes + saves
    console.log("Student signed up");

     const payload = {
        id: user._id.toString(),
        role: "student",
      };

      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1d",
      });

      const cookieStore = await cookies();
      (cookieStore).set("auth_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 24 * 60 * 60, 
      });
      } catch (err) {
        console.error("Student signup error:", err);
        return { success: false, error: "Signup failed" };
      } 
          // 5) Redirect to logged-in page
      redirect("/student/details");
}

