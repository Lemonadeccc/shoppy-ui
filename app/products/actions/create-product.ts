"use server";

import { revalidateTag } from "next/cache";
import { getHeaders, post } from "../../common/util/fetch";
import { API_URL } from "@/app/common/constants/api";

export default async function createProduct(formData: FormData) {
  const response = await post("products", formData);
  // 这里的"image"和 create-product-modal.tsx里的  <input type="file" name="image" style={fileInputStyles} onChange={ 中的name对应上
  const productImage = formData.get("image");
  if (productImage instanceof File && !response.error) {
    await uploadProductImage(response.data.id, productImage);
  }
  revalidateTag("products");
  return response;
}

async function uploadProductImage(productId: number, file: File) {
  const formData = new FormData();
  // 这里的"iamge"要与后端的products.controller.ts里的文件上传的   FileInterceptor('image', {  一致
  formData.append("image", file);
  await fetch(`${API_URL}/products/${productId}/image`, {
    body: formData,
    method: "POST",
    headers: await getHeaders(),
  });
}
