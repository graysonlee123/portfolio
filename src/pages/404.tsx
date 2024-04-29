import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Link from '@/components/Link'
import Text from '@/components/Text'
import Head from 'next/head'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Grayson Gantek | 404</title>
      </Head>
      <Hero
        header={
          <>
            Page not found (<em>404</em>)
          </>
        }
        navigation={<Hero.Navigation />}
      />
      <Container>
        <Text>
          <h2>That page is missing</h2>
          <p>
            Sorry about that. Go <Link href="/">back to home</Link>?
          </p>
        </Text>
      </Container>
    </Layout>
  )
}
