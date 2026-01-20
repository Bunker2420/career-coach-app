import styles from "../../../css/skill-roadmap.module.css";

export const metadata = {
  title: "Skill Roadmap | CareerCoach",
  description:
    "A simple roadmap showing how students can grow their skills step by step in CareerCoach.",
};

export default function SkillRoadmapPage() {
  return (
    <div className={styles["cc-roadmap-wrapper"]}>
      <header className={styles["cc-roadmap-hero"]}>
        <h1 className={styles["cc-roadmap-title"]}>Skill roadmap</h1>
        <p className={styles["cc-roadmap-subtitle"]}>
          Follow this simple path to grow from fundamentals to confident,
          interview‑ready skills with CareerCoach.
        </p>
      </header>

      <main className={styles["cc-roadmap-main"]}>
        <section className={styles["cc-roadmap-steps"]}>
          <article className={styles["cc-roadmap-step"]}>
            <div className={styles["cc-roadmap-badge"]}>Level 1</div>
            <h2 className={styles["cc-roadmap-step-title"]}>Foundations</h2>
            <p className={styles["cc-roadmap-step-text"]}>
              Build strong basics so you are not confused later when topics
              become harder.
            </p>
            <ul className={styles["cc-roadmap-list"]}>
              <li>Set up your learning plan with your coach.</li>
              <li>Finish core topics for 1–2 key subjects.</li>
              <li>Practice small daily tasks instead of long, random sessions.</li>
            </ul>
          </article>

          <article className={styles["cc-roadmap-step"]}>
            <div className={styles["cc-roadmap-badge"]}>Level 2</div>
            <h2 className={styles["cc-roadmap-step-title"]}>Consistency</h2>
            <p className={styles["cc-roadmap-step-text"]}>
              Turn studying into a habit and start applying what you know in
              small projects and problems.
            </p>
            <ul className={styles["cc-roadmap-list"]}>
              <li>Follow weekly goals given by your coach.</li>
              <li>Track progress from your dashboard and close gaps.</li>
              <li>Work on focused practice: DSA sets, mini-projects, or labs.</li>
            </ul>
          </article>

          <article className={styles["cc-roadmap-step"]}>
            <div className={styles["cc-roadmap-badge"]}>Level 3</div>
            <h2 className={styles["cc-roadmap-step-title"]}>Interview ready</h2>
            <p className={styles["cc-roadmap-step-text"]}>
              Convert your learning into outcomes: projects, interview practice,
              and strong revision.
            </p>
            <ul className={styles["cc-roadmap-list"]}>
              <li>Polish 2–3 solid projects you can explain clearly.</li>
              <li>Practice mock interviews and timed problems.</li>
              <li>Review weak areas based on feedback from your coach.</li>
            </ul>
          </article>
        </section>

        <section className={styles["cc-roadmap-note-section"]}>
          <p className={styles["cc-roadmap-note"]}>
            This roadmap is a basic starting point. Your coach can customize
            levels, subjects, and timelines based on your current skills and
            target companies.
          </p>
        </section>
      </main>
    </div>
  );
}
