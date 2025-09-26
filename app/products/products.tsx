import getProducts from "./actions/get-products";
import ProductsGrid from "./product-gird";

export default async function Products() {
  const products = await getProducts();

  return (
    <ProductsGrid products={products} />
  )
}
