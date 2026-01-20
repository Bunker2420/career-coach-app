"use client";

import Link from "next/link";
import uservalidate from "../../../../../actions/admin/login";
import styles from "../../../../css/studentauth.module.css";

export default function AdminLoginPage() {
  const togglePassword = (checked) => {
    const pwd = document.getElementById("admin-password");
    if (pwd) pwd.type = checked ? "text" : "password";
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <h1>Admin Login</h1>
          <p>Sign in to manage subjects, coaches, and student data.</p>
        </header>

        <form action={uservalidate} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="admin-username">Username</label>
            <input
              id="admin-username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Enter admin username"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
            />
            <label className={styles.showRow}>
              <input
                type="checkbox"
                onClick={(e) => togglePassword(e.currentTarget.checked)}
              />
              <span>Show password</span>
            </label>
          </div>

          <div className={styles.linksRow}>
            <Link
              href="/admin/forgot-password"
              className={styles.linkText}
            >
              Forgot password?
            </Link>
          </div>

          <button type="submit" className={styles.primaryButton}>
            Login
          </button>
        </form>

        <footer className={styles.footer}>
          <span>Security tip:</span>
          <span>Use this on trusted devices only.</span>
        </footer>
      </div>
    </div>
  );
}
