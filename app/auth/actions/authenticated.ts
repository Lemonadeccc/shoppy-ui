import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "../auth-cookie";

export default async function authenticated() {
  let authCookie = await cookies();
  return !!authCookie.get(AUTHENTICATION_COOKIE)?.value;
}
