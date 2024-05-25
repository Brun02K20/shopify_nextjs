export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main>
            <nav>
                Category Navigation: 
            </nav>
            {children} 
        </main>
    )
}
// siempre debo reornar children porque represena el contenido del layout de la pagina, onda, lo que esta dentro
// de ese layout