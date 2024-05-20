// como esoy usando Typescript, debo declarar las propiedades que reciba mi componente
interface CategoryProps {
    params: {
        categories: string[]
    },
    searchParams: {
        search?: string;
    };
}

export default function Category(props: CategoryProps) {
    const {categories} = props.params
    console.log(categories)

    return (
        <h1>Categoria: {categories}</h1>
    )
}