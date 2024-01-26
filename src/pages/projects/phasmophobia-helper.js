import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/layout'
import Container from '@/components/container'
import Columns from '@/components/columns'
import Header from '@/components/header'
import classNames from 'classnames'
import utilStyles from '../../styles/utils.module.scss'

export default function PhasmophobiaHelper() {
  const colImageSize =
    '(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)'

  return (
    <Layout project="phasmo" projects={['embark', 'precision']}>
      <Head>
        <title>Grayson Gantek | Phasmophobia Helper</title>
      </Head>
      <Container className={classNames(utilStyles.articleGrid)}>
        <div className={classNames(utilStyles.imgMockup)}>
          <Image
            src="/images/phasmo.png"
            width="2732"
            height="1536"
            alt="Embark screenshot"
            sizes="(min-width: 91.125rem) 77.375rem, calc(85vw - 2px)"
            layout="responsive"
            quality={85}
            priority
          />
        </div>
        <Header header="The idea" level="h2" maxWidth="80ch">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc
            felis, venenatis ut dolor sit amet, interdum fringilla dui. Nullam
            sed rutrum lorem, nec mollis enim. Nunc id faucibus risus. Morbi
            arcu orci, dignissim eget ipsum et, dignissim venenatis nisl.
            Vestibulum mi diam, interdum vel orci sit amet, blandit condimentum
            neque. Cras a arcu quis sem tincidunt suscipit. Proin eu finibus
            risus, et consequat ante. Cras sed gravida nisi, eu venenatis quam.
            Duis ut aliquet nunc, ac venenatis nisl. Nunc ut massa a quam
            ultricies lobortis. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Donec varius posuere
            ipsum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc
              felis, venenatis ut dolor sit amet, interdum fringilla dui. Nullam
              sed rutrum lorem, nec mollis enim. Nunc id faucibus risus. Morbi
              arcu orci, dignissim eget ipsum et, dignissim venenatis nisl.
              Vestibulum mi diam, interdum vel orci sit amet, blandit
              condimentum neque. Cras a arcu quis sem tincidunt suscipit. Proin
              eu finibus risus, et consequat ante. Cras sed gravida nisi, eu
              venenatis quam. Duis ut aliquet nunc, ac venenatis nisl. Nunc ut
              massa a quam ultricies lobortis. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Donec
              varius posuere ipsum.
            </p>
          </Header>
        </Columns>
        <Columns>
          <Header header="Obstacles" level="h2" maxWidth="80ch">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc
              felis, venenatis ut dolor sit amet, interdum fringilla dui. Nullam
              sed rutrum lorem, nec mollis enim. Nunc id faucibus risus. Morbi
              arcu orci, dignissim eget ipsum et, dignissim venenatis nisl.
              Vestibulum mi diam, interdum vel orci sit amet, blandit
              condimentum neque. Cras a arcu quis sem tincidunt suscipit. Proin
              eu finibus risus, et consequat ante. Cras sed gravida nisi, eu
              venenatis quam. Duis ut aliquet nunc, ac venenatis nisl. Nunc ut
              massa a quam ultricies lobortis. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Donec
              varius posuere ipsum.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc
            felis, venenatis ut dolor sit amet, interdum fringilla dui. Nullam
            sed rutrum lorem, nec mollis enim. Nunc id faucibus risus. Morbi
            arcu orci, dignissim eget ipsum et, dignissim venenatis nisl.
            Vestibulum mi diam, interdum vel orci sit amet, blandit condimentum
            neque. Cras a arcu quis sem tincidunt suscipit. Proin eu finibus
            risus, et consequat ante. Cras sed gravida nisi, eu venenatis quam.
            Duis ut aliquet nunc, ac venenatis nisl. Nunc ut massa a quam
            ultricies lobortis. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Donec varius posuere
            ipsum.
          </p>
        </Header>
      </Container>
    </Layout>
  )
}
