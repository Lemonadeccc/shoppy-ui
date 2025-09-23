"use server";

import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "./auth-cookie";
import { redirect } from "next/navigation";

export default async function logout() {
  let authCookie = await cookies();
  authCookie.delete(AUTHENTICATION_COOKIE);
  redirect("/auth/login");
}
