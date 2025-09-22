import { cookies } from "next/headers";

export default async function authenticated() {
  // Next.js dynamic APIs like `cookies()` must be awaited
  // to correctly mark the route as dynamic.

  return !!(await cookies().get("Authentication"));
}
