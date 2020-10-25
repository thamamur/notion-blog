import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-177558063-1')

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ titlePre = '', ogImageReplace = undefined }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} | @thamamur` : ''}</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta
          name="og:title"
          content={titlePre ? `${titlePre} | @thamamur` : ''}
        />
        <meta property="og:image" content={ogImageReplace || ogImageUrl} />
        <meta name="twitter:site" content="@thamamur" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageReplace || ogImageUrl} />
      </Head>
    </header>
  )
}
