import Link from "next/link";
import styles from "../../../css/sitemap.module.css";

export const metadata = {
  title: "Sitemap | CareerCoach",
  description:
    "Overview of the main pages and sections available in the CareerCoach web app.",
};

export default function SitemapPage() {
  return (
    <div className={styles["cc-map-wrapper"]}>
      <header className={styles["cc-map-hero"]}>
        <h1 className={styles["cc-map-title"]}>Sitemap</h1>
        <p className={styles["cc-map-subtitle"]}>
          Quick list of important pages in CareerCoach so you can jump directly
          to what you need.
        </p>
      </header>

      <main className={styles["cc-map-main"]}>
        <section className={styles["cc-map-section"]}>
          <h2 className={styles["cc-map-section-title"]}>Core app pages</h2>
          <ul className={styles["cc-map-list"]}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/student/login">Student login</Link>
            </li>
            <li>
              <Link href="/coach/login">Coach login</Link>
            </li>
          </ul>
        </section>

        <section className={styles["cc-map-section"]}>
          <h2 className={styles["cc-map-section-title"]}>Help & support</h2>
          <ul className={styles["cc-map-list"]}>
            <li>
              <Link href="/footerpages/help-center">Help center</Link>
            </li>
            <li>
              <Link href="/footerpages/report-bug">Report a bug</Link>
            </li>
            <li>
              <Link href="/footerpages/request-feature">Request a feature</Link>
            </li>
            <li>
              <Link href="/footerpages/contact-support">Contact support</Link>
            </li>
          </ul>
        </section>

        <section className={styles["cc-map-section"]}>
          <h2 className={styles["cc-map-section-title"]}>Learn & grow</h2>
          <ul className={styles["cc-map-list"]}>
            <li>
              <Link href="/footerpages/skill-roadmap">Skill roadmap</Link>
            </li>
            <li>
              <Link href="/footerpages/resume-guidelines">Resume guidelines</Link>
            </li>
            <li>
              <Link href="/footerpages/interview-prep">Interview prep guide</Link>
            </li>
            <li>
              <Link href="/footerpages/career-articles">Career articles</Link>
            </li>
          </ul>
        </section>

        <section className={styles["cc-map-section"]}>
          <h2 className={styles["cc-map-section-title"]}>About CareerCoach</h2>
          <ul className={styles["cc-map-list"]}>
            <li>
              <Link href="/footerpages/about">About CareerCoach</Link>
            </li>
            <li>
              <Link href="/footerpages/colleges-mentors">
                For colleges & mentors
              </Link>
            </li>
            <li>
              <Link href="/footerpages/our-mission">Our mission</Link>
            </li>
            <li>
              <Link href="/footerpages/opensource">Open source on GitHub</Link>
            </li>
          </ul>
        </section>

        <section className={styles["cc-map-section"]}>
          <h2 className={styles["cc-map-section-title"]}>Legal & policies</h2>
          <ul className={styles["cc-map-list"]}>
            <li>
              <Link href="/footerpages/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/footerpages/terms">Terms & conditions</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
