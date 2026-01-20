import styles from "../../../css/colleges-mentors.module.css";

export const metadata = {
  title: "Colleges & Mentors | CareerCoach",
  description:
    "Information for colleges, training institutes, and mentors who want to collaborate with CareerCoach.",
};

export default function CollegesMentorsPage() {
  return (
    <div className={styles["cc-cm-wrapper"]}>
      <header className={styles["cc-cm-hero"]}>
        <h1 className={styles["cc-cm-title"]}>For colleges & mentors</h1>
        <p className={styles["cc-cm-subtitle"]}>
          Partner with CareerCoach to bring structured roadmaps, progress
          tracking, and mentor support to your students.
        </p>
      </header>

      <main className={styles["cc-cm-main"]}>
        <section className={styles["cc-cm-card"]}>
          <h2 className={styles["cc-cm-section-title"]}>Promote CareerCoach in your campus</h2>
          <p className={styles["cc-cm-text"]}>
            Colleges can use CareerCoach as a simple layer on top of existing
            classes, labs, and training programs. Share the platform in your
            orientation sessions, placement talks, or department groups to help
            students follow clear skill roadmaps instead of random prep.
          </p>
          <p className={styles["cc-cm-text"]}>
            If you run a training cell or placement team, you can recommend
            CareerCoach to batches preparing for internships, product roles, or
            specialized tech tracks.
          </p>
        </section>

        <section className={styles["cc-cm-card"]}>
          <h2 className={styles["cc-cm-section-title"]}>Collaborate with us</h2>
          <ul className={styles["cc-cm-list"]}>
            <li>
              Host joint workshops on topics like DSA prep, resume building, and
              interview strategy for your students.
            </li>
            <li>
              Create custom subject roadmaps that match your syllabus and
              placement targets inside CareerCoach.
            </li>
            <li>
              Run pilot programs with a small group of students and faculty
              mentors, then scale based on results.
            </li>
          </ul>
        </section>

        <section className={styles["cc-cm-card"]}>
          <h2 className={styles["cc-cm-section-title"]}>For individual mentors</h2>
          <p className={styles["cc-cm-text"]}>
            If you already guide students or juniors, CareerCoach helps you move
            from scattered chats to a single dashboard where you can see all
            your students, their subjects, and pending tasks.
          </p>
          <ul className={styles["cc-cm-list"]}>
            <li>Share structured plans instead of ad‑hoc advice in DMs.</li>
            <li>Track who is actually completing work each week.</li>
            <li>
              Use written feedback so students can revisit your guidance any
              time.
            </li>
          </ul>
        </section>

        <section className={styles["cc-cm-card"]}>
          <h2 className={styles["cc-cm-section-title"]}>Get in touch</h2>
          <p className={styles["cc-cm-text"]}>
            If you are interested in promoting CareerCoach in your college or
            collaborating as a mentor, reach out with a short note about your
            institution or mentoring experience.
          </p>
          <p className={styles["cc-cm-text"]}>
             email:{" "}
            <span className={styles["cc-cm-email"]}>
              partners@careercoach.app
            </span>
          </p>
        </section>
      </main>
    </div>
  );
}
