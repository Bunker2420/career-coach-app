"use server";

import connectDB from "../../src/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import student from "../../Models/StudentUser/student.js";
import { redirect } from "next/navigation";

export default async function studentLogin(formData) {
  await connectDB();
  const JWT_SECRET = process.env.JWT_SECRET;
  const username = formData.get("username"); 
  const password = formData.get("password");

  const authFn = student.authenticate();
  const { user, error } = await authFn(username, password);

  if (!user || error) {
    return { success: false, error: "Invalid username or password" };
  }

  const payload = {  
    id: user._id.toString(),
    role: "student",             
  };

  const token = jwt.sign(payload, JWT_SECRET, { 
    expiresIn: "1d",
  });

  const cookieStore = await cookies();
  (cookieStore).set("auth_token",token,{
    httpOnly:true,
    secure:true,
    sameSite:"lax",
    path:"/",
    maxAge: 24*60*60
  });

  if (user.hasCompletedProfile) {
    redirect("/");
  } else {
    redirect("/studentsdetail");
  }
}
