import { get } from "@/app/common/util/fetch";
import { Product } from "../interface/product.interface";

export default async function getProduct(productId: number) {
  return get<Product>(`products/${productId}`);
}
