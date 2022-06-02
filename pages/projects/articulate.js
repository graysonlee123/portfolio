import classNames from 'classnames'
import Image from 'next/image'
import Layout from '/components/layout'
import Columns from '../../components/columns'
import Header from '../../components/header'
import utilStyles from '/styles/utils.module.scss'

export default function Articulate() {
  const colImageSize =
    '(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)'

  return (
    <Layout project="articulate" projects={['precision']}>
      <div
        className={classNames(
          utilStyles.containerLg,
          utilStyles.mb3Xl,
          utilStyles.imgMockup
        )}
      >
        <Image
          src="/images/articulate-website-mockup-01.jpg"
          width="2960"
          height="1680"
          alt="Articulate screenshot"
          sizes="(min-width: 91.125rem) 77.375rem, calc(85vw - 2px)"
          layout="responsive"
          quality={85}
          priority
        />
      </div>
      <Columns>
        <div className={utilStyles.imgMockup}>
          <Image
            className={classNames(utilStyles.imgMockup)}
            src="/images/articulate-website-mockup-02.png"
            width="2732"
            height="1536"
            alt="Articulate screenshot"
            sizes={colImageSize}
            layout="responsive"
          />
        </div>
        <Header header="The idea" level="h2">
          <p>
            Using Axios, I am able to make an HTTP request from the server to{' '}
            Smashing Magazine and get back HTML. Then, I take the contents of
            the webpage and parse it into usable objects using Cheerio. Lastly,
            I can follow the front-end patterns Smashing Magazine uses on their
            archive pages in order to parse the information for each article.
          </p>
        </Header>
      </Columns>
      <div className={classNames(utilStyles.containerLg, utilStyles.my3Xl)}>
        <Header header="Tech stack" level="h2" maxWidth="64ch">
          <p>
            There needed to be three core functionalities to make this project
            work. A database, an HTML parser, and a HTTP request library. For
            this, I selected MongoDB, Cheerio, and Axios, respectively.
          </p>
          <p>
            The tech stack works very well with one another. Additionally, I was
            able to avoid using a large front-end framework, which saved
            development time and lowered the risk of over-complicating a simple
            project.
          </p>
        </Header>
      </div>
      <Columns>
        <div className={utilStyles.imgMockup}>
          <Image
            src="/images/articulate-website-mockup-04.png"
            width="2650"
            height="1490"
            alt="Articulate screenshot"
            sizes={colImageSize}
            layout="responsive"
          />
        </div>
        <div className={utilStyles.imgMockup}>
          <Image
            src="/images/articulate-website-mockup-03.png"
            width="1366"
            height="1231"
            alt="Articulate screenshot"
            sizes={colImageSize}
            layout="responsive"
          />
        </div>
      </Columns>
      <div className={classNames(utilStyles.containerLg, utilStyles.mt3Xl)}>
        <Header header="Lessons learned" level="h2" maxWidth="74ch">
          <p>
            One of the trickiest parts about the project was figuring out how to
            structure and store all of the data. I decided to strip all of the
            HTML from the teaser of the article and save it as a simple string.
            I could have saved it as encoded HTML entities, but I actually ended
            up preferring the look of the plain teaser. Additionally, it's more
            future-proof in case one article has something wild in the teaser.
          </p>
          <p>
            Another decision was to store comments in their own document in the
            database. The articles have a list of comments by ID attached to
            them. This keeps each kind of data in its own place and is much more
            reliable.
          </p>
        </Header>
      </div>
    </Layout>
  )
}
