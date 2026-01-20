import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../../lib/authSession";
import connectDB from "../../../lib/db";
import Subscription from "../../../../Models/Subscription/subscript";
import styles from "../../../css/adminSubs.module.css";
import { approveSubscription } from "../../../../actions/admin/approve";
import { rejectSubscription } from "../../../../actions/admin/reject";

export default async function AdminSubscriptionsPage() {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session || session.role !== "admin") {
    redirect("/admin/authRequired");
  }

  const subs = await Subscription.find({ status: "pending" })
    .populate("studentId", "username email")
    .populate("coachId", "username email")
    .lean();

  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.title}>Pending coach subscriptions</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Coach</th>
            <th>Requested at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((s) => (
            <tr key={s._id.toString()}>
              <td>{s.studentId.username}</td>
              <td>{s.coachId.username}</td>
              <td>{new Date(s.createdAt).toLocaleString()}</td>
              <td className={styles.actionsCell}>
                <form action={approveSubscription.bind(null, s._id.toString())}>
                  <button type="submit" className={styles.approveBtn}>
                    Approve
                  </button>
                </form>
                <form action={rejectSubscription.bind(null, s._id.toString())}>
                  <button type="submit" className={styles.rejectBtn}>
                    Reject
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
