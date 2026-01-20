import styles from "../../../css/help-center.module.css";
import Link from "next/link";

export const metadata = {
  title: "Help Center | CareerCoach",
  description: "Get help with using CareerCoach, fixing issues, and contacting support.",
};

export default function HelpCenterPage() {
  return (
    <div className={styles["cc-help-wrapper"]}>
      <header className={styles["cc-help-hero"]}>
        <h1 className={styles["cc-help-title"]}>CareerCoach Help Center</h1>
        <p className={styles["cc-help-subtitle"]}>
          Find answers, fix issues, and learn how to get the best out of CareerCoach as a student or coach.
        </p>

        <div className={styles["cc-help-search-box"]}>
          <input
            type="text"
            placeholder="Search help articles (e.g. \student dashboard\, \feedback\, \sessions\)"
            className={styles["cc-help-search-input"]}
          />
          <button className={styles["cc-help-search-button"]}>Search</button>
        </div>

        <p className={styles["cc-help-hint"]}>
          Tip: Start with the quick guides below before raising a support ticket.
        </p>
      </header>

      <main className={styles["cc-help-main"]}>
        <section className={styles["cc-help-grid"]}>
          <article className={styles["cc-help-card"]}>
            <h2 className={styles["cc-help-card-title"]}>Getting started</h2>
            <p className={styles["cc-help-card-text"]}>
              Learn how CareerCoach works for new users, from creating your account to completing your first coaching session.
            </p>
            <ul className={styles["cc-help-list"]}>
              <li>Student onboarding checklist</li>
              <li>Coach onboarding checklist</li>
              <li>Understanding dashboards and roles</li>
            </ul>
          </article>

          <article className={styles["cc-help-card"]}>
            <h2 className={styles["cc-help-card-title"]}>Student help</h2>
            <p className={styles["cc-help-card-text"]}>
              Stuck on subjects, feedback, or progress tracking? Explore guides focused on the student experience in CareerCoach.
            </p>
            <ul className={styles["cc-help-list"]}>
              <li>Viewing subject roadmap and tasks</li>
              <li>How feedback from your coach works</li>
              <li>Fixing common login and access issues</li>
            </ul>
          </article>

          <article className={styles["cc-help-card"]}>
            <h2 className={styles["cc-help-card-title"]}>Coach help</h2>
            <p className={styles["cc-help-card-text"]}>
              Manage students, share structured feedback, and track progress without getting lost in the UI.
            </p>
            <ul className={styles["cc-help-list"]}>
              <li>Viewing your active students list</li>
              <li>Adding feedback and next‑step plans</li>
              <li>Best practices for weekly reviews</li>
            </ul>
          </article>

          <article className={styles["cc-help-card"]}>
            <h2 className={styles["cc-help-card-title"]}>Account & security</h2>
            <p className={styles["cc-help-card-text"]}>
              Keep your CareerCoach account safe and up to date while you focus on learning and mentoring.
            </p>
            <ul className={styles["cc-help-list"]}>
              <li>Updating profile information</li>
              <li>Managing login and device access</li>
              <li>Reporting suspicious activity</li>
            </ul>
          </article>
        </section>

        <section className={styles["cc-help-secondary"]}>
          <div className={styles["cc-help-column"]}>
            <h3 className={styles["cc-help-column-title"]}>Report a problem</h3>
            <p className={styles["cc-help-column-text"]}>
              If something is broken or you see an error on any page, share a short description and screenshot so the team can fix it quickly.
            </p>
            <button className={styles["cc-help-primary-button"]}>
              <Link href="\footerpages\report-bug" className={styles["cc-help-primary-button"]}>Report a bug</Link>
            </button>
          </div>

          <div className={styles["cc-help-column"]}>
            <h3 className={styles["cc-help-column-title"]}>Request a feature</h3>
            <p className={styles["cc-help-column-text"]}>
              Have an idea that would make CareerCoach more useful for students or coaches? Suggest it and it may be added to the roadmap.
            </p>
            <button className={styles["cc-help-secondary-button"]}>
              <Link href="\footerpages\request-feature" className={styles["cc-help-secondary-button"]}>Request a feature</Link>
            </button>
          </div>

          <div className={styles["cc-help-column"]}>
            <h3 className={styles["cc-help-column-title"]}>Contact support</h3>
            <p className={styles["cc-help-column-text"]}>
              For account issues or urgent help, reach out to support and include your registered email and role (student or coach).
            </p>
            <button className={styles["cc-help-outline-button"]}>
              <Link href="\footerpages\contact-support" className={styles["cc-help-outline-button"]}>Email support</Link>
            </button>
          </div>
        </section>

        <section className={styles["cc-help-faq"]}>
          <h2 className={styles["cc-help-faq-title"]}>Quick FAQs</h2>
          <div className={styles["cc-help-faq-item"]}>
            <h4>Is CareerCoach free for students?</h4>
            <p>
              CareerCoach can start with a free learning plan. If premium features are enabled later, you will see clear pricing and upgrade options inside the app.
            </p>
          </div>
          <div className={styles["cc-help-faq-item"]}>
            <h4>How do I track my progress?</h4>
            <p>
              Your dashboard shows subjects, current status, and coach feedback so you can see what to focus on this week instead of feeling overloaded.
            </p>
          </div>
          <div className={styles["cc-help-faq-item"]}>
            <h4>Can a coach handle multiple students?</h4>
            <p>
              Yes, coaches can see all active students in one place and quickly jump into each profile to add feedback or update progress.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
