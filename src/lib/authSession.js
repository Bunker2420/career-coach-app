"use server"
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getSessionFromCookie() {
  const cookieStore = await cookies();
  const token = (cookieStore).get("auth_token")?.value;
  const JWT_SECRET = "WorkHardToGetSuccess";
  if (!token) return null;

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return {
      id: payload.id,
      role: payload.role,
    };
  } catch {
    return null;
  }
}
