"use server";

import { API_URL } from "@/constants/api";
import { getErrorMessage } from "@/util/errors";
import { post } from "@/util/fetch";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
