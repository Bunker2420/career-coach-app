import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../../../lib/authSession";
import connectDB from "../../../../lib/db";
import coachdtls from "../../../../../Models/CoachUser/coachdetails";
import coach from "../../../../../Models/CoachUser/coach"; // coach auth model
import styles from "../../../../css/studentCoaches.module.css";

export default async function StudentCoachesPage() {
  await connectDB();
  const session = await getSessionFromCookie();

  if (!session) redirect("/student/authRequired");
  if (session.role !== "student") redirect("/unauthorized");

  const coaches = await coachdtls
    .find({})
    .populate("coachId", "username") 
    .lean(); 

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>Available coaches</h1>
      <p className={styles.subtitle}>
        Choose a coach and view detailed profile to subscribe.
      </p>

      <div className={styles.grid}>
        {coaches.map((c) => (
          <a
            key={c._id}
            href={`/student/coaches/${c._id.toString()}`}
            className={styles.card}
          >
            <div className={styles.header}>
              <div className={styles.avatarCircle}>
                {c.coachId.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className={styles.name}>{c.coachId.username}</h2>
                <p className={styles.roleText}>{c.company}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
