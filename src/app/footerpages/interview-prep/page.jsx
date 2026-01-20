import styles from "../../../css/interview-prep.module.css";

export const metadata = {
  title: "Interview Prep Guide | CareerCoach",
  description:
    "Simple interview preparation guidelines for CareerCoach students and freshers.",
};

export default function InterviewPrepPage() {
  return (
    <div className={styles["cc-int-wrapper"]}>
      <header className={styles["cc-int-hero"]}>
        <h1 className={styles["cc-int-title"]}>Interview prep guide</h1>
        <p className={styles["cc-int-subtitle"]}>
          Use this quick guide to organize your coding, core CS, and HR
          preparation before interviews.
        </p>
      </header>

      <main className={styles["cc-int-main"]}>
        <section className={styles["cc-int-card"]}>
          <h2 className={styles["cc-int-section-title"]}>1. Coding practice</h2>
          <ul className={styles["cc-int-list"]}>
            <li>
              Pick one main language for interviews and stick to it (Java,
              Python, etc.).
            </li>
            <li>
              Revise core DSA patterns: arrays, strings, hashing, two pointers,
              sliding window, trees, graphs, DP. 
            </li>
            <li>
              Practice on LeetCode/HackerRank with a mix of easy and medium
              questions and always explain your approach aloud.
            </li>
          </ul>
        </section>

        <section className={styles["cc-int-card"]}>
          <h2 className={styles["cc-int-section-title"]}>
            2. Core CS & projects
          </h2>
          <ul className={styles["cc-int-list"]}>
            <li>
              Brush up key topics: OS, DBMS, OOPS, networks, basic system
              design (for higher roles). 
            </li>
            <li>
              For each project, prepare a 1–2 minute story: problem, tech
              stack, your role, and impact. 
            </li>
            <li>
              Be ready to open your GitHub and walk through important parts of
              the code if asked. 
            </li>
          </ul>
        </section>

        <section className={styles["cc-int-card"]}>
          <h2 className={styles["cc-int-section-title"]}>
            3. HR and final checks
          </h2>
          <ul className={styles["cc-int-list"]}>
            <li>
              Prepare short answers for “Tell me about yourself”, strengths,
              weaknesses, and why this company.
            </li>
            <li>
              Do at least one mock interview to practice communication and time
              management. 
            </li>
            <li>
              Sleep well, reach early, and keep resume + notebook ready the day
              before the interview.
            </li>
          </ul>
        </section>

        <section className={styles["cc-int-note-section"]}>
          <p className={styles["cc-int-note"]}>
            You can use CareerCoach to track which topics are done, which
            company you are targeting, and what feedback you got from each mock
            interview.
          </p>
        </section>
      </main>
    </div>
  );
}
