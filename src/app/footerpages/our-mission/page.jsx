import styles from "../../../css/our-mission.module.css";

export const metadata = {
  title: "Our Mission | CareerCoach",
  description:
    "The mission behind CareerCoach and how it guides every feature we build for students, coaches, and colleges.",
};

export default function OurMissionPage() {
  return (
    <div className={styles["cc-mission-wrapper"]}>
      <header className={styles["cc-mission-hero"]}>
        <h1 className={styles["cc-mission-title"]}>Our mission</h1>
        <p className={styles["cc-mission-subtitle"]}>
          CareerCoach exists to give every serious student a clear path,
          supportive mentor, and real chances to grow into the career they want.
        </p>
      </header>

      <main className={styles["cc-mission-main"]}>
        <section className={styles["cc-mission-card"]}>
          <h2 className={styles["cc-mission-section-title"]}>
            From confusion to clarity
          </h2>
          <p className={styles["cc-mission-text"]}>
            Today, students are surrounded by content but starved for direction.
            The mission of CareerCoach is to replace that confusion with a simple
            answer: here is your roadmap, here is your next task, and here is a
            mentor who actually tracks your progress.
          </p>
          <p className={styles["cc-mission-text"]}>
            Every subject, dashboard, and feedback view is designed to make the
            next step obvious instead of forcing students to guess what to do
            with their limited time.
          </p>
        </section>

        <section className={styles["cc-mission-card"]}>
          <h2 className={styles["cc-mission-section-title"]}>
            Human coaching, powered by technology
          </h2>
          <p className={styles["cc-mission-text"]}>
            Technology should not replace mentors; it should amplify them. Our
            mission is to give coaches simple tools to see where each student
            stands, share structured feedback, and build habits that last beyond
            any single course or batch. 
          </p>
          <p className={styles["cc-mission-text"]}>
            When the platform handles tracking, reminders, and structure,
            mentors are free to focus on deeper conversations about mindset,
            problem‑solving, and long‑term growth.
          </p>
        </section>

        <section className={styles["cc-mission-card"]}>
          <h2 className={styles["cc-mission-section-title"]}>
            Accessible, outcome‑focused preparation
          </h2>
          <p className={styles["cc-mission-text"]}>
            CareerCoach aims to make serious, outcome‑driven preparation
            accessible to students in any college, not only a few big campuses.
            The focus is always on real outcomes: stronger skills, better
            projects, confident interviews, and more doors opening.
          </p>
          <p className={styles["cc-mission-text"]}>
            As the platform grows, the mission stays the same: help students and
            mentors work together in a focused way so hard work actually turns
            into visible progress and opportunities.
          </p>
        </section>
      </main>
    </div>
  );
}
