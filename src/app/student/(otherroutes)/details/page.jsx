import storeDetails from "../../../../../actions/student/studentdata";
import styles from "../../../../css/studentauth.module.css";
import { getSessionFromCookie } from "../../../../lib/authSession.js";
import { redirect } from "next/navigation";
import student from "../../../../../Models/StudentUser/student";

export default async function DetailsForm() {
  const session = await getSessionFromCookie();
  if(!session)
  {
    redirect('/authRequired');
  }
  if(session.role !== 'student')
  {
    redirect('/unauthorized');
  }
  const getData = await student.findById(session.id);
  if(getData.hasCompletedProfile === true)
  {
    redirect('/student/successsaved');
  }
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <h1>Complete Your Profile</h1>
          <p>
            Tell CareerCoach about your education and goals to get better
            roadmaps and resources.
          </p>
        </header>

        <form action={storeDetails} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="degree">Degree</label>
            <select id="degree" name="degree" required className={styles.select}>
              <option value="">Choose an option</option>
              <option value="MTech">M.Tech</option>
              <option value="BTech">B.Tech</option>
              <option value="Degree">Degree</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="college">College</label>
            <input
              id="college"
              name="college"
              type="text"
              placeholder="Enter your college name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="year">Current year of study</label>
            <input
              id="year"
              name="year"
              type="number"
              min="1"
              max="8"
              placeholder="e.g. 3"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="goal">Career goal</label>
            <input
              id="goal"
              name="goal"
              type="text"
              placeholder="e.g. Frontend Developer at a product company"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="preferredDomain">
              Preferred domain
              <span className={styles.hint}>
                {" "}
                (you can refine this later)
              </span>
            </label>
            <select
              id="preferredDomain"
              name="preferredDomain"
              required
              className={styles.select}
            >
              <option value="">Choose an option</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="DevOps">DevOps</option>
              <option value="Mobile Dev">Mobile Dev</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>
          </div>

          <button type="submit" className={styles.primaryButton}>
            Save profile
          </button>
        </form>

        <footer className={styles.footer}>
          <span>This helps us show you the right roadmap and interview prep.</span>
        </footer>
      </div>
    </div>
  );
}
