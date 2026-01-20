import styles from "../../../css/privacy.module.css";

export const metadata = {
  title: "Privacy | CareerCoach",
  description:
    "Simple overview of how CareerCoach thinks about privacy for students, coaches, and colleges.",
};

export default function PrivacyPage() {
  return (
    <div className={styles["cc-privacy-wrapper"]}>
      <header className={styles["cc-privacy-hero"]}>
        <h1 className={styles["cc-privacy-title"]}>Privacy at CareerCoach</h1>
        <p className={styles["cc-privacy-subtitle"]}>
          This page explains, in simple language, how data is treated inside
          CareerCoach for students, coaches, and colleges.
        </p>
      </header>

      <main className={styles["cc-privacy-main"]}>
        <section className={styles["cc-privacy-card"]}>
          <h2 className={styles["cc-privacy-section-title"]}>
            What information we use
          </h2>
          <ul className={styles["cc-privacy-list"]}>
            <li>
              Basic account details like name, email, and role
              (student/coach/admin).
            </li>
            <li>
              Learning‑related data such as subjects, progress status, and
              feedback between students and coaches.
            </li>
            <li>
              Technical information like pages visited and basic device data,
              used to keep the app running smoothly.
            </li>
          </ul>
        </section>

        <section className={styles["cc-privacy-card"]}>
          <h2 className={styles["cc-privacy-section-title"]}>
            Students and their data
          </h2>
          <ul className={styles["cc-privacy-list"]}>
            <li>
              Student data is used to show dashboards, roadmaps, and feedback so
              they can track learning progress.
            </li>
            <li>
              Coaches linked to a student can see only the information needed
              to guide that student effectively.
            </li>
            <li>
              Students can request edits to incorrect information through the
              support or contact pages. 
            </li>
          </ul>
        </section>

        <section className={styles["cc-privacy-card"]}>
          <h2 className={styles["cc-privacy-section-title"]}>
            Coaches, mentors, and colleges
          </h2>
          <ul className={styles["cc-privacy-list"]}>
            <li>
              Coach profiles focus on professional details like name, areas of
              expertise, and availability for students.
            </li>
            <li>
              Colleges or training partners may see anonymized or aggregated
              reports to understand overall progress of a batch, not private
              conversations. 
            </li>
            <li>
              CareerCoach does not sell personal contact details to unrelated
              third‑party marketers.
            </li>
          </ul>
        </section>

        <section className={styles["cc-privacy-card"]}>
          <h2 className={styles["cc-privacy-section-title"]}>
            Security and next steps
          </h2>
          <ul className={styles["cc-privacy-list"]}>
            <li>
              Data is stored using common industry practices and is only
              accessible to authorized parts of the system needed to run the
              platform. 
            </li>
            <li>
              As CareerCoach grows, a full legal privacy policy will be added,
              with more detailed sections on cookies, data retention, and user
              rights.
            </li>
            <li>
              Until then, users can contact{" "}
              <span className={styles["cc-privacy-email"]}>
                privacy@careercoach.app
              </span>{" "}
               for any privacy‑related questions.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
