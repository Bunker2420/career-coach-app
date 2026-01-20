import { redirect, notFound } from "next/navigation";
import { getSessionFromCookie } from "../../../../../lib/authSession";
import connectDB from "../../../../../lib/db";
import coachdtls from "../../../../../../Models/CoachUser/coachdetails";
import styles from "../../../../../css/dtldcoach.module.css";
import SubscribeButton from "../../../../../components/subscribedbtn";
import Subscription from "../../../../../../Models/Subscription/subscript";

export default async function CoachDetailPage({ params }) {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session) redirect("/authRequired");
  if (session.role !== "student") redirect("/unauthorized");
  const { id } = await params;
  const coach = await coachdtls
    .findById(id)
    .populate("coachId", "username email")
    .lean();

  if (!coach) {
    notFound();
  }
  const sub = await Subscription.findOne({
    studentId: session.id,
    coachId: coach.coachId._id,
  })
    .sort({ createdAt: -1 }) // latest
    .lean();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            {coach.name.charAt(0).toUpperCase()}
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.name}>{coach.name}</h1>
            <p className={styles.username}>@{coach.coachId.username}</p>
            <p className={styles.role}>
              {coach.position} · {coach.company}
            </p>
            <p className={styles.meta}>
              {coach.experienceYears} years experience · Rating {coach.rating}
            </p>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About the coach</h2>
          <p className={styles.text}>{coach.aboutContent}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Short bio</h2>
          <p className={styles.text}>{coach.bio}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.text}>{coach.personalEmail}</p>

          {/* ✅ ADDED SECTION: Message for Active Subscribers */}
          {sub?.status === "active" && (
            <div style={{ marginTop: "15px", padding: "12px", backgroundColor: "#f0fdf4", borderRadius: "8px", border: "1px solid #bbf7d0" }}>
              <p className={styles.text} style={{ marginBottom: "8px", color: "#15803d", fontWeight: "600" }}>
                ✅ We have already sent your details to the coach.
              </p>
              <p className={styles.text} style={{ color: "#166534" }}>
                Please contact the coach through the above email.
                Start sessions through GMeet and start learning.
                <br />
                <strong>Happy Learning! 🚀</strong>
                Track your progress here from your mentor
              </p>
            </div>
          )}
        </section>

        <footer className={styles.footer}>
          <SubscribeButton
            coachId={coach.coachId._id.toString()}
            currentStatus={sub?.status || null}
          />
          {sub?.status && (
            <p className={styles.helperText}>
              Current status: <strong>{sub.status}</strong>
            </p>
          )}

          {/* ✅ show feedback button only when subscription is active */}
          {sub?.status === "active" && (
            <a
              href={`/student/coaches/${coach.coachId._id.toString()}/feedback`}
              className={styles.feedbackButton}
            >
              View coach feedback
            </a>
          )}
        </footer>

      </div>
    </div>
  );
}