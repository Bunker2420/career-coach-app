import styles from "../../../css/resume-guidelines.module.css";

export const metadata = {
  title: "Resume Guidelines | CareerCoach",
  description:
    "Simple resume guidelines for students and freshers using CareerCoach.",
};

export default function ResumeGuidelinesPage() {
  return (
    <div className={styles["cc-resume-wrapper"]}>
      <header className={styles["cc-resume-hero"]}>
        <h1 className={styles["cc-resume-title"]}>Resume guidelines</h1>
        <p className={styles["cc-resume-subtitle"]}>
          Keep your resume short, clear, and focused on skills and projects
          that match the roles you want.
        </p>
      </header>

      <main className={styles["cc-resume-main"]}>
        <section className={styles["cc-resume-card"]}>
          <h2 className={styles["cc-resume-section-title"]}>
            Basic structure for students
          </h2>
          <ul className={styles["cc-resume-list"]}>
            <li>1 page is enough for most students and freshers.</li>
            <li>Use a clean font and consistent spacing everywhere.</li>
            <li>Start with contact info, then a short 2–3 line summary.</li>
            <li>Put Education and key skills before anything else.</li>
          </ul>
        </section>

        <section className={styles["cc-resume-card"]}>
          <h2 className={styles["cc-resume-section-title"]}>
            Projects and skills
          </h2>
          <ul className={styles["cc-resume-list"]}>
            <li>Show 2–4 strong projects instead of a long list.</li>
            <li>
              For each project, mention tech stack and what you actually built.
            </li>
            <li>
              Use action verbs: built, implemented, optimized, designed, etc.
            </li>
            <li>
              Add links to GitHub or live demos when possible.
            </li>
          </ul>
        </section>

        <section className={styles["cc-resume-card"]}>
          <h2 className={styles["cc-resume-section-title"]}>
            Easy checklist before sending
          </h2>
          <ul className={styles["cc-resume-list"]}>
            <li>No spelling or grammar mistakes.</li>
            <li>Same font size and bullet style in all sections.</li>
            <li>
              Resume matches the job: keywords and skills from that JD are
              visible.
            </li>
            <li>
              A reviewer can understand your tech stack and level in 5 seconds.
            </li>
          </ul>
        </section>

        <section className={styles["cc-resume-note-section"]}>
          <p className={styles["cc-resume-note"]}>
            Tip: After updating your resume, upload it once in CareerCoach and
            ask your coach for specific feedback on clarity, projects, and
            impact.
          </p>
        </section>
      </main>
    </div>
  );
}
