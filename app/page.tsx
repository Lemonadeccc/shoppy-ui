import getMe from "./get-me";
import CreateProductFab from "./products/create-product-fab";

export default async function Home() {
  const me = await getMe();
  console.log(me)
  return (
    <CreateProductFab />
  );
}
