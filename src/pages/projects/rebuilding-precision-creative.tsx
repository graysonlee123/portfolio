import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import Columns from '@/components/Columns'
import Header from '@/components/Header'
import classNames from 'classnames'
import utilStyles from '../../styles/utils.module.scss'

export default function RebuildingPrecisionCreative() {
  const colImageSize =
    '(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)'

  return (
    <Layout project={'precision'} projects={['work', 'articulate']}>
      <Head>
        <title>Grayson Gantek | Rebuilding Precision Creative</title>
      </Head>
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
          <Header header="The workflow">
            <p>
              The project went through 3 internal phases. Phase 1 was deciding what tech stack to
              use. In phase 2, I built our custom theme, components, and structure for the site. And
              finally, in phase 3, we got all of our content added and reviewed the entire site. We
              then launched, and achieved these great Lighthouse scores.
            </p>
          </Header>
        </Columns>
        <Columns>
          <Header header="Tech stack" maxWidth="80ch">
            <p>
              During phase 1, we determined that our website needs to be editable by our marketing
              team. That means we needed a CMS. Since the original site was in WordPress, we decided
              to stick with it, since it is reliable, open-source, developer friendly, and
              non-developer friendly.
            </p>
            <p>
              In phase 2, I created our own &quot;block&quot; system that the marketing team can use
              with pre-determined components. It&apos;s like a custom website builder. This is done
              with PHP, Sass, and an extendable WordPress plugin called Advanced Custom Fields.
              These blocks can be added and edited on any page however they needed to be. This means
              we (the developer team) still have full control over the code that ends up being on
              the front-end. We&apos;re also using an image optimization and sizing CDN, so our team
              does not need to worry about images having an impact on the site&apos;s speed.
            </p>
          </Header>
          <div className={classNames(utilStyles.imgMockup)}>
            <Image
              src="/images/precision-code-01.png"
              width="2048"
              height="2240"
              alt="Precision Creative website code snippet"
              sizes={colImageSize}
              layout="responsive"
            />
          </div>
        </Columns>
        <Header header="Obstacles" maxWidth="80ch">
          <p>
            There were a few obstacles faced when working on this project. One of the most difficult
            things I faced was not having code splitting. Our JavaScript is served globally since it
            is a pretty small file. However, I decided that splitting up the CSS is to done manually
            by a developer using Sass modules. Each page has its own Sass file that pulls in the
            Sass that it needs, and no more. This ensures unused CSS isn&apos;t sent to pages where
            it isn&apos;t needed.
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
        <Header header="Lessons learned" maxWidth="80ch">
          <p>
            Besides the code splitting obstacle, there were more lessons to be learned. The most
            important were making the back-end easy and usable for the team, organizing the custom
            theme structure, optimization techniques, and lessons about what to do and what not to
            do for achieving good core web vital scores, including LCP (Largest Contentful Paint),
            CLS (Cumulative Layout Shift), and FID (First Input Delay). Preloading critical fonts in
            the head tag, following accessability guidelines, proper image sizing and optimization,
            and limited third-party scripts drastically help these scores.
          </p>
        </Header>
      </Container>
    </Layout>
  )
}
