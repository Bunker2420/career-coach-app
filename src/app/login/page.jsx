import Link from "next/link";
import styles from "../../css/landing.module.css"; 

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Select your portal to continue</p>

        <div className={styles.grid}>
          
          {/* 1. Student Card */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.studentIcon}`}>🎓</div>
            <h2>Student</h2>
            <p>Access your contents, resume tools, personalized roadmap and guidance.</p>
            <Link href="/student/login" className={styles.button}>
              Student Login &rarr;
            </Link>
          </div>

          {/* 2. Coach Card */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.coachIcon}`}>🧑‍🏫</div>
            <h2>Coach</h2>
            <p>Manage students, review assignments, and schedule sessions.</p>
            <Link href="/coach/login" className={styles.button}>
              Coach Dashboard &rarr;
            </Link>
          </div>

          {/* 3. Admin Card */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.adminIcon}`}>🛡️</div>
            <h2>Admin</h2>
            <p>System settings, user management, and platform analytics.</p>
            <Link href="/admin/validate" className={`${styles.button} ${styles.adminBtn}`}>
              Admin Access &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}