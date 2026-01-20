import styles from "../../../css/terms.module.css";

export const metadata = {
  title: "Terms & Conditions | CareerCoach",
  description:
    "Simple summary of the main terms for using the CareerCoach platform as a student, coach, or partner.",
};

export default function TermsPage() {
  return (
    <div className={styles["cc-terms-wrapper"]}>
      <header className={styles["cc-terms-hero"]}>
        <h1 className={styles["cc-terms-title"]}>Terms & conditions</h1>
        <p className={styles["cc-terms-subtitle"]}>
          This page gives a plain‑language overview of how CareerCoach is meant
          to be used and what we expect from all users.
        </p>
      </header>

      <main className={styles["cc-terms-main"]}>
        <section className={styles["cc-terms-card"]}>
          <h2 className={styles["cc-terms-section-title"]}>Using CareerCoach</h2>
          <ul className={styles["cc-terms-list"]}>
            <li>
              By creating an account or using the platform, you agree to use
              CareerCoach only for learning, mentoring, and related activities.
            </li>
            <li>
              You are responsible for keeping your login details safe and for
              all activity that happens in your account. 
            </li>
            <li>
              You agree not to misuse the platform, attempt to break security,
              or disturb other users.
            </li>
          </ul>
        </section>

        <section className={styles["cc-terms-card"]}>
          <h2 className={styles["cc-terms-section-title"]}>
            Students, coaches, and content
          </h2>
          <ul className={styles["cc-terms-list"]}>
            <li>
              Students are expected to follow honest learning practices and not
              share exam or interview questions that are meant to be private.
            </li>
            <li>
              Coaches should provide genuine guidance and keep student data
              confidential, using it only to support learning.
            </li>
            <li>
              Unless clearly stated, CareerCoach does not promise any specific
              job, package, or placement result. 
            </li>
          </ul>
        </section>

        <section className={styles["cc-terms-card"]}>
          <h2 className={styles["cc-terms-section-title"]}>
            Platform changes and availability
          </h2>
          <ul className={styles["cc-terms-list"]}>
            <li>
              Features in CareerCoach may change, improve, or be removed over
              time as the platform is updated.
            </li>
            <li>
              While effort is made to keep the service available and stable,
              there may be occasional downtime or bugs.
            </li>
            <li>
              CareerCoach is provided on an “as is” basis, without guarantees
              that it will be error‑free or always available.
            </li>
          </ul>
        </section>

        <section className={styles["cc-terms-card"]}>
          <h2 className={styles["cc-terms-section-title"]}>Respect and safety</h2>
          <ul className={styles["cc-terms-list"]}>
            <li>
              Users must not harass, abuse, or discriminate against others
              inside messages, feedback, or any shared content.
            </li>
            <li>
              Accounts may be limited or removed if users repeatedly break these
              basic rules or misuse the platform.
            </li>
          </ul>
        </section>

        <section className={styles["cc-terms-card"]}>
          <h2 className={styles["cc-terms-section-title"]}>Legal note</h2>
          <p className={styles["cc-terms-text"]}>
            This page is a simplified explanation of the main ideas behind our
            terms and conditions. A full legal Terms of Service document will be
            added as CareerCoach grows and should be treated as the final,
            binding version.
          </p>
          <p className={styles["cc-terms-text"]}>
            For questions about terms or usage, you can contact{" "}
            <span className={styles["cc-terms-email"]}>
              legal@careercoach.app
            </span>{" "}
          </p>
        </section>
      </main>
    </div>
  );
}
