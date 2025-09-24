// import getMe from "./get-me";
import CreateProductFab from "./products/create-product/create-product-fab";
import getProducts from "./products/actions/get-products";
import Products from "./products/products";

export default async function Home() {
  // const me = await getMe();
  // console.log(me)

  return (
    <>
      <Products />
      <CreateProductFab />
    </>
  );
}
