import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";
import { getCollectionProducts, getCollections } from "app/services/shopify/collections";

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
    const {categories} = props.params
    let products = []
    const collections = await getCollections()
    
    if (categories?.length > 0){
        const selectedCollectionId = collections.find(collection => collection.handle === categories[0]).id
        products = await getCollectionProducts(selectedCollectionId)
    } else {
        products = await getProducts()
    }

    console.log("productos: ", products);
    

    return (
        <ProductsWrapper products={products} />
    )
}