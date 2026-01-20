"use client"
import styles from "../../../css/report-bug.module.css";
import { useRouter } from "next/navigation";


export default function ReportBugPage() {
  return (
    <div className={styles["cc-bug-wrapper"]}>
      <header className={styles["cc-bug-hero"]}>
        <h1 className={styles["cc-bug-title"]}>Report a bug</h1>
        <p className={styles["cc-bug-subtitle"]}>
          Use this page to describe any issue you notice while using
          CareerCoach. A clear report helps me to fix it faster for all
          students and coaches.
        </p>
      </header>

      <main className={styles["cc-bug-main"]}>
        <section className={styles["cc-bug-form-card"]}>
          <h2 className={styles["cc-bug-section-title"]}>
            Bug report 
          </h2>

          <form className={styles["cc-bug-form"]}>
            <div className={styles["cc-bug-field-group"]}>
              <label className={styles["cc-bug-label"]}>
                Your email (CareerCoach account)
              </label>
              <input
                type="email"
                className={styles["cc-bug-input"]}
                placeholder="you@example.com"
              />
            </div>

            <div className={styles["cc-bug-field-group"]}>
              <label className={styles["cc-bug-label"]}>Short bug title</label>
              <input
                type="text"
                className={styles["cc-bug-input"]}
                placeholder="Example: Dashboard not loading after login"
              />
            </div>

            <div className={styles["cc-bug-field-group"]}>
              <label className={styles["cc-bug-label"]}>
                What were you trying to do?
              </label>
              <textarea
                className={styles["cc-bug-textarea"]}
                rows={3}
                placeholder="Example: I logged in as a student and opened the DSA subject page."
              />
            </div>

            <div className={styles["cc-bug-field-group"]}>
              <label className={styles["cc-bug-label"]}>
                What happened instead?
              </label>
              <textarea
                className={styles["cc-bug-textarea"]}
                rows={4}
                placeholder="Describe the error, wrong data, or what you saw on the screen."
              />
            </div>
             <button
                type="button"
                className={styles["cc-bug-submit-button"]}
                onClick={() => router.push("/footerpages/report-bug")}
                >
                submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
