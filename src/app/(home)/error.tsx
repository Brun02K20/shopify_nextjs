"use client"
import styles from "app/sass/error.module.sass"
import { useEffect } from "react"

// para reintentar la peticion en caso de que ocurra un error y se renderice esto
interface ErrorProps {
    error: Error
    reset: () => void
}

export default function Error({error, reset}: ErrorProps) {
    // una vez se termine de montar el componente de error
    useEffect(() => {
        console.log(error)
    }, [])

    return (
        <div className={styles.ErrorContainer}>
            <h1>:(</h1>
            <p>Oops, Something went wrong</p>
            <button onClick={reset}>RETRY</button>
        </div>
    )
}