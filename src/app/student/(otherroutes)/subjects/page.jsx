import connectDB from "../../../../lib/db.js";
import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../../../lib/authSession.js";
import Link from "next/link.js";
import subject from "../../../../../Models/Admin/subject.js";
import styles from "../../../../css/stdnthome.module.css";
import student from "../../../../../Models/StudentUser/student.js";

export default async function StudentHome() {
  await connectDB();
  const session = await getSessionFromCookie();

  // if(!session || session.role !== 'student')
  // {
  //   redirect('/student/authRequired');
  // }
  // const data = await student.findById(session.id);
  const subjects = await subject.find({}).lean();

  return (
    <div className={styles.studentHome}>
      <h1 className={styles.studentHomeTitle}>
        {/* Welcome back {data.username || "Student"}..... */}
      </h1>

      <div className={styles.studentHomeGrid}>
        {subjects.map((sub) => (
          <div
            key={sub._id?.toString()}
            className={styles.studentCard}
          >
            <div className={styles.studentCardAccent} />
            <h2 className={styles.studentCardTitle}>{sub.title}</h2>
            <p className={styles.studentCardCode}>{sub.code}</p>
            <p className={styles.studentCardDesc}>
              {sub.shortDescription ||
                (sub.description
                  ? sub.description.slice(0, 110) + "..."
                  : "")}
            </p>
            <div className={styles.studentCardFooter}>
              <Link
                href={`/student/subjects/${sub.slug}`}
                className={styles.studentCardLink}
              >
                Explore {sub.slug}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
