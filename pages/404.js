import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Error.module.css'


const Error = () => {

    const router = useRouter()
    useEffect(()=> {
        
       setTimeout(()=>{
        // router.go('/')
        router.push('/')
       },5000)
    })
    
    return (
        <main className={styles.error}>
            <section className={styles.error__section}>

                    <Image width={250} height={250} src="/icon-dead.svg" alt='icon dead' ></Image>
                        <h1 className={styles.error__title}>Game over</h1>
                    <p>Page not Found <strong>404</strong></p>
                        <Link href="/">
                            <button>Go Back</button>
                        </Link>
                        
            </section>
        </main>
    )
}

export default Error;