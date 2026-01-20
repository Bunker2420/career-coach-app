'use server'

import connectDB from "../../src/lib/db";
import student from "../../Models/StudentUser/student"; // Check your path
import detail from "../../Models/StudentUser/studentdetails";   // Check your path
import { revalidatePath } from "next/cache";


export async function deleteStudent(formData) {
    await connectDB();
  const id = formData.get("id"); 

  if (!id) return;

  try {
    // --- CASCADE DELETE LOGIC ---
    
    // 1. Dependent Transaction: Delete the Details first
    await detail.findOneAndDelete({ studentId: id });
    console.log(`Details deleted for student: ${id}`);

    // 2. Main Transaction: Delete the Student
    await student.findByIdAndDelete(id);
    console.log(`Student deleted: ${id}`);

    // 3. Refresh the page data automatically
    revalidatePath("/admin/students");
    
  } catch (error) {
    console.error("Delete failed:", error);
    throw new Error("Failed to delete student");
  }
}