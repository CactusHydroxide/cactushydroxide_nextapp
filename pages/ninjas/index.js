import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    //only runs on build time
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
            </Head>
            <div>
                <h1>Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>

    );
}

export default Ninjas;