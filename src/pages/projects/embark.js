import Image from 'next/image'
import Layout from '@/components/layout'
import Container from '@/components/container'
import Columns from '@/components/columns'
import Header from '@/components/header'
import classNames from 'classnames'
import utilStyles from '../../styles/utils.module.scss'

export default function Articulate() {
  const colImageSize =
    '(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)'

  return (
    <Layout project="embark" projects={['articulate', 'precision']}>
      <Container className={classNames(utilStyles.articleGrid)}>
        <div className={classNames(utilStyles.imgMockup)}>
          <Image
            src="/images/embark-website-mockup-01.jpg"
            width="2560"
            height="1453"
            alt="Embark screenshot"
            sizes="(min-width: 91.125rem) 77.375rem, calc(85vw - 2px)"
            layout="responsive"
            quality={85}
            priority
          />
        </div>
        <Header header="The idea" level="h2" maxWidth="80ch">
          <p>
            For a while, I&apos;ve stored my bookmarks in my Chrome bookmarks
            bar. I wanted more features, so I moved my bookmarks into Notion,
            which ended up being a lot of extra steps to get to a link. After
            that, I tried a bookmarks manager. None of them really left me
            satisfied, so I thought, why not build my own home page?
          </p>
          <p>
            I still use a bookmarks manager for things like articles,
            documentation, ideas, and tools that I want to save but I don&apos;t
            visit often. Embark is not that. The idea behind Embark is to put
            links (and more) to where you go most often on your new tab or
            window.
          </p>
        </Header>
        <Columns>
          <div className={utilStyles.imgMockup}>
            <Image
              src="/images/embark-code-01.png"
              width="1360"
              height="826"
              alt="Embark code"
              sizes={colImageSize}
              layout="responsive"
            />
          </div>
          <Header header="Tech stack" level="h2" maxWidth="80ch">
            <p>
              I decided to use Next.js because it&apos;s familiar and scaleable.
              I integrated it with TypeScript, ESLint, and Prettier as well to
              enforce future updates and contributions. For deployment, the
              project is available on{' '}
              <a
                className={utilStyles.textLink}
                href="https://hub.docker.com/r/ggantek/embark/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docker Hub
              </a>{' '}
              as well as the ability to be built from source.
            </p>
            <p>
              I decided to do this project without a database for a few reasons.
              One reason is complexity. In my opinion, a database structure is
              not needed in order to store URLs. I liked the idea of organizing
              your links in a JSON file, making it easily portable and editable.
            </p>
          </Header>
        </Columns>
        <Columns>
          <Header header="Obstacles" level="h2" maxWidth="80ch">
            <p>
              One tricky part of the project was loading the JSON into the
              front-end of the project. There are a lot of ways to do this each
              with their own pros and cons. I chose Incremental Static
              Regeneration, which is a feature of Next.js. It allows me to
              update static pages after the site has been built. This way, the
              data can be delivered statically without needing to rebuild the
              site.
            </p>
            <p>
              The reason I chose this route is because you get all the benefits
              of statically generated sites, while having it feel like a
              server-side render. When a request is made to Embark, the cached
              page is shown initially while Next.js is regenerating the new page
              in the background. All the user has to do is refresh to see their
              updated content.
            </p>
          </Header>
          <div className={classNames(utilStyles.imgMockup)}>
            <Image
              src="/images/embark-code-02.png"
              width="1360"
              height="632"
              alt="Embark code"
              sizes={colImageSize}
              layout="responsive"
            />
          </div>
        </Columns>
        <Header header="Lessons learned" level="h2" maxWidth="80ch">
          <p>
            This is my first open-source TypeScript project. Working with
            TypeScript has been a challenge, but I clearly see the value of it.
            Setting types to variables is something that I didn&apos;t realize
            had so many benefits - it&apos;s great for contributing, safer
            production environments, and faster writing with Intellisense, just
            to name a few. Moving forward, I will consider using TypeScript for
            most projects.
          </p>
        </Header>
      </Container>
    </Layout>
  )
}
