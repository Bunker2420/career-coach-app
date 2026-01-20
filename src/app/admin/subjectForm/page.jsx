"use server";

import SubjectSubmit from "../../../../actions/admin/subject";
import styles from "../../../css/sbform.module.css";
import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../../lib/authSession";

export default async function SubjectForm() {
  const session = await getSessionFromCookie();
    if(!session || session.role !== 'admin')
    {
      redirect('/admin/authRequired');
    }
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <h1>Create New Career Subject</h1>
          <p>
            Define the role, skills, responsibilities, growth path, and resources for this career.
          </p>
        </header>

        <form action={SubjectSubmit} className={styles.form}>
          {/* Basic Info */}
          <div className={styles.section}>
            <h2>Basic Info</h2>
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Frontend Developer"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="slug">Slug</label>
                <input
                  id="slug"
                  name="slug"
                  type="text"
                  placeholder="frontend-developer"
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="shortDescription">Short description</label>
              <input
                id="shortDescription"
                name="shortDescription"
                type="text"
                placeholder="Create responsive web UIs using HTML, CSS, and JavaScript."
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="detailedDescription">Detailed description</label>
              <textarea
                id="detailedDescription"
                name="detailedDescription"
                rows={4}
                placeholder="Explain what this role does day-to-day, team structure, tech ecosystem, etc."
                required
              />
            </div>
          </div>

          {/* Skills & Responsibilities */}
          <div className={styles.section}>
            <h2>Skills & Responsibilities</h2>

            <div className={styles.field}>
              <label htmlFor="skills">
                Key skills{" "}
                <span className={styles.hint}>
                  (@ separated: HTML, CSS, JavaScript, React)
                </span>
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                placeholder="HTML, CSS, JavaScript, React, Git"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="responsibilities">
                Core responsibilities{" "}
                <span className={styles.hint}>
                  (@ separated bullet points)
                </span>
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                rows={3}
                placeholder="Build responsive UI components, Collaborate with designers, Optimize performance"
                required
              />
            </div>

            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label htmlFor="salaryRange">Salary range</label>
                <input
                  id="salaryRange"
                  name="salaryRange"
                  type="text"
                  placeholder="₹4 LPA - ₹12 LPA (India) / $60k - $110k (US)"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="examples">
                  Real-world examples{" "}
                  <span className={styles.hint}>
                    (@ separated: ex: UI Dev at Swiggy)
                  </span>
                </label>
                <input
                  id="examples"
                  name="examples"
                  type="text"
                  placeholder="Frontend Engineer at Swiggy, UI Developer at Zomato"
                  required
                />
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className={styles.section}>
            <h2>Resources</h2>
            <p className={styles.subText}>
              Add at least one high-quality resource (course, article, roadmap).
            </p>

            <div className={styles.resourceRow}>
              <div className={styles.field}>
                <label htmlFor="rtitle1">Resource title</label>
                <input
                  id="rtitle"
                  name="rtitle"
                  type="text"
                  placeholder="Frontend Developer Roadmap"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="rurl1">Resource URL</label>
                <input
                  id="rurl"
                  name="rurl"
                  type="url"
                  placeholder="https://roadmap.sh/frontend"
                />
              </div>
            </div>
          </div>

          {/* Future, Challenges, Interviews */}
          <div className={styles.section}>
            <h2>Future & Interviews</h2>

            <div className={styles.field}>
              <label htmlFor="futureScope">
                Future scope{" "}
                <span className={styles.hint}>
                  (@ separated: ex: Lead Engineer, Frontend Architect)
                </span>
              </label>
              <textarea
                id="futureScope"
                name="futureScope"
                rows={3}
                placeholder="Senior Frontend Engineer, Frontend Architect, Engineering Manager"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="challenges">
                Common challenges{" "}
                <span className={styles.hint}>
                  (@ separated bullet points)
                </span>
              </label>
              <textarea
                id="challenges"
                name="challenges"
                rows={3}
                placeholder="Keeping up with JS ecosystem, Handling complex state, Performance tuning"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="commonInterviewQuestions">
                Interview questions{" "}
                <span className={styles.hint}>
                  (@ separated)
                </span>
              </label>
              <textarea
                id="commonInterviewQuestions"
                name="commonInterviewQuestions"
                rows={3}
                placeholder="Explain virtual DOM, Difference between var/let/const, What is hoisting?"
                required
              />
            </div>
          </div>

          {/* Career progression */}
          <div className={styles.section}>
            <h2>Career progression</h2>
            <p className={styles.subText}>
              Define one key stage; later you can extend to multiple.
            </p>

            <div className={styles.field}>
              <label htmlFor="cptitle">Stage title</label>
              <input
                id="cptitle"
                name="cptitle"
                type="text"
                placeholder="Junior Frontend Developer"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="cpbulletPoints">
                Stage bullet points{" "}
                <span className={styles.hint}>
                  (use "@" between stages and "|" between points inside a stage)
                </span>
              </label>
              <textarea
                id="cpbulletPoints"
                name="cpbulletPoints"
                rows={3}
                placeholder="Build UI components, Fix bugs, Write unit tests"
              />
            </div>
          </div>

          {/* Certifications & Tools */}
          <div className={styles.sectionTwoCol}>
            <div>
              <h2>Certifications</h2>
              <div className={styles.field}>
                <label htmlFor="ctitle">Cert title</label>
                <input
                  id="ctitle"
                  name="ctitle"
                  type="text"
                  placeholder="Meta Front-End Developer Certificate"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="cdescription">Cert description</label>
                <textarea
                  id="cdescription"
                  name="cdescription"
                  rows={3}
                  placeholder="Industry-recognized certificate for frontend foundations and React."
                />
              </div>
            </div>

            <div>
              <h2>Key tools</h2>
              <div className={styles.field}>
                <label htmlFor="ktitle">Tool name</label>
                <input
                  id="ktitle"
                  name="ktitle"
                  type="text"
                  placeholder="VS Code"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="kdescription">Tool description</label>
                <textarea
                  id="kdescription"
                  name="kdescription"
                  rows={3}
                  placeholder="Primary code editor used for frontend development."
                />
              </div>
            </div>
          </div>

          {/* FAQs */}
        <div className={styles.section}>
          <h2>FAQs</h2>
          <p className={styles.subText}>
            Add common questions students might have about this career path.
          </p>

          <div className={styles.field}>
            <label htmlFor="faqQuestions">
              FAQ questions{" "}
              <span className={styles.hint}>
                (@ separated: ex: What does a frontend developer do?, Is this role remote friendly?)
              </span>
            </label>
            <textarea
              id="faqQuestions"
              name="faqQuestions"
              rows={3}
              placeholder="What does a frontend developer do?, Is this role remote friendly?, How much coding is required?"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="faqAnswers">
              FAQ answers{" "}
              <span className={styles.hint}>
                (@ separated, match order with questions)
              </span>
            </label>
            <textarea
              id="faqAnswers"
              name="faqAnswers"
              rows={3}
              placeholder="They build user interfaces..., Many companies offer remote or hybrid options..., You will write code daily but also collaborate with designers and product managers."
            />
          </div>
        </div>


          {/* Submit */}
          <div className={styles.actions}>
            <button type="submit" className={styles.primaryButton}>
              Save subject
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
