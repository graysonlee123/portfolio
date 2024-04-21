import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import Columns from '@/components/Columns'
import Header from '@/components/Header'
import classNames from 'classnames'
import utilStyles from '../../styles/utils.module.scss'

export default function Articulate() {
  const colImageSize =
    '(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)'

  return (
    <Layout project="articulate" projects={['embark', 'precision']}>
      <Head>
        <title>Grayson Gantek | Articulate</title>
      </Head>
      <Container className={classNames(utilStyles.articleGrid)}>
        <div className={classNames(utilStyles.imgMockup)}>
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
        <Header header="The idea" maxWidth="80ch">
          <p>
            After making a request from the server to Smashing Magazine, I get back the contents of
            the requested page, in HTML. Then I parse out the data from the page that I need and
            store it in a database. Lastly, I can display all of the archived content to the users
            that come to visit Articulate.
          </p>
        </Header>
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
          <Header header="Tech stack">
            <p>
              There needed to be three core functionalities to make this project work. A database,
              an HTML parser, and a HTTP request library. For this, I selected MongoDB, Cheerio, and
              Axios, respectively.
            </p>
            <p>
              The tech stack works very well with one another. Additionally, I avoided using a
              front-end framework, which saved development time and lowered the risk of
              over-complicating a simple project. Sometimes, it&apos;s nice to work in plain HTML
              and CSS when that&apos;s all you need.
            </p>
          </Header>
        </Columns>
        <Columns>
          <Header header="Lessons learned">
            <p>
              One of the trickiest parts about the project was figuring out how to structure and
              store all of the data. I decided to strip all of the HTML from the teaser of the
              article and save it as a simple string. I could have saved it as encoded HTML
              entities, but I actually ended up preferring the look of the plain teaser.
              Additionally, it&apos;s more future-proof in case one article has something unexpected
              or complicated in the teaser.
            </p>
          </Header>
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
      </Container>
    </Layout>
  )
}
