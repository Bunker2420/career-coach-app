'use server'
import connectDB from "../../src/lib/db";
import coach from "../../Models/CoachUser/coach";        // Adjust path if needed
import coachdtls from "../../Models/CoachUser/coachdetails"; // Adjust path if needed
import { revalidatePath } from "next/cache";

export async function deleteCoach(formData) {
    await connectDB();
  const id = formData.get("id");

  if (!id) return;

  try {
    // --- CASCADE DELETE LOGIC ---

    // 1. Delete the dependent Details first (Child)
    // Note: Schema uses 'coachId' as the reference key
    await coachdtls.findOneAndDelete({ coachId: id });
    console.log(`Details deleted for coach: ${id}`);

    // 2. Delete the Main Coach record (Parent)
    await coach.findByIdAndDelete(id);
    console.log(`Coach deleted: ${id}`);

    // 3. Refresh the UI
    revalidatePath("/admin/coaches");
    
  } catch (error) {
    console.error("Delete failed:", error);
    throw new Error("Failed to delete coach");
  }
}