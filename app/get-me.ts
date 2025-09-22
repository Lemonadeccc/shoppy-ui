"use server";

import { API_URL } from "@/app/common/constants/api";
import { cookies } from "next/headers";
import { get } from "./common/util/fetch";
export default async function getMe() {
  // const cookieStore = await cookies();
  // const me = await fetch(`${API_URL}/users/me`, {
  //   headers: {
  //     Cookie: cookieStore.toString(),
  //   },
  // });
  // return me.json();
  return await get("users/me");
}
