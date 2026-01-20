import { redirect, notFound } from "next/navigation";
import { getSessionFromCookie } from "../../../../lib/authSession";
import connectDB from "../../../../lib/db";
import Subscription from "../../../../../Models/Subscription/subscript";
import Feedback from "../../../../../Models/FeedBack/feedback";
import student from "../../../../../Models/StudentUser/student"; 
import { saveFeedback } from "../../../../../actions/coach/coachfeedbackform";
import styles from "../../../../css/feedbackform.module.css";

export const dynamic = "force-dynamic";

export default async function CoachStudentFeedbackPage({ params }) {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session) redirect("/authRequired");
  if (session.role !== "coach") redirect("/unauthorized");

  const { studentId } = await params;

  const sub = await Subscription.findOne({
    coachId: session.id,
    studentId,
    status: "active",
  })
    .sort({ createdAt: -1 })
    .lean();

  if (!sub) notFound();

  const studentDoc = await student
    .findById(studentId)
    .select("username email")
    .lean();

  if (!studentDoc) notFound();

  const lastFeedback = await Feedback.findOne({
    coachId: session.id,
    studentId,
  })
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.avatar}>
          {studentDoc.username.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className={styles.title}>{studentDoc.username}</h1>
          <p className={styles.subtitle}>
            Active student · since{" "}
            {new Date(sub.createdAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </header>

      {lastFeedback && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Last session summary</h2>
          <p className={styles.text}>{lastFeedback.sessionSummary}</p>
        </section>
      )}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>New feedback</h2>

        <form action={saveFeedback}>
          <input type="hidden" name="studentId" value={studentId} />
          <input
            type="hidden"
            name="subscriptionId"
            value={sub._id.toString()}
          />

          <label className={styles.label}>
            Session summary (yesterday discussed)
            <textarea
              name="sessionSummary"
              required
              className={styles.textarea}
              rows={4}
              placeholder="What did you and the student discuss yesterday?"
            />
          </label>

          <label className={styles.label}>
            Strengths
            <textarea
              name="strengths"
              className={styles.textarea}
              rows={3}
              placeholder="What did the student do well?"
            />
          </label>

          <label className={styles.label}>
            Improvements
            <textarea
              name="improvements"
              className={styles.textarea}
              rows={3}
              placeholder="Where can the student improve?"
            />
          </label>

          <label className={styles.label}>
            Next actions
            <textarea
              name="nextActions"
              className={styles.textarea}
              rows={3}
              placeholder="Tasks or goals for the next session."
            />
          </label>

          <button type="submit" className={styles.primaryButton}>
            Save feedback
          </button>
        </form>
      </section>
    </div>
  );
}
