"use server";

import connectDB from "../../src/lib/db";
import { getSessionFromCookie } from "../../src/lib/authSession";
import Subscription from "../../Models/Subscription/subscript";
import Feedback from "../../Models/FeedBack/feedback";
import { redirect } from "next/navigation";

export async function saveFeedback(formData) {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session || session.role !== "coach") {
    return { success: false, error: "Unauthorized" };
  }

  const studentId = formData.get("studentId");
  const subscriptionId = formData.get("subscriptionId");
  const sessionSummary = formData.get("sessionSummary");
  const strengths = formData.get("strengths") || "";
  const improvements = formData.get("improvements") || "";
  const nextActions = formData.get("nextActions") || "";

  if (!studentId || !subscriptionId || !sessionSummary) {
    return { success: false, error: "All required fields must be filled." };
  }

  const sub = await Subscription.findOne({
    _id: subscriptionId,
    coachId: session.id,
    studentId,
    status: "active",
  });

  if (!sub) {
    return { success: false, error: "Active subscription not found." };
  }

  await Feedback.create({
    coachId: session.id,
    studentId,
    subscriptionId,
    sessionSummary,
    strengths,
    improvements,
    nextActions,
  });

  redirect(`/coach`);
}
