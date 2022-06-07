import Image from 'next/image'
import Layout from '@/components/layout'
import Container from '@/components/container'
import Columns from '@/components/columns'
import Header from '@/components/header'
import classNames from 'classnames'
import utilStyles from '../../styles/utils.module.scss'

export default function RebuildingPrecisionCreative() {
  const colImageSize =
    '(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)'

  return (
    <Layout project={'precision'} projects={['articulate']}>
      <Container className={classNames(utilStyles.articleGrid)}>
        <div className={classNames(utilStyles.imgMockup)}>
          <Image
            src="/images/precision-website-mockup-01.jpg"
            width="2960"
            height="1680"
            alt="Precision Creative website screenshot"
            sizes="(min-width: 91.125rem) 77.375rem, calc(85vw - 2px)"
            layout="responsive"
            quality={85}
            priority
          />
        </div>
        <Columns>
          <div className={utilStyles.imgMockup}>
            <Image
              src="/images/precision-website-metrics-01.png"
              width="1450"
              height="1506"
              alt="Precision Creative Lighthouse scores"
              sizes={colImageSize}
              layout="responsive"
            />
          </div>
          <Header header="The goal" level="h2">
            <p>
              Our overall goal with this project was to acheive higher site
              speed scores in the eyes of Google, as well as clean up the
              backend of our site.
            </p>
            <p>
              We ended up acheiving this goal with very good Google Lighthouse
              scores. Now, with scoring perfect performance, best practices, and
              SEO scores, we have seen improved results with website traffic.
            </p>
          </Header>
        </Columns>
        <Header header="Tech stack challenges" level="h2" center>
          <p>
            Our website needs to be editable by our marketing team. That means
            we need a good CMS. Having built most of our client websites using
            WordPress, we decided to stick with it since it is familiar,
            reliable, open-source, and fast (if used correctly).
          </p>
          <p>
            I created our own &quot;block&quot; system with pre-determined
            layouts that the marketing team can add, remove, and customize on a
            per-page basis. This means we (the developer team) still have full
            control over the code that ends up being on the front-end.
            We&apos;re also using an image optimization CDN so the marketing
            team does not need to worry about image optimization.
          </p>
        </Header>
        <Columns>
          <div className={utilStyles.imgMockup}>
            <Image
              src="/images/precision-website-mockup-02.png"
              width="2880"
              height="13818"
              alt="Precision Creative website screenshot"
              sizes={colImageSize}
              layout="responsive"
            />
          </div>
          <div>
            <div className={utilStyles.imgMockup}>
              <Image
                src="/images/precision-website-mockup-03.png"
                width="2880"
                height="7325"
                alt="Precision Creative website screenshot"
                sizes={colImageSize}
                layout="responsive"
              />
            </div>
            <div className={classNames(utilStyles.mtLg, utilStyles.imgMockup)}>
              <Image
                src="/images/precision-website-mockup-04.png"
                width="2880"
                height="7794"
                alt="Precision Creative website screenshot"
                sizes={colImageSize}
                layout="responsive"
              />
            </div>
          </div>
        </Columns>
        <Header header="Overcoming obstacles" level="h2" maxWidth="74ch" center>
          <p>
            There were a few obstacles faced when working through this project.
            One of the most difficult things about working in WordPress is not
            having code splitting. Our JavaScript is served globally, however
            splitting up the CSS is done manually by me using Sass components.
            Each page has its own stylesheet that pulls in what it needs, and no
            more. This ensures unused CSS isn&apos;t sent to pages where it
            isn&apos;t needed.
          </p>
        </Header>
      </Container>
    </Layout>
  )
}
