import ExtLink from './ext-link'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import footerStyles from '../styles/footer.module.css'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/thamamur',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/thamamur',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/takumi-hamamura-381a9538/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:thamamur@gmail.cpm?subject=from thamamur.com',
  },
]
export default () => (
  <>
    <footer className={footerStyles.footer}>
      <div className={footerStyles.tweetButton}>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-via="thamamur"
          data-show-count="false"
        >
          Tweet
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </div>
      <div className={footerStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={24} />
            </ExtLink>
          )
        })}
      </div>
      <span>© 2020 Takumi Hamamura</span>
    </footer>
  </>
)
