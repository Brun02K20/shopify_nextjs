"use client"
import styles from "app/sass/global-error.module.sass"
import Image from "next/image"

export default function GlobalError({reset}: ErrorPageProps) {
    return (
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Something went wrong</h1>
            <Image 
                src="/images/error.png"
                alt="Error image"
                width={500}
                height={500}
            />
            <p className={styles.Error__message}>Something in the website is not working :( Please retry later.</p>
            <button className={styles.Error__button} onClick={reset}>RETRY</button>
        </main>
    )
}