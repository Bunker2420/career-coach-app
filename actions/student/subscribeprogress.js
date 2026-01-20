"use server";

import connectDB from "../../src/lib/db";
import Subscription from "../../Models/Subscription/subscript";
import { getSessionFromCookie } from "../../src/lib/authSession";

export default async function subscribeToCoach(coachId) {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session || session.role !== "student") {
    return { ok: false, error: "Please login as student to subscribe." };
  }

  const existing = await Subscription.findOne({
    studentId: session.id,
    coachId,
    status: { $in: ["pending", "active"] }, // ✅ cancelled/expired allowed
  });

  if (existing) {
    return {
      ok: false,
      error: "You already have a pending or active subscription with this coach.",
    };
  }

  await Subscription.create({
    studentId: session.id,
    coachId,
    status: "pending",
    createdBy: "student",
  });

  return { ok: true };
}
