
interface SinglePorductProps {
  params: { productId: string };
}
export default async function SingleProduct({ params }: SinglePorductProps) {
  return <p>
    SingleProduct {params.productId}
  </p>
}