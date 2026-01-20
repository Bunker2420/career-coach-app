"use client";

import Link from "next/link";
import stsignup from "../../../../../actions/student/studentsignup";
import styles from "../../../../css/studentauth.module.css";

export default function StudentSignup() {
  const togglePasswords = (checked) => {
    const pwd = document.getElementById("password");
    const cpwd = document.getElementById("confirmPassword");
    const type = checked ? "text" : "password";
    if (pwd) pwd.type = type;
    if (cpwd) cpwd.type = type;
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <h1>Create Student Account</h1>
          <p>Sign up to improve your skills, projects, and placement readiness.</p>
        </header>

        <form action={stsignup} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Choose a unique username"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Minimum 8 characters"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Re-enter your password"
              required
            />
            <label className={styles.showRow}>
              <input
                type="checkbox"
                onClick={(e) => togglePasswords(e.currentTarget.checked)}
              />
              <span>Show passwords</span>
            </label>
          </div>

          <button type="submit" className={styles.primaryButton}>
            Sign up
          </button>
        </form>

        <footer className={styles.footer}>
          <span>Already have an account?</span>
          <Link href="/student/login" className={styles.linkText}>
            Log in
          </Link>
        </footer>
      </div>
    </div>
  );
}
