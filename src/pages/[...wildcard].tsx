import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

const fetchMock = (path: string) => {
    console.log("Fetch mock hit with path " + path);
    return {
        path,
    }
}

export async function getStaticPaths() {

    return {
        paths: [
            {
                params: {
                    wildcard: ['pages'],
                },
            },
            {
                params: {
                    wildcard: ['another-pages'],
                },
            },
        ],
        fallback: false,
    };
}

export async function getStaticProps(context: { params: { wildcard: string } }) {
    const path = context.params.wildcard;
    return {
        props: fetchMock(path)
    };
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.description}>
                    <p>
                        Pages router example page
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' '}
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>

                <div className={styles.grid}>
                    <Link
                        href="/"
                        className={styles.card}
                    >
                        <h2>
                            Landing page
                        </h2>
                    </Link>

                    <Link
                        href="/another"
                        className={styles.card}
                    >
                        <h2>
                            Second page
                        </h2>
                    </Link>

                    <Link
                        href="/pages"
                        className={styles.card}
                    >
                        <h2>
                            Pages example
                        </h2>
                    </Link>
                </div>
            </main>
        </>
    )
}