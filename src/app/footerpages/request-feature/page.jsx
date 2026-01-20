import styles from "../../../css/request-feature.module.css";

export const metadata = {
  title: "Request a Feature | CareerCoach",
  description:
    "Suggest new features or improvements for the CareerCoach platform.",
};

export default function RequestFeaturePage() {
  return (
    <div className={styles["cc-feature-wrapper"]}>
      <header className={styles["cc-feature-hero"]}>
        <h1 className={styles["cc-feature-title"]}>Request a feature</h1>
        <p className={styles["cc-feature-subtitle"]}>
          Share ideas that would make CareerCoach more useful or smoother for
          students, coaches, or admins.
        </p>
      </header>

      <main className={styles["cc-feature-main"]}>
        <section className={styles["cc-feature-card"]}>
          <h2 className={styles["cc-feature-section-title"]}>
            Tell us about your idea
          </h2>
          <form className={styles["cc-feature-form"]}>
            <div className={styles["cc-feature-field-group"]}>
              <label className={styles["cc-feature-label"]}>
                Your email (optional)
              </label>
              <input
                type="email"
                className={styles["cc-feature-input"]}
                placeholder="you@example.com"
              />
            </div>

            <div className={styles["cc-feature-field-group"]}>
              <label className={styles["cc-feature-label"]}>
                Short feature title
              </label>
              <input
                type="text"
                className={styles["cc-feature-input"]}
                placeholder="Example: Weekly summary email for students"
              />
            </div>

            <div className={styles["cc-feature-field-group"]}>
              <label className={styles["cc-feature-label"]}>
                How would this help you?
              </label>
              <textarea
                className={styles["cc-feature-textarea"]}
                rows={3}
                placeholder="Explain when you would use this feature and how it improves your experience in CareerCoach."
              />
            </div>

            <div className={styles["cc-feature-field-group"]}>
              <label className={styles["cc-feature-label"]}>
                Anything else? (optional)
              </label>
              <textarea
                className={styles["cc-feature-textarea"]}
                rows={3}
                placeholder="Extra notes, examples, or similar apps that already have this."
              />
            </div>

            <button
              type="button"
              className={styles["cc-feature-submit-button"]}
            >
              Submit idea 
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
