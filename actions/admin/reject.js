"use server";

import connectDB from "../../src/lib/db";
import Subscription from "../../Models/Subscription/subscript";
import { getSessionFromCookie } from "../../src/lib/authSession";
import { redirect } from "next/navigation";

export async function rejectSubscription(id) {
  await connectDB();
  const session = await getSessionFromCookie();
//   if (!session || session.role !== "admin") {
//     redirect("/unauthorized");
//   }

  await Subscription.findByIdAndUpdate(id, { status: "cancelled" });
  redirect("/admin/subscriptions");
}