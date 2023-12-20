import Image from 'next/image'
import styles from './page.module.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <main className={styles.main}>
      <Breadcrumb spacing='120px' separator= ' ' fontWeight='medium' fontSize='large'>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Brian Manomaisupat</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Resume</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Experience</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Projects</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className={styles.title}>
        <h1>
          You need the goat, I make it happen
        </h1>
      </div>

      <div className={styles.grid}>
        <h2>
          Pinned Projects <span>-&gt;</span>
        </h2>
        <h2>
           
        </h2>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Project 1 <span>-&gt;</span>
          </h2>
          <p>Yes</p>
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Project 2 <span>-&gt;</span>
          </h2>
          <p>Yes</p>
        </a>
      </div>
    </main>
  )
}
