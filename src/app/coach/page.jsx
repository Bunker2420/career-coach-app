import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../lib/authSession";
import connectDB from "../../lib/db";
import Subscription from "../../../Models/Subscription/subscript";
import student from "../../../Models/StudentUser/student";
import styles from "../../css/coachhome.module.css";

export default async function CoachHomePage() {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session) redirect("/coach/authRequired");
  if (session.role !== "coach") redirect("/unauthorized");

  const subs = await Subscription.find({
    coachId: session.id,
    status: "active",
  })
    .populate("studentId", "username email")
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>Welcome coach</h1>
      <p className={styles.subtitle}>
        Here are your active students. Open a student to give feedback and
        track progress.
      </p>

      {subs.length === 0 ? (
        <p className={styles.emptyText}>
          No active students yet. Approved subscriptions will appear here.
        </p>
      ) : (
        <div className={styles.studentsList}>
          {subs.map((s) => (
            <div key={s._id.toString()} className={styles.studentCard}>
              <div className={styles.avatar}>
                {s.studentId.username.charAt(0).toUpperCase()}
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{s.studentId.username}</p>
                <p className={styles.meta}>
                  Subscribed on{" "}
                  {new Date(s.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <a
                href={`/coach/${s.studentId._id}`}
                className={styles.feedbackButton}
              >
                Feedback & progress
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}