import styles from "../../../css/opensource.module.css";

export const metadata = {
  title: "Open Source on GitHub | CareerCoach",
  description:
    "Information about the upcoming open source version of CareerCoach on GitHub.",
};

export default function OpenSourcePage() {
  return (
    <div className={styles["cc-os-wrapper"]}>
      <header className={styles["cc-os-hero"]}>
        <h1 className={styles["cc-os-title"]}>Open source on GitHub</h1>
        <p className={styles["cc-os-subtitle"]}>
          An open version of CareerCoach for students, mentors, and colleges is
          currently in development.
        </p>
      </header>

      <main className={styles["cc-os-main"]}>
        <section className={styles["cc-os-card"]}>
          <p className={styles["cc-os-text"]}>
            We are actively building the open‑source repo for CareerCoach so you
            can explore the codebase, contribute features, and use it inside
            your own communities.
          </p>
          <p className={styles["cc-os-text"]}>
            This page is not ready yet. Once the first public version is
            stable, you will see:
          </p>
          <ul className={styles["cc-os-list"]}>
            <li>The official GitHub link for the CareerCoach project.</li>
            <li>Simple instructions to run the app locally.</li>
            <li>Guidelines on how to report issues and send pull requests.</li>
          </ul>
          <p className={styles["cc-os-text-strong"]}>
            For now, please check back later. The open‑source release is on the
            roadmap and will be announced inside CareerCoach as soon as it is
            ready.
          </p>
        </section>
      </main>
    </div>
  );
}
