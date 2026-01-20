import styles from "../../../css/career-articles.module.css";

export const metadata = {
  title: "Career Articles | CareerCoach",
  description:
    "Short, practical career articles for students and freshers using CareerCoach.",
};

export default function CareerArticlesPage() {
  return (
    <div className={styles["cc-art-wrapper"]}>
      <header className={styles["cc-art-hero"]}>
        <h1 className={styles["cc-art-title"]}>Career articles</h1>
        <p className={styles["cc-art-subtitle"]}>
          Quick reads to help you plan your career, build skills, and use
          opportunities while you are still in college.
        </p>
      </header>

      <main className={styles["cc-art-main"]}>
        <section className={styles["cc-art-grid"]}>
          <article className={styles["cc-art-card"]}>
            <h2 className={styles["cc-art-card-title"]}>
              Using college years wisely
            </h2>
            <p className={styles["cc-art-card-text"]}>
              Focus on a few useful skills, join at least one good project or
              club, and keep your resume updated every semester. 
            </p>
            <ul className={styles["cc-art-list"]}>
              <li>Set 1–2 clear goals for this semester.</li>
              <li>Take subjects and electives that support those goals.</li>
              <li>Use college events and fairs to explore companies.</li>
            </ul>
          </article>

          <article className={styles["cc-art-card"]}>
            <h2 className={styles["cc-art-card-title"]}>
              Building real experience
            </h2>
            <p className={styles["cc-art-card-text"]}>
              Internships, part‑time work, and serious side projects teach more
              than just reading theory. 
            </p>
            <ul className={styles["cc-art-list"]}>
              <li>Start with small freelance, campus, or open‑source work.</li>
              <li>Document your work on GitHub and LinkedIn.</li>
              <li>Ask mentors for feedback on what to improve next.</li>
            </ul>
          </article>

          <article className={styles["cc-art-card"]}>
            <h2 className={styles["cc-art-card-title"]}>
              Growing your network
            </h2>
            <p className={styles["cc-art-card-text"]}>
              Many opportunities come from people you already know, not only
              job portals. 
            </p>
            <ul className={styles["cc-art-list"]}>
              <li>Talk to seniors, alumni, and speakers after events.</li>
              <li>Keep a simple LinkedIn profile with your projects.</li>
              <li>Stay in touch by sharing updates a few times a year.</li>
            </ul>
          </article>
        </section>

        <section className={styles["cc-art-note-section"]}>
          <p className={styles["cc-art-note"]}>
            Later, CareerCoach can turn each topic into a full article with
            examples, templates, and checklists tailored to your target roles.
          </p>
        </section>
      </main>
    </div>
  );
}
