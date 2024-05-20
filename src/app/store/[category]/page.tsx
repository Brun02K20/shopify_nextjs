// como esoy usando Typescript, debo declarar las propiedades que reciba mi componente
interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps) {
    const {category} = props.params

    return (
        <h1>Categoria: {category}</h1>
    )
}