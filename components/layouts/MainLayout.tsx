import { FC } from 'react'

import Head from 'next/head'

import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

interface LayoutProps {
  children: React.ReactNode
}


export const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Elvin</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}
