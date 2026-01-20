"use client";
import { useState } from "react";
import Link from "next/link";
import coachlogin from "../../../../../actions/coach/login";
import styles from "../../../../css/studentauth.module.css";

export default function CoachLoginPage() {
  const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function handleSubmit(formData) {
      setLoading(true);
      setError(""); // Clear previous errors
  
      // Call the server action
      const result = await coachlogin(formData);
  
      // If we get a result back, it means there was an error
      // (because a success would have redirected us away)
      if (result?.error) {
        setError(result.error);
        setLoading(false); // Stop loading spinner so they can try again
      }
    }
  const togglePassword = (checked) => {
    const pwd = document.getElementById("coach-password");
    if (pwd) pwd.type = checked ? "text" : "password";
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <h1>Coach Login</h1>
          <p>Sign in to guide students, review profiles, and share resources.</p>
        </header>

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
            <label htmlFor="coach-password">Password</label>
            <input
              id="coach-password"
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
              href="/forgot-password"
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
          <span>New coach?</span>
          <Link href="/coach/signup" className={styles.linkText}>
            Create a coach account
          </Link>
        </footer>
      </div>
    </div>
  );
}
