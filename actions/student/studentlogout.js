"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../src/lib/authSession";

export default async function logout() {
  const cookieStore = await cookies();
  const session = await getSessionFromCookie();
  const role = session?.role;

  // 1. DELETE THE COOKIE (Now we know it is always at '/')
  // We use the exact same settings used to create it.
  cookieStore.set("auth_token", "", { 
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",      // IMPORTANT: Matches the path in your login files
    maxAge: 0       // Expires instantly
  });

  // 2. REDIRECT DIRECTLY TO LOGIN (Bypass your root page)
  // We do NOT go to '/' because your app/page.js would redirect us back in.
  
  if (role === 'student') {
    redirect("/student/login");
  } 
  else if (role === 'admin') {
    redirect("/admin/login");
  } 
  else if (role === 'coach') {
    redirect('/coach/login');
  } 
  else {
    // If we don't know the role, go to the main login
    redirect('/login'); 
  }
}