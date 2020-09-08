import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import aboutStyles from '../styles/about.module.css'

export default () => (
  <>
    <Header titlePre="About" />
    <div className={sharedStyles.layout}>
      <div className={aboutStyles.avatar}>
        <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
      </div>

      <h1 style={{ marginTop: 0 }}>Contact</h1>

      <div className={aboutStyles.name}>
        JJ Kasper - Next.js Engineer @{' '}
        <ExtLink href="https://vercel.com">Vercel</ExtLink>
      </div>
    </div>
  </>
)
