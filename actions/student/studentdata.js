"use server";
import connectDB from "../../src/lib/db.js";
import detail from "../../Models/StudentUser/studentdetails.js";
import student from "../../Models/StudentUser/student.js";
import { getSessionFromCookie } from "../../src/lib/authSession.js";
import { redirect } from "next/navigation.js";

export default async function storeDetails(formData)
{
    await connectDB();
    const session = await getSessionFromCookie();
    const name = formData.get("name");
    const degree = formData.get("degree");
    const college = formData.get("college");
    const year = formData.get("year");
    const goals = formData.get("goal");
    const preferredDomain = formData.get("preferredDomain");
    const dtl = new detail({
        studentId:session.id,
        name:name,
        education:{
            degree:degree,
            college:college,
            year:year
        },
        goals:goals,
        preferredDomain:[preferredDomain]
    });
    await dtl.save();
    await student.findByIdAndUpdate(session.id, {
    $set: { hasCompletedProfile: true },
  });

    redirect('/student/subjects');
}