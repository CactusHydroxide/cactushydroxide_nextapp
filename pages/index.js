import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsa, voluptatum ducimus ab error recusandae? Ut molestias incidunt, soluta in error distinctio vero, eaque ex ea, explicabo quibusdam? Porro, quos?</p>
				<p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsa, voluptatum ducimus ab error recusandae? Ut molestias incidunt, soluta in error distinctio vero, eaque ex ea, explicabo quibusdam? Porro, quos?</p>
				<Link href='/ninjas'>
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	)
}
