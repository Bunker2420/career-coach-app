import { getSessionFromCookie } from "../lib/authSession";
import Header from "./Header";

export default async function HeaderShell() {
  const session = await getSessionFromCookie();
  return <Header session={session} />;
}
