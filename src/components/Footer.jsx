import Link from "next/link";
import styles from "../css/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["cc-footer"]}>
      {/* Top 3 columns */}
      <div className={styles["cc-footer-top"]}>
        <div className={styles["cc-footer-column"]}>
          <h3 className={styles["cc-footer-title"]}>Get help</h3>
          <ul className={styles["cc-footer-list"]}>
            <li><Link href="/footerpages/help-center">Help center</Link></li>
            <li><Link href="/footerpages/report-bug">Report a bug</Link></li>
            <li><Link href="/footerpages/request-feature">Request a feature</Link></li>
            <li><Link href="/footerpages/contact-support">Contact support</Link></li>
          </ul>
        </div>

        <div className={styles["cc-footer-column"]}>
          <h3 className={styles["cc-footer-title"]}>Learn &amp; grow</h3>
          <ul className={styles["cc-footer-list"]}>
            <li><Link href="/footerpages/skill-roadmap">Skill roadmap</Link></li>
            <li><Link href="/footerpages/resume-guidelines">Resume guidelines</Link></li>
            <li><Link href="/footerpages/interview-prep">Interview prep guide</Link></li>
            <li><Link href="/footerpages/career-articles">Career articles</Link></li>
          </ul>
        </div>

        <div className={styles["cc-footer-column"]}>
          <h3 className={styles["cc-footer-title"]}>About Us</h3>
          <ul className={styles["cc-footer-list"]}>
            <li><Link href="/footerpages/about">About CareerCoach</Link></li>
            <li><Link href="/footerpages/for-colleges">For colleges &amp; mentors</Link></li>
            <li><Link href="/footerpages/our-mission">Our mission</Link></li>
            <li><Link href="/footerpages/open-source">Open-source on GitHub</Link></li>
          </ul>
        </div>
      </div>

      <hr className={styles["cc-footer-divider"]} />

      {/* Centered bottom section */}
      <div className={styles["cc-footer-bottom"]}>
        <div className={styles["cc-footer-copy"]}>
          © 2026 CareerCoach. All rights reserved.
        </div>

        <div className={styles["cc-footer-social"]}>
          <a href="https://github.com/your-username" aria-label="GitHub">
            <img src="/github.png" alt="" className={styles["cc-footer-icon"]} />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" aria-label="LinkedIn">
            <img src="/linkedin.png" alt="" className={styles["cc-footer-icon"]} />
          </a>
          <a href="https://www.instagram.com/your-profile" aria-label="Instagram">
            <img src="/insta.jpeg" alt="" className={styles["cc-footer-icon"]} />
          </a>
        </div>

        <div className={styles["cc-footer-links"]}>
          <Link href="/footerpages/privacy">Privacy</Link>
          <Link href="/footerpages/terms">Terms</Link>
          <Link href="/footerpages/sitemap">Sitemap</Link>
          <Link href="/footerpages/contact-support">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
