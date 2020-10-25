import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-177558063-1')

const ogImageUrl = 'https://thamamur.com/profile.png'

export default ({ titlePre = '', ogImageReplace = undefined }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} | 濱村 拓巳 (@thamamur)` : ''}</title>
        <meta
          name="description"
          content="heyでSTORESのプロダクトマネージャーをしています。2019年に静岡県に移住しました。"
        />
        <meta
          name="og:title"
          content={titlePre ? `${titlePre} | 濱村 拓巳 (@thamamur)` : ''}
        />
        <meta property="og:image" content={ogImageReplace || ogImageUrl} />
        <meta name="twitter:site" content="@thamamur" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageReplace || ogImageUrl} />
      </Head>
    </header>
  )
}
