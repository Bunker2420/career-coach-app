import Link from "next/link";
import styles from "../../css/Forget.module.css";

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>🚧</div>
        <h1 className={styles.title}>Feature Under Construction</h1>
        <p className={styles.message}>
          I am currently building this feature. Please wait patiently for this update!
        </p>
        <Link href="/" className={styles.backButton}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}