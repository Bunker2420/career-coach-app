# 🚀 Career Coach Platform

> A full-stack career guidance application built with Next.js, connecting students with structured career roadmaps and expert coaching.

## 🔗 Live Demo
**[Visit the Live Site Here](https://career-coach-app-teal.vercel.app)** *(Hosted on Vercel)*

---

## 🧐 Overview
The **Career Coach Platform** solves the confusion students face when choosing a career path. It provides curated roadmaps, skill breakdowns, and a connection to mentors. 

Unlike static guidance sites, this is a dynamic **Full-Stack Application** featuring Role-Based Access Control (RBAC), real-time database interactions, and a responsive UI.

## ✨ Key Features

### 🔐 Authentication & Security
* **Role-Based Access Control:** Distinct portals for **Admins**, **Students**, and **Coaches**.
* **Secure Sessions:** Custom JWT-based authentication with HTTP-only cookies.
* **Middleware Protection:** Edge-compatible middleware to protect sensitive routes (`/admin`, `/dashboard`).

### 🎓 Student Portal
* **Dynamic Roadmaps:** Interactive guides for career paths (Full Stack, AI, DevOps, etc.).
* **Detailed Insights:** Salary ranges, required skills, and "Day in the Life" breakdowns.
* **Profile Management:** Custom profile creation with progress tracking.

### Coach portal
* Manages his active students...
* Give Feedback to his students...

### 🛡️ Admin Dashboard
* **Content Management:** CRUD operations for adding new Subjects and Roadmaps.
* **User Management:** Ability to view and remove students/coaches.
* **Cascade Deletion:** Smart database logic to clean up related data when a user is removed.
* Adding new content to the app...

---

## 🛠️ Tech Stack
| Domain | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React, CSS Modules, Responsive Design |
| **Backend** | Next.js Server Actions, Node.js API Routes |
| **Database** | MongoDB Atlas, Mongoose (Schema Validation) |
| **Auth** | JSON Web Tokens (JWT), Jose, Bcrypt (Password Hashing) |
| **Deployment** | Vercel (Edge Network) |

---
🔮 Future Improvements
[ ] Real-time Chat: Implementing Socket.io for live student-coach messaging.
[ ] Payment Gateway: Stripe integration for premium mentorship booking.

👨‍💻 Author
Ruthwick - Full Stack Developer & DSA Enthusiast
[leetcode profile](https://leetcode.com/u/RuthTalk/)
