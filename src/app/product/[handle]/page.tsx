import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export default async function ProductPage({searchParams}: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]
    console.log("producto: ", product);
    
    if (!id) {
        redirect("/store")
    }

    return (
        <ProductView product={product} />
    )
}