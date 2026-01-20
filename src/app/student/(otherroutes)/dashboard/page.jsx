import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../../../lib/authSession";
import  detail  from "../../../../../Models/StudentUser/studentdetails.js";
import styles from "../../../../css/stdashboard.module.css";

export default async function StudentDashboardPage() {
  const session = await getSessionFromCookie();

  if (!session) {
    redirect("/student/authRequired");
  }

  if (session.role !== "student") {
    redirect("/unauthorized");
  }

  const doc = await detail.findOne({ studentId: session.id }).lean();;

  return (<div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Student profile</h1>
        <p className={styles.subtitle}>
          These are the details you shared with CareerCoach.
        </p>

        <div className={styles.row}>
          <div className={styles.label}>Full name</div>
          <div className={styles.value}>{doc.name}</div>
        </div>

        <div className={styles.rowGroup}>
          <div className={styles.row}>
            <div className={styles.label}>Degree</div>
            <div className={styles.value}>{doc.education.degree}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.label}>Year of study</div>
            <div className={styles.value}>{doc.education.year}</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>College</div>
          <div className={styles.value}>{doc.education.college}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Career goal</div>
          <div className={styles.value}>{doc.goals}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Preferred domain</div>
          <div className={styles.tags}>
            {doc.preferredDomain.map((d) => (
              <span key={d} className={styles.tag}>
                {d}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          {/* <a href="/student/details" className={styles.secondaryButton}>
            Edit details
          </a> */}
          <a href="/student/subjects" className={styles.primaryButton}>
            Go to subjects
          </a>
        </div>
      </div>
    </div>
  );
}
