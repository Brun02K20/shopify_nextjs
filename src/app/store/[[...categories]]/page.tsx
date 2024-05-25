import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify";

// como esoy usando Typescript, debo declarar las propiedades que reciba mi componente
interface CategoryProps {
    params: {
        categories: string[]
    },
    searchParams: {
        search?: string;
    };
}

export default async function Category(props: CategoryProps) {
    const products = await getProducts()
    return (
        <ProductsWrapper products={products} />
    )
}