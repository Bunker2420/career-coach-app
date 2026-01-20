"use server";
import connectDB from "../../src/lib/db.js";
import admin from "../../Models/Admin/admin.js";
import { redirect } from "next/navigation.js";

export default async function seedAdmin() {
  await connectDB();

  const existing = await admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (existing) {
    console.log("Admin already exists");
    process.exit(0);
  }

  const data = new admin({
    username: process.env.ADMIN_USERNAME,
    email: process.env.ADMIN_EMAIL,
  });

  const password = process.env.ADMIN_PASSWORD;

  try
  {
    await admin.register(data,password);
    console.log("admin signup successfull");
  }
  catch(err)
  {
    console.error("Admin signup failed",err);
    return {success:false,message:"admin signup failed"};
  }
  redirect('/');
}

