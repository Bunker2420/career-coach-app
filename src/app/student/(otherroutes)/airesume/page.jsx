import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../../../../src/lib/authSession";
import ResumeInterface from "../../../../components/resumeclient"; // Import your new client component

export default async function ResumePage() {
  // 1. Check Session (Allowed here because this is a Server Component)
  const session = await getSessionFromCookie();

  // 2. Redirect if not logged in
  if (!session) {
    redirect("/student/authRequired");
  }

  // 3. If authorized, render the interactive Client Component
  return <ResumeInterface />;
}