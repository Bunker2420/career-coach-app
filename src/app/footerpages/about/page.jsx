import styles from "../../../css/about-careercoach.module.css";

export const metadata = {
  title: "About CareerCoach",
  description:
    "Learn what CareerCoach is, who it is for, and how it helps students and coaches work together on real career growth.",
};

export default function AboutCareerCoachPage() {
  return (
    <div className={styles["cc-about-wrapper"]}>
      <header className={styles["cc-about-hero"]}>
        <h1 className={styles["cc-about-title"]}>About CareerCoach</h1>
        <p className={styles["cc-about-subtitle"]}>
          CareerCoach is a focused space where students, coaches, and structured
          plans come together to turn learning into real opportunities.
        </p>
      </header>

      <main className={styles["cc-about-main"]}>
        <section className={styles["cc-about-card"]}>
          <h2 className={styles["cc-about-section-title"]}>Why we built it</h2>
          <p className={styles["cc-about-text"]}>
            Most students jump between YouTube playlists, random notes, and
            coding sites without a clear path or feedback. CareerCoach was
            created to fix that: one clean platform where you always know what
            to study next and what your coach expects from you this week.
          </p>
          <p className={styles["cc-about-text"]}>
            Instead of chasing every new resource, you and your coach agree on
            a roadmap, track subjects and progress, and keep all feedback in one
            place so nothing is lost between messages or calls.
          </p>
        </section>

        <section className={styles["cc-about-card"]}>
          <h2 className={styles["cc-about-section-title"]}>
            How CareerCoach helps you
          </h2>
          <ul className={styles["cc-about-list"]}>
            <li>
              Students get a clear weekly plan, subject dashboards, and written
              feedback instead of vague advice.
            </li>
            <li>
              Coaches get a single view of all students, their status, and what
              needs attention in the next session.
            </li>
            <li>
              Everyone can see progress over time, not just “busy work” or
              random tasks.
            </li>
          </ul>
        </section>

        <section className={styles["cc-about-card"]}>
          <h2 className={styles["cc-about-section-title"]}>
            What makes it different
          </h2>
          <ul className={styles["cc-about-list"]}>
            <li>
              Designed first for CS and tech students: subjects, topics, and
              pages match real interview and placement needs. 
            </li>
            <li>
              Simple UI: every screen answers one question—“What should I do
              now?” instead of overwhelming you with options. 
            </li>
            <li>
              Built by someone who is going through the same journey—solving
              DSA, building projects, and preparing for top‑tech interviews.
            </li>
          </ul>
        </section>

        <section className={styles["cc-about-card"]}>
          <h2 className={styles["cc-about-section-title"]}>Vision</h2>
          <p className={styles["cc-about-text"]}>
            The long‑term vision for CareerCoach is to become the control
            center for your career growth: one place that connects your
            learning roadmap, projects, resume, interview prep, and coach
            feedback into a single, living story of your progress.
          </p>
          <p className={styles["cc-about-text"]}>
            As the platform grows, it can add smarter insights, templates, and
            automation—but the heart will always stay the same: a student, a
            coach, and a clear plan that actually gets finished.
          </p>
        </section>
      </main>
    </div>
  );
}
