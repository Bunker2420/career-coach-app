"use client";

import emailvalidate from "../../../../../actions/admin/validate";
import styles from "../../../../css/studentauth.module.css";

export default function AdminEmailValidatePage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <h1>Admin Access</h1>
          <p>
            Enter your registered admin email to continue to secure login.
          </p>
        </header>

        <form action={emailvalidate} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="admin-email">Admin email</label>
            <input
              id="admin-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="admin@careercoach.app"
              required
            />
          </div>

          <button type="submit" className={styles.primaryButton}>
            Continue
          </button>
        </form>

        <footer className={styles.footer}>
          <span>Note:</span>
          <span>Only authorized admins can proceed beyond this step.</span>
        </footer>
      </div>
    </div>
  );
}
