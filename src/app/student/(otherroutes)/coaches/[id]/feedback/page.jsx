import { redirect, notFound } from "next/navigation";
import connectDB from "../../../../../../lib/db";
import { getSessionFromCookie } from "../../../../../../lib/authSession";
import Subscription from "../../../../../../../Models/Subscription/subscript";
import Feedback from "../../../../../../../Models/FeedBack/feedback";
import coachdtls from "../../../../../../../Models/CoachUser/coachdetails";
import styles from "../../../../../../css/studentdFeedBack.module.css";

export const dynamic = "force-dynamic";

export default async function StudentCoachFeedbackPage({ params }) {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session) redirect("/student/authRequired");
  if (session.role !== "student") redirect("/unauthorized");

  const { id:coachId } = await params;

  const sub = await Subscription.findOne({
    coachId,
    studentId: session.id,
    status: "active",
  }).lean();

  if (!sub) notFound();

  const coach = await coachdtls
    .findOne({ coachId })
    .populate("coachId", "username")
    .lean();

  const feedbacks = await Feedback.find({
    coachId,
    studentId: session.id,
  })
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Feedback from {coach?.name || coach?.coachId?.username}
        </h1>
        <p className={styles.subtitle}>
          Subscription active since{" "}
          {new Date(sub.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </header>

      {feedbacks.length === 0 ? (
        <p className={styles.emptyText}>
          No feedback yet. Your coach will update this after your sessions.
        </p>
      ) : (
        <div className={styles.list}>
          {feedbacks.map((f) => (
            <article key={f._id.toString()} className={styles.card}>
              <p className={styles.date}>
                {new Date(f.createdAt).toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              <h2 className={styles.sectionTitle}>Session summary</h2>
              <p className={styles.text}>{f.sessionSummary}</p>

              {f.strengths && (
                <>
                  <h3 className={styles.smallTitle}>Strengths</h3>
                  <p className={styles.text}>{f.strengths}</p>
                </>
              )}

              {f.improvements && (
                <>
                  <h3 className={styles.smallTitle}>Improvements</h3>
                  <p className={styles.text}>{f.improvements}</p>
                </>
              )}

              {f.nextActions && (
                <>
                  <h3 className={styles.smallTitle}>Next actions</h3>
                  <p className={styles.text}>{f.nextActions}</p>
                </>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
