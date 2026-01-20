"use client";

import Link from "next/link";
import { useState } from "react";
import studentLogin from "../../../../../actions/student/validlogin";
import styles from "../../../../css/studentauth.module.css";

export default function StudentLoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData) {
    setLoading(true);
    setError(""); // Clear previous errors

    // Call the server action
    const result = await studentLogin(formData);

    // If we get a result back, it means there was an error
    // (because a success would have redirected us away)
    if (result?.error) {
      setError(result.error);
      setLoading(false); // Stop loading spinner so they can try again
    }
  }
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <h1>Student Login</h1>
          <p>Sign in to access our resources.</p>
        </header>

        {/* ERROR MESSAGE DISPLAY */}
        {error && (
          <div className={styles.errorBanner}>
            ⚠️ {error}
          </div>
        )}

        <form action={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
            />
            <label className={styles.showRow}>
              <input
                type="checkbox"
                onClick={(e) => {
                  const input = document.getElementById("password");
                  if (!input) return;
                  input.type = e.currentTarget.checked ? "text" : "password";
                }}
              />
              <span>Show password</span>
            </label>
          </div>

          <div className={styles.linksRow}>
            <Link href="/forgot-password" className={styles.linkText}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className={styles.primaryButton}>
            Login
          </button>
        </form>

        <footer className={styles.footer}>
          <span>New here?</span>
          <Link href="/student/signup" className={styles.linkText}>
            Create a student account
          </Link>
        </footer>
      </div>
    </div>
  );
}
