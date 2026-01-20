"use server"
import styles from '../../../css/AdminContent.module.css';
import Link from 'next/link';
import { getSessionFromCookie } from '../../../lib/authSession';
import { redirect } from 'next/navigation';

export default async function AdminContent() {
  const session = await getSessionFromCookie();
    if(!session || session.role !== 'admin')
    {
      redirect('/admin/authRequired');
    }
  return (
    <div className={styles.dashboardContainer}>
      
      {/* Welcome Message Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to the Admin Page</h1>
        <p className={styles.subtitle}>
          You can access and manage students and coaches, manage subscriptions, 
          and upload new subjects materials.
        </p>
      </section>

      {/* Action Grid */}
      <section className={styles.grid}>
        
        {/* Students & Coaches Card */}
        <Link href="/admin/studentsi" className={styles.link}>
            <div className={styles.card}>
            <div className={styles.icon}>👥</div>
            <h2 className={styles.cardTitle}>Students & Coaches</h2>
            <p className={styles.cardText}>
                View detailed profiles, verify coach credentials, and manage student enrollments.
            </p>
            </div>
        </Link>

        {/* Subscriptions Card */}
        <Link href="/admin/subscriptions" className={styles.link}>
            <div className={styles.card}>
            <div className={styles.icon}>💳</div>
            <h2 className={styles.cardTitle}>Manage Subscriptions</h2>
            <p className={styles.cardText}>
                Track revenue, view active plans, and manage billing cycles for users.
            </p>
            </div>
        </Link>

        {/* Upload Materials Card */}
        <Link href="/admin/subjectForm" className={styles.link}>
            <div className={styles.card}>
            <div className={styles.icon}>📂</div>
            <h2 className={styles.cardTitle}>Upload Materials</h2>
            <p className={styles.cardText}>
                Add new subject notes, video lectures, and assignment resources.
            </p>
            </div>
        </Link>

      </section>
    </div>
  );
}