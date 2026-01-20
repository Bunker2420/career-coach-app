import Link from "next/link";
import styles from "../../../css/authRequired.module.css";

export default function AuthRequiredPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <div className={styles.badge}>Restricted area</div>

        <h1 className={styles.title}>Please login to continue</h1>

        <p className={styles.subtitle}>
          You need a CareerCoach account to access this page.
          Login if you already have an account, or create a new one in seconds.
        </p>

        <div className={styles.actions}>
          <Link href="/admin/validate" className={styles.primaryButton}>
            Login
          </Link>
        </div>

        <p className={styles.hint}>
          Tip: Once logged in, you can access your admin access.....
        </p>
      </div>
    </div>
  );
}
