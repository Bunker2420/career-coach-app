import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../../../lib/authSession";
import connectDB from "../../../../lib/db";
import coachdtls from "../../../../../Models/CoachUser/coachdetails";
import styles from "../../../../css/coachdashboard.module.css";

export default async function CoachDashboardPage() {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session) redirect("/authRequired");
  if (session.role !== "coach") redirect("/unauthorized");

  const profile = await coachdtls
    .findOne({ coachId: session.id })
    .populate("coachId", "username email")
    .lean();

  if (!profile) {
    // coach hasn’t completed profile yet
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Complete your profile</h1>
          <p className={styles.subtitle}>
            Add your name, company, role, and experience so students can know
            you better.
          </p>
          <a href="/coach/details" className={styles.primaryButton}>
            Edit profile
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.username}>@{profile.coachId.username}</p>
            <p className={styles.role}>
              {profile.position} · {profile.company}
            </p>
            <p className={styles.meta}>
              {profile.experienceYears} years experience · Rating{" "}
              {profile.rating}
            </p>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About you</h2>
          <p className={styles.text}>{profile.aboutContent}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Short bio</h2>
          <p className={styles.text}>{profile.bio}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.text}>{profile.personalEmail}</p>
        </section>

      </div>
    </div>
  );
}
