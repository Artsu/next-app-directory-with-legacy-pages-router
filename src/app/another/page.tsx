import Image from 'next/image'
import styles from '../page.module.css'
import Link from "next/link";

export default function AnotherPage() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          App directory page
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
  )
}
