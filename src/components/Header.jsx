'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../css/header.module.css';
import logout from '../../actions/student/studentlogout.js';

export default function Header({ session }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // 1. Determine the Role
  const role = session?.role;

  // 2. Define Links based on Role
  let navItems = [];

  if (role === 'coach') {
    // --- COACH VIEW ---
    navItems = [
      { name: 'Home', href: '/coach' },           // Redirects to Coach Home
      { name: 'Dashboard', href: '/coach/dashboard' },
      // "Coaches" button is REMOVED for coaches
    ];
  } else if (role === 'admin') {
    // --- ADMIN VIEW ---
    navItems = [
      { name: 'Dashboard', href: '/admin/dashboard' },
      { name: 'coaches', href: '/admin/coaches' },
      { name: 'students', href: '/admin/students' },
      { name: 'subscriptions', href: '/admin/subscriptions' },
      { name: 'uploadsubject', href: '/admin/subjectForm' },
    ];
  } else {
    // --- STUDENT / GUEST VIEW (Default) ---
    navItems = [
      { name: 'Home', href: '/' },
      { name: 'coaches', href: '/student/coaches' }, // Students see coaches
      { name: 'Dashboard', href: '/student/dashboard' },
      { name: 'AI Resume', href: '/student/airesume' },
    ];
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo Section - Redirects based on role */}
        <Link href={role === 'coach' ? '/coach' : role === 'admin' ? '/admin' : '/'} className={styles.logoSection}>
          <div className={styles["cc-logo-wrapper"]}>
            <div className={styles["cc-logo-circle"]}>
              <Image
                src="/nikelogo.jpg"
                alt="Bunkerzz Learning Hub logo"
                fill
                sizes="200px"
              />
            </div>
            <span className={styles["cc-logo-text"]}>CareerCoach</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search careers, skills, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.searchIcon}>🔍</button>
        </div>

        {/* Navigation */}
        <ul className={styles.navLinks}>
          
          {/* Dynamic Links Loop */}
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={styles.navLink}>
                {item.name}
              </Link>
            </li>
          ))}

          {/* Login / Logout Logic (Kept exactly as requested) */}
          {session && (session.role === 'student' || session.role === "coach" || session.role === 'admin') ? (
            <li>
              <Link 
                href="/" 
                className={styles.navLink} 
                onClick={async(e) => {
                  // Prevent default link behavior to allow the server action to run
                  // typically logout redirects, but strict actions might need e.preventDefault()
                  // keeping your original logic:
                  await logout();
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/login" className={styles.navLink}>
                Login
              </Link>
            </li>
          )}
        </ul> 
      </nav>
    </header>
  );
}