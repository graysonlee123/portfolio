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
    <Layout project={'work'} projects={['precision', 'embark']}>
      <Container className={classNames(utilStyles.articleGrid)}>
        <div className={classNames(utilStyles.imgMockup)}>
          <Image
            src="/images/work-photo-01.jpg"
            width="1920"
            height="1090"
            alt="Precision Creative meeting"
            sizes="(min-width: 91.125rem) 77.375rem, calc(85vw - 2px)"
            layout="responsive"
            quality={85}
            priority
          />
        </div>
        <Header header="The goals" level="h2" maxWidth="80ch">
          <p>
            After graduating from the bootcamp, I was immediately looking for
            jobs and opportunities I could be a part of. When I reached out to
            Precision, my main goal was to get real experience in the field.
            I&apos;ve now got a couple of years under my belt here, and I have
            grown both as a person and a developer.
          </p>
          <p>
            One of my specific goals with the internship was to use it to gain
            experience to find a traditional job. I pushed myself during that
            time to ask for promotions and rise through the ranks at the company
            instead of starting over at a new company. Luckily, the team loved
            to have me around and now I work as a full-time eployee at Precision
            Creative.
          </p>
        </Header>
        <Columns>
          <div className={utilStyles.imgMockup}>
            <Image
              src="/images/work-photo-03.jpg"
              width="1400"
              height="1437"
              alt="Me working at Precision Creative"
              sizes={colImageSize}
              layout="responsive"
            />
          </div>
          <Header header="Learning experiences" level="h2">
            <p>
              These years have taught me alot about myself. I&apos;ve learned
              that I have a real passion for development, and I have a clearer
              idea of the person that I aspire to be, in and out of my career.
            </p>
            <p>
              I have learned a lot about WordPress, theme and plugin
              development, HubSpot, GitHub, and various other things. Most
              importantly, I now know how to add value to a team, and that
              experience is something that can&apos;t be forgotten.
            </p>
          </Header>
        </Columns>
        <Header header="A thanks" level="h2" maxWidth="80ch">
          <p>
            I&apos;ll always remember my time at Precision Creative. I love the
            people I work with, and I love the work that I get to do. I&apos;ve
            learned many valuable lessons and had an amazing start to my career.
            An extra thank you to{' '}
            <a
              className={utilStyles.textLink}
              href="https://www.linkedin.com/in/jordanklekot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jordan Klekot
            </a>
            , who hired me during a risky time period when we didn&apos;t know
            what was going to happen due to the pandemic, and my direct boss,{' '}
            <a
              className={utilStyles.textLink}
              href="https://www.linkedin.com/in/kyle-huffling-619b9511a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kyle Huffling
            </a>
            , for teaching me so much about being a team player.
          </p>
        </Header>
      </Container>
    </Layout>
  )
}
