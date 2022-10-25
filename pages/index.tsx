import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
		<div className={styles.container}>
			<Head>
				<title>FindATutor</title>
				<meta name="description" content="We help you get the best tutor" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>Main Content</main>

			<footer className={styles.footer}>Powered by Deepak Singh</footer>
		</div>
	);
}

export default Home
