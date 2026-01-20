import styles from "../../../css/contact-support.module.css";

export const metadata = {
  title: "Contact Support | CareerCoach",
  description: "Reach the CareerCoach support team for help with your account or app issues.",
};

export default function ContactSupportPage() {
  return (
    <div className={styles["cc-contact-wrapper"]}>
      <header className={styles["cc-contact-hero"]}>
        <h1 className={styles["cc-contact-title"]}>Contact support</h1>
        <p className={styles["cc-contact-subtitle"]}>
          Send a quick message if you are stuck, see an error, or need help with your CareerCoach account.
        </p>
      </header>

      <main className={styles["cc-contact-main"]}>
        <section className={styles["cc-contact-card"]}>
          <h2 className={styles["cc-contact-section-title"]}>
            Support message
          </h2>
          <p className={styles["cc-contact-section-text"]}>
            Keep it simple: who you are, what page you are on, and what you need help with.
          </p>

          <form className={styles["cc-contact-form"]}>
            <div className={styles["cc-contact-field-group"]}>
              <label className={styles["cc-contact-label"]}>Your name</label>
              <input
                type="text"
                className={styles["cc-contact-input"]}
                placeholder="Example: Rahul (student)"
              />
            </div>

            <div className={styles["cc-contact-field-group"]}>
              <label className={styles["cc-contact-label"]}>
                Email to reply to
              </label>
              <input
                type="email"
                className={styles["cc-contact-input"]}
                placeholder="you@example.com"
              />
            </div>

            <div className={styles["cc-contact-field-group"]}>
              <label className={styles["cc-contact-label"]}>
                Short subject
              </label>
              <input
                type="text"
                className={styles["cc-contact-input"]}
                placeholder="Example: Cannot open coach dashboard"
              />
            </div>

            <div className={styles["cc-contact-field-group"]}>
              <label className={styles["cc-contact-label"]}>
                How can we help?
              </label>
              <textarea
                className={styles["cc-contact-textarea"]}
                rows={3}
                placeholder="Describe your question or issue in 2–3 lines."
              />
            </div>

            <button
              type="button"
              className={styles["cc-contact-submit-button"]}
            >
              Send message 
            </button>
          </form>

          <p className={styles["cc-contact-alt"]}>
            For urgent issues you can also reach support at{" "}
            <span className={styles["cc-contact-email"]}>
              support@careercoach.app
            </span>{" "}
          </p>
        </section>
      </main>
    </div>
  );
}
