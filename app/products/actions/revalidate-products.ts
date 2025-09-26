"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateProducts() {
  // 这里的tag是get-products.ts的 ["products"]
  revalidateTag("products");
}
