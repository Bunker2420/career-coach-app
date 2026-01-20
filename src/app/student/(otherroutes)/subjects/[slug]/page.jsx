import connectDB from "../../../../../lib/db.js";
import subject from "../../../../../../Models/Admin/subject"; // Mongoose model
import styles from "../../../../../css/sbjt.module.css";
import { redirect } from "next/navigation.js";
import { getSessionFromCookie } from "../../../../../lib/authSession.js";
import Link from "next/link.js";

export default async function subjectdtls({params}) {
   const session = await getSessionFromCookie();
   if(!session)
   {
    redirect('/student/authRequired');
   }
   if(session.role !== 'student')
   {
    redirect('/unauthorized');
   }
   const resolvedParams = await params;  
   const slug = resolvedParams.slug;

  await connectDB();

  if (!slug) {
    throw new Error("slug missing, props=" + JSON.stringify(props));
  }

  const subjectDoc = await subject.findOne({ slug: slug }).lean();
  if (!subjectDoc) notFound();


  return (
    <main className={styles.subjectPage}>
      {/* Hero */}
      <header className={styles.subjectHero}>
        <p className={styles.subjectTag}>Career guide</p>
        <h1 className={styles.subjectTitle}>{subjectDoc.title}</h1>
      </header>

      {/* Layout: main + side */}
      <div className={styles.subjectLayout}>
        <div className={styles.subjectMain}>
          {/* Overview */}
          <Link href="https://roadmap.sh/">For more detailed roadmap and content visit this page</Link>
          <section className={styles.subjectSection}>
            <h2 className={styles.subjectSectionTitle}>Overview</h2>
            <p className={styles.subjectBody}>{subjectDoc.detailedDescription}</p>
          </section>

          {/* Skills */}
          {subjectDoc.skills?.length > 0 && (
            <section className={styles.subjectSection}>
              <h2 className={styles.subjectSectionTitle}>Key skills</h2>
              <ul className={styles.chipList}>
                {subjectDoc.skills.map((s, i) => (
                  <li key={i} className={styles.chip}>
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Responsibilities */}
          {subjectDoc.responsibilities?.length > 0 && (
            <section className={styles.subjectSection}>
              <h2 className={styles.subjectSectionTitle}>Responsibilities</h2>
              <ul className={styles.bulletList}>
                {subjectDoc.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Examples */}
          {subjectDoc.examples?.length > 0 && (
            <section className={styles.subjectSection}>
              <h2 className={styles.subjectSectionTitle}>Real-world examples</h2>
              <ul className={styles.bulletList}>
                {subjectDoc.examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Future scope */}
          {subjectDoc.futureScope?.length > 0 && (
            <section className={styles.subjectSection}>
              <h2 className={styles.subjectSectionTitle}>Future scope</h2>
              <ul className={styles.bulletList}>
                {subjectDoc.futureScope.map((fs, i) => (
                  <li key={i}>{fs}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges */}
          {subjectDoc.challenges?.length > 0 && (
            <section className={styles.subjectSection}>
              <h2 className={styles.subjectSectionTitle}>Challenges</h2>
              <ul className={styles.bulletList}>
                {subjectDoc.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Interview questions */}
          {subjectDoc.commonInterviewQuestions?.length > 0 && (
            <section className={styles.subjectSection}>
              <h2 className={styles.subjectSectionTitle}>
                Common interview questions
              </h2>
              <ul className={styles.bulletList}>
                {subjectDoc.commonInterviewQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Career progression */}
          {subjectDoc.careerProgression?.length > 0 && (
            <section className={styles.subjectSection}>
              <h2 className={styles.subjectSectionTitle}>Career progression</h2>
              <ol className={styles.stageList}>
                {subjectDoc.careerProgression.map((stage, i) => (
                  <li key={i} className={styles.stageItem}>
                    <div className={styles.stageHeader}>
                      <span className={styles.stageBadge}>Step {i + 1}</span>
                      <h3 className={styles.stageTitle}>{stage.title}</h3>
                    </div>
                    {stage.bulletPoints?.length > 0 && (
                      <ul className={styles.bulletList}>
                        {stage.bulletPoints.map((bp, j) => (
                          <li key={j}>{bp}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* FAQs */}
          {subjectDoc.faqs?.length > 0 && (
            <section className={styles.subjectSection}>
              <h2 className={styles.subjectSectionTitle}>FAQs</h2>
              <div className={styles.faqList}>
                {subjectDoc.faqs.map((faq, i) => (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      {faq.question}
                    </summary>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className={styles.subjectSidebar}>
          {subjectDoc.salaryRange && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Salary range</h3>
              <p className={styles.sidebarHighlight}>{subjectDoc.salaryRange}</p>
              <p className={styles.sidebarText}>
                Actual salary depends on company, location, and experience.
              </p>
            </div>
          )}

          {subjectDoc.resources?.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Top resources</h3>
              <ul className={styles.sidebarLinks}>
                {subjectDoc.resources.map((res, i) => (
                  <li key={i}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {res.title || res.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {subjectDoc.certifications?.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Useful certifications</h3>
              <ul className={styles.sidebarList}>
                {subjectDoc.certifications.map((cert, i) => (
                  <li key={i}>
                    <span className={styles.sidebarBold}>{cert.title}</span>
                    <span className={styles.sidebarText}>
                      {" "}
                      – {cert.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {subjectDoc.keytools?.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Key tools</h3>
              <ul className={styles.sidebarList}>
                {subjectDoc.keytools.map((tool, i) => (
                  <li key={i}>
                    <span className={styles.sidebarBold}>{tool.title}</span>
                    <span className={styles.sidebarText}>
                      {" "}
                      – {tool.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
