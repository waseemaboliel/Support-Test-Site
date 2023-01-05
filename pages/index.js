import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Arsenal from './arsenal'
import Barcelona from './barcelona'
import RealMadrid from './realmadrid'

function loadPage(store) {
  switch (store) {
    case 'arsenal':
      open('/arsenal', '_self')
      break;
    case 'barcelona':
      open('/barcelona', '_self')
      break;
    case 'realmadrid':
      open('/realmadrid', '_self')
      break;
    default: return;
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Support Test Site</title>
        <link rel="icon" href="https://assets.contentsquare.com/design-tokens/assets/brand/logo/favicon.png" sizes="any" />
        <meta charset="utf-8"></meta>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Choose your club
        </h1>
        <li className={styles.grid}>
          <img src={'https://logos-world.net/wp-content/uploads/2020/05/Arsenal-Logo.png'} onClick={() => { loadPage('arsenal') }} height={200} />
          <img src={'https://logos-world.net/wp-content/uploads/2020/04/Barcelona-Logo.png'} onClick={() => { loadPage('barcelona') }} height={200} />
          <img src={'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-symbol.png'} onClick={() => { loadPage('realmadrid') }} height={200} />
        </li>

      </main>

      <footer className={styles.footer}>

      </footer>
      <Script type="text/javascript" src="https://t.contentsquare.net/uxa/2c5142b15f133.js"></Script>
    </div>
  )
}